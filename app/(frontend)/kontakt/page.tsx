import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kontakt & Konzultácia | Ramart Ateliér',
  description:
    'Kontaktné údaje architektonického ateliéru Ramart Studio v Banskej Bystrici. Lazovná 43. Tel: +421 908 477 417, email: martin@ramartstudio.sk.',
  alternates: {
    canonical: '/kontakt',
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen text-white pt-28 sm:pt-32 md:pt-36 pb-24 md:pb-32">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 space-y-16 md:space-y-24">

        {/* Page Header */}
        <div className="border-b border-[#ded9cd] pb-12 md:pb-16 space-y-6">
          <div className="flex items-center gap-3 font-mono text-[11px] text-charcoal tracking-[0.3em] uppercase">
            <span className="w-2 h-2 bg-white" />
            <span>DIALÓG / ZADANIE / ATELIÉR</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold uppercase tracking-tight text-white leading-[0.95]">
                KONTAKT & <br />
                KONZULTÁCIE.
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-base sm:text-lg font-light text-charcoal leading-relaxed">
                Každé dielo začína osobným rozhovorom. Radi vás privítame v našom ateliéri
                na Lazovnej ulici v Banskej Bystrici alebo sa stretneme priamo na vašom pozemku.
              </p>
            </div>
          </div>
        </div>

        {/* Studio Contact Data Grid (Strictly NO icons, purely architectural typography) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

          <div className="border-t-[0.5] backdrop-blur-md border-charcoal bg-gunpowder rounded-4xl p-6 sm:p-8 space-y-4">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-charcoal block">
              01 / SÍDLO ATELIÉRU
            </span>
            <h2 className="text-xl font-light uppercase text-white">
              Ateliér Banská Bystrica
            </h2>
            <div className="space-y-1 font-mono text-xs text-[#525760]">
              <p className="text-white font-medium">RAMART STUDIO</p>
              <p>A / LAZOVNÁ 43</p>
              <p>974 01 BANSKÁ BYSTRICA</p>
              <p className="pt-2 text-[11px] text-[#88909e]">
                SLOVENSKÁ REPUBLIKA
              </p>
            </div>
          </div>

          <div className="border-t-[0.5] backdrop-blur-md border-charcoal bg-gunpowder rounded-4xl p-6 sm:p-8 space-y-4">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-charcoal block">
              02 / PRIAMY KONTAKT
            </span>
            <h2 className="text-xl font-light uppercase text-white">
              Autorizovaný architekt
            </h2>
            <div className="space-y-2 font-mono text-xs text-[#525760]">
              <p className="text-white font-medium">ING. ARCH. MARTIN RAJČAN</p>
              <p>
                T /{' '}
                <a
                  href="tel:+421908477417"
                  className="hover:text-white border-b border-transparent hover:border-[#0a0b0d] transition-colors"
                >
                  +421 908 477 417
                </a>
              </p>
              <p>
                M /{' '}
                <a
                  href="mailto:martin@ramartstudio.sk"
                  className="hover:text-white border-b border-transparent hover:border-[#0a0b0d] transition-colors"
                >
                  martin@ramartstudio.sk
                </a>
              </p>
              <p className="pt-2 text-[11px] text-charcoal/50">SKA ČÍSLO: 2013</p>
            </div>
          </div>

          <div className="border-t-[0.5] backdrop-blur-md border-charcoal bg-gunpowder rounded-4xl p-6 sm:p-8 space-y-4">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-charcoal block">
              03 / FAKTURAČNÉ ÚDAJE
            </span>
            <h2 className="text-xl font-light uppercase text-white">
              Obchodná spoločnosť
            </h2>
            <div className="space-y-1 font-mono text-xs text-[#525760]">
              <p className="text-white font-medium">RAMART S.R.O.</p>
              <p>KRÁĽOVOHOĽSKÁ 2</p>
              <p>974 11 BANSKÁ BYSTRICA</p>
              <p className="pt-2">IČO: 47497785</p>
              <p>IČ DPH: SK2023911197</p>
            </div>
          </div>

        </div>

        {/* Atelier Map Location */}
        <div className="space-y-4 pt-12 border-t border-[#ded9cd]">
          <div className="flex justify-between items-center font-mono text-xs text-charcoal uppercase tracking-wider">
            <span>ORIENTÁCIA V MESTE / HISTORICKÉ CENTRUM</span>
            <span>LAZOVNÁ 43, BANSKÁ BYSTRICA</span>
          </div>

          <div className="border border-[#ded9cd] overflow-hidden bg-[#eae7df]">
            <iframe
              className="w-full contrast-125 border-0"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ramart Studio Banská Bystrica"
              src="https://maps.google.com/maps?q=Lazovn%C3%A1+43%2C+974+01+Bansk%C3%A1+Bystrica&amp;hl=sk&amp;t=m&amp;z=16&amp;output=embed"
            />
          </div>
        </div>

      </div>
    </main>
  )
}
