'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const NAVIGATION = [
  { href: '/portfolio', label: 'PORTFÓLIO' },
  { href: '/atelier', label: 'ATELIÉR' },
  { href: '/sluzby', label: 'SLUŽBY' },
  { href: '/blog', label: 'PRÍSPEVKY' },
  { href: '/kontakt', label: 'KONTAKT' },
]

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-5 z-50 mx-10 bg-charcoal/5 text-white backdrop-blur-md border-t-[0.5] border-charcoal rounded-full transition-all">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 h-20 md:h-24 flex items-center justify-between">

        {/* Studio Brand Identity */}
        <div className="flex items-center gap-4 md:gap-8">
          <Link href="/" className="group block focus:outline-none">
            <span className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tighter uppercase text-white transition-colors">
              RAMARTSTUDIO
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-3 pl-6 border-l border-[#ded9cd]">
            <span className="font-mono text-[11px] text-[#737882] tracking-wider uppercase">
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

        {/* Mobile menu button (Typographic, NO icons) */}
        <div className="md:hidden flex items-center gap-4">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-xs font-mono tracking-[0.25em] uppercase border border-charcoal px-3.5 py-2 text-charcoal rounded-full"
            aria-label="Navigácia"
          >
            {mobileMenuOpen ? 'ZAVRIEŤ' : 'MENU'}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (NO icons, sharp lines) */}
      {mobileMenuOpen && (
        <div className="md:hidden border-[0.5] border-charcoal bg-gunpowder px-6 py-8 space-y-6 animate-in slide-in-from-top-2 duration-200 rounded-xl">
          <div className="space-y-4">
            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base tracking-[0.2em] uppercase text-white py-2 border-b border-[#ded9cd]/60"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="pt-4 space-y-3 font-mono text-xs text-[#737882]">
            <p>A / LAZOVNÁ 43, BANSKÁ BYSTRICA</p>
            <p>T / +421 908 477 417</p>
            <p>M / MARTIN@RAMARTSTUDIO.SK</p>
          </div>
        </div>
      )}
    </header>
  )
}
