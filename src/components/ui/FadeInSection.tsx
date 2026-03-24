'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface FadeInSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function FadeInSection({
  children,
  className,
  delay = 0,
}: FadeInSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    const current = ref.current
    if (current) observer.observe(current)
    return () => {
      if (current) observer.unobserve(current)
    }
  }, [delay])

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-5',
        className
      )}
    >
      {children}
    </div>
  )
}
