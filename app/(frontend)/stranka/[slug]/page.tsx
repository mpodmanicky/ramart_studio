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
