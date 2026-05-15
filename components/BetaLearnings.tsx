function IcnCheck() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M8 12l3 3 5-5"/>
    </svg>
  )
}
function IcnText() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      <path d="M8 10h8M8 14h5"/>
    </svg>
  )
}
function IcnRepeat() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 2l4 4-4 4"/>
      <path d="M3 11V9a4 4 0 014-4h14"/>
      <path d="M7 22l-4-4 4-4"/>
      <path d="M21 13v2a4 4 0 01-4 4H3"/>
    </svg>
  )
}
function IcnFeather() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.24 12.24a6 6 0 00-8.49-8.49L5 10.5V19h8.5l6.74-6.76z"/>
      <path d="M16 8L2 22M17.5 15H9"/>
    </svg>
  )
}

const learnings = [
  { icon: <IcnCheck />,   num: '01', title: 'The promise worked',              body: 'People were curious enough to begin. The need for a small inner check-in is real.' },
  { icon: <IcnText />,    num: '02', title: 'The language was too heavy',      body: 'The experience needs simpler words, clearer framing, and less interpretation upfront.' },
  { icon: <IcnRepeat />,  num: '03', title: 'The rhythm mattered',              body: 'Once people understood the daily pattern, Mirar started feeling less like content and more like practice.' },
  { icon: <IcnFeather />, num: '04', title: 'The next version must be lighter', body: 'The rebuild is focused on reducing friction — not adding features for the sake of features.' },
]

export default function BetaLearnings() {
  return (
    <section id="changed" className="py-14 sm:py-20 lg:py-24 bg-card-bg/40">
      <div className="max-w-container mx-auto px-6">

        <div className="max-w-xl mb-3 sr sr-header">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-text-secondary mb-4">
            Beta · 28 days · closed
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-light leading-[1.1] text-charcoal">
            The first beta gave us the signal.
          </h2>
        </div>

        <div className="max-w-2xl mb-12 sr">
          <p className="font-sans text-base text-text-secondary leading-relaxed mt-5">
            The first version was intentionally simple: one daily check-in, a few reflective options, and periodic summaries.
          </p>
          <p className="font-sans text-base text-text-secondary leading-relaxed mt-4">
            The idea was not the problem. The <em className="font-serif italic">weight</em> was.
          </p>
          <p className="font-sans text-base text-text-secondary leading-relaxed mt-4">
            People were willing to begin. The ones who understood the rhythm stayed. But the early experience asked too much too soon — too much language, too much interpretation, too much effort.
          </p>
          <p className="font-sans text-base text-text-secondary leading-relaxed mt-4">
            We are not polishing the old beta. We are rebuilding Mirar around the real learning: emotional and mental hygiene has to feel <em className="font-serif italic">light enough to return to every day.</em>
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {learnings.map((l, i) => (
            <div
              key={l.num}
              className={`sr sr-d${i + 1} bg-ivory rounded-2xl p-7 border border-charcoal/5 hover:border-peach/30 hover:-translate-y-1 hover:shadow-md transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-peach/10 flex items-center justify-center text-peach flex-shrink-0">
                  {l.icon}
                </div>
                <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-peach">{l.num}</p>
              </div>
              <h3 className="font-serif text-xl font-light text-charcoal mb-3 leading-snug">
                {l.title}
              </h3>
              <p className="font-sans text-sm text-text-secondary leading-relaxed">{l.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
