import { cn } from '@/lib/utils'

interface SectionTitleProps {
  kicker?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
  /** Page-top usage (one per page) must pass 'h1'. Defaults to 'h2' for section headings within a page that already has its own h1. */
  as?: 'h1' | 'h2'
}

export default function SectionTitle({
  kicker,
  title,
  subtitle,
  align = 'left',
  className,
  as: Heading = 'h2',
}: SectionTitleProps) {
  return (
    <div className={cn('mb-10', align === 'center' ? 'text-center' : 'text-left', className)}>
      {kicker && (
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-slate mb-3">{kicker}</p>
      )}
      <Heading className="font-display text-3xl md:text-4xl font-semibold text-[#ece9e2] text-balance">
        {title}
      </Heading>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-[#9298a3] text-lg max-w-2xl',
            align === 'center' ? 'mx-auto' : ''
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
