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
  title: 'Sproutly - Urban Garden Course',
  description: 'Learn how to transform any urban space into a thriving garden oasis with our 6-week online course.',
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
