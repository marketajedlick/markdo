import type { APIRoute } from 'astro';
import { asset } from '../config';

// Crawling stays allowed even while the gate is on, so search engines can see the pages' noindex.
export const GET: APIRoute = ({ site }) =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL(asset('sitemap.xml'), site)}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
