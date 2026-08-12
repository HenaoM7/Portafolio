import type { Bilingual } from '../types'

export interface MethodStep {
  number: string
  title: string
  body: string
}

export interface MethodPageContent {
  intro: string
  steps: MethodStep[]
}

export const methodContent: Bilingual<MethodPageContent> = {
  en: {
    intro: 'Every engagement follows the same six steps, in the same order — because the question always comes before the dashboard.',
    steps: [
      { number: '01', title: 'Discover', body: "We start by understanding the business, not the data — the process, the people involved, and the specific question that's actually keeping someone up at night." },
      { number: '02', title: 'Diagnose', body: 'We assess the data and the indicators that depend on it, before assuming either can be trusted.' },
      { number: '03', title: 'Analyze', body: 'We investigate patterns, inconsistencies, anomalies, and opportunities using the statistical and analytical methods the question actually calls for — not a default toolkit applied regardless of fit.' },
      { number: '04', title: 'Evidence', body: 'Findings get turned into evidence that can survive being questioned — quantified, sourced, and reproducible.' },
      { number: '05', title: 'Recommend', body: 'Recommendations are sorted by what to do now, what to plan for the medium term, and what\'s a longer-term structural fix — never a single undifferentiated list.' },
      { number: '06', title: 'Implement', body: 'Where it makes sense, we help build the automation, controls, or monitoring that make the fix stick. Not every engagement includes this step, and we say so upfront.' },
    ],
  },
  es: {
    intro: 'Todo proyecto sigue los mismos seis pasos, en el mismo orden — porque la pregunta siempre va antes que el dashboard.',
    steps: [
      { number: '01', title: 'Descubrir', body: 'Empezamos por entender el negocio, no los datos — el proceso, las personas involucradas, y la pregunta específica que realmente le quita el sueño a alguien.' },
      { number: '02', title: 'Diagnosticar', body: 'Evaluamos los datos y los indicadores que dependen de ellos, antes de asumir que alguno de los dos es confiable.' },
      { number: '03', title: 'Analizar', body: 'Investigamos patrones, inconsistencias, anomalías y oportunidades usando los métodos estadísticos y analíticos que la pregunta realmente exige — no un conjunto de herramientas aplicado por defecto.' },
      { number: '04', title: 'Evidenciar', body: 'Los hallazgos se convierten en evidencia que resiste ser cuestionada — cuantificada, con fuente clara y reproducible.' },
      { number: '05', title: 'Recomendar', body: 'Las recomendaciones se ordenan entre qué hacer ahora, qué planear a mediano plazo, y qué es una solución estructural de más largo plazo — nunca una lista sin diferenciar.' },
      { number: '06', title: 'Implementar', body: 'Cuando tiene sentido, ayudamos a construir la automatización, los controles o el monitoreo que hacen que la corrección se mantenga. No todo proyecto incluye este paso, y lo decimos desde el inicio.' },
    ],
  },
}
