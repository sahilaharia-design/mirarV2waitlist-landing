export default function FounderNote() {
  return (
    <section className="py-14 sm:py-18 lg:py-22 bg-ivory">
      <div className="max-w-container mx-auto px-6">
        <div className="max-w-xl mx-auto lg:mx-0">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-text-secondary mb-6">
            From the founder
          </p>

          <div className="border-l-2 border-peach/40 pl-8">
            <h2 className="font-serif text-2xl font-light italic text-charcoal mb-6">
              A note from the founder.
            </h2>

            <div className="font-sans text-base text-text-secondary leading-loose space-y-4">
              <p>
                Mirar began as a simple question I could not ignore: what if we
                checked in with our inner world as regularly as we check
                everything else?
              </p>
              <p>
                The first beta gave us a real signal. People do want this. But
                the experience has to become simpler, lighter, and easier to
                return to.
              </p>
              <p>
                So instead of stretching the old beta, we are rebuilding Mirar
                around the real habit: a small daily act of emotional and mental
                hygiene.
              </p>
              <p>
                Not to optimise who you are.
                <br />
                Not to fix your life.
                <br />
                To notice what is already happening inside you, more
                consistently.
              </p>
              <p>
                If any of this sounds like something you have been looking for,
                I would like you to be part of the next version.
              </p>
            </div>

            <div className="mt-8">
              <p className="font-serif text-base text-charcoal font-medium">
                Dr. Sahil Haria, PhD
              </p>
              <p className="font-sans text-xs text-text-secondary tracking-wide mt-0.5">
                Founder, Mirar
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-charcoal/10">
              <p className="font-sans text-sm text-text-secondary leading-relaxed mb-5">
                If this landed for you, I&apos;d like you in the first group.
              </p>
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-peach text-charcoal font-sans font-medium text-sm hover:brightness-105 transition-all duration-200"
              >
                Join the waitlist →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
