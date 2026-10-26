import type { APIRoute } from 'astro';
import { asset } from '../config';

// Every .astro page except the 404, as the trailing-slash URL GitHub Pages serves ("./osobni-udaje.astro" → "osobni-udaje/").
const paths = Object.keys(import.meta.glob('./**/*.astro'))
  .map((file) => file.replace(/^\.\//, '').replace(/\.astro$/, '/').replace(/(^|\/)index\/$/, '$1'))
  .filter((path) => path !== '404/');

export const GET: APIRoute = ({ site }) => {
  const urls = paths.map((path) => `  <url><loc>${new URL(asset(path), site)}</loc></url>`).join('\n');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
