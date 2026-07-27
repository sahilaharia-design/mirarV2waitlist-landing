import type { Metadata } from 'next'
import { DM_Sans, Instrument_Serif } from 'next/font/google'
import './tailwind.css'
import './globals.css'
import AnimationObserver from '@/components/AnimationObserver'
import { I18nProvider } from '@/lib/i18n'

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal'],
  variable: '--font-serif',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://mirar.life'),
  title: 'Mirar — For every part of life, a daily practice. Except one.',
  description:
    'You’ve built habits for your body, your money, your time. The thing actually driving your choices has none. Two minutes a day catches the drift while it’s still small.',
  openGraph: {
    title: 'Mirar — For every part of life, a daily practice. Except one.',
    description:
      'Two minutes a day to catch the drift in how you’re really doing — before it becomes a pattern. No account required to try it.',
    siteName: 'Mirar',
    url: 'https://mirar.life',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mirar — For every part of life, a daily practice. Except one.',
    description: 'Two minutes a day to catch the drift in how you’re really doing — before it becomes a pattern.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${dmSans.variable}`}>
      <body className="font-sans bg-ivory text-charcoal">
        <I18nProvider>
          {children}
          <AnimationObserver />
        </I18nProvider>
      </body>
    </html>
  )
}
