'use client'

import { motion, useReducedMotion } from 'framer-motion'

interface JourneyNode {
  label: string
  sublabel: string
  state: 'foundation' | 'current' | 'expanding' | 'future'
}

const nodesByLocale: Record<'en' | 'es', JourneyNode[]> = {
  en: [
    { label: 'QA Engineering', sublabel: 'Quipux — production data validation', state: 'foundation' },
    { label: 'Data Investigations', sublabel: 'Data Quality · Fraud & Risk · Profitability', state: 'current' },
    { label: 'Data Engineering & ML', sublabel: 'Applied machine learning, expanding', state: 'expanding' },
    { label: 'Quantum Computing', sublabel: 'Long-range research interest, not a service today', state: 'future' },
  ],
  es: [
    { label: 'Ingeniería QA', sublabel: 'Quipux — validación de datos en producción', state: 'foundation' },
    { label: 'Investigaciones de Datos', sublabel: 'Calidad de Datos · Fraude y Riesgo · Rentabilidad', state: 'current' },
    { label: 'Ingeniería de Datos y ML', sublabel: 'Machine learning aplicado, en expansión', state: 'expanding' },
    { label: 'Computación Cuántica', sublabel: 'Interés de investigación a largo plazo, no un servicio hoy', state: 'future' },
  ],
}

export default function JourneyTimeline({ locale }: { locale: 'en' | 'es' }) {
  const shouldReduceMotion = useReducedMotion()
  const nodes = nodesByLocale[locale]

  return (
    <div className="relative pl-8">
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-slate/60 via-slate/30 to-transparent" />
      <div className="space-y-10">
        {nodes.map((node, i) => (
          <motion.div
            key={node.label}
            className="relative"
            initial={shouldReduceMotion ? undefined : { opacity: 0, x: -8 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
          >
            <span
              className={
                node.state === 'current'
                  ? 'absolute -left-8 top-1 w-3.5 h-3.5 rounded-full bg-brass'
                  : node.state === 'future'
                    ? 'absolute -left-8 top-1 w-3.5 h-3.5 rounded-full border border-dashed border-slate bg-transparent'
                    : 'absolute -left-8 top-1 w-3.5 h-3.5 rounded-full bg-slate/50'
              }
            />
            <p
              className={
                node.state === 'future'
                  ? 'font-display text-base text-[#9298a3] italic'
                  : 'font-display text-base text-[#ece9e2]'
              }
            >
              {node.label}
            </p>
            <p className="text-xs text-[#9298a3] mt-1">{node.sublabel}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
