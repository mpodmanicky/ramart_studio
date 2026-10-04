import { getPayload } from 'payload'
import config from '@payload-config'
import { projects as initialProjects, type Project } from './projects'
import { getMediaUrl } from './media'

export interface Post {
  id: string
  title: string
  slug: string
  publishedDate: string
  category: string
  coverImage: string
  excerpt: string
  content: string
  author: string
  featured?: boolean
}

export interface PageData {
  id: string
  title: string
  slug: string
  metaDescription?: string
  layout: any[]
}

export async function getPayloadClient() {
  try {
    return await getPayload({ config })
  } catch (error) {
    console.warn('Could not initialize Payload client, falling back to static data:', error)
    return null
  }
}

export async function getProjects(): Promise<Project[]> {
  try {
    const payload = await getPayloadClient()
    if (payload) {
      // Check count
      const countResult = await payload.count({
        collection: 'projects',
      })

      if (countResult.totalDocs === 0) {
        // Auto-seed initial projects
        for (const [index, p] of initialProjects.entries()) {
          try {
            await payload.create({
              collection: 'projects',
              data: {
                title: p.title,
                slug: p.slug,
                categories: p.categories as any,
                image: p.image as any,
                location: p.location || '',
                yearDesign: p.yearDesign || '',
                yearRealization: p.yearRealization || '',
                state: p.state || '',
                description: p.description || '',
                featured: index < 4,
                order: index,
                gallery: (p.gallery || []).map((img) => ({ image: img as any })),
                sections: (p.sections || []).map((sec) => ({
                  title: sec.title,
                  images: sec.images.map((img) => ({ image: img as any })),
                })),
              } as any,
            })
          } catch (seedErr) {
            console.error(`Failed to seed project ${p.slug}:`, seedErr)
          }
        }
      }

      const result = await payload.find({
        collection: 'projects',
        limit: 100,
        sort: 'order',
      })

      if (result.docs && result.docs.length > 0) {
        return result.docs.map((doc: any) => ({
          id: String(doc.id),
          title: doc.title,
          slug: doc.slug,
          categories: Array.isArray(doc.categories) ? doc.categories : [doc.categories],
          image: getMediaUrl(doc.image, '/projects/rd-zarnovica.jpg'),
          location: doc.location || undefined,
          yearDesign: doc.yearDesign || undefined,
          yearRealization: doc.yearRealization || undefined,
          state: doc.state || undefined,
          description: doc.description || undefined,
          gallery:
            doc.gallery?.map((g: any) => getMediaUrl(g.image || g.url)).filter(Boolean) || [],
          sections:
            doc.sections?.map((s: any) => ({
              title: s.title,
              images:
                s.images?.map((i: any) => getMediaUrl(i.image || i.url)).filter(Boolean) || [],
            })) || [],
        }))
      }
    }
  } catch (error) {
    console.warn('Error fetching projects from Payload, using static projects:', error)
  }

  return initialProjects
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const payload = await getPayloadClient()
    if (payload) {
      const result = await payload.find({
        collection: 'projects',
        where: {
          slug: {
            equals: slug,
          },
        },
        limit: 1,
      })

      if (result.docs && result.docs.length > 0) {
        const doc: any = result.docs[0]
        return {
          id: String(doc.id),
          title: doc.title,
          slug: doc.slug,
          categories: Array.isArray(doc.categories) ? doc.categories : [doc.categories],
          image: getMediaUrl(doc.image, '/projects/rd-zarnovica.jpg'),
          location: doc.location || undefined,
          yearDesign: doc.yearDesign || undefined,
          yearRealization: doc.yearRealization || undefined,
          state: doc.state || undefined,
          description: doc.description || undefined,
          gallery:
            doc.gallery?.map((g: any) => getMediaUrl(g.image || g.url)).filter(Boolean) || [],
          sections:
            doc.sections?.map((s: any) => ({
              title: s.title,
              images:
                s.images?.map((i: any) => getMediaUrl(i.image || i.url)).filter(Boolean) || [],
            })) || [],
        }
      }
    }
  } catch (error) {
    console.warn(`Error fetching project "${slug}" from Payload, using static fallback:`, error)
  }

  const staticProject = initialProjects.find((p) => p.slug === slug)
  return staticProject || null
}

const INITIAL_POSTS = [
  {
    title: 'Monolitický betón a prírodný kameň v kontexte modernej architektúry',
    slug: 'monoliticky-beton-a-prirodny-kamen',
    publishedDate: '2024-09-15',
    category: 'materiály',
    coverImage: '/projects/rd-zarnovica.jpg',
    excerpt:
      'Prečo v našich návrhoch dávame prednosť surovým, priznaným materiálom pred povrchovými imitáciami a zatepľovacími plášťami.',
    content: `Surový monolitický betón a lomový kameň nie sú len estetickým vyjadrením. Sú odpoveďou na otázku trvácnosti, tepelnej akumulácie a priestorovej pravdivosti.\n\nV dobe rýchlych a lacných kompozitných fasád strácajú stavby svoju hmotovú podstatu. Priznaný betón s odtlačkom dreveného debnenia naopak starne do krásy — s každým rokom získava hlbšiu patinu a stáva sa integrálnou súčasťou terénu.\n\nPri rodinnom dome v Žarnovici sme pracovali s lokálnym andezitom a masívnymi železobetónovými stenami, ktoré vytvárajú prirodzený tepelný štít voči severným vetrom a zároveň prepájajú obytný priestor s lesným masívom.`,
    author: 'Ing. arch. Martin Rajčan',
    featured: true,
  },
  {
    title: 'Ako prebieha architektonická štúdia: dialóg, rešpekt k terénu a prvý koncept',
    slug: 'ako-prebieha-architektonicka-studia',
    publishedDate: '2024-11-04',
    category: 'proces',
    coverImage: '/projects/kaviaren-beniczky.jpg',
    excerpt:
      'Architektonická štúdia je najdôležitejšou fázou celého procesu. Tu sa rozhoduje o svetle, funkcii, osadení na pozemok a celkovej hodnote diela.',
    content: `Mnohí investori prichádzajú s predstavou konkrétneho počtu izieb. Úlohou architekta je však ísť hlbšie — pýtať sa na rytmus dňa, vzťah k záhrade, privátne zóny a budúci vývoj rodiny.\n\nŠtúdia nezačína 3D modelom v počítači, ale osobnou obhliadkou pozemku za rôznych svetelných podmienok. Skúmame prevládajúce vetry, výhľadové osi a terénne zlomy.\n\nAž keď je koncepcia jasná, vzniká séria skíc a hmôt, ktoré následne pretavujeme do detailného 3D modelu a overujeme priestorové väzby.`,
    author: 'Ing. arch. Martin Rajčan',
    featured: false,
  },
  {
    title: 'Prepojenie interiéru s exteriérom: veľkoformátové presklenia a plynulý priestor',
    slug: 'prepojenie-interieru-s-exterierom',
    publishedDate: '2025-01-20',
    category: 'architektúra',
    coverImage: '/projects/rd-liptovsky-mikulas.jpg',
    excerpt:
      'Zotretie hranice medzi vnútorným obytným priestorom a vonkajšou prírodou pomocou bezrámových zasklení a plynulých podlahových plôch.',
    content: `Moderné bývanie už nedelí svet na striktné "dnu" a "von". Presklená plocha od podlahy po strop vťahuje krajinu priamo do obývacej haly.\n\nKľúčom je materiálová kontinuita: keď podlaha z brúseného betónu alebo prírodného travertínu pokračuje z interiéru plynule na exteriérovú terasu na rovnakej úrovni bez prahu.\n\nPri správnej orientácii na juhovýchod a presahu strešnej dosky dosahujeme pasívne solárne zisky v zime, zatiaľ čo v lete zostáva interiér príjemne tienený bez potreby agresívnej klimatizácie.`,
    author: 'Ing. arch. Martin Rajčan',
    featured: true,
  },
]

export async function getPosts(): Promise<Post[]> {
  try {
    const payload = await getPayloadClient()
    if (payload) {
      const countResult = await payload.count({
        collection: 'posts',
      })

      if (countResult.totalDocs === 0) {
        for (const post of INITIAL_POSTS) {
          try {
            await payload.create({
              collection: 'posts',
              data: {
                title: post.title,
                slug: post.slug,
                publishedDate: post.publishedDate,
                category: post.category as any,
                coverImage: post.coverImage as any,
                excerpt: post.excerpt,
                content: post.content,
                author: post.author,
                featured: post.featured,
              } as any,
            })
          } catch (seedErr) {
            console.error(`Failed to seed post ${post.slug}:`, seedErr)
          }
        }
      }

      const result = await payload.find({
        collection: 'posts',
        limit: 100,
        sort: '-publishedDate',
      })

      if (result.docs && result.docs.length > 0) {
        return result.docs.map((doc: any) => ({
          id: String(doc.id),
          title: doc.title,
          slug: doc.slug,
          publishedDate: doc.publishedDate || '',
          category: doc.category || 'architektúra',
          coverImage: getMediaUrl(doc.coverImage, '/projects/rd-zarnovica.jpg'),
          excerpt: doc.excerpt || '',
          content: doc.content || '',
          author: doc.author || 'Ing. arch. Martin Rajčan',
          featured: doc.featured || false,
        }))
      }
    }
  } catch (error) {
    console.warn('Error fetching posts from Payload, using fallback:', error)
  }

  return INITIAL_POSTS.map((p, idx) => ({
    id: `post-${idx + 1}`,
    ...p,
  }))
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const payload = await getPayloadClient()
    if (payload) {
      const result = await payload.find({
        collection: 'posts',
        where: {
          slug: {
            equals: slug,
          },
        },
        limit: 1,
      })

      if (result.docs && result.docs.length > 0) {
        const doc: any = result.docs[0]
        return {
          id: String(doc.id),
          title: doc.title,
          slug: doc.slug,
          publishedDate: doc.publishedDate || '',
          category: doc.category || 'architektúra',
          coverImage: getMediaUrl(doc.coverImage, '/projects/rd-zarnovica.jpg'),
          excerpt: doc.excerpt || '',
          content: doc.content || '',
          author: doc.author || 'Ing. arch. Martin Rajčan',
          featured: doc.featured || false,
        }
      }
    }
  } catch (error) {
    console.warn(`Error fetching post "${slug}" from Payload:`, error)
  }

  const staticPost = INITIAL_POSTS.find((p) => p.slug === slug)
  if (staticPost) {
    return {
      id: `post-${slug}`,
      ...staticPost,
    }
  }
  return null
}

export async function getPageBySlug(slug: string): Promise<PageData | null> {
  try {
    const payload = await getPayloadClient()
    if (payload) {
      // Check if pages collection has items, if 0 seed home page blocks
      const countResult = await payload.count({
        collection: 'pages',
      })

      if (countResult.totalDocs === 0) {
        try {
          await payload.create({
            collection: 'pages',
            data: {
              title: 'Hlavná stránka (Titulka)',
              slug: 'home',
              metaDescription: 'Ramart Studio — Architektonický ateliér Ing. arch. Martina Rajčana',
              layout: [
                {
                  blockType: 'heroBlock',
                  subtitle: 'ZÁMER / DIALÓG / REALIZÁCIA',
                  title: 'ARCHITEKTONICKÝ ATELIÉR S REŠPEKTOM K MATERIÁLOM A PRIESTORU',
                  description:
                    'Tvoríme modernú, materiálovo poctivú a priestorovo veľkorysú architektúru rodinných domov, polyfunkcií a interiérov s rešpektom k pozemku a životu investora.',
                  image: '/projects/rd-zarnovica.jpg' as any,
                  imageCaption: 'REALIZÁCIA / RODINNÝ DOM ŽARNOVICA / LOMOVÝ KAMEŇ, BRIDLICA & SKLO',
                  ctaText: 'PREZRIEŤ PORTFÓLIO DIEL →',
                  ctaLink: '/portfolio',
                },
                {
                  blockType: 'statementBlock',
                  tag: '01 / MANIFEST & FILOZOFIA',
                  heading: 'MONOLITICKÝ BETÓN, PRÍRODNÝ KAMEŇ A SUROVÁ OCEĽ.',
                  content:
                    'Architektúra nie je dekorácia pozemku ani spotrebný produkt. Každý náš návrh vychádza z dôkladnej analýzy svetových strán, terénu a prirodzeného rytmu života investora. Pracujeme s materiálmi, ktoré nestarnú morálne, ale získavajú patinu a dôstojnosť.',
                  author: 'Ing. arch. Martin Rajčan / Autorizovaný architekt SKA 2013',
                },
                {
                  blockType: 'projectsMosaicBlock',
                  tag: '02 / SELEKCIA REALIZÁCIÍ',
                  heading: 'VYBRANÉ ARCHITEKTONICKÉ REALIZÁCIE',
                  count: 4,
                  showAllLink: true,
                },
                {
                  blockType: 'processStepsBlock',
                  tag: '03 / METODOLÓGIA & PROCES',
                  title: 'ŠTYRI FÁZY OD NÁVRHU PO KOLAUDÁCIU',
                  steps: [
                    {
                      number: '01',
                      title: 'ARCHITEKTONICKÁ ŠTÚDIA',
                      description:
                        'Dispozičný a hmotový koncept, osadenie stavby na pozemok, overenie svetlotechniky, fotorealistické vizualizácie a definícia materiálov.',
                      tags: 'SKICE / 3D MODEL / ARCHITEKTONICKÝ ZÁMER',
                    },
                    {
                      number: '02',
                      title: 'PROJEKT PRE ÚZEMNÉ & STAVEBNÉ POVOLENIE',
                      description:
                        'Kompletná výkresová dokumentácia stavby vrátane profesií, statiky a inžinieringu na stavebnom úrade.',
                      tags: 'DUR / DSP / INŽINIERING & STAVEBNÉ POVOLENIE',
                    },
                    {
                      number: '03',
                      title: 'REALIZAČNÝ PROJEKT (DRS)',
                      description:
                        'Do milimetra rozkreslené detaily konštrukcií, výkresy tvaru monolitov, skladby striech, akustika a kladačské plány materiálov.',
                      tags: 'DETAILNÉ VÝKRESY / VÝKAZ VÝMER / TENDER',
                    },
                    {
                      number: '04',
                      title: 'AUTORSKÝ DOZOR NA STAVBE',
                      description:
                        'Pravidelná osobná prítomnosť architekta na stavbe. Kontrola lícovania betónov, osadenia rámov a koordinácia subdodávateľov.',
                      tags: 'KONTROLNÉ DNI / KVALITA REMESLA / KOLAUDÁCIA',
                    },
                  ],
                },
                {
                  blockType: 'callToActionBlock',
                  tag: 'ZÁMER / DIALÓG / REALIZÁCIA',
                  title: 'PLÁNUJETE VLASTNÝ ARCHITEKTONICKÝ PROJEKT?',
                  description:
                    'Dohodnite si nezáväznú konzultáciu v našom ateliéri na Lazovnej 43 v Banskej Bystrici alebo online. Preberieme váš pozemok, rozpočet a predstavy.',
                  buttonText: 'DOHODNÚŤ OSOBNÉ STRETNUTIE →',
                  buttonLink: '/kontakt',
                },
              ],
            } as any,
          })
        } catch (seedErr) {
          console.error('Failed to seed home page:', seedErr)
        }
      }

      const result = await payload.find({
        collection: 'pages',
        where: {
          slug: {
            equals: slug,
          },
        },
        limit: 1,
      })

      if (result.docs && result.docs.length > 0) {
        const doc: any = result.docs[0]
        return {
          id: String(doc.id),
          title: doc.title,
          slug: doc.slug,
          metaDescription: doc.metaDescription,
          layout: doc.layout || [],
        }
      }
    }
  } catch (error) {
    console.warn(`Error fetching page "${slug}" from Payload:`, error)
  }

  return null
}
