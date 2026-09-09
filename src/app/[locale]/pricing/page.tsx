import { setRequestLocale, getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import { Check, Minus, X } from 'lucide-react'
import FadeInSection from '@/components/ui/FadeInSection'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'
import { pricingContent, type FeatureState } from '@/content/pages/pricing'
import { buildAlternates } from '@/lib/seo'
import type { Locale } from '@/content/types'
import { cn } from '@/lib/utils'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const c = pricingContent[locale as Locale]
  return {
    title: c.title,
    description: c.intro,
    alternates: buildAlternates(locale, '/pricing'),
    openGraph: { title: c.title, description: c.intro },
  }
}

function FeatureCell({ state, label }: { state: FeatureState; label: { yes: string; no: string; partial: string } }) {
  const config = {
    yes: { Icon: Check, className: 'text-brass', text: label.yes },
    partial: { Icon: Minus, className: 'text-slate', text: label.partial },
    no: { Icon: X, className: 'text-[#5a5f68]', text: label.no },
  }[state]
  const { Icon, className, text } = config
  return (
    <span className={cn('inline-flex items-center justify-center', className)}>
      <Icon size={16} aria-hidden="true" />
      <span className="sr-only">{text}</span>
    </span>
  )
}

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const loc = locale as Locale
  const c = pricingContent[loc]
  const tCta = await getTranslations('cta')
  const stateLabel = {
    yes: loc === 'es' ? 'Incluido' : 'Included',
    no: loc === 'es' ? 'No incluido' : 'Not included',
    partial: loc === 'es' ? 'Parcial' : 'Partial',
  }

  return (
    <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
      <FadeInSection>
        <SectionTitle as="h1" kicker={c.kicker} title={c.title} />
        <p className="text-lg text-[#9298a3] max-w-3xl leading-relaxed -mt-4 mb-16">{c.intro}</p>
      </FadeInSection>

      {/* How pricing follows the method */}
      <FadeInSection>
        <section className="border-t border-ink-border pt-10 mb-20">
          <span className="font-mono text-xs uppercase tracking-wide text-brass">{c.modelKicker}</span>
          <h2 className="font-display text-2xl font-semibold mt-2 mb-3">{c.modelTitle}</h2>
          <p className="text-[#9298a3] max-w-2xl mb-8">{c.modelIntro}</p>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-3 mb-6">
            {c.modelSteps.map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <span className="font-mono text-xs uppercase tracking-wide border border-ink-border px-3 py-1.5 card-edge text-[#c9c5bb]">
                  {step}
                </span>
                {i < c.modelSteps.length - 1 && <span className="text-slate" aria-hidden="true">→</span>}
              </div>
            ))}
          </div>
          <Button href="/method" variant="ghost">{c.modelLinkLabel} →</Button>
        </section>
      </FadeInSection>

      {/* Business outcomes */}
      <FadeInSection>
        <section className="border-t border-ink-border pt-10 mb-20">
          <span className="font-mono text-xs uppercase tracking-wide text-brass">{c.outcomesKicker}</span>
          <h2 className="font-display text-2xl font-semibold mt-2 mb-3">{c.outcomesTitle}</h2>
          <p className="text-[#9298a3] max-w-2xl mb-8">{c.outcomesIntro}</p>
          <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3">
            {c.outcomes.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#c9c5bb]">
                <Check size={14} className="text-brass mt-1 shrink-0" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </FadeInSection>

      {/* What can come out of the diagnosis */}
      <FadeInSection>
        <section className="border-t border-ink-border pt-10 mb-20">
          <span className="font-mono text-xs uppercase tracking-wide text-brass">{c.capabilitiesKicker}</span>
          <h2 className="font-display text-2xl font-semibold mt-2 mb-3">{c.capabilitiesTitle}</h2>
          <p className="text-[#9298a3] max-w-2xl mb-10">{c.capabilitiesIntro}</p>
          <div className="grid md:grid-cols-3 gap-10">
            {c.capabilities.map((group) => (
              <div key={group.title}>
                <p className="font-mono text-xs uppercase tracking-wide text-slate mb-4">{group.title}</p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="font-mono text-xs border border-ink-border px-2.5 py-1 card-edge text-[#c9c5bb]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeInSection>

      {/* Tiers */}
      <FadeInSection>
        <div className="border-t border-ink-border pt-10 mb-6">
          <span className="font-mono text-xs uppercase tracking-wide text-brass">{c.tiersKicker}</span>
          <h2 className="font-display text-2xl font-semibold mt-2">{c.tiersTitle}</h2>
        </div>
      </FadeInSection>
      <div className="grid md:grid-cols-3 gap-px bg-ink-border border border-ink-border mb-8">
        {c.tiers.map((tier) => (
          <FadeInSection key={tier.id}>
            <div
              className={cn(
                'bg-ink h-full p-6 flex flex-col',
                tier.featured && 'ring-1 ring-brass/50 relative'
              )}
            >
              {tier.featured && (
                <span className="font-mono text-[0.6rem] uppercase tracking-wide text-ink bg-brass px-2 py-0.5 card-edge self-start mb-3">
                  {tier.kicker}
                </span>
              )}
              {!tier.featured && (
                <span className="font-mono text-[0.6rem] uppercase tracking-wide text-slate mb-3">
                  {tier.kicker}
                </span>
              )}
              <h2 className="font-display text-2xl font-semibold text-[#ece9e2] mb-2">{tier.name}</h2>
              <p className="font-mono text-xl text-brass mb-0.5">{tier.priceLabel}</p>
              <p className="text-xs text-[#9298a3] mb-1">{tier.priceNote}</p>
              <p className="text-xs text-slate font-mono uppercase tracking-wide mb-5">{tier.duration}</p>
              <p className="text-sm text-[#c9c5bb] leading-relaxed mb-6">{tier.bestFor}</p>

              <div className="mb-6 flex-1">
                <p className="font-mono text-[0.65rem] uppercase tracking-wide text-brass mb-2.5">
                  {loc === 'es' ? 'Incluye' : 'Includes'}
                </p>
                <ul className="space-y-2">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#c9c5bb]">
                      <Check size={14} className="text-brass mt-1 shrink-0" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <p className="font-mono text-[0.65rem] uppercase tracking-wide text-slate mb-2.5">
                  {loc === 'es' ? 'No incluye' : 'Does not include'}
                </p>
                <ul className="space-y-2">
                  {tier.excludes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#787d87]">
                      <X size={14} className="text-[#5a5f68] mt-1 shrink-0" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button href="/contact#diagnostic" variant={tier.featured ? 'primary' : 'secondary'} className="w-full justify-center mt-auto">
                {tier.ctaLabel}
              </Button>
            </div>
          </FadeInSection>
        ))}
      </div>

      <FadeInSection>
        <p className="text-xs text-[#787d87] max-w-3xl mb-24 border-l-2 border-ink-border pl-4 leading-relaxed">
          {c.disclaimer}
        </p>
      </FadeInSection>

      {/* Comparison table */}
      <FadeInSection>
        <section className="border-t border-ink-border pt-10 mb-24">
          <span className="font-mono text-xs uppercase tracking-wide text-brass">{loc === 'es' ? 'Comparación' : 'Comparison'}</span>
          <h2 className="font-display text-2xl font-semibold mt-2 mb-3">{c.comparisonTitle}</h2>
          <p className="text-[#9298a3] max-w-2xl mb-10">{c.comparisonIntro}</p>

          <div className="overflow-x-auto border border-ink-border">
            <table className="w-full min-w-[640px] border-collapse">
              <caption className="sr-only">{c.comparisonTitle}</caption>
              <thead>
                <tr className="border-b border-ink-border">
                  <th scope="col" className="text-left font-mono text-xs uppercase tracking-wide text-[#9298a3] p-4 w-1/3">
                    {loc === 'es' ? 'Característica' : 'Feature'}
                  </th>
                  {c.tiers.map((tier) => (
                    <th
                      key={tier.id}
                      scope="col"
                      className={cn(
                        'text-center font-mono text-xs uppercase tracking-wide p-4',
                        tier.featured ? 'text-brass' : 'text-[#9298a3]'
                      )}
                    >
                      {tier.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.comparisonRows.map((row, idx) => (
                  <tr key={row.label} className={idx % 2 === 0 ? 'bg-ink' : 'bg-ink-surface/40'}>
                    <th scope="row" className="text-left font-normal text-sm text-[#c9c5bb] p-4 align-top">
                      {row.label}
                    </th>
                    {row.values.map((v, i) => (
                      <td key={i} className="text-center p-4 align-top">
                        <FeatureCell state={v} label={stateLabel} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </FadeInSection>

      {/* How payment works */}
      <FadeInSection>
        <section className="border-t border-ink-border pt-10 mb-24">
          <span className="font-mono text-xs uppercase tracking-wide text-brass">{loc === 'es' ? 'Pagos' : 'Payments'}</span>
          <h2 className="font-display text-2xl font-semibold mt-2 mb-3">{c.paymentTitle}</h2>
          <p className="text-[#9298a3] max-w-2xl mb-10">{c.paymentIntro}</p>
          <div className="grid md:grid-cols-3 gap-10">
            {c.paymentSteps.map((step) => (
              <div key={step.title}>
                <p className="font-mono text-sm text-brass mb-2">{step.title}</p>
                <p className="text-sm text-[#c9c5bb] leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </section>
      </FadeInSection>

      {/* Us vs. freelancers vs. traditional agencies */}
      <FadeInSection>
        <section className="border-t border-ink-border pt-10 mb-24">
          <span className="font-mono text-xs uppercase tracking-wide text-brass">{c.competitorKicker}</span>
          <h2 className="font-display text-2xl font-semibold mt-2 mb-3">{c.competitorTitle}</h2>
          <p className="text-[#9298a3] max-w-2xl mb-10">{c.competitorIntro}</p>

          <div className="overflow-x-auto border border-ink-border">
            <table className="w-full min-w-[760px] border-collapse">
              <caption className="sr-only">{c.competitorTitle}</caption>
              <thead>
                <tr className="border-b border-ink-border">
                  <th scope="col" className="text-left font-mono text-xs uppercase tracking-wide text-[#9298a3] p-4 w-1/4">
                    {loc === 'es' ? 'Dimensión' : 'Dimension'}
                  </th>
                  <th scope="col" className="text-left font-mono text-xs uppercase tracking-wide text-brass p-4 w-1/4">
                    {c.competitorColumns.henao}
                  </th>
                  <th scope="col" className="text-left font-mono text-xs uppercase tracking-wide text-[#9298a3] p-4 w-1/4">
                    {c.competitorColumns.freelancer}
                  </th>
                  <th scope="col" className="text-left font-mono text-xs uppercase tracking-wide text-[#9298a3] p-4 w-1/4">
                    {c.competitorColumns.agency}
                  </th>
                </tr>
              </thead>
              <tbody>
                {c.competitorRows.map((row, idx) => (
                  <tr key={row.dimension} className={idx % 2 === 0 ? 'bg-ink' : 'bg-ink-surface/40'}>
                    <th scope="row" className="text-left font-normal text-sm text-[#ece9e2] p-4 align-top">
                      {row.dimension}
                    </th>
                    <td className="text-sm text-[#c9c5bb] p-4 align-top border-l-2 border-brass/40">{row.henao}</td>
                    <td className="text-sm text-[#787d87] p-4 align-top">{row.freelancer}</td>
                    <td className="text-sm text-[#787d87] p-4 align-top">{row.agency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </FadeInSection>

      {/* FAQ */}
      <FadeInSection>
        <section className="border-t border-ink-border pt-10 mb-24">
          <span className="font-mono text-xs uppercase tracking-wide text-brass">{c.faqTitle}</span>
          <div className="mt-6 divide-y divide-ink-border border-t border-b border-ink-border">
            {c.faqs.map((faq) => (
              <details key={faq.q} className="group py-4">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-display text-lg text-[#ece9e2]">
                  {faq.q}
                  <span className="font-mono text-slate group-open:rotate-45 transition-transform shrink-0" aria-hidden="true">+</span>
                </summary>
                <p className="mt-3 text-sm text-[#9298a3] leading-relaxed max-w-2xl">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="border-t border-ink-border pt-16 text-center">
          <h2 className="font-display text-2xl font-semibold mb-3">{c.finalCtaTitle}</h2>
          <p className="text-[#9298a3] max-w-xl mx-auto mb-8">{c.finalCtaBody}</p>
          <Button href="/contact" variant="primary" size="lg">
            {tCta('startConversation')}
          </Button>
        </section>
      </FadeInSection>
    </div>
  )
}
