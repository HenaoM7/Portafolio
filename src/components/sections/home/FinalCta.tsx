import { getLocale, getTranslations } from 'next-intl/server'
import { MapPin } from 'lucide-react'
import FadeInSection from '@/components/ui/FadeInSection'
import Button from '@/components/ui/Button'
import { homeContent } from '@/content/pages/home'
import type { Locale } from '@/content/types'

export default async function FinalCta() {
  const locale = (await getLocale()) as Locale
  const tCta = await getTranslations('cta')
  const c = homeContent[locale]

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeInSection>
          <h2 className="font-display text-3xl md:text-4xl font-semibold max-w-2xl mx-auto text-balance">
            {c.finalCtaTitle}
          </h2>
        </FadeInSection>
        <FadeInSection delay={100}>
          <div className="mt-8">
            <Button href="/contact" variant="primary" size="lg">
              {tCta('startConversation')}
            </Button>
          </div>
        </FadeInSection>
        <FadeInSection delay={180}>
          <p className="mt-8 flex items-center justify-center gap-2 text-sm text-[#9298a3]">
            <MapPin size={14} /> {c.finalCtaLocation}
          </p>
        </FadeInSection>
      </div>
    </section>
  )
}
