import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import ClassificationBadge from './ClassificationBadge'
import type { CaseStudy } from '@/content/case-studies/types'

interface CaseStudyCardProps {
  caseStudy: CaseStudy
  title: string
  subtitle: string
  classificationLabel: string
  categoryLabel: string
  ctaLabel: string
  /** Set to 'h2' when this card is the first heading level after the page's own h1 (e.g. the Case Studies index). Defaults to 'h3' for use inside a section that already has its own h2 (e.g. the Home page evidence preview). */
  headingLevel?: 'h2' | 'h3'
}

export default function CaseStudyCard({
  caseStudy,
  title,
  subtitle,
  classificationLabel,
  categoryLabel,
  ctaLabel,
  headingLevel: Heading = 'h3',
}: CaseStudyCardProps) {
  const cover = caseStudy.images[0]

  return (
    <Link
      href={`/case-studies/${caseStudy.slug}`}
      className="group section-card card-edge flex flex-col overflow-hidden hover:border-slate/50 transition-colors duration-200"
    >
      <div className="relative h-40 overflow-hidden bg-ink-alt border-b border-ink-border">
        {cover ? (
          <Image
            src={cover.src}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover opacity-90 grayscale-[35%] transition-transform duration-500 ease-out group-hover:scale-[1.06]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-slate/60 text-center leading-loose">
              {categoryLabel}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-surface via-transparent to-transparent" />
      </div>

      <div className="flex flex-col gap-3 p-6 flex-1">
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono text-[0.65rem] uppercase tracking-wide text-slate">
            {categoryLabel}
          </span>
          <ClassificationBadge
            classification={caseStudy.classification}
            label={classificationLabel}
          />
        </div>

        <Heading className="font-display text-lg font-semibold text-[#ece9e2]">{title}</Heading>
        <p className="text-sm text-[#9298a3] leading-relaxed flex-1">{subtitle}</p>

        {caseStudy.headlineStats[0] && (
          <div className="pt-3 border-t border-dashed border-ink-border">
            <div className="font-mono text-xl text-brass [font-variant-numeric:tabular-nums]">
              {caseStudy.headlineStats[0].value}
            </div>
          </div>
        )}

        <span className="text-sm font-medium text-brass border-b border-brass/30 self-start transition-[border-color] group-hover:border-brass">
          {ctaLabel} →
        </span>
      </div>
    </Link>
  )
}
