'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import CaseStudyCard from '@/components/ui/CaseStudyCard'
import { cn } from '@/lib/utils'
import type { CaseStudy, CaseStudyCategory } from '@/content/case-studies/types'
import type { Locale } from '@/content/types'

interface CaseStudiesGridProps {
  caseStudies: CaseStudy[]
  locale: Locale
}

export default function CaseStudiesGrid({ caseStudies, locale }: CaseStudiesGridProps) {
  const [filter, setFilter] = useState<CaseStudyCategory | 'all'>('all')
  const tCta = useTranslations('cta')
  const tBadges = useTranslations('badges')
  const tCategories = useTranslations('categories')
  const tCaseStudy = useTranslations('caseStudy')

  const categories: (CaseStudyCategory | 'all')[] = [
    'all',
    ...Array.from(new Set(caseStudies.map((cs) => cs.category))),
  ]

  const visible = filter === 'all' ? caseStudies : caseStudies.filter((cs) => cs.category === filter)

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label={tCaseStudy('filterAll')}>
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            aria-pressed={filter === cat}
            className={cn(
              'px-3.5 py-1.5 card-edge text-sm font-medium border transition-colors',
              filter === cat
                ? 'bg-brass text-ink border-brass'
                : 'border-ink-border text-[#9298a3] hover:text-[#ece9e2]'
            )}
          >
            {cat === 'all' ? tCaseStudy('filterAll') : tCategories(cat)}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((cs) => (
          <CaseStudyCard
            key={cs.slug}
            caseStudy={cs}
            title={cs.content[locale].title}
            subtitle={cs.content[locale].subtitle}
            classificationLabel={tBadges(cs.classification === 'simulated' ? 'simulated' : 'personal')}
            categoryLabel={tCategories(cs.category)}
            ctaLabel={tCta('exploreCaseStudy')}
            headingLevel="h2"
          />
        ))}
      </div>
    </div>
  )
}
