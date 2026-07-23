'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useTranslation } from '@/lib/i18n'

const QUOTE_META = [
  { dx: -10, color: '#C98E6B' },
  { dx: 10, color: '#8BA5D4' },
  { dx: -10, color: '#8BA5D4' },
  { dx: 10, color: '#C98E6B' },
]

export default function Reflections() {
  const { t, tList } = useTranslation()
  const quotes = tList('reflections.quotes').map((text: string, i: number) => ({ text, ...QUOTE_META[i] }))
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-14 sm:py-20 bg-ivory">
      <div className="max-w-container mx-auto px-4 sm:px-6">

        <p className="font-sans text-xs tracking-[0.2em] uppercase text-text-secondary mb-12 sr sr-header">
          {t('reflections.eyebrow')}
        </p>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl">
          {quotes.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: q.dx, y: 14 }}
              animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: q.dx, y: 14 }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -3 }}
              className="relative rounded-2xl p-8 border-l-[3px] border-y border-r border-charcoal/[0.07] bg-card-bg cursor-default overflow-hidden"
              style={{ transition: 'box-shadow 0.25s ease', borderLeftColor: q.color }}
            >
              <span
                aria-hidden
                className="absolute -top-3 left-5 font-serif pointer-events-none select-none"
                style={{ fontSize: 84, color: q.color, opacity: 0.18, lineHeight: 1 }}
              >
                &ldquo;
              </span>
              <p className="relative font-serif text-xl sm:text-2xl italic text-charcoal/85 leading-relaxed">
                {q.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
