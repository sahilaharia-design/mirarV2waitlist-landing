'use client'
import { useEffect } from 'react'

export default function AnimationObserver() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.sr'))
    if (!els.length) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
  return null
}
