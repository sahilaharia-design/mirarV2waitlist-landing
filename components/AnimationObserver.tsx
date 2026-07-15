'use client'
import { useEffect } from 'react'

export default function AnimationObserver() {
  useEffect(() => {
    // RAF ensures paint has happened before we check intersection,
    // fixing the above-fold flash-of-invisible issue.
    const raf = requestAnimationFrame(() => {
      const els = Array.from(document.querySelectorAll('.sr'))
      if (!els.length) return

      const reveal = (el: Element) => {
        requestAnimationFrame(() => {
          el.classList.add('in-view')
        })
      }

      // A direct hash-link load (shared URL, bookmark, or iOS Safari's anchor
      // navigation — which doesn't reliably honor `scroll-behavior: smooth`)
      // can land the page already scrolled to a section before this observer
      // finishes setting up, so the elements there are "already intersecting"
      // the moment observe() is called. IntersectionObserver is supposed to
      // fire an initial callback for that state, but in practice this racing
      // with the browser's own scroll-to-hash can leave it permanently
      // un-fired — so also do one manual pass for anything already in the
      // viewport right now, independent of the observer.
      els.forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          reveal(el)
        }
      })

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Small delay so the CSS transition has a frame to start from
              reveal(entry.target)
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
