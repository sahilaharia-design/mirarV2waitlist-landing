import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageMotion from '@/components/PageMotion'

export const metadata: Metadata = {
  title: 'Cookie Policy — Mirar',
  description:
    'What mirar.life stores in your browser: Google Analytics (aggregate usage only) and your language preference.',
  alternates: { canonical: 'https://mirar.life/cookies' },
  robots: { index: true, follow: true },
}

const LAST_UPDATED = 'August 24, 2026'

export default function CookiesPage() {
  return (
    <>
      <PageMotion />
      <Header />
      <main className="bg-ivory">
        <div className="max-w-container mx-auto px-6 pt-32 pb-24 sm:pt-40 sm:pb-28">
          <header className="mb-14 max-w-2xl">
            <p className="section-kicker font-sans text-[11px] tracking-[0.18em] uppercase text-text-secondary/60 mb-3">
              Legal
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl text-charcoal mb-4">
              Cookie Policy
            </h1>
            <p className="font-sans text-sm text-text-secondary/70">
              Last updated: {LAST_UPDATED}
            </p>
          </header>

          <div className="prose-cookies max-w-2xl font-sans text-charcoal/90 leading-relaxed space-y-12">
            <section>
              <p className="text-lg text-charcoal leading-relaxed">
                mirar.life uses Google Analytics to understand which parts of the site are actually working —
                nothing beyond that. No advertising cookies, no cross-site tracking, no data sold to anyone.
                Here&rsquo;s exactly what&rsquo;s set and why.
              </p>
            </section>

            <Section title="What this site actually stores">
              <p>
                <strong className="text-charcoal">Google Analytics (GA4).</strong> Sets a couple of first-party
                cookies (named <code className="font-mono text-[0.9em] bg-card-bg px-1.5 py-0.5 rounded">_ga</code>{' '}
                and <code className="font-mono text-[0.9em] bg-card-bg px-1.5 py-0.5 rounded">_ga_*</code>) to
                measure aggregate usage — which pages get visited, roughly how many people are showing up,
                general device/location info. It does not identify you by name or email, and we don&rsquo;t use
                it to build an advertising profile or sell data to anyone. It&rsquo;s run by Google, under{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-peach hover:underline">
                  Google&rsquo;s own privacy policy
                </a>
                . You can block it anytime with a browser extension (uBlock Origin, Privacy Badger, or similar)
                without breaking anything on the site.
              </p>
              <p>
                <strong className="text-charcoal">Language preference.</strong> Your chosen language (English,
                Hindi, or Gujarati), kept in{' '}
                <code className="font-mono text-[0.9em] bg-card-bg px-1.5 py-0.5 rounded">localStorage</code> —
                a different, cookie-adjacent browser storage mechanism — purely so the site remembers your
                preference on your next visit. It isn&rsquo;t sent to any server and isn&rsquo;t used to track
                you across sites.
              </p>
              <p>
                There are no advertising pixels and no other embedded third-party widgets on this site.
              </p>
            </Section>

            <Section title="The Mirar app">
              <p>
                The app itself, at{' '}
                <a href="https://mirar-app.vercel.app" className="text-peach hover:underline">
                  mirar-app.vercel.app
                </a>
                , is a separate site from mirar.life and uses browser storage only to keep you signed in and to
                remember your settings (language, dark mode) — nothing used for advertising or cross-site
                tracking, and no Google Analytics. See our{' '}
                <a href="/privacy" className="text-peach hover:underline">Privacy Policy</a> for what the app
                stores and why.
              </p>
            </Section>

            <Section title="If that changes further">
              <p>
                If we ever add anything beyond aggregate analytics — advertising, cross-site tracking, anything
                that needs your explicit opt-in under local law — we&rsquo;ll update this page first and add a
                real consent option rather than assume it. This page will always reflect what is genuinely
                running, not a boilerplate list.
              </p>
            </Section>

            <Section title="Related">
              <p>
                This page covers browser storage specifically. For how we handle your data more broadly, see
                our <a href="/privacy" className="text-peach hover:underline">Privacy Policy</a>. For the terms
                that govern using Mirar, see our{' '}
                <a href="/terms" className="text-peach hover:underline">Terms of Service</a>.
              </p>
            </Section>

            <Section title="Contact">
              <p>
                Questions about this policy — write to{' '}
                <a href="mailto:info@mirar.life" className="text-peach hover:underline">info@mirar.life</a>{' '}
                anytime.
              </p>
            </Section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-serif text-2xl text-charcoal mb-4">{title}</h2>
      <div className="space-y-4 font-sans text-[15px] text-charcoal/85 leading-relaxed">
        {children}
      </div>
    </section>
  )
}
