'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence, type Variants } from 'framer-motion'

const NAVIGATION = [
  { href: '/portfolio', label: 'PORTFÓLIO' },
  { href: '/atelier', label: 'ATELIÉR' },
  { href: '/sluzby', label: 'SLUŽBY' },
  { href: '/blog', label: 'PRÍSPEVKY' },
  { href: '/kontakt', label: 'KONTAKT' },
]

const menuContainerVariants: Variants = {
  closed: {
    opacity: 0,
    transition: {
      duration: 0.25,
      ease: 'easeOut',
    },
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.35,
      ease: 'easeOut',
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
}

const menuItemVariants: Variants = {
  closed: { opacity: 0, y: 15 },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
}

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Prevent background scrolling when fullscreen mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <>
      <header className="fixed top-5 left-5 right-5 z-50 mx-5 max-w-[1720px] lg:mx-auto bg-charcoal/5 text-white backdrop-blur-md border-t-[0.5] border-charcoal rounded-full transition-all">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 h-20 md:h-24 flex items-center justify-between">

          {/* Studio Brand Identity */}
          <div className="flex items-center gap-4 md:gap-8">
            <Link href="/" className="group block focus:outline-none">
              <span className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tighter uppercase text-white transition-colors">
                RAMARTSTUDIO
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-3 pl-6 border-l border-[#ded9cd]">
              <span className="font-mono text-[11px] text-charcoal tracking-wider uppercase">
                Ing. arch. Martin Rajčan
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12">
            {NAVIGATION.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href === '/portfolio' && pathname.startsWith('/projekty'))

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-xs tracking-[0.25em] uppercase transition-colors py-2 ${
                    isActive
                      ? 'text-white font-medium'
                      : 'text-[#5a606a] hover:text-charcoal'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-white" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Zatvoriť navigáciu' : 'Otvoriť navigáciu'}
              aria-expanded={mobileMenuOpen}
              className="focus:outline-none cursor-pointer"
            >
              <MobileToggle isOpen={mobileMenuOpen} />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-gunpowder/95 backdrop-blur-2xl flex flex-col justify-between pt-32 pb-10 px-8 sm:px-12 md:hidden overflow-y-auto"
          >
            <motion.nav
              variants={menuContainerVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex flex-col space-y-4 my-auto"
            >
              {NAVIGATION.map((item, index) => {
                const isActive =
                  pathname === item.href ||
                  (item.href === '/portfolio' && pathname.startsWith('/projekty'))

                return (
                  <motion.div key={item.href} variants={menuItemVariants}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-baseline justify-between py-3 border-b border-charcoal/20 text-2xl tracking-[0.2em] uppercase font-light transition-colors ${
                        isActive
                          ? 'text-white font-medium'
                          : 'text-charcoal hover:text-white'
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className="font-mono text-xs text-charcoal/60">0{index + 1}</span>
                    </Link>
                  </motion.div>
                )
              })}
            </motion.nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.3 }}
              className="pt-6 space-y-2 font-mono text-xs text-[#737882] border-t border-charcoal/20"
            >
              <p className="text-white uppercase font-sans tracking-wider">
                Ing. arch. Martin Rajčan
              </p>
              <p>A / LAZOVNÁ 43, BANSKÁ BYSTRICA</p>
              <p>T / +421 908 477 417</p>
              <p>M / MARTIN@RAMARTSTUDIO.SK</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function MobileToggle({ isOpen = false }: { isOpen?: boolean }) {
  return (
    <div className="flex flex-col p-2 gap-1.5 justify-center items-end w-8 h-8">
      <span
        className={`h-0.5 bg-white transition-all duration-300 ease-out origin-center ${
          isOpen ? 'w-5 translate-y-2 rotate-45' : 'w-4'
        }`}
      />
      <span
        className={`h-0.5 bg-white transition-all duration-200 ease-out ${
          isOpen ? 'w-0 opacity-0' : 'w-3'
        }`}
      />
      <span
        className={`h-0.5 bg-white transition-all duration-300 ease-out origin-center ${
          isOpen ? 'w-5 -translate-y-2 -rotate-45' : 'w-2'
        }`}
      />
    </div>
  )
}
