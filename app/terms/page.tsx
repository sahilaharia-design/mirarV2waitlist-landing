import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageMotion from '@/components/PageMotion'

export const metadata: Metadata = {
  title: 'Terms of Service — Mirar',
  description:
    'The terms for using Mirar — what the app is (and isn’t), your account, your content, and how the practice works.',
  alternates: { canonical: 'https://mirar.life/terms' },
  robots: { index: true, follow: true },
}

const LAST_UPDATED = 'August 19, 2026'

export default function TermsPage() {
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
              Terms of Service
            </h1>
            <p className="font-sans text-sm text-text-secondary/70">
              Last updated: {LAST_UPDATED}
            </p>
          </header>

          <div className="prose-terms max-w-2xl font-sans text-charcoal/90 leading-relaxed space-y-12">
            <section>
              <p className="text-lg text-charcoal leading-relaxed">
                By using Mirar, you&rsquo;re agreeing to these terms. We&rsquo;ve tried to write them the same way
                we write everything else in the app — plainly, and without hiding the parts that matter.
              </p>
            </section>

            <Section title="What Mirar is — and isn't">
              <p>
                Mirar is a daily practice for noticing your own internal signals — a mirror, not a mentor. Each
                day it reflects back a short synthesis of what you told it, and over time it shows you patterns
                you might not see yourself.
              </p>
              <p>
                <strong className="text-charcoal">Mirar is not therapy, counseling, medical advice, or a crisis
                service.</strong> The reflections it generates are not a diagnosis and should not be treated as
                professional guidance. If you&rsquo;re in crisis or thinking about harming yourself, please
                contact a local emergency service or a crisis helpline directly — not Mirar.
              </p>
            </Section>

            <Section title="Who can use Mirar">
              <p>
                You must be at least 16 years old to use Mirar. By creating an account, you&rsquo;re confirming
                that&rsquo;s true.
              </p>
            </Section>

            <Section title="Your account">
              <p>
                Mirar uses passwordless sign-in — a one-time link sent to your email. You&rsquo;re responsible
                for keeping access to that email address secure, since it&rsquo;s how anyone (including you)
                gets into your account. Each account is for one person; please don&rsquo;t share your sign-in
                link or use someone else&rsquo;s account.
              </p>
            </Section>

            <Section title="Your content">
              <p>
                What you enter into Mirar — your daily selections, any private notes you write, everything —
                stays yours. We store it so the app can function (generating your reflections, building your
                history, showing you patterns), as described in our{' '}
                <a href="/privacy" className="text-peach hover:underline">Privacy Policy</a>. We don&rsquo;t
                claim ownership of what you write, and we don&rsquo;t use it for anything beyond running Mirar
                for you.
              </p>
            </Section>

            <Section title="Acceptable use">
              <p>You agree not to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Use Mirar for anything illegal, or in a way that could harm another person</li>
                <li>Try to access another user&rsquo;s account or data</li>
                <li>Reverse-engineer, scrape, or attempt to extract Mirar&rsquo;s question bank, scoring logic, or underlying systems</li>
                <li>Interfere with or disrupt the service (including its servers or networks)</li>
                <li>Impersonate another person or misrepresent your affiliation with Mirar</li>
              </ul>
            </Section>

            <Section title="AI-generated reflections">
              <p>
                Your daily reflections and reports are generated using AI, based on what you enter. We work to
                make these useful and accurate, but AI-generated text can be wrong, incomplete, or occasionally
                strange. Treat every reflection as a starting point for your own thinking — not a fact about you.
              </p>
            </Section>

            <Section title="Cost">
              <p>
                Mirar is currently free to use, including the full daily practice. If we ever introduce a paid
                plan, we&rsquo;ll tell you clearly, in advance, before anything is charged — nothing will be
                billed to you silently or automatically.
              </p>
            </Section>

            <Section title="Ending your account">
              <p>
                You can stop using Mirar at any time. To have your account and data deleted, email{' '}
                <a href="mailto:info@mirar.life" className="text-peach hover:underline">info@mirar.life</a> — see
                our <a href="/privacy" className="text-peach hover:underline">Privacy Policy</a> for details. We
                may suspend or terminate an account that violates the acceptable-use terms above, and
                we&rsquo;ll try to tell you why if we do.
              </p>
            </Section>

            <Section title="No warranty, limited liability">
              <p>
                Mirar is provided &ldquo;as is.&rdquo; We work hard to keep it reliable, but we can&rsquo;t
                guarantee it will always be available, error-free, or uninterrupted. To the extent the law
                allows, Mirar and its team aren&rsquo;t liable for indirect or consequential damages arising from
                your use of the app. Nothing here limits liability where the law doesn&rsquo;t allow it to be
                limited.
              </p>
            </Section>

            <Section title="Changes to these terms">
              <p>
                If we make a meaningful change to these terms, we&rsquo;ll update the date at the top of this
                page and, for significant changes, notify you directly by email. Continuing to use Mirar after a
                change means you accept the updated terms.
              </p>
            </Section>

            <Section title="Governing law">
              <p>
                These terms are governed by the laws of India, without regard to conflict-of-law principles.
              </p>
            </Section>

            <Section title="Contact">
              <p>
                Questions about these terms — write to{' '}
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
