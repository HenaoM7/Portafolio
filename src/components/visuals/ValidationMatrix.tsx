'use client'

import { motion, useReducedMotion } from 'framer-motion'

/** Data Quality's visual identity: structure, integrity, validation. A grid of
 * records being checked — most pass, a couple get flagged, exactly like a
 * real completeness/consistency sweep. */
const ROWS = 5
const COLS = 8
const FLAGGED = new Set(['1-5', '3-2'])

const CAPTION = { en: '2 of 40 records flagged', es: '2 de 40 registros marcados' }

export default function ValidationMatrix({ locale }: { locale: 'en' | 'es' }) {
  const shouldReduceMotion = useReducedMotion()
  const cells = Array.from({ length: ROWS * COLS }, (_, i) => ({
    row: Math.floor(i / COLS),
    col: i % COLS,
    key: `${Math.floor(i / COLS)}-${i % COLS}`,
  }))

  return (
    <div className="max-w-[280px]">
      <div className="grid grid-cols-8 gap-2" role="presentation" aria-hidden="true">
        {cells.map((cell, i) => {
          const flagged = FLAGGED.has(cell.key)
          return (
            <motion.div
              key={cell.key}
              initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.6 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.3, delay: i * 0.012, ease: 'easeOut' }}
              className={
                flagged
                  ? 'aspect-square rounded-[1px] bg-brass border border-brass'
                  : 'aspect-square rounded-[1px] bg-slate/40 border border-slate'
              }
            />
          )
        })}
      </div>
      <p className="mt-3 font-mono text-[0.65rem] text-brass">{CAPTION[locale]}</p>
    </div>
  )
}
