const wordChips = [
  { word: 'carrying',   top: '18%', left: '10%', delay: 'delay-0'   },
  { word: 'avoiding',   top: '30%', left: '56%', delay: 'delay-300' },
  { word: 'repeating',  top: '54%', left: '6%',  delay: 'delay-600' },
  { word: 'outgrowing', top: '68%', left: '50%', delay: 'delay-200' },
  { word: 'noticing',   top: '42%', left: '28%', delay: 'delay-500' },
]

const floatingDots = [
  { top: '22%', left: '24%', delay: 'delay-0',   size: 'w-2 h-2'     },
  { top: '38%', left: '74%', delay: 'delay-200', size: 'w-2.5 h-2.5' },
  { top: '62%', left: '16%', delay: 'delay-400', size: 'w-1.5 h-1.5' },
  { top: '76%', left: '64%', delay: 'delay-150', size: 'w-2 h-2'     },
  { top: '14%', left: '62%', delay: 'delay-700', size: 'w-1.5 h-1.5' },
  { top: '82%', left: '34%', delay: 'delay-300', size: 'w-2.5 h-2.5' },
  { top: '50%', left: '82%', delay: 'delay-600', size: 'w-1.5 h-1.5' },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-ivory via-ivory to-card-bg/60">
      <div className="relative max-w-container mx-auto px-5 sm:px-6 pt-12 pb-14 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-14 lg:gap-16">

          {/* ── Copy ── */}
          <div className="flex-1 max-w-xl text-center lg:text-left w-full">

            <div className="will-spring-up animate-spring-up delay-0">
              <p className="text-[10px] sm:text-xs font-sans tracking-[0.22em] uppercase text-text-secondary mb-5">
                The next version is being built
              </p>
            </div>

            <h1 className="will-spring-up animate-spring-up delay-150 font-serif text-[40px] sm:text-5xl lg:text-[58px] font-light leading-[1.08] text-charcoal mb-6">
              You track everything.{' '}
              <em style={{ fontStyle: 'italic' }}>
                Except what&apos;s happening inside.
              </em>
            </h1>

            <p className="will-spring-up animate-spring-up delay-300 font-sans text-[15px] sm:text-base text-text-secondary leading-relaxed mb-3 max-w-md mx-auto lg:mx-0">
              Fitness. Finances. Sleep. Calendar. You have a system for every important thing in your life — but the patterns shaping your choices, your energy, and your choices go completely unnoticed.
            </p>

            <p className="will-spring-up animate-spring-up delay-400 font-sans text-[15px] sm:text-base text-text-secondary leading-relaxed mb-9 max-w-md mx-auto lg:mx-0">
              Mirar is being rebuilt to change that. One small daily signal. No journaling. No advice. Just a quiet, consistent mirror for what&apos;s actually happening inside you.
            </p>

            <div className="will-spring-up animate-spring-up delay-500 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center px-7 py-4 rounded-full bg-peach text-charcoal font-sans font-medium text-sm hover:brightness-105 transition-all duration-200 shadow-sm"
              >
                Get early access →
              </a>
              <a
                href="#changed"
                className="inline-flex items-center justify-center px-7 py-4 rounded-full border border-charcoal/15 text-text-secondary font-sans text-sm hover:border-charcoal/30 hover:text-charcoal transition-all duration-200"
              >
                See what changed
              </a>
            </div>
          </div>

          {/* ── Mirror oval ── */}
          <div className="flex-shrink-0 flex items-center justify-center w-full lg:w-auto">
            <div className="relative flex items-center justify-center">

              {/* Outer glow */}
              <div
                className="absolute mirror-glow animate-glow-pulse rounded-full pointer-events-none"
                style={{ width: 'clamp(260px, 58vw, 350px)', height: 'clamp(330px, 76vw, 440px)' }}
              />

              {/* Oval */}
              <div
                className="relative border border-peach/20 bg-card-bg/40 backdrop-blur-sm overflow-hidden"
                style={{
                  width:  'clamp(240px, 50vw, 300px)',
                  height: 'clamp(315px, 66vw, 395px)',
                  borderRadius: '50%',
                }}
              >
                {/* Subtle grid lines */}
                <div
                  className="absolute inset-0 opacity-[0.035]"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(28,26,23,1) 1px, transparent 1px), linear-gradient(90deg, rgba(28,26,23,1) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                  }}
                />

                {/* Floating dots */}
                {floatingDots.map((dot, i) => (
                  <div
                    key={i}
                    className={`absolute rounded-full bg-peach/50 animate-float-dot ${dot.size} ${dot.delay}`}
                    style={{ top: dot.top, left: dot.left }}
                  />
                ))}

                {/* Word chips */}
                {wordChips.map(chip => (
                  <span
                    key={chip.word}
                    className={`absolute font-sans text-[9px] tracking-[0.16em] uppercase text-charcoal/45 border border-charcoal/10 bg-ivory/60 px-2 py-0.5 rounded-full animate-float-bounce ${chip.delay}`}
                    style={{ top: chip.top, left: chip.left }}
                  >
                    {chip.word}
                  </span>
                ))}

                {/* Inner signal card */}
                <div
                  className="absolute bg-ivory/90 border border-charcoal/8 rounded-xl px-3.5 py-2.5 shadow-sm"
                  style={{ bottom: '16%', left: '50%', transform: 'translateX(-50%)', width: '80%' }}
                >
                  <p className="font-sans text-[8px] tracking-[0.16em] uppercase text-peach mb-1.5">
                    Today&apos;s signal
                  </p>
                  <p className="font-serif text-[12px] leading-snug text-charcoal/80 italic mb-2">
                    What is quietly taking space inside you right now?
                  </p>
                  <div className="flex flex-col gap-1.5">
                    {[
                      "A decision I haven't made",
                      "Something I'm avoiding",
                      "A pressure I've normalized",
                    ].map((opt, i) => (
                      <div key={opt} className="flex items-center gap-2">
                        <div
                          className={`w-2 h-2 rounded-full border flex-shrink-0 ${
                            i === 1 ? 'border-peach bg-peach' : 'border-charcoal/20 bg-transparent'
                          }`}
                        />
                        <span className="font-sans text-[9px] text-charcoal/60 leading-none">
                          {opt}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
