import { getLocale, getTranslations } from 'next-intl/server'
import FadeInSection from '@/components/ui/FadeInSection'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'
import { servicesContent } from '@/content/pages/services'
import type { Locale } from '@/content/types'

export default async function PillarsPreview() {
  const locale = (await getLocale()) as Locale
  const tCta = await getTranslations('cta')
  const c = servicesContent[locale]

  return (
    <section className="py-20 md:py-28 border-b border-ink-border">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <SectionTitle
            kicker={locale === 'es' ? 'Problemas de Negocio que Investigamos' : 'Business Problems We Investigate'}
            title={locale === 'es' ? 'Tres ejemplos, respaldados por evidencia' : 'Three examples, backed by evidence'}
          />
        </FadeInSection>
        <div className="grid md:grid-cols-3 gap-px bg-ink-border border border-ink-border">
          {c.pillars.map((pillar, idx) => (
            <FadeInSection key={pillar.slug} delay={idx * 100} className="bg-ink">
              <div className="p-7 h-full flex flex-col gap-3">
                <span className="font-mono text-[0.65rem] uppercase tracking-wide text-slate">
                  {pillar.kicker}
                </span>
                <h3 className="font-display text-xl font-semibold">{pillar.title}</h3>
                <p className="text-sm text-[#9298a3] leading-relaxed flex-1">{pillar.businessProblem}</p>
                <Button href={`/services#${pillar.slug}`} variant="ghost" size="sm">
                  {locale === 'es' ? 'Ver servicio →' : 'View service →'}
                </Button>
              </div>
            </FadeInSection>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Button href="/services" variant="secondary">
            {tCta('exploreServices')}
          </Button>
          <Button href="/services#capabilities" variant="ghost" size="sm">
            {locale === 'es' ? 'Estos son ejemplos — ver todas las capacidades →' : "These are examples — see the full range of capabilities →"}
          </Button>
        </div>
      </div>
    </section>
  )
}
