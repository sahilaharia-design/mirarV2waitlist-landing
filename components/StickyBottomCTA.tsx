'use client'
import { useEffect, useState } from 'react'

export default function StickyBottomCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.7)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      aria-hidden={!visible}
      className={`fixed bottom-0 left-0 right-0 z-30 transition-all duration-500 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-dark-section/96 backdrop-blur-xl border-t border-ivory/10 py-3 px-4 sm:px-6">
        <div className="max-w-container mx-auto flex items-center justify-between gap-4">
          <div className="hidden sm:block min-w-0">
            <p className="font-serif text-[15px] text-ivory/75 italic truncate">
              The next Mirar opens to a small founding group first.
            </p>
          </div>
          <div className="flex items-center gap-3 ml-auto flex-shrink-0">
            <span className="font-sans text-[11px] text-ivory/30 tracking-wide hidden md:block">
              Limited spots
            </span>
            <a
              href="#waitlist"
              className="animate-cta-pulse inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full font-sans font-semibold text-[13px] transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap"
              style={{
                background: 'linear-gradient(135deg, #D99A73 0%, #C4806A 100%)',
                color: '#1C1A17',
                boxShadow: '0 2px 14px rgba(217,154,115,0.55)',
              }}
            >
              Get early access →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
