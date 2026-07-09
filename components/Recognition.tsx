'use client'

const CARDS = [
  "I feel tired — but I don't know why.",
  "I'm moving forward, but not with clarity.",
  "I keep putting off one conversation.",
  "I react differently than I want to.",
  "I've outgrown something but haven't named it yet.",
  "I don't feel behind — but I don't feel aligned either.",
]

export default function Recognition() {
  return (
    <section className="py-20 sm:py-28 bg-ivory">
      <div className="max-w-container mx-auto px-4 sm:px-6">

        <div className="max-w-2xl mb-14 sr">
          <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-text-secondary/50 mb-4">
            Recognition
          </p>
          <h2 className="font-serif text-[32px] sm:text-[40px] font-light text-charcoal leading-[1.15]">
            Some days, nothing is wrong.{' '}
            <em>But something feels slightly off.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-12">
          {CARDS.map((text, i) => (
            <div
              key={i}
              className="sr group cursor-default"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div
                className="relative p-5 sm:p-6 rounded-2xl border transition-all duration-300 ease-out group-hover:scale-[1.015] group-hover:shadow-md"
                style={{
                  background: '#F7F4EF',
                  borderColor: 'rgba(28,26,23,0.07)',
                }}
              >
                <div
                  className="absolute top-0 left-0 w-full h-full rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(135deg, rgba(217,154,115,0.06) 0%, rgba(185,139,255,0.04) 100%)' }}
                />
                <p className="relative font-sans text-[15px] text-charcoal/70 leading-relaxed">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="sr font-sans text-[15px] text-text-secondary max-w-sm" style={{ transitionDelay: '400ms' }}>
          That's what Mirar is for.
        </p>

      </div>
    </section>
  )
}
