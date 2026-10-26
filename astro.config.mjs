import { defineConfig } from 'astro/config';

// SITE_URL and BASE_PATH are set by the GitHub Pages workflow (actions/configure-pages),
// so the build works both on <user>.github.io/<repo>/ and on a custom domain.
// Locally the site runs from "/".
export default defineConfig({
  site: process.env.SITE_URL || 'https://marketajedlick.github.io',
  base: process.env.BASE_PATH || '/',
});
