'use client'

import { useTranslation } from '@/lib/i18n'

const APP_URL = 'https://mirar-app.vercel.app/assess'

export default function BeginCTA() {
  const { t } = useTranslation()
  return (
    <section className="py-20 sm:py-28 bg-dark-section text-ivory">
      <div className="max-w-container mx-auto px-4 sm:px-6">
        <div className="max-w-lg mx-auto text-center sr">

          <p className="font-sans text-xs tracking-[0.2em] uppercase text-peach/80 mb-6">
            {t('begin_cta.eyebrow')}
          </p>

          <h2 className="font-serif text-[32px] sm:text-[40px] font-medium text-ivory leading-[1.15] mb-6">
            {t('begin_cta.title_line1')}<br />
            {t('begin_cta.title_line2')}<br />
            <em className="text-peach not-italic">{t('begin_cta.title_em')}</em>
          </h2>

          <p className="font-sans text-base sm:text-lg text-ivory/70 leading-relaxed mb-10">
            {t('begin_cta.body')}
          </p>

          <a
            href={APP_URL}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-sans font-semibold text-[15px] transition-all duration-200 hover:scale-105 active:scale-95 animate-cta-pulse"
            style={{
              background: 'linear-gradient(135deg, #D99A73 0%, #C4806A 100%)',
              color: '#1C1A17',
              boxShadow: '0 4px 24px rgba(217,154,115,0.4)',
            }}
          >
            {t('begin_cta.cta')}
            <span aria-hidden>→</span>
          </a>

          <p className="mt-5 font-sans text-[13px] text-ivory/60 tracking-wide">
            {t('begin_cta.note')}
          </p>

        </div>
      </div>
    </section>
  )
}
