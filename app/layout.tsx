import type { Metadata } from 'next'
import Script from 'next/script'
import { DM_Sans, Instrument_Serif } from 'next/font/google'
import './tailwind.css'
import './globals.css'
import AnimationObserver from '@/components/AnimationObserver'
import { I18nProvider } from '@/lib/i18n'

// Google Analytics (GA4). Sets its own cookies (_ga, _ga_<id>) to measure
// site usage — this is why /cookies no longer says "no cookies at all".
// Keep that page in sync if this ID ever changes or GA is removed.
const GA_MEASUREMENT_ID = 'G-Z2HQEMF42B'

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
  title: 'Mirar — Emotional fitness is practiced, not tracked.',
  description:
    'One inner rep a day. A small daily practice that exercises awareness, clarity, resilience, relationships and aligned action.',
  openGraph: {
    title: 'Mirar — Emotional fitness is practiced, not tracked.',
    description:
      'One inner rep a day. A small daily practice that exercises awareness, clarity, resilience, relationships and aligned action.',
    siteName: 'Mirar',
    url: 'https://mirar.life',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mirar — Emotional fitness is practiced, not tracked.',
    description: 'One inner rep a day. A small daily practice for awareness, clarity, resilience, relationships and aligned action.',
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
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <I18nProvider>
          {children}
          <AnimationObserver />
        </I18nProvider>
      </body>
    </html>
  )
}
