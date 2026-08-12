'use client'

import { motion, useReducedMotion } from 'framer-motion'

/** Profitability's visual identity: flow, value, concentration. Several
 * revenue streams of different widths converging toward where the margin
 * actually concentrates — not all streams are equally valuable. */
const STREAMS = [
  { y: 12, width: 2, opacity: 0.35 },
  { y: 28, width: 4, opacity: 0.5 },
  { y: 44, width: 7, opacity: 0.75 },
  { y: 62, width: 3, opacity: 0.4 },
  { y: 78, width: 5.5, opacity: 0.6 },
]

const CAPTION = { en: 'Margin concentrates in one stream', es: 'El margen se concentra en un flujo' }

export default function ValueFlow({ locale }: { locale: 'en' | 'es' }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="max-w-[280px]" role="presentation" aria-hidden="true">
      <svg viewBox="0 0 280 100" className="w-full h-auto overflow-visible">
        {STREAMS.map((s, i) => {
          const endY = 50 + (s.y - 50) * 0.15
          const path = `M0,${s.y} C120,${s.y} 160,${endY} 280,${endY}`
          return (
            <motion.path
              key={i}
              d={path}
              fill="none"
              stroke={s.width > 6 ? '#d69a4e' : '#7fa0c2'}
              strokeWidth={s.width}
              strokeLinecap="round"
              opacity={s.opacity}
              initial={shouldReduceMotion ? undefined : { pathLength: 0 }}
              whileInView={shouldReduceMotion ? undefined : { pathLength: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.9, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            />
          )
        })}
        <circle cx="278" cy="55" r="4" fill="#d69a4e" />
      </svg>
      <p className="mt-2 font-mono text-[0.65rem] text-brass">{CAPTION[locale]}</p>
    </div>
  )
}
