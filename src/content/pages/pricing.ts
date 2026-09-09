import type { Bilingual } from '../types'

export interface PricingTier {
  id: 'assessment' | 'focused' | 'full'
  kicker: string
  name: string
  priceLabel: string
  priceNote: string
  duration: string
  bestFor: string
  includes: string[]
  excludes: string[]
  ctaLabel: string
  featured?: boolean
}

export type FeatureState = 'yes' | 'no' | 'partial'

export interface ComparisonRow {
  label: string
  values: [FeatureState, FeatureState, FeatureState]
}

export interface PaymentStep {
  title: string
  body: string
}

export interface CompetitorRow {
  dimension: string
  henao: string
  freelancer: string
  agency: string
}

export interface CapabilityOutcome {
  title: string
  items: string[]
}

export interface PricingPageContent {
  kicker: string
  title: string
  intro: string
  modelKicker: string
  modelTitle: string
  modelIntro: string
  modelSteps: string[]
  modelLinkLabel: string
  outcomesKicker: string
  outcomesTitle: string
  outcomesIntro: string
  outcomes: string[]
  capabilitiesKicker: string
  capabilitiesTitle: string
  capabilitiesIntro: string
  capabilities: CapabilityOutcome[]
  tiersKicker: string
  tiersTitle: string
  tiers: PricingTier[]
  comparisonTitle: string
  comparisonIntro: string
  comparisonRows: ComparisonRow[]
  paymentTitle: string
  paymentIntro: string
  paymentSteps: PaymentStep[]
  competitorKicker: string
  competitorTitle: string
  competitorIntro: string
  competitorColumns: { henao: string; freelancer: string; agency: string }
  competitorRows: CompetitorRow[]
  faqTitle: string
  faqs: { q: string; a: string }[]
  disclaimer: string
  finalCtaTitle: string
  finalCtaBody: string
}

export const pricingContent: Bilingual<PricingPageContent> = {
  en: {
    kicker: 'Investment',
    title: 'From a data problem to a solution that can be measured',
    intro:
      "We don't start by building dashboards, models, or automations. We start by understanding the problem, examining the evidence, and determining which solution actually makes sense for your business — then we price that, not a package.",
    modelKicker: 'How an engagement is priced',
    modelTitle: 'The price follows the problem, not the other way around',
    modelIntro:
      "Every engagement follows the same method described on our Method page — the pricing below simply marks where an investment enters that sequence.",
    modelSteps: ['Discover', 'Diagnose', 'Analyze', 'Evidence', 'Recommend', 'Implement'],
    modelLinkLabel: 'See the full method',
    outcomesKicker: 'What the business gets',
    outcomesTitle: "The goal isn't technology — it's a result",
    outcomesIntro:
      'A data quality fix, a risk model, or a dashboard are means, not the point. What we\'re actually optimizing for:',
    outcomes: [
      'Less time lost to manual, repetitive work',
      'Indicators leadership can actually trust',
      'Risk and anomalies caught earlier',
      'Fewer operational errors reaching the customer',
      'Faster answers to recurring business questions',
      'Decisions grounded in evidence instead of instinct',
    ],
    capabilitiesKicker: 'What can come out of the diagnosis',
    capabilitiesTitle: "You don't need to know which technology you need",
    capabilitiesIntro:
      "You can walk in saying \"our numbers don't match\" or \"we're losing hours to a manual process\" — not \"I need a machine learning model.\" The diagnosis determines which of these actually applies, in whatever combination the evidence supports:",
    capabilities: [
      { title: 'Data & Engineering', items: ['Data Quality', 'Data Engineering', 'Data Architecture', 'Pipelines'] },
      { title: 'Intelligence & Automation', items: ['Machine Learning', 'Predictive Modeling', 'Process Automation', 'Fraud & Risk Detection'] },
      { title: 'Decision Support', items: ['Business Intelligence', 'Executive Dashboards', 'Statistical Analysis', 'Profitability Analytics'] },
    ],
    tiersKicker: 'Investment ranges',
    tiersTitle: 'Three points of entry, one method behind all of them',
    tiers: [
      {
        id: 'assessment',
        kicker: 'Start here',
        name: 'Executive Data Assessment',
        priceLabel: 'US$500',
        priceNote: 'Fixed price · one-time',
        duration: '5–7 business days',
        bestFor:
          "You suspect there's a problem — unreliable numbers, a slow manual process, an unexplained loss — but don't yet know its size, its cause, or which capability above would actually fix it.",
        includes: [
          'Discovery meeting to understand your business and data context',
          'Review of a data sample you provide',
          'Data quality and reliability assessment',
          'Identification of inconsistencies, anomalies, and risk exposure',
          'Detection of analysis and automation opportunities',
          'Executive report with prioritized findings and recommendations',
          'Results presentation meeting',
        ],
        excludes: [
          'Dashboard development',
          'Automation or pipeline builds',
          'Machine learning models',
          'System integrations',
          'Production implementation',
        ],
        ctaLabel: 'Request the Assessment',
      },
      {
        id: 'focused',
        kicker: 'Most common next step',
        name: 'Focused Implementation',
        priceLabel: 'From US$1,200',
        priceNote: 'Scoped after the diagnosis',
        duration: '3–4 weeks',
        bestFor:
          "The diagnosis (or your own team) already pointed to one concrete, delimited problem, and you want it solved — not just described.",
        includes: [
          'Solves one delimited problem end to end — the capability involved (data engineering, automation, a model, a dashboard, or a mix) is whatever the diagnosis actually points to, not a fixed category',
          'Technical build for that single deliverable',
          'Documentation of what was built and why',
          'One structured revision round',
          'Handover session with your team',
        ],
        excludes: [
          'Multiple unrelated problems in the same engagement',
          'Ongoing monitoring or managed service',
          'Open-ended research beyond a proven approach',
        ],
        ctaLabel: 'Talk About This Tier',
        featured: true,
      },
      {
        id: 'full',
        kicker: 'For multi-part problems',
        name: 'Full Engagement',
        priceLabel: 'From US$2,500',
        priceNote: 'Final investment confirmed in the proposal',
        duration: '6–8 weeks',
        bestFor:
          'The problem needs more than one capability working together — dirty data feeding an unreliable dashboard, or a risk process that also needs automation — solved end to end.',
        includes: [
          'Source analysis and information validation across systems',
          'Indicator and KPI construction',
          'Executive dashboard',
          'Process automation where the evidence supports it',
          'Machine learning where the evidence supports it',
          'Full technical documentation and data model',
          'Team training session',
          'Phased delivery: analysis → build → validation → handover',
        ],
        excludes: [
          "Anything not tied to a diagnosed problem — we don't sell scope the evidence didn't ask for",
        ],
        ctaLabel: 'Scope a Full Engagement',
      },
    ],
    comparisonTitle: 'Compare what each tier actually includes',
    comparisonIntro:
      "No tier includes anything the diagnostic didn't justify. This table is meant to set expectations, not to upsell.",
    comparisonRows: [
      { label: 'Discovery meeting', values: ['yes', 'yes', 'yes'] },
      { label: 'Review of a client-provided data sample', values: ['yes', 'yes', 'yes'] },
      { label: 'Problem assessment', values: ['yes', 'yes', 'yes'] },
      { label: 'Executive report with prioritized findings', values: ['yes', 'no', 'yes'] },
      { label: 'One delimited problem solved end to end', values: ['no', 'yes', 'yes'] },
      { label: 'Multiple problems solved end to end', values: ['no', 'no', 'yes'] },
      { label: 'Executive dashboard', values: ['no', 'partial', 'yes'] },
      { label: 'Process automation', values: ['no', 'partial', 'yes'] },
      { label: 'Machine learning', values: ['no', 'partial', 'partial'] },
      { label: 'Full technical documentation', values: ['no', 'yes', 'yes'] },
      { label: 'Team training / handover session', values: ['no', 'yes', 'yes'] },
      { label: 'Independent QA review before delivery', values: ['yes', 'yes', 'yes'] },
      { label: 'Results presentation meeting', values: ['yes', 'yes', 'yes'] },
    ],
    paymentTitle: 'Hiring process',
    paymentIntro: 'Short by design — this is confirmation, not the decision itself.',
    paymentSteps: [
      { title: '1. Diagnosis & scope', body: 'The Assessment (or an equivalent you already have) defines what actually needs solving.' },
      { title: '2. Written proposal', body: 'Scope, timeline, and price, confirmed before any work beyond the Assessment begins.' },
      { title: '3. Payment & start', body: 'Invoiced per the schedule in the proposal — bank transfer, Nequi, wire, or PayPal, whichever is simplest on your end.' },
    ],
    competitorKicker: 'A different method',
    competitorTitle: "What you're actually choosing between",
    competitorIntro:
      "Not to claim we're right for everyone — to make the difference in approach explicit, so you can judge whether it fits your problem.",
    competitorColumns: { henao: 'Henao Intelligence', freelancer: 'Typical Freelancer', agency: 'Traditional Consultancy' },
    competitorRows: [
      {
        dimension: 'Starting point',
        henao: 'The business problem',
        freelancer: 'The tool or solution requested',
        agency: 'Weeks of unpaid discovery before any deliverable',
      },
      {
        dimension: 'How decisions are made',
        henao: 'Based on evidence gathered during diagnosis',
        freelancer: 'Based on the initial request, taken at face value',
        agency: 'Based on a scope frozen before the analysis starts',
      },
      {
        dimension: 'Scope',
        henao: 'Defined after the diagnosis, exactly to what the evidence found',
        freelancer: 'Informal, tends to shift mid-project',
        agency: 'Rigid; anything outside it becomes a paid change order',
      },
      {
        dimension: 'Data',
        henao: 'Validated for quality and reliability before anything is built on it',
        freelancer: 'Used directly, as provided',
        agency: 'Used directly, as provided',
      },
      {
        dimension: 'Solution',
        henao: 'Determined by the findings — could be engineering, automation, a model, or a dashboard',
        freelancer: 'Determined by what was requested',
        agency: 'Determined by what was sold',
      },
      {
        dimension: 'Quality review',
        henao: 'A separate reviewer checks every deliverable — never the same person who built it',
        freelancer: 'Self-reviewed, no second set of eyes by design',
        agency: 'Reviewed, but diluted across account layers',
      },
      {
        dimension: 'Entry price',
        henao: 'From US$500 for a real, fixed-scope deliverable',
        freelancer: 'Variable, sometimes "free" — quality and follow-through are the real cost',
        agency: 'Typical minimums start at US$10,000+, often regardless of actual scope',
      },
      {
        dimension: 'Result',
        henao: 'A solution, plus the evidence and documentation behind it',
        freelancer: 'The specific deliverable requested',
        agency: 'The deliverable agreed at the start, whether or not it turns out to fit',
      },
    ],
    faqTitle: 'Before you ask',
    faqs: [
      {
        q: 'What kind of problems can I bring you?',
        a: 'Anything related to: data quality, integration, and reliability; analytics and decision support; automating manual processes; machine learning where the data justifies it; BI and executive dashboards; or risk and fraud patterns. If you\'re not sure it fits, ask — that\'s what the first conversation is for.',
      },
      {
        q: 'What if I already know what the problem is?',
        a: "We can look at it directly. If there's already enough evidence to define the scope, the Assessment can be adapted or even skipped — it's the recommended starting point, not a mandatory toll.",
      },
      {
        q: 'Do my data and processes need to be organized already?',
        a: "Not necessarily. Determining the actual quality, structure, and availability of what you have is itself part of the early work — it's normal to start without that clarity.",
      },
      {
        q: "Why does the Focused tier say 'from' instead of a fixed price?",
        a: "Because what it solves — and how — is whatever the diagnosis actually finds. A fixed number before that point would be a guess, not a quote.",
      },
      {
        q: 'What currency are these prices in?',
        a: 'US dollars, as a common reference for local and international clients. Colombian clients are invoiced in COP at the prevailing rate; the underlying scope and investment are the same.',
      },
      {
        q: 'Do you offer ongoing or retainer work?',
        a: "For clients who need continuous monitoring or a growing scope after a Full Engagement, yes — scoped individually once we know what ongoing work is actually justified.",
      },
    ],
    disclaimer:
      'Prices are a planning reference for evaluating whether an engagement fits your budget, not a binding quote. The final scope and investment for the Focused and Full tiers are confirmed in writing before any work beyond the Assessment begins.',
    finalCtaTitle: 'Not sure which tier fits?',
    finalCtaBody: "That's exactly what the first conversation is for. Tell us what's not working, and we'll tell you honestly where to start.",
  },
  es: {
    kicker: 'Inversión',
    title: 'De un problema de datos a una solución que se puede medir',
    intro:
      'No empezamos construyendo dashboards, modelos o automatizaciones. Empezamos por entender el problema, examinar la evidencia y determinar qué solución tiene sentido para su negocio — y eso es lo que cotizamos, no un paquete.',
    modelKicker: 'Cómo se cotiza un proyecto',
    modelTitle: 'El precio sigue al problema, no al revés',
    modelIntro:
      'Todo proyecto sigue el mismo método descrito en nuestra página de Método — los precios de abajo solo marcan en qué punto de esa secuencia entra una inversión.',
    modelSteps: ['Descubrir', 'Diagnosticar', 'Analizar', 'Evidenciar', 'Recomendar', 'Implementar'],
    modelLinkLabel: 'Ver el método completo',
    outcomesKicker: 'Qué obtiene el negocio',
    outcomesTitle: 'El objetivo no es la tecnología — es un resultado',
    outcomesIntro:
      'Una corrección de calidad de datos, un modelo de riesgo o un dashboard son el medio, no el fin. Lo que realmente buscamos:',
    outcomes: [
      'Menos tiempo perdido en trabajo manual y repetitivo',
      'Indicadores en los que la dirección realmente pueda confiar',
      'Riesgos y anomalías detectados antes',
      'Menos errores operativos que lleguen al cliente final',
      'Respuestas más rápidas a preguntas de negocio recurrentes',
      'Decisiones basadas en evidencia, no en intuición',
    ],
    capabilitiesKicker: 'Qué puede salir del diagnóstico',
    capabilitiesTitle: 'No necesita saber qué tecnología necesita',
    capabilitiesIntro:
      'Puede llegar diciendo "nuestros números no cuadran" o "perdemos horas en un proceso manual" — no "necesito un modelo de machine learning". El diagnóstico determina cuál de esto aplica realmente, en la combinación que la evidencia respalde:',
    capabilities: [
      { title: 'Datos e Ingeniería', items: ['Calidad de Datos', 'Ingeniería de Datos', 'Arquitectura de Datos', 'Pipelines'] },
      { title: 'Inteligencia y Automatización', items: ['Machine Learning', 'Modelado Predictivo', 'Automatización de Procesos', 'Detección de Fraude y Riesgo'] },
      { title: 'Soporte a la Decisión', items: ['Business Intelligence', 'Dashboards Ejecutivos', 'Análisis Estadístico', 'Analítica de Rentabilidad'] },
    ],
    tiersKicker: 'Rangos de inversión',
    tiersTitle: 'Tres puntos de entrada, un solo método detrás de todos',
    tiers: [
      {
        id: 'assessment',
        kicker: 'Empiece aquí',
        name: 'Diagnóstico Ejecutivo de Datos',
        priceLabel: 'US$500',
        priceNote: 'Precio fijo · pago único',
        duration: '5–7 días hábiles',
        bestFor:
          'Sospecha que hay un problema — cifras poco confiables, un proceso manual lento, una pérdida sin explicar — pero aún no sabe su tamaño, su causa, ni cuál de las capacidades de arriba lo resolvería.',
        includes: [
          'Reunión de descubrimiento para entender su negocio y el contexto de sus datos',
          'Revisión de una muestra de datos que usted proporcione',
          'Evaluación de calidad y confiabilidad de los datos',
          'Identificación de inconsistencias, anomalías y exposición a riesgo',
          'Detección de oportunidades de análisis y automatización',
          'Informe ejecutivo con hallazgos y recomendaciones priorizadas',
          'Reunión de presentación de resultados',
        ],
        excludes: [
          'Desarrollo de dashboards',
          'Automatizaciones o pipelines',
          'Modelos de machine learning',
          'Integraciones con sistemas',
          'Implementación en producción',
        ],
        ctaLabel: 'Solicitar el Diagnóstico',
      },
      {
        id: 'focused',
        kicker: 'El siguiente paso más común',
        name: 'Implementación Enfocada',
        priceLabel: 'Desde US$1.200',
        priceNote: 'Se define después del diagnóstico',
        duration: '3–4 semanas',
        bestFor:
          'El diagnóstico (o su propio equipo) ya señaló un problema concreto y delimitado, y quiere resolverlo — no solo describirlo.',
        includes: [
          'Resuelve un problema delimitado de punta a punta — la capacidad involucrada (ingeniería de datos, automatización, un modelo, un dashboard, o una combinación) es la que determine el diagnóstico, no una categoría fija',
          'Construcción técnica de ese entregable único',
          'Documentación de qué se construyó y por qué',
          'Una ronda estructurada de ajustes',
          'Sesión de entrega con su equipo',
        ],
        excludes: [
          'Varios problemas sin relación en el mismo proyecto',
          'Monitoreo continuo o servicio administrado',
          'Investigación abierta más allá de un enfoque ya probado',
        ],
        ctaLabel: 'Conversar sobre este plan',
        featured: true,
      },
      {
        id: 'full',
        kicker: 'Para problemas de varios componentes',
        name: 'Proyecto Integral',
        priceLabel: 'Desde US$2.500',
        priceNote: 'Inversión final confirmada en la propuesta',
        duration: '6–8 semanas',
        bestFor:
          'El problema necesita más de una capacidad trabajando junta — datos sucios alimentando un dashboard poco confiable, o un proceso de riesgo que también necesita automatización — resuelto de punta a punta.',
        includes: [
          'Análisis de fuentes y validación de información entre sistemas',
          'Construcción de indicadores y KPIs',
          'Dashboard ejecutivo',
          'Automatización de procesos donde la evidencia lo respalde',
          'Machine learning donde la evidencia lo respalde',
          'Documentación técnica completa y modelo de datos',
          'Sesión de capacitación al equipo',
          'Entrega por fases: análisis → construcción → validación → entrega',
        ],
        excludes: [
          'Cualquier cosa que no responda a un problema diagnosticado — no vendemos alcance que la evidencia no pidió',
        ],
        ctaLabel: 'Definir un Proyecto Integral',
      },
    ],
    comparisonTitle: 'Compare qué incluye realmente cada plan',
    comparisonIntro:
      'Ningún plan incluye algo que el diagnóstico no haya justificado. Esta tabla busca fijar expectativas, no vender de más.',
    comparisonRows: [
      { label: 'Reunión de descubrimiento', values: ['yes', 'yes', 'yes'] },
      { label: 'Revisión de una muestra de datos del cliente', values: ['yes', 'yes', 'yes'] },
      { label: 'Evaluación del problema', values: ['yes', 'yes', 'yes'] },
      { label: 'Informe ejecutivo con hallazgos priorizados', values: ['yes', 'no', 'yes'] },
      { label: 'Un problema delimitado resuelto de punta a punta', values: ['no', 'yes', 'yes'] },
      { label: 'Varios problemas resueltos de punta a punta', values: ['no', 'no', 'yes'] },
      { label: 'Dashboard ejecutivo', values: ['no', 'partial', 'yes'] },
      { label: 'Automatización de procesos', values: ['no', 'partial', 'yes'] },
      { label: 'Machine learning', values: ['no', 'partial', 'partial'] },
      { label: 'Documentación técnica completa', values: ['no', 'yes', 'yes'] },
      { label: 'Capacitación / sesión de entrega al equipo', values: ['no', 'yes', 'yes'] },
      { label: 'Revisión de QA independiente antes de entregar', values: ['yes', 'yes', 'yes'] },
      { label: 'Reunión de presentación de resultados', values: ['yes', 'yes', 'yes'] },
    ],
    paymentTitle: 'Proceso de contratación',
    paymentIntro: 'Corto a propósito — esto es confirmación, no la decisión en sí.',
    paymentSteps: [
      { title: '1. Diagnóstico y alcance', body: 'El Diagnóstico (o uno equivalente que ya tenga) define qué hay que resolver realmente.' },
      { title: '2. Propuesta escrita', body: 'Alcance, cronograma y precio, confirmados antes de iniciar cualquier trabajo más allá del Diagnóstico.' },
      { title: '3. Pago e inicio', body: 'Se factura según el cronograma de la propuesta — transferencia bancaria, Nequi, giro internacional o PayPal, lo que sea más simple de su lado.' },
    ],
    competitorKicker: 'Un método distinto',
    competitorTitle: 'Entre qué está eligiendo realmente',
    competitorIntro:
      'No para decir que somos la opción correcta para todos — para dejar explícita la diferencia de enfoque, de modo que pueda juzgar si se ajusta a su problema.',
    competitorColumns: { henao: 'Henao Intelligence', freelancer: 'Freelancer Típico', agency: 'Consultora Tradicional' },
    competitorRows: [
      {
        dimension: 'Punto de partida',
        henao: 'El problema de negocio',
        freelancer: 'La herramienta o solución solicitada',
        agency: 'Semanas de discovery sin costo antes de ver cualquier entregable',
      },
      {
        dimension: 'Cómo se deciden las cosas',
        henao: 'Con base en la evidencia recolectada durante el diagnóstico',
        freelancer: 'Con base en la solicitud inicial, tomada tal cual',
        agency: 'Con base en un alcance congelado antes de empezar el análisis',
      },
      {
        dimension: 'Alcance',
        henao: 'Definido después del diagnóstico, exactamente a lo que encontró la evidencia',
        freelancer: 'Informal, tiende a cambiar a mitad de proyecto',
        agency: 'Rígido; cualquier cosa fuera de él se convierte en una orden de cambio pagada',
      },
      {
        dimension: 'Datos',
        henao: 'Validados en calidad y confiabilidad antes de construir algo sobre ellos',
        freelancer: 'Se usan directamente, tal como se entregan',
        agency: 'Se usan directamente, tal como se entregan',
      },
      {
        dimension: 'Solución',
        henao: 'Determinada por los hallazgos — puede ser ingeniería, automatización, un modelo o un dashboard',
        freelancer: 'Determinada por lo que se solicitó',
        agency: 'Determinada por lo que se vendió',
      },
      {
        dimension: 'Revisión de calidad',
        henao: 'Un revisor independiente verifica cada entregable — nunca la misma persona que lo construyó',
        freelancer: 'Se autorevisa, sin una segunda mirada por diseño',
        agency: 'Se revisa, pero diluido entre capas de cuenta',
      },
      {
        dimension: 'Precio de entrada',
        henao: 'Desde US$500 por un entregable real de alcance fijo',
        freelancer: 'Variable, a veces "gratis" — la calidad y el seguimiento son el costo real',
        agency: 'Los mínimos típicos parten de US$10.000+, muchas veces sin importar el alcance real',
      },
      {
        dimension: 'Resultado',
        henao: 'Una solución, más la evidencia y documentación detrás de ella',
        freelancer: 'El entregable específico solicitado',
        agency: 'El entregable acordado al inicio, encaje o no con lo que realmente hacía falta',
      },
    ],
    faqTitle: 'Antes de preguntar',
    faqs: [
      {
        q: '¿Qué tipo de problemas pueden traerme?',
        a: 'Cualquier cosa relacionada con: calidad, integración y confiabilidad de datos; analítica y soporte a la decisión; automatización de procesos manuales; machine learning cuando los datos lo justifiquen; BI y dashboards ejecutivos; o patrones de riesgo y fraude. Si no está seguro de que aplique, pregunte — para eso es la primera conversación.',
      },
      {
        q: '¿Qué pasa si ya sé cuál es el problema?',
        a: 'Podemos revisarlo directamente. Si ya existe suficiente evidencia para definir el alcance, el Diagnóstico puede adaptarse o incluso no ser necesario — es el punto de partida recomendado, no un peaje obligatorio.',
      },
      {
        q: '¿Necesito tener mis datos y procesos organizados?',
        a: 'No necesariamente. Determinar la calidad, estructura y disponibilidad real de lo que tiene es en sí parte del trabajo inicial — es normal empezar sin esa claridad.',
      },
      {
        q: "¿Por qué el plan Enfocado dice \"desde\" en vez de un precio fijo?",
        a: 'Porque qué resuelve — y cómo — depende de lo que encuentre el diagnóstico. Dar una cifra fija antes de ese punto sería una suposición, no una cotización.',
      },
      {
        q: '¿En qué moneda están estos precios?',
        a: 'En dólares estadounidenses, como referencia común para clientes locales e internacionales. A los clientes en Colombia se les factura en pesos colombianos a la tasa vigente; el alcance y la inversión de fondo son los mismos.',
      },
      {
        q: '¿Ofrecen trabajo continuo o por destajo (retainer)?',
        a: 'Para clientes que necesitan monitoreo continuo o un alcance creciente después de un Proyecto Integral, sí — se define de forma individual una vez que sabemos qué trabajo continuo está realmente justificado.',
      },
    ],
    disclaimer:
      'Los precios son una referencia de planeación para evaluar si un proyecto se ajusta a su presupuesto, no una cotización vinculante. El alcance y la inversión final de los planes Enfocado e Integral se confirman por escrito antes de iniciar cualquier trabajo más allá del Diagnóstico.',
    finalCtaTitle: '¿No está seguro de qué plan le conviene?',
    finalCtaBody: 'Para eso es exactamente la primera conversación. Cuéntenos qué no está funcionando, y le diremos con honestidad por dónde empezar.',
  },
}
