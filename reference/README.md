# MarkDo – landing page: zadání pro Claude Code

## Úkol
Naimplementuj produkční landing page podle `reference.html` (statický mockup z návrhu, otevři ho v prohlížeči). Vizuál a texty drž 1:1, kód napiš čistě a znovupoužitelně.

**Stack (doporučení):** Astro + čisté CSS (CSS proměnné), bez UI knihoven. Statický build, deploy na Vercel nebo Netlify. Pokud máš lepší důvod pro jiný stack, napiš ho před začátkem.

## Kontext
- **Značka:** MarkDo (Markéta Jedličková + Dodo Dobrik). Spojení AI/data inženýrství a systémového designu.
- **Cílovka:** malé a střední firmy v ČR. Web je česky.
- **Nabídka:** konzultace zdarma, workshop, plán AI integrace, implementace procesů, několikatýdenní firemní program. Cena na poptávku.
- **Hlavní konverze:** poptávkový formulář (sekce `#kontakt`). Všechna CTA vedou na něj.

## Struktura stránky (pořadí sekcí)
1. Header: logo, kotvy (Jak pracujeme, Případovka, Kdo jsme), CTA „Konzultace zdarma“. Pod 820 px se kotvy skryjí.
2. Hero: H1, podnadpis, 2 CTA, vizuál procesu fakturace (4 kroky + „Dřív / Teď“).
3. Znáte to?: 3 problémy v gridu.
4. Jak pracujeme (`#proces`): 5 kroků jako `<ol>`.
5. Proč my: 3 karty.
6. Případovka (`#pripadovka`): problém / řešení / výsledek.
7. Kdo jsme (`#tym`): 2 karty s fotkou a bio.
8. Kontakt (`#kontakt`): text + formulář.
9. Footer.

## Design tokeny
| Token | Hodnota | Použití |
|---|---|---|
| `--bg` | `#EFE9DF` | podklad stránky |
| `--bg-alt` | `#E8E1D5` | sekce „Proč my“ |
| `--surface` | `#F8F4EC` | karty, formulář |
| `--grid-line` | `#E4DDD0` | mřížka v pozadí hero a kontaktu (48 px) |
| `--text` | `#16171A` | hlavní text |
| `--text-muted` | `#36383D` | odstavce |
| `--text-subtle` | `#4B4D53` | popisky, mono štítky |
| `--line` | `#D8D0C2` | oddělovače sekcí |
| `--border` | `#D3CABB` | rámečky karet |
| `--border-strong` | `#8A8070` | inputy, spojnice |
| `--accent` | `#2340D9` | CTA, štítky, čísla kroků |
| `--on-accent` | `#FFFFFF` | text na tlačítkách |

- **Fonty:** Geist (400/500/600/700) pro text, Geist Mono (400/500) pro štítky a čísla. Z Google Fonts, nebo lépe self-host přes `@fontsource`.
- **Typografie:** základ 19 px / 1.6. H1 `clamp(40px, 6vw, 72px)`, H2 `clamp(30px, 3.6vw, 44px)`, H3 24–25 px. Nadpisy mají letter-spacing −0.025 až −0.035em.
- **Rozměry:** obsah max. 1200 px, boční padding `clamp(20px, 5vw, 48px)`, sekce `clamp(56px, 8vw, 104px)` vertikálně. Radius 8–16 px.
- **Responzivita:** gridy přes `repeat(auto-fit, minmax(min(Xpx, 100%), 1fr))`, flex-wrap. Ověř šířky 390, 768, 1280 a 1440 px.

## Formulář
- Pole: Jméno, Firma, E-mail, Počet zaměstnanců (select), Co vás nejvíc zdržuje? (textarea).
- Validace: jméno, e-mail a textarea jsou povinné. Chyby zobrazuj inline, česky.
- **Backend:** zatím TODO. Připrav adaptér, aby šel snadno napojit Formspree, Netlify Forms nebo vlastní endpoint. Po odeslání zobraz stav úspěchu nebo chyby.
- Checkbox nebo text se souhlasem se zpracováním osobních údajů (odkaz zatím `#`).

## Placeholdery k doplnění
V textu jsou označené `[takhle]`. Nevymýšlej za ně obsah, nech je viditelné a sepiš je do `TODO.md`:
- Hero: `[X h týdně]`, `[Y min]`
- Firemní program: `[X týdnů]`
- Případovka: typ firmy, popis klienta, problém, řešení, výsledek
- Bio Doda, doplnění bia Markéty, fotky obou (`/public/team/marketa.jpg`, `dodo.jpg`)
- Lhůta odpovědi `[do X pracovních dnů]`, e-mail, odkaz na LinkedIn, odkaz na GDPR

## Požadavky na kvalitu
- Sémantické HTML (`header`, `main`, `section`, `article`, `ol`), `lang="cs"`.
- Přístupnost: kontrast min. 4.5:1, viditelný focus, `label` u každého inputu, cíle kliknutí min. 44 px.
- Hladký scroll na kotvy, `scroll-margin-top` u sekcí.
- SEO: title, meta description, OG tagy (obrázek zatím placeholder), favicon.
- Lighthouse 95+ ve všech kategoriích.
- Žádné trackery ani cookies bez souhlasu.

## Definition of done
- `npm run build` projde, stránka odpovídá `reference.html` na desktopu i mobilu.
- Je vytvořený `TODO.md` se seznamem placeholderů a otevřených rozhodnutí (backend formuláře, doména, analytika).
