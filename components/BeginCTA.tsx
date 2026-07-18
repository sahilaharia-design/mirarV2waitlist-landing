'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useTranslation } from '@/lib/i18n'

const APP_URL = 'https://mirar-app.vercel.app/assess'

export default function BeginCTA() {
  const { t } = useTranslation()
  const reduceMotion = useReducedMotion()

  return (
    <section className="begin-v2">
      <div className="begin-v2__rings" aria-hidden>
        <i /><i /><i />
      </div>
      <motion.div
        className="begin-v2__inner"
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="section-kicker section-kicker--light">{t('begin_cta.eyebrow')}</p>
        <h2>
          {t('begin_cta.title_line1')}<br />
          {t('begin_cta.title_line2')} <em>{t('begin_cta.title_em')}</em>
        </h2>
        <p>{t('begin_cta.body')}</p>
        <a href={APP_URL} className="primary-cta primary-cta--light">
          <span>{t('begin_cta.cta')}</span>
          <span className="primary-cta__arrow" aria-hidden>↗</span>
        </a>
        <div className="begin-v2__assurances">
          <span>Two minutes</span>
          <span>No account to begin</span>
          <span>Your answers stay yours</span>
        </div>
      </motion.div>
    </section>
  )
}
