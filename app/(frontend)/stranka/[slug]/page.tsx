import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getProjects, getPageBySlug } from '@/lib/payload'
import RenderBlocks from '@/components/blocks/render-blocks'

interface CustomPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({
  params,
}: CustomPageProps): Promise<Metadata> {
  const { slug } = await params
  const page = await getPageBySlug(slug)

  if (!page) {
    return {
      title: 'Stránka nenájdená | Ramart Studio',
    }
  }

  return {
    title: `${page.title} | Ramart Studio`,
    description: page.metaDescription,
    alternates: {
      canonical: `/stranka/${slug}`,
    },
    openGraph: {
      title: `${page.title} | RAMART ATELIÉR`,
      description: page.metaDescription || undefined,
      url: `https://www.ramartstudio.sk/stranka/${slug}`,
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'RAMART ATELIÉR | Architektonické štúdio Ing. arch. Martin Rajčan',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${page.title} | RAMART ATELIÉR`,
      description: page.metaDescription || undefined,
      images: ['/og-image.jpg'],
    },
  }
}

export default async function CustomDynamicPage({ params }: CustomPageProps) {
  const { slug } = await params
  const [page, projects] = await Promise.all([
    getPageBySlug(slug),
    getProjects(),
  ])

  if (!page) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-[#f5f4ef] text-[#0a0b0d]">
      <RenderBlocks blocks={page.layout} projects={projects} />
    </main>
  )
}
