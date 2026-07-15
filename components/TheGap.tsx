'use client'

import { motion } from 'framer-motion'
import { Heart, LayoutGrid, RefreshCw, BookOpen, Network } from 'lucide-react'
import { useTranslation } from '@/lib/i18n'

const InnerStateIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="2"   stroke="currentColor" strokeWidth="1.25"/>
    <circle cx="10" cy="10" r="5"   stroke="currentColor" strokeWidth="1.25" strokeOpacity="0.5"/>
    <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.25" strokeOpacity="0.2"/>
  </svg>
)

const DOMAIN_META = [
  { icon: Heart,          dark: false, accent: '#7C6FA0' },
  { icon: LayoutGrid,     dark: false, accent: '#C07840' },
  { icon: RefreshCw,      dark: false, accent: '#4A7CA8' },
  { icon: BookOpen,       dark: false, accent: '#6A9870' },
  { icon: Network,        dark: false, accent: '#A0884A' },
  { icon: InnerStateIcon, dark: true,  accent: '#B85A4A' },
]

export default function TheGap() {
  const { t, tList } = useTranslation()
  const domains = tList('the_gap.domains').map((d: any, i: number) => ({ ...d, ...DOMAIN_META[i] }))
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-ivory">
      <div className="max-w-container mx-auto px-6">

        <div className="max-w-2xl mb-10 sr sr-header">
          <h2 className="font-serif text-4xl sm:text-5xl font-medium leading-[1.1] text-charcoal mb-5">
            {t('the_gap.title_line1')}{' '}
            <em className="text-peach not-italic">{t('the_gap.title_em')}</em>
          </h2>
          <p className="font-sans text-base sm:text-lg text-text-secondary leading-relaxed">
            {t('the_gap.body')}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {domains.map((d, i) => {
            const Icon = d.icon
            if (d.dark) {
              return (
                <motion.div
                  key={i}
                  className={`sr sr-d${Math.min(i + 1, 6)} rounded-2xl p-6 flex flex-col gap-3 border-l-[3px] shadow-xl col-span-2 sm:col-span-1 bg-dark-section text-ivory`}
                  style={{ borderLeftColor: d.accent }}
                  whileHover={{ scale: 1.025 }}
                  transition={{ type: 'spring', stiffness: 340, damping: 22 }}
                >
                  <div style={{ color: d.accent }}>
                    <Icon />
                  </div>
                  <p className="font-serif text-lg font-medium leading-snug text-ivory">
                    {d.label}
                  </p>
                  <p className="font-sans text-base text-ivory/70 font-light tracking-wide leading-relaxed">
                    {d.system}
                  </p>
                </motion.div>
              )
            }
            return (
              <motion.div
                key={i}
                className={`sr sr-d${Math.min(i + 1, 6)} rounded-2xl p-6 flex flex-col gap-3 border-l-[3px] border-y border-r border-charcoal/5 bg-card-bg text-charcoal`}
                style={{ borderLeftColor: d.accent }}
                whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(28,26,23,0.09)', borderColor: 'rgba(28,26,23,0.1)' }}
                transition={{ type: 'spring', stiffness: 350, damping: 20 }}
              >
                <div style={{ color: d.accent }}>
                  <Icon size={20} />
                </div>
                <p className="font-serif text-lg font-medium leading-snug text-charcoal">
                  {d.label}
                </p>
                <p className="font-sans text-[15px] leading-relaxed text-text-secondary">
                  {d.system}
                </p>
              </motion.div>
            )
          })}
        </div>

        <p className="mt-10 font-serif text-xl italic text-charcoal/70 sr" style={{ transitionDelay: '480ms' }}>
          {t('the_gap.footer')}
        </p>

      </div>
    </section>
  )
}
