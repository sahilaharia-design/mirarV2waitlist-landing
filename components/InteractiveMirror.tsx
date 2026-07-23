'use client'

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from '@/lib/i18n'

const APP_URL = 'https://mirar-app.vercel.app/assess'
const SLIDE_COUNT = 4
const AUTO_ADVANCE_MS = 4200

const ZONES = [
  { path: 'M 16 100 A 72 72 0 0 1 40.9 43.8', color: '#B85A4A' },
  { path: 'M 40.9 43.8 A 72 72 0 0 1 74.7 18.1', color: '#6A8BB5' },
  { path: 'M 74.7 18.1 A 72 72 0 0 1 132.2 30.6', color: '#B99748' },
  { path: 'M 132.2 30.6 A 72 72 0 0 1 160 100', color: '#5A8A6A' },
]

const NEEDLE_ROTATIONS = [-34, -8, 26]

const SIGNAL_ROW_STYLE = [
  { color: '#7C6FA0', statusColor: '#5A8A6A', statusBg: '#EAF4EC' },
  { color: '#C07840', statusColor: '#B85A4A', statusBg: '#FAE8E5' },
  { color: '#4A7CA8', statusColor: '#4A7CA8', statusBg: '#E8F2FA' },
]

// Pips in a row so the "Reflections in this window" bar has something to render
// without needing a real 7-value dataset — this is a decorative preview, not
// wired to real data.
const COVERAGE_PIPS = [1, 1, 1, 1, 1, 0.4, 0]

export default function InteractiveMirror() {
  const { t, tList } = useTranslation()
  const reduceMotion = useReducedMotion()
  const options = (tList('first_practice.preview_options') as string[]).slice(0, 3)
  const signalRows = (tList('mirror_carousel.signal_rows') as { name: string; status: string }[]).map(
    (row, i) => ({ ...row, ...SIGNAL_ROW_STYLE[i] }),
  )
  const [selected, setSelected] = useState<number | null>(null)
  const [slide, setSlide] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const rotation = useMemo(
    () => (selected === null ? -12 : NEEDLE_ROTATIONS[selected] ?? -12),
    [selected],
  )

  // Auto-rotate through all four panels. A manual option click below jumps
  // straight to the reflection panel (immediate payoff for interacting) but
  // doesn't stop the carousel — it keeps cycling afterward.
  useEffect(() => {
    if (reduceMotion || paused) return
    timerRef.current = setInterval(() => {
      setSlide((s) => (s + 1) % SLIDE_COUNT)
    }, AUTO_ADVANCE_MS)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [reduceMotion, paused])

  const choose = (index: number) => {
    setSelected(index)
    setSlide(1)
  }

  const TOPLINE_KEYS = [
    'first_practice.preview_label',
    'product_preview.phone_step2',
    'mirror_carousel.topline_signals',
    'mirror_carousel.topline_report',
  ]
  const topline = t(TOPLINE_KEYS[slide])

  return (
    <div
      className="mirror-stage"
      aria-label="Try a private Mirar reflection"
      // Pointer-type gated: a touch tap fires "enter" with no matching
      // "leave" ever coming (there's no hovering finger to lift off from),
      // so gating on mouse-only pointer events keeps the auto-rotation
      // from getting stuck paused forever on whatever slide was tapped.
      onPointerEnter={(e) => { if (e.pointerType === 'mouse') setPaused(true) }}
      onPointerLeave={(e) => { if (e.pointerType === 'mouse') setPaused(false) }}
    >
      <div className="mirror-stage__aurora" aria-hidden />
      <div className="mirror-stage__orb mirror-stage__orb--one" aria-hidden />
      <div className="mirror-stage__orb mirror-stage__orb--two" aria-hidden />

      <motion.div
        className="mirror-card"
        initial={reduceMotion ? false : { opacity: 0, y: 18, rotateX: 3 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
      >
        <AnimatePresence mode="wait">
          {slide === 0 && (
            <motion.div
              key="question"
              initial={reduceMotion ? false : { opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -12 }}
              transition={{ duration: 0.35 }}
            >
              <div className="mirror-card__topline">
                <span>{topline}</span>
                <span className="mirror-card__privacy"><i aria-hidden /> Private by design</span>
              </div>

              <p className="mirror-card__instruction">{t('mirror_carousel.instruction')}</p>
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
                onClick={() => setSlide(1)}
              >
                See what this might be pointing to <span aria-hidden>↗</span>
              </button>
            </motion.div>
          )}

          {slide === 1 && (
            <motion.div
              key="reflection"
              className="mirror-reflection"
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mirror-card__topline">
                <span>{topline}</span>
                <span className="mirror-card__privacy"><i aria-hidden /> Private by design</span>
              </div>

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

              <p className="mirror-reflection__status">{t('mirror_carousel.reflection_status')}</p>
              <p className="mirror-reflection__copy">{t('product_preview.phone_step2_text')}</p>
              <p className="mirror-reflection__boundary">{t('mirror_carousel.reflection_boundary')}</p>

              <div className="mirror-reflection__actions">
                <button type="button" onClick={() => setSlide(0)} className="mirror-reflection__again">
                  {t('mirror_carousel.choose_again')}
                </button>
                <a href={APP_URL} className="mirror-reflection__begin">
                  {t('mirror_carousel.begin_reflection')} <span aria-hidden>→</span>
                </a>
              </div>
            </motion.div>
          )}

          {slide === 2 && (
            <motion.div
              key="signals"
              className="mirror-signals"
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mirror-card__topline">
                <span>{topline}</span>
                <span className="mirror-card__privacy"><i aria-hidden /> Private by design</span>
              </div>

              <p className="mirror-signals__label">{t('mirror_carousel.signals_label')}</p>
              <div className="mirror-signals__coverage" aria-hidden>
                {COVERAGE_PIPS.map((v, i) => (
                  <span key={i} className="mirror-signals__pip" style={{ opacity: 0.25 + v * 0.6 }} />
                ))}
              </div>

              <div className="mirror-signals__rows">
                {signalRows.map((row) => (
                  <div key={row.name} className="mirror-signals__row">
                    <span className="mirror-signals__stripe" style={{ background: row.color }} aria-hidden />
                    <span className="mirror-signals__name">{row.name}</span>
                    <span
                      className="mirror-signals__status"
                      style={{ color: row.statusColor, background: row.statusBg }}
                    >
                      {row.status}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mirror-reflection__boundary">{t('mirror_carousel.signals_footer')}</p>
            </motion.div>
          )}

          {slide === 3 && (
            <motion.div
              key="report"
              className="mirror-reflection"
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mirror-card__topline">
                <span>{topline}</span>
                <span className="mirror-card__privacy"><i aria-hidden /> Private by design</span>
              </div>

              <p className="mirror-reflection__status">{t('mirror_carousel.report_status')}</p>
              <p className="mirror-reflection__copy">{t('mirror_carousel.report_copy')}</p>
              <p className="mirror-reflection__boundary">{t('mirror_carousel.report_boundary')}</p>

              <div className="mirror-reflection__actions">
                <a href={APP_URL} className="mirror-reflection__begin">
                  {t('mirror_carousel.begin_reflection')} <span aria-hidden>→</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mirror-stage__dots" role="tablist" aria-label="Preview screens">
          {Array.from({ length: SLIDE_COUNT }).map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={slide === i}
              aria-label={`Show preview screen ${i + 1}`}
              className={`mirror-stage__dot ${slide === i ? 'is-active' : ''}`}
              onClick={() => setSlide(i)}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}
