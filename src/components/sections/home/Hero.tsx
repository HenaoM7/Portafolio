import { getTranslations, getLocale } from 'next-intl/server'
import HeroVisual from '@/components/three/HeroVisual'
import HeroContent from './HeroContent'
import { homeContent } from '@/content/pages/home'
import type { Locale } from '@/content/types'

export default async function Hero() {
  const locale = (await getLocale()) as Locale
  const tCta = await getTranslations('cta')
  const c = homeContent[locale]

  return (
    <section className="relative pt-40 pb-24 md:pt-48 md:pb-40 border-b border-ink-border overflow-hidden min-h-[92vh] flex items-center">
      <HeroVisual />
      {/* Ink gradient over the visual so text stays legible regardless of scene contents. */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/20 pointer-events-none"
        aria-hidden="true"
      />
      <HeroContent
        kicker={c.heroKicker}
        title={c.heroTitle}
        subtitle={c.heroSubtitle}
        primaryCta={tCta('startConversation')}
        secondaryCta={tCta('viewCaseStudies')}
      />
    </section>
  )
}
