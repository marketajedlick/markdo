// Service subpages: all copy in one place.

export interface Service {
  slug: string;
  /** Short name for links between the pages. */
  name: string;
  meta: { title: string; description: string };
  eyebrow: string;
  title: string;
  lead: string;
  /** Key facts shown under the lead (length, group size, place…). */
  facts: string[];
  forWhom: string[];
  steps: { title: string; text: string }[];
  outcomes: { title: string; text: string }[];
  /** Optional proof from the case study on the homepage. */
  proof?: { label: string; value: string; note: string };
  faq: { q: string; a: string }[];
}

const faqPrice = {
  q: 'Kolik to stojí?',
  a: 'Cenu stanovíme podle rozsahu, až budeme vědět, co potřebujete. První konzultace je zdarma a nezávazná.',
};

const faqPlace = {
  q: 'Probíhá to u nás, nebo online?',
  a: 'Podle toho, co vám vyhovuje. V Praze přijedeme za vámi do firmy, mimo Prahu pracujeme online, celodenní školení i jinde po domluvě. Úvodní konzultace probíhá online.',
};

const dataAnswer = 'Nastavení přizpůsobíme požadavkům vaší firmy a citlivosti dat: které nástroje, jaká data a za jakých podmínek.';

const faqData = {
  q: 'Je to bezpečné pro naše data?',
  a: `${dataAnswer} Možnosti mapujeme poctivě, i kdyby z úvodní konzultace vyšlo, že AI pro vás teď není.`,
};

// For pages that already answer "what if AI is not for us" separately.
const faqDataShort = { q: faqData.q, a: dataAnswer };

export const services: Service[] = [
  {
    slug: 'ai-skoleni-pro-firmy',
    name: 'AI školení pro firmy',
    meta: {
      title: 'AI školení pro firmy – workshop v Praze i online | MarkDo',
      description:
        'Praktické AI školení pro firmy: ChatGPT, Copilot a další nástroje na vašich úkolech a datech. 1–12 lidí, od 1,5 hodiny po celý den, v Praze i online.',
    },
    eyebrow: 'Workshop pro tým',
    title: 'AI školení pro firmy, které tým druhý den opravdu použije',
    lead: 'Žádná obecná přednáška o ChatGPT. Pracujeme na vašich úkolech a datech, nastavíme pravidla, co se smí, a tým odchází s hotovými postupy.',
    facts: ['1–12 lidí', 'od 1,5 hodiny po celý den', 'Praha u vás ve firmě i online'],
    forWhom: [
      'Každý ve firmě zkouší AI po svém a chybí společná pravidla.',
      'Tým tráví hodně času e-maily, nabídkami, reporty nebo hledáním v dokumentech.',
      'Vedení chce vědět, co je s firemními daty bezpečné a co ne.',
    ],
    steps: [
      { title: 'Krátký rozhovor předem', text: 'Zjistíme, na čem tým pracuje a kde nejvíc ztrácí čas.' },
      {
        title: 'Workshop na vašich úkolech',
        text: 'Od 1,5 hodiny po celý den, podle potřeb firmy a velikosti skupiny. Každý si postupy vyzkouší na vlastní práci, ne na ukázkových příkladech.',
      },
      { title: 'Pravidla pro firmu', text: 'Sepíšeme, jaké nástroje a jaká data se smí používat a jak.' },
      {
        title: 'Po workshopu',
        text: 'Tým dostane návody, šablony a záznam, ke kterým se může kdykoli vrátit. Když se objeví otázky, pomůžeme i potom.',
      },
    ],
    outcomes: [
      { title: 'Návody a šablony', text: 'Pro vaše opakované úkoly, ne obecné tipy z internetu. Plus záznam workshopu.' },
      { title: 'Pravidla používání AI', text: 'Jasno v tom, co se s firemními daty smí a co ne.' },
      { title: 'Navazující podpora', text: 'Když se po workshopu objeví otázky, nezůstanete na to sami.' },
    ],
    faq: [
      {
        q: 'Jak dlouho školení trvá?',
        a: 'Od 1,5 hodiny po celý den. Délku přizpůsobíme potřebám firmy a velikosti skupiny.',
      },
      { q: 'Kolik lidí se může zúčastnit?', a: 'Od jednoho do dvanácti. V menší skupině se víc dostaneme k úkolům každého účastníka.' },
      {
        q: 'Které nástroje učíte?',
        a: 'Ty, které dávají smysl pro vaši firmu: ChatGPT, Claude, Microsoft Copilot, Gemini a další. Nejsme vázaní na jeden nástroj.',
      },
      {
        q: 'Na čem budeme pracovat?',
        a: 'Na čemkoli, co váš tým dělá: odpovědi zákazníkům, nabídky, reporty, práce s dokumenty a daty. Obsah stavíme podle zaměření firmy.',
      },
      {
        q: 'Musí mít tým s AI zkušenosti?',
        a: 'Ne. Začínáme od toho, co lidé dělají každý den, a postupně přidáváme pokročilejší postupy.',
      },
      faqPlace,
      faqData,
      faqPrice,
    ],
  },
  {
    slug: 'plan-ai-integrace',
    name: 'Plán AI integrace',
    meta: {
      title: 'Plán AI integrace – AI audit pro vaši firmu | MarkDo',
      description:
        'AI audit pro malé a střední firmy: za zhruba 2 týdny zmapujeme procesy a seřadíme příležitosti podle přínosu a náročnosti. Plán na míru, co zavést nejdřív.',
    },
    eyebrow: 'Plán AI integrace',
    title: 'Plán AI integrace: co ve firmě zavést nejdřív a proč',
    lead: 'Než do něčeho investujete, zmapujeme procesy a seřadíme příležitosti podle přínosu a náročnosti. Dostanete plán na míru, ne seznam nástrojů z internetu.',
    facts: ['zhruba 2 týdny', 'dokument, prezentace pro vedení nebo tabulka priorit', 'Praha i online'],
    forWhom: [
      'Nevíte, kde AI ve firmě reálně ušetří čas a co je jen trend.',
      'Chcete se rozhodovat podle toho, co vaší firmě přinese, ne podle módy.',
      'Potřebujete podklad pro rozhodnutí vedení nebo pro rozpočet.',
    ],
    steps: [
      { title: 'Rozhovory s týmem', text: 'Projdeme s lidmi, jak opravdu pracují a kde ztrácejí čas.' },
      { title: 'Mapa procesů', text: 'Popíšeme klíčové procesy, nástroje a data, se kterými se v nich pracuje.' },
      { title: 'Vyhodnocení příležitostí', text: 'U každé příležitosti odhadneme přínos, náročnost a rizika.' },
      {
        title: 'Plán s prioritami',
        text: 'Seřadíme kroky: co zavést hned, co později a co se nevyplatí. Ve formě, která vám vyhovuje.',
      },
    ],
    outcomes: [
      { title: 'Mapa procesů', text: 'Přehled, kde firma tráví čas a kde vznikají chyby.' },
      { title: 'Seřazené příležitosti', text: 'Přínos a náročnost každé z nich, srozumitelně i pro vedení.' },
      {
        title: 'Plán na míru',
        text: 'Jako dokument, prezentace pro vedení nebo tabulka priorit, podle toho, s čím budete dál pracovat.',
      },
    ],
    faq: [
      { q: 'Jak dlouho příprava plánu trvá?', a: 'Zhruba dva týdny, podle velikosti firmy a počtu procesů.' },
      {
        q: 'Co k tomu potřebujete od nás?',
        a: 'Hlavně čas lidí, kteří procesy znají. Rozsah domluvíme na úvodní konzultaci.',
      },
      {
        q: 'Co když AI pro nás nedává smysl?',
        a: 'Řekneme vám to rovnou. Možnosti mapujeme poctivě, i kdyby vyšlo, že AI pro vás teď není.',
      },
      {
        q: 'Musíme pak automatizaci realizovat s vámi?',
        a: 'Ne. Každý krok lze objednat i samostatně, plán je váš.',
      },
      faqDataShort,
      faqPrice,
    ],
  },
  {
    slug: 'automatizace-procesu',
    name: 'Automatizace procesů',
    meta: {
      title: 'Automatizace procesů s AI – faktury a dokumenty | MarkDo',
      description:
        'Automatizujeme opakovanou práci s fakturami, objednávkami a dokumenty. AI vytěží údaje, člověk jen zkontroluje. Napojíme na nástroje, které už používáte.',
    },
    eyebrow: 'Automatizace procesů',
    title: 'Automatizace procesů s AI: méně přepisování, víc času na práci',
    lead: 'Faktury, objednávky, tabulky, e-maily. Najdeme, kde lidé ručně přepisují údaje, a nastavíme automatizaci napojenou na vaše nástroje. Co AI nepřečte s jistotou, zkontroluje člověk.',
    facts: ['napojení na nástroje, které už máte', 'kontrola člověkem', 'know-how zůstává u vás'],
    forWhom: [
      'Lidé kopírují údaje mezi systémy a dělají v tom chyby.',
      'Účetní nebo asistence tráví hodiny zpracováním dokladů.',
      'Přehledy a reporty se skládají ručně z několika zdrojů.',
    ],
    steps: [
      { title: 'Zmapujeme procesy', text: 'Projdeme, kde se ve firmě ztrácí čas, a seřadíme příležitosti podle přínosu a náročnosti.' },
      { title: 'Navrhneme řešení', text: 'Na míru vašim nástrojům a lidem, kteří s ním budou pracovat.' },
      { title: 'Nastavíme a otestujeme', text: 'Automatizaci napojíme na vaše systémy a vyzkoušíme v ostrém provozu.' },
      {
        title: 'Naučíme tým automatizaci spravovat',
        text: 'Aby lidé věděli, co automatizace dělá, kdy do ní vstoupit a jak ji upravit. Know-how zůstane ve firmě.',
      },
    ],
    outcomes: [
      { title: 'Plán s prioritami', text: 'Co automatizovat nejdřív, aby se to nejvíc vyplatilo.' },
      { title: 'Fungující automatizace', text: 'Napojená na nástroje, které už používáte.' },
      { title: 'Tým, který ji umí spravovat', text: 'Školení ke správě, takže na nás nejste závislí.' },
    ],
    proof: { label: 'Příklad: faktury ve filmové produkci', value: 'cca 60 h / rok', note: 'ušetřeného času účetní, realizace 1 h' },
    faq: [
      {
        q: 'Jaké procesy se dají automatizovat?',
        a: 'Nejčastěji práce s doklady (faktury, objednávky), přepisování údajů mezi systémy, třídění e-mailů a příprava přehledů a reportů.',
      },
      {
        q: 'S jakými nástroji to funguje?',
        a: 'Prakticky s čímkoli, co už používáte: účetní software, Google Workspace, Microsoft 365, CRM, e-shop, tabulky i e-mail.',
      },
      {
        q: 'Co když AI udělá chybu?',
        a: 'Údaje, které AI nepřečte s jistotou, označí jako sporné a nechá je opravit člověkem. U ostatních stačí kontrola jedním klikem.',
      },
      {
        q: 'Kdo bude automatizaci spravovat?',
        a: 'Váš tým. Naučíme ho automatizaci spravovat a upravovat, aby know-how zůstalo u vás ve firmě.',
      },
      {
        q: 'Jak dlouho trvá nasazení?',
        a: 'Záleží na procesu. Jednoduchá automatizace může běžet za pár hodin, například zpracování faktur jsme nastavili za hodinu.',
      },
      faqData,
      faqPrice,
    ],
  },
  {
    slug: 'zavedeni-ai-do-firmy',
    name: 'Zavedení AI do firmy',
    meta: {
      title: 'Zavedení AI do firmy – AI konzultace a program | MarkDo',
      description:
        'Provedeme malou nebo střední firmu zavedením AI od konzultace zdarma po fungující procesy: plán na míru, školení týmu, automatizace a průběžná podpora.',
    },
    eyebrow: 'Firemní program',
    title: 'Zavedení AI do firmy krok za krokem',
    lead: 'Od první konzultace po procesy, které fungují i za půl roku. Markéta řeší techniku a data, Dodo procesy a lidi, aby nová řešení fungovala a tým je opravdu přijal.',
    facts: ['od 8 týdnů po průběžnou spolupráci', 'úvodní konzultace online a zdarma', 'Praha i online'],
    forWhom: [
      'Nevíte, kde začít, a nabídek je hodně.',
      'Chcete AI zavést systematicky, ne jen vyzkoušet.',
      'Potřebujete, aby nové postupy ve firmě vydržely.',
    ],
    steps: [
      { title: 'Konzultace zdarma', text: 'Online. Probereme, jak firma funguje a kde ztrácí čas. Bez závazků.' },
      { title: 'Workshop pro tým', text: 'Prakticky na vašich úkolech a datech. Tým odchází s postupy, které druhý den použije.' },
      { title: 'Plán AI integrace', text: 'Zmapujeme procesy a seřadíme příležitosti podle přínosu a náročnosti.' },
      { title: 'Implementace procesů', text: 'Automatizace nastavíme, napojíme na vaše nástroje a otestujeme v provozu.' },
      {
        title: 'Firemní program',
        text: 'Osm týdnů i déle: pravidelné schůzky, konzultace a úpravy automatizací podle toho, jak se osvědčují v provozu.',
      },
    ],
    outcomes: [
      { title: 'Plán na míru', text: 'Co zavést, v jakém pořadí a proč.' },
      { title: 'Tým, který AI umí', text: 'Sdílené postupy a pravidla místo pokusů každého zvlášť.' },
      { title: 'Výsledky v provozu', text: 'Končíme u věcí, které běží a šetří čas, ne u prezentace.' },
    ],
    faq: [
      { q: 'Musíme projít všemi kroky?', a: 'Ne. Každý krok lze objednat i samostatně, plán sestavíme podle potřeb vaší firmy.' },
      {
        q: 'Jak dlouho zavedení trvá?',
        a: 'Od 8 týdnů po průběžnou spolupráci, třeba půl roku. Záleží na tom, co firma potřebuje.',
      },
      {
        q: 'Co se během firemního programu děje?',
        a: 'Pravidelně se potkáváme, konzultujeme a upravujeme automatizace podle toho, jak fungují v provozu, aby nové postupy ve firmě zůstaly.',
      },
      {
        q: 'Kdo na tom pracuje?',
        a: 'Markéta, Data & AI inženýrka, má na starosti techniku a data. Dodo, systémový designér, procesy a lidi. Proto řešení funguje technicky i v každodenní práci týmu.',
      },
      {
        q: 'Pro jak velké firmy to je?',
        a: 'Pro malé a střední firmy z jakéhokoli oboru. Na velikosti záleží méně než na tom, kolik opakované práce lidé dělají.',
      },
      faqPlace,
      faqData,
      faqPrice,
    ],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug)!;
