import type { Metadata } from 'next'
import InquiryForm from '@/components/inquiry-form'

export const metadata: Metadata = {
  title: 'Kontakt & Konzultácia | Ramart Ateliér',
  description:
    'Kontaktné údaje architektonického ateliéru Ramart Studio v Banskej Bystrici. Lazovná 43. Tel: +421 908 477 417, email: martin@ramartstudio.sk.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f5f4ef] text-[#0a0b0d] pt-16 md:pt-28 pb-32">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 space-y-20 md:space-y-32">
        
        {/* Page Header */}
        <div className="border-b border-[#ded9cd] pb-16 space-y-6">
          <div className="flex items-center gap-3 font-mono text-[11px] text-[#737882] tracking-[0.3em] uppercase">
            <span className="w-2 h-2 bg-[#0a0b0d]" />
            <span>DIALÓG / ZADANIE / ATELIÉR</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-light uppercase tracking-tight text-[#0a0b0d] leading-[0.95]">
                KONTAKT & <br />
                KONZULTÁCIE.
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-base sm:text-lg font-light text-[#525760] leading-relaxed">
                Každé dielo začína osobným rozhovorom. Radi vás privítame v našom ateliéri
                na Lazovnej ulici v Banskej Bystrici alebo sa stretneme priamo na vašom pozemku.
              </p>
            </div>
          </div>
        </div>

        {/* Studio Contact Data Grid (Strictly NO icons, purely architectural typography) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 border-b border-[#ded9cd] pb-16">
          
          <div className="border border-[#ded9cd] bg-[#faf9f6] p-8 space-y-4">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#737882] block">
              01 / SÍDLO ATELIÉRU
            </span>
            <h2 className="text-xl font-light uppercase text-[#0a0b0d]">
              Ateliér Banská Bystrica
            </h2>
            <div className="space-y-1 font-mono text-xs text-[#525760]">
              <p className="text-[#0a0b0d] font-medium">RAMART STUDIO</p>
              <p>A / LAZOVNÁ 43</p>
              <p>974 01 BANSKÁ BYSTRICA</p>
              <p className="pt-2 text-[11px] text-[#88909e]">
                SLOVENSKÁ REPUBLIKA
              </p>
            </div>
          </div>

          <div className="border border-[#ded9cd] bg-[#faf9f6] p-8 space-y-4">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#737882] block">
              02 / PRIAMY KONTAKT
            </span>
            <h2 className="text-xl font-light uppercase text-[#0a0b0d]">
              Autorizovaný architekt
            </h2>
            <div className="space-y-2 font-mono text-xs text-[#525760]">
              <p className="text-[#0a0b0d] font-medium">ING. ARCH. MARTIN RAJČAN</p>
              <p>
                T /{' '}
                <a
                  href="tel:+421908477417"
                  className="hover:text-[#0a0b0d] border-b border-transparent hover:border-[#0a0b0d] transition-colors"
                >
                  +421 908 477 417
                </a>
              </p>
              <p>
                M /{' '}
                <a
                  href="mailto:martin@ramartstudio.sk"
                  className="hover:text-[#0a0b0d] border-b border-transparent hover:border-[#0a0b0d] transition-colors"
                >
                  martin@ramartstudio.sk
                </a>
              </p>
              <p className="pt-2 text-[11px] text-[#88909e]">SKA ČÍSLO: 2013</p>
            </div>
          </div>

          <div className="border border-[#ded9cd] bg-[#faf9f6] p-8 space-y-4">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#737882] block">
              03 / FAKTURAČNÉ ÚDAJE
            </span>
            <h2 className="text-xl font-light uppercase text-[#0a0b0d]">
              Obchodná spoločnosť
            </h2>
            <div className="space-y-1 font-mono text-xs text-[#525760]">
              <p className="text-[#0a0b0d] font-medium">RAMART S.R.O.</p>
              <p>KRÁĽOVOHOĽSKÁ 2</p>
              <p>974 11 BANSKÁ BYSTRICA</p>
              <p className="pt-2">IČO: 47497785</p>
              <p>IČ DPH: SK2023911197</p>
            </div>
          </div>

        </div>

        {/* Lead Inquiry Form & Context */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#737882] block">
                AKO PREBIEHA KONZULTÁCIA
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light uppercase text-[#0a0b0d] leading-snug">
                REŠPEKT K VÁŠMU ČASU A INVESTÍCII.
              </h2>
              <p className="text-sm font-light text-[#525760] leading-relaxed">
                Na úvodnom stretnutí si prejdeme lokalitu, možnosti územného plánu a vaše priestorové
                očakávania. Navrhneme optimálny postup prác a predostrieme reálny časový i rozpočtový rámec.
              </p>
            </div>

            <div className="border border-[#ded9cd] bg-[#faf9f6] p-6 font-mono text-xs text-[#525760] space-y-3">
              <span className="text-[#0a0b0d] uppercase tracking-wider block font-semibold">
                DOKUMENTY K PRVÉMU STRETNUTIU:
              </span>
              <ul className="space-y-2">
                <li>— Číslo parcely a katastrálne územie (LV)</li>
                <li>— Geodetické zameranie (ak je k dispozícii)</li>
                <li>— Predstava o veľkosti a materiáloch</li>
                <li>— Približný investičný strop stavby</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <InquiryForm />
          </div>

        </div>

        {/* Atelier Map Location */}
        <div className="space-y-4 pt-12 border-t border-[#ded9cd]">
          <div className="flex justify-between items-center font-mono text-xs text-[#737882] uppercase tracking-wider">
            <span>ORIENTÁCIA V MESTE / HISTORICKÉ CENTRUM</span>
            <span>LAZOVNÁ 43, BANSKÁ BYSTRICA</span>
          </div>

          <div className="border border-[#ded9cd] overflow-hidden bg-[#eae7df]">
            <iframe
              className="w-full contrast-125"
              height="450"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              title="Ramart Studio Banská Bystrica"
              src="https://maps.google.com/maps?width=100%25&amp;height=450&amp;hl=sk&amp;q=lazovna%2043%20Banska%20Bystrica+(Ramart%20Studio)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            />
          </div>
        </div>

      </div>
    </main>
  )
}
