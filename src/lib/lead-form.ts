// Form backend adapter. Pick a provider with PUBLIC_FORM_PROVIDER (+ PUBLIC_FORM_ENDPOINT / PUBLIC_FORM_KEY),
// see .env.example. Swapping backends never touches the form markup or validation.

export interface Lead {
  name: string;
  company: string;
  email: string;
  size: string;
  message: string;
  /** Filled the spam trap or sent suspiciously fast. Still delivered, marked in the subject. */
  suspect?: boolean;
}

export type FormProvider = 'web3forms' | 'formsubmit' | 'formspree' | 'netlify' | 'custom';

/** Service name as shown on the privacy page. */
export const FORM_PROVIDER_NAMES: Record<FormProvider, string> = {
  web3forms: 'Web3Forms',
  formsubmit: 'FormSubmit',
  formspree: 'Formspree',
  netlify: 'Netlify',
  custom: 'vlastní server',
};

export const NETLIFY_FORM_NAME = 'kontakt';

export const formConfig = {
  provider: (import.meta.env.PUBLIC_FORM_PROVIDER || undefined) as FormProvider | undefined,
  endpoint: import.meta.env.PUBLIC_FORM_ENDPOINT as string | undefined,
  // Web3Forms access key. Public by design: it only allows sending to the inbox it was issued for.
  key: import.meta.env.PUBLIC_FORM_KEY as string | undefined,
};

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

async function postJson(url: string, data: object): Promise<void> {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(data),
  });
  await checkReply(res);
}

// URL-encoded is a "simple" CORS request: no preflight round trip. (Not multipart: Web3Forms
// mis-decodes non-ASCII field names there, e.g. "Jméno" arrived as "JmÃ©no".)
// keepalive lets the browser finish the request even if the visitor leaves the page right away.
async function postForm(url: string, data: Record<string, string>): Promise<void> {
  const body = new URLSearchParams(data);
  const res = await fetch(url, { method: 'POST', headers: { Accept: 'application/json' }, body, keepalive: true });
  await checkReply(res);
}

async function checkReply(res: Response): Promise<void> {
  if (!res.ok) throw new Error(`Form endpoint responded ${res.status}`);
  // FormSubmit answers 200 with {"success": "false"} e.g. before the address is activated;
  // Web3Forms reports errors as {"success": false}.
  const reply = await res.json().catch(() => null);
  if (reply && String(reply.success) === 'false') throw new Error(`Form endpoint refused: ${reply.message ?? ''}`);
}

// Both e-mail services use the keys as labels, so they are in Czech.
function czechFields(lead: Lead) {
  return {
    Jméno: lead.name,
    Firma: lead.company || '–',
    'E-mail': lead.email,
    'Počet zaměstnanců': lead.size || '–',
    Zpráva: lead.message,
  };
}

const subject = (lead: Lead) => `${lead.suspect ? '[Možná spam] ' : ''}Nová poptávka z markdo.cz: ${lead.name}`;

const adapters: Record<FormProvider, (lead: Lead) => Promise<void>> = {
  web3forms: (lead) => {
    if (!formConfig.key) throw new Error('PUBLIC_FORM_KEY is not set');
    return postForm(formConfig.endpoint || WEB3FORMS_ENDPOINT, {
      access_key: formConfig.key,
      subject: subject(lead),
      from_name: 'Web markdo.cz',
      replyto: lead.email,
      ...czechFields(lead),
    });
  },
  // _replyto makes "Reply" go to the visitor.
  formsubmit: (lead) =>
    postJson(requireEndpoint(), {
      ...czechFields(lead),
      _subject: subject(lead),
      _replyto: lead.email,
      _template: 'table',
    }),
  formspree: (lead) => postJson(requireEndpoint(), lead),
  custom: (lead) => postJson(requireEndpoint(), lead),
  // Netlify Forms only works when the site is hosted on Netlify. It filters spam itself, so no suspect flag.
  netlify: async ({ suspect: _, ...fields }) => {
    const body = new URLSearchParams({ 'form-name': NETLIFY_FORM_NAME, ...fields });
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
