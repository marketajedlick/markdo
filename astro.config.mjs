import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';

const NBSP = ' ';

/** Czech typography: no one-letter preposition/conjunction at a line end, no number split from its unit. */
function czechNbsp(text) {
  // Twice, so runs like "a v tom" are fully bound.
  for (let i = 0; i < 2; i++) {
    text = text.replace(/(^|[\s(„])([AaIiKkOoSsUuVvZz])[ \t\n]+(?=\S)/g, `$1$2${NBSP}`);
  }
  return text.replace(/(\d)[ \t]+(?=[^\s\d–-])/g, `$1${NBSP}`);
}

/** Applies czechNbsp to text between tags of every built HTML page (scripts, styles and textareas untouched). */
function czechTypography() {
  return {
    name: 'czech-typography',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const root = fileURLToPath(dir);
        const files = (await readdir(root, { recursive: true })).filter((f) => f.endsWith('.html'));
        for (const file of files) {
          const path = join(root, file);
          const html = await readFile(path, 'utf8');
          const out = html.replace(
            /(<(script|style|textarea)\b[\s\S]*?<\/\2>)|(<[^>]*>)|([^<]+)/g,
            (match, raw, _tag, tag, text) => (text ? czechNbsp(text) : match),
          );
          await writeFile(path, out);
        }
      },
    },
  };
}

// SITE_URL and BASE_PATH are set by the GitHub Pages workflow (actions/configure-pages),
// so the build follows whatever Pages serves (custom domain markdo.cz, or <user>.github.io/<repo>/).
// Locally the site runs from "/".
export default defineConfig({
  site: process.env.SITE_URL || 'https://markdo.cz',
  base: process.env.BASE_PATH || '/',
  integrations: [czechTypography()],
});
