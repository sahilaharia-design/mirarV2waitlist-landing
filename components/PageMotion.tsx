'use client'

import { motion, useMotionValue, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import { useEffect } from 'react'

export default function PageMotion() {
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.28 })
  const pointerX = useMotionValue(-240)
  const pointerY = useMotionValue(-240)
  const x = useSpring(pointerX, { stiffness: 90, damping: 22, mass: 0.35 })
  const y = useSpring(pointerY, { stiffness: 90, damping: 22, mass: 0.35 })

  useEffect(() => {
    if (reduceMotion || !window.matchMedia('(pointer: fine)').matches) return
    const move = (event: PointerEvent) => {
      pointerX.set(event.clientX - 180)
      pointerY.set(event.clientY - 180)
    }
    window.addEventListener('pointermove', move, { passive: true })
    return () => window.removeEventListener('pointermove', move)
  }, [pointerX, pointerY, reduceMotion])

  return (
    <>
      <motion.div className="page-progress" style={{ scaleX: reduceMotion ? 0 : progress }} aria-hidden />
      {!reduceMotion && <motion.div className="pointer-aura" style={{ x, y }} aria-hidden />}
    </>
  )
}
