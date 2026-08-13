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

export interface CapabilityGroup {
  title: string
  items: string[]
}

export interface SolutionExample {
  clientProblem: string
  path: string
  solution: string
}

export interface ServicesPageContent {
  intro: string
  problemsKicker: string
  problemsIntro: string
  pillars: ServicePillarContent[]
  capabilitiesKicker: string
  capabilitiesTitle: string
  capabilitiesIntro: string
  capabilityGroups: CapabilityGroup[]
  flexibilityKicker: string
  flexibilityTitle: string
  flexibilityIntro: string
  examples: SolutionExample[]
}

export const servicesContent: Bilingual<ServicesPageContent> = {
  en: {
    intro:
      "Henao Intelligence is a data and technology intelligence consultancy. We investigate the business problem first, then determine what to build — a data quality fix, a fraud model, an automated pipeline, a machine learning system — whatever the evidence says the problem actually needs. The three areas below are where we've proven that method most thoroughly. They're examples of what we investigate, not the limit of what we build.",
    problemsKicker: 'Business Problems We Investigate',
    problemsIntro: 'Three examples, each backed by a full case study.',
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
    capabilitiesKicker: 'What We Build With',
    capabilitiesTitle: 'Solution Capabilities',
    capabilitiesIntro:
      "Technology is the outcome of an investigation, not the starting point — we don't sell Python or Power BI in isolation. Once the diagnosis is done, this is what we build with.",
    capabilityGroups: [
      {
        title: 'Data & Engineering',
        items: ['Data Analytics', 'Data Engineering', 'Data Architecture', 'Data Quality Engineering', 'SQL / Python'],
      },
      {
        title: 'Intelligence & Automation',
        items: ['Data Science', 'Machine Learning', 'Artificial Intelligence', 'Predictive Modeling', 'Automation'],
      },
      {
        title: 'Decision Support',
        items: ['Business Intelligence', 'Power BI', 'Statistical Analysis', 'Dashboarding & Reporting'],
      },
    ],
    flexibilityKicker: 'Beyond the Three',
    flexibilityTitle: 'How a Problem Becomes a Solution',
    flexibilityIntro:
      "The method doesn't change based on the problem — only the destination does. These are illustrative of how an investigation resolves into a solution; they describe the method's range, not completed engagements.",
    examples: [
      {
        clientProblem: '"Our reports don\'t match."',
        path: 'Discover → Diagnose → Analyze → Evidence',
        solution: 'Often resolves into Data Quality + Data Engineering + Automation — fixing the root inconsistency and keeping it fixed.',
      },
      {
        clientProblem: '"We\'re losing hours to manual processes."',
        path: 'Discover → Diagnose → Analyze → Evidence',
        solution: 'Often resolves into Process Analysis + Automation + Monitoring — replacing repetition with a system that watches itself.',
      },
      {
        clientProblem: '"We need to predict something before it happens."',
        path: 'Discover → Diagnose → Analyze → Evidence',
        solution: 'Often resolves into Data Engineering + Data Science + Machine Learning — built on data solid enough to trust the prediction.',
      },
    ],
  },
  es: {
    intro:
      'Henao Intelligence es una consultoría de inteligencia de datos y tecnología. Investigamos primero el problema de negocio, y después determinamos qué construir — una corrección de calidad de datos, un modelo de fraude, un pipeline automatizado, un sistema de machine learning — lo que la evidencia indique que el problema realmente necesita. Las tres áreas de abajo son donde hemos probado ese método con mayor profundidad. Son ejemplos de lo que investigamos, no el límite de lo que construimos.',
    problemsKicker: 'Problemas de Negocio que Investigamos',
    problemsIntro: 'Tres ejemplos, cada uno respaldado por un caso de estudio completo.',
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
    capabilitiesKicker: 'Con Qué Construimos',
    capabilitiesTitle: 'Capacidades de Solución',
    capabilitiesIntro:
      'La tecnología es el resultado de una investigación, no el punto de partida — no vendemos Python o Power BI de forma aislada. Una vez hecho el diagnóstico, esto es con lo que construimos.',
    capabilityGroups: [
      {
        title: 'Datos e Ingeniería',
        items: ['Analítica de Datos', 'Ingeniería de Datos', 'Arquitectura de Datos', 'Ingeniería de Calidad de Datos', 'SQL / Python'],
      },
      {
        title: 'Inteligencia y Automatización',
        items: ['Ciencia de Datos', 'Machine Learning', 'Inteligencia Artificial', 'Modelado Predictivo', 'Automatización'],
      },
      {
        title: 'Soporte a la Decisión',
        items: ['Business Intelligence', 'Power BI', 'Análisis Estadístico', 'Dashboards y Reporting'],
      },
    ],
    flexibilityKicker: 'Más Allá de los Tres',
    flexibilityTitle: 'Cómo un Problema se Convierte en una Solución',
    flexibilityIntro:
      'El método no cambia según el problema — solo cambia el destino. Esto ilustra cómo una investigación se resuelve en una solución; describe el alcance del método, no proyectos ya completados.',
    examples: [
      {
        clientProblem: '"Nuestros reportes no coinciden."',
        path: 'Descubrir → Diagnosticar → Analizar → Evidenciar',
        solution: 'Suele resolverse en Calidad de Datos + Ingeniería de Datos + Automatización — corrigiendo la inconsistencia de raíz y manteniéndola corregida.',
      },
      {
        clientProblem: '"Perdemos horas en procesos manuales."',
        path: 'Descubrir → Diagnosticar → Analizar → Evidenciar',
        solution: 'Suele resolverse en Análisis de Procesos + Automatización + Monitoreo — reemplazando la repetición con un sistema que se vigila a sí mismo.',
      },
      {
        clientProblem: '"Necesitamos predecir algo antes de que ocurra."',
        path: 'Descubrir → Diagnosticar → Analizar → Evidenciar',
        solution: 'Suele resolverse en Ingeniería de Datos + Ciencia de Datos + Machine Learning — construido sobre datos lo suficientemente sólidos para confiar en la predicción.',
      },
    ],
  },
}
