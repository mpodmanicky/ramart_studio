import type { CollectionConfig } from 'payload'
import {
  HeroBlock,
  StatementBlock,
  ProjectsMosaicBlock,
  ContentWithMediaBlock,
  ProcessStepsBlock,
  MediaGalleryBlock,
  CallToActionBlock,
} from './blocks'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Názov stránky',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      label: 'URL identifikátor stránky (slug)',
      required: true,
      unique: true,
      index: true,
      admin: {
        description: 'Napr. "domov" pre titulku, "atelier", "sluzby", "kontakt", alebo vlastná stránka',
      },
    },
    {
      name: 'metaDescription',
      type: 'textarea',
      label: 'SEO Meta Popis',
    },
    {
      name: 'layout',
      type: 'blocks',
      label: 'Modulárne sekcie stránky (Blocks)',
      labels: {
        singular: 'Sekcia / Blok',
        plural: 'Sekcie / Bloky',
      },
      blocks: [
        HeroBlock,
        StatementBlock,
        ProjectsMosaicBlock,
        ContentWithMediaBlock,
        ProcessStepsBlock,
        MediaGalleryBlock,
        CallToActionBlock,
      ],
      admin: {
        initCollapsed: true,
        description: 'Pridávajte, upravujte obsah, priraďujte médiá a meňte poradie sekcií ťahaním myšou.',
      },
    },
  ],
}
