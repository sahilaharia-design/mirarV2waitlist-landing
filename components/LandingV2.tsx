import Image from 'next/image'
import CtaLink from './CtaLink'

const APP_URL = 'https://mirar-app.vercel.app'

const STEPS = [
  {
    title: 'One rep a day',
    body: 'A short prompt and a few taps. Under a minute. Words are optional.',
  },
  {
    title: 'It builds on what you said',
    body: 'Follow-ups use your earlier answers, so each rep is relevant to you instead of generic.',
  },
  {
    title: 'A mirror, once it is earned',
    body: 'After enough signal, Mirar reflects one pattern back. You mark it accurate, partly right, or off, and it adjusts.',
  },
]

const CAPACITIES = [
  { name: 'Awareness', line: 'Noticing what is taking your attention and why.' },
  { name: 'Clarity', line: 'Seeing a situation as it is, not only as it feels.' },
  { name: 'Resilience', line: 'Recovering your footing after a hard stretch.' },
  { name: 'Relationships', line: 'Staying connected to the people who matter.' },
  { name: 'Aligned action', line: 'Turning one small intention into one small step.' },
]

const NOT = [
  'No score and no streak to chase.',
  'Words you type are optional and are not saved.',
  'Not a diary, a coach, or a verdict on you.',
]

export function LandingHeader() {
  return (
    <header className="px-4 sm:px-6 pt-4">
      <div className="max-w-container mx-auto h-[54px] flex items-center justify-between">
        <a href="/" aria-label="Mirar home" className="inline-flex items-center gap-2">
          <Image src="/assets/brand/mirar-mark.png" alt="" aria-hidden width={20} height={30} style={{ height: 28, width: 'auto' }} />
          <Image src="/assets/brand/mirar-wordmark.png" alt="Mirar" width={68} height={24} priority style={{ height: 22, width: 'auto' }} />
        </a>
        <CtaLink
          href={APP_URL}
          location="header_login"
          className="font-sans text-[14px] text-charcoal underline underline-offset-4 decoration-charcoal/30 hover:decoration-charcoal"
        >
          Log in
        </CtaLink>
      </div>
    </header>
  )
}

export function LandingMain() {
  return (
    <main>
      <section aria-labelledby="hero-title" className="px-4 sm:px-6 pt-16 sm:pt-24 pb-20 sm:pb-28">
        <div className="max-w-container mx-auto max-w-3xl">
          <p className="font-sans text-[12px] tracking-[0.18em] uppercase text-text-secondary mb-6">
            Mirar <span aria-hidden>·</span> Beta
          </p>
          <h1
            id="hero-title"
            className="font-serif text-[44px] sm:text-[72px] leading-[1.02] text-charcoal"
          >
            Emotional fitness is practiced, not tracked.
          </h1>
          <p className="font-serif text-[26px] sm:text-[32px] text-charcoal/80 mt-6">One inner rep a day.</p>
          <p className="font-sans text-[17px] leading-relaxed text-text-secondary mt-5 max-w-xl">
            Mirar is a small daily practice that exercises awareness, clarity, resilience, relationships
            and aligned action.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
            <CtaLink href={APP_URL} location="hero" className="primary-cta">
              <span>Start today&rsquo;s rep</span>
              <span className="primary-cta__arrow" aria-hidden>↗</span>
            </CtaLink>
            <p className="font-sans text-[14px] text-text-secondary">
              About a minute. Sign in with your email, no password.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="how-title" className="px-4 sm:px-6 py-16 sm:py-20 bg-card-bg">
        <div className="max-w-container mx-auto">
          <h2 id="how-title" className="font-serif text-[32px] sm:text-[44px] text-charcoal">How it works</h2>
          <ol className="mt-10 grid gap-8 sm:grid-cols-3 list-none p-0">
            {STEPS.map((s, i) => (
              <li key={s.title}>
                <p className="font-sans text-[13px] text-text-secondary">0{i + 1}</p>
                <h3 className="font-serif text-[24px] text-charcoal mt-1">{s.title}</h3>
                <p className="font-sans text-[16px] leading-relaxed text-text-secondary mt-2">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="exercise-title" className="px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-container mx-auto">
          <h2 id="exercise-title" className="font-serif text-[32px] sm:text-[44px] text-charcoal">What you exercise</h2>
          <ul className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2 list-none p-0">
            {CAPACITIES.map((c) => (
              <li key={c.name} className="border-t border-charcoal/12 pt-4">
                <h3 className="font-serif text-[22px] text-charcoal">{c.name}</h3>
                <p className="font-sans text-[16px] leading-relaxed text-text-secondary mt-1">{c.line}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="not-title" className="px-4 sm:px-6 py-16 sm:py-20 bg-dark-section text-ivory">
        <div className="max-w-container mx-auto max-w-3xl">
          <h2 id="not-title" className="font-serif text-[32px] sm:text-[44px]">Plain by design</h2>
          <ul className="mt-8 space-y-3 list-none p-0">
            {NOT.map((n) => (
              <li key={n} className="font-sans text-[17px] leading-relaxed text-ivory/90">{n}</li>
            ))}
          </ul>
          <p className="font-sans text-[15px] leading-relaxed text-ivory/75 mt-8">
            Mirar is in beta. For now your practice stays on the device you use, so it will not follow
            you to another phone or browser.
          </p>
        </div>
      </section>

      <section aria-labelledby="cta-title" className="px-4 sm:px-6 py-20 sm:py-28">
        <div className="max-w-container mx-auto max-w-3xl">
          <h2 id="cta-title" className="font-serif text-[36px] sm:text-[52px] leading-[1.05] text-charcoal">
            One rep. Today.
          </h2>
          <div className="mt-8">
            <CtaLink href={APP_URL} location="begin_cta" className="primary-cta">
              <span>Start today&rsquo;s rep</span>
              <span className="primary-cta__arrow" aria-hidden>↗</span>
            </CtaLink>
          </div>
        </div>
      </section>
    </main>
  )
}

export function LandingFooter() {
  return (
    <footer className="bg-ivory border-t border-charcoal/10">
      <div className="max-w-container mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-4 font-sans text-sm text-text-secondary">
          <span>© {new Date().getFullYear()} Mirar</span>
          <a href="/privacy" className="hover:text-charcoal">Privacy</a>
          <a href="/terms" className="hover:text-charcoal">Terms</a>
          <a href="/cookies" className="hover:text-charcoal">Cookies</a>
        </div>
        <a href="mailto:info@mirar.life" className="font-sans text-sm font-medium text-charcoal hover:text-peach">
          info@mirar.life
        </a>
      </div>
    </footer>
  )
}
