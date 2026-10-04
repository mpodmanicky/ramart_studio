import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPosts, getPostBySlug } from '@/lib/payload'
import { FadeIn } from '@/components/motion/fade-in'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Článok nenájdený | Ramart Studio',
    }
  }

  return {
    title: `${post.title} | Žurnál Ramart Studio`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const allPosts = await getPosts()
  const otherPosts = allPosts.filter((p) => p.slug !== post.slug).slice(0, 2)

  // Split content into clean paragraphs
  const paragraphs = post.content.split('\n\n').filter(Boolean)

  return (
    <article className="pt-28 md:pt-36 pb-32">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12 md:space-y-16">
        
        {/* Top Navigation & Meta */}
        <FadeIn>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#ded9cd] pb-6 font-mono text-xs uppercase tracking-[0.25em] text-[#737882]">
            <Link
              href="/blog"
              className="hover:text-[#0a0b0d] transition-colors flex items-center gap-2"
            >
              ← SPÄŤ NA ŽURNÁL
            </Link>
            <div className="flex items-center gap-4">
              <span className="text-[#0a0b0d] font-semibold">{post.category}</span>
              <span>/</span>
              <span>{post.publishedDate}</span>
            </div>
          </div>
        </FadeIn>

        {/* Title & Excerpt */}
        <FadeIn delay={0.1}>
          <div className="max-w-4xl space-y-8">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light uppercase tracking-tight text-[#0a0b0d] leading-[1.08]">
              {post.title}
            </h1>
            <p className="text-lg sm:text-2xl font-light text-[#525760] leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </FadeIn>

        {/* Hero Visual (Pure & Borderless) */}
        <FadeIn delay={0.2}>
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1720px) 100vw, 1720px"
            />
          </div>
        </FadeIn>

        {/* Article Body Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 pt-6">
          {/* Left Column: Author and Metadata */}
          <div className="lg:col-span-4 space-y-8 font-mono text-xs">
            <div className="border-t border-[#ded9cd] pt-6 space-y-2 text-[#737882]">
              <span className="text-[10px] uppercase tracking-wider block">AUTOR TEXTU</span>
              <p className="text-[#0a0b0d] font-semibold text-sm">{post.author}</p>
              <p>AUTORIZOVANÝ ARCHITEKT SKA 2013</p>
              <p>RAMART ATELIÉR, BANSKÁ BYSTRICA</p>
            </div>

            <div className="border-t border-[#ded9cd] pt-6 space-y-2 text-[#737882]">
              <span className="text-[10px] uppercase tracking-wider block">TÉMA & ZAMERANIE</span>
              <p className="text-[#0a0b0d] font-sans text-sm capitalize">{post.category}</p>
            </div>

            <div className="border-t border-[#ded9cd] pt-6">
              <Link
                href="/kontakt"
                className="inline-block border border-[#0a0b0d] px-6 py-3 uppercase tracking-[0.2em] text-[#0a0b0d] hover:bg-[#0a0b0d] hover:text-[#f5f4ef] transition-all text-[11px]"
              >
                KONZULTOVAŤ ZÁMER →
              </Link>
            </div>
          </div>

          {/* Right Column: Paragraphs */}
          <div className="lg:col-span-8 max-w-3xl space-y-8 text-base sm:text-xl font-light text-[#1b1e23] leading-relaxed">
            {paragraphs.map((para, idx) => (
              <p key={idx} className="whitespace-pre-line">
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* Other Articles Section */}
        {otherPosts.length > 0 && (
          <div className="pt-20 md:pt-28 border-t border-[#ded9cd] space-y-12">
            <div className="flex justify-between items-end border-b border-[#ded9cd] pb-6">
              <div className="space-y-2">
                <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#737882] block">
                  ĎALŠIE ČÍTANIE
                </span>
                <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-tight text-[#0a0b0d]">
                  SÚVISIACE ESEJE & ŠTÚDIE
                </h2>
              </div>
              <Link
                href="/blog"
                className="font-mono text-xs tracking-[0.2em] uppercase text-[#0a0b0d] hover:text-[#525760] transition-colors"
              >
                VŠETKY ČLÁNKY →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {otherPosts.map((other) => (
                <Link
                  key={other.slug}
                  href={`/blog/${other.slug}`}
                  className="group block space-y-4"
                >
                  <div className="relative w-full aspect-[16/10] overflow-hidden">
                    <Image
                      src={other.coverImage}
                      alt={other.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="space-y-2">
                    <span className="font-mono text-[11px] text-[#737882] uppercase tracking-widest block">
                      {other.publishedDate} / {other.category}
                    </span>
                    <h3 className="text-xl font-light uppercase tracking-tight text-[#0a0b0d] group-hover:text-[#525760] transition-colors leading-snug">
                      {other.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </article>
  )
}
