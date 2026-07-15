'use client'

import { useTranslation } from '@/lib/i18n'

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

const RITUAL_ICONS = [
  { icon: <IcnTooth />,    dark: false },
  { icon: <IcnBolt />,     dark: false },
  { icon: <IcnLeaf />,     dark: false },
  { icon: <IcnCalendar />, dark: false },
  { icon: <IcnOval />,     dark: true  },
]

const APP_URL = 'https://mirar-app.vercel.app/assess'

export default function WhyNow() {
  const { t, tList } = useTranslation()
  const rituals = tList('why_now.rituals').map((r: any, i: number) => ({ ...r, ...RITUAL_ICONS[i] }))
  return (
    <section id="why" className="py-12 sm:py-16 lg:py-20 bg-ivory">
      <div className="max-w-container mx-auto px-6">

        <div className="max-w-2xl mb-5 sr sr-header">
          <h2 className="font-serif text-4xl sm:text-5xl font-medium leading-[1.1] text-charcoal mb-6">
            {t('why_now.title_line1')}{' '}
            <em className="text-peach not-italic">{t('why_now.title_em')}</em>
          </h2>
          <div className="space-y-4">
            <p className="font-sans text-base sm:text-lg text-text-secondary leading-relaxed">
              {t('why_now.body1')}
            </p>
            <p className="font-sans text-base sm:text-lg text-text-secondary leading-relaxed">
              {t('why_now.body2')}
            </p>
            <p className="font-sans text-base sm:text-lg text-charcoal/80 leading-relaxed font-medium">
              {t('why_now.body3')}
            </p>
          </div>
        </div>

        <div className="w-12 h-px bg-peach/40 mb-10" />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {rituals.map((r, i) => (
            <div
              key={i}
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
                <p className={`font-sans text-[11px] tracking-[0.12em] uppercase mt-0.5 ${r.dark ? 'text-peach/80' : 'text-text-secondary'}`}>
                  {r.sub}
                </p>
              </div>
              <p className={`font-sans text-sm leading-relaxed ${r.dark ? 'text-ivory/75' : 'text-text-secondary'}`}>
                {r.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sr">
          <p className="font-serif text-xl sm:text-2xl font-light italic text-charcoal/65 leading-relaxed border-l-2 border-peach/50 pl-5 max-w-md">
            &ldquo;{t('why_now.quote')}&rdquo;
          </p>
          <a
            href={APP_URL}
            className="flex-shrink-0 animate-cta-pulse inline-flex items-center gap-2 px-6 py-3 rounded-full font-sans font-semibold text-sm transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              background: 'linear-gradient(135deg, #D99A73 0%, #C4806A 100%)',
              color: '#1C1A17',
              boxShadow: '0 2px 14px rgba(217,154,115,0.4)',
            }}
          >
            {t('why_now.cta')} →
          </a>
        </div>

      </div>
    </section>
  )
}
