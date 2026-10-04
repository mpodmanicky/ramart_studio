import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPosts } from '@/lib/payload'
import { FadeIn } from '@/components/motion/fade-in'

export const metadata: Metadata = {
  title: 'Žurnál & Architektonický diskurz | Ramart Studio',
  description:
    'Úvahy o priestore, procesoch navrhovania rodinných domov, poctivých materiáloch a realizáciách z ateliéru Ing. arch. Martina Rajčana.',
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <main className="pt-28 md:pt-36 pb-32">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 space-y-16 md:space-y-24">
        
        {/* Header Section */}
        <FadeIn>
          <div className="border-b border-[#ded9cd] pb-12 md:pb-16 space-y-6">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#737882] block">
              05 / ŽURNÁL & ARCHITEKTONICKÝ DISKURZ
            </span>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
              <div className="lg:col-span-8">
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-light uppercase tracking-tight text-[#0a0b0d] leading-[1.05]">
                  TEXTY, MATERIÁLY <br />
                  & ŠTÚDIE PRIESTORU
                </h1>
              </div>
              <div className="lg:col-span-4">
                <p className="text-sm md:text-base font-light text-[#525760] leading-relaxed">
                  Pohľad do zákulisia architektonického procesu, filozofia práce s monolitickým betónom, kameňom a odpovede na otázky pred začiatkom stavby.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Featured Post (if available) */}
        {posts.length > 0 && (
          <FadeIn delay={0.1}>
            <div className="border-b border-[#ded9cd] pb-16 md:pb-24">
              <Link
                href={`/blog/${posts[0].slug}`}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
              >
                <div className="lg:col-span-7 relative w-full aspect-[16/10] overflow-hidden">
                  <Image
                    src={posts[0].coverImage}
                    alt={posts[0].title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
                <div className="lg:col-span-5 space-y-6">
                  <div className="flex items-center gap-4 font-mono text-xs text-[#737882] uppercase tracking-widest">
                    <span className="text-[#0a0b0d] font-semibold">{posts[0].category}</span>
                    <span>/</span>
                    <span>{posts[0].publishedDate}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-light uppercase tracking-tight text-[#0a0b0d] group-hover:text-[#525760] transition-colors leading-snug">
                    {posts[0].title}
                  </h2>
                  <p className="text-sm md:text-base font-light text-[#525760] leading-relaxed line-clamp-3">
                    {posts[0].excerpt}
                  </p>
                  <div className="pt-2">
                    <span className="font-mono text-xs tracking-[0.25em] uppercase border-b border-[#0a0b0d] pb-1 text-[#0a0b0d] group-hover:text-[#525760] transition-colors inline-block">
                      ČÍTAŤ CELÝ ČLÁNOK →
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </FadeIn>
        )}

        {/* Remaining Posts Grid */}
        {posts.length > 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
            {posts.slice(1).map((post, idx) => (
              <FadeIn key={post.slug} delay={idx * 0.1}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block space-y-6"
                >
                  <div className="relative w-full aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 font-mono text-[11px] text-[#737882] uppercase tracking-widest">
                      <span className="text-[#0a0b0d] font-semibold">{post.category}</span>
                      <span>/</span>
                      <span>{post.publishedDate}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-light uppercase tracking-tight text-[#0a0b0d] group-hover:text-[#525760] transition-colors leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-light text-[#525760] leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="pt-2">
                      <span className="font-mono text-xs tracking-[0.2em] uppercase border-b border-transparent group-hover:border-[#0a0b0d] pb-0.5 text-[#0a0b0d] transition-all inline-block">
                        ČÍTAŤ ESEJ →
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        )}

        {/* Studio Consultation CTA */}
        <FadeIn>
          <div className="border border-[#0a0b0d] bg-[#0a0b0d] text-[#f5f4ef] p-8 sm:p-14 md:p-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#88909e] block">
                ZADANIE & DIALÓG
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-light tracking-tight leading-tight">
                MÁTE OTÁZKY K VÁŠMU BUDÚCEMU PROJEKTU?
              </h2>
              <p className="text-sm md:text-base text-[#a0a6b2] font-light max-w-2xl leading-relaxed">
                Každá stavba si vyžaduje individuálny prístup. Dohodnite si osobné stretnutie v našom ateliéri a preberieme možnosti vášho pozemku.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <Link
                href="/kontakt"
                className="font-mono text-xs tracking-[0.25em] uppercase px-8 py-5 bg-[#f5f4ef] text-[#0a0b0d] hover:bg-white transition-all font-semibold"
              >
                DOHODNÚŤ STRETNUTIE →
              </Link>
            </div>
          </div>
        </FadeIn>

      </div>
    </main>
  )
}
