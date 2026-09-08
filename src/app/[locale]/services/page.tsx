import { getTranslations, setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'
import FadeInSection from '@/components/ui/FadeInSection'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'
import ValidationMatrix from '@/components/visuals/ValidationMatrix'
import SignalField from '@/components/visuals/SignalField'
import ValueFlow from '@/components/visuals/ValueFlow'
import { servicesContent } from '@/content/pages/services'
import { buildAlternates } from '@/lib/seo'
import type { Locale } from '@/content/types'

const pillarVisuals: Record<string, React.ComponentType<{ locale: Locale }>> = {
  'data-quality': ValidationMatrix,
  'fraud-risk': SignalField,
  profitability: ValueFlow,
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const c = servicesContent[locale as Locale]
  const title = locale === 'es' ? 'Servicios' : 'Services'
  return {
    title,
    description: c.intro,
    alternates: buildAlternates(locale, '/services'),
    openGraph: { title, description: c.intro },
  }
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const loc = locale as Locale
  const c = servicesContent[loc]
  const tCta = await getTranslations('cta')

  return (
    <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
      <FadeInSection>
        <SectionTitle
          as="h1"
          kicker={loc === 'es' ? 'Servicios' : 'Services'}
          title={loc === 'es' ? 'Investigamos primero. Construimos después.' : 'We investigate first. We build second.'}
        />
        <p className="text-lg text-[#9298a3] max-w-3xl leading-relaxed -mt-4 mb-16">{c.intro}</p>
      </FadeInSection>

      {/* Business problems we investigate */}
      <div className="mb-6">
        <span className="font-mono text-xs uppercase tracking-wide text-brass">{c.problemsKicker}</span>
        <p className="text-[#9298a3] mt-2 max-w-2xl">{c.problemsIntro}</p>
      </div>

      <div className="space-y-24">
        {c.pillars.map((pillar, idx) => {
          const Visual = pillarVisuals[pillar.slug]
          const reversed = idx % 2 === 1
          return (
            <FadeInSection key={pillar.slug}>
              <section id={pillar.slug} className="scroll-mt-28 border-t border-ink-border pt-10">
                <div className={`flex flex-col gap-y-10 lg:gap-x-16 ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                  <div className="flex-1">
                    <span className="font-mono text-xs uppercase tracking-wide text-slate">{pillar.kicker}</span>
                    <h2 className="font-display text-3xl font-semibold mt-2 mb-8">{pillar.title}</h2>
                    <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
                      <div>
                        <p className="font-mono text-[0.68rem] uppercase tracking-wide text-brass mb-1.5">
                          {loc === 'es' ? 'Problema de Negocio' : 'Business Problem'}
                        </p>
                        <p className="text-[#c9c5bb] leading-relaxed">{pillar.businessProblem}</p>
                      </div>
                      <div>
                        <p className="font-mono text-[0.68rem] uppercase tracking-wide text-brass mb-1.5">
                          {loc === 'es' ? 'Qué Investigamos' : 'What We Investigate'}
                        </p>
                        <p className="text-[#c9c5bb] leading-relaxed">{pillar.whatWeInvestigate}</p>
                      </div>
                      <div>
                        <p className="font-mono text-[0.68rem] uppercase tracking-wide text-brass mb-1.5">
                          {loc === 'es' ? 'Qué Entregamos' : 'What We Deliver'}
                        </p>
                        <p className="text-[#c9c5bb] leading-relaxed">{pillar.whatWeDeliver}</p>
                      </div>
                      <div>
                        <p className="font-mono text-[0.68rem] uppercase tracking-wide text-brass mb-1.5">
                          {loc === 'es' ? 'Decisión Habilitada' : 'Decision Enabled'}
                        </p>
                        <p className="text-[#c9c5bb] leading-relaxed">{pillar.decisionEnabled}</p>
                      </div>
                    </div>
                    <div className="mt-8">
                      <Button href={`/case-studies/${pillar.caseStudySlug}`} variant="ghost">
                        {tCta('exploreCaseStudy')} →
                      </Button>
                    </div>
                  </div>
                  <div className="hidden lg:flex items-start justify-center pt-14 w-[280px] shrink-0">
                    {Visual && <Visual locale={loc} />}
                  </div>
                </div>
              </section>
            </FadeInSection>
          )
        })}
      </div>

      {/* Solution capabilities */}
      <FadeInSection>
        <section id="capabilities" className="scroll-mt-28 border-t border-ink-border pt-10 mt-24">
          <span className="font-mono text-xs uppercase tracking-wide text-brass">{c.capabilitiesKicker}</span>
          <h2 className="font-display text-2xl font-semibold mt-2 mb-3">{c.capabilitiesTitle}</h2>
          <p className="text-[#9298a3] max-w-2xl mb-10">{c.capabilitiesIntro}</p>
          <div className="grid md:grid-cols-3 gap-10">
            {c.capabilityGroups.map((group) => (
              <div key={group.title}>
                <p className="font-mono text-xs uppercase tracking-wide text-slate mb-4">{group.title}</p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-xs border border-ink-border px-2.5 py-1 card-edge text-[#c9c5bb]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeInSection>

      {/* Beyond the three — method flexibility */}
      <FadeInSection>
        <section className="border-t border-ink-border pt-10 mt-24">
          <span className="font-mono text-xs uppercase tracking-wide text-brass">{c.flexibilityKicker}</span>
          <h2 className="font-display text-2xl font-semibold mt-2 mb-3">{c.flexibilityTitle}</h2>
          <p className="text-[#9298a3] max-w-2xl mb-10">{c.flexibilityIntro}</p>
          <div className="grid md:grid-cols-3 gap-px bg-ink-border border border-ink-border">
            {c.examples.map((ex) => (
              <div key={ex.clientProblem} className="bg-ink p-6 flex flex-col gap-3">
                <p className="font-display text-lg italic text-[#ece9e2]">{ex.clientProblem}</p>
                <p className="font-mono text-[0.62rem] uppercase tracking-wide text-slate">{ex.path}</p>
                <p className="text-sm text-[#9298a3] leading-relaxed">{ex.solution}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button href="/method" variant="ghost">
              {loc === 'es' ? 'Ver el método completo →' : 'See the full method →'}
            </Button>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <div className="mt-16 flex flex-wrap items-center gap-6">
          <Button href="/contact#diagnostic" variant="primary" size="lg">
            {tCta('requestDiagnostic')}
          </Button>
          <Button href="/pricing" variant="ghost">
            {loc === 'es' ? 'Ver planes y precios →' : 'See plans and pricing →'}
          </Button>
        </div>
      </FadeInSection>
    </div>
  )
}
