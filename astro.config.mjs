import { defineConfig } from 'astro/config';

// SITE_URL and BASE_PATH are set by the GitHub Pages workflow (actions/configure-pages),
// so the build follows whatever Pages serves (custom domain www.markdo.cz, or <user>.github.io/<repo>/).
// Locally the site runs from "/".
export default defineConfig({
  site: process.env.SITE_URL || 'https://www.markdo.cz',
  base: process.env.BASE_PATH || '/',
});
