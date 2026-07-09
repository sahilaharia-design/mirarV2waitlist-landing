'use client'

import { useTranslation } from '@/lib/i18n'

const DIMENSION_META = [
  { code: 'IAP', color: '#7C6FA0', bg: 'rgba(124,111,160,0.08)', signal: 0.7 },
  { code: 'EWB', color: '#C07840', bg: 'rgba(192,120,64,0.08)', signal: 0.45 },
  { code: 'FAF', color: '#4A7CA8', bg: 'rgba(74,124,168,0.08)', signal: 0.85 },
  { code: 'RC',  color: '#6A9870', bg: 'rgba(106,152,112,0.08)', signal: 0.6 },
  { code: 'GAL', color: '#A0884A', bg: 'rgba(160,136,74,0.08)', signal: 0.55 },
  { code: 'RA',  color: '#B85A4A', bg: 'rgba(184,90,74,0.08)', signal: 0.35 },
]

export default function SixDimensions() {
  const { t, tList } = useTranslation()
  const DIMENSIONS = tList('six_dimensions.dimensions').map((d: any, i: number) => ({ ...d, ...DIMENSION_META[i] }))
  return (
    <section id="dimensions" className="py-20 sm:py-28 bg-ivory">
      <div className="max-w-container mx-auto px-4 sm:px-6">

        <div className="max-w-2xl mb-14 sr">
          <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-text-secondary/50 mb-4">
            {t('six_dimensions.eyebrow')}
          </p>
          <h2 className="font-serif text-[32px] sm:text-[40px] font-light text-charcoal leading-[1.15]">
            {t('six_dimensions.title_line1')}{' '}
            <em>{t('six_dimensions.title_em')}</em>
          </h2>
          <p className="mt-4 font-sans text-[16px] text-text-secondary leading-relaxed">
            {t('six_dimensions.body')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {DIMENSIONS.map((dim, i) => (
            <div
              key={dim.code}
              className="sr group relative p-5 sm:p-6 rounded-2xl border-2 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-default"
              style={{
                background: dim.bg,
                borderColor: `${dim.color}30`,
                transitionDelay: `${i * 60}ms`,
              }}
            >
              {/* Large ghost code mark — background texture */}
              <span
                className="absolute -right-2 -top-3 font-serif text-[64px] font-light pointer-events-none select-none"
                style={{ color: dim.color, opacity: 0.08 }}
              >
                {dim.code}
              </span>

              <div className="relative flex items-start justify-between mb-3">
                <div
                  className="w-3.5 h-3.5 rounded-full mt-1 ring-4"
                  style={{ background: dim.color, boxShadow: `0 0 0 4px ${dim.color}22` }}
                />
                <span
                  className="font-sans text-[10px] tracking-[0.15em] uppercase font-semibold"
                  style={{ color: dim.color }}
                >
                  {dim.code}
                </span>
              </div>
              <p className="relative font-serif text-[19px] font-medium text-charcoal mb-1">{dim.name}</p>
              <p className="relative font-sans text-[12px] text-text-secondary/70 mb-3">{dim.full}</p>
              <p className="relative font-sans text-[13px] text-text-secondary leading-relaxed mb-4">{dim.desc}</p>

              {/* Signal strength bar — makes the "measurement" concept tangible */}
              <div className="relative flex items-center gap-2">
                <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: `${dim.color}18` }}>
                  <div
                    className="h-full rounded-full transition-all duration-700 group-hover:opacity-90"
                    style={{ width: `${dim.signal * 100}%`, background: dim.color }}
                  />
                </div>
                <span className="font-sans text-[9px] tracking-[0.1em] uppercase" style={{ color: `${dim.color}aa` }}>
                  {t('six_dimensions.signal_label')}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
