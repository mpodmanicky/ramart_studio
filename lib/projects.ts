export interface Project {
  id: string;
  title: string;
  slug: string;
  categories: string[];
  image: string;
  location?: string;
  yearDesign?: string;
  yearRealization?: string;
  state?: string;
  description?: string;
  gallery?: string[];
  sections?: {
    title: string;
    images: string[];
  }[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Prístavba k RD a záhradný domček",
    slug: "pristavba-rd-zahradny-domcek",
    categories: ["architektúra", "interiér", "dizajn"],
    image: "/projects/pristavba-rd.jpg",
    location: "Osrblie",
    yearDesign: "2018-2023",
    yearRealization: "2020- 2023",
    description:
      "Zadanie investorov bolo jednoznačné - zvýšenie komfortu malej drevenice, ktorú s obľubou využívajú ako svoje rekreačné sídlo na konci malebnej obce Osrblie.\n\nNávrhom murovanej prístavby sa zväčšil vnútorný priestor dennej aj nočnej zóny na komfortné rozmery pre stretávanie sa viacerých členov rodiny. Pri zachovaní tradičného rázu ľudovej architektúry s použitím veľkého presklenia sa prepojila záhrada s interiérom domu.\n\nPre letné posedenia rodiny a priateľov na záhade sme navrhli transparetný záhradný domček s letnou kuchyňou, krbom a stolovaním.\nInvestor svojim vkusom pre poctivé materiály a čisté riešenia výrazným spôsobom priespieval k návrhu architektúry aj interiéru.",

    gallery: [
      "/projects/pristavba-rd-zahradny-domcek/10.jpg",
      "/projects/pristavba-rd-zahradny-domcek/11.jpg",
      "/projects/pristavba-rd-zahradny-domcek/12.jpg",
      "/projects/pristavba-rd-zahradny-domcek/13.jpg",
      "/projects/pristavba-rd-zahradny-domcek/14.jpg",
      "/projects/pristavba-rd-zahradny-domcek/15.jpg",
      "/projects/pristavba-rd-zahradny-domcek/16.jpg",
      "/projects/pristavba-rd-zahradny-domcek/17.jpg",
      "/projects/pristavba-rd-zahradny-domcek/18.jpg",
      "/projects/pristavba-rd-zahradny-domcek/19.jpg",
      "/projects/pristavba-rd-zahradny-domcek/20.jpg",
      "/projects/pristavba-rd-zahradny-domcek/21.jpg",
      "/projects/pristavba-rd-zahradny-domcek/22.jpg",
      "/projects/pristavba-rd-zahradny-domcek/23.jpg",
      "/projects/pristavba-rd-zahradny-domcek/24.jpg",
      "/projects/pristavba-rd-zahradny-domcek/25.jpg",
      "/projects/pristavba-rd-zahradny-domcek/26.jpg",
    ],
    sections: [
      {
        title: "axonometria",
        images: ["/projects/pristavba-rd-zahradny-domcek/3.jpg"],
      },
      {
        title: "pôdorys 1.np",
        images: ["/projects/pristavba-rd-zahradny-domcek/4.jpg"],
      },
      {
        title: "pôdorys 2.np",
        images: ["/projects/pristavba-rd-zahradny-domcek/5.jpg"],
      },
      {
        title: "pohľad južný",
        images: ["/projects/pristavba-rd-zahradny-domcek/9.jpg"],
      },
      {
        title: "pohľad západný",
        images: ["/projects/pristavba-rd-zahradny-domcek/6.jpg"],
      },
      {
        title: "pohľad východný",
        images: ["/projects/pristavba-rd-zahradny-domcek/7.jpg"],
      },
      {
        title: "rez objektom",
        images: ["/projects/pristavba-rd-zahradny-domcek/8.jpg"],
      },
    ],
  },
  {
    id: "2",
    title: "Kaviareň a vinareň Beniczky",
    slug: "kaviaren-vinaren-beniczky",
    categories: ["architektúra", "interiér", "rekonštrukcia"],
    image: "/projects/kaviaren-beniczky.jpg",
    location: "Banská Bystrica",
    yearDesign: "2018",
    yearRealization: "2018",
    description:
      "Zadaním interiérového návrhu bol refresh existujúce, zabehnutej a obľubenej kaviarne v úplnom historickom centre mesta Banská Bystrica.\n\nNašou úlohou bolo pri zachovaní vybraných kusov mobiliáru, podláh a bielych klenieb významnej historickej budovy, dotvoriť interiér pre dennú aj nočnú prevádzku pri káve aj víne.\n\nVýsledkom bola práca s farebnou škálou modrej farby stien a obkladov, ktorá reflektovala na mozaikovú dlažbu. Béžovou tehlovou štruktúrou s teplým podsvietením sme podporili masívny dubový bar a stoly a kombináciou neutrálnych hnedých lavích a sivých kresiel sme vyzdvihli dizajn typických drevených kaviarenských stoličiek.",
    gallery: [
      "/projects/kaviaren-vinaren-beniczky/5.jpg",
      "/projects/kaviaren-vinaren-beniczky/6.jpg",
      "/projects/kaviaren-vinaren-beniczky/7.jpg",
      "/projects/kaviaren-vinaren-beniczky/8.jpg",
      "/projects/kaviaren-vinaren-beniczky/9.jpg",
      "/projects/kaviaren-vinaren-beniczky/10.jpg",
      "/projects/kaviaren-vinaren-beniczky/11.jpg",
      "/projects/kaviaren-vinaren-beniczky/12.jpg",
      "/projects/kaviaren-vinaren-beniczky/13.jpg",
      "/projects/kaviaren-vinaren-beniczky/14.jpg",
      "/projects/kaviaren-vinaren-beniczky/15.jpg",
      "/projects/kaviaren-vinaren-beniczky/16.jpg",
      "/projects/kaviaren-vinaren-beniczky/17.jpg",
    ],
    sections: [
      // {
      //   title: "Galéria",
      //   images: [
      //     "/projects/kaviaren-vinaren-beniczky/3.jpg",
      //   ],
      // },
      {
        title: "axonometria",
        images: ["/projects/kaviaren-vinaren-beniczky/3.jpg"],
      },
      {
        title: "axonometria",
        images: ["/projects/kaviaren-vinaren-beniczky/4.jpg"],
      },
    ],
  },
  {
    id: "3",
    title: "Rodinný dom Liptovský Mikuláš",
    slug: "rodinny-dom-liptovsky-mikulas",
    categories: ["architektúra", "interiér", "novostavba"],
    image: "/projects/rd-liptovsky-mikulas.jpg",
    location: "Liptovský Mikuláš, Palúdzka",
    yearDesign: "2019",
    yearRealization: "2020- 2024",
    description:
      "Rodinný dom bol navrhovaný pre mladú, aktívnu rodinu, kde investori mali jasnú predstavu o využití silných stránok parcely, ktorú vlastnili - panoramatický výhľad na Západné, Vysoké aj Nizke Tatry.\n\nPrízemie domu svojou otvorenosťou slúži komfortne pre 5 člennú rodinu, kde denná zóna 68 m2 je priamo prepojená s krytou terasou a záhradou.\n\nNočná zóna pre všetkých členov rodiny je umiestnená na ustúpenom poschodí s odvetranou drevenou fasádou, kde hlavná spálna užíva najväčší benefit výhľadov priamo cez veľké presklenné plochy alebo z pohodlia strešnej terasy s privátnou jakuzou a bioklimatickou pergolou.",
    gallery: [
      "/projects/rodinny-dom-liptovsky-mikulas/10.jpg",
      "/projects/rodinny-dom-liptovsky-mikulas/11.jpg",
      "/projects/rodinny-dom-liptovsky-mikulas/12.jpg",
      "/projects/rodinny-dom-liptovsky-mikulas/13.jpg",
      "/projects/rodinny-dom-liptovsky-mikulas/14.jpg",
      "/projects/rodinny-dom-liptovsky-mikulas/15.jpg",
      "/projects/rodinny-dom-liptovsky-mikulas/16.jpg",
      "/projects/rodinny-dom-liptovsky-mikulas/17.jpg",
      "/projects/rodinny-dom-liptovsky-mikulas/18.jpg",
      "/projects/rodinny-dom-liptovsky-mikulas/19.jpg",
      "/projects/rodinny-dom-liptovsky-mikulas/20.jpg",
      "/projects/rodinny-dom-liptovsky-mikulas/21.jpg",
      "/projects/rodinny-dom-liptovsky-mikulas/22.jpg",
      "/projects/rodinny-dom-liptovsky-mikulas/23.jpg",
      "/projects/rodinny-dom-liptovsky-mikulas/24.jpg",
      "/projects/rodinny-dom-liptovsky-mikulas/25.jpg",
    ],
    sections: [
      {
        title: "situácia",
        images: ["/projects/rodinny-dom-liptovsky-mikulas/3.jpg"],
      },
      {
        title: "axonometria",
        images: ["/projects/rodinny-dom-liptovsky-mikulas/4.jpg"],
      },
      {
        title: "axonometria",
        images: ["/projects/rodinny-dom-liptovsky-mikulas/5.jpg"],
      },
      {
        title: "pôdorys 1.np",
        images: ["/projects/rodinny-dom-liptovsky-mikulas/6.jpg"],
      },
      {
        title: "pôdorys 2.np",
        images: ["/projects/rodinny-dom-liptovsky-mikulas/7.jpg"],
      },
      {
        title: "rez rodinným domom",
        images: ["/projects/rodinny-dom-liptovsky-mikulas/8.jpg"],
      },
      {
        title: "rez rodinným domom",
        images: ["/projects/rodinny-dom-liptovsky-mikulas/9.jpg"],
      },
    ],
  },
  {
    id: "4",
    title: "Rodinný dom Poniky",
    slug: "rodinny-dom-poniky",
    categories: ["architektúra", "interiér", "novostavba"],
    image: "/projects/rd-poniky.png",
    location: "Poniky, okr. Banská Bystrica",
    yearDesign: "2022-2023",
    state: "architektonická štúdia + projekt PSP",
    description:
      "Navrhovaný rodinný dom pre mladú 4 člennú rodinu sa nachádza na pomerne exponovanom pozemku s nepravidelným tvarom, ktorý je ovplyvnený priamym kontaktom s obecným kultúrnym domom v tesnej blízkosti pri miestnej komunikácii.\n\nArchitektúra rodinného domu zohľadňuje tradičnu vidiecku architektúru v okolí parcely, avšak pri použití progresívnych materiálov a moderného riešenia spojeného vikiera.\n\nRiešenie rodinného domu sa sústreďuje na prepojenie rodiny s pobytom na záhrade a priľahlých terasách. V opačnom princípe je navrhnuté priečelie domu, ktoré izoluje súkromie rodiny od rušného kultúrneho centra obce.",
    gallery: [
      "/projects/rodinny-dom-poniky/12.png",
      "/projects/rodinny-dom-poniky/13.png",
      "/projects/rodinny-dom-poniky/14.png",
      "/projects/rodinny-dom-poniky/15.png",
      "/projects/rodinny-dom-poniky/16.png",
      "/projects/rodinny-dom-poniky/17.png",
      "/projects/rodinny-dom-poniky/18.png",
      "/projects/rodinny-dom-poniky/19.png",
      "/projects/rodinny-dom-poniky/20.png",
      "/projects/rodinny-dom-poniky/21.png",
      "/projects/rodinny-dom-poniky/22.png",
      "/projects/rodinny-dom-poniky/23.png",
      "/projects/rodinny-dom-poniky/24.png",
    ],
    sections: [
      {
        title: "situácia",
        images: ["/projects/rodinny-dom-poniky/3.jpg"],
      },
      {
        title: "axonometria",
        images: ["/projects/rodinny-dom-poniky/4.jpg"],
      },
      {
        title: "axonometria",
        images: ["/projects/rodinny-dom-poniky/5.jpg"],
      },
      {
        title: "pôdorys 1.np",
        images: ["/projects/rodinny-dom-poniky/6.jpg"],
      },
      {
        title: "pôdorys 2.np",
        images: ["/projects/rodinny-dom-poniky/7.jpg"],
      },
      {
        title: "rez rodinným domom",
        images: ["/projects/rodinny-dom-poniky/8.jpg"],
      },
      {
        title: "rez rodinným domom",
        images: ["/projects/rodinny-dom-poniky/9.jpg"],
      },
      {
        title: "pohľady",
        images: [
          "/projects/rodinny-dom-poniky/10.jpg",
          "/projects/rodinny-dom-poniky/11.jpg",
        ],
      },
    ],
  },
  {
    id: "5",
    title: "Rekonštrukcia polyfunkčného domu",
    slug: "rekonstrukcia-polyfunkcneho-domu",
    categories: ["architektúra", "interiér", "rekonštrukcia"],
    image: "/projects/polyfunkcny-dom.jpg",
    location: "Banská Bystrica, Uhlisko",
    yearDesign: "2017-2019",
    yearRealization: "2019",
    description:
      "Zadaním projektových prác bolo vytvorenie firemného sídla vlastníka budovy v kombinácii s nájomnými obytnými a neobytnými priestormi. Historicky, objekt slúžil viacerým funkciám, vlastníkom a užívateľom, čo zachovalo v budove viacero vrstiev predchádzajúcich rekonštrukcii. \n\nNasím prvým krokom bola kvalitná analýza skutkového stavu konštrukcie a technickej infraštruktúry, ktorá ďalej umožňovala navrnúť nové dispozičné riešenia jednotlivých poschodí. \n\nVýsledkom bol návrh na kompletné prebudovanie podkrovia vrátane nosných konštrukcií krovu a zosilenia stropných trámov. \n\nOtvorenie komplikovanej pôvodnej dispozície a odstránenie nenosných priečok na každom poschodí umožňoval pomerne široký nosný systém budovy. V budove sa nachádzajú skladovo technické priestory v suteréne, 3 bytové jednotky po 50 m2 na zvýšenom 1NP, sídlo vlastníka na 2NP so 150 m2 a vzdušný obytný podkrovný priestor 100 m2.",
    gallery: [
      "/projects/rekonstrukcia-polyfunkcneho-domu/13.jpg",
      "/projects/rekonstrukcia-polyfunkcneho-domu/14.jpg",
      "/projects/rekonstrukcia-polyfunkcneho-domu/15.jpg",
      "/projects/rekonstrukcia-polyfunkcneho-domu/16.jpg",
      "/projects/rekonstrukcia-polyfunkcneho-domu/17.jpg",
      "/projects/rekonstrukcia-polyfunkcneho-domu/18.jpg",
      "/projects/rekonstrukcia-polyfunkcneho-domu/19.jpg",
      "/projects/rekonstrukcia-polyfunkcneho-domu/20.jpg",
      "/projects/rekonstrukcia-polyfunkcneho-domu/21.jpg",
      "/projects/rekonstrukcia-polyfunkcneho-domu/22.jpg",
      "/projects/rekonstrukcia-polyfunkcneho-domu/23.jpg",
      "/projects/rekonstrukcia-polyfunkcneho-domu/24.jpg",
      "/projects/rekonstrukcia-polyfunkcneho-domu/25.jpg",
      "/projects/rekonstrukcia-polyfunkcneho-domu/26.jpg",
      "/projects/rekonstrukcia-polyfunkcneho-domu/27.jpg",
      "/projects/rekonstrukcia-polyfunkcneho-domu/28.jpg",
      "/projects/rekonstrukcia-polyfunkcneho-domu/29.jpg",
      "/projects/rekonstrukcia-polyfunkcneho-domu/30.jpg",
      "/projects/rekonstrukcia-polyfunkcneho-domu/31.jpg",
      "/projects/rekonstrukcia-polyfunkcneho-domu/32.jpg",
    ],
    sections: [
      {
        title: "axonometria - pôvodný stav",
        images: ["/projects/rekonstrukcia-polyfunkcneho-domu/3.jpg"],
      },
      {
        title: "axonometria - navrhovaný stav",
        images: ["/projects/rekonstrukcia-polyfunkcneho-domu/4.jpg"],
      },
      {
        title: "pôdorys 1.np - pôvodný stav",
        images: ["/projects/rekonstrukcia-polyfunkcneho-domu/5.jpg"],
      },
      {
        title: "pôdorys 1.np - navrhovaný stav",
        images: ["/projects/rekonstrukcia-polyfunkcneho-domu/6.jpg"],
      },
      {
        title: "pôdorys 2.np - pôvodný stav",
        images: ["/projects/rekonstrukcia-polyfunkcneho-domu/7.jpg"],
      },
      {
        title: "pôdorys 2.np - navrhovaný stav",
        images: ["/projects/rekonstrukcia-polyfunkcneho-domu/8.jpg"],
      },
      {
        title: "pôdorys 3.np - pôvodný stav",
        images: ["/projects/rekonstrukcia-polyfunkcneho-domu/9.jpg"],
      },
      {
        title: "pôdorys 3.np - navrhovaný stav",
        images: ["/projects/rekonstrukcia-polyfunkcneho-domu/10.jpg"],
      },
      {
        title: "rez - pôvodný stav",
        images: ["/projects/rekonstrukcia-polyfunkcneho-domu/11.jpg"],
      },
      {
        title: "rez - navrhovaný stav",
        images: ["/projects/rekonstrukcia-polyfunkcneho-domu/12.jpg"],
      },
    ],
  },
  {
    id: "6",
    title: "Záhradný domček s bazénom",
    slug: "zahradny-domcek-s-bazenom",
    categories: ["architektúra", "interiér", "novostavba"],
    image: "/projects/zahradny-domcek-bazen.png",
    location: "Banská Bystrica, Podlavice",
    yearDesign: "2023",
    state: "architektonická štúdia + projekt PSP",
    description:
      "Zadaním bolo k existujúcej novostavbe rodinného domu mladej rodiny dotvoriť rekreačnú časť pozemku v podobe bazénu a záhradného domčeku s letnou kuchyňou so stolovaním a saunou so zázemím.\n\nNávrh rešpektuje architektúru existujúceho rodinného domu a v architektonickej harmónii dotvára parcelu o rekreačnú a stretávaciu funkciu. Navrhnuté materiálovo farebné riešenie rešpektuje použité odtiene a materiály existujúceho domu.",
    gallery: [
      "/projects/zahradny-domcek-s-bazenom/9.png",
      "/projects/zahradny-domcek-s-bazenom/10.png",
      "/projects/zahradny-domcek-s-bazenom/11.png",
      "/projects/zahradny-domcek-s-bazenom/12.png",
      "/projects/zahradny-domcek-s-bazenom/13.png",
      "/projects/zahradny-domcek-s-bazenom/14.png",
      "/projects/zahradny-domcek-s-bazenom/15.png",
      "/projects/zahradny-domcek-s-bazenom/16.png",
      "/projects/zahradny-domcek-s-bazenom/17.png",
    ],
    sections: [
      {
        title: "situácia",
        images: ["/projects/zahradny-domcek-s-bazenom/3.jpg"],
      },
      {
        title: "axonometria",
        images: ["/projects/zahradny-domcek-s-bazenom/4.jpg"],
      },
      {
        title: "pôdorys",
        images: ["/projects/zahradny-domcek-s-bazenom/5.jpg"],
      },
      {
        title: "pôdorys 1.np",
        images: ["/projects/zahradny-domcek-s-bazenom/6.jpg"],
      },
      {
        title: "pôdorys 2.np",
        images: ["/projects/zahradny-domcek-s-bazenom/7.jpg"],
      },
      {
        title: "rezy",
        images: ["/projects/zahradny-domcek-s-bazenom/8.jpg"],
      },
    ],
  },
  {
    id: "7",
    title: "Rum House Beniczky",
    slug: "rum-house-beniczky",
    categories: ["interiér", "rekonštrukcia"],
    image: "/projects/rum-house-beniczky.jpg",
    location: "Banská Bystrica",
    yearDesign: "2016",
    yearRealization: "2016",
    description:
      "Zadaním interiérového návrhu bolo rozšírenie existujúcej, zabehnutej a obľúbenej kaviarne v úplnom historickom centre mesta Banská Bystrica o oddeliteľnú prevádzku s intímnou atmosférou pre degustáciu koňakov a rumov.\n\nNáš návrh pracuje s tmavými odtieňmi masívneho kartáčovaného dreva, teplými sivými odtieňmi stien v kombinácii s terakotovým tehlovým obkladom s teplým nepriamym podsvietením a ťažkým koženým chesterfieldovým sedením. Priestor má navrhnuté rôzne úrovne stmievateľného osvetlenia, ktoré sa prispôsobuje atmosfére v podniku. Ako domimanta je navrhnutá policová zostava z vodárenských potrubí s podsvietením, ktorá vypĺňa celý bar display pre širokú ponuku koňakov a rumov. Akcentom v priestore sú zelené a modré poťahy lavice a kresiel.",
    gallery: [
      "/projects/rum-house-beniczky/7.jpg",
      "/projects/rum-house-beniczky/8.jpg",
      "/projects/rum-house-beniczky/9.jpg",
      "/projects/rum-house-beniczky/10.jpg",
      "/projects/rum-house-beniczky/11.jpg",
      "/projects/rum-house-beniczky/12.jpg",
      "/projects/rum-house-beniczky/13.jpg",
    ],
    sections: [
      {
        title: "axonometria",
        images: ["/projects/rum-house-beniczky/3.jpg"],
      },
      {
        title: "axonometria",
        images: ["/projects/rum-house-beniczky/4.jpg"],
      },
      {
        title: "pohľad na bar",
        images: ["/projects/rum-house-beniczky/5.jpg"],
      },
      {
        title: "pohľad na bar",
        images: ["/projects/rum-house-beniczky/6.jpg"],
      },
    ],
  },
  {
    id: "8",
    title: "Rodinný dom Žarnovica",
    slug: "rodinny-dom-zarnovica",
    categories: ["architektúra", "interiér", "novostavba"],
    image: "/projects/rd-zarnovica.jpg",
    location: "Žarnovica",
    yearDesign: "2018-2021",
    yearRealization: "2019- 2024",
    description:
      "Zadaním od mladej rodiny pre návrh rodinného domu na polosamote bolo vytvoriť stodolový dom s verandou a s prvkami modernej architektúry.\n\nVeľkorysý pozemok nad mestom umožnoval osadenie priestranného domu v ideálnej polohe bez kompromisov. Architektúra rodinného domu v tvare L je prienikom sedlovej strechy s rovnou strechou na ktorej sa nachádza priestranná strešná záhrada.\n\nMateriálovo je fasáda domu pokrytá silným lomovým kameňom v celom povrchu obvodových murovaných stien a v kontraste doplnená krehkosťou v podobe presklených štýtových stien podkrovia a celej dennej zóny na prízemí. Sedlová strecha je pokrytá bridlicou a doplnená o tradičné vikiere s čiernym oplechovaním.\n\nVeľkorysý interiérový priestor umožňuje každému členovi rodiny vlastnú voľnočasovú sebarealizáciu v podobe privátneho fitness, pracovne, hosťovskej suity a detskej herne. Každá spálňa disponuje vlastným šatníkom. Dispozícia v dome je prehľadná a jasne definovaná s vyvrcholením s dominantnou 100 m2 dennou zónou, ktorá je prepojená s terasami a záhradou pomocou panoramatickej presklennej fasády.",
    gallery: [
      "/projects/rodinny-dom-zarnovica/14.jpg",
      "/projects/rodinny-dom-zarnovica/15.jpg",
      "/projects/rodinny-dom-zarnovica/16.jpg",
      "/projects/rodinny-dom-zarnovica/17.jpg",
      "/projects/rodinny-dom-zarnovica/18.jpg",
      "/projects/rodinny-dom-zarnovica/19.jpg",
      "/projects/rodinny-dom-zarnovica/20.jpg",
      "/projects/rodinny-dom-zarnovica/21.jpg",
      "/projects/rodinny-dom-zarnovica/22.jpg",
      "/projects/rodinny-dom-zarnovica/23.jpg",
      "/projects/rodinny-dom-zarnovica/24.jpg",
      "/projects/rodinny-dom-zarnovica/25.jpg",
    ],
    sections: [
      {
        title: "situácia",
        images: ["/projects/rodinny-dom-zarnovica/3.jpg"],
      },
      {
        title: "axonometria",
        images: ["/projects/rodinny-dom-zarnovica/4.jpg"],
      },
      {
        title: "axonometria",
        images: ["/projects/rodinny-dom-zarnovica/5.jpg"],
      },
      {
        title: "pôdorys 1.np",
        images: ["/projects/rodinny-dom-zarnovica/6.jpg"],
      },
      {
        title: "pôdorys 2.np",
        images: ["/projects/rodinny-dom-zarnovica/7.jpg"],
      },
      {
        title: "rez rodinným domom",
        images: ["/projects/rodinny-dom-zarnovica/8.jpg"],
      },
      {
        title: "rez rodinným domom",
        images: ["/projects/rodinny-dom-zarnovica/9.jpg"],
      },
      {
        title: "pohľad severný",
        images: ["/projects/rodinny-dom-zarnovica/10.jpg"],
      },
      {
        title: "pohľad južný",
        images: ["/projects/rodinny-dom-zarnovica/11.jpg"],
      },
      {
        title: "pohľad východný",
        images: ["/projects/rodinny-dom-zarnovica/12.jpg"],
      },
      {
        title: "pohľad západný",
        images: ["/projects/rodinny-dom-zarnovica/13.jpg"],
      },
    ],
  },
  {
    id: "9",
    title: "Rodinný dom Pršianska terasa",
    slug: "rodinny-dom-prsianska-terasa",
    categories: ["architektúra", "interiér", "novostavba"],
    image: "/projects/rd-prsianska-terasa.jpg",
    location: "Banská Bystrica, Pršianska terasa",
    yearDesign: "2015-2016",
    yearRealization: "2017- 2019",
    description:
      "Zadaním pre návrh rodinného domu pre mladú rodinnu bolo mestské bývanie v modernom dome s jasným, jednoduchým tvarom pri maximálnom prepojení domu so záhradou.\n\nNávrh pracuje s kvalitnou bielou omietkou fasady, doplnenou o veľkoformátové presklenné plochy vo všetkých obytným miestnostiach. Nerušenosť výhľadu na poschodí doplnená o sklenneé zábradlie na zavesenom balkóne a strešnej terase. Exponovanosť voči slnečným ziskom je ochránená exteriérovými žalúziami a vertikálnymi slnolamami na druhom nadzemnom poschodí. Spálňa s vlastným šatníkom na prízemí komunikuje so záhradou pomocou rohového okna bez parapetu.",
    gallery: [
      "/projects/rodinny-dom-prsianska-terasa/10.jpg",
      "/projects/rodinny-dom-prsianska-terasa/11.jpg",
      "/projects/rodinny-dom-prsianska-terasa/12.jpg",
      "/projects/rodinny-dom-prsianska-terasa/13.jpg",
      "/projects/rodinny-dom-prsianska-terasa/14.jpg",
      "/projects/rodinny-dom-prsianska-terasa/15.jpg",
      "/projects/rodinny-dom-prsianska-terasa/16.jpg",
      "/projects/rodinny-dom-prsianska-terasa/17.jpg",
      "/projects/rodinny-dom-prsianska-terasa/18.jpg",
      "/projects/rodinny-dom-prsianska-terasa/19.jpg",
      "/projects/rodinny-dom-prsianska-terasa/20.jpg",
      "/projects/rodinny-dom-prsianska-terasa/21.jpg",
      "/projects/rodinny-dom-prsianska-terasa/22.jpg",
      "/projects/rodinny-dom-prsianska-terasa/23.jpg",
      "/projects/rodinny-dom-prsianska-terasa/24.jpg",
      "/projects/rodinny-dom-prsianska-terasa/25.jpg",
      "/projects/rodinny-dom-prsianska-terasa/26.jpg",
      "/projects/rodinny-dom-prsianska-terasa/27.jpg",
      "/projects/rodinny-dom-prsianska-terasa/28.jpg",
      "/projects/rodinny-dom-prsianska-terasa/29.jpg",
    ],
    sections: [
      {
        title: "situácia",
        images: ["/projects/rodinny-dom-prsianska-terasa/3.jpg"],
      },
      {
        title: "axonometria",
        images: ["/projects/rodinny-dom-prsianska-terasa/4.jpg"],
      },
      {
        title: "axonometria",
        images: ["/projects/rodinny-dom-prsianska-terasa/5.jpg"],
      },
      {
        title: "pôdorys 1.np",
        images: ["/projects/rodinny-dom-prsianska-terasa/6.jpg"],
      },
      {
        title: "pôdorys 2.np",
        images: ["/projects/rodinny-dom-prsianska-terasa/7.jpg"],
      },
      {
        title: "rez rodinným domom",
        images: ["/projects/rodinny-dom-prsianska-terasa/8.jpg"],
      },
      {
        title: "rez rodinným domom",
        images: ["/projects/rodinny-dom-prsianska-terasa/9.jpg"],
      },
    ],
  },
  {
    id: "10",
    title: "Rodinný dom Kordiky",
    slug: "rodinny-dom-kordiky",
    categories: ["architektúra", "interiér", "novostavba"],
    image: "/projects/rd-kordiky.png",
    location: "Kordíky, okr. Banská Bystrica",
    yearDesign: "2019 - 2020",
    yearRealization: "2020 - 2024",
    description:
      "Zadanie rodinného domu pre mladú štvorčlennú rodinu bolo vytvoriť bývanie na jednej úrovni na svahovitom a úzkom pozemku v horskej obci Kordíky pri Banskej Bystrici.\n\nNašim návrhom bol pozdĺžny tvar rodinného domu, osadení do svahu ktorý na vstupnom poschodí obsahuje zázemie rodinného domu s technickými, skladovými aj relaxačnými priestormi a na druhom nadzemnom poschodí situuje štvorizbový moderným priestor s výstupom na záhradu a terasu s letnou kuchyňou.\n\nArchitektúra domu je jednoduchého tvaru s pultovou strechou na ktorej sme navrhli svetlíky, ktoré dodávajú vnútorným priestorom dispozície slnečné svetlo, ktoré dodáva dynamiku a atmosféru v celom dome.",
    gallery: [
      "/projects/rodinny-dom-kordiky/13.png",
      "/projects/rodinny-dom-kordiky/14.png",
      "/projects/rodinny-dom-kordiky/15.png",
      "/projects/rodinny-dom-kordiky/16.png",
      "/projects/rodinny-dom-kordiky/17.png",
      "/projects/rodinny-dom-kordiky/18.png",
      "/projects/rodinny-dom-kordiky/19.png",
      "/projects/rodinny-dom-kordiky/20.png",
      "/projects/rodinny-dom-kordiky/21.png",
      "/projects/rodinny-dom-kordiky/22.png",
      "/projects/rodinny-dom-kordiky/23.png",
    ],
    sections: [
      {
        title: "axonometria",
        images: ["/projects/rodinny-dom-kordiky/3.jpg"],
      },
      {
        title: "axonometria",
        images: ["/projects/rodinny-dom-kordiky/4.jpg"],
      },
      {
        title: "pôdorys 1.np",
        images: ["/projects/rodinny-dom-kordiky/5.jpg"],
      },
      {
        title: "pôdorys 2.np",
        images: ["/projects/rodinny-dom-kordiky/6.jpg"],
      },
      {
        title: "rez rodinným domom",
        images: ["/projects/rodinny-dom-kordiky/7.jpg"],
      },
      {
        title: "rez rodinným domom",
        images: ["/projects/rodinny-dom-kordiky/8.jpg"],
      },
      {
        title: "pohľady",
        images: [
          "/projects/rodinny-dom-kordiky/9.jpg",
          "/projects/rodinny-dom-kordiky/10.jpg",
          "/projects/rodinny-dom-kordiky/11.jpg",
          "/projects/rodinny-dom-kordiky/12.jpg",
        ],
      },
    ],
  },
  {
    id: "11",
    title: "Interiér bytu v Banskej Bystrici",
    slug: "interier-bytu-banska-bystrica",
    categories: ["interiér", "rekonštrukcia"],
    image: "/projects/byt-bb.jpg",
    location: "Banská Bystrica",
    yearDesign: "2023",
    yearRealization: "2024",
    description:
      "Návrh interiéru v duchu industriálneho štýlu znelo zadanie od klientov.\n\nProjekt rekonštrukcie trojizbového 100 m2 veľkorysého bytu v tehlovom bytovom dome z 50.rokov 20.storočia v centrálnej mestskej zóne Banskej Bystrice počítal s kompletnou výmenou vrstiev a skladieb podláh, stropov a stien ako aj inžinierskych sietí a doplnenia podlahového kúrenia a rekuperácie vzduchu, Premodelovaním vnútornej dispozície sa cielilo na modernú, otvorenú dispozíciu dennej zóny.\n\nNavrhovaná rekonštruckia dodáva historickému bytu technologický štandart moderného interiéru. Industriálny štýl sa naprlno posilňuje odhalenými tehlovými stenami, čiernymi kovovými doplnkami a konštrukciami sklenených deliacich priečok. Teplo interiéru dodáva použitia dubových obkladov stien so skrtými riešeniami interiérových dveri a variabilné druhy osvetlenia podsvietenia miestností.",
    gallery: [
      "/projects/interier-bytu-banska-bystrica/9.jpg",
      "/projects/interier-bytu-banska-bystrica/10.jpg",
      "/projects/interier-bytu-banska-bystrica/11.jpg",
      "/projects/interier-bytu-banska-bystrica/12.jpg",
      "/projects/interier-bytu-banska-bystrica/13.jpg",
      "/projects/interier-bytu-banska-bystrica/14.jpg",
      "/projects/interier-bytu-banska-bystrica/15.jpg",
      "/projects/interier-bytu-banska-bystrica/16.jpg",
      "/projects/interier-bytu-banska-bystrica/17.jpg",
      "/projects/interier-bytu-banska-bystrica/18.jpg",
      "/projects/interier-bytu-banska-bystrica/19.jpg",
      "/projects/interier-bytu-banska-bystrica/20.jpg",
      "/projects/interier-bytu-banska-bystrica/21.jpg",
      "/projects/interier-bytu-banska-bystrica/22.jpg",
      "/projects/interier-bytu-banska-bystrica/23.jpg",
      "/projects/interier-bytu-banska-bystrica/24.jpg",
      "/projects/interier-bytu-banska-bystrica/25.jpg",
      "/projects/interier-bytu-banska-bystrica/26.jpg",
      "/projects/interier-bytu-banska-bystrica/27.jpg",
      "/projects/interier-bytu-banska-bystrica/28.jpg",
      "/projects/interier-bytu-banska-bystrica/29.jpg",
      "/projects/interier-bytu-banska-bystrica/30.jpg",
      "/projects/interier-bytu-banska-bystrica/31.jpg",
      "/projects/interier-bytu-banska-bystrica/32.jpg",
    ],
    sections: [
      {
        title: "axonometria - pôvodný stav",
        images: ["/projects/interier-bytu-banska-bystrica/3.jpg"],
      },
      {
        title: "axonometria - navrhovaný stav",
        images: ["/projects/interier-bytu-banska-bystrica/4.jpg"],
      },
      {
        title: "axonometria",
        images: ["/projects/interier-bytu-banska-bystrica/5.jpg"],
      },
      {
        title: "axonometria",
        images: ["/projects/interier-bytu-banska-bystrica/6.jpg"],
      },
      {
        title: "pôdorys - pôvodný stav",
        images: ["/projects/interier-bytu-banska-bystrica/7.jpg"],
      },
      {
        title: "pôdorys - navrhovaný stav",
        images: ["/projects/interier-bytu-banska-bystrica/8.jpg"],
      },
    ],
  },
  {
    id: "12",
    title: "Nadstavba domu na Sliači",
    slug: "nadstavba-domu-sliaci",
    categories: ["architektúra", "interiér", "rekonštrukcia"],
    image: "/projects/nadstavba-sliaci.png",
    location: "Sliač",
    yearDesign: "2022",
    yearRealization: "2023 - 2024",
    description:
      "Našim zadaním bolo vytvoriť dvojgeneračné bývanie v pôvodnom rodinnom dome z 60.rokov 20.storočia.\n\nNávrh rekonštrukcie počítal s premodelovaním podkrovia aj vnútornej dispozície pre potreby vzniknutia dvoch bytových jednotiek. Na prízemí domu ostal bezberiérovy byt pre staršiu generáciu a na druhom poschodí a v podkroví so sedlovou strechou sme navrhli mezonetový byt pre mladú štvorčlennú rodinu. Spojené široké vikiere dodali praktickú vnútornú výšku a vzdušnejší pocit v podkroví.\n\nOdvetraná fasáda zvýrazňuje novobudované podkrovie od prísne kubického tvaru prvých dvoch poschodí pôvodnej časti domu, ktorú sme navrhli v jednoduchom odtieni bieleho brizolitu bez zateplenia.",
    gallery: [
      "/projects/nadstavba-domu-sliaci/12.png",
      "/projects/nadstavba-domu-sliaci/13.png",
      "/projects/nadstavba-domu-sliaci/14.png",
      "/projects/nadstavba-domu-sliaci/15.png",
      "/projects/nadstavba-domu-sliaci/16.png",
      "/projects/nadstavba-domu-sliaci/17.png",
      "/projects/nadstavba-domu-sliaci/18.png",
      "/projects/nadstavba-domu-sliaci/19.jpg",
      "/projects/nadstavba-domu-sliaci/20.jpg",
      "/projects/nadstavba-domu-sliaci/21.jpg",
    ],
    sections: [
      {
        title: "axonometria - pôvodný stav",
        images: ["/projects/nadstavba-domu-sliaci/3.jpg"],
      },
      {
        title: "axonometria - pôvodný stav",
        images: ["/projects/nadstavba-domu-sliaci/4.jpg"],
      },
      {
        title: "axonometria - navrhovaný stav",
        images: ["/projects/nadstavba-domu-sliaci/5.jpg"],
      },
      {
        title: "axonometria - navrhovaný stav",
        images: ["/projects/nadstavba-domu-sliaci/6.jpg"],
      },
      {
        title: "pôdorys 2.np",
        images: ["/projects/nadstavba-domu-sliaci/7.jpg"],
      },
      {
        title: "pôdorys 3.np",
        images: ["/projects/nadstavba-domu-sliaci/8.jpg"],
      },
      {
        title: "pohľady na rodinný dom - navrhovaný stav",
        images: ["/projects/nadstavba-domu-sliaci/9.jpg"],
      },
      {
        title: "pohľady na rodinný dom - navrhovaný stav",
        images: ["/projects/nadstavba-domu-sliaci/10.jpg"],
      },
      {
        title: "rezy",
        images: ["/projects/nadstavba-domu-sliaci/11.jpg"],
      },
    ],
  },
];
