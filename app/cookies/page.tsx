import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageMotion from '@/components/PageMotion'

export const metadata: Metadata = {
  title: 'Cookie Policy — Mirar',
  description:
    'What mirar.life stores in your browser — and what it doesn’t. No tracking or advertising cookies.',
  alternates: { canonical: 'https://mirar.life/cookies' },
  robots: { index: true, follow: true },
}

const LAST_UPDATED = 'August 19, 2026'

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
                The honest version: this site (mirar.life) doesn&rsquo;t set any tracking or advertising cookies.
                There&rsquo;s no cookie banner asking you to &ldquo;accept&rdquo; anything here, because there&rsquo;s
                nothing non-essential to accept.
              </p>
            </section>

            <Section title="What this site actually stores">
              <p>
                mirar.life sets no cookies at all — first-party or third-party. The one thing it stores in your
                browser is your language choice (English, Hindi, or Gujarati), kept in{' '}
                <code className="font-mono text-[0.9em] bg-card-bg px-1.5 py-0.5 rounded">localStorage</code>,
                a different, cookie-adjacent browser storage mechanism, purely so the site remembers your
                preference on your next visit. It isn&rsquo;t sent to any server, isn&rsquo;t used to track you
                across sites, and you can clear it any time through your browser&rsquo;s settings.
              </p>
              <p>
                There are no analytics scripts, no advertising pixels, and no embedded third-party widgets on
                this site that could set cookies of their own.
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
                tracking. See our{' '}
                <a href="/privacy" className="text-peach hover:underline">Privacy Policy</a> for what the app
                stores and why.
              </p>
            </Section>

            <Section title="If that ever changes">
              <p>
                If we add anything non-essential in the future — analytics to understand what&rsquo;s working on
                the site, for instance — we&rsquo;ll update this page first, and add an actual consent option
                rather than assume it. This page will always reflect what is genuinely running, not a
                boilerplate list of cookies that don&rsquo;t exist.
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
