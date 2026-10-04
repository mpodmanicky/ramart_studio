import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: 'public/uploads',
    mimeTypes: ['image/*'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      label: 'Alternatívny text',
      required: true,
    },
    {
      name: 'caption',
      type: 'text',
      label: 'Popis / Kredity',
    },
  ],
}
