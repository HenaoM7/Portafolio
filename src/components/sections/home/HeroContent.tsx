'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Button from '@/components/ui/Button'

interface HeroContentProps {
  brand: string
  kicker: string
  title: string
  subtitle: string
  pillars: string
  primaryCta: string
  secondaryCta: string
}

export default function HeroContent({
  brand,
  kicker,
  title,
  subtitle,
  pillars,
  primaryCta,
  secondaryCta,
}: HeroContentProps) {
  const shouldReduceMotion = useReducedMotion()

  // Defining "hidden" and "show" as identical when motion is reduced (rather than
  // making initial/animate undefined) avoids a mount-timing race: useReducedMotion()
  // resolves one tick after first paint, and toggling the props themselves could
  // freeze an element mid-transition, right after its "hidden" (opacity: 0) state —
  // exactly the invisible-hero bug this replaced.
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.12, delayChildren: shouldReduceMotion ? 0 : 0.1 } },
  }
  const item = shouldReduceMotion
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y: 14 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
      }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="relative max-w-content mx-auto px-4 sm:px-6 lg:px-8"
    >
      <motion.div variants={item} className="flex items-center gap-3 mb-6">
        <span className="w-2 h-2 rounded-full bg-brass" aria-hidden="true" />
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-brass">{brand}</p>
        <span className="text-ink-border">·</span>
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-slate">{kicker}</p>
      </motion.div>
      <motion.h1
        variants={item}
        className="font-display font-semibold text-4xl sm:text-5xl md:text-6xl leading-tight max-w-4xl text-balance"
      >
        {title}
      </motion.h1>
      <motion.p variants={item} className="mt-7 text-lg text-[#9298a3] max-w-2xl leading-relaxed">
        {subtitle}
      </motion.p>
      <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
        <Button href="/contact" variant="primary" size="lg">
          {primaryCta}
        </Button>
        <Button href="/case-studies" variant="secondary" size="lg">
          {secondaryCta}
        </Button>
      </motion.div>
      <motion.p variants={item} className="mt-8 font-mono text-[0.7rem] uppercase tracking-wide text-[#5a616c]">
        {pillars}
      </motion.p>
    </motion.div>
  )
}
