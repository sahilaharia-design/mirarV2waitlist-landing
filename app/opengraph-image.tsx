import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Mirar — a two-minute daily mirror for your inner life'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const arcs = [
  { inset: 58, rotate: '-8deg', color: 'rgba(155,122,66,0.18)' },
  { inset: 93, rotate: '6deg', color: 'rgba(139,165,212,0.2)' },
  { inset: 128, rotate: '-2deg', color: 'rgba(183,127,95,0.16)' },
]

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          position: 'relative',
          display: 'flex',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          background: 'linear-gradient(125deg, #FAF7F2 0%, #F2ECE4 58%, #ECE7E3 100%)',
          color: '#2A2A30',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -190,
            right: -120,
            display: 'flex',
            width: 650,
            height: 650,
            borderRadius: 650,
            background: 'radial-gradient(circle, rgba(232,184,154,0.38) 0%, rgba(139,165,212,0.12) 48%, transparent 72%)',
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', width: '61%', padding: '58px 0 52px 66px' }}>
          <img
            src="https://mirar.life/assets/brand/mirar-logo-full.png"
            alt=""
            width="146"
            height="64"
            style={{ objectFit: 'contain', objectPosition: 'left center' }}
          />

          <div style={{ display: 'flex', alignItems: 'center', marginTop: 82, color: '#8C7339', fontSize: 18, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            INNER ALIGNMENT INFRASTRUCTURE
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', marginTop: 20, fontSize: 60, lineHeight: 1.02, letterSpacing: '-0.045em' }}>
            <span>For every part of life,</span>
            <span>a daily practice.</span>
            <span style={{ color: '#B77F5F' }}>Except one.</span>
          </div>

          <div style={{ display: 'flex', marginTop: 34, color: '#6B696E', fontSize: 22 }}>
            Two minutes a day. No account required to begin.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', marginTop: 'auto', color: '#6B696E', fontSize: 16 }}>
            <span style={{ display: 'flex', width: 7, height: 7, marginRight: 10, borderRadius: 7, background: '#5A8A6A' }} />
            Built for noticing. Not optimizing.
          </div>
        </div>

        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '39%', height: '100%' }}>
          {arcs.map((arc) => (
            <div
              key={arc.inset}
              style={{
                position: 'absolute',
                top: arc.inset,
                right: arc.inset - 35,
                bottom: arc.inset,
                left: arc.inset - 35,
                display: 'flex',
                border: `2px solid ${arc.color}`,
                borderRadius: 999,
                transform: `rotate(${arc.rotate})`,
              }}
            />
          ))}

          <div
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: 280,
              height: 390,
              border: '1px solid rgba(255,255,255,0.72)',
              borderRadius: 150,
              background: 'linear-gradient(160deg, rgba(255,255,255,0.9), rgba(244,240,234,0.68))',
              boxShadow: '0 30px 80px rgba(42,42,48,0.14)',
            }}
          >
            <div style={{ display: 'flex', gap: 10, marginBottom: 30 }}>
              {['#B85A4A', '#6A8BB5', '#B99748', '#5A8A6A'].map((color) => (
                <span key={color} style={{ display: 'flex', width: 13, height: 13, borderRadius: 13, background: color, opacity: 0.72 }} />
              ))}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: 200, color: '#2A2A30', fontSize: 24, lineHeight: 1.2, textAlign: 'center', fontStyle: 'italic' }}>Something is asking for attention.</div>
            <div style={{ display: 'flex', marginTop: 16, color: '#6B696E', fontSize: 16 }}>pause · notice · return</div>
          </div>
        </div>
      </div>
    ),
    size,
  )
}
