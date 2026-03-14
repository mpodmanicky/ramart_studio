# 📁 Sprievodca pridávaním projektov

Tento dokument vysvetľuje, ako pridávať nové projekty do vášho webu Ramart Studio.

## 🏗️ Štruktúra projektu

Vaša aplikácia používa **dynamické routy** v Next.js na vytvorenie stránok pre každý projekt. Funguje to takto:

```
ramart_studio/
├── app/
│   ├── page.tsx                          # Domovská stránka (zoznam projektov)
│   └── projekty/
│       └── [slug]/
│           └── page.tsx                  # Šablóna pre detail projektu
├── lib/
│   └── projects.ts                       # Dáta všetkých projektov
└── public/
    └── projects/                         # Obrázky projektov
        ├── pristavba-rd.jpg
        ├── kaviaren-beniczky.jpg
        └── ...
```

## ➕ Ako pridať nový projekt

### Krok 1: Pripravte obrázky

1. Uložte hlavný obrázok projektu do priečinka `public/projects/`
2. Názov súboru by mal byť v formáte: `nazov-projektu.jpg`
3. Príklad: `public/projects/rodinny-dom-zilina.jpg`

### Krok 2: Pridajte projekt do dát

Otvorte súbor `lib/projects.ts` a pridajte nový objekt do poľa `projects`:

```typescript
{
  id: "13",                                    // Unikátne ID (ďalšie číslo v rade)
  title: "Rodinný dom Žilina",                // Názov projektu
  slug: "rodinny-dom-zilina",                 // URL slug (bez diakritiky, malé písmená, s pomlčkami)
  categories: ["architektúra", "interiér", "novostavba"],  // Kategórie projektu
  image: "/projects/rodinny-dom-zilina.jpg",  // Cesta k hlavnému obrázku
  description: "Moderný rodinný dom..."       // Voliteľný popis (môžete pridať neskôr)
}
```

**Dôležité:**
- **slug**: Musí byť jedinečný, bez medzier, bez diakritiky, iba malé písmená a pomlčky
- **categories**: Bežné kategórie sú:
  - `architektúra`
  - `interiér`
  - `dizajn`
  - `novostavba`
  - `rekonštrukcia`
- **image**: Cesta začína s `/projects/` (relatívna k priečinku `public`)

### Krok 3: Hotovo! ✅

To je všetko! Next.js automaticky:
- Zobrazí projekt na domovskej stránke
- Vytvorí dynamickú stránku na URL: `https://ramartstudio.sk/projekty/rodinny-dom-zilina`
- Vygeneruje SEO metadata pre vyhľadávače

## 🎨 Ako fungujú slugy

**Slug** je URL-friendly verzia názvu projektu:

| Názov projektu | Slug |
|----------------|------|
| Rodinný dom Poniky | `rodinny-dom-poniky` |
| Kaviareň a vinareň Beniczky | `kaviaren-vinaren-beniczky` |
| Interiér bytu v Banskej Bystrici | `interier-bytu-banska-bystrica` |

**Pravidlá pre slug:**
- ✅ Iba malé písmená
- ✅ Bez medzier (použite pomlčky `-`)
- ✅ Bez diakritiky (á → a, š → s, ž → z, atď.)
- ✅ Bez špeciálnych znakov
- ✅ Stručný a výstižný

## 📄 Prispôsobenie detailu projektu

Ak chcete pridať viac obsahu na stránku projektu (viac obrázkov, text, popis), upravte súbor:

`app/projekty/[slug]/page.tsx`

Môžete pridať:
- **Galériu obrázkov**: Pole obrázkov v `projects.ts`
- **Podrobný popis**: Dlhší textový obsah
- **Technické detaily**: Plocha, rok realizácie, lokalita
- **Sekcie**: Rôzne časti projektu (fasáda, interiér, záhrada)

### Príklad rozšírenia dát projektu:

```typescript
// V lib/projects.ts
export interface Project {
  id: string;
  title: string;
  slug: string;
  categories: string[];
  image: string;
  description?: string;
  // Nové polia:
  year?: number;
  location?: string;
  area?: string;
  gallery?: string[];  // Ďalšie obrázky
}

// Príklad projektu s viac detailmi:
{
  id: "13",
  title: "Rodinný dom Žilina",
  slug: "rodinny-dom-zilina",
  categories: ["architektúra", "interiér", "novostavba"],
  image: "/projects/rodinny-dom-zilina.jpg",
  description: "Moderný rodinný dom s minimalistickým dizajnom...",
  year: 2024,
  location: "Žilina",
  area: "180 m²",
  gallery: [
    "/projects/zilina-1.jpg",
    "/projects/zilina-2.jpg",
    "/projects/zilina-3.jpg",
  ]
}
```

## 🔍 SEO a metadáta

Každý projekt automaticky dostáva:
- **Meta title**: `Názov projektu | Ramart Studio`
- **Meta description**: Generovaný z názvu a kategórií
- **OpenGraph tags**: Pre zdieľanie na sociálnych sieťach
- **Dynamic sitemap**: Automaticky zahŕňa všetky projekty

## 🚀 Nasadenie zmien

1. Pridajte nový projekt do `lib/projects.ts`
2. Uložte obrázky do `public/projects/`
3. Commit a push do Git repozitára
4. Next.js automaticky vygeneruje nové stránky pri builde

```bash
git add .
git commit -m "Pridaný nový projekt: Rodinný dom Žilina"
git push
```

## 📋 Checklist pre nový projekt

- [ ] Obrázok uložený v `public/projects/`
- [ ] Projekt pridaný do `lib/projects.ts`
- [ ] `slug` je unikátny a bez diakritiky
- [ ] `categories` sú správne vyplnené
- [ ] Cesta k `image` je správna
- [ ] Projekt sa zobrazuje na domovskej stránke
- [ ] Detail projektu sa otvára na `/projekty/[slug]`
- [ ] Metadata (title, description) sú správne

## 💡 Tipy

- **Názvy obrázkov**: Používajte konzistentné pomenovanie (napr. `rd-mesto.jpg`)
- **Veľkosť obrázkov**: Optimalizujte obrázky pred uploadom (ideálne do 500 KB)
- **Formát**: Preferujte `.jpg` pre fotografie, `.png` pre grafiku
- **Aspect ratio**: Odporúčame 4:3 alebo 16:9 pre konzistentný vzhľad

## ❓ Často kladené otázky

**Q: Môžem zmeniť slug existujúceho projektu?**
A: Áno, ale zmení sa URL adresa projektu. Staré odkazy prestanú fungovať.

**Q: Koľko projektov môžem pridať?**
A: Neobmedzene. Všetky sú staticky generované pri builde.

**Q: Ako zmením poradie projektov?**
A: Jednoducho preskupte objekty v poli `projects` v súbore `lib/projects.ts`.

**Q: Môžem pridať viac obrázkov do projektu?**
A: Áno! Pridajte pole `gallery: string[]` do rozhrania `Project` a upravte detail projektu.

---

**Potrebujete pomoc?** Kontaktujte vývojára alebo pozrite dokumentáciu Next.js: https://nextjs.org/docs