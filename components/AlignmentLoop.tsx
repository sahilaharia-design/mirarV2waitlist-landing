'use client'

import { useTranslation } from '@/lib/i18n'

const NODE_META = [
  { id: 'awareness',   angle: -90, color: '#D99A73' },
  { id: 'realignment', angle: 0,   color: '#B98BFF' },
  { id: 'action',      angle: 90,  color: '#D99A73' },
  { id: 'reflection',  angle: 180, color: '#B98BFF' },
]

const R = 130
const CX = 200
const CY = 200

function nodePos(angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180
  return { x: CX + R * Math.cos(rad), y: CY + R * Math.sin(rad) }
}

export default function AlignmentLoop() {
  const { t, tList } = useTranslation()
  const NODES = tList('alignment_loop.nodes').map((n: any, i: number) => ({ ...n, ...NODE_META[i] }))
  return (
    <section id="practice" className="py-20 sm:py-28 bg-dark-section text-ivory">
      <div className="max-w-container mx-auto px-4 sm:px-6">

        <div className="max-w-2xl mb-14 sr">
          <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-peach/70 mb-4">
            {t('alignment_loop.eyebrow')}
          </p>
          <h2 className="font-serif text-[32px] sm:text-[40px] font-light text-ivory leading-[1.15]">
            {t('alignment_loop.title_line1')}{' '}
            <em>{t('alignment_loop.title_em')}</em>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* SVG loop diagram */}
          <div className="flex-shrink-0 sr relative" style={{ transitionDelay: '100ms' }}>
            <svg viewBox="-50 -10 500 420" width="340" height="340" style={{ maxWidth: '100%' }}>
              {/* Rotating dashed track — signals the loop never stops */}
              <circle
                cx={CX} cy={CY} r={R}
                fill="none"
                stroke="rgba(246,241,232,0.14)"
                strokeWidth="1"
                strokeDasharray="4 6"
                style={{
                  transformOrigin: `${CX}px ${CY}px`,
                  animation: 'loop-spin 34s linear infinite',
                }}
              />

              {/* Traveling pulse dot — walks the loop continuously */}
              <circle r="4" fill="#D99A73" opacity="0.9">
                <animateMotion
                  dur="9s"
                  repeatCount="indefinite"
                  path={`M ${nodePos(-90).x} ${nodePos(-90).y}
                         A ${R} ${R} 0 0 1 ${nodePos(0).x} ${nodePos(0).y}
                         A ${R} ${R} 0 0 1 ${nodePos(90).x} ${nodePos(90).y}
                         A ${R} ${R} 0 0 1 ${nodePos(180).x} ${nodePos(180).y}
                         A ${R} ${R} 0 0 1 ${nodePos(-90).x} ${nodePos(-90).y}`}
                />
              </circle>

              {/* Connecting arcs between nodes */}
              {NODES.map((node, i) => {
                const next = NODES[(i + 1) % NODES.length]
                const p1 = nodePos(node.angle)
                const p2 = nodePos(next.angle)
                const mx = (p1.x + p2.x) / 2
                const my = (p1.y + p2.y) / 2
                const dx = mx - CX
                const dy = my - CY
                const len = Math.sqrt(dx * dx + dy * dy)
                const cpx = mx + (dx / len) * 20
                const cpy = my + (dy / len) * 20
                return (
                  <path
                    key={node.id}
                    d={`M ${p1.x} ${p1.y} Q ${cpx} ${cpy} ${p2.x} ${p2.y}`}
                    fill="none"
                    stroke="rgba(217,154,115,0.3)"
                    strokeWidth="1.5"
                  />
                )
              })}

              {/* Arrow head at end of last arc pointing toward awareness */}
              {(() => {
                const last = NODES[NODES.length - 1]
                const first = NODES[0]
                const p1 = nodePos(last.angle)
                const p2 = nodePos(first.angle)
                const angle = Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI
                return (
                  <polygon
                    points="-5,-3 5,0 -5,3"
                    fill="rgba(217,154,115,0.5)"
                    transform={`translate(${p2.x},${p2.y}) rotate(${angle})`}
                  />
                )
              })()}

              {/* Node dots and labels */}
              {NODES.map((node, i) => {
                const { x, y } = nodePos(node.angle)
                const labelOffset = {
                  '-90': { dx: 0, dy: -20, anchor: 'middle' },
                  '0':   { dx: 22, dy: 5,  anchor: 'start' },
                  '90':  { dx: 0, dy: 22,  anchor: 'middle' },
                  '180': { dx: -22, dy: 5, anchor: 'end' },
                }[String(node.angle)] ?? { dx: 0, dy: -20, anchor: 'middle' }

                return (
                  <g key={node.id}>
                    <circle cx={x} cy={y} r={12} fill={node.color} opacity="0.15">
                      <animate
                        attributeName="r"
                        values="12;16;12"
                        dur="2.4s"
                        begin={`${i * 0.5}s`}
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle cx={x} cy={y} r={8} fill={node.color} opacity="0.9" />
                    <text
                      x={x + labelOffset.dx}
                      y={y + labelOffset.dy}
                      textAnchor={labelOffset.anchor as any}
                      fill="rgba(246,241,232,0.75)"
                      fontSize="11"
                      fontFamily="var(--font-sans)"
                      letterSpacing="0.03em"
                    >
                      {node.label}
                    </text>
                  </g>
                )
              })}

              {/* Center label */}
              <text x={CX} y={CY - 8} textAnchor="middle" fill="rgba(246,241,232,0.3)" fontSize="10" fontFamily="var(--font-sans)" letterSpacing="0.12em">{t('alignment_loop.center_repeat')}</text>
              <text x={CX} y={CY + 8} textAnchor="middle" fill="rgba(246,241,232,0.15)" fontSize="9" fontFamily="var(--font-sans)">{t('alignment_loop.center_every_day')}</text>
            </svg>
          </div>

          {/* Node descriptions */}
          <div className="flex-1 flex flex-col gap-5">
            {NODES.map((node, i) => (
              <div
                key={node.id}
                className="sr flex items-start gap-4"
                style={{ transitionDelay: `${i * 80 + 150}ms` }}
              >
                <div
                  className="mt-1 w-3 h-3 rounded-full flex-shrink-0"
                  style={{ background: node.color, opacity: 0.85 }}
                />
                <div>
                  <p className="font-sans text-[13px] font-medium text-ivory/80 mb-1">{node.label}</p>
                  <p className="font-sans text-[14px] text-ivory/45 leading-relaxed">{node.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
