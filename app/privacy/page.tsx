import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageMotion from '@/components/PageMotion'

export const metadata: Metadata = {
  title: 'Privacy Policy — Mirar',
  description:
    'How Mirar collects, uses, and protects your data. No ad tracking, no data selling — your signal belongs to you.',
  alternates: { canonical: 'https://mirar.life/privacy' },
  robots: { index: true, follow: true },
}

const LAST_UPDATED = 'August 19, 2026'

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="font-sans text-sm text-text-secondary/70">
              Last updated: {LAST_UPDATED}
            </p>
          </header>

          <div className="prose-privacy max-w-2xl font-sans text-charcoal/90 leading-relaxed space-y-12">
            <section>
              <p className="text-lg text-charcoal leading-relaxed">
                Mirar reads your internal signals so you don&rsquo;t have to guess at your own drift. That only
                works if you trust what happens to what you tell it. This page is the honest, complete answer —
                not the shortest one.
              </p>
            </section>

            <Section title="The short version">
              <ul className="list-disc pl-5 space-y-2">
                <li>No password, ever — you sign in with a one-time email link.</li>
                <li>We never sell your data, and we don&rsquo;t run ad trackers on Mirar.</li>
                <li>Your daily check-ins are used to generate your own reflections — nothing else.</li>
                <li>You can ask us to export or delete everything, any time, by emailing us.</li>
              </ul>
            </Section>

            <Section title="What we collect">
              <p>
                <strong className="text-charcoal">Account information.</strong> Your email address, used only to
                sign you in (via a one-time link — we never see or store a password) and to send you the
                notifications described below. Internally, your activity is tied to a randomly generated{' '}
                <code className="font-mono text-[0.9em] bg-card-bg px-1.5 py-0.5 rounded">mirar_id</code> rather
                than your email, so your check-in history and signals are kept separate from your identity in our
                own systems wherever possible.
              </p>
              <p>
                <strong className="text-charcoal">Check-in data.</strong> The daily signal you select, and any
                optional private note you choose to add. The note is stored only to be shown back to you — it is
                never scored, analyzed for content, or shared.
              </p>
              <p>
                <strong className="text-charcoal">Progress data.</strong> Which day of your cycle you&rsquo;re on,
                your streak, and the theme scores Mirar computes from your check-ins, so your dashboard and
                reports can show you your own patterns over time.
              </p>
              <p>
                <strong className="text-charcoal">Preferences.</strong> Your chosen language (English, Hindi, or
                Gujarati) and light/dark mode setting.
              </p>
              <p>
                We do not collect your location, contacts, photos, or device identifiers, and Mirar contains no
                third-party advertising or analytics trackers.
              </p>
            </Section>

            <Section title="How we use it">
              <p>
                Your check-in responses are used to generate the AI mirror reflection and periodic reports you see
                inside the app — a synthesis of your own signals, reflected back to you. We also look at aggregate,
                pseudonymous usage patterns (via your mirar_id, not your email) to understand which parts of Mirar
                are actually helping people, so we can improve it. We do not use your data to train third-party AI
                models, and we do not build an advertising profile of you.
              </p>
            </Section>

            <Section title="Who we share it with">
              <p>
                We use a small number of infrastructure providers to run Mirar. None of them are permitted to use
                your data for their own purposes.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-charcoal">Supabase</strong> — hosts our database and handles sign-in.
                  Your account and check-in data live here, protected by row-level security so only you (and our
                  systems acting on your behalf) can read your own records.
                </li>
                <li>
                  <strong className="text-charcoal">Anthropic</strong> — the check-in responses relevant to a
                  given reflection or report are sent to Anthropic&rsquo;s API to generate that reflection&rsquo;s
                  text. Anthropic processes this under its own API data-use terms and does not use API inputs to
                  train its models.
                </li>
                <li>
                  <strong className="text-charcoal">Brevo</strong> — sends the email notifications you receive
                  (e.g. when a new report is ready), using your email address only.
                </li>
                <li>
                  <strong className="text-charcoal">Vercel</strong> — hosts the Mirar web app and this site.
                </li>
              </ul>
              <p>
                We do not sell, rent, or trade your personal information to anyone, for any reason.
              </p>
            </Section>

            <Section title="How long we keep it">
              <p>
                We keep your data for as long as your account is active, so your history and patterns stay
                available to you. If you stop using Mirar, your data simply sits inactive — it is not shared,
                repurposed, or sold in the meantime. You can request full deletion at any time (see below).
              </p>
            </Section>

            <Section title="Your rights">
              <p>
                You can ask us, at any time, to: see a copy of the data we hold on you, correct anything that&rsquo;s
                wrong, export your check-in history, or permanently delete your account and all associated data.
                We don&rsquo;t yet have a self-serve delete button in the app — for now, email{' '}
                <a href="mailto:info@mirar.life" className="text-peach hover:underline">info@mirar.life</a> and
                we&rsquo;ll handle it directly, usually within a few days.
              </p>
            </Section>

            <Section title="Security">
              <p>
                Data is encrypted in transit (HTTPS) and at rest. Access to your check-in records is enforced at
                the database level (row-level security), not just in application code, so a bug in the app can&rsquo;t
                accidentally expose one user&rsquo;s data to another. No system is perfectly secure, but we treat
                your reflections with the same care we&rsquo;d want for our own.
              </p>
            </Section>

            <Section title="Children">
              <p>
                Mirar is not directed at, and should not be used by, anyone under 16. We don&rsquo;t knowingly
                collect data from children.
              </p>
            </Section>

            <Section title="Changes to this policy">
              <p>
                If this policy changes in any way that meaningfully affects how we handle your data, we&rsquo;ll
                update the date at the top of this page and, for significant changes, notify you directly by
                email.
              </p>
            </Section>

            <Section title="Related">
              <p>
                This page covers your data specifically. For the terms that govern using Mirar, see our{' '}
                <a href="/terms" className="text-peach hover:underline">Terms of Service</a>. For what this
                website stores in your browser, see our{' '}
                <a href="/cookies" className="text-peach hover:underline">Cookie Policy</a>.
              </p>
            </Section>

            <Section title="Contact">
              <p>
                Questions, concerns, or a deletion request — write to{' '}
                <a href="mailto:info@mirar.life" className="text-peach hover:underline">info@mirar.life</a>{' '}
                anytime. A real person reads it.
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
