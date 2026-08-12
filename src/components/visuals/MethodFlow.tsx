'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { MethodStep } from '@/content/pages/method'

export default function MethodFlow({ steps }: { steps: MethodStep[] }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <ol className="relative max-w-3xl">
      <div className="absolute left-[27px] top-4 bottom-4 w-px bg-gradient-to-b from-brass/50 via-slate/40 to-transparent hidden sm:block" />
      <div className="space-y-10">
        {steps.map((step, idx) => (
          <motion.li
            key={step.number}
            className="relative grid grid-cols-[3.4rem_1fr] sm:gap-4 gap-3 border-t border-ink-border pt-6"
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: idx * 0.05, ease: 'easeOut' }}
          >
            <span className="relative z-10 flex items-center justify-center w-14 h-14 -mt-1 rounded-full border border-ink-border bg-ink-surface font-mono text-brass text-lg [font-variant-numeric:tabular-nums]">
              {step.number}
            </span>
            <div>
              <h2 className="font-display text-xl font-semibold mb-2">{step.title}</h2>
              <p className="text-[#c9c5bb] leading-relaxed">{step.body}</p>
            </div>
          </motion.li>
        ))}
      </div>
    </ol>
  )
}
