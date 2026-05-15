function IcnTooth() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 4C8 2.5 9.5 2 12 2s4 .5 4 2v9c0 3.5-1.5 7-4 7s-4-3.5-4-7V4z"/>
      <path d="M8.5 8c1 1 2 1.5 3.5 1.5S14.5 9 15.5 8"/>
    </svg>
  )
}
function IcnBolt() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3.5 13.5H11L10 22L20.5 10.5H13L13 2z"/>
    </svg>
  )
}
function IcnLeaf() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22C7.5 22 3 17.5 3 12 3 6.5 7 2 12 2c5 0 9 4.5 9 10 0 5.5-4.5 10-9 10z"/>
      <path d="M12 2L7 22"/>
    </svg>
  )
}
function IcnCalendar() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <rect x="3" y="4" width="18" height="17" rx="2"/>
      <path d="M3 10h18M8 2v4M16 2v4"/>
      <circle cx="8" cy="15" r="0.8" fill="currentColor" stroke="none"/>
      <circle cx="12" cy="15" r="0.8" fill="currentColor" stroke="none"/>
      <circle cx="16" cy="15" r="0.8" fill="currentColor" stroke="none"/>
    </svg>
  )
}
function IcnOval() {
  return (
    <img src="/assets/brand/mirar-mark.png" alt="" width={20} height={30} style={{ height: '34px', width: 'auto', display: 'block' }} />
  )
}

const rituals = [
  { icon: <IcnTooth />,    label: 'Brushing teeth', sub: 'Physical hygiene',  desc: 'Helps you notice and maintain your teeth.',              dark: false },
  { icon: <IcnBolt />,     label: 'Exercise',        sub: 'Body maintenance', desc: 'Helps you notice and strengthen your body.',             dark: false },
  { icon: <IcnLeaf />,     label: 'Nutrition',       sub: 'Energy tracking',  desc: 'Helps you notice how you fuel yourself.',                dark: false },
  { icon: <IcnCalendar />, label: 'Calendar',        sub: 'Time accounting',  desc: 'Helps you notice where your time goes.',                 dark: false },
  { icon: <IcnOval />,     label: 'Mirar',           sub: 'Inner signal',     desc: 'Helps you notice what is happening inside you — daily.', dark: true  },
]

export default function WhyMirar() {
  return (
    <section id="why" className="py-14 sm:py-20 lg:py-24 bg-ivory">
      <div className="max-w-container mx-auto px-6">

        {/* Heading */}
        <div className="max-w-2xl mb-5 sr sr-header">
          <h2 className="font-serif text-4xl sm:text-5xl font-light leading-[1.1] text-charcoal mb-6">
            Everything important gets a daily check-in.
            <br />
            <em>Except the inner self.</em>
          </h2>
          <p className="font-sans text-base text-text-secondary leading-relaxed mb-3">
            Most of us already have rituals for the visible parts of life. We brush our teeth. We move. We track sleep, calories, steps, and money.
          </p>
          <p className="font-sans text-base text-text-secondary leading-relaxed">
            But the patterns shaping our choices go completely unnoticed — the pressure we carry, the conversations we avoid, the energy we leak, the versions of ourselves we keep performing.
          </p>
        </div>

        <div className="w-12 h-px bg-peach/40 mb-10" />

        {/* Ritual cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {rituals.map((r, i) => (
            <div
              key={r.label}
              className={`sr sr-d${Math.min(i + 1, 6)} rounded-2xl p-6 flex flex-col gap-4 border transition-all duration-300 hover:-translate-y-1 ${
                r.dark
                  ? 'bg-dark-section text-ivory border-transparent shadow-xl'
                  : 'bg-card-bg text-charcoal border-charcoal/5 hover:border-charcoal/10 hover:shadow-md'
              }`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${r.dark ? 'bg-ivory/10' : 'bg-ivory/70'}`}>
                <span className={r.dark ? 'text-peach' : 'text-charcoal/50'}>
                  {r.icon}
                </span>
              </div>
              <div>
                <p className={`font-serif text-base font-medium leading-snug ${r.dark ? 'text-ivory' : 'text-charcoal'}`}>
                  {r.label}
                </p>
                <p className={`font-sans text-[10px] tracking-[0.12em] uppercase mt-0.5 ${r.dark ? 'text-peach/70' : 'text-text-secondary'}`}>
                  {r.sub}
                </p>
              </div>
              <p className={`font-sans text-xs leading-relaxed ${r.dark ? 'text-ivory/60' : 'text-text-secondary'}`}>
                {r.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Pull quote + CTA */}
        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sr">
          <p className="font-serif text-xl sm:text-2xl font-light italic text-charcoal/65 leading-relaxed border-l-2 border-peach/50 pl-5 max-w-md">
            &ldquo;Mirar fills the space that nothing else covers.&rdquo;
          </p>
          <a
            href="#waitlist"
            className="flex-shrink-0 animate-cta-pulse inline-flex items-center gap-2 px-6 py-3 rounded-full font-sans font-semibold text-sm transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              background: 'linear-gradient(135deg, #D99A73 0%, #C4806A 100%)',
              color: '#1C1A17',
              boxShadow: '0 2px 14px rgba(217,154,115,0.4)',
            }}
          >
            Get early access →
          </a>
        </div>
      </div>
    </section>
  )
}
