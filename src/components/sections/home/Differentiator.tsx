import { getLocale } from 'next-intl/server'
import FadeInSection from '@/components/ui/FadeInSection'
import { homeContent } from '@/content/pages/home'
import type { Locale } from '@/content/types'

export default async function Differentiator() {
  const locale = (await getLocale()) as Locale
  const c = homeContent[locale]

  return (
    <section className="py-20 md:py-28 bg-ink-alt border-b border-ink-border">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="max-w-3xl border-l-2 border-brass pl-6 md:pl-10">
            <h2 className="font-display text-2xl md:text-3xl font-semibold mb-5">
              {c.differentiatorTitle}
            </h2>
            <p className="text-[#c9c5bb] text-lg leading-relaxed">{c.differentiatorBody}</p>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
