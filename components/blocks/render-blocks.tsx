'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FadeIn } from '@/components/motion/fade-in'
import HomeProjectMosaic from '@/components/home-project-mosaic'
import type { Project } from '@/lib/projects'
import { getMediaUrl, getMediaAlt } from '@/lib/media'

interface RenderBlocksProps {
  blocks?: any[]
  projects?: Project[]
}

export default function RenderBlocks({ blocks, projects = [] }: RenderBlocksProps) {
  if (!blocks || !Array.isArray(blocks) || blocks.length === 0) {
    return null
  }

  return (
    <div className="space-y-0">
      {blocks.map((block, index) => {
        const key = block.id || `${block.blockType}-${index}`

        switch (block.blockType) {
          case 'heroBlock':
            return <HeroBlockComponent key={key} block={block} />
          case 'statementBlock':
            return <StatementBlockComponent key={key} block={block} />
          case 'projectsMosaicBlock':
            return <ProjectsMosaicBlockComponent key={key} block={block} projects={projects} />
          case 'contentWithMediaBlock':
            return <ContentWithMediaBlockComponent key={key} block={block} />
          case 'processStepsBlock':
            return <ProcessStepsBlockComponent key={key} block={block} />
          case 'mediaGalleryBlock':
            return <MediaGalleryBlockComponent key={key} block={block} />
          case 'callToActionBlock':
            return <CallToActionBlockComponent key={key} block={block} />
          default:
            return null
        }
      })}
    </div>
  )
}

function HeroBlockComponent({ block }: { block: any }) {
  const imageUrl = getMediaUrl(block.image, '/projects/rd-zarnovica.jpg')
  const imageAlt = getMediaAlt(block.image, block.title)

  return (
    <section className="pt-20 sm:pt-28 md:pt-36 pb-20 md:pb-32 px-6 sm:px-10 lg:px-16 max-w-[1720px] mx-auto border-b border-[#ded9cd]">
      <div className="space-y-12 md:space-y-16">
        <FadeIn>
          <div className="max-w-4xl space-y-6">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#737882] block">
              {block.subtitle || 'ZÁMER / DIALÓG / REALIZÁCIA'}
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.05] text-[#0a0b0d]">
              {block.title}
            </h1>
            {block.description && (
              <p className="text-base sm:text-xl font-light text-[#525760] max-w-2xl leading-relaxed pt-2">
                {block.description}
              </p>
            )}
            {block.ctaLink && block.ctaText && (
              <div className="pt-4 flex flex-wrap items-center gap-6">
                <Link
                  href={block.ctaLink}
                  className="inline-flex items-center gap-3 border border-[#0a0b0d] bg-[#0a0b0d] text-[#f5f4ef] hover:bg-transparent hover:text-[#0a0b0d] px-8 py-4 tracking-[0.25em] uppercase font-mono text-xs transition-all duration-300"
                >
                  {block.ctaText}
                </Link>
              </div>
            )}
          </div>
        </FadeIn>

        {imageUrl && (
          <FadeIn duration={1} delay={0.2}>
            <div className="relative space-y-4">
              <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] overflow-hidden">
                <Image
                  src={imageUrl}
                  alt={imageAlt}
                  fill
                  priority
                  className="object-cover transition-transform duration-1000 ease-out hover:scale-102"
                  sizes="(max-width: 1720px) 100vw, 1720px"
                />
              </div>
              {block.imageCaption && (
                <div className="font-mono text-[11px] text-[#737882] uppercase tracking-wider">
                  {block.imageCaption}
                </div>
              )}
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  )
}

function StatementBlockComponent({ block }: { block: any }) {
  return (
    <section className="py-24 md:py-36 px-6 sm:px-10 lg:px-16 max-w-[1720px] mx-auto border-b border-[#ded9cd]">
      <FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-4 font-mono text-xs text-[#737882] tracking-[0.25em] uppercase">
            {block.tag || '01 / MANIFEST & FILOZOFIA'}
          </div>
          <div className="lg:col-span-8 space-y-8">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light uppercase tracking-tight text-[#0a0b0d] leading-[1.1]">
              {block.heading}
            </h2>
            <div className="text-base sm:text-lg font-light text-[#525760] leading-relaxed max-w-3xl whitespace-pre-line">
              {block.content}
            </div>
            {block.author && (
              <div className="font-mono text-xs text-[#737882] pt-4 border-t border-[#ded9cd]">
                <span className="text-[#0a0b0d] uppercase tracking-wider">{block.author}</span>
              </div>
            )}
          </div>
        </div>
      </FadeIn>
    </section>
  )
}

function ProjectsMosaicBlockComponent({
  block,
  projects,
}: {
  block: any
  projects: Project[]
}) {
  const count = block.count || 4
  const displayProjects = projects.slice(0, count)

  return (
    <section className="py-24 md:py-36 px-6 sm:px-10 lg:px-16 max-w-[1720px] mx-auto border-b border-[#ded9cd]">
      <FadeIn>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-16 md:mb-24 border-b border-[#ded9cd] pb-8">
          <div className="space-y-3">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#737882] block">
              {block.tag || '02 / SELEKCIA REALIZÁCIÍ'}
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light uppercase tracking-tight text-[#0a0b0d]">
              {block.heading || 'VYBRANÉ ARCHITEKTONICKÉ REALIZÁCIE'}
            </h2>
          </div>
          {block.showAllLink !== false && (
            <Link
              href="/portfolio"
              className="font-mono text-xs tracking-[0.25em] uppercase border border-[#0a0b0d] px-6 py-3.5 hover:bg-[#0a0b0d] hover:text-[#f5f4ef] transition-all"
            >
              VŠETKY REALIZÁCIE (12) →
            </Link>
          )}
        </div>

        <HomeProjectMosaic projects={displayProjects} />
      </FadeIn>
    </section>
  )
}

function ContentWithMediaBlockComponent({ block }: { block: any }) {
  const imageUrl = getMediaUrl(block.image)
  const isImageLeft = block.imagePosition === 'left'

  return (
    <section className="py-24 md:py-36 px-6 sm:px-10 lg:px-16 max-w-[1720px] mx-auto border-b border-[#ded9cd]">
      <FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {imageUrl && isImageLeft && (
            <div className="lg:col-span-5 relative w-full aspect-[4/5] overflow-hidden">
              <Image
                src={imageUrl}
                alt={block.title || 'Architektúra'}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          )}

          <div className={`${imageUrl ? 'lg:col-span-7' : 'lg:col-span-12'} space-y-8`}>
            {block.tag && (
              <span className="font-mono text-xs text-[#737882] tracking-[0.25em] uppercase block">
                {block.tag}
              </span>
            )}
            <h2 className="text-3xl sm:text-5xl font-light uppercase tracking-tight text-[#0a0b0d] leading-snug">
              {block.title}
            </h2>
            <div className="text-base sm:text-lg font-light text-[#525760] leading-relaxed whitespace-pre-line">
              {block.content}
            </div>

            {block.metaItems && block.metaItems.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#ded9cd]">
                {block.metaItems.map((item: any, idx: number) => (
                  <div key={idx} className="space-y-1">
                    <span className="font-mono text-[10px] text-[#737882] uppercase tracking-wider block">
                      {item.label}
                    </span>
                    <span className="text-sm font-mono text-[#0a0b0d] uppercase">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {imageUrl && !isImageLeft && (
            <div className="lg:col-span-5 relative w-full aspect-[4/5] overflow-hidden">
              <Image
                src={imageUrl}
                alt={block.title || 'Architektúra'}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          )}
        </div>
      </FadeIn>
    </section>
  )
}

function ProcessStepsBlockComponent({ block }: { block: any }) {
  const steps = block.steps || []

  return (
    <section className="py-24 md:py-36 px-6 sm:px-10 lg:px-16 max-w-[1720px] mx-auto border-b border-[#ded9cd]">
      <FadeIn>
        <div className="max-w-4xl space-y-4 mb-16 md:mb-24">
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#737882] block">
            {block.tag || '03 / METODOLÓGIA & PROCES'}
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light uppercase tracking-tight text-[#0a0b0d]">
            {block.title || 'ŠTYRI FÁZY OD NÁVRHU PO KOLAUDÁCIU'}
          </h2>
        </div>

        <div className="divide-y divide-[#ded9cd] border-y border-[#ded9cd]">
          {steps.map((step: any, idx: number) => (
            <div
              key={idx}
              className="py-10 md:py-14 grid grid-cols-1 md:grid-cols-12 gap-8 items-start hover:bg-[#eae7df]/40 transition-colors px-2 md:px-4"
            >
              <div className="md:col-span-2 font-mono text-2xl md:text-3xl font-light text-[#737882]">
                {step.number || `0${idx + 1}`}
              </div>
              <div className="md:col-span-4">
                <h3 className="text-xl md:text-2xl font-light uppercase tracking-tight text-[#0a0b0d]">
                  {step.title}
                </h3>
              </div>
              <div className="md:col-span-6 space-y-4">
                <p className="text-sm md:text-base font-light text-[#525760] leading-relaxed">
                  {step.description}
                </p>
                {step.tags && (
                  <div className="font-mono text-xs text-[#737882] tracking-wider uppercase pt-2">
                    {step.tags}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}

function MediaGalleryBlockComponent({ block }: { block: any }) {
  const images = block.images || []

  return (
    <section className="py-24 md:py-36 px-6 sm:px-10 lg:px-16 max-w-[1720px] mx-auto border-b border-[#ded9cd]">
      <FadeIn>
        {(block.title || block.subtitle) && (
          <div className="space-y-3 mb-12 border-b border-[#ded9cd] pb-6">
            {block.subtitle && (
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#737882] block">
                {block.subtitle}
              </span>
            )}
            {block.title && (
              <h2 className="text-3xl sm:text-5xl font-light uppercase tracking-tight text-[#0a0b0d]">
                {block.title}
              </h2>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {images.map((item: any, idx: number) => {
            const url = getMediaUrl(item.image)
            if (!url) return null

            return (
              <div key={idx} className="space-y-3">
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={url}
                    alt={item.caption || `Galéria ${idx + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                {item.caption && (
                  <p className="font-mono text-[11px] text-[#737882] uppercase tracking-wider">
                    {item.caption}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </FadeIn>
    </section>
  )
}

function CallToActionBlockComponent({ block }: { block: any }) {
  return (
    <section className="py-24 md:py-36 px-6 sm:px-10 lg:px-16 max-w-[1720px] mx-auto">
      <FadeIn>
        <div className="border border-[#0a0b0d] bg-[#0a0b0d] text-[#f5f4ef] p-8 sm:p-14 md:p-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-8 space-y-6">
            {block.tag && (
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#88909e] block">
                {block.tag}
              </span>
            )}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-tight">
              {block.title}
            </h2>
            {block.description && (
              <p className="text-sm md:text-base text-[#a0a6b2] font-light max-w-2xl leading-relaxed">
                {block.description}
              </p>
            )}
          </div>
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <Link
              href={block.buttonLink || '/kontakt'}
              className="font-mono text-xs tracking-[0.25em] uppercase px-8 py-5 bg-[#f5f4ef] text-[#0a0b0d] hover:bg-white transition-all font-semibold"
            >
              {block.buttonText || 'DOHODNÚŤ STRETNUTIE →'}
            </Link>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
