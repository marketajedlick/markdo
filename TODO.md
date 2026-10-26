# TODO – MarkDo web

## Placeholdery v textu (`[takhle]`)
- [ ] Případovka Toasters Picture: výsledek je odhad (~15 h / měsíc) – nahradit skutečným číslem, ověřit název firmy a souhlas klienta se zveřejněním – `src/components/CaseStudy.astro`
- [ ] E-mail – `src/config.ts`
- [ ] Zásady osobních údajů (`src/pages/osobni-udaje.astro`): doplnit správce (jméno/firma, IČO, adresa), dobu uchování `[12 měsíců]`, službu pro formulář a poskytovatele e-mailu. Ideálně nechat zkontrolovat.
- [ ] OG obrázek – zatím `public/og-placeholder.png` (1200×630, jen logo), nahradit finálním

## Otevřená rozhodnutí
- [ ] **Heslo před spuštěním.** Web je zamčený heslem (`gate` v `src/config.ts`, ukládá se jen SHA-256 hash). Ochrana je jen v prohlížeči – odradí návštěvníky a vyhledávače (`noindex`), ale zdrojový kód webu i repa je veřejný. Před spuštěním nastavit `gate.enabled = false`.
- [ ] **Backend formuláře.** Adaptér je v `src/lib/lead-form.ts`, volí se proměnnými `PUBLIC_FORM_PROVIDER` a `PUBLIC_FORM_ENDPOINT` (viz `.env.example`). Na GitHub Pages: Formspree nebo vlastní endpoint; nastavit jako *Repository variables* v GitHubu. Netlify Forms funguje jen při hostingu na Netlify. Dokud není nastaveno, formulář na produkci ukáže chybovou hlášku.
- [ ] **Doména www.markdo.cz.** V GitHub Pages nastavená. Zbývá DNS u Váš-hosting (CNAME `www` → `marketajedlick.github.io`, A/AAAA pro `markdo.cz` na GitHub Pages), ověření domény v GitHubu (TXT) a po vydání certifikátu zapnout *Enforce HTTPS*. MX záznamy nechat beze změny.
- [ ] **Analytika.** Zatím žádná (bez cookies). Pokud ano, zvážit cookieless (Plausible, Umami).
- [ ] **Povinná pole.** Mockup je vizuálně neoznačuje; validace je hlídá. Zvážit hvězdičku / „(nepovinné)“ u Firmy.
- [ ] **Astro verze.** Použito Astro 5 kvůli lokálnímu Node 20/22.23.2 (Astro 7 chce Node ≥ 22.23.4). `npm audit` hlásí zranitelnosti v Astru ≤ 7.3.1 (týkají se dev serveru / SSR, ne statického výstupu). Po aktualizaci Node přejít na Astro 7.
