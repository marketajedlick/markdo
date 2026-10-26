// Form backend adapter. Pick a provider with PUBLIC_FORM_PROVIDER (+ PUBLIC_FORM_ENDPOINT),
// see .env.example. Swapping backends never touches the form markup or validation.

export interface Lead {
  name: string;
  company: string;
  email: string;
  size: string;
  message: string;
}

export type FormProvider = 'formsubmit' | 'formspree' | 'netlify' | 'custom';

export const NETLIFY_FORM_NAME = 'kontakt';

export const formConfig = {
  provider: (import.meta.env.PUBLIC_FORM_PROVIDER || undefined) as FormProvider | undefined,
  endpoint: import.meta.env.PUBLIC_FORM_ENDPOINT as string | undefined,
};

async function postJson(url: string, data: Lead | Record<string, string>): Promise<void> {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error(`Form endpoint responded ${res.status}`);
  // FormSubmit answers 200 with {"success": "false"} e.g. before the address is activated.
  const reply = await res.json().catch(() => null);
  if (reply && String(reply.success) === 'false') throw new Error(`Form endpoint refused: ${reply.message ?? ''}`);
}

const adapters: Record<FormProvider, (lead: Lead) => Promise<void>> = {
  // FormSubmit e-mails the keys as labels, so they are in Czech. _replyto makes "Reply" go to the visitor.
  formsubmit: (lead) =>
    postJson(requireEndpoint(), {
      Jméno: lead.name,
      Firma: lead.company || '–',
      'E-mail': lead.email,
      'Počet zaměstnanců': lead.size,
      Zpráva: lead.message,
      _subject: `Nová poptávka z markdo.cz: ${lead.name}`,
      _replyto: lead.email,
      _template: 'table',
    }),
  formspree: (lead) => postJson(requireEndpoint(), lead),
  custom: (lead) => postJson(requireEndpoint(), lead),
  // Netlify Forms only works when the site is hosted on Netlify.
  netlify: async (lead) => {
    const body = new URLSearchParams({ 'form-name': NETLIFY_FORM_NAME, ...lead });
    const res = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
    });
    if (!res.ok) throw new Error(`Netlify Forms responded ${res.status}`);
  },
};

function requireEndpoint(): string {
  if (!formConfig.endpoint) throw new Error('PUBLIC_FORM_ENDPOINT is not set');
  return formConfig.endpoint;
}

export async function submitLead(lead: Lead): Promise<void> {
  if (formConfig.provider) return adapters[formConfig.provider](lead);

  // No backend yet: pretend success in dev so the UI can be tested, fail loudly in production.
  if (import.meta.env.DEV) {
    console.info('[lead-form] no backend configured, lead not sent:', lead);
    await new Promise((resolve) => setTimeout(resolve, 600));
    return;
  }
  throw new Error('Form backend is not configured (PUBLIC_FORM_PROVIDER)');
}
