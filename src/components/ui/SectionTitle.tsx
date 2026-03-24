import { cn } from '@/lib/utils'

interface SectionTitleProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionTitle({
  title,
  subtitle,
  align = 'center',
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        'mb-12',
        align === 'center' ? 'text-center' : 'text-left',
        className
      )}
    >
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-100">
        {title}
      </h2>
      <div
        className={cn(
          'mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400',
          align === 'center' ? 'mx-auto' : ''
        )}
      />
      {subtitle && (
        <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
