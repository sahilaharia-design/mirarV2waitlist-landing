'use client'

import type { ReactNode } from 'react'
import { trackCtaClick, type CtaLocation } from '@/lib/analytics'

// Anchor that reports which CTA was used (named GA4 event). The destination is the live app.
export default function CtaLink({
  href,
  location,
  className,
  children,
}: {
  href: string
  location: CtaLocation
  className?: string
  children: ReactNode
}) {
  return (
    <a href={href} onClick={() => trackCtaClick(location)} className={className}>
      {children}
    </a>
  )
}
