// Site-wide content that is still open. Values in [brackets] are placeholders – see TODO.md.
export const site = {
  name: 'MarkDo',
  title: 'MarkDo – AI pro firmy',
  description:
    'Zavedeme AI do firmy tak, aby opravdu šetřila čas. Najdeme procesy, které vás zdržují, navrhneme řešení na míru a naučíme tým s ním pracovat.',
  ogImage: 'og-placeholder.png',
  email: '[e-mail]',
  emailHref: 'mailto:[email]',
  linkedin: [
    { label: 'LinkedIn Markéta', href: 'https://www.linkedin.com/in/marketajedlickova/' },
    { label: 'LinkedIn Dodo', href: 'https://www.linkedin.com/in/dodo-dobrik/' },
  ],
  privacyUrl: `${import.meta.env.BASE_URL.replace(/\/$/, '')}/osobni-udaje/`,
};

/** Prefixes a path inside /public with the deploy base (e.g. "/markdo/" when served from <user>.github.io/<repo>/). */
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}

/**
 * Pre-launch password gate. Set `enabled: false` to open the site to everyone.
 * Client-side only (GitHub Pages is static): keeps casual visitors and search engines out,
 * it is not access control – the page source is public.
 */
export const gate = {
  enabled: true,
  // SHA-256 of the password, so the password itself is not stored in the public repo.
  // New hash: printf 'heslo' | shasum -a 256
  passwordSha256: 'ae62fa1246520d267c016a2d1c68d1d4a1eacfd18e81cf5d68f801646b19f9c8',
};
