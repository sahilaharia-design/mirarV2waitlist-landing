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
  { icon: Heart,          dark: false },
  { icon: LayoutGrid,     dark: false },
  { icon: RefreshCw,      dark: false },
  { icon: BookOpen,       dark: false },
  { icon: Network,        dark: false },
  { icon: InnerStateIcon, dark: true  },
]

export default function TheGap() {
  const { t, tList } = useTranslation()
  const domains = tList('the_gap.domains').map((d: any, i: number) => ({ ...d, ...DOMAIN_META[i] }))
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-ivory">
      <div className="max-w-container mx-auto px-6">

        <div className="max-w-2xl mb-10 sr sr-header">
          <h2 className="font-serif text-4xl sm:text-5xl font-light leading-[1.1] text-charcoal mb-5">
            {t('the_gap.title_line1')}{' '}
            <em>{t('the_gap.title_em')}</em>
          </h2>
          <p className="font-sans text-base text-text-secondary leading-relaxed">
            {t('the_gap.body')}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {domains.map((d, i) => {
            const Icon = d.icon
            if (d.dark) {
              return (
                <motion.div
                  key={d.label}
                  className={`sr sr-d${Math.min(i + 1, 6)} rounded-2xl p-6 flex flex-col gap-3 border border-transparent shadow-xl col-span-2 sm:col-span-1 bg-dark-section text-ivory`}
                  whileHover={{ scale: 1.025 }}
                  transition={{ type: 'spring', stiffness: 340, damping: 22 }}
                >
                  <div className="text-ivory/60">
                    <Icon />
                  </div>
                  <p className="font-serif text-lg font-medium leading-snug text-ivory">
                    {d.label}
                  </p>
                  <p className="font-sans text-base text-ivory/50 font-light tracking-wide leading-relaxed">
                    {d.system}
                  </p>
                </motion.div>
              )
            }
            return (
              <motion.div
                key={d.label}
                className={`sr sr-d${Math.min(i + 1, 6)} rounded-2xl p-6 flex flex-col gap-3 border border-charcoal/5 bg-card-bg text-charcoal`}
                whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(28,26,23,0.09)', borderColor: 'rgba(28,26,23,0.1)' }}
                transition={{ type: 'spring', stiffness: 350, damping: 20 }}
              >
                <div className="text-charcoal/30">
                  <Icon size={20} />
                </div>
                <p className="font-serif text-lg font-medium leading-snug text-charcoal">
                  {d.label}
                </p>
                <p className="font-sans text-sm leading-relaxed text-text-secondary">
                  {d.system}
                </p>
              </motion.div>
            )
          })}
        </div>

        <p className="mt-10 font-serif text-xl font-light italic text-charcoal/50 sr" style={{ transitionDelay: '480ms' }}>
          {t('the_gap.footer')}
        </p>

      </div>
    </section>
  )
}
