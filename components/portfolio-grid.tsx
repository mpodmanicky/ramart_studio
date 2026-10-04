'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import type { Project } from '@/lib/projects'

const FILTERS = [
  { label: 'Všetky realizácie', value: 'all' },
  { label: 'Rodinné domy', value: 'novostavba' },
  { label: 'Rekonštrukcie', value: 'rekonštrukcia' },
  { label: 'Interiéry', value: 'interiér' },
  { label: 'Architektúra', value: 'architektúra' },
]

// Kamenárska mozaiková geometria: presne lícované kamenné bloky v 12-stĺpcovom module
function getMosaicSpanClass(index: number) {
  const pattern = index % 8
  switch (pattern) {
    case 0:
      // Veľký horizontálny kamenný blok (8 stĺpcov)
      return 'col-span-12 md:col-span-7 lg:col-span-8 aspect-[16/10]'
    case 1:
      // Vertikálny kamenný pilier (4 stĺpce)
      return 'col-span-12 md:col-span-5 lg:col-span-4 aspect-[4/5]'
    case 2:
      // Štvorcový kváder (4 stĺpce)
      return 'col-span-12 md:col-span-6 lg:col-span-4 aspect-square'
    case 3:
      // Štvorcový kváder (4 stĺpce)
      return 'col-span-12 md:col-span-6 lg:col-span-4 aspect-square'
    case 4:
      // Štvorcový kváder (4 stĺpce)
      return 'col-span-12 md:col-span-12 lg:col-span-4 aspect-[4/3] lg:aspect-square'
    case 5:
      // Vertikálny kváder (5 stĺpcov)
      return 'col-span-12 md:col-span-5 lg:col-span-5 aspect-[4/5]'
    case 6:
      // Široký horizontálny kváder (7 stĺpcov)
      return 'col-span-12 md:col-span-7 lg:col-span-7 aspect-[16/10]'
    case 7:
      // Monumentálny preklad cez celú šírku (12 stĺpcov)
      return 'col-span-12 aspect-[16/9] lg:aspect-[21/9]'
    default:
      return 'col-span-12 md:col-span-6 aspect-[16/11]'
  }
}

export default function PortfolioGrid({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState('all')
  const [activeTouchId, setActiveTouchId] = useState<string | null>(null)

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') return true
    return project.categories.some(
      (c) => c.toLowerCase() === activeFilter.toLowerCase()
    )
  })

  // Close active mobile overlay when tapping outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('[data-project-card]')) {
        setActiveTouchId(null)
      }
    }
    document.addEventListener('touchstart', handleOutsideClick)
    document.addEventListener('click', handleOutsideClick)
    return () => {
      document.removeEventListener('touchstart', handleOutsideClick)
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [])

  const handleCardClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    projectId: string
  ) => {
    // If on a touch device and this card is not active yet, show overlay first!
    if (activeTouchId !== projectId) {
      // Check if touch device or if user tapped to reveal
      if (window.matchMedia('(hover: none)').matches) {
        e.preventDefault()
        setActiveTouchId(projectId)
      }
    }
  }

  return (
    <div className="space-y-10 md:space-y-16">
      {/* Category Filter Navigation with Animated Line */}
      <div className="border-b border-[#ded9cd] pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="flex flex-wrap items-center gap-6 md:gap-10 font-mono text-xs uppercase tracking-[0.2em]">
          {FILTERS.map((f) => {
            const isActive = activeFilter === f.value
            return (
              <button
                key={f.value}
                type="button"
                onClick={() => {
                  setActiveFilter(f.value)
                  setActiveTouchId(null)
                }}
                className={`relative py-1 transition-colors cursor-pointer ${
                  isActive
                    ? 'text-[#0a0b0d] font-semibold'
                    : 'text-[#737882] hover:text-[#0a0b0d]'
                }`}
              >
                {f.label}
                {isActive && (
                  <motion.span
                    layoutId="portfolioFilterUnderline"
                    className="absolute bottom-[-7px] left-0 w-full h-[1.5px] bg-[#0a0b0d]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            )
          })}
        </div>

        <motion.div
          key={filteredProjects.length}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-mono text-[11px] text-[#88909e] uppercase tracking-widest"
        >
          {filteredProjects.length} / {projects.length} DIEL V MOZAIKE
        </motion.div>
      </div>

      {/* Kamenárska mozaika (Stonemason Mosaic Grid) — Iba čisté obrázky bez popisov zvonku */}
      <motion.div
        layout
        className="grid grid-cols-12 gap-4 sm:gap-5 md:gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => {
            const isTouchActive = activeTouchId === project.id
            const spanClass = getMosaicSpanClass(index)

            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.03,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`relative overflow-hidden group cursor-pointer ${spanClass}`}
                data-project-card
              >
                <Link
                  href={`/projekty/${project.slug}`}
                  onClick={(e) => handleCardClick(e, project.id)}
                  className="block w-full h-full relative focus:outline-none"
                >
                  {/* Čistá fotografia stavby (Pure Stone Block Image) */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                  />

                  {/* Decentný rohový kamenný index (čistá architektonická značka v rohu) */}
                  <div className="absolute top-3 left-3 font-mono text-[9px] text-[#f5f4ef] bg-[#0a0b0d]/60 px-1.5 py-0.5 pointer-events-none group-hover:opacity-0 transition-opacity">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* ──────────────────────────────────────────────────────────── */}
                  {/* ON-HOVER & TOUCH OVERLAY (Popis so scrollovateľným textom)    */}
                  {/* ──────────────────────────────────────────────────────────── */}
                  <div
                    className={`absolute inset-0 bg-[#0a0b0d]/90 backdrop-blur-md p-5 sm:p-7 md:p-8 flex flex-col justify-between transition-all duration-500 ease-out ${
                      isTouchActive
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto'
                    }`}
                  >
                    {/* Top Meta Line (Pevná horná lišta) */}
                    <div className="flex-shrink-0 flex items-center justify-between font-mono text-[11px] text-[#9ea4af] uppercase tracking-widest border-b border-[#f5f4ef]/15 pb-3">
                      <span>{project.location || 'SLOVENSKO'}</span>
                      <span>{project.yearRealization || project.yearDesign || 'REALIZÁCIA'}</span>
                    </div>

                    {/* Middle: Scrollovateľný blok s plným popisom diela */}
                    <div
                      className="flex-1 min-h-0 overflow-y-auto overscroll-contain architectural-scroll my-3 pr-2 space-y-3"
                      onClick={(e) => {
                        // Na dotykovom zariadení pri otvorenom overlay zamedzíme neúmyselnému prekliknutiu pri posúvaní textu
                        if (isTouchActive) {
                          e.preventDefault()
                          e.stopPropagation()
                        }
                      }}
                    >
                      <span className="font-mono text-[10px] text-[#8e96a5] uppercase tracking-[0.25em] block">
                        PROJEKT {String(index + 1).padStart(2, '0')}
                      </span>

                      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light uppercase text-[#f5f4ef] tracking-tight leading-snug">
                        {project.title}
                      </h3>

                      <p className="font-mono text-xs text-[#a0a6b2] uppercase tracking-wider">
                        {project.categories.join(' / ')}
                      </p>

                      {project.description && (
                        <div className="text-xs sm:text-sm font-light text-[#c5cbd4] pt-2 leading-relaxed">
                          {project.description}
                        </div>
                      )}
                    </div>

                    {/* Bottom Action Prompt (Pevná spodná lišta s navigáciou) */}
                    <div className="flex-shrink-0 pt-3 border-t border-[#f5f4ef]/15 flex items-center justify-between font-mono text-xs uppercase tracking-[0.2em] text-[#f5f4ef]">
                      <span className="underline underline-offset-4 decoration-[#f5f4ef]/40 group-hover:decoration-[#f5f4ef]">
                        {isTouchActive ? 'OTVORIŤ DETAIL DIELA →' : 'PREZRIEŤ REALIZÁCIU →'}
                      </span>
                      <span className="text-[10px] text-[#8e96a5]">RAMART ATELIÉR</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="py-32 text-center border border-[#ded9cd]"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-[#737882]">
            V TEJTO KATEGÓRII SA NENACHÁDZAJÚ ŽIADNE DIELA.
          </p>
        </motion.div>
      )}
    </div>
  )
}
