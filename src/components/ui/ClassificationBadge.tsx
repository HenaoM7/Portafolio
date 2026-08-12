import { cn } from '@/lib/utils'
import type { Classification } from '@/content/case-studies/types'

interface ClassificationBadgeProps {
  classification: Classification
  label: string
  className?: string
}

/**
 * Renders the credibility label. This must always be visible on a case study —
 * never hidden, shortened, or reworded to imply client work where none exists.
 */
export default function ClassificationBadge({
  classification,
  label,
  className,
}: ClassificationBadgeProps) {
  return (
    <span
      className={cn(
        'inline-block font-mono text-[0.65rem] uppercase tracking-wide px-2.5 py-1 card-edge border',
        classification === 'simulated'
          ? 'text-violet border-violet/50 bg-violet/10'
          : 'text-slate border-slate/50 bg-slate/10',
        className
      )}
    >
      {label}
    </span>
  )
}
