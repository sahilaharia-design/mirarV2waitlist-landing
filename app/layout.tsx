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
  title: 'Mirar — A Two-Minute Daily Mirror for Your Inner Life',
  description:
    'One honest answer a day. Mirar helps you notice the signals and patterns shaping your inner life—without scoring, diagnosing, or telling you who to become.',
  openGraph: {
    title: 'Mirar — A Two-Minute Daily Mirror for Your Inner Life',
    description:
      'One honest answer a day. Notice what is quietly forming inside you.',
    siteName: 'Mirar',
    url: 'https://mirar.life',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mirar — A Two-Minute Daily Mirror for Your Inner Life',
    description: 'One honest answer a day. Notice what is quietly forming inside you.',
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
