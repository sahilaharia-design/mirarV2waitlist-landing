const SOCIAL_LINKS = [
  { label: 'Substack',  href: 'https://substack.com/@mirarlife' },
  { label: 'Instagram', href: 'https://www.instagram.com/mirar.life' },
  { label: 'LinkedIn',  href: 'https://www.linkedin.com/company/mirarlife/' },
  { label: 'Facebook',  href: 'https://www.facebook.com/people/Mirar/61577255832081/' },
]

export default function Footer() {
  return (
    <footer className="bg-ivory border-t border-charcoal/10">
      <div className="max-w-container mx-auto px-6 py-12 sm:py-14">

        {/* Top row */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8 mb-10">

          {/* Brand */}
          <div className="max-w-xs">
            {/* Full lockup: oval + Mirar + LOOK WITHIN. REALIGN. — 2508×1094 after trim */}
            <a href="#" aria-label="Mirar home" className="inline-block mb-4 hover:opacity-70 transition-opacity">
              <img
                src="/assets/brand/mirar-logo-full.png"
                alt="Mirar — Look within. Realign."
                width={92}
                height={40}
                style={{ height: '44px', width: 'auto', display: 'block' }}
              />
            </a>
            <p className="font-sans text-sm text-text-secondary leading-relaxed">
              Emotional and mental hygiene for everyday life.
            </p>
            <p className="font-sans text-sm text-text-secondary/55 leading-relaxed mt-1">
              Built for noticing. Not optimizing.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2.5">
            <p className="font-sans text-[10px] tracking-[0.18em] uppercase text-text-secondary/50 mb-1">
              Follow the rebuild
            </p>
            {SOCIAL_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-text-secondary hover:text-charcoal transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-charcoal/8 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-sans text-xs text-text-secondary/55">
            © {new Date().getFullYear()} Mirar
          </span>
          <a
            href="mailto:info@mirar.life"
            className="font-sans text-xs text-text-secondary/65 hover:text-charcoal transition-colors duration-200"
          >
            info@mirar.life
          </a>
        </div>
      </div>
    </footer>
  )
}
