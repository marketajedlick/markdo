# TODO – MarkDo web

## Placeholdery v textu (`[takhle]`)
- [ ] Zásady osobních údajů (`src/pages/osobni-udaje.astro`): hotové, ideálně nechat jednou zkontrolovat.

- [ ] Podstránky služeb (`src/lib/services.ts`): texty doplněné, zkontrolovat a nasadit (PR #31), pak poslat do Search Console.

## Otevřená rozhodnutí
- [x] **Heslo před spuštěním.** Vypnuto 26. 10. 2026 (`gate.enabled = false` v `src/config.ts`), web je veřejný a indexovatelný. Zámek jde kdykoli znovu zapnout.
- [x] **Formulář.** Web3Forms → info@markdo.cz (repository variables `PUBLIC_FORM_PROVIDER=web3forms`, `PUBLIC_FORM_ENDPOINT=https://api.web3forms.com/submit`, `PUBLIC_FORM_KEY`). Nastavení formuláře (příjemce) na web3forms.com.
- [x] **Vyhledávače.** Google Search Console ověřena (TXT v DNS), sitemapa odeslána, strukturovaná data bez chyb (Rich Results Test). Seznam Webmaster ověřen souborem `public/seznam-wmt-….txt` (nemazat, Seznam ho občas kontroluje znovu); sitemapu si Seznam bere z `robots.txt`. Profil firmy na Googlu nepotřebujeme (jsme značka, ne provozovna).
- [x] **E-mail na doméně.** SPF `v=spf1 a mx ~all` a DMARC `p=none` nastaveny 26. 10. 2026.
- [ ] **DMARC zpřísnit** (kolem 23. 11. 2026): když v reportech na info@markdo.cz nebude nic podezřelého, změnit `_dmarc.markdo.cz` na `p=quarantine`. Volitelně CAA záznam `0 issue "letsencrypt.org"` (certifikát GitHub Pages).
- [x] **Analytika.** Umami Cloud (bez cookies, bez lišty se souhlasem), ID webu v `src/config.ts`. Načítá se jen v produkčním buildu a počítá jen na markdo.cz. Statistiky na cloud.umami.is.
