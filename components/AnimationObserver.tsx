'use client'
import { useEffect } from 'react'

export default function AnimationObserver() {
  useEffect(() => {
    // RAF ensures paint has happened before we check intersection,
    // fixing the above-fold flash-of-invisible issue.
    const raf = requestAnimationFrame(() => {
      const els = Array.from(document.querySelectorAll('.sr'))
      if (!els.length) return

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Small delay so the CSS transition has a frame to start from
              requestAnimationFrame(() => {
                entry.target.classList.add('in-view')
              })
              io.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
      )

      els.forEach((el) => io.observe(el))
      return () => io.disconnect()
    })

    return () => cancelAnimationFrame(raf)
  }, [])

  return null
}
