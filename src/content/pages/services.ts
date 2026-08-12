import type { Bilingual } from '../types'

export interface ServicePillarContent {
  slug: 'data-quality' | 'fraud-risk' | 'profitability'
  kicker: string
  title: string
  businessProblem: string
  whatWeInvestigate: string
  whatWeDeliver: string
  decisionEnabled: string
  caseStudySlug: string
}

export interface ServicesPageContent {
  intro: string
  pillars: ServicePillarContent[]
  capabilitiesTitle: string
  dataEngGroupTitle: string
  dataEngItems: string[]
  aiMlGroupTitle: string
  aiMlItems: string[]
}

export const servicesContent: Bilingual<ServicesPageContent> = {
  en: {
    intro:
      'Three questions come up again and again in companies with real transactional complexity: can I trust this number, is something wrong happening inside this volume, and where is this business actually making money. Everything here exists to answer one of those three — nothing is sold as a fourth, independent offering.',
    pillars: [
      {
        slug: 'data-quality',
        kicker: 'Pillar 01',
        title: 'Data Quality',
        businessProblem:
          "Decisions are only as good as the data behind them — and in most transactional systems, nobody has actually measured how good that data is.",
        whatWeInvestigate:
          'Duplicate and missing records, referential integrity between systems, consistency across departments, and how these issues compound into financial exposure over time.',
        whatWeDeliver:
          'A data quality score broken down by entity, a quantified revenue-at-risk figure, and a prioritized list of what to fix first.',
        decisionEnabled:
          'Whether to trust a given report as-is, or fix the data behind it before making a decision that depends on it.',
        caseStudySlug: 'data-quality-audit',
      },
      {
        slug: 'fraud-risk',
        kicker: 'Pillar 02',
        title: 'Fraud & Risk Analytics',
        businessProblem:
          "Fraud and operational risk rarely announce themselves — they hide inside volume, in patterns too subtle for a spreadsheet filter to catch.",
        whatWeInvestigate:
          'Transaction velocity, duplicate patterns, geographic and behavioral inconsistency, statistical outliers, and where these signals overlap.',
        whatWeDeliver:
          'A risk score per transaction or account, a prioritized list of what to review first, and the rules and thresholds behind every flag — never a black box.',
        decisionEnabled:
          'Where to focus limited investigation resources first, and what control would have caught this earlier.',
        caseStudySlug: 'fraud-risk-analytics',
      },
      {
        slug: 'profitability',
        kicker: 'Pillar 03',
        title: 'Profitability & Business Analytics',
        businessProblem:
          "Revenue growth and profit growth are not the same thing, and most reporting stacks aren't built to show you where they diverge.",
        whatWeInvestigate:
          'Margin by product, client, region, and channel; customer segmentation and retention; the handful of accounts or products quietly working against the business.',
        whatWeDeliver:
          "A margin breakdown by the dimensions that matter to your business, a segmentation of where value concentrates, and a forecast grounded in your own historical pattern — not a generic template.",
        decisionEnabled: 'Where to invest, where to walk away, and which relationships or products are worth renegotiating.',
        caseStudySlug: 'profitability-analytics',
      },
    ],
    capabilitiesTitle: 'The capabilities behind the three pillars',
    dataEngGroupTitle: 'Data & Engineering',
    dataEngItems: [
      'SQL / Python Analytics — the extraction and validation layer under all three pillars',
      'Data Governance & Validation — sustains Data Quality findings past the initial audit',
      "Process Analytics — supports Profitability's margin and process investigations",
      'Data Engineering — pipeline work when a diagnostic becomes ongoing monitoring',
    ],
    aiMlGroupTitle: 'AI, ML & Reporting',
    aiMlItems: [
      'Machine Learning / Predictive Analytics — the modeling layer inside Fraud & Risk and Profitability',
      'Business Intelligence / Power BI — the executive-visualization layer common to all three case studies',
      "Dashboarding & Automation — how a diagnostic's findings stay visible after delivery",
    ],
  },
  es: {
    intro:
      'Tres preguntas se repiten una y otra vez en empresas con complejidad transaccional real: ¿puedo confiar en esta cifra?, ¿está ocurriendo algo indebido dentro de este volumen? y ¿dónde está ganando dinero realmente este negocio? Todo lo que ofrecemos existe para responder una de esas tres preguntas — nada se vende como una cuarta oferta independiente.',
    pillars: [
      {
        slug: 'data-quality',
        kicker: 'Pilar 01',
        title: 'Calidad de Datos',
        businessProblem:
          'Las decisiones son tan buenas como los datos que las sustentan — y en la mayoría de los sistemas transaccionales, nadie ha medido realmente qué tan buenos son esos datos.',
        whatWeInvestigate:
          'Registros duplicados o faltantes, integridad referencial entre sistemas, consistencia entre áreas, y cómo estos problemas se acumulan en exposición financiera con el tiempo.',
        whatWeDeliver:
          'Un puntaje de calidad de datos desglosado por entidad, una cifra cuantificada de ingreso en riesgo, y una lista priorizada de qué corregir primero.',
        decisionEnabled:
          'Si confiar en un reporte tal como está, o corregir los datos que lo sustentan antes de tomar una decisión que dependa de él.',
        caseStudySlug: 'data-quality-audit',
      },
      {
        slug: 'fraud-risk',
        kicker: 'Pilar 02',
        title: 'Fraude y Riesgo',
        businessProblem:
          'El fraude y el riesgo operativo rara vez se anuncian — se esconden dentro del volumen, en patrones demasiado sutiles para un filtro de Excel.',
        whatWeInvestigate:
          'Velocidad transaccional, patrones de duplicidad, inconsistencia geográfica y de comportamiento, valores atípicos estadísticos, y dónde se superponen estas señales.',
        whatWeDeliver:
          'Un puntaje de riesgo por transacción o cuenta, una lista priorizada de qué revisar primero, y las reglas y umbrales detrás de cada alerta — nunca una caja negra.',
        decisionEnabled: 'Dónde enfocar primero los recursos de investigación disponibles, y qué control lo habría detectado antes.',
        caseStudySlug: 'fraud-risk-analytics',
      },
      {
        slug: 'profitability',
        kicker: 'Pilar 03',
        title: 'Rentabilidad y Analítica de Negocio',
        businessProblem:
          'El crecimiento en ingresos y el crecimiento en utilidad no son lo mismo, y la mayoría de los reportes no están diseñados para mostrar dónde se separan.',
        whatWeInvestigate:
          'Margen por producto, cliente, región y canal; segmentación y retención de clientes; el puñado de cuentas o productos que, en silencio, trabajan en contra del negocio.',
        whatWeDeliver:
          'Un desglose de margen por las dimensiones que importan a su negocio, una segmentación de dónde se concentra el valor, y una proyección basada en su propio patrón histórico — no en una plantilla genérica.',
        decisionEnabled: 'Dónde invertir, dónde retirarse, y qué relaciones o productos vale la pena renegociar.',
        caseStudySlug: 'profitability-analytics',
      },
    ],
    capabilitiesTitle: 'Las capacidades detrás de los tres pilares',
    dataEngGroupTitle: 'Datos e Ingeniería',
    dataEngItems: [
      'Analítica SQL / Python — la capa de extracción y validación bajo los tres pilares',
      'Gobierno y Validación de Datos — sostiene los hallazgos de Calidad de Datos más allá de la auditoría inicial',
      'Analítica de Procesos — apoya las investigaciones de margen y proceso de Rentabilidad',
      'Ingeniería de Datos — trabajo de pipelines cuando un diagnóstico se convierte en monitoreo continuo',
    ],
    aiMlGroupTitle: 'IA, ML y Reporting',
    aiMlItems: [
      'Machine Learning / Analítica Predictiva — la capa de modelado dentro de Fraude y Riesgo y Rentabilidad',
      'Business Intelligence / Power BI — la capa de visualización ejecutiva común a los tres casos de estudio',
      'Dashboards y Automatización — cómo los hallazgos de un diagnóstico permanecen visibles después de la entrega',
    ],
  },
}
