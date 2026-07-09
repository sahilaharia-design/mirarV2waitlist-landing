import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './tailwind.css'
import './globals.css'
import AnimationObserver from '@/components/AnimationObserver'
import { I18nProvider } from '@/lib/i18n'

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
  title: 'Mirar — Emotional Fitness Begins With Emotional Hygiene',
  description:
    'Mirar is your two-minute daily practice for your inner world. Not journaling. Not therapy. A clean read of your internal signals, every day.',
  openGraph: {
    title: 'Mirar — Emotional Fitness Begins With Emotional Hygiene',
    description:
      'Two minutes a day. A mirror for your inner state. Build emotional fitness through daily emotional hygiene.',
    siteName: 'Mirar',
    url: 'https://mirar.life',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://mirar.life/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mirar — Beta V1 is complete. What comes next.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mirar — The Next Version Is Coming',
    description: 'A small daily mirror for your inner world.',
    images: ['https://mirar.life/og-image.png'],
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
        <I18nProvider>
          {children}
          <AnimationObserver />
        </I18nProvider>
      </body>
    </html>
  )
}
