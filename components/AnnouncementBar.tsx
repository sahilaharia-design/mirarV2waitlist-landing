'use client'

import { useTranslation } from '@/lib/i18n'

export default function AnnouncementBar() {
  const { t } = useTranslation()
  return (
    <div className="bg-dark-section text-ivory/50 text-[11px] font-sans tracking-wide">
      <div className="max-w-container mx-auto px-4 sm:px-6 h-9 flex items-center justify-between gap-3">
        <span className="truncate min-w-0">
          <span className="hidden sm:inline">{t('announcement_bar.text_full')}</span>
          <span className="sm:hidden">{t('announcement_bar.text_short')}</span>
        </span>
        <a
          href="https://substack.com/@mirarlife"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-peach/70 hover:text-peach transition-colors duration-200 flex items-center gap-1 whitespace-nowrap"
        >
          <span className="hidden sm:inline">{t('announcement_bar.follow_full')}</span>
          <span className="sm:hidden">{t('announcement_bar.follow_short')}</span>
          <span aria-hidden> →</span>
        </a>
      </div>
    </div>
  )
}
