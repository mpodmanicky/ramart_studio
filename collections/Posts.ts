import type { CollectionConfig } from 'payload'
import {
  lexicalEditor,
  HeadingFeature,
  ParagraphFeature,
  BoldFeature,
  ItalicFeature,
  UnderlineFeature,
  UnorderedListFeature,
  OrderedListFeature,
  BlockquoteFeature,
  UploadFeature,
  LinkFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
} from '@payloadcms/richtext-lexical'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'publishedDate', 'featured'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Názov článku / eseje',
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
        description: 'Unikátna adresa článku (napr. monoliticky-beton-a-kamen-v-architekture)',
      },
    },
    {
      name: 'publishedDate',
      type: 'date',
      label: 'Dátum publikácie',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
    {
      name: 'category',
      type: 'select',
      label: 'Tematická kategória',
      required: true,
      options: [
        { label: 'Architektúra & Teória', value: 'architektúra' },
        { label: 'Materiály & Remeslo', value: 'materiály' },
        { label: 'Realizácie & Štúdie', value: 'realizácie' },
        { label: 'Proces tvorby', value: 'proces' },
      ],
      defaultValue: 'architektúra',
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Titulná fotografia článku',
      required: true,
    },
    {
      name: 'excerpt',
      type: 'textarea',
      label: 'Stručný úvod / anotácia (zobrazí sa v zozname článkov)',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Obsah článku (RichText Editor)',
      required: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
          ParagraphFeature(),
          BoldFeature(),
          ItalicFeature(),
          UnderlineFeature(),
          UnorderedListFeature(),
          OrderedListFeature(),
          BlockquoteFeature(),
          UploadFeature({
            collections: {
              media: {
                fields: [
                  {
                    name: 'caption',
                    type: 'text',
                    label: 'Popis obrázka (voliteľné)',
                  },
                ],
              },
            },
          }),
          LinkFeature(),
          FixedToolbarFeature(),
          InlineToolbarFeature(),
        ],
      }),
    },
    {
      name: 'author',
      type: 'text',
      label: 'Autor článku',
      defaultValue: 'Ing. arch. Martin Rajčan',
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Zvýraznený článok',
      defaultValue: false,
    },
  ],
}
