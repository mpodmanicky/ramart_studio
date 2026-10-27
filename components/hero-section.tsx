'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] md:min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gunpowder">
      {/*
        Aperture / Camera Lens Iris Opening Effect:
        Starts pitch black (circle 0%) and expands outward like a film camera shutter opening.
      */}
      <motion.div
        initial={{ clipPath: 'circle(0% at 50% 50%)' }}
        animate={{ clipPath: 'circle(140% at 50% 50%)' }}
        transition={{
          duration: 1.8,
          ease: [0.16, 1, 0.3, 1], // Smooth cinematic camera ease
        }}
        className="absolute inset-0 w-full h-full overflow-hidden"
      >
        {/* Background Project Image with subtle lens focal settling (scale: 1.15 -> 1) */}
        <motion.div
          initial={{ scale: 1.15, filter: 'brightness(0.6)' }}
          animate={{ scale: 1, filter: 'brightness(1)' }}
          transition={{
            duration: 2.4,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute inset-0 w-full h-full select-none"
        >
          <Image
            src="/projects/rd-zarnovica.jpg"
            alt="Rodinný dom Žarnovica - Ramart Ateliér"
            fill
            priority
            unoptimized
            className="object-cover object-center"
          />

          {/* Vignette & Radial dark layer ensuring text legibility while showing the project */}
          <div className="absolute inset-0 bg-radial from-gunpowder/40 via-gunpowder/75 to-gunpowder" />
          <div className="absolute inset-0 bg-linear-to-t from-gunpowder via-gunpowder/30 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-b from-gunpowder/80 via-transparent to-transparent" />
        </motion.div>

        {/* Optical Aperture Iris Ring (visual ring expanding like lens aperture blades) */}
        <motion.div
          initial={{ scale: 0, opacity: 0.8 }}
          animate={{ scale: 3.2, opacity: 0 }}
          transition={{
            duration: 1.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-white/25 shadow-[0_0_100px_rgba(255,255,255,0.15)]"
        />
      </motion.div>

      {/* Hero Content deliberately OVERLAYING the background photo */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.45,
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative z-10 flex flex-col items-center justify-center space-y-8 text-center pt-36 sm:pt-44 md:pt-48 pb-20 md:pb-28 px-6 max-w-5xl mx-auto"
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tighter leading-[0.96] text-foreground">
          RAMART<br />
          <span className="text-[#68707d]">STUDIO</span> <br />
        </h1>

        <div className="gap-8 pt-6 px-6 max-w-3xl">
          <p className="text-lg sm:text-xl md:text-2xl font-light text-charcoal leading-relaxed">
            Navrhujeme rodinné domy, rekonštrukcie a prémiové interiéry. Pracujeme s poctivými
            modernými materiálmi — surový betón, prírodný kameň, oceľ a masívne drevo.
            Každá stavba vzniká na mieru topografii pozemku a životnému štýlu investora.
          </p>

          <div className="mt-8 flex flex-col lg:flex-row md:flex-row items-center justify-center gap-4 font-mono text-xs">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-3 border-t-[0.5] border-charcoal rounded-full bg-gunpowder/60 text-charcoal hover:bg-transparent hover:text-white px-8 py-4 tracking-[0.25em] uppercase transition-all duration-300"
            >
              PREZRIEŤ PORTFÓLIO →
            </Link>
            <span className="tracking-widest uppercase text-[14px] text-[#737882]">
              12 KOMPLETNÝCH ARCHITEKTONICKÝCH REALIZÁCIÍ
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
