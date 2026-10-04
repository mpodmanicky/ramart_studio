import type { CollectionConfig } from 'payload'

export const Inquiries: CollectionConfig = {
  slug: 'inquiries',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'phone', 'projectType', 'location', 'createdAt'],
  },
  access: {
    create: () => true, // Allows visitors to submit project inquiry
    read: ({ req: { user } }) => Boolean(user), // Only logged in admins can view leads
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Meno a priezvisko / Názov spoločnosti',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      label: 'E-mail',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Telefónne číslo',
    },
    {
      name: 'projectType',
      type: 'select',
      label: 'Typ investičného zámeru',
      options: [
        { label: 'Novostavba rodinného domu', value: 'rodinny_dom' },
        { label: 'Kompletná rekonštrukcia', value: 'rekonstrukcia' },
        { label: 'Interiérový dizajn (rezidenčný / komerčný)', value: 'interier' },
        { label: 'Polyfunkčný / administratívny objekt', value: 'polyfunkcia' },
        { label: 'Urbanizmus a územné plánovanie', value: 'urbanizmus' },
        { label: 'Architektonické poradenstvo / posúdenie pozemku', value: 'poradenstvo' },
      ],
    },
    {
      name: 'location',
      type: 'text',
      label: 'Lokalita zámeru',
    },
    {
      name: 'budgetEstimated',
      type: 'text',
      label: 'Predpokladaný rozpočet / rozsah',
    },
    {
      name: 'message',
      type: 'textarea',
      label: 'Správa a opis zámeru',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      label: 'Stav dopytu',
      defaultValue: 'novy',
      options: [
        { label: 'Nový dopyt', value: 'novy' },
        { label: 'V riešení / kontaktovaný', value: 'v_rieseni' },
        { label: 'Stretnutie dohodnuté', value: 'stretnutie' },
        { label: 'Uzatvorené / zmluva', value: 'uzatvorene' },
        { label: 'Archivované', value: 'archivovane' },
      ],
    },
  ],
}
