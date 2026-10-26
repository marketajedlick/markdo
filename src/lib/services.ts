// Service subpages: all copy in one place. Values in [brackets] still need to be filled in (see TODO.md).

export interface Service {
  slug: string;
  /** Short name for links between the pages. */
  name: string;
  meta: { title: string; description: string };
  eyebrow: string;
  title: string;
  lead: string;
  forWhom: string[];
  steps: { title: string; text: string }[];
  outcomes: { title: string; text: string }[];
  /** Optional proof from the case study on the homepage. */
  proof?: { label: string; value: string; note: string };
  faq: { q: string; a: string }[];
}

const priceAnswer = {
  q: 'Kolik to stojí?',
  a: 'Cenu stanovíme podle rozsahu, až budeme vědět, co potřebujete. První konzultace je zdarma a nezávazná.',
};

export const services: Service[] = [
  {
    slug: 'ai-skoleni-pro-firmy',
    name: 'AI školení pro firmy',
    meta: {
      title: 'AI školení pro firmy – workshop na vašich úkolech | MarkDo',
      description:
        'Praktický AI workshop pro váš tým: na vašich úkolech a datech, s jasnými pravidly, co se smí. Tým odchází s postupy, které druhý den použije.',
    },
    eyebrow: 'Workshop pro tým',
    title: 'AI školení pro firmy, které tým druhý den opravdu použije',
    lead: 'Žádná obecná přednáška o ChatGPT. Pracujeme na vašich úkolech a datech, nastavíme pravidla, co se smí, a tým odchází s hotovými postupy.',
    forWhom: [
      'Každý ve firmě zkouší AI po svém a chybí společná pravidla.',
      'Tým tráví hodně času e-maily, nabídkami, reporty nebo hledáním v dokumentech.',
      'Vedení chce vědět, co je s firemními daty bezpečné a co ne.',
    ],
    steps: [
      { title: 'Krátký rozhovor předem', text: 'Zjistíme, na čem tým pracuje a kde nejvíc ztrácí čas.' },
      {
        title: 'Workshop na vašich úkolech',
        text: '[Délka workshopu, např. půl dne / celý den.] Každý si postupy vyzkouší na vlastní práci, ne na ukázkových příkladech.',
      },
      { title: 'Pravidla pro firmu', text: 'Sepíšeme, jaké nástroje a jaká data se smí používat a jak.' },
      { title: 'Po workshopu', text: 'Tým dostane sdílené postupy a návody, ke kterým se může kdykoli vrátit.' },
    ],
    outcomes: [
      { title: 'Sdílené postupy', text: 'Šablony a postupy pro vaše opakované úkoly, ne obecné tipy z internetu.' },
      { title: 'Pravidla používání AI', text: 'Jasno v tom, co se s firemními daty smí a co ne.' },
      { title: 'Přehled příležitostí', text: 'Kde AI ve vaší firmě dává smysl a kde je zbytečná.' },
    ],
    faq: [
      { q: 'Jak dlouho workshop trvá?', a: '[Doplnit délku a jestli jde rozdělit do více částí.]' },
      { q: 'Kolik lidí se může zúčastnit?', a: '[Doplnit doporučený počet účastníků.]' },
      {
        q: 'Musí mít tým s AI zkušenosti?',
        a: 'Ne. Začínáme od toho, co lidé dělají každý den, a postupně přidáváme pokročilejší postupy.',
      },
      {
        q: 'Je to bezpečné pro naše data?',
        a: 'Na začátku společně určíme, která data se smí do kterých nástrojů dávat. Pravidla pak platí pro celý tým.',
      },
      priceAnswer,
    ],
  },
  {
    slug: 'plan-ai-integrace',
    name: 'Plán AI integrace',
    meta: {
      title: 'Plán AI integrace – AI audit a priority pro vaši firmu | MarkDo',
      description:
        'Zmapujeme procesy ve firmě a seřadíme příležitosti pro AI podle přínosu a náročnosti. Dostanete plán na míru: co zavést nejdřív, co později a co vůbec.',
    },
    eyebrow: 'Plán AI integrace',
    title: 'Plán AI integrace: co ve firmě zavést nejdřív a proč',
    lead: 'Než do něčeho investujete, zmapujeme procesy a seřadíme příležitosti podle přínosu a náročnosti. Dostanete plán na míru, ne seznam nástrojů z internetu.',
    forWhom: [
      'Nevíte, kde AI ve firmě reálně ušetří čas a co je jen trend.',
      'Chcete se rozhodovat podle toho, co vaší firmě přinese, ne podle módy.',
      'Potřebujete podklad pro rozhodnutí vedení nebo pro rozpočet.',
    ],
    steps: [
      { title: 'Rozhovory s týmem', text: 'Projdeme s lidmi, jak opravdu pracují a kde ztrácejí čas.' },
      { title: 'Mapa procesů', text: 'Popíšeme klíčové procesy, nástroje a data, se kterými se v nich pracuje.' },
      { title: 'Vyhodnocení příležitostí', text: 'U každé příležitosti odhadneme přínos, náročnost a rizika.' },
      { title: 'Plán s prioritami', text: 'Seřadíme kroky: co zavést hned, co později a co se nevyplatí.' },
    ],
    outcomes: [
      { title: 'Mapa procesů', text: 'Přehled, kde firma tráví čas a kde vznikají chyby.' },
      { title: 'Seřazené příležitosti', text: 'Přínos a náročnost každé z nich, srozumitelně i pro vedení.' },
      { title: 'Plán na míru', text: 'Konkrétní další kroky v pořadí, ve kterém dávají smysl.' },
    ],
    faq: [
      { q: 'Jak dlouho příprava plánu trvá?', a: '[Doplnit typickou délku.]' },
      {
        q: 'Co k tomu potřebujete od nás?',
        a: 'Hlavně čas lidí, kteří procesy znají. Rozsah domluvíme na úvodní konzultaci.',
      },
      {
        q: 'Musíme pak automatizaci realizovat s vámi?',
        a: 'Ne. Každý krok lze objednat i samostatně, plán je váš.',
      },
      priceAnswer,
    ],
  },
  {
    slug: 'automatizace-procesu',
    name: 'Automatizace procesů',
    meta: {
      title: 'Automatizace procesů s AI – faktury, objednávky, dokumenty | MarkDo',
      description:
        'Automatizujeme opakovanou práci s fakturami, objednávkami a dokumenty. AI vytěží údaje, člověk jen zkontroluje. Napojíme na vaše nástroje.',
    },
    eyebrow: 'Automatizace procesů',
    title: 'Automatizace procesů s AI: méně přepisování, víc času na práci',
    lead: 'Faktury, objednávky, tabulky, e-maily. Najdeme, kde lidé ručně přepisují údaje, a nastavíme automatizaci napojenou na vaše nástroje. Co AI nepřečte s jistotou, zkontroluje člověk.',
    forWhom: [
      'Lidé kopírují údaje mezi systémy a dělají v tom chyby.',
      'Účetní nebo asistence tráví hodiny zpracováním dokladů.',
      'Přehledy a reporty se skládají ručně z několika zdrojů.',
    ],
    steps: [
      { title: 'Zmapujeme procesy', text: 'Projdeme, kde se ve firmě ztrácí čas, a seřadíme příležitosti podle přínosu a náročnosti.' },
      { title: 'Navrhneme řešení', text: 'Na míru vašim nástrojům a lidem, kteří s ním budou pracovat.' },
      { title: 'Nastavíme a otestujeme', text: 'Automatizaci napojíme na vaše systémy a vyzkoušíme v ostrém provozu.' },
      { title: 'Naučíme tým', text: 'Aby lidé věděli, co automatizace dělá a kdy do ní vstoupit.' },
    ],
    outcomes: [
      { title: 'Plán s prioritami', text: 'Co automatizovat nejdřív, aby se to nejvíc vyplatilo.' },
      { title: 'Fungující automatizace', text: 'Napojená na nástroje, které už používáte.' },
      { title: 'Kontrola člověkem', text: 'Sporné případy AI označí a nechá je zkontrolovat, nic neprojde naslepo.' },
    ],
    proof: { label: 'Příklad: faktury ve filmové produkci', value: 'cca 60 h / rok', note: 'ušetřeného času účetní, realizace 1 h' },
    faq: [
      {
        q: 'Jaké procesy se dají automatizovat?',
        a: 'Nejčastěji práce s doklady (faktury, objednávky), přepisování údajů mezi systémy, třídění e-mailů a příprava přehledů a reportů.',
      },
      { q: 'S jakými nástroji to funguje?', a: '[Doplnit, se kterými systémy umíte pracovat, např. účetní software, Google, Microsoft 365.]' },
      {
        q: 'Co když AI udělá chybu?',
        a: 'Údaje, které AI nepřečte s jistotou, označí jako sporné a nechá je opravit člověkem. U ostatních stačí kontrola jedním klikem.',
      },
      {
        q: 'Jak dlouho trvá nasazení?',
        a: 'Záleží na procesu. Jednoduchá automatizace může běžet za pár hodin, například zpracování faktur jsme nastavili za hodinu.',
      },
      priceAnswer,
    ],
  },
  {
    slug: 'zavedeni-ai-do-firmy',
    name: 'Zavedení AI do firmy',
    meta: {
      title: 'Zavedení AI do firmy – konzultace, plán a 8týdenní program | MarkDo',
      description:
        'Provedeme firmu zavedením AI od první konzultace po fungující procesy: plán na míru, školení týmu, automatizace a 8 týdnů průběžné podpory.',
    },
    eyebrow: 'Firemní program',
    title: 'Zavedení AI do firmy krok za krokem',
    lead: 'Od první konzultace po procesy, které fungují i za půl roku. Spojujeme technickou hloubku se systémovým designem, aby nová řešení tým opravdu přijal.',
    forWhom: [
      'Nevíte, kde začít, a nabídek je hodně.',
      'Chcete AI zavést systematicky, ne jen vyzkoušet.',
      'Potřebujete, aby nové postupy ve firmě vydržely.',
    ],
    steps: [
      { title: 'Konzultace zdarma', text: 'Probereme, jak firma funguje a kde ztrácí čas. Bez závazků.' },
      { title: 'Workshop pro tým', text: 'Prakticky na vašich úkolech a datech. Tým odchází s postupy, které druhý den použije.' },
      { title: 'Plán AI integrace', text: 'Zmapujeme procesy a seřadíme příležitosti podle přínosu a náročnosti.' },
      { title: 'Implementace procesů', text: 'Automatizace nastavíme, napojíme na vaše nástroje a otestujeme v provozu.' },
      { title: 'Firemní program', text: 'Osm týdnů průběžné podpory, aby nové postupy ve firmě zůstaly.' },
    ],
    outcomes: [
      { title: 'Plán na míru', text: 'Co zavést, v jakém pořadí a proč.' },
      { title: 'Tým, který AI umí', text: 'Sdílené postupy a pravidla místo pokusů každého zvlášť.' },
      { title: 'Výsledky v provozu', text: 'Končíme u věcí, které běží a šetří čas, ne u prezentace.' },
    ],
    faq: [
      { q: 'Musíme projít všemi kroky?', a: 'Ne. Každý krok lze objednat i samostatně, plán sestavíme podle potřeb vaší firmy.' },
      { q: 'Jak dlouho zavedení trvá?', a: 'Samotný firemní program trvá 8 týdnů. [Doplnit typickou délku celé spolupráce.]' },
      { q: 'Pro jak velké firmy to je?', a: 'Pro malé a střední firmy. Na velikosti záleží méně než na tom, kolik opakované práce lidé dělají.' },
      priceAnswer,
    ],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug)!;
