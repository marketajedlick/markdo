# TODO – MarkDo web

## Placeholdery v textu (`[takhle]`)
- [ ] Zásady osobních údajů (`src/pages/osobni-udaje.astro`): hotové, ideálně nechat jednou zkontrolovat.

## Otevřená rozhodnutí
- [ ] **Heslo před spuštěním.** Web je zamčený heslem (`gate` v `src/config.ts`, ukládá se jen SHA-256 hash). Ochrana je jen v prohlížeči – odradí návštěvníky a vyhledávače (`noindex`), ale zdrojový kód webu i repa je veřejný. Před spuštěním nastavit `gate.enabled = false`.
- [x] **Formulář.** FormSubmit → info@markdo.cz (repository variables `PUBLIC_FORM_PROVIDER=formsubmit`, `PUBLIC_FORM_ENDPOINT=https://formsubmit.co/ajax/info@markdo.cz`), aktivováno 26. 10. 2026.
- [ ] **Analytika.** Zatím žádná (bez cookies). Pokud ano, zvážit cookieless (Plausible, Umami).
