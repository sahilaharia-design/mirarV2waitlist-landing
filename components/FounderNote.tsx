'use client'

import { useTranslation } from '@/lib/i18n'

const APP_URL = 'https://mirar-app.vercel.app/assess'

export default function FounderNote() {
  const { t } = useTranslation()
  return (
    <section className="py-14 sm:py-18 lg:py-22 bg-ivory">
      <div className="max-w-container mx-auto px-6">
        <div className="max-w-3xl mx-auto lg:mx-0">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-text-secondary mb-6 sr">
            {t('founder_note.eyebrow')}
          </p>

          <div className="flex flex-col sm:flex-row gap-8 sm:gap-10 lg:gap-12">
            {/* Portrait */}
            <div className="flex-shrink-0 sr" style={{ transitionDelay: '40ms' }}>
              <div
                className="relative overflow-hidden"
                style={{
                  width: 148,
                  height: 222,
                  borderRadius: 18,
                  boxShadow: '0 12px 32px rgba(28,26,23,0.16), 0 2px 8px rgba(28,26,23,0.08)',
                }}
              >
                <img
                  src="/assets/founder/sahil-founder.jpg"
                  alt="Dr. Sahil Haria, founder of Mirar"
                  width={296}
                  height={444}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ boxShadow: 'inset 0 0 0 1px rgba(28,26,23,0.08)', borderRadius: 18 }}
                />
              </div>
            </div>

            <div className="border-l-2 border-peach/40 pl-8 sr flex-1 min-w-0" style={{ transitionDelay: '80ms' }}>
            <h2 className="font-serif text-2xl font-light italic text-charcoal mb-6">
              {t('founder_note.title')}
            </h2>

            <div className="font-sans text-base sm:text-lg text-text-secondary leading-loose space-y-4">
              <p>{t('founder_note.p1')}</p>
              <p>{t('founder_note.p2')}</p>
              <p>{t('founder_note.p3')}</p>
              <p>
                {t('founder_note.p4_line1')}
                <br />
                {t('founder_note.p4_line2')}
                <br />
                {t('founder_note.p4_line3')}
              </p>
              <p>{t('founder_note.p5')}</p>
            </div>

            <div className="mt-8">
              <p className="font-serif text-base text-charcoal font-medium">
                {t('founder_note.name')}
              </p>
              <p className="font-sans text-xs text-text-secondary tracking-wide mt-0.5">
                {t('founder_note.role')}
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-charcoal/10">
              <p className="font-sans text-sm text-text-secondary leading-relaxed mb-5">
                {t('founder_note.closing')}
              </p>
              <a
                href={APP_URL}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-sans font-medium text-sm transition-all duration-200 hover:scale-105 active:scale-95"
                style={{
                  background: 'linear-gradient(135deg, #D99A73 0%, #C4806A 100%)',
                  color: '#1C1A17',
                  boxShadow: '0 2px 14px rgba(217,154,115,0.4)',
                }}
              >
                {t('founder_note.cta')} →
              </a>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
