'use client'

import { useActionState } from 'react'
import { submitInquiry, type InquiryState } from '@/app/actions/inquiry'

const initialState: InquiryState = {}

export default function InquiryForm() {
  const [state, formAction, isPending] = useActionState(submitInquiry, initialState)

  if (state.success) {
    return (
      <div className="border border-[#0a0b0d] bg-[#0a0b0d] text-[#f5f4ef] p-8 sm:p-12 space-y-4">
        <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#88909e] block">
          POTVRDENIE ODOSLANIA
        </span>
        <h3 className="text-2xl sm:text-3xl font-light uppercase">
          ZADANIE BOLO ÚSPEŠNE ODOSLANÉ.
        </h3>
        <p className="text-sm text-[#9ba2af] font-light leading-relaxed max-w-xl">
          Ďakujeme za prejavenú dôveru. Váš investičný zámer bol zaznamenaný v systéme ateliéru.
          Ing. arch. Martin Rajčan vás bude v krátkom čase kontaktovať ohľadom termínu konzultácie.
        </p>
        <div className="pt-4">
          <a
            href="/portfolio"
            className="inline-block border border-[#f5f4ef] text-[#f5f4ef] hover:bg-[#f5f4ef] hover:text-[#0a0b0d] font-mono text-xs tracking-[0.2em] uppercase px-6 py-3 transition-colors"
          >
            POKRAČOVAŤ NA PORTFÓLIO →
          </a>
        </div>
      </div>
    )
  }

  return (
    <form action={formAction} className="space-y-8 border border-[#ded9cd] bg-[#faf9f6] p-8 sm:p-12">
      <div className="space-y-2 border-b border-[#ded9cd] pb-6">
        <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#737882] block">
          FORMULÁR INVESTIČNÉHO ZÁMERU
        </span>
        <h3 className="text-2xl sm:text-3xl font-light uppercase text-[#0a0b0d]">
          DOHODNÚŤ ÚVODNÚ KONZULTÁCIU
        </h3>
        <p className="text-xs sm:text-sm text-[#525760] font-light">
          Vyplňte základné údaje o vašom pozemku alebo zámere. Ozveme sa vám do 24 hodín.
        </p>
      </div>

      {state.error && (
        <div className="border border-[#8b0000] bg-[#fff5f5] text-[#8b0000] p-4 text-xs font-mono">
          {state.error}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="font-mono text-xs uppercase tracking-wider text-[#0a0b0d] block"
          >
            Meno a priezvisko / Spoločnosť *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Ing. Ján Novák"
            className="w-full bg-[#f5f4ef] border border-[#ded9cd] px-4 py-3 text-sm text-[#0a0b0d] focus:border-[#0a0b0d] focus:outline-none transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="email"
            className="font-mono text-xs uppercase tracking-wider text-[#0a0b0d] block"
          >
            E-mailová adresa *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jan.novak@example.sk"
            className="w-full bg-[#f5f4ef] border border-[#ded9cd] px-4 py-3 text-sm text-[#0a0b0d] focus:border-[#0a0b0d] focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label
            htmlFor="phone"
            className="font-mono text-xs uppercase tracking-wider text-[#0a0b0d] block"
          >
            Telefónne číslo
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+421 900 000 000"
            className="w-full bg-[#f5f4ef] border border-[#ded9cd] px-4 py-3 text-sm text-[#0a0b0d] focus:border-[#0a0b0d] focus:outline-none transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="projectType"
            className="font-mono text-xs uppercase tracking-wider text-[#0a0b0d] block"
          >
            Typológia zámeru
          </label>
          <select
            id="projectType"
            name="projectType"
            className="w-full bg-[#f5f4ef] border border-[#ded9cd] px-4 py-3 text-sm text-[#0a0b0d] focus:border-[#0a0b0d] focus:outline-none transition-colors"
          >
            <option value="rodinny_dom">Novostavba rodinného domu</option>
            <option value="rekonstrukcia">Kompletná rekonštrukcia</option>
            <option value="interier">Interiérový dizajn</option>
            <option value="polyfunkcia">Polyfunkčný / komerčný objekt</option>
            <option value="urbanizmus">Urbanizmus a rozvoj územia</option>
            <option value="poradenstvo">Audit pozemku / poradenstvo</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label
            htmlFor="location"
            className="font-mono text-xs uppercase tracking-wider text-[#0a0b0d] block"
          >
            Lokalita parcely / stavby
          </label>
          <input
            id="location"
            name="location"
            type="text"
            placeholder="Napr. Banská Bystrica, Zvolen, Bratislava..."
            className="w-full bg-[#f5f4ef] border border-[#ded9cd] px-4 py-3 text-sm text-[#0a0b0d] focus:border-[#0a0b0d] focus:outline-none transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="budgetEstimated"
            className="font-mono text-xs uppercase tracking-wider text-[#0a0b0d] block"
          >
            Predpokladaný časový horizont
          </label>
          <input
            id="budgetEstimated"
            name="budgetEstimated"
            type="text"
            placeholder="Napr. začiatok štúdie 2026, výstavba 2027"
            className="w-full bg-[#f5f4ef] border border-[#ded9cd] px-4 py-3 text-sm text-[#0a0b0d] focus:border-[#0a0b0d] focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="font-mono text-xs uppercase tracking-wider text-[#0a0b0d] block"
        >
          Opis predstavy a požiadavky na stavbu *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Stručne popíšte váš zámer, stav pozemku, orientáciu, preferované materiály či počet členov rodiny..."
          className="w-full bg-[#f5f4ef] border border-[#ded9cd] px-4 py-3 text-sm text-[#0a0b0d] focus:border-[#0a0b0d] focus:outline-none transition-colors"
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={isPending}
          className="w-full sm:w-auto bg-[#0a0b0d] text-[#f5f4ef] hover:bg-[#2d323b] font-mono text-xs tracking-[0.25em] uppercase px-10 py-4 transition-all duration-300 disabled:opacity-50 cursor-pointer"
        >
          {isPending ? 'ODOSIELAM ZADANIE...' : 'ODOSLAŤ INVESTIČNÉ ZADANIE →'}
        </button>
      </div>
    </form>
  )
}
