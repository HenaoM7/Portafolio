'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Button from '@/components/ui/Button'

interface HeroContentProps {
  kicker: string
  title: string
  subtitle: string
  primaryCta: string
  secondaryCta: string
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function HeroContent({ kicker, title, subtitle, primaryCta, secondaryCta }: HeroContentProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      variants={shouldReduceMotion ? undefined : container}
      initial={shouldReduceMotion ? undefined : 'hidden'}
      animate={shouldReduceMotion ? undefined : 'show'}
      className="relative max-w-content mx-auto px-4 sm:px-6 lg:px-8"
    >
      <motion.p
        variants={shouldReduceMotion ? undefined : item}
        className="font-mono text-xs uppercase tracking-[0.14em] text-slate mb-6"
      >
        {kicker}
      </motion.p>
      <motion.h1
        variants={shouldReduceMotion ? undefined : item}
        className="font-display font-semibold text-4xl sm:text-5xl md:text-6xl leading-tight max-w-4xl text-balance"
      >
        {title}
      </motion.h1>
      <motion.p
        variants={shouldReduceMotion ? undefined : item}
        className="mt-7 text-lg text-[#9298a3] max-w-2xl leading-relaxed"
      >
        {subtitle}
      </motion.p>
      <motion.div
        variants={shouldReduceMotion ? undefined : item}
        className="mt-10 flex flex-wrap items-center gap-4"
      >
        <Button href="/contact" variant="primary" size="lg">
          {primaryCta}
        </Button>
        <Button href="/case-studies" variant="secondary" size="lg">
          {secondaryCta}
        </Button>
      </motion.div>
    </motion.div>
  )
}
