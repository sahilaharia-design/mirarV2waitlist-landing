'use client'

import { useRef, useEffect } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
} from 'framer-motion'
import { useTranslation } from '@/lib/i18n'

const APP_URL = 'https://mirar-app.vercel.app/assess'

const DIMENSION_COLORS = ['#7C6FA0', '#C07840', '#4A7CA8', '#6A9870', '#A0884A', '#B85A4A']

const SIGNAL_CHIP_KEYS = [
  { key: 'carrying',   x: '8%',  y: '12%', delay: '0s',    dur: '4.5s' },
  { key: 'avoiding',   x: '55%', y: '8%',  delay: '0.8s',  dur: '5.2s' },
  { key: 'repeating',  x: '10%', y: '70%', delay: '1.6s',  dur: '4.8s' },
  { key: 'outgrowing', x: '52%', y: '78%', delay: '0.4s',  dur: '5.5s' },
  { key: 'noticing',   x: '30%', y: '80%', delay: '1.2s',  dur: '4.2s' },
]

const DOTS = [
  { x: '20%', y: '20%', size: 6,  color: 'rgba(217,154,115,0.4)',  delay: '0s' },
  { x: '75%', y: '25%', size: 4,  color: 'rgba(185,139,255,0.3)',  delay: '0.6s' },
  { x: '15%', y: '55%', size: 5,  color: 'rgba(217,154,115,0.25)', delay: '1.2s' },
  { x: '80%', y: '60%', size: 3,  color: 'rgba(185,139,255,0.35)', delay: '0.3s' },
  { x: '65%', y: '45%', size: 4,  color: 'rgba(217,154,115,0.3)',  delay: '0.9s' },
  { x: '35%', y: '15%', size: 3,  color: 'rgba(185,139,255,0.2)',  delay: '1.5s' },
  { x: '55%', y: '85%', size: 5,  color: 'rgba(217,154,115,0.2)',  delay: '0.7s' },
]

// Ambient floating particles — barely visible depth layer
const PARTICLES = Array.from({ length: 12 }, (_, i) => ({
  x: `${8 + (i * 7.3) % 85}%`,
  y: `${10 + (i * 11.7) % 80}%`,
  size: 2 + (i % 3),
  delay: (i * 0.37) % 3,
  dur: 4 + (i % 4),
  color: i % 2 === 0 ? 'rgba(217,154,115,0.18)' : 'rgba(185,139,255,0.14)',
}))

const textVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const lineVariant = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
}

export default function Hero() {
  const { t } = useTranslation()
  const sectionRef = useRef<HTMLElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 })

  // Cursor glow — track relative to section
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    // Only on pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    const handleMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect()
      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
    }
    section.addEventListener('mousemove', handleMove)
    return () => section.removeEventListener('mousemove', handleMove)
  }, [mouseX, mouseY])

  // Scroll parallax on text column — subtle upward drift
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const textY = useTransform(scrollYProgress, [0, 1], [0, -40])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pt-24 pb-20 sm:pt-32 sm:pb-28 bg-ivory"
    >
      {/* Cursor-following glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 hidden lg:block"
        style={{
          background: 'radial-gradient(480px circle at var(--gx) var(--gy), rgba(217,154,115,0.09), rgba(185,139,255,0.05) 50%, transparent 80%)',
          '--gx': springX,
          '--gy': springY,
        } as any}
      />

      <div className="max-w-container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

          {/* Left — text column with parallax + Framer entrance */}
          <motion.div
            className="flex-1 max-w-xl text-center lg:text-left"
            style={{ y: textY }}
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={lineVariant}
              className="font-sans text-[11px] tracking-[0.2em] uppercase text-peach mb-6"
            >
              {t('hero.eyebrow')}
            </motion.p>

            <motion.h1
              variants={lineVariant}
              className="font-serif text-[42px] sm:text-[54px] lg:text-[60px] leading-[1.08] font-medium text-charcoal mb-7"
            >
              {t('hero.title_line1')}<br className="hidden sm:block" /> {t('hero.title_line2')}{' '}
              <em className="text-peach not-italic">{t('hero.title_except')}</em>
            </motion.h1>

            <motion.p
              variants={lineVariant}
              className="font-sans text-[19px] sm:text-[20px] text-text-secondary leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
            >
              {t('hero.body')}
            </motion.p>

            <motion.div variants={lineVariant} className="flex items-center gap-2 mb-10 justify-center lg:justify-start">
              {DIMENSION_COLORS.map((c) => (
                <span key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
              ))}
            </motion.div>

            <motion.div variants={lineVariant}>
              <a
                href={APP_URL}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-sans font-semibold text-[15px] transition-all duration-200 hover:scale-105 active:scale-95 animate-cta-pulse"
                style={{
                  background: 'linear-gradient(135deg, #D99A73 0%, #C4806A 100%)',
                  color: '#1C1A17',
                  boxShadow: '0 4px 24px rgba(217,154,115,0.45), 0 1px 4px rgba(0,0,0,0.1)',
                }}
              >
                {t('hero.cta')}
                <span aria-hidden>→</span>
              </a>

              <p className="mt-4 font-sans text-[13px] text-text-secondary/80 tracking-wide">
                {t('hero.cta_note')}
              </p>
            </motion.div>
          </motion.div>

          {/* Right — animated mirror oval */}
          <motion.div
            className="flex-shrink-0 flex items-center justify-center w-full lg:w-auto"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative" style={{ width: 280, height: 360 }}>

              {/* Ambient depth particles — behind oval */}
              <div className="absolute inset-0 pointer-events-none">
                {PARTICLES.map((p, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full"
                    style={{ left: p.x, top: p.y, width: p.size, height: p.size, background: p.color }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
                  />
                ))}
              </div>

              {/* Outer glow */}
              <div
                className="absolute inset-0 animate-breathe"
                style={{
                  background: 'transparent',
                  boxShadow: '0 0 60px 20px rgba(217,154,115,0.15), 0 0 100px 40px rgba(185,139,255,0.08)',
                  borderRadius: '50% / 50%',
                }}
              />

              {/* The oval */}
              <div
                className="absolute inset-0 animate-glow-pulse"
                style={{
                  background: 'linear-gradient(160deg, #F7F3ED 0%, #EFE8DE 100%)',
                  borderRadius: '50% / 50%',
                  border: '1px solid rgba(28,26,23,0.07)',
                  overflow: 'hidden',
                  backdropFilter: 'blur(2px)',
                }}
              >
                {/* Inner grid lines */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 280 360">
                  {[70, 140, 210].map(x => (
                    <line key={x} x1={x} y1="0" x2={x} y2="360" stroke="#1C1A17" strokeWidth="1"/>
                  ))}
                  {[90, 180, 270].map(y => (
                    <line key={y} x1="0" y1={y} x2="280" y2={y} stroke="#1C1A17" strokeWidth="1"/>
                  ))}
                </svg>

                {/* Floating signal chips */}
                {SIGNAL_CHIP_KEYS.map((chip) => (
                  <div
                    key={chip.key}
                    className="absolute animate-float-bounce"
                    style={{ left: chip.x, top: chip.y, animationDelay: chip.delay, animationDuration: chip.dur }}
                  >
                    <span
                      className="inline-block px-3 py-1.5 rounded-full font-sans text-[11px] text-charcoal/60"
                      style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(28,26,23,0.06)' }}
                    >
                      {t(`hero.signal_chips.${chip.key}`)}
                    </span>
                  </div>
                ))}

                {/* Floating dots */}
                {DOTS.map((dot, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full animate-float-dot"
                    style={{ left: dot.x, top: dot.y, width: dot.size, height: dot.size, background: dot.color, animationDelay: dot.delay }}
                  />
                ))}

                {/* Signal compass — the same needle-and-zone gauge the app itself uses.
                    No numeric score: Mirar never shows one, so the hero shouldn't either. */}
                <div className="absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2">
                  <svg width="176" height="140" viewBox="0 0 176 140">
                    {/* Four zone arcs — Under Load, Stabilizing, Forming, Aligned */}
                    <path d="M 16 100 A 72 72 0 0 1 40.9 43.8" fill="none" stroke="#C47058" strokeWidth="11" strokeLinecap="round" opacity="0.55"/>
                    <path d="M 40.9 43.8 A 72 72 0 0 1 74.7 18.1" fill="none" stroke="#6B8FB5" strokeWidth="11" strokeLinecap="round" opacity="0.55"/>
                    <path d="M 74.7 18.1 A 72 72 0 0 1 132.2 30.6" fill="none" stroke="#D4A843" strokeWidth="11" strokeLinecap="round" opacity="0.55"/>
                    <path d="M 132.2 30.6 A 72 72 0 0 1 160 100" fill="none" stroke="#5B8C5A" strokeWidth="11" strokeLinecap="round" opacity="0.55"/>
                    {/* Needle — resting mid "Forming", animated sweep in from center */}
                    <line
                      x1="88" y1="100" x2="121" y2="52"
                      stroke="#1C1A17" strokeWidth="2.5" strokeLinecap="round"
                      style={{ transformOrigin: '88px 100px', animation: 'needle-settle 1.4s cubic-bezier(0.22,1,0.36,1) 0.5s both' } as any}
                    />
                    <circle cx="88" cy="100" r="5" fill="#1C1A17"/>
                    {/* Status word — no number, sits below the pivot so the needle never crosses it */}
                    <text x="88" y="124" textAnchor="middle" fill="rgba(28,26,23,0.82)" fontSize="15" fontFamily="Georgia, serif" fontStyle="italic">{t('hero.status')}</text>
                  </svg>
                </div>

                {/* Day label chip — bottom of oval */}
                <div className="absolute bottom-[4%] left-0 right-0 flex justify-center">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full" style={{ background: 'rgba(255,255,255,0.68)', border: '1px solid rgba(28,26,23,0.06)' }}>
                    <div className="w-1.5 h-1.5 rounded-full bg-peach/60" />
                    <p className="font-sans text-[9px] tracking-[0.14em] text-charcoal/40 uppercase">{t('hero.day_chip')}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
