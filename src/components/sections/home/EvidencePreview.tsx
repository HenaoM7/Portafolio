import { getLocale, getTranslations } from 'next-intl/server'
import FadeInSection from '@/components/ui/FadeInSection'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'
import CaseStudyCard from '@/components/ui/CaseStudyCard'
import { primaryCaseStudies } from '@/content/case-studies'
import type { Locale } from '@/content/types'

export default async function EvidencePreview() {
  const locale = (await getLocale()) as Locale
  const tCta = await getTranslations('cta')
  const tBadges = await getTranslations('badges')
  const tCategories = await getTranslations('categories')

  return (
    <section className="py-20 md:py-28 border-b border-ink-border">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <SectionTitle
            kicker={locale === 'es' ? 'Evidencia' : 'Evidence'}
            title={locale === 'es' ? 'Casos de estudio, no promesas' : 'Case studies, not promises'}
          />
        </FadeInSection>
        <div className="grid md:grid-cols-3 gap-6">
          {primaryCaseStudies.map((cs, idx) => (
            <FadeInSection key={cs.slug} delay={idx * 100}>
              <CaseStudyCard
                caseStudy={cs}
                title={cs.content[locale].title}
                subtitle={cs.content[locale].subtitle}
                classificationLabel={tBadges('simulated')}
                categoryLabel={tCategories(cs.category)}
                ctaLabel={tCta('exploreCaseStudy')}
              />
            </FadeInSection>
          ))}
        </div>
        <div className="mt-10">
          <Button href="/case-studies" variant="secondary">
            {tCta('viewCaseStudies')}
          </Button>
        </div>
      </div>
    </section>
  )
}
