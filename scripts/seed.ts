import path from 'path'
import fs from 'fs'
import { getPayload } from 'payload'
import config from '../payload.config'
import { projects } from '../lib/projects'

async function runSeed() {
  console.log('🚀 Inicializujem SQLite databázu pre Payload CMS...')
  
  const payload = await getPayload({ config })
  console.log('✓ Payload klient pripojený k SQLite databáze (payload.db)')

  // 1. Check & Seed Media
  console.log('🖼 Kontrolujem a nahrávam médiá do knižnice...')
  const mediaMap = new Map<string, number>()

  const projectImages = [
    { file: 'rd-zarnovica.jpg', alt: 'Rodinný dom Žarnovica - Architektúra a lomový kameň' },
    { file: 'kaviaren-beniczky.jpg', alt: 'Kaviareň a vináreň Beniczky Banská Bystrica' },
    { file: 'rd-liptovsky-mikulas.jpg', alt: 'Rodinný dom Liptovský Mikuláš' },
    { file: 'nadstavba-sliaci.png', alt: 'Nadstavba domu Sliač' },
    { file: 'polyfunkcny-dom.jpg', alt: 'Polyfunkčný dom Banská Bystrica' },
    { file: 'rd-poniky.png', alt: 'Rodinný dom Poniky' },
    { file: 'byt-bb.jpg', alt: 'Interiér bytu Banská Bystrica' },
    { file: 'rd-kordiky.png', alt: 'Rodinný dom Kordíky' },
    { file: 'pristavba-rd.jpg', alt: 'Prístavba rodinného domu a záhradný domček' },
    { file: 'rd-prsianska-terasa.jpg', alt: 'Rodinný dom Pršianska Terasa' },
    { file: 'rum-house-beniczky.jpg', alt: 'Rum House Beniczky' },
    { file: 'zahradny-domcek-bazen.png', alt: 'Záhradný domček s bazénom' },
  ]

  for (const item of projectImages) {
    const localPath = path.resolve(process.cwd(), 'public/projects', item.file)
    if (fs.existsSync(localPath)) {
      try {
        // Check if already in media
        const existingMedia = await payload.find({
          collection: 'media',
          where: {
            filename: {
              equals: item.file,
            },
          },
          limit: 1,
        })

        if (existingMedia.docs.length > 0) {
          mediaMap.set(item.file, existingMedia.docs[0].id)
        } else {
          const created = await payload.create({
            collection: 'media',
            data: {
              alt: item.alt,
              caption: item.alt,
            },
            filePath: localPath,
          })
          mediaMap.set(item.file, created.id)
          console.log(`  ✓ Nahrané médium: ${item.file} (ID: ${created.id})`)
        }
      } catch (mediaErr) {
        console.warn(`  ! Upozornenie pri nahrávaní média ${item.file}:`, mediaErr)
      }
    }
  }

  // 2. Check existing projects
  const { totalDocs: existingCount } = await payload.count({
    collection: 'projects',
  })

  console.log(`📊 Aktuálny počet projektov v SQLite: ${existingCount}`)

  if (existingCount === 0) {
    console.log('📥 Importujem 12 architektonických projektov do SQLite databázy...')
    for (const [index, p] of projects.entries()) {
      try {
        const filename = p.image.replace('/projects/', '')
        const mediaId = mediaMap.get(filename)

        await payload.create({
          collection: 'projects',
          data: {
            title: p.title,
            slug: p.slug,
            categories: p.categories as any,
            image: (mediaId || p.image) as any,
            location: p.location || '',
            yearDesign: p.yearDesign || '',
            yearRealization: p.yearRealization || '',
            state: p.state || '',
            description: p.description || '',
            featured: index < 4,
            order: index,
            gallery: (p.gallery || []).map((imgUrl) => {
              const gFilename = imgUrl.replace('/projects/', '').split('/').pop() || ''
              const gMediaId = mediaMap.get(gFilename)
              return {
                ...(gMediaId ? { image: gMediaId } : { imageUrl: imgUrl }),
                caption: p.title,
              }
            }),
            sections: (p.sections || []).map((sec) => ({
              title: sec.title,
              images: sec.images.map((imgUrl) => {
                const sFilename = imgUrl.replace('/projects/', '').split('/').pop() || ''
                const sMediaId = mediaMap.get(sFilename)
                return {
                  ...(sMediaId ? { image: sMediaId } : { imageUrl: imgUrl }),
                }
              }),
            })),
          } as any,
        })
        console.log(`  ✓ Pridaný projekt: ${p.title} (${p.slug})`)
      } catch (err) {
        console.error(`  ✗ Chyba pri projekte ${p.slug}:`, err)
      }
    }
    console.log('🎉 Všetkých 12 projektov bolo úspešne uložených do SQLite databázy!')
  }

  // 3. Seed Posts (Blog / Žurnál)
  const { totalDocs: postCount } = await payload.count({
    collection: 'posts',
  })

  if (postCount === 0) {
    console.log('📝 Vytváram prvé architektonické eseje do Žurnálu...')
    const defaultPosts = [
      {
        title: 'Monolitický betón a prírodný kameň v kontexte modernej architektúry',
        slug: 'monoliticky-beton-a-prirodny-kamen',
        publishedDate: '2024-09-15',
        category: 'materiály',
        coverImage: mediaMap.get('rd-zarnovica.jpg') || ('/projects/rd-zarnovica.jpg' as any),
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
        coverImage: mediaMap.get('kaviaren-beniczky.jpg') || ('/projects/kaviaren-beniczky.jpg' as any),
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
        coverImage: mediaMap.get('rd-liptovsky-mikulas.jpg') || ('/projects/rd-liptovsky-mikulas.jpg' as any),
        excerpt:
          'Zotretie hranice medzi vnútorným obytným priestorom a vonkajšou prírodou pomocou bezrámových zasklení a plynulých podlahových plôch.',
        content: `Moderné bývanie už nedelí svet na striktné "dnu" a "von". Presklená plocha od podlahy po strop vťahuje krajinu priamo do obývacej haly.\n\nKľúčom je materiálová kontinuita: keď podlaha z brúseného betónu alebo prírodného travertínu pokračuje z interiéru plynule na exteriérovú terasu na rovnakej úrovni bez prahu.\n\nPri správnej orientácii na juhovýchod a presahu strešnej dosky dosahujeme pasívne solárne zisky v zime, zatiaľ čo v lete zostáva interiér príjemne tienený bez potreby agresívnej klimatizácie.`,
        author: 'Ing. arch. Martin Rajčan',
        featured: true,
      },
    ]

    function textToLexical(text: string) {
      const paragraphs = text.split('\n\n').filter(Boolean)
      return {
        root: {
          type: 'root',
          format: '',
          indent: 0,
          version: 1,
          direction: 'ltr',
          children: paragraphs.map((p) => ({
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            direction: 'ltr',
            children: [
              {
                type: 'text',
                format: 0,
                text: p,
                version: 1,
              },
            ],
          })),
        },
      }
    }

    for (const post of defaultPosts) {
      try {
        await payload.create({
          collection: 'posts',
          data: {
            ...post,
            content: textToLexical(post.content),
          } as any,
        })
        console.log(`  ✓ Vytvorený článok: ${post.title}`)
      } catch (err) {
        console.error(`  ✗ Chyba pri článku ${post.slug}:`, err)
      }
    }
  }

  // 4. Seed Pages (Stránky s modulárnymi blokmi)
  const { totalDocs: pagesCount } = await payload.count({
    collection: 'pages',
  })

  if (pagesCount === 0) {
    console.log('📄 Vytváram predvolené modulárne stránky s blokmi...')
    try {
      await payload.create({
        collection: 'pages',
        data: {
          title: 'Hlavná stránka (Titulka)',
          slug: 'home',
          metaDescription: 'Ramart Studio — Architektonický ateliér Ing. arch. Martina Rajčana v Banskej Bystrici.',
          layout: [
            {
              blockType: 'heroBlock',
              subtitle: 'ZÁMER / DIALÓG / REALIZÁCIA',
              title: 'ARCHITEKTONICKÝ ATELIÉR S REŠPEKTOM K MATERIÁLOM A PRIESTORU',
              description:
                'Navrhujeme rodinné domy, novostavby a rekonštrukcie s dôrazom na moderné poctivé materiály a individuálny prístup k pozemku.',
              image: mediaMap.get('rd-zarnovica.jpg') || ('/projects/rd-zarnovica.jpg' as any),
              imageCaption: 'REALIZÁCIA / RODINNÝ DOM ŽARNOVICA / LOMOVÝ KAMEŇ, BRIDLICA & SKLO / 2024',
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
      console.log('  ✓ Vytvorená modulárna stránka "Titulka" s 5 blokmi')
    } catch (pageErr) {
      console.error('  ✗ Chyba pri vytváraní stránky:', pageErr)
    }
  }

  // 5. Check if admin user exists
  const { totalDocs: userCount } = await payload.count({
    collection: 'users',
  })

  if (userCount === 0) {
    console.log('👤 Vytváram predvoleného administrátora pre SQLite databázu...')
    try {
      await payload.create({
        collection: 'users',
        data: {
          email: 'admin@ramartstudio.sk',
          password: 'ramart_admin_2026',
          name: 'Martin Rajčan',
        },
      })
      console.log('✓ Administrátor vytvorený:')
      console.log('  Email: admin@ramartstudio.sk')
      console.log('  Heslo: ramart_admin_2026')
    } catch (userErr) {
      console.error('Chyba pri vytváraní administrátora:', userErr)
    }
  }

  console.log('✅ SQLite databáza payload.db je pripravená a plne synchronizovaná!')
  process.exit(0)
}

runSeed().catch((err) => {
  console.error('Chyba počas inicializácie databázy:', err)
  process.exit(1)
})
