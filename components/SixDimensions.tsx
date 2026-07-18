'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useTranslation } from '@/lib/i18n'

const DIMENSION_META = [
  { code: 'IAP', color: '#7C6FA0', glyph: '↗' },
  { code: 'EWB', color: '#C07840', glyph: '◌' },
  { code: 'FAF', color: '#4A7CA8', glyph: '◎' },
  { code: 'RC', color: '#6A9870', glyph: '∞' },
  { code: 'GAL', color: '#A0884A', glyph: '✦' },
  { code: 'RA', color: '#B85A4A', glyph: '→' },
]

export default function SixDimensions() {
  const { t, tList } = useTranslation()
  const reduceMotion = useReducedMotion()
  const dimensions = tList('six_dimensions.dimensions').map((dimension: any, index: number) => ({
    ...dimension,
    ...DIMENSION_META[index],
  }))

  return (
    <section id="dimensions" className="dimensions-v2">
      <div className="dimensions-v2__inner">
        <div className="dimensions-v2__heading">
          <div>
            <p className="section-kicker">{t('six_dimensions.eyebrow')}</p>
            <h2>
              {t('six_dimensions.title_line1')} <em>{t('six_dimensions.title_em')}</em>
            </h2>
          </div>
          <p>{t('six_dimensions.body')}</p>
        </div>

        <div className="dimension-grid">
          {dimensions.map((dimension: any, index: number) => (
            <motion.article
              key={dimension.code}
              className={`dimension-card dimension-card--${index + 1}`}
              style={{ '--dimension-color': dimension.color } as React.CSSProperties}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: reduceMotion ? 0 : index * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="dimension-card__wash" aria-hidden />
              <div className="dimension-card__top">
                <span className="dimension-card__glyph" aria-hidden>{dimension.glyph}</span>
                <span className="dimension-card__code">{dimension.code}</span>
              </div>
              <div className="dimension-card__copy">
                <p>{dimension.name}</p>
                <h3>{dimension.full}</h3>
                <span>{dimension.desc}</span>
              </div>
              <div className="dimension-card__signal" aria-hidden>
                <i /><i /><i /><i /><i />
              </div>
            </motion.article>
          ))}
        </div>

        <p className="dimensions-v2__note">
          Six lenses. One life. <span>Nothing is scored; everything is yours to interpret.</span>
        </p>
      </div>
    </section>
  )
}
