/**
 * Mirar Logo — oval gradient mark + Cormorant Garamond wordmark.
 * Uses CSS gradient oval (no PNG) so it renders crisply at any size
 * without the transparent-padding issues of the 3072×3072 source files.
 */

interface LogoProps {
  variant?: 'dark' | 'light'
  size?: 'sm' | 'md' | 'lg'
}

const CFG = {
  sm: { w: 8,  h: 12, fs: '18px', gap: '5px', tracking: '-0.01em' },
  md: { w: 10, h: 15, fs: '22px', gap: '6px', tracking: '-0.015em' },
  lg: { w: 13, h: 19, fs: '28px', gap: '8px', tracking: '-0.02em' },
}

export default function Logo({ variant = 'dark', size = 'md' }: LogoProps) {
  const c = CFG[size]
  const wordColor = variant === 'dark' ? '#1C1A17' : '#F6F1E8'

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: c.gap }}>
      {/* Gradient oval — matches Only Logo PNG palette */}
      <div
        aria-hidden="true"
        style={{
          width: c.w,
          height: c.h,
          borderRadius: '50%',
          flexShrink: 0,
          background: 'linear-gradient(160deg, #B98BFF 0%, #C4908A 52%, #D99A73 100%)',
        }}
      />
      <span
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: c.fs,
          fontWeight: 500,
          letterSpacing: c.tracking,
          lineHeight: 1,
          color: wordColor,
        }}
      >
        Mirar
      </span>
    </div>
  )
}
