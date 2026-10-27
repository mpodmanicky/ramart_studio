export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ArchitecturalFirm',
        '@id': 'https://www.ramartstudio.sk/#organization',
        name: 'RAMART ATELIÉR',
        alternateName: [
          'RAMART STUDIO',
          'Ramart Studio s.r.o.',
          'Ateliér Ing. arch. Martin Rajčan',
        ],
        url: 'https://www.ramartstudio.sk',
        logo: 'https://www.ramartstudio.sk/ramart_logo.png',
        image: 'https://www.ramartstudio.sk/og-image.jpg',
        description:
          'Autorizovaný architekt Ing. arch. Martin Rajčan. Architektonické štúdio v Banskej Bystrici so zameraním na rodinné domy, moderné materiály, rekonštrukcie a prémiové interiéry po celom Slovensku.',
        telephone: '+421908477417',
        email: 'martin@ramartstudio.sk',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Lazovná 43',
          addressLocality: 'Banská Bystrica',
          postalCode: '974 01',
          addressCountry: 'SK',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 48.7363,
          longitude: 19.1462,
        },
        founder: {
          '@type': 'Person',
          name: 'Ing. arch. Martin Rajčan',
          jobTitle: 'Autorizovaný architekt',
          alumniOf: {
            '@type': 'EducationalOrganization',
            name: 'Fakulta architektúry STU v Bratislave',
          },
          memberOf: {
            '@type': 'Organization',
            name: 'Slovenská komora architektov (SKA)',
          },
        },
        areaServed: {
          '@type': 'Country',
          name: 'Slovakia',
        },
        priceRange: '$$$$',
        currenciesAccepted: 'EUR',
        paymentAccepted: 'Bankový prevod',
        knowsAbout: [
          'Moderná architektúra',
          'Autorské rodinné domy',
          'Pohľadový železobetón',
          'Rekonštrukcie historických a vidieckych objektov',
          'Prémiový interiérový dizajn',
          'Autorský dozor na stavbe',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.ramartstudio.sk/#website',
        url: 'https://www.ramartstudio.sk',
        name: 'RAMART ATELIÉR',
        publisher: {
          '@id': 'https://www.ramartstudio.sk/#organization',
        },
        inLanguage: 'sk-SK',
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

