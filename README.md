# RAMART ATELIÉR — Architektonické štúdio Ing. arch. Martin Rajčan

Moderná, čistá a responzívna webová stránka ateliéru prepojená s **Payload CMS 3.x** systémom pre správu obsahu, portfólia a dopytov.

---

## 🏛️ Dizajnový systém & Filozofia

- **Farby**:
  - Podkladová: **Bone** (`#f5f4ef`) — teplý architektonický minerálny odtieň (vápenec / omietka)
  - Doplnkové: **Čierna** (`#0a0b0d`) a **Antracitová** (`#181a1d` / `#23272d`)
  - Invertovaná pätička: hlboký antracit s autentickým architektonickým **blueprint SVG plánom** s kótami, modulovou sieťou a rohovou pečiatkou
- **Typografia**: Monumentálne nadpisy (`Space Grotesk`) a technická anotácia (`Space Mono`)
- **Pravidlá dizajnu**:
  - Žiadne zaoblenia (`border-radius: 0 !important`)
  - Žiadne badges / odznaky
  - Žiadne generické feature rows
  - Žiadne ikony ani emoji — striktná architektonická typografia (`T /`, `M /`, `A /`)
  - Geometrické akcenty (zameriavacie krížiky `+`, osové čiary, modulové kóty)
  - Veľkorysé množstvo negatívneho priestoru (white space) s extrémnymi vizuálmi

---

## 📂 Architektúra stránok

1. **Hlavná stránka (`/`)**:
   - Monumentálny úvod a architektonické krédo
   - Informácie o ateliéri a materiálovej pravde (pohľadový betón, lomový kameň, drevo, veľkoformátové sklo)
   - Výber kľúčových realizácií s priamou výzvou na prezeranie portfólia
   - Architektonický proces (01 Analýza → 02 Štúdia → 03 PSP & Realizačný projekt → 04 Autorský dozor)
   - Konverzná sekcia pre získavanie nových investičných zámerov (leads)

2. **Portfólio (`/portfolio`)**:
   - Kompletný archív všetkých 12 projektov
   - Typologický filter (`VŠETKY REALIZÁCIE`, `ARCHITEKTÚRA`, `NOVOSTAVBY RD`, `REKONŠTRUKCIE`, `INTERIÉRY`)
   - Asymetrický architektonický raster s vysokým rozlíšením fotografií

3. **Detail projektu (`/projekty/[slug]`)**:
   - Veľkoformátový hero vizuál
   - Technické metadáta (lokalita, rok návrhu, rok realizácie, stav, autorizácia SKA)
   - Architektonický popis
   - Výkresová dokumentácia (axonometrie, pôdorysy 1.NP/2.NP, rezy, pohľady)
   - Fotogaléria detailov stavby

4. **Ateliér (`/atelier`)**:
   - Náhrada pôvodnej podstránky "O nás"
   - Profil Ing. arch. Martina Rajčana (Fakulta architektúry STU v Bratislave, autorizácia SKA)
   - Rozbor práce s modernými materiálmi
   - Pôvodná adresa `/o-nas` automaticky presmerováva na `/atelier`

5. **Služby (`/sluzby`)**:
   - Podrobný rozpis fáz od štúdie po autorský dozor a urbanizmus bez generických feature boxov

6. **Kontakt & Získavanie dopytov (`/kontakt`)**:
   - Interaktívny formulár investičného zámeru napojený na Payload CMS (`inquiries`)
   - Kontaktné a fakturačné údaje ateliéru
   - Architektonicky štylizovaná mapa Banskej Bystrice

---

## ⚙️ Správa obsahu: Payload CMS (`/admin`)

Payload CMS 3.x beží priamo v Next.js App Router s lokálnou SQLite databázou (`payload.db`):

- **Administračné rozhranie**: [http://localhost:3000/admin](http://localhost:3000/admin)
- **Kolekcie**:
  - **Projects (`projects`)**: Správa portfólia, fotografií, výkresov a metadát
  - **Media (`media`)**: Nahrávanie obrázkov a výkresov
  - **Inquiries (`inquiries`)**: Prijaté dopyty a investičné zámery od návštevníkov webu
  - **Users (`users`)**: Správa administrátorov ateliéru

### Prvé prihlásenie do Payload CMS:
1. Spustite `npm run dev`
2. Otvorte v prehliadači `http://localhost:3000/admin`
3. Vytvorte si svoj prvý administrátorský účet (e-mail a heslo)
4. Všetky existujúce projekty sa automaticky nasynchronizujú do databázy!

---

## 🚀 Spustenie projektu

```bash
# Vývojový server
npm run dev

# Produkčný build a kontrola typov
npm run build

# Produkčné spustenie
npm run start
```
