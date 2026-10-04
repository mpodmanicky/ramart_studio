'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#0e1013] text-[#f5f4ef] border-t border-[#23272e] pt-16 md:pt-24 pb-12 overflow-hidden relative">
      
      {/* Background Architectural Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Top Section: Lead & CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 md:pb-24 border-b border-[#23272e]">
          <div className="lg:col-span-7 space-y-6">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#88909e] block">
              ZÁMER / DIALÓG / REALIZÁCIA
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] text-[#f5f4ef]">
              PLÁNUJETE VLASTNÝ <br className="hidden sm:inline" />
              ARCHITEKTONICKÝ PROJEKT?
            </h2>
            <p className="text-sm md:text-base text-[#9ba2af] max-w-2xl font-light leading-relaxed">
              Pracujeme s poctivými materiálmi — monolitický betón, prírodný kameň, oceľ a masívne drevo. 
              Vytvárame nadčasové stavby s rešpektom k pozemku a životu investora.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end items-start lg:items-end gap-6">
            <Link
              href="/kontakt"
              className="inline-block bg-[#f5f4ef] text-[#0e1013] hover:bg-white font-mono text-xs tracking-[0.25em] uppercase px-8 py-5 transition-all duration-300 border border-[#f5f4ef]"
            >
              DOHODNÚŤ OSOBNÉ STRETNUTIE →
            </Link>
            <span className="font-mono text-[11px] text-[#78808d] tracking-widest uppercase">
              ATELIÉR BANSKÁ BYSTRICA / REALIZÁCIE CELÉ SLOVENSKO
            </span>
          </div>
        </div>

        {/* Bottom Section: Studio Info & Navigation Columns */}
        <div className="pt-16 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          
          {/* Column 1: Studio Identity */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs tracking-[0.3em] uppercase text-[#f5f4ef]">
              RAMART ATELIÉR
            </h3>
            <p className="text-xs text-[#9ba2af] font-light leading-relaxed">
              Architektonické štúdio Ing. arch. Martina Rajčana. 
              Navrhujeme čistú, materiálovo poctivú a priestorovo veľkorysú architektúru rodinných domov, polyfunkcií a interiérov.
            </p>
            <div className="pt-2 font-mono text-[11px] text-[#78808d] space-y-1">
              <p>AUTORIZOVANÝ ARCHITEKT SKA</p>
              <p>REGISTRAČNÉ ČÍSLO: 2013</p>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs tracking-[0.3em] uppercase text-[#f5f4ef]">
              NAVIGÁCIA
            </h3>
            <ul className="space-y-2.5 font-mono text-xs text-[#9ba2af]">
              <li>
                <Link href="/portfolio" className="hover:text-[#f5f4ef] transition-colors">
                  01 / PORTFÓLIO REALIZÁCIÍ
                </Link>
              </li>
              <li>
                <Link href="/atelier" className="hover:text-[#f5f4ef] transition-colors">
                  02 / ATELIÉR & FILOZOFIA
                </Link>
              </li>
              <li>
                <Link href="/sluzby" className="hover:text-[#f5f4ef] transition-colors">
                  03 / ARCHITEKTONICKÉ SLUŽBY
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#f5f4ef] transition-colors">
                  04 / ŽURNÁL & ARCHITEKTONICKÉ ESEJE
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="hover:text-[#f5f4ef] transition-colors">
                  05 / KONTAKT & ZADANIE
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-[#656d7a] hover:text-[#9ba2af] transition-colors">
                  06 / PAYLOAD CMS SPRÁVA
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Atelier */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs tracking-[0.3em] uppercase text-[#f5f4ef]">
              ATELIÉR & KONTAKT
            </h3>
            <div className="space-y-2 text-xs font-mono text-[#9ba2af]">
              <p className="text-[#f5f4ef]">RAMART STUDIO</p>
              <p>A / LAZOVNÁ 43</p>
              <p>974 01 BANSKÁ BYSTRICA</p>
              <p className="pt-2">T / +421 908 477 417</p>
              <p>M / MARTIN@RAMARTSTUDIO.SK</p>
            </div>
          </div>

          {/* Column 4: Billing & Legal */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs tracking-[0.3em] uppercase text-[#f5f4ef]">
              FAKTURAČNÉ ÚDAJE
            </h3>
            <div className="space-y-2 text-xs font-mono text-[#78808d]">
              <p className="text-[#9ba2af]">Ramart s.r.o.</p>
              <p>Kráľovohoľská 2</p>
              <p>974 11 Banská Bystrica</p>
              <p className="pt-2">IČO: 47497785</p>
              <p>IČ DPH: SK2023911197</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-[#23272e] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[11px] font-mono text-[#68707d]">
          <div>
            © {new Date().getFullYear()} RAMART STUDIO. VŠETKY PRÁVA VYHRADENÉ.
          </div>
          <div className="flex items-center gap-6">
            <span>BANSKÁ BYSTRICA — BRATISLAVA — CELÉ SLOVENSKO</span>
            <Link href="/admin" className="hover:text-[#f5f4ef] transition-colors">
              CMS ADMIN
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
