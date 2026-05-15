/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#F6F1E8',
        charcoal: '#1C1A17',
        'text-secondary': '#6F675D',
        peach: '#D99A73',
        lavender: '#B98BFF',
        'card-bg': '#EFE4D6',
        'dark-section': '#2A2522',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1120px',
      },
      keyframes: {
        // ── Hero entrance — spring bounce ──
        'spring-up': {
          '0%':   { opacity: '0', transform: 'translateY(28px) scale(0.97)' },
          '55%':  { opacity: '1', transform: 'translateY(-5px) scale(1.015)' },
          '75%':  { opacity: '1', transform: 'translateY(2px) scale(0.998)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        // ── Word chips — bouncy float ──
        'float-bounce': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '35%':       { transform: 'translateY(-16px) rotate(-1.5deg)' },
          '65%':       { transform: 'translateY(-13px) rotate(1deg)' },
        },
        // ── Dots — quick pop float ──
        'float-dot': {
          '0%, 100%': { transform: 'translateY(0) scale(1)', opacity: '0.5' },
          '45%':       { transform: 'translateY(-10px) scale(1.3)', opacity: '1' },
        },
        // ── Oval breathe — more dramatic ──
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.9' },
          '50%':       { transform: 'scale(1.055)', opacity: '1' },
        },
        // ── Legacy float (kept for compatibility) ──
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-14px)' },
        },
        'float-medium': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-9px)' },
        },
        // ── Oval glow — rich two-colour pulse ──
        'glow-pulse': {
          '0%, 100%': {
            boxShadow:
              '0 0 50px 15px rgba(217,154,115,0.14), 0 0 90px 35px rgba(185,139,255,0.06)',
          },
          '50%': {
            boxShadow:
              '0 0 100px 45px rgba(217,154,115,0.38), 0 0 180px 80px rgba(185,139,255,0.18)',
          },
        },
        // ── Nav CTA button — pulsing ring ──
        'cta-pulse': {
          '0%, 100%': { boxShadow: '0 2px 12px rgba(217,154,115,0.45), 0 0 0 0 rgba(217,154,115,0.55)' },
          '50%':       { boxShadow: '0 2px 16px rgba(217,154,115,0.55), 0 0 0 8px rgba(217,154,115,0)' },
        },
        // ── Section cards fade+lift ──
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(22px)' },
          '60%':  { opacity: '1', transform: 'translateY(-3px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        // ── Hero headline shimmer sweep ──
        shimmer: {
          '0%':   { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
      },
      animation: {
        breathe:       'breathe 3.5s ease-in-out infinite',
        'float-slow':  'float-slow 5s ease-in-out infinite',
        'float-medium':'float-medium 3.2s ease-in-out infinite',
        'float-bounce':'float-bounce 4.5s ease-in-out infinite',
        'float-dot':   'float-dot 3s ease-in-out infinite',
        'glow-pulse':  'glow-pulse 2.8s ease-in-out infinite',
        'cta-pulse':   'cta-pulse 2.2s ease-in-out infinite',
        'spring-up':   'spring-up 0.65s cubic-bezier(0.34,1.56,0.64,1) forwards',
        'fade-up':     'fade-up 0.6s cubic-bezier(0.34,1.4,0.64,1) forwards',
        'fade-in':     'fade-in 0.5s ease-out forwards',
        shimmer:       'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
}
