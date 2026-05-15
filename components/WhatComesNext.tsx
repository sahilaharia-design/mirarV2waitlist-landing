function IcnDoor() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2H3v20h18v-8"/>
      <path d="M16 2l6 6-6 6"/>
      <path d="M10 12h7"/>
    </svg>
  )
}
function IcnSun() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <circle cx="12" cy="12" r="4"/>
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
    </svg>
  )
}
function IcnSparkle() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z"/>
    </svg>
  )
}
function IcnBars() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M18 20V10M12 20V4M6 20v-6"/>
    </svg>
  )
}
function IcnCycle() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12a9 9 0 109-9 9.75 9.75 0 00-6.74 2.74L3 8"/>
      <path d="M3 3v5h5"/>
    </svg>
  )
}
function IcnHeart() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
    </svg>
  )
}

const callouts = [
  { icon: <IcnDoor />,    title: 'Simpler onboarding',        body: 'You should understand Mirar in one minute, not one week.' },
  { icon: <IcnSun />,     title: 'Lighter daily check-ins',   body: 'One question. Clear options. Less cognitive load.' },
  { icon: <IcnSparkle />, title: 'Adaptive prompt flow',      body: 'The system becomes more relevant based on what you keep selecting.' },
  { icon: <IcnBars />,    title: 'Signal-based summaries',    body: 'No diagnosis. No advice. Just clear reflections on what is forming, repeating, or asking for attention.' },
  { icon: <IcnCycle />,   title: 'Built for everyday return', body: 'Designed as emotional and mental hygiene — not a one-time challenge.' },
  { icon: <IcnHeart />,   title: 'More human language',       body: 'Less abstract. More direct. Easier to feel, answer, and come back to.' },
]

export default function WhatComesNext() {
  return (
    <section id="next" className="py-14 sm:py-20 lg:py-24 bg-ivory">
      <div className="max-w-container mx-auto px-6">

        <div className="max-w-2xl mb-14 sr sr-header">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-text-secondary mb-4">
            What comes next
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-light leading-[1.1] text-charcoal mb-6">
            The next Mirar is rebuilt around return.
          </h2>
          <div className="mt-4 font-sans text-sm text-text-secondary leading-loose space-y-1 pl-4 border-l-2 border-peach/40">
            <p>Less explanation. Simpler language.</p>
            <p>More adaptive prompts. Clearer summaries.</p>
            <p>A lighter daily rhythm — a product that feels less like a program and more like hygiene.</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {callouts.map((f, i) => (
            <div
              key={f.title}
              className={`sr sr-d${Math.min(i + 1, 6)} rounded-2xl p-7 bg-card-bg border border-charcoal/5 hover:border-peach/25 hover:-translate-y-1 hover:shadow-md transition-all duration-300`}
            >
              <div className="w-10 h-10 rounded-xl bg-ivory/80 flex items-center justify-center text-peach mb-5 flex-shrink-0">
                {f.icon}
              </div>
              <h3 className="font-serif text-xl font-light text-charcoal mb-2.5 leading-snug">
                {f.title}
              </h3>
              <p className="font-sans text-sm text-text-secondary leading-relaxed">
                {f.body}
              </p>
            </div>
          ))}
        </div>

        {/* Section CTA */}
        <div className="sr flex flex-col sm:flex-row items-center justify-between gap-6 py-8 px-8 rounded-2xl bg-dark-section">
          <div>
            <p className="font-serif text-xl sm:text-2xl font-light italic text-ivory leading-snug mb-1">
              This is what you&apos;ve been waiting for.
            </p>
            <p className="font-sans text-sm text-ivory/45">Founding group access. No charge. Real influence on the product.</p>
          </div>
          <a
            href="#waitlist"
            className="flex-shrink-0 animate-cta-pulse inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-sans font-semibold text-sm transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap"
            style={{
              background: 'linear-gradient(135deg, #D99A73 0%, #C4806A 100%)',
              color: '#1C1A17',
              boxShadow: '0 4px 20px rgba(217,154,115,0.5)',
            }}
          >
            Secure my spot →
          </a>
        </div>
      </div>
    </section>
  )
}
