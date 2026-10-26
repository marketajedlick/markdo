# TODO – MarkDo web

## Placeholdery v textu (`[takhle]`)
- [ ] Zásady osobních údajů (`src/pages/osobni-udaje.astro`): hotové, ideálně nechat jednou zkontrolovat.

## Otevřená rozhodnutí
- [x] **Heslo před spuštěním.** Vypnuto 26. 10. 2026 (`gate.enabled = false` v `src/config.ts`), web je veřejný a indexovatelný. Zámek jde kdykoli znovu zapnout.
- [x] **Formulář.** FormSubmit → info@markdo.cz (repository variables `PUBLIC_FORM_PROVIDER=custom`, `PUBLIC_FORM_ENDPOINT=https://formsubmit.co/ajax/info@markdo.cz`), aktivováno 26. 10. 2026.
- [ ] **Google po spuštění.** Ověřit doménu v [Google Search Console](https://search.google.com/search-console) (doménová služba, TXT záznam v DNS), odeslat `https://markdo.cz/sitemap.xml` a požádat o indexaci úvodní stránky. Strukturovaná data zkontrolovat v [Rich Results Test](https://search.google.com/test/rich-results). Založit profil firmy na Google (Business Profile) a firemní stránku na LinkedInu, pak ji doplnit do `sameAs`.
- [ ] **E-mail na doméně.** SPF končí `?all` a chybí DMARC, takže kdokoli může posílat poštu jako @markdo.cz. U vas-hosting.cz přidat TXT `_dmarc.markdo.cz` = `v=DMARC1; p=none; rua=mailto:info@markdo.cz` (po pár týdnech `p=quarantine`) a SPF zpřísnit na `~all`. Volitelně CAA záznam `0 issue "letsencrypt.org"` (certifikát GitHub Pages).
- [ ] **Analytika.** Zatím žádná (bez cookies). Pokud ano, zvážit cookieless (Plausible, Umami).
- [ ] **Povinná pole.** Mockup je vizuálně neoznačuje; validace je hlídá. Zvážit hvězdičku / „(nepovinné)“ u Firmy.
- [ ] **Astro verze.** Použito Astro 5 kvůli lokálnímu Node 20/22.23.2 (Astro 7 chce Node ≥ 22.23.4). `npm audit` hlásí zranitelnosti v Astru ≤ 7.3.1 (týkají se dev serveru / SSR, ne statického výstupu). Po aktualizaci Node přejít na Astro 7.
