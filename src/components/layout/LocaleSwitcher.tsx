'use client'

import { useLocale, useTranslations } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'

/**
 * Every route in this app is defined once and rendered for both locales
 * (no per-locale slug translation), so swapping the locale on the current
 * pathname always resolves to the equivalent localized page.
 */
export default function LocaleSwitcher() {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const t = useTranslations('nav')

  return (
    <div className="flex items-center gap-1 font-mono text-xs" aria-label={t('language')}>
      {routing.locales.map((loc, idx) => (
        <span key={loc} className="flex items-center">
          {idx > 0 && <span className="text-[#9298a3] mx-1">/</span>}
          <button
            type="button"
            onClick={() => router.replace(pathname, { locale: loc })}
            aria-current={loc === locale ? 'true' : undefined}
            className={
              loc === locale
                ? 'text-brass uppercase'
                : 'text-[#9298a3] hover:text-[#ece9e2] uppercase transition-colors'
            }
          >
            {loc}
          </button>
        </span>
      ))}
    </div>
  )
}
