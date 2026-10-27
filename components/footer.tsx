'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#0e1013] text-charcoal border-t border-[#23272e] pt-16 md:pt-24 pb-12 overflow-hidden relative">

      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">

        {/* Top Section: Lead & CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 md:pb-24 border-b border-[#23272e]">
          <div className="lg:col-span-7 space-y-6">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-charcoal block">
              ZÁMER / DIALÓG / REALIZÁCIA
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[1.1] text-white">
              RAMARTSTUDIO
            </h2>
            <p className="text-sm md:text-base text-charcoal max-w-2xl font-light leading-relaxed">
              Pracujeme s poctivými materiálmi — monolitický betón, prírodný kameň, oceľ a masívne drevo.
              Vytvárame nadčasové stavby s rešpektom k pozemku a životu investora.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end items-start lg:items-end gap-6">
            <Link
              href="/kontakt"
              className="inline-block bg-gunpowder text-white rounded-full hover:bg-transparent font-mono text-xs tracking-[0.25em] uppercase px-8 py-5 transition-all duration-300 border-t-[0.5] border-charcoal rounded-full"
            >
              DOHODNÚŤ OSOBNÉ STRETNUTIE →
            </Link>
          </div>
        </div>

        {/* Bottom Section: Studio Info & Navigation Columns */}
        <div className="pt-16 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">

          {/* Column 1: Studio Identity */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs tracking-[0.3em] uppercase text-white">
              RAMART
            </h3>
            <p className="text-xs text-charcoal font-light leading-relaxed">
              Architektonické štúdio Ing. arch. Martina Rajčana.
              Navrhujeme čistú, materiálovo poctivú a priestorovo veľkorysú architektúru rodinných domov, polyfunkcií a interiérov.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs tracking-[0.3em] uppercase text-white">
              RÝCHLE ODKAZY
            </h3>
            <ul className="space-y-2.5 font-mono text-xs text-[#9ba2af]">
              <li>
                <Link href="/portfolio" className="hover:text-charcoal transition-colors">
                  - PORTFÓLIO REALIZÁCIÍ
                </Link>
              </li>
              <li>
                <Link href="/atelier" className="hover:text-charcoal transition-colors">
                  - ATELIÉR & FILOZOFIA
                </Link>
              </li>
              <li>
                <Link href="/sluzby" className="hover:text-charcoal transition-colors">
                  - ARCHITEKTONICKÉ SLUŽBY
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-charcoal transition-colors">
                  - ŽURNÁL & ARCHITEKTONICKÉ ESEJE
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="hover:text-charcoal transition-colors">
                  - KONTAKT & ZADANIE
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Atelier */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs tracking-[0.3em] uppercase text-white">
              KONTAKT
            </h3>
            <div className="space-y-2 text-xs font-mono text-[#9ba2af]">
              <p className="text-charcoal">RAMART STUDIO</p>
              <p>A / LAZOVNÁ 43</p>
              <p>974 01 BANSKÁ BYSTRICA</p>
              <p className="pt-2">T / +421 908 477 417</p>
              <p>M / MARTIN@RAMARTSTUDIO.SK</p>
            </div>
          </div>

          {/* Column 4: Billing & Legal */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs tracking-[0.3em] uppercase text-white">
              FAKTURAČNÉ ÚDAJE
            </h3>
            <div className="space-y-2 text-xs font-mono text-charcoal">
              <p className="text-charcoal">Ramart s.r.o.</p>
              <p>Kráľovohoľská 2</p>
              <p>974 11 Banská Bystrica</p>
              <p className="pt-2">IČO: 47497785</p>
              <p>IČ DPH: SK2023911197</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-[#23272e] flex flex-col sm:flex-row justify-center items-center sm:items-center gap-4 text-[11px] font-mono text-[#68707d]">
          <div>
            © {new Date().getFullYear()} RAMART STUDIO. VŠETKY PRÁVA VYHRADENÉ.
          </div>
        </div>

      </div>
    </footer>
  )
}
