// ─────────────────────────────────────────────────────────────────────────────
// Thin wrapper around gtag for custom events. GA4's automatic pageview +
// Enhanced Measurement's outbound-click tracking already catch the fact that
// someone left the site for mirar-app.vercel.app — but that alone can't tell
// you WHICH link they used (Header vs Hero vs the founder's note vs the
// closing CTA). This adds that context as an event parameter, so the funnel
// is actually diagnosable in GA4, not just "some outbound click happened."
// ─────────────────────────────────────────────────────────────────────────────

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

export type CtaLocation =
  | 'header_begin'
  | 'header_login'
  | 'hero'
  | 'interactive_mirror'
  | 'founder_note'
  | 'begin_cta'

export function trackCtaClick(location: CtaLocation) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('event', 'cta_click', {
    cta_location: location,
  })
}
