# MarkDo – web

Landing page MarkDo (Astro + čisté CSS), nasazená na GitHub Pages.
Zadání a mockup jsou v `reference/` (`README.md`, `reference.html`), otevřené body v `TODO.md`.

## Vývoj

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # statický výstup do dist/
npm run preview
```

## Struktura

- `src/pages/index.astro` – skládá sekce stránky
- `src/components/` – jedna komponenta na sekci (Header, Hero, Problems, Process, WhyUs, CaseStudy, Team, Contact, Footer)
- `src/styles/global.css` – design tokeny (CSS proměnné) a sdílené třídy
- `src/config.ts` – kontakty, odkazy a další údaje, které se ještě doplní
- `src/lib/lead-form.ts` – adaptér pro backend formuláře (Formspree / Netlify Forms / vlastní endpoint)

## Nasazení

Push do `master` spustí `.github/workflows/deploy.yml`, který stránku sestaví a nasadí na GitHub Pages.
Pull requesty se jen sestaví. Jednorázově je potřeba v GitHubu nastavit **Settings → Pages → Source: GitHub Actions**.

## Obrázek pro sdílení

`public/og.png` (1200×630) se ukazuje při sdílení odkazu (LinkedIn, zprávy). Vzniká z komponenty
`src/components/OgCard.astro`: dočasně ji vložte do stránky, sestavte web a stránku vyfoťte v prohlížeči
v rozměru 1200×630 (např. Playwright `element.screenshot`).
