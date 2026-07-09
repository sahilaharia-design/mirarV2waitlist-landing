'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useTranslation } from '@/lib/i18n'

const STEP_NUMS = ['01', '02', '03', '04', '05', '06']

export default function FirstPractice() {
  const { t, tList } = useTranslation()
  const steps = tList('first_practice.steps').map((s: any, i: number) => ({ ...s, num: STEP_NUMS[i] }))
  const previewOptions = tList('first_practice.preview_options') as string[]
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-20 sm:py-28 bg-ivory">
      <div className="max-w-container mx-auto px-4 sm:px-6">

        <div className="max-w-2xl mb-16 sr sr-header">
          <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-peach mb-4">
            {t('first_practice.eyebrow')}
          </p>
          <h2 className="font-serif text-[32px] sm:text-[40px] font-light text-charcoal leading-[1.15] mb-5">
            {t('first_practice.title')}
          </h2>
          <p className="font-sans text-base text-text-secondary leading-relaxed">
            {t('first_practice.body')}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          <div ref={ref} className="relative max-w-md flex-shrink-0">
            {/* Static track line */}
            <div
              className="absolute top-8 bottom-8 hidden sm:block"
              style={{ left: 21, width: 1, background: 'rgba(28,26,23,0.07)' }}
            />
            {/* Animated progress line */}
            <motion.div
              className="absolute top-8 hidden sm:block origin-top"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
              style={{
                left: 21,
                width: 1,
                height: 'calc(100% - 64px)',
                background: 'linear-gradient(to bottom, #D99A73, rgba(217,154,115,0.2))',
              }}
            />

            <div className="flex flex-col">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: -14 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -14 }}
                  transition={{ delay: 0.18 + i * 0.11, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="flex gap-6 items-start py-5"
                >
                  {/* Step node */}
                  <div
                    className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center relative z-10 mt-0.5"
                    style={{
                      background: '#F6F1E8',
                      border: '1px solid rgba(28,26,23,0.1)',
                      boxShadow: '0 1px 4px rgba(28,26,23,0.06)',
                    }}
                  >
                    <span className="font-sans text-[10px] tracking-[0.15em] text-charcoal/40 font-medium">
                      {step.num}
                    </span>
                  </div>

                  <div className="pt-2.5">
                    <p className="font-serif text-[18px] text-charcoal font-medium mb-1 leading-snug">
                      {step.label}
                    </p>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Real check-in card preview — grounds the steps in the actual product */}
          <motion.div
            className="hidden lg:block flex-1 sr"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          >
            <div className="max-w-sm mx-auto" style={{ marginTop: 8 }}>
              <div
                className="rounded-2xl p-6 bg-card-bg border border-charcoal/8"
                style={{ boxShadow: '0 20px 48px rgba(28,26,23,0.10), 0 4px 12px rgba(28,26,23,0.05)' }}
              >
                <div className="flex items-center justify-between mb-4">
                  <p className="font-sans text-[10px] tracking-[0.16em] uppercase text-text-secondary">
                    {t('first_practice.preview_label')}
                  </p>
                  <div className="w-2 h-2 rounded-full bg-peach/70" />
                </div>
                <p className="font-serif text-[19px] text-charcoal leading-snug mb-5">
                  {t('first_practice.preview_question')}
                </p>
                <div className="flex flex-col gap-2">
                  {previewOptions.map((text, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-2.5 rounded-xl px-3.5 py-3 border ${
                        i === 0 ? 'bg-peach/12 border-peach/35' : 'bg-ivory/70 border-charcoal/6'
                      }`}
                    >
                      <div
                        className={`w-3 h-3 rounded-full flex-shrink-0 ${i === 0 ? 'bg-peach' : 'border border-charcoal/20'}`}
                      />
                      <span className="font-sans text-[13px] text-charcoal/75">{text}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-charcoal/8 flex items-center justify-between">
                  <span className="font-sans text-[12px] text-text-secondary/70">{t('first_practice.preview_footer')}</span>
                  <span className="font-sans text-[13px] text-charcoal">→</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
