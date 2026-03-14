export interface Project {
  id: string;
  title: string;
  slug: string;
  categories: string[];
  image: string;
  description?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Prístavba k RD a záhradný domček",
    slug: "pristavba-rd-zahradny-domcek",
    categories: ["architektúra", "interiér", "dizajn"],
    image: "/projects/pristavba-rd.jpg",
  },
  {
    id: "2",
    title: "Kaviareň a vinareň Beniczky",
    slug: "kaviaren-vinaren-beniczky",
    categories: ["architektúra", "interiér", "rekonštrukcia"],
    image: "/projects/kaviaren-beniczky.jpg",
  },
  {
    id: "3",
    title: "Rodinný dom Liptovský Mikuláš",
    slug: "rodinny-dom-liptovsky-mikulas",
    categories: ["architektúra", "interiér", "novostavba"],
    image: "/projects/rd-liptovsky-mikulas.jpg",
  },
  {
    id: "4",
    title: "Rodinný dom Poniky",
    slug: "rodinny-dom-poniky",
    categories: ["architektúra", "interiér", "novostavba"],
    image: "/projects/rd-poniky.png",
  },
  {
    id: "5",
    title: "Rekonštrukcia polyfunkčného domu",
    slug: "rekonstrukcia-polyfunkcneho-domu",
    categories: ["architektúra", "interiér", "rekonštrukcia"],
    image: "/projects/polyfunkcny-dom.jpg",
  },
  {
    id: "6",
    title: "Záhradný domček s bazénom",
    slug: "zahradny-domcek-s-bazenom",
    categories: ["architektúra", "interiér", "novostavba"],
    image: "/projects/zahradny-domcek-bazen.png",
  },
  {
    id: "7",
    title: "Rum House Beniczky",
    slug: "rum-house-beniczky",
    categories: ["interiér", "rekonštrukcia"],
    image: "/projects/rum-house-beniczky.jpg",
  },
  {
    id: "8",
    title: "Rodinný dom Žarnovica",
    slug: "rodinny-dom-zarnovica",
    categories: ["architektúra", "interiér", "novostavba"],
    image: "/projects/rd-zarnovica.jpg",
  },
  {
    id: "9",
    title: "Rodinný dom Pršianska terasa",
    slug: "rodinny-dom-prsianska-terasa",
    categories: ["architektúra", "interiér", "novostavba"],
    image: "/projects/rd-prsianska-terasa.jpg",
  },
  {
    id: "10",
    title: "Rodinný dom Kordiky",
    slug: "rodinny-dom-kordiky",
    categories: ["architektúra", "interiér", "novostavba"],
    image: "/projects/rd-kordiky.png",
  },
  {
    id: "11",
    title: "Interiér bytu v Banskej Bystrici",
    slug: "interier-bytu-banska-bystrica",
    categories: ["interiér", "rekonštrukcia"],
    image: "/projects/byt-bb.jpg",
  },
  {
    id: "12",
    title: "Nadstavba domu na Sliači",
    slug: "nadstavba-domu-sliaci",
    categories: ["architektúra", "interiér", "rekonštrukcia"],
    image: "/projects/nadstavba-sliaci.png",
  },
];
