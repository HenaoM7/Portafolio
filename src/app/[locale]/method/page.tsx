import { getTranslations, setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'
import FadeInSection from '@/components/ui/FadeInSection'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'
import MethodFlow from '@/components/visuals/MethodFlow'
import { methodContent } from '@/content/pages/method'
import { buildAlternates } from '@/lib/seo'
import type { Locale } from '@/content/types'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const c = methodContent[locale as Locale]
  const title = locale === 'es' ? 'Método' : 'Method'
  return {
    title,
    description: c.intro,
    alternates: buildAlternates(locale, '/method'),
    openGraph: { title, description: c.intro },
  }
}

export default async function MethodPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const loc = locale as Locale
  const c = methodContent[loc]
  const tCta = await getTranslations('cta')

  return (
    <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
      <FadeInSection>
        <SectionTitle
          as="h1"
          kicker={loc === 'es' ? 'Método' : 'Method'}
          title={loc === 'es' ? 'El Método Henao Intelligence' : 'The Henao Intelligence Method'}
        />
        <p className="text-lg text-[#9298a3] max-w-2xl leading-relaxed -mt-4 mb-16">{c.intro}</p>
      </FadeInSection>

      <MethodFlow steps={c.steps} />

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
