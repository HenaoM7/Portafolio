import { cn } from '@/lib/utils'
import Link from 'next/link'

interface ButtonProps {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
  download?: boolean
  target?: string
  rel?: string
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  children,
  className,
  download,
  target,
  rel,
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 font-semibold rounded-lg transition-all duration-200 cursor-pointer'

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const variants = {
    primary:
      'bg-cyan-400 text-gray-950 hover:bg-cyan-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40',
    outline:
      'border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400',
    ghost: 'text-slate-300 hover:text-white hover:bg-white/5',
  }

  const classes = cn(base, sizes[size], variants[variant], className)

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        download={download}
        target={target}
        rel={rel}
      >
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
