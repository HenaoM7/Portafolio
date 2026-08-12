import { getLocale, getTranslations } from 'next-intl/server'
import FadeInSection from '@/components/ui/FadeInSection'
import Button from '@/components/ui/Button'
import { homeContent } from '@/content/pages/home'
import type { Locale } from '@/content/types'

export default async function DiagnosticBanner() {
  const locale = (await getLocale()) as Locale
  const tCta = await getTranslations('cta')
  const c = homeContent[locale]

  return (
    <section className="py-16 md:py-20 border-b border-ink-border">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="section-card card-edge p-8 md:p-12 flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
            <div className="flex-1">
              <h2 className="font-display text-2xl font-semibold mb-3">{c.diagnosticTitle}</h2>
              <p className="text-[#9298a3] leading-relaxed">{c.diagnosticBody}</p>
            </div>
            <Button href="/contact#diagnostic" variant="primary" size="lg" className="shrink-0">
              {tCta('requestDiagnostic')}
            </Button>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
