import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Architektonické Služby | Ramart Ateliér',
  description:
    'Komplexné architektonické služby od architektonickej štúdie cez projekt pre stavebné povolenie a realizačný projekt až po autorský dozor na stavbe.',
}

const SERVICES = [
  {
    number: '01',
    title: 'Architektonická štúdia (AŠ)',
    subtitle: 'Koncept, hmota, svetlo a dispozičné väzby',
    description:
      'Základný kameň celého zámeru. Analyzujeme terénne nerovnosti, svetové strany, výhľady a limity parcely. Vytvárame variantné hmotové riešenia, axonometrické pohľady a detailné 3D vizualizácie vrátane materiálového riešenia fasád a interiéru.',
    deliverables: [
      'Analýza pozemku a územnoplánovacích regulatívov',
      'Hmotovo-priestorový koncept a 3D fotovizualizácie',
      'Variantné dispozičné schémy všetkých podlaží',
      'Predbežný odhad investičných nákladov',
    ],
  },
  {
    number: '02',
    title: 'Projekt pre stavebné povolenie (PSP)',
    subtitle: 'Legislatíva, profesie a povolenia',
    description:
      'Spracovanie kompletnej dokumentácie v zmysle stavebného zákona a príslušných noriem. Koordinujeme všetky špecializované profesie (statika, požiarna ochrana, vykurovanie, zdravotechnika, elektroinštalácia, vzduchotechnika a rekuperácia).',
    deliverables: [
      'Sprievodná a technická správa',
      'Situácia osadenia stavby a napojenia na siete',
      'Stavebná časť — pôdorysy, rezy, pohľady (1:100 / 1:50)',
      'Statické posúdenie nosných konštrukcií a energetický certifikát',
    ],
  },
  {
    number: '03',
    title: 'Realizačný projekt (RP)',
    subtitle: 'Presné výrobné výkresy pre nekompromisnú realizáciu',
    description:
      'Detailná projektová dokumentácia určená priamo pre zhotoviteľa stavby. Každý detail napojenia hydroizolácie, tepelného mosta, bezrámového zasklenia či oplechovania atiky je presne vykreslený, čo eliminuje chyby a predraženie stavby.',
    deliverables: [
      'Detailné výkresy architektonických stykov a uzlov (1:10, 1:5, 1:1)',
      'Výpisy okien, dverí, zámočníckych a klampiarskych prvkov',
      'Skladby podláh, striech a odvetraných fasád',
      'Výkaz výmer a slepý rozpočet pre výber zhotoviteľa',
    ],
  },
  {
    number: '04',
    title: 'Autorský dozor architekta',
    subtitle: 'Garancia remeselnej kvality priamo na stavenisku',
    description:
      'Architektúra žije v realizácii. Počas celej výstavby osobne dohliadame na stavbe na presnosť prevedenia v súlade s projektom. Riešime operatívne otázky so stavbyvedúcim a kontrolujeme kvalitu montáže materiálov.',
    deliverables: [
      'Pravidelné kontrolné dni na stavenisku',
      'Kontrola armovania, betonáže a kvality debnenia',
      'Odsúhlasovanie vzoriek materiálov (kameň, drevo, omietky, plech)',
      'Zápisy do stavebného denníka a účasť na kolaudácii',
    ],
  },
  {
    number: '05',
    title: 'Interiérová architektúra & Dizajn',
    subtitle: 'Mobiliár na mieru, svietidlá a materiálová harmónia',
    description:
      'Interiér vnímame ako neoddeliteľné pokračovanie vonkajšej architektúry. Navrhujeme autorský vstavaný nábytok na mieru, riešenie osvetlenia, povrchové úpravy stien a materiálovú paletu, ktorá harmonizuje s domom.',
    deliverables: [
      'Dispozičné riešenie a zónovanie interiéru',
      'Výkresy atypického nábytku pre stolársku výrobu',
      'Kúpeľňové detaily a kladačské plány obkladov a dlažieb',
      'Svetelno-technický návrh a výber solitérneho nábytku',
    ],
  },
  {
    number: '06',
    title: 'Urbanizmus & Investičné poradenstvo',
    subtitle: 'Územné celky, IBV, HBV a posúdenie pozemkov',
    description:
      'Venujeme sa plánovaniu obytných zón individuálnej a hromadnej bytovej výstavby (IBV/HBV). Pre individuálnych investorov poskytujeme odborné konzultácie pred kúpou nehnuteľnosti alebo pozemku na overenie jeho skutočného stavebného potenciálu.',
    deliverables: [
      'Urbanistické štúdie rozvoja územia',
      'Parcelačné plány a dopravné napojenia',
      'Overenie inžinierskych sietí a kapacitných možností',
      'Architektonicko-stavebný audit existujúcich objektov pred kúpou',
    ],
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#f5f4ef] text-[#0a0b0d] pt-16 md:pt-28 pb-32">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 space-y-20 md:space-y-32">
        
        {/* Page Header */}
        <div className="border-b border-[#ded9cd] pb-16 space-y-6">
          <div className="flex items-center gap-3 font-mono text-[11px] text-[#737882] tracking-[0.3em] uppercase">
            <span className="w-2 h-2 bg-[#0a0b0d]" />
            <span>ROZSAH ARCHITEKTONICKEJ ČINNOSTI</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-light uppercase tracking-tight text-[#0a0b0d] leading-[0.95]">
                KOMPLEXNÉ <br />
                SLUŽBY.
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-base sm:text-lg font-light text-[#525760] leading-relaxed">
                Prevedieme váš zámer od počiatočného auditu pozemku cez tvorivú architektonickú
                štúdiu až po kolaudáciu dokončenej stavby s garanciou autorského dozoru.
              </p>
            </div>
          </div>
        </div>

        {/* Services List (NO generic feature rows) */}
        <div className="divide-y divide-[#ded9cd] border-y border-[#ded9cd]">
          {SERVICES.map((s) => (
            <div
              key={s.number}
              className="py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start"
            >
              {/* Number and Step */}
              <div className="lg:col-span-2 font-mono text-sm tracking-widest text-[#737882]">
                ROZSAH / {s.number}
              </div>

              {/* Title & Subtitle */}
              <div className="lg:col-span-4 space-y-3">
                <h2 className="text-2xl sm:text-3xl font-light uppercase text-[#0a0b0d] leading-snug">
                  {s.title}
                </h2>
                <p className="font-mono text-xs text-[#737882] uppercase tracking-wider">
                  {s.subtitle}
                </p>
              </div>

              {/* Description & Deliverables */}
              <div className="lg:col-span-6 space-y-6">
                <p className="text-base font-light text-[#32363e] leading-relaxed">
                  {s.description}
                </p>

                <div className="border-t border-[#ded9cd]/60 pt-4 space-y-2">
                  <span className="font-mono text-[11px] text-[#737882] tracking-widest uppercase block">
                    VÝSTUPNÁ DOKUMENTÁCIA:
                  </span>
                  <ul className="space-y-1.5 font-mono text-xs text-[#525760]">
                    {s.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-baseline gap-2">
                        <span className="text-[#0a0b0d]">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lead Generation CTA Card */}
        <div className="border border-[#0a0b0d] bg-[#0a0b0d] text-[#f5f4ef] p-8 sm:p-14 md:p-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#88909e] block">
              INDIVIDUÁLNA ARCHITEKTÚRA
            </span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight">
              POTREBUJETE KONZULTOVAŤ VÁŠ ZÁMER?
            </h3>
            <p className="text-sm sm:text-base text-[#9ba2af] max-w-2xl font-light">
              Dohodnite si úvodné stretnutie v ateliéri v Banskej Bystrici. Preberieme možnosti
              vášho pozemku, rozpočet aj časový harmonogram.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end items-start lg:items-end gap-4">
            <Link
              href="/kontakt"
              className="bg-[#f5f4ef] text-[#0a0b0d] hover:bg-white px-8 py-4 font-mono text-xs tracking-[0.25em] uppercase transition-all"
            >
              KONTAKTOVAŤ ATELIÉR →
            </Link>
          </div>
        </div>

      </div>
    </main>
  )
}
