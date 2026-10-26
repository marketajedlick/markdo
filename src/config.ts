// Site-wide content that is still open. Values in [brackets] are placeholders – see TODO.md.
export const site = {
  name: 'MarkDo',
  title: 'MarkDo – AI pro firmy',
  description:
    'Zavedeme AI do firmy tak, aby opravdu šetřila čas. Najdeme procesy, které vás zdržují, navrhneme řešení na míru a naučíme tým s ním pracovat.',
  ogImage: 'og-placeholder.png',
  email: '[e-mail]',
  emailHref: 'mailto:[email]',
  linkedin: 'https://www.linkedin.com',
  privacyUrl: '#',
  responseTime: '[do X pracovních dnů]',
};

/** Prefixes a path inside /public with the deploy base (e.g. "/markdo2/" on GitHub Pages). */
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}
