# TODO – MarkDo web

## Placeholdery v textu (`[takhle]`)
- [ ] Hero vizuál: `[X h týdně]`, `[Y min]` – `src/components/FlowVisual.astro`
- [ ] Firemní program: `[X týdnů]` – `src/components/Process.astro`
- [ ] Případovka: typ firmy, věta o klientovi, problém, řešení, výsledek `[X h / měsíc]` – `src/components/CaseStudy.astro`
- [ ] Bio Doda, doplnění bia Markéty – `src/components/Team.astro`
- [ ] Fotky: `public/team/marketa.jpg`, `public/team/dodo.jpg` (160×200, ideálně 2× = 320×400), pak doplnit `photo` v `Team.astro`
- [ ] Lhůta odpovědi `[do X pracovních dnů]`, e-mail, LinkedIn, odkaz na GDPR – `src/config.ts`
- [ ] OG obrázek – zatím `public/og-placeholder.png` (1200×630, jen logo), nahradit finálním

## Otevřená rozhodnutí
- [ ] **Backend formuláře.** Adaptér je v `src/lib/lead-form.ts`, volí se proměnnými `PUBLIC_FORM_PROVIDER` a `PUBLIC_FORM_ENDPOINT` (viz `.env.example`). Na GitHub Pages: Formspree nebo vlastní endpoint; nastavit jako *Repository variables* v GitHubu. Netlify Forms funguje jen při hostingu na Netlify. Dokud není nastaveno, formulář na produkci ukáže chybovou hlášku.
- [ ] **Doména www.markdo.cz.** V GitHub Pages nastavená. Zbývá DNS u Váš-hosting (CNAME `www` → `marketajedlick.github.io`, A/AAAA pro `markdo.cz` na GitHub Pages), ověření domény v GitHubu (TXT) a po vydání certifikátu zapnout *Enforce HTTPS*. MX záznamy nechat beze změny.
- [ ] **Analytika.** Zatím žádná (bez cookies). Pokud ano, zvážit cookieless (Plausible, Umami).
- [ ] **Povinná pole.** Mockup je vizuálně neoznačuje; validace je hlídá. Zvážit hvězdičku / „(nepovinné)“ u Firmy.
- [ ] **Astro verze.** Použito Astro 5 kvůli lokálnímu Node 20/22.23.2 (Astro 7 chce Node ≥ 22.23.4). `npm audit` hlásí zranitelnosti v Astru ≤ 7.3.1 (týkají se dev serveru / SSR, ne statického výstupu). Po aktualizaci Node přejít na Astro 7.
