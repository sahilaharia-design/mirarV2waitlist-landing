'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import { useTranslation } from '@/lib/i18n'

const APP_URL = 'https://mirar-app.vercel.app/assess'

export default function FounderNote() {
  const { t } = useTranslation()
  const reduceMotion = useReducedMotion()

  return (
    <section className="founder-v2">
      <div className="founder-v2__inner">
        <motion.div
          className="founder-v2__portrait"
          initial={reduceMotion ? false : { opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/assets/founder/sahil-founder.jpg"
            alt="Dr. Sahil Haria, founder of Mirar"
            width={296}
            height={444}
            sizes="(max-width: 720px) 260px, 320px"
          />
          <div className="founder-v2__portrait-glow" aria-hidden />
          <span className="founder-v2__portrait-caption">{t('founder_note.portrait_caption_line1')}<br />{t('founder_note.portrait_caption_line2')}</span>
        </motion.div>

        <motion.div
          className="founder-v2__note"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.75, delay: reduceMotion ? 0 : 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-kicker">{t('founder_note.eyebrow')}</p>
          <h2>{t('founder_note.title')}</h2>
          <blockquote>“{t('founder_note.p1')}”</blockquote>
          <p>{t('founder_note.p3')}</p>

          <div className="founder-v2__promise">
            <span>{t('founder_note.p4_line1')}</span>
            <span>{t('founder_note.p4_line2')}</span>
            <strong>{t('founder_note.p4_line3')}</strong>
          </div>

          <div className="founder-v2__signature">
            <div>
              <strong>{t('founder_note.name')}</strong>
              <span>{t('founder_note.role')}</span>
            </div>
            <a href={APP_URL}>{t('founder_note.cta')} <span aria-hidden>→</span></a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
