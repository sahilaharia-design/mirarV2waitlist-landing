export default function ProductPreview() {
  return (
    <section id="preview" className="py-14 sm:py-18 lg:py-24 bg-dark-section overflow-hidden">
      <div className="max-w-container mx-auto px-6">
        {/* Header */}
        <div className="max-w-xl mb-14 lg:mb-16">
          <p className="font-sans text-[11px] tracking-[0.22em] uppercase text-ivory/30 mb-3">
            Sneak peek
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-ivory leading-[1.1] mb-5">
            A quieter daily interface for noticing what is happening inside.
          </h2>
          <p className="font-sans text-base text-ivory/50 leading-relaxed">
            The next version is being designed to feel lighter from the first
            interaction — clearer prompts, simpler choices, and reflections
            that feel like recognition, not advice.
          </p>
        </div>

        {/* Phone + flow cards layout */}
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">

          {/* CSS phone mockup */}
          <div className="flex-shrink-0 mx-auto lg:mx-0">
            <div
              className="animate-float-slow"
              style={{ willChange: 'transform' }}
            >
              <div
                className="relative bg-charcoal/80 border-2 border-ivory/10 shadow-2xl"
                style={{ width: '260px', borderRadius: '44px', padding: '10px' }}
              >
                {/* Pill notch */}
                <div className="flex justify-center mb-3">
                  <div className="w-16 h-1 bg-ivory/10 rounded-full" />
                </div>

                {/* Screen */}
                <div
                  className="bg-ivory overflow-hidden flex flex-col gap-3 p-4"
                  style={{ borderRadius: '36px', minHeight: '460px' }}
                >
                  {/* Status bar */}
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-sans text-[10px] text-charcoal/30 tracking-wide">9:41</span>
                    <div className="w-3 h-1.5 border border-charcoal/20 rounded-sm overflow-hidden">
                      <div className="w-2/3 h-full bg-charcoal/30" />
                    </div>
                  </div>

                  {/* Step 1 — Pause */}
                  <div className="bg-white rounded-2xl p-4 border border-charcoal/6 shadow-sm">
                    <div className="flex items-center justify-between mb-2.5">
                      <p className="font-sans text-[9px] tracking-[0.16em] uppercase text-peach">
                        Pause
                      </p>
                      <div className="w-1.5 h-1.5 rounded-full bg-peach/60" />
                    </div>
                    <p className="font-serif text-[12px] leading-snug text-charcoal italic mb-3">
                      What has been quietly taking more space inside you lately?
                    </p>
                    <div className="flex flex-col gap-1.5">
                      {[
                        { text: "A decision I haven't made", active: false },
                        { text: "A conversation I'm avoiding", active: true },
                        { text: 'A version of myself I keep performing', active: false },
                        { text: "A pressure I've normalized", active: false },
                      ].map((opt) => (
                        <div
                          key={opt.text}
                          className={`flex items-center gap-2 rounded-lg px-2.5 py-1.5 ${
                            opt.active
                              ? 'bg-peach/12 border border-peach/30'
                              : 'bg-card-bg/60 border border-transparent'
                          }`}
                        >
                          <div
                            className={`w-2 h-2 rounded-full border flex-shrink-0 ${
                              opt.active ? 'bg-peach border-peach' : 'border-charcoal/20'
                            }`}
                          />
                          <span className="font-sans text-[9px] text-charcoal/70 leading-tight">
                            {opt.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Step 2 — Notice */}
                  <div className="bg-dark-section rounded-2xl p-4">
                    <p className="font-sans text-[9px] tracking-[0.16em] uppercase text-peach/70 mb-2">
                      Notice
                    </p>
                    <p className="font-serif text-[11px] italic text-ivory/80 leading-relaxed">
                      You may not be lacking clarity. You may be carrying too many unresolved tabs.
                    </p>
                    <div className="flex items-center gap-1 mt-3">
                      <div className="w-1 h-1 rounded-full bg-peach/60" />
                      <div className="w-1 h-1 rounded-full bg-peach/30" />
                      <div className="w-1 h-1 rounded-full bg-peach/15" />
                    </div>
                  </div>

                  {/* Step 3 — Return */}
                  <div className="bg-card-bg rounded-2xl p-4 border border-charcoal/5">
                    <p className="font-sans text-[9px] tracking-[0.16em] uppercase text-text-secondary mb-2">
                      Return
                    </p>
                    <p className="font-serif text-[11px] text-charcoal/80 leading-relaxed italic">
                      This week's strongest signal: energy spent maintaining appearances.
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <div className="flex-1 h-0.5 bg-charcoal/8 rounded-full overflow-hidden">
                        <div className="h-full bg-peach/50 rounded-full" style={{ width: '68%' }} />
                      </div>
                      <span className="font-sans text-[8px] text-text-secondary">68%</span>
                    </div>
                  </div>

                  {/* Bottom nav */}
                  <div className="flex justify-around items-center pt-2 border-t border-charcoal/8 mt-auto">
                    {['◉', '≋', '○'].map((icon, i) => (
                      <div
                        key={i}
                        className={`flex flex-col items-center gap-0.5 ${
                          i === 0 ? 'text-peach' : 'text-charcoal/20'
                        }`}
                      >
                        <span className="text-sm">{icon}</span>
                        {i === 0 && <div className="w-1 h-1 rounded-full bg-peach" />}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Home bar */}
                <div className="flex justify-center mt-2.5">
                  <div className="w-20 h-1 bg-ivory/12 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Flow description — right side */}
          <div className="flex-1 flex flex-col gap-7 pt-2">
            {[
              {
                step: '01',
                label: 'Pause',
                desc: 'One clear question. Simple, recognisable options. You are not asked to write — just to notice.',
              },
              {
                step: '02',
                label: 'Answer',
                desc: 'Select what feels closest. No judgement. No correct answer. Just a signal.',
              },
              {
                step: '03',
                label: 'Notice',
                desc: 'A short reflection surfaces — not advice, not diagnosis. Just a mirror of what your responses are forming.',
              },
              {
                step: '04',
                label: 'Return',
                desc: 'Come back tomorrow. Over time, patterns emerge. Mirar shows you what you carry, avoid, repeat, and outgrow.',
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-5 items-start">
                <span className="font-sans text-[11px] tracking-[0.18em] text-peach/60 mt-0.5 flex-shrink-0">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-serif text-xl font-light text-ivory mb-1.5">
                    {item.label}
                  </h3>
                  <p className="font-sans text-sm text-ivory/45 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

            <p className="font-sans text-[11px] text-ivory/20 tracking-wide mt-2">
              Concept preview — final experience may evolve.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
