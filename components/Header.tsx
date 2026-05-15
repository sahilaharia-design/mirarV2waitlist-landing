'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

const NAV_LINKS = [
  { label: 'What changed', href: '#changed', external: false },
  { label: 'Preview',      href: '#preview', external: false },
  { label: 'Notes',        href: 'https://substack.com/@mirarlife', external: true },
]

const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://www.instagram.com/mirar.life' },
  { label: 'LinkedIn',  href: 'https://www.linkedin.com/company/mirarlife/' },
  { label: 'Facebook',  href: 'https://www.facebook.com/people/Mirar/61577255832081/' },
]

export default function Header() {
  const [scrolled,  setScrolled]  = useState(false)
  const [hidden,    setHidden]    = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const lastY = useRef(0)

  /* Smart show/hide: hide when scrolling DOWN past 80px, reappear instantly on scroll UP */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 20)
      if (y < 80) {
        setHidden(false)
      } else {
        setHidden(y > lastY.current)
      }
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  return (
    <>
      {/* ── Fixed floating nav — slides away on scroll down, snaps back on scroll up ── */}
      <header
        className={`sticky top-0 z-50 px-3 sm:px-5 pt-3 pb-2 transition-transform duration-300 ease-out ${
          hidden ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <div
          className={`max-w-container mx-auto rounded-2xl px-4 sm:px-5 h-[54px] flex items-center justify-between gap-3 transition-all duration-300 ${
            scrolled
              ? 'bg-ivory/96 backdrop-blur-lg shadow-lg border border-charcoal/12'
              : 'bg-ivory/90 backdrop-blur-md shadow-sm border border-charcoal/8'
          }`}
        >
          {/* Logo */}
          <a href="#" aria-label="Mirar home" className="hover:opacity-70 transition-opacity flex-shrink-0">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <img src="/assets/brand/mirar-mark.png" alt="" aria-hidden width={20} height={30}
                style={{ height: '28px', width: 'auto', display: 'block' }} />
              <img src="/assets/brand/mirar-wordmark.png" alt="Mirar" width={68} height={24}
                style={{ height: '22px', width: 'auto', display: 'block' }} />
            </span>
          </a>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-6 flex-1 justify-center" aria-label="Main navigation">
            {NAV_LINKS.map(({ label, href, external }) => (
              <a
                key={href}
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="font-sans text-[13px] text-text-secondary hover:text-charcoal transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* CTA — always visible on every screen size */}
          <a
            href="#waitlist"
            onClick={closeMenu}
            className="flex-shrink-0 animate-cta-pulse inline-flex items-center gap-1.5 px-4 sm:px-6 py-2.5 rounded-full font-sans font-semibold text-[12px] sm:text-[13px] transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap"
            style={{
              background: 'linear-gradient(135deg, #D99A73 0%, #C4806A 100%)',
              color: '#1C1A17',
              boxShadow: '0 2px 12px rgba(217,154,115,0.45), 0 1px 3px rgba(0,0,0,0.12)',
            }}
          >
            <span className="hidden sm:inline">Get early access</span>
            <span className="sm:hidden">Join now</span>
            <span aria-hidden className="text-charcoal/70">→</span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-xl hover:bg-charcoal/5 transition-colors flex-shrink-0"
          >
            <span className={`block w-[18px] h-[1.5px] bg-charcoal rounded-full transition-all duration-200 origin-center ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
            <span className={`block w-[18px] h-[1.5px] bg-charcoal rounded-full transition-all duration-200 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-[18px] h-[1.5px] bg-charcoal rounded-full transition-all duration-200 origin-center ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
          </button>
        </div>
      </header>

      {/* ── Mobile full-screen menu ── */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        aria-hidden={!menuOpen}
        className={`md:hidden fixed inset-0 z-40 bg-ivory transition-all duration-250 flex flex-col ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="h-[68px] flex-shrink-0" />

        <div className="flex-1 overflow-y-auto overscroll-contain px-6 pt-4 pb-10 flex flex-col">
          <nav className="flex flex-col" aria-label="Mobile navigation">
            {NAV_LINKS.map(({ label, href, external }) => (
              <a
                key={href}
                href={href}
                onClick={closeMenu}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="font-serif text-[28px] font-light text-charcoal py-4 border-b border-charcoal/8 hover:text-peach transition-colors duration-200 flex items-center justify-between"
              >
                {label}
                {external && <span className="text-sm text-charcoal/25 font-sans">↗</span>}
              </a>
            ))}
          </nav>

          <div className="mt-8 flex flex-col">
            <p className="font-sans text-[10px] tracking-[0.18em] uppercase text-text-secondary/50 mb-3">
              Follow the rebuild
            </p>
            {SOCIAL_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={closeMenu}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-text-secondary py-3 border-b border-charcoal/5 hover:text-charcoal transition-colors duration-200 flex items-center justify-between"
              >
                {label}
                <span className="text-[11px] text-charcoal/25">↗</span>
              </a>
            ))}
          </div>

          <div className="flex-1 min-h-8" />

          <a
            href="#waitlist"
            onClick={closeMenu}
            className="block w-full text-center py-4 px-7 rounded-full font-sans font-semibold text-base mt-8 mb-6 transition-all duration-200 hover:scale-[1.02] active:scale-95"
            style={{
              background: 'linear-gradient(135deg, #D99A73 0%, #C4806A 100%)',
              color: '#1C1A17',
              boxShadow: '0 4px 20px rgba(217,154,115,0.4)',
            }}
          >
            Get early access →
          </a>
        </div>
      </div>
    </>
  )
}
