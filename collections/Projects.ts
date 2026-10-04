import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'location', 'yearRealization', 'featured'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Názov projektu',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      label: 'URL Identifikátor (slug)',
      required: true,
      unique: true,
      index: true,
      admin: {
        description: 'Unikátna časť URL adresy projektu (napr. rodinny-dom-zarnovica)',
      },
    },
    {
      name: 'categories',
      type: 'select',
      label: 'Kategórie',
      hasMany: true,
      options: [
        { label: 'Architektúra', value: 'architektúra' },
        { label: 'Interiér', value: 'interiér' },
        { label: 'Dizajn', value: 'dizajn' },
        { label: 'Novostavba', value: 'novostavba' },
        { label: 'Rekonštrukcia', value: 'rekonštrukcia' },
        { label: 'Urbanizmus', value: 'urbanizmus' },
      ],
      defaultValue: ['architektúra'],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Hlavná fotografia projektu',
      required: true,
      admin: {
        description: 'Nahrajte novú fotografiu zo svojho počítača alebo vyberte z knižnice Media.',
      },
    },
    {
      name: 'location',
      type: 'text',
      label: 'Lokalita',
    },
    {
      name: 'yearDesign',
      type: 'text',
      label: 'Rok návrhu',
    },
    {
      name: 'yearRealization',
      type: 'text',
      label: 'Rok realizácie',
    },
    {
      name: 'state',
      type: 'text',
      label: 'Stav projektu / fáza',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Architektonický popis diela',
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Zobraziť na titulnej stránke medzi vybranými dielami',
      defaultValue: false,
    },
    {
      name: 'order',
      type: 'number',
      label: 'Poradie zobrazenia',
      defaultValue: 0,
    },
    {
      name: 'gallery',
      type: 'array',
      label: 'Fotogaléria realizácie',
      labels: {
        singular: 'Záber / fotografia',
        plural: 'Fotografie realizácie',
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Fotografia z knižnice médií',
        },
        {
          name: 'imageUrl',
          type: 'text',
          label: 'Alebo priama cesta / URL (voliteľné)',
        },
        {
          name: 'caption',
          type: 'text',
          label: 'Popis záberu (voliteľné)',
        },
      ],
    },
    {
      name: 'sections',
      type: 'array',
      label: 'Výkresová dokumentácia a architektonické sekcie',
      labels: {
        singular: 'Sekcia (pôdorys, rez, axonometria, pohľad)',
        plural: 'Sekcie výkresov',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Názov sekcie (napr. Pôdorys 1.NP, Axonometria)',
          required: true,
        },
        {
          name: 'images',
          type: 'array',
          label: 'Výkresy / schémy',
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              label: 'Výkres z knižnice médií',
            },
            {
              name: 'imageUrl',
              type: 'text',
              label: 'Alebo priama cesta / URL (voliteľné)',
            },
          ],
        },
      ],
    },
  ],
}
