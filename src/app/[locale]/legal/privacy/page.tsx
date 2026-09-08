import { setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'
import FadeInSection from '@/components/ui/FadeInSection'
import SectionTitle from '@/components/ui/SectionTitle'
import { privacyContent } from '@/content/pages/legal'
import { buildAlternates } from '@/lib/seo'
import type { Locale } from '@/content/types'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const c = privacyContent[locale as Locale]
  return {
    title: c.title,
    alternates: buildAlternates(locale, '/legal/privacy'),
    robots: { index: true, follow: true },
  }
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const c = privacyContent[locale as Locale]

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
      <FadeInSection>
        <SectionTitle as="h1" kicker={c.kicker} title={c.title} />
        <p className="font-mono text-xs text-slate -mt-8 mb-8">{c.lastUpdated}</p>
        <p className="text-sm text-[#c9c5bb] leading-relaxed border-l-2 border-brass/40 pl-4 mb-6">
          {c.operatorLine}
        </p>
        <p className="text-xs text-[#787d87] leading-relaxed border-l-2 border-ink-border pl-4 mb-16">
          {c.disclaimer}
        </p>
      </FadeInSection>

      <div className="space-y-10">
        {c.sections.map((section) => (
          <FadeInSection key={section.heading}>
            <section className="border-t border-ink-border pt-8">
              <h2 className="font-display text-xl font-semibold text-[#ece9e2] mb-4">{section.heading}</h2>
              <div className="space-y-4">
                {section.paragraphs.map((p, i) => (
                  <p key={i} className="text-[#9298a3] leading-relaxed">{p}</p>
                ))}
              </div>
              {section.list && (
                <ul className="mt-4 space-y-2 list-disc list-inside">
                  {section.list.map((item) => (
                    <li key={item} className="text-[#9298a3] leading-relaxed">{item}</li>
                  ))}
                </ul>
              )}
            </section>
          </FadeInSection>
        ))}
      </div>
    </div>
  )
}
