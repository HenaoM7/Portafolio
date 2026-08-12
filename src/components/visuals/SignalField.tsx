'use client'

import { motion, useReducedMotion } from 'framer-motion'

/** Fraud & Risk's visual identity: anomaly, detection, signal. A calm baseline
 * of ordinary transactions with one point that visibly doesn't belong. */
const POINTS = [8, 14, 10, 22, 12, 9, 16, 11, 24, 13, 8, 15, 10, 12, 46, 9, 14, 11]
const ANOMALY_INDEX = 14

const CAPTION = { en: '1 of 18 flagged for review', es: '1 de 18 marcada para revisión' }

export default function SignalField({ locale }: { locale: 'en' | 'es' }) {
  const shouldReduceMotion = useReducedMotion()
  const max = Math.max(...POINTS)

  return (
    <div className="max-w-[280px]" role="presentation" aria-hidden="true">
      <svg viewBox="0 0 280 100" className="w-full h-auto overflow-visible">
        <line x1="0" y1="90" x2="280" y2="90" stroke="#2a313c" strokeWidth="1" />
        {POINTS.map((v, i) => {
          const isAnomaly = i === ANOMALY_INDEX
          const x = (i / (POINTS.length - 1)) * 270 + 5
          const y = 90 - (v / max) * 78
          return (
            <motion.circle
              key={i}
              cx={x}
              cy={y}
              r={isAnomaly ? 5 : 2.6}
              fill={isAnomaly ? '#d69a4e' : '#7fa0c2'}
              opacity={isAnomaly ? 1 : 0.55}
              initial={shouldReduceMotion ? undefined : { opacity: 0, cy: 90 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: isAnomaly ? 1 : 0.55, cy: y }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.03, ease: [0.22, 1, 0.36, 1] }}
            />
          )
        })}
      </svg>
      <p className="mt-2 font-mono text-[0.65rem] text-brass">{CAPTION[locale]}</p>
    </div>
  )
}
