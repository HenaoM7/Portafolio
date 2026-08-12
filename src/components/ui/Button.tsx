import { cn } from '@/lib/utils'
import { Link } from '@/i18n/navigation'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  external?: boolean
  onClick?: () => void
  children: React.ReactNode
  className?: string
  download?: boolean
  type?: 'button' | 'submit'
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  external,
  onClick,
  children,
  className,
  download,
  type = 'button',
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 font-semibold card-edge transition-[background-color,border-color,transform] duration-200 ease-out'

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const variants = {
    primary: 'bg-brass text-ink hover:bg-brass/90 hover:-translate-y-0.5',
    secondary: 'border border-ink-border text-[#ece9e2] hover:border-slate hover:-translate-y-0.5',
    ghost: 'text-brass border-b border-brass/30 hover:border-brass px-0',
  }

  const classes = cn(base, sizes[size], variants[variant], className)

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={classes} download={download}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
