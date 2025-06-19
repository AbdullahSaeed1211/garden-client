import './globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { CursorEffects } from '@/components/ui/cursor-effects'

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Sproutly - Urban Gardening Courses Online | Transform Your Space',
  description: 'Learn urban gardening with expert-led online courses. Master container gardening, vertical gardens, and small space growing. Join 200+ students growing their green thumbs.',
  keywords: 'urban gardening, container gardening, vertical gardening, small space gardening, online gardening course, balcony gardening, indoor plants',
  authors: [{ name: 'Sproutly' }],
  creator: 'Sproutly',
  publisher: 'Sproutly',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://sproutly.site'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Sproutly - Urban Gardening Courses Online',
    description: 'Transform any urban space into a thriving garden oasis with our expert-led online courses.',
    url: 'https://sproutly.site',
    siteName: 'Sproutly',
    images: [
      {
        url: '/hero-garden.jpg',
        width: 1200,
        height: 630,
        alt: 'Urban garden transformation by Sproutly students',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sproutly - Urban Gardening Courses Online',
    description: 'Transform any urban space into a thriving garden oasis with our expert-led online courses.',
    creator: '@sproutly',
    images: ['/hero-garden.jpg'],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='0.9em' font-size='90'%3E%F0%9F%8C%B1%3C/text%3E%3C/svg%3E" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        {children}
        {/* Global cursor effects */}
        <CursorEffects color="#4CAF50" size={18} trailCount={8} />
      </body>
    </html>
  )
}
