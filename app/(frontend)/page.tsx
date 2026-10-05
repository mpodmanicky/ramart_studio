import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getProjects } from '@/lib/payload'
import { FadeIn, StaggerContainer } from '@/components/motion/fade-in'
import HomeProjectMosaic from '@/components/home-project-mosaic'

export const metadata: Metadata = {
  title: 'RAMART ATELIÉR | Architektúra & Realizácie Ing. arch. Martin Rajčan',
  description:
    'Architektonický ateliér Ing. arch. Martina Rajčana v Banskej Bystrici. Autorské rodinné domy, novostavby a rekonštrukcie s dôrazom na moderné materiály a individuálny prístup.',
}

export default async function HomePage() {
  const allProjects = await getProjects()
  const featuredProjects = allProjects.slice(0, 4)

  return (
    <main className="min-h-screen bg-[#f5f4ef] text-[#0a0b0d]">
      
      {/* ──────────────────────────────────────────────────────────── */}
      {/* 1. HERO SECTION: AIRY, MONUMENTAL & EDITORIAL SCALE */}
      {/* ──────────────────────────────────────────────────────────── */}
      <section className="pt-20 sm:pt-28 md:pt-36 pb-20 md:pb-32 px-6 sm:px-10 lg:px-16 max-w-[1720px] mx-auto border-b border-[#ded9cd]">
        
        {/* Top Architectural Meta Bar */}
        <FadeIn direction="down" duration={0.6}>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10 md:mb-16 font-mono text-[11px] text-[#737882] tracking-[0.25em] uppercase">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-[#0a0b0d]" />
              <span>ARCHITEKTONICKÝ ATELIÉR / BANSKÁ BYSTRICA</span>
            </div>
          </div>
        </FadeIn>

        {/* Monumental Headline */}
        <div className="space-y-8 mb-16 md:mb-24">
          <FadeIn duration={0.9} delay={0.1}>
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[100px] font-light uppercase tracking-tight leading-[0.96] text-[#0a0b0d]">
              ARCHITEKTÚRA <br />
              <span className="text-[#68707d]">PREMYSLENÁ</span> <br />
              DO DETAILU.
            </h1>
          </FadeIn>

          <FadeIn duration={0.8} delay={0.25}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
              <div className="lg:col-span-8">
                <p className="text-lg sm:text-xl md:text-2xl font-light text-[#2a2d33] leading-relaxed max-w-3xl">
                  Navrhujeme rodinné domy, rekonštrukcie a prémiové interiéry. Pracujeme s poctivými
                  modernými materiálmi — surový betón, prírodný kameň, oceľ a masívne drevo.
                  Každá stavba vzniká na mieru topografii pozemku a životnému štýlu investora.
                </p>
              </div>
              
              <div className="lg:col-span-4 flex flex-col justify-end items-start lg:items-end gap-4 font-mono text-xs">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-3 border border-[#0a0b0d] bg-[#0a0b0d] text-[#f5f4ef] hover:bg-transparent hover:text-[#0a0b0d] px-8 py-4 tracking-[0.25em] uppercase transition-all duration-300"
                >
                  PREZRIEŤ PORTFÓLIO →
                </Link>
                <span className="tracking-widest uppercase text-[10px] text-[#737882]">
                  12 KOMPLETNÝCH ARCHITEKTONICKÝCH REALIZÁCIÍ
                </span>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Large Hero Project Feature */}
        <FadeIn duration={1} delay={0.35}>
          <div className="relative space-y-4">
            <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] overflow-hidden">
              <Image
                src="/projects/rd-zarnovica.jpg"
                alt="Rodinný dom Žarnovica - Ramart Ateliér"
                fill
                priority
                className="object-cover transition-transform duration-1000 ease-out hover:scale-102"
                sizes="(max-width: 1720px) 100vw, 1720px"
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center font-mono text-[11px] text-[#737882] uppercase tracking-wider gap-2">
              <span>REALIZÁCIA / RODINNÝ DOM ŽARNOVICA</span>
              <span>LOMOVÝ KAMEŇ, BRIDLICA & VEĽKOFORMÁTOVÉ SKLO / 2024</span>
            </div>
          </div>
        </FadeIn>

      </section>

      {/* ──────────────────────────────────────────────────────────── */}
      {/* 2. STUDIO HIGHLIGHTS & KEY NUMBERS */}
      {/* ──────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 max-w-[1720px] mx-auto border-b border-[#ded9cd]">
        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 font-mono">
          <FadeIn direction="up">
            <div className="space-y-2 border-l border-[#ded9cd] pl-6">
              <span className="text-3xl sm:text-4xl md:text-5xl font-light text-[#0a0b0d] block">
                2013
              </span>
              <span className="text-xs text-[#737882] tracking-widest uppercase block">
                ROK ZALOŽENIA ATELIÉRU
              </span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <div className="space-y-2 border-l border-[#ded9cd] pl-6">
              <span className="text-3xl sm:text-4xl md:text-5xl font-light text-[#0a0b0d] block">
                12+
              </span>
              <span className="text-xs text-[#737882] tracking-widest uppercase block">
                ZDOKUMENTOVANÝCH REALIZÁCIÍ
              </span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <div className="space-y-2 border-l border-[#ded9cd] pl-6">
              <span className="text-3xl sm:text-4xl md:text-5xl font-light text-[#0a0b0d] block">
                100%
              </span>
              <span className="text-xs text-[#737882] tracking-widest uppercase block">
                AUTORSKÝ PRÍSTUP K PARCELE
              </span>
            </div>
          </FadeIn>
        </StaggerContainer>
      </section>

      {/* ──────────────────────────────────────────────────────────── */}
      {/* 3. FEATURED REALIZATIONS SHOWCASE */}
      {/* ──────────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-36 px-6 sm:px-10 lg:px-16 max-w-[1720px] mx-auto border-b border-[#ded9cd]">
        
        {/* Section Header */}
        <FadeIn>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-16 md:mb-24 border-b border-[#ded9cd] pb-8">
            <div className="space-y-3">
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#737882] block">
                SELEKCIA Z ATELIÉRU
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-light uppercase tracking-tight text-[#0a0b0d]">
                VYBRANÉ PROJEKTY
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="font-mono text-xs tracking-[0.25em] uppercase border border-[#0a0b0d] px-6 py-3.5 hover:bg-[#0a0b0d] hover:text-[#f5f4ef] transition-all"
            >
              OTVORIŤ CELÉ PORTFÓLIO →
            </Link>
          </div>
        </FadeIn>

        {/* Kamenárska mozaika vybraných diel bez popisov zvonku (on-hover & touch overlay) */}
        <HomeProjectMosaic projects={featuredProjects} />

        {/* Full Portfolio Action Bar */}
        <FadeIn delay={0.2}>
          <div className="mt-20 md:mt-28 pt-10 border-t border-[#ded9cd] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <p className="text-sm font-light text-[#525760]">
              Zaujímajú vás pôdorysy, výkresová časť alebo ďalšie typológie stavieb?
            </p>
            <Link
              href="/portfolio"
              className="font-mono text-xs tracking-[0.25em] uppercase border-b border-[#0a0b0d] pb-1 text-[#0a0b0d] hover:text-[#525760] transition-colors"
            >
              PRESKÚMAŤ VŠETKY REALIZÁCIE →
            </Link>
          </div>
        </FadeIn>

      </section>

      {/* ──────────────────────────────────────────────────────────── */}
      {/* 4. ATELIER PHILOSOPHY & MATERIAL TRUTH */}
      {/* ──────────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-36 px-6 sm:px-10 lg:px-16 max-w-[1720px] mx-auto border-b border-[#ded9cd]">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          <FadeIn className="lg:col-span-5 space-y-6">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#737882] block">
              MATERIÁLOVÁ FILOZOFIA
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight text-[#0a0b0d] leading-snug">
              AUTORSKÝ ATELIÉR S REŠPEKTOM K REMESLU.
            </h2>
            <div className="space-y-2 font-mono text-xs text-[#737882] pt-4 border-t border-[#ded9cd]">
              <p className="text-[#0a0b0d] font-semibold">ING. ARCH. MARTIN RAJČAN</p>
              <p>FAKULTA ARCHITEKTÚRY STU V BRATISLAVE</p>
              <p>SLOVENSKÁ KOMORA ARCHITEKTOV (SKA)</p>
            </div>
          </FadeIn>

          <FadeIn className="lg:col-span-7 space-y-10" delay={0.2}>
            <p className="text-lg sm:text-xl font-light text-[#2b2f36] leading-relaxed">
              Pracujeme s klientom individuálne — od overenia pozemku a architektonickej štúdie
              cez realizačný projekt až po osobný autorský dozor na stavbe. Odmietame povrchné
              trendy, ktoré rýchlo starnú. Navrhujeme čisté formy s materiálmi, ktoré získavajú patinu.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 border-t border-[#ded9cd]">
              <div className="space-y-2">
                <span className="font-mono text-xs text-[#737882] uppercase tracking-wider block">
                  01 / MONOLIT & KAMEŇ
                </span>
                <p className="text-sm font-light text-[#525760] leading-relaxed">
                  Železobetón, lomový kameň a bridlica. Pevné zakotvenie objektu do terénu s trvalou stabilitou.
                </p>
              </div>

              <div className="space-y-2">
                <span className="font-mono text-xs text-[#737882] uppercase tracking-wider block">
                  02 / DREVO & OCEĽ
                </span>
                <p className="text-sm font-light text-[#525760] leading-relaxed">
                  Odvetrané fasády z prírodného dreva, čierne oceľové detaily a precízne remeselné prevedenie.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/atelier"
                className="font-mono text-xs tracking-[0.25em] uppercase border-b border-[#0a0b0d] pb-1 text-[#0a0b0d] hover:text-[#525760] transition-colors"
              >
                PODROBNEJŠIE O ATELIÉRI A MATERIÁLOCH →
              </Link>
            </div>
          </FadeIn>

        </div>

      </section>

      {/* ──────────────────────────────────────────────────────────── */}
      {/* 5. ARCHITECTURAL PROCESS ROADMAP */}
      {/* ──────────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-36 px-6 sm:px-10 lg:px-16 max-w-[1720px] mx-auto border-b border-[#ded9cd]">
        
        <FadeIn>
          <div className="space-y-4 mb-16 md:mb-20">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#737882] block">
              OD PRVÉHO ROZHOVORU PO KOLAUDÁCIU
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight text-[#0a0b0d]">
              AKO PREBIEHA SPOLUPRÁCA
            </h2>
          </div>
        </FadeIn>

        <div className="divide-y divide-[#ded9cd] border-y border-[#ded9cd]">
          <FadeIn>
            <div className="py-8 md:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
              <div className="lg:col-span-2 font-mono text-xs tracking-widest text-[#737882]">FÁZA 01</div>
              <div className="lg:col-span-4 text-xl font-light uppercase text-[#0a0b0d]">Analýza pozemku & Zadanie</div>
              <div className="lg:col-span-6 text-sm font-light text-[#525760]">
                Posúdenie orientácie, sklonu parcely, územných regulatívov a definovanie dispozičných priorít.
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="py-8 md:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
              <div className="lg:col-span-2 font-mono text-xs tracking-widest text-[#737882]">FÁZA 02</div>
              <div className="lg:col-span-4 text-xl font-light uppercase text-[#0a0b0d]">Architektonická štúdia</div>
              <div className="lg:col-span-6 text-sm font-light text-[#525760]">
                Hmotový koncept, 3D vizualizácie, priestorové axonometrie a dispozičné riešenia všetkých podlaží.
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="py-8 md:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
              <div className="lg:col-span-2 font-mono text-xs tracking-widest text-[#737882]">FÁZA 03</div>
              <div className="lg:col-span-4 text-xl font-light uppercase text-[#0a0b0d]">Projekt PSP & Realizácia</div>
              <div className="lg:col-span-6 text-sm font-light text-[#525760]">
                Kompletná projektová dokumentácia pre povolenie a realizačné výkresy detailov pre zhotoviteľa.
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="py-8 md:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
              <div className="lg:col-span-2 font-mono text-xs tracking-widest text-[#737882]">FÁZA 04</div>
              <div className="lg:col-span-4 text-xl font-light uppercase text-[#0a0b0d]">Autorský dozor na stavbe</div>
              <div className="lg:col-span-6 text-sm font-light text-[#525760]">
                Pravidelná osobná kontrola dodržania projektu, presnosti detailov a remeselnej kvality prevedenia.
              </div>
            </div>
          </FadeIn>
        </div>

      </section>

      {/* ──────────────────────────────────────────────────────────── */}
      {/* 6. LEAD ACQUISITION & CONSULTATION DIALOGUE */}
      {/* ──────────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-36 px-6 sm:px-10 lg:px-16 max-w-[1720px] mx-auto">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#737882] block">
                INICIÁCIA PROJEKTU
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-light uppercase tracking-tight text-[#0a0b0d] leading-tight">
                MÁTE ZÁMER ALEBO <br />
                VYBERÁTE POZEMOK?
              </h2>
              <p className="text-base text-[#525760] font-light leading-relaxed max-w-xl">
                Radi s vami preberieme možnosti vášho pozemku, rozpočet aj časový harmonogram
                pri osobnom stretnutí v ateliéri v Banskej Bystrici alebo priamo na mieste stavby.
              </p>

              <div className="pt-4 flex flex-wrap gap-4 font-mono text-xs">
                <Link
                  href="/kontakt"
                  className="bg-[#0a0b0d] text-[#f5f4ef] hover:bg-[#2d323b] px-8 py-4 tracking-[0.25em] uppercase transition-all"
                >
                  VYPLNIŤ ZADANIE INVESTÍCIE →
                </Link>
                <a
                  href="tel:+421908477417"
                  className="border border-[#0a0b0d] text-[#0a0b0d] hover:bg-[#0a0b0d] hover:text-[#f5f4ef] px-6 py-4 tracking-[0.2em] uppercase transition-all"
                >
                  T / +421 908 477 417
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 border border-[#ded9cd] bg-[#faf9f6] p-8 sm:p-12 space-y-6">
              <h3 className="font-mono text-xs tracking-[0.3em] uppercase text-[#0a0b0d] pb-4 border-b border-[#ded9cd]">
                SÍDLO ATELIÉRU RAMART
              </h3>
              <div className="space-y-3 font-mono text-xs text-[#525760]">
                <p className="text-[#0a0b0d] font-medium">LAZOVNÁ 43, 974 01 BANSKÁ BYSTRICA</p>
                <p>M / MARTIN@RAMARTSTUDIO.SK</p>
                <p>T / +421 908 477 417</p>
                <p className="pt-2 text-[11px] text-[#88909e]">PÔSOBENIE: CELÉ SLOVENSKO</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

    </main>
  )
}
