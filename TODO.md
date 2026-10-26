# TODO – MarkDo web

## Placeholdery v textu (`[takhle]`)
- [ ] Zásady osobních údajů (`src/pages/osobni-udaje.astro`): doplnit správce (jméno/firma, IČO, adresa) a dobu uchování `[12 měsíců]`. Ideálně nechat zkontrolovat.
- [ ] OG obrázek – zatím `public/og-placeholder.png` (1200×630, jen logo), nahradit finálním

## Otevřená rozhodnutí
- [ ] **Heslo před spuštěním.** Web je zamčený heslem (`gate` v `src/config.ts`, ukládá se jen SHA-256 hash). Ochrana je jen v prohlížeči – odradí návštěvníky a vyhledávače (`noindex`), ale zdrojový kód webu i repa je veřejný. Před spuštěním nastavit `gate.enabled = false`.
- [ ] **Formulář.** FormSubmit → info@markdo.cz (repository variables `PUBLIC_FORM_PROVIDER=custom`, `PUBLIC_FORM_ENDPOINT=https://formsubmit.co/ajax/info@markdo.cz`). Po první zprávě je potřeba potvrdit aktivační e-mail od FormSubmit.
- [ ] **Analytika.** Zatím žádná (bez cookies). Pokud ano, zvážit cookieless (Plausible, Umami).
- [ ] **Povinná pole.** Mockup je vizuálně neoznačuje; validace je hlídá. Zvážit hvězdičku / „(nepovinné)“ u Firmy.
- [ ] **Astro verze.** Použito Astro 5 kvůli lokálnímu Node 20/22.23.2 (Astro 7 chce Node ≥ 22.23.4). `npm audit` hlásí zranitelnosti v Astru ≤ 7.3.1 (týkají se dev serveru / SSR, ne statického výstupu). Po aktualizaci Node přejít na Astro 7.
