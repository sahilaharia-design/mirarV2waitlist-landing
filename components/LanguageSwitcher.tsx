'use client'

import { useState, useRef, useEffect } from 'react'
import { useTranslation, SUPPORTED_LANGUAGES } from '@/lib/i18n'

export default function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { language, setLanguage, t } = useTranslation()

  // Mobile menu context: no dropdown at all. A dropdown positioned with
  // `absolute` inside the mobile menu's `fixed` + `overflow-y-auto` scroll
  // container hits a real iOS Safari containing-block bug — the dropdown
  // renders pinned to the viewport corner instead of near the button.
  // A plain inline row of options sidesteps the whole bug class.
  if (!compact) {
    return (
      <div role="group" aria-label={t('language_switcher.label')} className="flex items-center gap-2">
        {SUPPORTED_LANGUAGES.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            aria-pressed={lang.code === language}
            className={`flex items-center justify-center rounded-full border px-4 h-9 font-sans font-medium text-[13px] transition-colors duration-200 ${
              lang.code === language
                ? 'border-charcoal/40 bg-charcoal/5 text-charcoal'
                : 'border-charcoal/12 text-charcoal/70 hover:border-charcoal/25 hover:text-charcoal'
            }`}
          >
            {lang.label}
          </button>
        ))}
      </div>
    )
  }

  return <CompactSwitcher />
}

// Desktop header pill — lives in normal document flow (no fixed/overflow
// ancestor), so a small absolute dropdown is safe here.
function CompactSwitcher() {
  const { language, setLanguage, t } = useTranslation()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  const current = SUPPORTED_LANGUAGES.find((l) => l.code === language) ?? SUPPORTED_LANGUAGES[0]

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={t('language_switcher.label')}
        aria-expanded={open}
        className="flex items-center justify-center rounded-full border border-charcoal/12 hover:border-charcoal/25 transition-colors duration-200 font-sans font-medium text-charcoal/70 hover:text-charcoal w-8 h-8 text-[11px]"
      >
        {current.label}
      </button>
      {open && (
        <div
          className="absolute right-0 mt-2 py-1 rounded-xl border border-charcoal/10 bg-ivory shadow-lg min-w-[88px] z-50"
          role="menu"
        >
          {SUPPORTED_LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code)
                setOpen(false)
              }}
              role="menuitem"
              className={`block w-full text-left px-3 py-1.5 font-sans text-[13px] transition-colors duration-150 ${
                lang.code === language
                  ? 'text-charcoal font-medium'
                  : 'text-text-secondary hover:text-charcoal'
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
