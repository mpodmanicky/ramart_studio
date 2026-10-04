import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ateliér & Prístup | Ramart Ateliér',
  description:
    'Autorský ateliér Ing. arch. Martina Rajčana. Architektúra s rešpektom k moderným materiálom, proporcii a kontextu územia.',
}

export default function AtelierPage() {
  return (
    <main className="min-h-screen bg-[#f5f4ef] text-[#0a0b0d] pt-16 md:pt-28 pb-32">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 space-y-24 md:space-y-36">
        
        {/* Page Header: Lots of Space & Monumental Headline */}
        <div className="border-b border-[#ded9cd] pb-16 space-y-6">
          <div className="flex items-center gap-3 font-mono text-[11px] text-[#737882] tracking-[0.3em] uppercase">
            <span className="w-2 h-2 bg-[#0a0b0d]" />
            <span>ATELIÉR ARCHITEKTÚRY / AUTORSKÁ PRAX</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-light uppercase tracking-tight text-[#0a0b0d] leading-[0.95]">
                PRAVDA <br />
                MATERIÁLU.
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-base sm:text-lg font-light text-[#525760] leading-relaxed">
                Stavba nie je kulisa. Je to trvalý zásah do krajiny. Veríme v architektúru,
                ktorá priznáva svoju konštrukciu a materiály bez zbytočného nánosu dekorácií.
              </p>
            </div>
          </div>
        </div>

        {/* Architect Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          <div className="lg:col-span-5 space-y-8">
            <div className="relative w-full aspect-[4/5] overflow-hidden">
              <Image
                src="/projects/kaviaren-beniczky.jpg"
                alt="Ramart Ateliér - Architektúra a priestor"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 600px"
              />
            </div>

            <div className="font-mono text-xs text-[#737882] space-y-2 border-t border-[#ded9cd] pt-4">
              <p className="text-[#0a0b0d] font-semibold tracking-wider uppercase">
                ING. ARCH. MARTIN RAJČAN
              </p>
              <p>ZAKLADATEĽ & HLAVNÝ ARCHITEKT ATELIÉRU</p>
              <p>FAKULTA ARCHITEKTÚRY STU V BRATISLAVE (2012)</p>
              <p>AUTORIZOVANÝ ARCHITEKT SKA ČÍSLO 2013</p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#737882] block">
              AUTORSKÝ MANIFEST
            </span>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-light uppercase text-[#0a0b0d] leading-snug">
              OD PRVÉHO NÁČRTU PO DETAIL SKRUTKY.
            </h2>

            <div className="space-y-6 text-base sm:text-lg font-light text-[#2b2f36] leading-relaxed">
              <p>
                Ateliér Ramart Studio bol založený v roku 2013 autorizovaným architektom
                Ing. arch. Martinom Rajčanom po ukončení štúdia na Fakulte architektúry STU v Bratislave.
              </p>
              <p>
                Naším cieľom nie je chrliť katalógové riešenia. Každé zadanie vnímame ako unikátny dialóg.
                Pozemok diktuje svetlo a orientáciu, investor určuje životný rytmus a my do tohto vzťahu
                vnášame architektonickú disciplínu, priestorovú veľkorysosť a materiálovú poctivosť.
              </p>
              <p>
                Špecializujeme sa na rodinné domy vyššieho štandardu, citlivé rekonštrukcie historických
                a vidieckych objektov, polyfunkčné budovy a autorský interiérový dizajn. Pôsobíme
                z Banskej Bystrice s projektmi a realizáciami po celom území Slovenska.
              </p>
            </div>

            <div className="pt-6 border-t border-[#ded9cd] flex flex-wrap gap-4 font-mono text-xs">
              <Link
                href="/portfolio"
                className="border border-[#0a0b0d] bg-[#0a0b0d] text-[#f5f4ef] hover:bg-transparent hover:text-[#0a0b0d] px-6 py-3.5 tracking-[0.25em] uppercase transition-all"
              >
                PREZRIEŤ REALIZÁCIE →
              </Link>
              <Link
                href="/kontakt"
                className="border border-[#0a0b0d] text-[#0a0b0d] hover:bg-[#0a0b0d] hover:text-[#f5f4ef] px-6 py-3.5 tracking-[0.2em] uppercase transition-all"
              >
                KONZULTOVAŤ ZÁMER
              </Link>
            </div>
          </div>

        </div>

        {/* Modern Materials Philosophy (NO feature rows, editorial structure) */}
        <div className="border-t border-[#ded9cd] pt-24 space-y-16">
          
          <div className="space-y-4 max-w-3xl">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#737882] block">
              PRÁCA S MATERIÁLOM
            </span>
            <h2 className="text-3xl sm:text-5xl font-light uppercase tracking-tight text-[#0a0b0d]">
              MODERNÉ MATERIÁLY & TRVÁCNOSŤ
            </h2>
            <p className="text-base text-[#525760] font-light">
              Materiál musí hovoriť pravdu o svojej povahe. Netajíme štruktúru betónu ani kresbu dreva.
            </p>
          </div>

          <div className="divide-y divide-[#ded9cd] border-y border-[#ded9cd]">
            
            <div className="py-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-baseline">
              <div className="md:col-span-3 font-mono text-sm tracking-widest text-[#0a0b0d] uppercase">
                01 / POHĽADOVÝ BETÓN
              </div>
              <div className="md:col-span-9 space-y-2">
                <h3 className="text-xl font-light uppercase text-[#0a0b0d]">
                  Monolitická stabilita & surová textúra
                </h3>
                <p className="text-sm font-light text-[#525760] leading-relaxed">
                  Železobetónové nosné steny a stropy s priznanou textúrou doskového alebo hladkého debnenia.
                  Vytvárajú akumulačné jadro domu s vynikajúcou tepelnou zotrvačnosťou a neopakovateľnou estetikou.
                </p>
              </div>
            </div>

            <div className="py-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-baseline">
              <div className="md:col-span-3 font-mono text-sm tracking-widest text-[#0a0b0d] uppercase">
                02 / LOMOVÝ KAMEŇ & BRIDLICA
              </div>
              <div className="md:col-span-9 space-y-2">
                <h3 className="text-xl font-light uppercase text-[#0a0b0d]">
                  Tektonické ukotvenie v krajine
                </h3>
                <p className="text-sm font-light text-[#525760] leading-relaxed">
                  Použitie masívneho prírodného kameňa na sokloch a obvodových stenách odkazuje na tradičné
                  stavebné remeslo stredného Slovenska, no v moderných kubických a stodolových formách.
                </p>
              </div>
            </div>

            <div className="py-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-baseline">
              <div className="md:col-span-3 font-mono text-sm tracking-widest text-[#0a0b0d] uppercase">
                03 / VEĽKOFORMÁTOVÉ SKLO
              </div>
              <div className="md:col-span-9 space-y-2">
                <h3 className="text-xl font-light uppercase text-[#0a0b0d]">
                  Plynulé stieranie hranice medzi interiérom a exteriérom
                </h3>
                <p className="text-sm font-light text-[#525760] leading-relaxed">
                  Panoramatické trojsklá s minimálnymi rámami, zapustené vodiace lišty posuvných systémov HS-portal
                  a bezrámové rohové zasklenia prinášajú záhradu priamo do obytného priestoru.
                </p>
              </div>
            </div>

            <div className="py-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-baseline">
              <div className="md:col-span-3 font-mono text-sm tracking-widest text-[#0a0b0d] uppercase">
                04 / MASÍVNY DUB & REMESELNÉ DREVO
              </div>
              <div className="md:col-span-9 space-y-2">
                <h3 className="text-xl font-light uppercase text-[#0a0b0d]">
                  Taktilné teplo domova a akustická pohoda
                </h3>
                <p className="text-sm font-light text-[#525760] leading-relaxed">
                  Drevené fasádne lamely, masívne parkety a autorský nábytok na mieru. Drevo vyvažuje
                  chlad betónu a kameňa a dodáva priestoru intímny, útulný charakter.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </main>
  )
}
