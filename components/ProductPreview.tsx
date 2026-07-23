'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { useTranslation } from '@/lib/i18n'

const SIGNALS = [
  { day: '01', word: 'carrying', x: 18, y: 62, color: '#B85A4A' },
  { day: '03', word: 'avoiding', x: 39, y: 42, color: '#6A8BB5' },
  { day: '05', word: 'repeating', x: 61, y: 67, color: '#B99748' },
  { day: '07', word: 'noticing', x: 82, y: 35, color: '#5A8A6A' },
]

export default function ProductPreview() {
  const { t, tList } = useTranslation()
  const flow = tList('product_preview.flow') as Array<{ label: string; desc: string }>
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-120px' })
  const reduceMotion = useReducedMotion()

  return (
    <section id="practice" ref={sectionRef} className="pattern-section">
      <div className="pattern-section__glow" aria-hidden />
      <div className="pattern-section__inner">
        <div className="pattern-section__intro">
          <p className="section-kicker section-kicker--light">{t('product_preview.eyebrow')}</p>
          <h2>{t('product_preview.title')}</h2>
          <p>{t('product_preview.body')}</p>
        </div>

        <div className="pattern-story">
          <div className="pattern-story__header">
            <span>{t('product_preview.one_moment')}</span>
            <span>{t('product_preview.pattern_forming')}</span>
          </div>

          <div className="pattern-story__canvas" aria-label="A visual example of daily signals becoming a pattern">
            <svg className="pattern-story__curve" viewBox="0 0 1000 330" preserveAspectRatio="none" aria-hidden>
              <defs>
                <linearGradient id="pattern-gradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="#B85A4A" />
                  <stop offset="0.4" stopColor="#6A8BB5" />
                  <stop offset="0.7" stopColor="#B99748" />
                  <stop offset="1" stopColor="#5A8A6A" />
                </linearGradient>
                <linearGradient id="pattern-area" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#8BA5D4" stopOpacity="0.17" />
                  <stop offset="1" stopColor="#8BA5D4" stopOpacity="0" />
                </linearGradient>
              </defs>
              <motion.path
                d="M 80 220 C 180 220 270 116 390 140 S 510 238 610 226 S 735 76 880 112 L 880 310 L 80 310 Z"
                className="pattern-story__area"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: reduceMotion ? 0 : 1.1, duration: 0.8 }}
              />
              <motion.path
                d="M 80 220 C 180 220 270 116 390 140 S 510 238 610 226 S 735 76 880 112"
                className="pattern-story__path"
                pathLength="1"
                initial={{ pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: reduceMotion ? 0 : 1.8, ease: [0.22, 1, 0.36, 1] }}
              />
            </svg>
            <div className="pattern-story__scan" aria-hidden />

            {SIGNALS.map((signal, index) => (
              <motion.div
                key={signal.day}
                className="pattern-signal"
                style={{ left: `${signal.x}%`, top: `${signal.y}%`, '--signal-color': signal.color } as React.CSSProperties}
                initial={reduceMotion ? false : { opacity: 0, y: 16, scale: 0.85 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 16, scale: 0.85 }}
                transition={{ delay: reduceMotion ? 0 : 0.25 + index * 0.18, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="pattern-signal__halo" aria-hidden />
                <span className="pattern-signal__dot" aria-hidden />
                <span className="pattern-signal__day">{t('product_preview.day_label')} {signal.day}</span>
                <span className="pattern-signal__word">{t(`hero.signal_chips.${signal.word}`)}</span>
              </motion.div>
            ))}

            <motion.div
              className="pattern-story__reading"
              initial={reduceMotion ? false : { opacity: 0, x: 18 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 18 }}
              transition={{ delay: reduceMotion ? 0 : 1.05, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <span>{t('product_preview.reading_label')}</span>
              <strong>{t('product_preview.reading_text')}</strong>
              <small>{t('product_preview.reading_note')}</small>
            </motion.div>
          </div>
        </div>

        <div className="practice-steps">
          {flow.map((item, index) => (
            <motion.article
              key={item.label}
              className="practice-step"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ delay: reduceMotion ? 0 : 0.2 + index * 0.1, duration: 0.55 }}
            >
              <span>0{index + 1}</span>
              <h3>{item.label}</h3>
              <p>{item.desc}</p>
            </motion.article>
          ))}
        </div>

        <p className="pattern-section__footer">{t('product_preview.footer')}</p>
      </div>
    </section>
  )
}
