import { notFound } from 'next/navigation'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'
import Image from 'next/image'
import FadeInSection from '@/components/ui/FadeInSection'
import ClassificationBadge from '@/components/ui/ClassificationBadge'
import StatTile from '@/components/ui/StatTile'
import Button from '@/components/ui/Button'
import { caseStudies, getCaseStudy } from '@/content/case-studies'
import { routing } from '@/i18n/routing'
import { buildAlternates } from '@/lib/seo'
import type { Locale } from '@/content/types'

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    caseStudies.map((cs) => ({ locale, slug: cs.slug }))
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const cs = getCaseStudy(slug)
  if (!cs) return {}
  const content = cs.content[locale as Locale]
  return {
    title: content.title,
    description: content.subtitle,
    alternates: buildAlternates(locale, `/case-studies/${slug}`),
    openGraph: { title: content.title, description: content.subtitle },
    twitter: { title: content.title, description: content.subtitle },
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  setRequestLocale(locale)
  const loc = locale as Locale

  const cs = getCaseStudy(slug)
  if (!cs) notFound()

  const content = cs.content[loc]
  const isSimulated = cs.classification === 'simulated'

  const tBadges = await getTranslations('badges')
  const tCta = await getTranslations('cta')
  const tCategories = await getTranslations('categories')
  const tCaseStudy = await getTranslations('caseStudy')

  const field = (label: string, value: string) => (
    <FadeInSection>
      <div className="border-t border-ink-border pt-6">
        <h2 className="font-mono text-xs uppercase tracking-wide text-brass mb-3">{label}</h2>
        <p className="text-[#c9c5bb] leading-relaxed max-w-3xl">{value}</p>
      </div>
    </FadeInSection>
  )

  return (
    <article className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
      {/* Hero */}
      <FadeInSection>
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span className="font-mono text-xs uppercase tracking-wide text-slate">
            {tCategories(cs.category)}
          </span>
          <ClassificationBadge
            classification={cs.classification}
            label={tBadges(isSimulated ? 'simulated' : 'personal')}
          />
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-semibold max-w-4xl text-balance mb-5">
          {content.title}
        </h1>
        <p className="text-lg text-[#9298a3] max-w-2xl leading-relaxed mb-10">{content.subtitle}</p>

        {cs.headlineStats.length > 0 && (
          <div className="flex flex-wrap gap-x-12 gap-y-6 mb-14 pb-10 border-b border-ink-border">
            {cs.headlineStats.map((stat) => (
              <StatTile key={stat.label[loc]} value={stat.value} label={stat.label[loc]} />
            ))}
          </div>
        )}
      </FadeInSection>

      {/* Executive summary */}
      <FadeInSection>
        <div className="section-card card-edge p-6 md:p-8 mb-14 border-l-2 border-l-brass">
          <p className="text-lg text-[#ece9e2] leading-relaxed">{content.executiveSummary}</p>
        </div>
      </FadeInSection>

      <div className="space-y-8 max-w-3xl">
        {field(isSimulated ? tCaseStudy('context') : tCaseStudy('contextPersonal'), content.context)}
        {field(tCaseStudy('problem'), content.problem)}
        {field(tCaseStudy('data'), content.data)}
        {field(tCaseStudy('methodology'), content.methodology)}
        {field(tCaseStudy('evidence'), content.evidence)}
      </div>

      {/* Visual analytics */}
      <FadeInSection>
        <div className="border-t border-ink-border pt-6 mt-8">
          <h2 className="font-mono text-xs uppercase tracking-wide text-brass mb-5">
            {tCaseStudy('visualAnalytics')}
          </h2>
          {cs.images.length > 0 ? (
            <div className="grid sm:grid-cols-2 gap-4">
              {cs.images.map((img) => (
                <figure key={img.src} className="group section-card card-edge overflow-hidden">
                  <div className="overflow-hidden">
                    <Image
                      src={img.src}
                      alt={img.alt[loc]}
                      width={800}
                      height={600}
                      className="w-full h-auto transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <figcaption className="px-4 py-2.5 text-xs text-[#9298a3]">{img.alt[loc]}</figcaption>
                </figure>
              ))}
            </div>
          ) : (
            <p className="text-sm text-[#5a616c] italic border border-dashed border-ink-border p-6 card-edge max-w-md">
              {tCaseStudy('evidencePending')}
            </p>
          )}
        </div>
      </FadeInSection>

      <div className="space-y-8 max-w-3xl mt-8">
        {field(tCaseStudy('findings'), content.findings)}
        {field(isSimulated ? tCaseStudy('relevance') : tCaseStudy('relevancePersonal'), content.relevance)}
      </div>

      {/* Recommendations */}
      <FadeInSection>
        <div className="border-t border-ink-border pt-6 mt-8">
          <h2 className="font-mono text-xs uppercase tracking-wide text-brass mb-5">
            {tCaseStudy('recommendations')}
          </h2>
          <div className="grid sm:grid-cols-3 gap-px bg-ink-border border border-ink-border">
            {[
              { label: tCaseStudy('immediate'), value: content.recommendations.immediate },
              { label: tCaseStudy('mediumTerm'), value: content.recommendations.mediumTerm },
              { label: tCaseStudy('longTerm'), value: content.recommendations.longTerm },
            ].map((r) => (
              <div key={r.label} className="bg-ink p-5">
                <p className="font-mono text-[0.65rem] uppercase tracking-wide text-moss mb-2">{r.label}</p>
                <p className="text-sm text-[#c9c5bb] leading-relaxed">{r.value}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>

      <div className="max-w-3xl mt-8">
        {field(tCaseStudy('technicalEvidence'), content.technicalEvidence)}
      </div>

      {/* Tech stack + repository */}
      <FadeInSection>
        <div className="border-t border-ink-border pt-6 mt-8 flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-slate mb-3">
              {tCaseStudy('technologies')}
            </p>
            <div className="flex flex-wrap gap-2">
              {cs.technologies.map((tech) => (
                <span key={tech} className="font-mono text-xs border border-ink-border px-2.5 py-1 card-edge text-[#9298a3]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          {cs.repository ? (
            <Button href={cs.repository} external variant="secondary">
              {tCta('viewRepository')}
            </Button>
          ) : (
            <span className="font-mono text-xs text-[#5a616c] italic">{tCta('repositoryPending')}</span>
          )}
        </div>
      </FadeInSection>

      {/* Closing CTA */}
      <FadeInSection>
        <div className="mt-20 pt-10 border-t border-ink-border text-center">
          <p className="font-display text-2xl font-semibold mb-6 max-w-xl mx-auto text-balance">
            {loc === 'es' ? '¿Le interesa resolver un problema similar?' : 'Interested in a similar problem?'}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">{tCta('startConversation')}</Button>
            <Button href="/case-studies" variant="ghost">{tCta('backToCaseStudies')}</Button>
          </div>
        </div>
      </FadeInSection>
    </article>
  )
}
