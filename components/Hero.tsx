'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useTranslation } from '@/lib/i18n'
import InteractiveMirror from './InteractiveMirror'

const APP_URL = 'https://mirar-app.vercel.app/assess'
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

export default function Hero() {
  const { t } = useTranslation()
  const reduceMotion = useReducedMotion()
  const entrance = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.75, ease: EASE, delay },
  })

  return (
    <section className="hero-v2" aria-labelledby="hero-title">
      <div className="hero-v2__grain" aria-hidden />
      <div className="hero-v2__wash hero-v2__wash--peach" aria-hidden />
      <div className="hero-v2__wash hero-v2__wash--blue" aria-hidden />
      <div className="hero-v2__signals" aria-hidden>
        <i /><i /><i /><i /><i />
      </div>

      <div className="hero-v2__inner">
        <div className="hero-v2__copy">
          <motion.p {...entrance(0)} className="hero-v2__eyebrow">
            <span aria-hidden /> {t('hero.eyebrow')}
          </motion.p>

          <motion.h1 {...entrance(0.1)} id="hero-title" className="hero-v2__title">
            {t('hero.title_line1')}{' '}
            <span>{t('hero.title_line2')}</span>{' '}
            <em>{t('hero.title_except')}</em>
          </motion.h1>

          <motion.p {...entrance(0.2)} className="hero-v2__body">
            {t('hero.body')}
          </motion.p>

          <motion.div {...entrance(0.3)} className="hero-v2__actions">
            <a href={APP_URL} className="primary-cta">
              <span>{t('hero.cta')}</span>
              <span className="primary-cta__arrow" aria-hidden>↗</span>
            </a>
            <p>{t('hero.cta_note')}</p>
          </motion.div>

          <motion.div {...entrance(0.4)} className="hero-v2__trust" aria-label="Mirar principles">
            <span>No writing required</span>
            <span>No score</span>
            <span>Not therapy</span>
          </motion.div>
        </div>

        <div className="hero-v2__experience">
          <InteractiveMirror />
          <p className="hero-v2__try-note"><span aria-hidden>↑</span> {t('hero.try_note')}</p>
        </div>
      </div>

      <div className="hero-v2__continuum" aria-hidden>
        <span>pause</span><i />
        <span>notice</span><i />
        <span>return</span><i />
        <span>recognise</span>
      </div>
    </section>
  )
}
