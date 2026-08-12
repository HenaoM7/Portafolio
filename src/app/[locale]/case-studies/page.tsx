import { setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'
import FadeInSection from '@/components/ui/FadeInSection'
import SectionTitle from '@/components/ui/SectionTitle'
import CaseStudiesGrid from '@/components/sections/CaseStudiesGrid'
import { caseStudies } from '@/content/case-studies'
import { buildAlternates } from '@/lib/seo'
import type { Locale } from '@/content/types'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const title = locale === 'es' ? 'Casos de Estudio' : 'Case Studies'
  const description =
    locale === 'es'
      ? 'Casos de negocio simulados y proyectos técnicos personales, cada uno con su clasificación de credibilidad visible.'
      : 'Simulated business cases and personal technical projects, each with its credibility classification shown visibly.'
  return {
    title,
    description,
    alternates: buildAlternates(locale, '/case-studies'),
    openGraph: { title, description },
  }
}

export default async function CaseStudiesPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const loc = locale as Locale

  return (
    <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
      <FadeInSection>
        <SectionTitle
          as="h1"
          kicker={loc === 'es' ? 'Casos de Estudio' : 'Case Studies'}
          title={loc === 'es' ? 'Investigaciones, no promesas' : 'Investigations, not promises'}
        />
        <p className="text-lg text-[#9298a3] max-w-2xl leading-relaxed -mt-4 mb-14">
          {loc === 'es'
            ? 'Tres casos de negocio simulados demuestran los tres servicios principales. Cinco proyectos técnicos personales demuestran capacidad de ingeniería y rigor metodológico. Cada tarjeta muestra su clasificación de credibilidad de forma visible — nunca en letra pequeña.'
            : 'Three simulated business cases demonstrate the three core services. Five personal technical projects demonstrate engineering capability and methodological rigor. Every card shows its credibility classification visibly — never in fine print.'}
        </p>
      </FadeInSection>
      <CaseStudiesGrid caseStudies={caseStudies} locale={loc} />
    </div>
  )
}
