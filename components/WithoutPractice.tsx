'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useTranslation } from '@/lib/i18n'

export default function WithoutPractice() {
  const { t, tList } = useTranslation()
  const mistakes = tList('without_practice.mistakes') as string[]
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-16 sm:py-24 bg-dark-section text-ivory">
      <div className="max-w-container mx-auto px-4 sm:px-6">

        <div className="max-w-2xl mb-14 sr sr-header">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-peach/80 mb-4">
            {t('without_practice.eyebrow')}
          </p>
          <h2 className="font-serif text-[32px] sm:text-[40px] font-medium text-ivory leading-[1.15] mb-5">
            {t('without_practice.title')}
          </h2>
          <p className="font-sans text-base sm:text-lg text-ivory/70 leading-relaxed">
            {t('without_practice.body')}
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mistakes.map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ delay: i * 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -3, borderColor: 'rgba(217,154,115,0.35)' }}
              className="relative rounded-2xl p-7 border border-white/[0.07] overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.04)' }}
            >
              {/* Concentric ripple motif — barely visible */}
              <div
                className="absolute right-3 bottom-3 rounded-full pointer-events-none"
                style={{ width: 56, height: 56, border: '1px solid rgba(246,241,232,0.06)' }}
              />
              <div
                className="absolute right-0 bottom-0 rounded-full pointer-events-none"
                style={{ width: 84, height: 84, border: '1px solid rgba(246,241,232,0.03)' }}
              />

              <p className="font-serif text-lg text-ivory/85 leading-relaxed relative z-10">
                {text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
