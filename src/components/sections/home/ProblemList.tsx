import { getLocale } from 'next-intl/server'
import FadeInSection from '@/components/ui/FadeInSection'
import SectionTitle from '@/components/ui/SectionTitle'
import { homeContent } from '@/content/pages/home'
import type { Locale } from '@/content/types'

export default async function ProblemList() {
  const locale = (await getLocale()) as Locale
  const c = homeContent[locale]

  return (
    <section className="py-20 md:py-28 bg-ink-alt border-b border-ink-border">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <SectionTitle title={c.problemTitle} />
        </FadeInSection>
        <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-4 max-w-4xl">
          {c.problemItems.map((item, idx) => (
            <FadeInSection key={item} delay={idx * 60}>
              <li className="flex items-start gap-3 text-[#c9c5bb]">
                <span className="text-brass mt-1.5 text-xs">▸</span>
                <span>{item}</span>
              </li>
            </FadeInSection>
          ))}
        </ul>
      </div>
    </section>
  )
}
