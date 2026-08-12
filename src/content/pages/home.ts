import type { Bilingual } from '../types'

export interface HomeContent {
  heroBrand: string
  heroKicker: string
  heroTitle: string
  heroSubtitle: string
  heroPillars: string
  problemTitle: string
  problemItems: string[]
  differentiatorTitle: string
  differentiatorBody: string
  diagnosticTitle: string
  diagnosticBody: string
  finalCtaTitle: string
  finalCtaLocation: string
}

export const homeContent: Bilingual<HomeContent> = {
  en: {
    heroBrand: 'Henao Intelligence',
    heroKicker: 'Technology & Data Intelligence Consulting',
    heroTitle: "We investigate what your data isn't telling you.",
    heroSubtitle:
      'Henao Intelligence is a data investigation practice for companies that no longer fully trust their own numbers. We diagnose data quality, size fraud exposure, and find where profit is actually made or lost — then hand you evidence, not a dashboard.',
    heroPillars: 'Data Quality · Fraud & Risk · Profitability',
    problemTitle: 'What is the cost of not trusting your data?',
    problemItems: [
      "Reports from two departments that don't agree",
      'Indicators nobody acts on without a manual double-check first',
      'Duplicate or inconsistent transactions nobody has time to chase down',
      'Customer, sales, or cost data spread across systems never meant to talk to each other',
      "Losses you suspect are there but can't yet point to",
      'The same operational error happening again, quietly, every month',
    ],
    differentiatorTitle: 'We check before we trust.',
    differentiatorBody:
      "Before analyzing a number, we ask whether it can be trusted at all. That habit comes from a background in software quality assurance — validating millions of production records for referential integrity, completeness, and consistency before any analysis began. It's the same habit that, on an independent project, caught an inflated return-on-investment claim in our own predictive model before it ever reached a client. We'd rather find the problem in our own work first.",
    diagnosticTitle: 'Not ready for a full engagement?',
    diagnosticBody:
      'Start with an Initial Data Diagnostic — a scoped review of one question, ending in a written finding and a clear recommendation on whether a full engagement is justified. No guaranteed outcomes, no long-term commitment.',
    finalCtaTitle: "Have a number you don't fully trust? Let's look at it together.",
    finalCtaLocation: 'Medellín, Colombia (GMT-5) — working with companies across Latin America and internationally.',
  },
  es: {
    heroBrand: 'Henao Intelligence',
    heroKicker: 'Consultoría en Tecnología e Inteligencia de Datos',
    heroTitle: 'Investigamos lo que sus datos no le están diciendo.',
    heroSubtitle:
      'Henao Intelligence es una práctica de investigación de datos para empresas que ya no confían del todo en sus propias cifras. Diagnosticamos la calidad del dato, dimensionamos la exposición al fraude y encontramos dónde se genera o se pierde realmente la utilidad — y entregamos evidencia, no un dashboard.',
    heroPillars: 'Calidad de Datos · Fraude y Riesgo · Rentabilidad',
    problemTitle: '¿Qué le está costando no confiar en sus datos?',
    problemItems: [
      'Reportes de dos áreas que no coinciden entre sí',
      'Indicadores que nadie usa sin antes verificarlos a mano',
      'Transacciones duplicadas o inconsistentes que nadie tiene tiempo de rastrear',
      'Datos de clientes, ventas o costos repartidos en sistemas que nunca se diseñaron para hablar entre sí',
      'Pérdidas que sospecha que existen, pero que aún no puede señalar con precisión',
      'El mismo error operativo repitiéndose, en silencio, mes a mes',
    ],
    differentiatorTitle: 'Verificamos antes de confiar.',
    differentiatorBody:
      'Antes de analizar una cifra, nos preguntamos si esa cifra es confiable. Ese hábito viene de una formación en aseguramiento de calidad de software — validando millones de registros de producción en integridad referencial, completitud y consistencia antes de iniciar cualquier análisis. Es el mismo hábito que, en un proyecto independiente, detectó una cifra de retorno inflada en nuestro propio modelo predictivo antes de que llegara a un cliente. Preferimos encontrar el problema en nuestro propio trabajo primero.',
    diagnosticTitle: '¿Aún no está listo para un proyecto completo?',
    diagnosticBody:
      'Comience con un Diagnóstico Inicial de Datos — una revisión acotada a una sola pregunta de negocio, que termina en un hallazgo por escrito y una recomendación clara sobre si un proyecto completo se justifica. Sin resultados garantizados, sin compromiso de largo plazo.',
    finalCtaTitle: '¿Tiene una cifra en la que no confía del todo? Revisémosla juntos.',
    finalCtaLocation: 'Medellín, Colombia (GMT-5) — trabajo con empresas en Latinoamérica y a nivel internacional.',
  },
}
