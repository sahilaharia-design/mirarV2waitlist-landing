'use client'

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { useTranslation } from '@/lib/i18n'

const APP_URL = 'https://mirar-app.vercel.app/assess'

const ZONES = [
  { path: 'M 16 100 A 72 72 0 0 1 40.9 43.8', color: '#B85A4A' },
  { path: 'M 40.9 43.8 A 72 72 0 0 1 74.7 18.1', color: '#6A8BB5' },
  { path: 'M 74.7 18.1 A 72 72 0 0 1 132.2 30.6', color: '#B99748' },
  { path: 'M 132.2 30.6 A 72 72 0 0 1 160 100', color: '#5A8A6A' },
]

const NEEDLE_ROTATIONS = [-34, -8, 26]

export default function InteractiveMirror() {
  const { t, tList } = useTranslation()
  const reduceMotion = useReducedMotion()
  const options = (tList('first_practice.preview_options') as string[]).slice(0, 3)
  const [selected, setSelected] = useState<number | null>(null)
  const [reflected, setReflected] = useState(false)

  const rotation = useMemo(
    () => (selected === null ? -12 : NEEDLE_ROTATIONS[selected] ?? -12),
    [selected],
  )

  const choose = (index: number) => {
    setSelected(index)
    setReflected(false)
  }

  return (
    <div className="mirror-stage" aria-label="Try a private Mirar reflection">
      <div className="mirror-stage__aurora" aria-hidden />
      <div className="mirror-stage__orb mirror-stage__orb--one" aria-hidden />
      <div className="mirror-stage__orb mirror-stage__orb--two" aria-hidden />

      <motion.div
        className="mirror-card"
        initial={reduceMotion ? false : { opacity: 0, y: 18, rotateX: 3 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
      >
        <div className="mirror-card__topline">
          <span>{reflected ? t('product_preview.phone_step2') : t('first_practice.preview_label')}</span>
          <span className="mirror-card__privacy"><i aria-hidden /> Private by design</span>
        </div>

        <AnimatePresence mode="wait">
          {!reflected ? (
            <motion.div
              key="question"
              initial={reduceMotion ? false : { opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -12 }}
              transition={{ duration: 0.35 }}
            >
              <p className="mirror-card__instruction">Choose what feels closest. There is no right answer.</p>
              <h2 className="mirror-card__question">{t('first_practice.preview_question')}</h2>

              <div className="mirror-card__options" role="radiogroup" aria-label={t('first_practice.preview_question')}>
                {options.map((option, index) => {
                  const active = selected === index
                  return (
                    <motion.button
                      type="button"
                      role="radio"
                      aria-checked={active}
                      key={option}
                      onClick={() => choose(index)}
                      className={`mirror-option ${active ? 'is-selected' : ''}`}
                      whileTap={reduceMotion ? undefined : { scale: 0.985 }}
                    >
                      <span className="mirror-option__dot" aria-hidden>
                        {active && <motion.span layoutId="mirror-selected-dot" />}
                      </span>
                      <span>{option}</span>
                    </motion.button>
                  )
                })}
              </div>

              <button
                type="button"
                className="mirror-card__continue"
                disabled={selected === null}
                onClick={() => setReflected(true)}
              >
                See what this might be pointing to <span aria-hidden>↗</span>
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="reflection"
              className="mirror-reflection"
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mirror-compass" aria-hidden>
                <svg width="176" height="140" viewBox="0 0 176 140">
                  {ZONES.map((zone) => (
                    <path
                      key={zone.path}
                      d={zone.path}
                      fill="none"
                      stroke={zone.color}
                      strokeWidth="10"
                      strokeLinecap="round"
                      opacity="0.52"
                    />
                  ))}
                  <motion.g
                    style={{ originX: '88px', originY: '100px' }}
                    animate={{ rotate: rotation }}
                    transition={reduceMotion ? { duration: 0 } : { duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <line x1="88" y1="100" x2="88" y2="39" stroke="#2A2A30" strokeWidth="2.5" strokeLinecap="round" />
                  </motion.g>
                  <circle cx="88" cy="100" r="5" fill="#2A2A30" />
                </svg>
              </div>

              <p className="mirror-reflection__status">Something is asking for attention.</p>
              <p className="mirror-reflection__copy">{t('product_preview.phone_step2_text')}</p>
              <p className="mirror-reflection__boundary">Not advice. Not a diagnosis. Just a mirror for this moment.</p>

              <div className="mirror-reflection__actions">
                <button type="button" onClick={() => setReflected(false)} className="mirror-reflection__again">
                  Choose again
                </button>
                <a href={APP_URL} className="mirror-reflection__begin">
                  Begin your two-minute reflection <span aria-hidden>→</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
