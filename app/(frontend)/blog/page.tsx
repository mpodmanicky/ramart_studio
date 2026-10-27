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
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-charcoal block">
              05 / ŽURNÁL & ARCHITEKTONICKÝ DISKURZ
            </span>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
              <div className="lg:col-span-8">
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-white leading-[1.05]">
                  TEXTY, MATERIÁLY <br />
                  & ŠTÚDIE PRIESTORU
                </h1>
              </div>
              <div className="lg:col-span-4">
                <p className="text-sm md:text-base font-light text-charcoal leading-relaxed">
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
                    <span className="text-white font-semibold">{posts[0].category}</span>
                    <span>/</span>
                    <span>{posts[0].publishedDate}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-light uppercase tracking-tight text-white group-hover:text-charcoal transition-colors leading-snug">
                    {posts[0].title}
                  </h2>
                  <p className="text-sm md:text-base font-light text-charcoal leading-relaxed line-clamp-3">
                    {posts[0].excerpt}
                  </p>
                  <div className="pt-2">
                    <span className="font-mono text-xs tracking-[0.25em] uppercase border-b border-[#0a0b0d] pb-1 text-white group-hover:text-charcoal transition-colors inline-block">
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
                      <span className="text-white font-semibold">{post.category}</span>
                      <span>/</span>
                      <span>{post.publishedDate}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-light uppercase tracking-tight text-white group-hover:text-charcoal transition-colors leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-light text-charcoal leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="pt-2">
                      <span className="font-mono text-xs tracking-[0.2em] uppercase border-b border-transparent group-hover:border-[#0a0b0d] pb-0.5 text-white transition-all inline-block">
                        ČÍTAŤ →
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
