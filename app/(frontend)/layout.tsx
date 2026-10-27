import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import JsonLd from '@/components/json-ld'
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
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'sk_SK',
    url: 'https://www.ramartstudio.sk',
    siteName: 'RAMART ATELIÉR',
    title: 'RAMART ATELIÉR | Architektonické štúdio Ing. arch. Martin Rajčan',
    description:
      'Autorizovaný architekt Ing. arch. Martin Rajčan. Architektonické štúdio v Banskej Bystrici so zameraním na autorské rodinné domy, moderné materiály, rekonštrukcie a prémiové interiéry po celom Slovensku.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'RAMART ATELIÉR | Architektonické štúdio Ing. arch. Martin Rajčan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RAMART ATELIÉR | Architektonické štúdio Ing. arch. Martin Rajčan',
    description:
      'Autorizovaný architekt Ing. arch. Martin Rajčan. Architektonické štúdio v Banskej Bystrici so zameraním na autorské rodinné domy, moderné materiály, rekonštrukcie a prémiové interiéry po celom Slovensku.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sk">
      <body className="min-h-screen flex flex-col bg-gunpowder antialiased selection:bg-bone selection:text-anthracite">
        <JsonLd />
        <Header />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
