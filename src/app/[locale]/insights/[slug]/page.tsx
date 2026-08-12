import { notFound } from 'next/navigation'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'
import FadeInSection from '@/components/ui/FadeInSection'
import Button from '@/components/ui/Button'
import { insights, getInsight } from '@/content/insights'
import { routing } from '@/i18n/routing'
import { buildAlternates } from '@/lib/seo'
import type { Locale } from '@/content/types'

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    insights.map((i) => ({ locale, slug: i.slug }))
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const insight = getInsight(slug)
  if (!insight) return {}
  const content = insight.content[locale as Locale]
  return {
    title: content.title,
    description: content.dek,
    alternates: buildAlternates(locale, `/insights/${slug}`),
    openGraph: { title: content.title, description: content.dek },
    twitter: { title: content.title, description: content.dek },
  }
}

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  setRequestLocale(locale)
  const loc = locale as Locale
  const insight = getInsight(slug)
  if (!insight) notFound()
  const content = insight.content[loc]
  const tCta = await getTranslations('cta')

  return (
    <article className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
      <FadeInSection>
        <div className="flex items-center gap-2 flex-wrap mb-6">
          {insight.tags.map((tag) => (
            <span key={tag} className="font-mono text-[0.65rem] uppercase text-slate border border-ink-border px-2 py-0.5 card-edge">
              {tag}
            </span>
          ))}
          <span className="font-mono text-[0.65rem] text-[#5a616c]">{insight.readingTime}</span>
        </div>
        <h1 className="font-display text-3xl md:text-4xl font-semibold max-w-3xl text-balance mb-5">
          {content.title}
        </h1>
        <p className="text-lg text-[#9298a3] max-w-2xl leading-relaxed mb-12">{content.dek}</p>
      </FadeInSection>

      <div className="max-w-2xl space-y-6">
        {content.body.map((paragraph, idx) => (
          <FadeInSection key={idx} delay={idx * 60}>
            <p className="text-[#c9c5bb] leading-relaxed text-lg">{paragraph}</p>
          </FadeInSection>
        ))}
      </div>

      <FadeInSection>
        <div className="mt-16 pt-10 border-t border-ink-border">
          <Button href="/insights" variant="ghost">
            ← {tCta('allInsights')}
          </Button>
        </div>
      </FadeInSection>
    </article>
  )
}
