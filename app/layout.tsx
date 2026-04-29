import type { Metadata } from 'next'
import { Outfit, DM_Sans } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['400', '500', '600'],
  display: 'swap',
})

const siteUrl = 'https://aawindowsanddoors.co.uk'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: '%s | AA Windows & Doors',
    default: 'AA Windows & Doors — Window & Door Specialists, Sutton Surrey',
  },
  description:
    'AA Windows & Doors: Sutton-based specialists in window installation, door installation, conservatories, roof lanterns and emergency glazing across London & Surrey. Checkatrade verified, 10/10 rated, 122 reviews.',
  keywords: [
    'window installation Sutton',
    'door installation Surrey',
    'double glazing Sutton',
    'uPVC windows Surrey',
    'aluminium windows London',
    'bifold doors Surrey',
    'composite doors Sutton',
    'roof lanterns Surrey',
    'conservatory windows London',
    'emergency glazing Sutton',
    'fire door installation London',
    'glass balustrades Surrey',
    'window repair Sutton',
    'timber windows Surrey',
    'AA Windows and Doors Sutton',
  ],
  authors: [{ name: 'AA Windows & Doors' }],
  creator: 'AA Windows & Doors',
  publisher: 'AA Windows & Doors',
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
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: siteUrl,
    siteName: 'AA Windows & Doors',
    title: 'AA Windows & Doors — Window & Door Specialists, Sutton Surrey',
    description:
      'Sutton-based specialists in window installation, door installation, conservatories, roof lanterns and emergency glazing. Checkatrade verified, 10/10 rated.',
    images: [
      {
        url: '/images/hero-bifold-card.webp',
        width: 1200,
        height: 630,
        alt: 'AA Windows & Doors — Sutton Surrey',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AA Windows & Doors — Window & Door Specialists, Sutton Surrey',
    description:
      'Sutton-based specialists in window installation, door installation, conservatories and emergency glazing. Checkatrade verified, 10/10 rated.',
    images: ['/images/hero-bifold-card.webp'],
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: 'bNBXI-cpVhHpEopS9veOQGEFgvPTFOjmjHQ8oVu4bjA',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': siteUrl,
  name: 'AA Windows & Doors',
  description:
    'Sutton-based specialists in window and door installation, conservatories, roof lanterns, emergency glazing and locksmith services across London & Surrey.',
  url: siteUrl,
  telephone: '+447585586388',
  email: 'AA.windowsanddoorss@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Sutton',
    addressRegion: 'Surrey',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.3618,
    longitude: -0.1945,
  },
  areaServed: [
    { '@type': 'City', name: 'Sutton' },
    { '@type': 'City', name: 'London' },
    { '@type': 'AdministrativeArea', name: 'Surrey' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '08:00',
      closes: '14:00',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Windows & Doors Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Window Installation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Door Installation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Conservatory Windows' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Roof Lanterns' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Glass Balustrades' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Emergency Glazing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Locksmith Services' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Timber Windows & Doors' } },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '10',
    bestRating: '10',
    ratingCount: '122',
    reviewCount: '122',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSans.variable}`}>
      <body className="bg-aa-white text-aa-black antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
