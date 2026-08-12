import { getTranslations, setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'
import FadeInSection from '@/components/ui/FadeInSection'
import SectionTitle from '@/components/ui/SectionTitle'
import { Link } from '@/i18n/navigation'
import { insights } from '@/content/insights'
import { buildAlternates } from '@/lib/seo'
import type { Locale } from '@/content/types'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const description =
    locale === 'es'
      ? 'Notas de las investigaciones — incluyendo las que no salieron como esperábamos.'
      : "Notes from the investigations — including the ones that didn't go the way we expected."
  return {
    title: 'Insights',
    description,
    alternates: buildAlternates(locale, '/insights'),
    openGraph: { title: 'Insights', description },
  }
}

export default async function InsightsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const loc = locale as Locale
  const tCta = await getTranslations('cta')

  return (
    <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
      <FadeInSection>
        <SectionTitle
          as="h1"
          kicker="Insights"
          title={loc === 'es' ? 'Notas de las investigaciones' : 'Notes from the investigations'}
        />
        <p className="text-lg text-[#9298a3] max-w-2xl leading-relaxed -mt-4 mb-14">
          {loc === 'es'
            ? 'Incluyendo las que no salieron como esperábamos.'
            : "Including the ones that didn't go the way we expected."}
        </p>
      </FadeInSection>
      <div className="grid sm:grid-cols-2 gap-6">
        {insights.map((insight) => {
          const content = insight.content[loc]
          return (
            <FadeInSection key={insight.slug}>
              <Link
                href={`/insights/${insight.slug}`}
                className="section-card card-edge p-6 flex flex-col gap-3 h-full hover:border-slate/50 transition-colors"
              >
                <div className="flex items-center gap-2 flex-wrap">
                  {insight.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[0.65rem] uppercase text-slate border border-ink-border px-2 py-0.5 card-edge">
                      {tag}
                    </span>
                  ))}
                  <span className="font-mono text-[0.65rem] text-[#5a616c] ml-auto">{insight.readingTime}</span>
                </div>
                <h2 className="font-display text-lg font-semibold">{content.title}</h2>
                <p className="text-sm text-[#9298a3] leading-relaxed flex-1">{content.dek}</p>
                <span className="text-sm font-medium text-brass border-b border-brass/30 self-start">
                  {tCta('readArticle')} →
                </span>
              </Link>
            </FadeInSection>
          )
        })}
      </div>
    </div>
  )
}
