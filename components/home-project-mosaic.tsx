'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Project } from '@/lib/projects'

export default function HomeProjectMosaic({ projects }: { projects: Project[] }) {
  const [activeTouchId, setActiveTouchId] = useState<string | null>(null)

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('[data-home-card]')) {
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
    if (activeTouchId !== projectId) {
      if (window.matchMedia('(hover: none)').matches) {
        e.preventDefault()
        setActiveTouchId(projectId)
      }
    }
  }

  return (
    <div className="grid grid-cols-12 gap-4 sm:gap-5 md:gap-6">
      {projects.map((project, index) => {
        const isTouchActive = activeTouchId === project.id

        // Kamenárska mozaika pre 4 kľúčové diela na titulke
        const mosaicClass =
          index === 0
            ? 'col-span-12 lg:col-span-8 aspect-[16/10]' // Monumentálny hlavný blok
            : index === 1
            ? 'col-span-12 lg:col-span-4 aspect-[4/5]' // Vertikálny pilier
            : index === 2
            ? 'col-span-12 lg:col-span-5 aspect-[4/5]' // Štíhly blok
            : 'col-span-12 lg:col-span-7 aspect-[16/10]' // Široký blok

        return (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`relative overflow-hidden group cursor-pointer ${mosaicClass}`}
            data-home-card
          >
            <Link
              href={`/projekty/${project.slug}`}
              onClick={(e) => handleCardClick(e, project.id)}
              className="block w-full h-full relative focus:outline-none"
            >
              {/* Čistý kamenný blok obrazu */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />

              {/* Rohový kamenný index */}
              <div className="absolute top-3 left-3 font-mono text-[9px] text-[#f5f4ef] bg-[#0a0b0d]/60 px-1.5 py-0.5 pointer-events-none group-hover:opacity-0 transition-opacity">
                0{index + 1}
              </div>

              {/* On-Hover & Touch Overlay so scrollovateľným textom */}
              <div
                className={`absolute inset-0 bg-[#0a0b0d]/90 backdrop-blur-md p-5 sm:p-7 md:p-8 flex flex-col justify-between transition-all duration-500 ease-out ${
                  isTouchActive
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto'
                }`}
              >
                {/* Pevná horná lišta */}
                <div className="flex-shrink-0 flex items-center justify-between font-mono text-[11px] text-[#9ea4af] uppercase tracking-widest border-b border-[#f5f4ef]/15 pb-3">
                  <span>{project.location || 'SLOVENSKO'}</span>
                  <span>{project.yearRealization || project.yearDesign || 'REALIZÁCIA'}</span>
                </div>

                {/* Scrollovateľný blok textu */}
                <div
                  className="flex-1 min-h-0 overflow-y-auto overscroll-contain architectural-scroll my-3 pr-2 space-y-3"
                  onClick={(e) => {
                    if (isTouchActive) {
                      e.preventDefault()
                      e.stopPropagation()
                    }
                  }}
                >
                  <span className="font-mono text-[10px] text-[#8e96a5] uppercase tracking-[0.25em] block">
                    SELEKCIA 0{index + 1}
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

                {/* Pevná spodná lišta s navigáciou */}
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
    </div>
  )
}
