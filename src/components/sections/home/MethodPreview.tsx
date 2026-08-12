import { getLocale, getTranslations } from 'next-intl/server'
import FadeInSection from '@/components/ui/FadeInSection'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'
import { methodContent } from '@/content/pages/method'
import type { Locale } from '@/content/types'

export default async function MethodPreview() {
  const locale = (await getLocale()) as Locale
  const tCta = await getTranslations('cta')
  const tNav = await getTranslations('nav')
  const c = methodContent[locale]

  return (
    <section className="py-20 md:py-28 bg-ink-alt border-b border-ink-border">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <SectionTitle kicker={tNav('method')} title={locale === 'es' ? 'El Método Henao Intelligence' : 'The Henao Intelligence Method'} />
        </FadeInSection>
        <div className="flex flex-wrap gap-3">
          {c.steps.map((step, idx) => (
            <FadeInSection key={step.number} delay={idx * 60} className="flex items-center">
              <span className="section-card card-edge px-4 py-2 text-sm font-medium flex items-center gap-2">
                <span className="font-mono text-brass text-xs">{step.number}</span>
                {step.title}
              </span>
              {idx < c.steps.length - 1 && <span className="mx-2 text-[#9298a3]">→</span>}
            </FadeInSection>
          ))}
        </div>
        <div className="mt-10">
          <Button href="/method" variant="ghost">
            {locale === 'es' ? 'Ver el método completo' : 'See the full method'} →
          </Button>
        </div>
      </div>
    </section>
  )
}
