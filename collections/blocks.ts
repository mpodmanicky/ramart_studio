import type { Block } from 'payload'

export const HeroBlock: Block = {
  slug: 'heroBlock',
  labels: {
    singular: 'Hero blok (Veľký titulný vizuál)',
    plural: 'Hero bloky',
  },
  fields: [
    {
      name: 'subtitle',
      type: 'text',
      label: 'Podnadpis (napr. ZÁMER / DIALÓG / REALIZÁCIA)',
      defaultValue: 'ZÁMER / DIALÓG / REALIZÁCIA',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Hlavný nadpis',
      required: true,
      defaultValue: 'ARCHITEKTONICKÝ ATELIÉR S REŠPEKTOM K MATERIÁLOM A PRIESTORU',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Stručný úvodný popis',
      defaultValue: 'Tvoríme modernú, materiálovo poctivú a priestorovo veľkorysú architektúru.',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Veľkoformátový vizuál / fotografia stavby',
    },
    {
      name: 'imageCaption',
      type: 'text',
      label: 'Popis fotografie v spodnej lište',
      defaultValue: 'REALIZÁCIA / ARCHITEKTÚRA S REŠPEKTOM K TERÉNU',
    },
    {
      name: 'ctaText',
      type: 'text',
      label: 'Text tlačidla',
      defaultValue: 'PREZRIEŤ PORTFÓLIO DIEL →',
    },
    {
      name: 'ctaLink',
      type: 'text',
      label: 'Odkaz tlačidla',
      defaultValue: '/portfolio',
    },
  ],
}

export const StatementBlock: Block = {
  slug: 'statementBlock',
  labels: {
    singular: 'Manifest / Filozofia / Úvodné vyhlásenie',
    plural: 'Manifesty',
  },
  fields: [
    {
      name: 'tag',
      type: 'text',
      label: 'Číselný index / štítok',
      defaultValue: '01 / MANIFEST & FILOZOFIA',
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Nadpis vyhlásenia',
      required: true,
      defaultValue: 'MONOLITICKÝ BETÓN, PRÍRODNÝ KAMEŇ A SUROVÁ OCEĽ.',
    },
    {
      name: 'content',
      type: 'textarea',
      label: 'Obsah vyhlásenia (filozofia)',
      required: true,
      defaultValue:
        'Architektúra nie je dekorácia pozemku ani spotrebný produkt. Každý náš návrh vychádza z dôkladnej analýzy svetových strán, terénu a prirodzeného rytmu života investora.',
    },
    {
      name: 'author',
      type: 'text',
      label: 'Podpis / Autor',
      defaultValue: 'Ing. arch. Martin Rajčan',
    },
  ],
}

export const ProjectsMosaicBlock: Block = {
  slug: 'projectsMosaicBlock',
  labels: {
    singular: 'Mozaika vybraných diel (Kamenárska kompozícia)',
    plural: 'Mozaiky diel',
  },
  fields: [
    {
      name: 'tag',
      type: 'text',
      label: 'Štítok sekcie',
      defaultValue: '02 / SELEKCIA REALIZÁCIÍ',
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Nadpis sekcie',
      required: true,
      defaultValue: 'VYBRANÉ ARCHITEKTONICKÉ REALIZÁCIE',
    },
    {
      name: 'count',
      type: 'number',
      label: 'Počet zobrazených diel (odporúčané 4)',
      defaultValue: 4,
    },
    {
      name: 'showAllLink',
      type: 'checkbox',
      label: 'Zobraziť odkaz na kompletné portfólio',
      defaultValue: true,
    },
  ],
}

export const ContentWithMediaBlock: Block = {
  slug: 'contentWithMediaBlock',
  labels: {
    singular: 'Obsah s fotografiou / Profil',
    plural: 'Obsahové bloky s médiom',
  },
  fields: [
    {
      name: 'tag',
      type: 'text',
      label: 'Štítok sekcie (napr. 01 / PRINCÍPY)',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Nadpis bloku',
      required: true,
    },
    {
      name: 'content',
      type: 'textarea',
      label: 'Textový obsah',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Fotografia',
    },
    {
      name: 'imagePosition',
      type: 'select',
      label: 'Umiestnenie fotografie',
      options: [
        { label: 'Vľavo', value: 'left' },
        { label: 'Vpravo', value: 'right' },
      ],
      defaultValue: 'right',
    },
    {
      name: 'metaItems',
      type: 'array',
      label: 'Doplnkové informácie (napr. autorizácia, ocenenie)',
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Popisok',
          required: true,
        },
        {
          name: 'value',
          type: 'text',
          label: 'Hodnota',
          required: true,
        },
      ],
    },
  ],
}

export const ProcessStepsBlock: Block = {
  slug: 'processStepsBlock',
  labels: {
    singular: 'Proces tvorby (Fázy architektonického projektu)',
    plural: 'Procesné bloky',
  },
  fields: [
    {
      name: 'tag',
      type: 'text',
      label: 'Štítok sekcie',
      defaultValue: '03 / METODOLÓGIA & PROCES',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Nadpis',
      defaultValue: 'ŠTYRI FÁZY OD NÁVRHU PO KOLAUDÁCIU',
    },
    {
      name: 'steps',
      type: 'array',
      label: 'Jednotlivé fázy',
      labels: {
        singular: 'Fáza',
        plural: 'Fázy',
      },
      fields: [
        {
          name: 'number',
          type: 'text',
          label: 'Číslo fázy (napr. 01)',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          label: 'Názov fázy',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Popis',
          required: true,
        },
        {
          name: 'tags',
          type: 'text',
          label: 'Kľúčové výstupy (oddelené lomkou)',
        },
      ],
    },
  ],
}

export const MediaGalleryBlock: Block = {
  slug: 'mediaGalleryBlock',
  labels: {
    singular: 'Galéria fotografií / materiálov',
    plural: 'Galérie fotografií',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Nadpis galérie',
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Podnadpis',
    },
    {
      name: 'images',
      type: 'array',
      label: 'Fotografie',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Fotografia',
          required: true,
        },
        {
          name: 'caption',
          type: 'text',
          label: 'Popis záberu',
        },
      ],
    },
  ],
}

export const CallToActionBlock: Block = {
  slug: 'callToActionBlock',
  labels: {
    singular: 'Výzva k akcii / Dohodnutie stretnutia',
    plural: 'Výzvy k akcii',
  },
  fields: [
    {
      name: 'tag',
      type: 'text',
      label: 'Štítok',
      defaultValue: 'ZÁMER / DIALÓG / REALIZÁCIA',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Nadpis výzvy',
      required: true,
      defaultValue: 'MÁTE VLASTNÝ ARCHITEKTONICKÝ ZÁMER?',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Popis',
      defaultValue:
        'Každý projekt začína osobným rozhovorom. Preberieme vaše predstavy, možnosti pozemku a navrhneme optimálny harmonogram.',
    },
    {
      name: 'buttonText',
      type: 'text',
      label: 'Text tlačidla',
      defaultValue: 'DOHODNÚŤ OSOBNÉ STRETNUTIE →',
    },
    {
      name: 'buttonLink',
      type: 'text',
      label: 'Odkaz',
      defaultValue: '/kontakt',
    },
  ],
}
