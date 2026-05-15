import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './tailwind.css'
import './globals.css'
import AnimationObserver from '@/components/AnimationObserver'
import StickyBottomCTA from '@/components/StickyBottomCTA'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mirar — The Next Version Is Coming',
  description:
    'Mirar is an emotional and mental hygiene system being rebuilt into a simpler daily mirror for your inner world. Join the waitlist.',
  openGraph: {
    title: 'Mirar — The Next Version Is Coming',
    description:
      'A small daily mirror for your inner world. Join the waitlist for Mirar v2.',
    siteName: 'Mirar',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mirar — The Next Version Is Coming',
    description: 'A small daily mirror for your inner world.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans bg-ivory text-charcoal">
        {children}
        <AnimationObserver />
        <StickyBottomCTA />
      </body>
    </html>
  )
}
