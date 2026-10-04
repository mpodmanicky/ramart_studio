import type { Metadata } from 'next'
import { getProjects } from '@/lib/payload'
import PortfolioGrid from '@/components/portfolio-grid'

export const metadata: Metadata = {
  title: 'Portfólio Realizácií | Ramart Ateliér',
  description:
    'Kompletný archív architektonických projektov a realizácií: rodinné domy, novostavby, rekonštrukcie, interiéry a urbanistické štúdie od Ing. arch. Martina Rajčana.',
}

export default async function PortfolioPage() {
  const projects = await getProjects()

  return (
    <main className="min-h-screen bg-[#f5f4ef] text-[#0a0b0d] pt-16 md:pt-28 pb-32">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 space-y-16 md:space-y-24">
        
        {/* Page Header with Monumental Scale & Lots of Negative Space */}
        <div className="border-b border-[#ded9cd] pb-12 md:pb-16 space-y-6">
          <div className="flex items-center gap-3 font-mono text-[11px] text-[#737882] tracking-[0.3em] uppercase">
            <span className="w-2 h-2 bg-[#0a0b0d]" />
            <span>ARCHÍV PROJEKTOV A REALIZÁCIÍ</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-light uppercase tracking-tight text-[#0a0b0d] leading-[0.95]">
                PORTFÓLIO <br />
                REALIZÁCIÍ
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-sm sm:text-base font-light text-[#525760] leading-relaxed">
                Každý projekt reprezentuje syntézu kontextu parcely, poctivých materiálov
                a individuálneho spôsobu života investora. Od úvodnej skice po odovzdanie stavby.
              </p>
            </div>
          </div>
        </div>

        {/* Portfolio Grid with Client-Side Filter */}
        <PortfolioGrid projects={projects} />

      </div>
    </main>
  )
}
