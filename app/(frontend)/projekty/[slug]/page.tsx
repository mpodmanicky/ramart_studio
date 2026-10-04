import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getProjectBySlug, getProjects } from '@/lib/payload'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const projects = await getProjects()
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    return {
      title: 'Projekt nenájdený | Ramart Ateliér',
    }
  }

  return {
    title: `${project.title} | Ramart Ateliér`,
    description: `${project.title} — ${project.categories.join(', ')}. Architektonické dielo Ing. arch. Martina Rajčana.`,
    openGraph: {
      title: `${project.title} | Ramart Ateliér`,
      description: `${project.title} — ${project.categories.join(', ')}`,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  }
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params
  const [project, allProjects] = await Promise.all([
    getProjectBySlug(slug),
    getProjects(),
  ])

  if (!project) {
    notFound()
  }

  const currentIndex = allProjects.findIndex((p) => p.slug === slug)
  const nextProject =
    currentIndex >= 0 && currentIndex < allProjects.length - 1
      ? allProjects[currentIndex + 1]
      : allProjects[0]

  return (
    <main className="min-h-screen bg-[#f5f4ef] text-[#0a0b0d] pt-12 md:pt-20 pb-32">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 space-y-16 md:space-y-24">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between border-b border-[#ded9cd] pb-6 font-mono text-xs uppercase tracking-[0.25em] text-[#737882]">
          <Link
            href="/portfolio"
            className="hover:text-[#0a0b0d] transition-colors"
          >
            ← SPÄŤ NA PORTFÓLIO
          </Link>
          <div className="hidden sm:block">
            {project.categories.join(' / ')}
          </div>
        </div>

        {/* Project Header (Monumental typography with generous space) */}
        <div className="space-y-6 max-w-5xl">
          <div className="font-mono text-xs text-[#737882] tracking-[0.3em] uppercase">
            ARCHITEKTONICKÁ REALIZÁCIA
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light uppercase tracking-tight text-[#0a0b0d] leading-[0.98]">
            {project.title}
          </h1>
        </div>

        {/* Technical Data Bar — Gresling / Molnár-Peráček style */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 border-y border-[#ded9cd] py-6 font-mono text-xs">
          {project.location && (
            <div className="space-y-1">
              <span className="text-[10px] text-[#88909e] uppercase tracking-wider block">LOKALITA</span>
              <span className="text-[#0a0b0d] font-sans font-normal text-sm">{project.location}</span>
            </div>
          )}

          {project.yearRealization && (
            <div className="space-y-1">
              <span className="text-[10px] text-[#88909e] uppercase tracking-wider block">ROK REALIZÁCIE</span>
              <span className="text-[#0a0b0d] font-sans font-normal text-sm">{project.yearRealization}</span>
            </div>
          )}

          {project.yearDesign && !project.yearRealization && (
            <div className="space-y-1">
              <span className="text-[10px] text-[#88909e] uppercase tracking-wider block">ROK NÁVRHU</span>
              <span className="text-[#0a0b0d] font-sans font-normal text-sm">{project.yearDesign}</span>
            </div>
          )}

          {project.state && (
            <div className="space-y-1">
              <span className="text-[10px] text-[#88909e] uppercase tracking-wider block">STAV</span>
              <span className="text-[#0a0b0d] font-sans font-normal text-sm">{project.state}</span>
            </div>
          )}

          <div className="space-y-1">
            <span className="text-[10px] text-[#88909e] uppercase tracking-wider block">TYPOLÓGIA</span>
            <span className="text-[#0a0b0d] font-sans font-normal text-sm">{project.categories.join(' / ')}</span>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] text-[#88909e] uppercase tracking-wider block">AUTOR</span>
            <span className="text-[#0a0b0d] font-sans font-normal text-sm">Ing. arch. Martin Rajčan</span>
          </div>
        </div>

        {/* Hero Visual Frame */}
        <div className="relative w-full aspect-[16/9] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1720px) 100vw, 1720px"
          />
        </div>

        {/* Architectural Narrative */}
        {project.description && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 pt-6">
            <div className="lg:col-span-4 font-mono text-xs text-[#737882] tracking-[0.25em] uppercase">
              KONCEPT & POPIS DIELA
            </div>
            <div className="lg:col-span-8 text-lg sm:text-xl font-light text-[#1b1e23] leading-relaxed whitespace-pre-line space-y-6 max-w-3xl">
              {project.description}
            </div>
          </div>
        )}

        {/* Technical Drawings & Plans Section (Inspired by Molnár-Peráček & Gresling) */}
        {project.sections && project.sections.length > 0 && (
          <div className="pt-20 md:pt-28 border-t border-[#ded9cd] space-y-16">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-[#ded9cd] pb-6">
              <div className="space-y-2">
                <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#737882] block">
                  VÝKRESOVÁ ČASŤ
                </span>
                <h2 className="text-2xl sm:text-4xl font-light uppercase tracking-tight text-[#0a0b0d]">
                  ARCHITEKTONICKÉ VÝKRESY & PÔDORYSY
                </h2>
              </div>
              <span className="font-mono text-xs text-[#737882] uppercase">
                AXONOMETRIE / PÔDORYSY / REZY
              </span>
            </div>

            <div className="space-y-20">
              {project.sections.map((section, sIdx) => (
                <div key={sIdx} className="space-y-6">
                  {section.title && (
                    <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#0a0b0d] flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-[#0a0b0d]" />
                      <span>{section.title}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {section.images.map((img, iIdx) => (
                      <div
                        key={iIdx}
                        className="relative space-y-3"
                      >
                        <div className="relative w-full aspect-[4/3] overflow-hidden">
                          <Image
                            src={img}
                            alt={`${project.title} - ${section.title} ${iIdx + 1}`}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 800px"
                            unoptimized
                          />
                        </div>
                        <div className="pt-3 font-mono text-[10px] text-[#737882] flex justify-between border-t border-[#ded9cd]">
                          <span className="uppercase">{section.title}</span>
                          <span>VÝKRES {sIdx + 1}.{iIdx + 1}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Realization Photographic Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="pt-20 md:pt-28 border-t border-[#ded9cd] space-y-12">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-[#ded9cd] pb-6">
              <div className="space-y-2">
                <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#737882] block">
                  REALIZÁCIA
                </span>
                <h2 className="text-2xl sm:text-4xl font-light uppercase tracking-tight text-[#0a0b0d]">
                  FOTOGALÉRIA DETAILOV
                </h2>
              </div>
              <span className="font-mono text-xs text-[#737882] uppercase">
                {project.gallery.length} ZÁBEROV
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {project.gallery.map((img, index) => {
                const isFullWidth = index % 5 === 0

                return (
                  <div
                    key={index}
                    className={`relative w-full overflow-hidden ${
                      isFullWidth ? 'md:col-span-2 aspect-[16/9]' : 'aspect-[4/3]'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${project.title} - záber ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1200px) 100vw, 1200px"
                      unoptimized
                    />
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Project Lead CTA Card */}
        <div className="border border-[#0a0b0d] bg-[#0a0b0d] text-[#f5f4ef] p-8 sm:p-12 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-3">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#88909e] block">
              ZAUJAL VÁS TENTO PROJEKT?
            </span>
            <h3 className="text-2xl sm:text-3xl font-light uppercase">
              PLÁNUJETE VLASTNÚ STAVBU ALEBO REKONŠTRUKCIU?
            </h3>
            <p className="text-sm text-[#9ba2af] max-w-xl font-light">
              Rovnakú pozornosť venujeme každému novému zadaniu. Radi s vami preberieme možnosti
              vášho zámeru pri nezáväznej osobnej konzultácii.
            </p>
          </div>

          <Link
            href="/kontakt"
            className="bg-[#f5f4ef] text-[#0a0b0d] hover:bg-white px-8 py-4 font-mono text-xs tracking-[0.25em] uppercase transition-all"
          >
            DOHODNÚŤ STRETNUTIE →
          </Link>
        </div>

        {/* Bottom Project Pagination Switcher */}
        <div className="pt-12 border-t border-[#ded9cd] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <Link
            href="/portfolio"
            className="font-mono text-xs uppercase tracking-[0.25em] text-[#0a0b0d] hover:text-[#525760] transition-colors"
          >
            ← VŠETKY PROJEKTY V PORTFÓLIU
          </Link>

          {nextProject && (
            <Link
              href={`/projekty/${nextProject.slug}`}
              className="font-mono text-xs uppercase tracking-[0.25em] border border-[#0a0b0d] px-6 py-3.5 hover:bg-[#0a0b0d] hover:text-[#f5f4ef] transition-all"
            >
              ĎALŠÍ PROJEKT: {nextProject.title} →
            </Link>
          )}
        </div>

      </div>
    </main>
  )
}
