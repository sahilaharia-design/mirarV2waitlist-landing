'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { useTranslation } from '@/lib/i18n'

const SIGNALS = [
  { day: '01', word: 'carrying', x: 29, color: '#B85A4A' },
  { day: '03', word: 'avoiding', x: 43, color: '#6A8BB5' },
  { day: '05', word: 'repeating', x: 58, color: '#B99748' },
  { day: '07', word: 'noticing', x: 74, color: '#5A8A6A' },
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
            <span>One moment</span>
            <span>A pattern, gently forming</span>
          </div>

          <div className="pattern-story__canvas" aria-label="A visual example of daily signals becoming a pattern">
            <div className="pattern-story__line" aria-hidden>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: reduceMotion ? 0 : 1.4, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>

            {SIGNALS.map((signal, index) => (
              <motion.div
                key={signal.day}
                className="pattern-signal"
                style={{ left: `${signal.x}%`, '--signal-color': signal.color } as React.CSSProperties}
                initial={reduceMotion ? false : { opacity: 0, y: 16, scale: 0.85 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 16, scale: 0.85 }}
                transition={{ delay: reduceMotion ? 0 : 0.25 + index * 0.18, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="pattern-signal__halo" aria-hidden />
                <span className="pattern-signal__dot" aria-hidden />
                <span className="pattern-signal__day">Day {signal.day}</span>
                <span className="pattern-signal__word">{signal.word}</span>
              </motion.div>
            ))}

            <motion.div
              className="pattern-story__reading"
              initial={reduceMotion ? false : { opacity: 0, x: 18 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 18 }}
              transition={{ delay: reduceMotion ? 0 : 1.05, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <span>What became visible</span>
              <strong>Energy spent maintaining appearances.</strong>
              <small>A reflection—not a verdict.</small>
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
