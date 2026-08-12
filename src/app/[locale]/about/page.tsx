import { getTranslations, setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'
import { FileText, Download } from 'lucide-react'
import FadeInSection from '@/components/ui/FadeInSection'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'
import JourneyTimeline from '@/components/visuals/JourneyTimeline'
import { aboutContent, CV_PATH } from '@/content/pages/about'
import { education } from '@/data/education'
import { buildAlternates } from '@/lib/seo'
import type { Locale } from '@/content/types'

const categoryLabels: Record<Locale, Record<string, string>> = {
  en: {
    datos: 'Data & Business Intelligence',
    ml: 'Machine Learning & AI',
    programacion: 'Programming',
    seguridad: 'Security',
    otros: 'Other',
  },
  es: {
    datos: 'Datos y Business Intelligence',
    ml: 'Machine Learning e IA',
    programacion: 'Programación',
    seguridad: 'Seguridad',
    otros: 'Otros',
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const c = aboutContent[locale as Locale]
  const title = c.title
  const description = c.companyParagraphs[0]
  return {
    title,
    description,
    alternates: buildAlternates(locale, '/about'),
    openGraph: { title, description },
  }
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const loc = locale as Locale
  const c = aboutContent[loc]
  const tCta = await getTranslations('cta')

  const degree = education.find((e) => e.type === 'degree')
  const certsByCategory = education
    .filter((e) => e.type === 'certification' && e.category)
    .reduce<Record<string, typeof education>>((acc, item) => {
      const key = item.category as string
      acc[key] = acc[key] ? [...acc[key], item] : [item]
      return acc
    }, {})

  return (
    <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
      <FadeInSection>
        <SectionTitle as="h1" kicker={c.kicker} title={c.title} />
      </FadeInSection>

      {/* Company */}
      <div className="grid lg:grid-cols-[1fr_320px] gap-x-16 gap-y-12 mb-20">
        <div>
          <div className="max-w-2xl space-y-6">
            {c.companyParagraphs.map((p, idx) => (
              <FadeInSection key={idx} delay={idx * 80}>
                <p className="text-[#c9c5bb] leading-relaxed text-lg">{p}</p>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection>
            <div className="max-w-2xl border-l-2 border-brass pl-6 mt-10">
              <h2 className="font-display text-xl font-semibold mb-2">{c.evolutionTitle}</h2>
              <p className="text-[#9298a3] leading-relaxed">{c.evolutionBody}</p>
            </div>
          </FadeInSection>
        </div>

        <div className="hidden lg:block pt-1">
          <p className="font-mono text-[0.65rem] uppercase tracking-wide text-slate mb-8">
            {loc === 'es' ? 'Trayectoria' : 'Trajectory'}
          </p>
          <JourneyTimeline locale={loc} />
        </div>
      </div>

      {/* Founder */}
      <FadeInSection>
        <section className="border-t border-ink-border pt-10 mb-20">
          <span className="font-mono text-xs uppercase tracking-wide text-slate">{c.founderKicker}</span>
          <div className="mt-4 section-card card-edge p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
            <div className="flex-1">
              <h2 className="font-display text-2xl font-semibold text-[#ece9e2]">{c.founderName}</h2>
              <p className="font-mono text-xs uppercase tracking-wide text-brass mt-1 mb-4">{c.founderRole}</p>
              <p className="text-[#9298a3] leading-relaxed max-w-2xl">{c.founderBio}</p>
            </div>
            <div className="flex sm:flex-row flex-col gap-3 shrink-0">
              <Button href={CV_PATH} external variant="secondary">
                <FileText size={16} /> {c.founderCta.view}
              </Button>
              <a
                href={CV_PATH}
                download="Miguel_Henao_CV_DataAnalyst_2026.pdf"
                aria-label={c.founderCta.download}
                className="inline-flex items-center gap-2 px-6 py-3 card-edge bg-brass text-ink font-semibold hover:bg-brass/90 hover:-translate-y-0.5 transition-[background-color,transform] duration-200"
              >
                <Download size={16} /> {c.founderCta.download}
              </a>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Credentials */}
      <FadeInSection>
        <section className="border-t border-ink-border pt-10">
          <h2 className="font-display text-2xl font-semibold mb-2">{c.credentialsTitle}</h2>
          <p className="text-[#9298a3] mb-8">{c.credentialsBody}</p>

          {degree && (
            <div className="mb-8 p-4 section-card card-edge">
              <p className="font-semibold text-[#ece9e2]">{degree.degree}</p>
              <p className="text-sm text-[#9298a3]">{degree.institution} · {degree.year}</p>
            </div>
          )}

          <div className="space-y-3">
            {Object.entries(certsByCategory).map(([category, items]) => (
              <details key={category} className="section-card card-edge p-4 group">
                <summary className="cursor-pointer font-mono text-xs uppercase tracking-wide text-slate flex items-center justify-between">
                  {categoryLabels[loc][category] ?? category}
                  <span className="text-[#9298a3] font-sans normal-case">{items.length}</span>
                </summary>
                <ul className="mt-4 space-y-1.5 text-sm text-[#9298a3]">
                  {items.map((item) => (
                    <li key={item.degree} className="flex items-baseline justify-between gap-4">
                      <span>
                        {item.pdfUrl ? (
                          <a
                            href={encodeURI(item.pdfUrl)}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${loc === 'es' ? 'Ver certificado PDF' : 'View certificate PDF'}: ${item.degree}`}
                            className="hover:text-brass underline decoration-dotted underline-offset-2 transition-colors"
                          >
                            {item.degree}
                          </a>
                        ) : (
                          item.degree
                        )}{' '}
                        <span className="text-[#5a616c]">— {item.institution}</span>
                      </span>
                      <span className="font-mono text-xs shrink-0">{item.year}</span>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <div className="mt-16">
          <Button href="/contact" variant="primary" size="lg">
            {tCta('startConversation')}
          </Button>
        </div>
      </FadeInSection>
    </div>
  )
}
