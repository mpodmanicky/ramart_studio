import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import '../globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ramartstudio.sk'),
  title: {
    default: 'RAMART ATELIÉR | Architektonické štúdio Ing. arch. Martin Rajčan',
    template: '%s | RAMART ATELIÉR',
  },
  description:
    'Autorizovaný architekt Ing. arch. Martin Rajčan. Architektonické štúdio v Banskej Bystrici so zameraním na rodinné domy, moderné materiály, rekonštrukcie a prémiové interiéry po celom Slovensku.',
  keywords: [
    'architekt Banská Bystrica',
    'architektonické štúdio',
    'Ing. arch. Martin Rajčan',
    'moderná architektúra',
    'rodinné domy',
    'moderné materiály',
    'pohľadový betón',
    'rekonštrukcie',
    'interiérový dizajn',
    'autorizovaný architekt SKA',
  ],
  authors: [{ name: 'Ing. arch. Martin Rajčan' }],
  creator: 'RAMART ATELIÉR',
  publisher: 'RAMART STUDIO s.r.o.',
  openGraph: {
    type: 'website',
    locale: 'sk_SK',
    url: 'https://www.ramartstudio.sk',
    siteName: 'RAMART ATELIÉR',
    title: 'RAMART ATELIÉR | Architektúra, Realizácie, Interiér',
    description:
      'Architektonický ateliér Ing. arch. Martina Rajčana. Práca s modernými materiálmi, precízna remeselná realizácia a nadčasový dizajn rodinných domov.',
    images: [
      {
        url: '/projects/rd-zarnovica.jpg',
        width: 1200,
        height: 630,
        alt: 'Ramart Ateliér - Architektúra',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sk">
      <Header />
      <body className="min-h-screen flex flex-col bg-gunpowder antialiased selection:bg-bone selection:text-anthracite">
        {children}
      </body>
      <Footer />
    </html>
  )
}
