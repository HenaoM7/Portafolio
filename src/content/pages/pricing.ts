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
  note?: string
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

export interface PricingPageContent {
  kicker: string
  title: string
  intro: string
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
    kicker: 'Pricing',
    title: 'Three ways to start, one method behind all of them',
    intro:
      "Every engagement starts with an investigation, not a quote. The ranges below are a planning reference — the exact scope and investment for anything beyond the Executive Data Assessment is defined after we've actually looked at your data and your problem, never before.",
    tiers: [
      {
        id: 'assessment',
        kicker: 'Start here',
        name: 'Executive Data Assessment',
        priceLabel: 'From US$500',
        priceNote: 'Fixed price · one-time',
        duration: '5–7 business days',
        bestFor:
          "You suspect there's a data problem but don't yet know its size, its cause, or whether it's worth a bigger investment.",
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
        priceLabel: 'US$1,200 – 1,800',
        priceNote: 'Scoped after the Assessment',
        duration: '3–4 weeks',
        bestFor:
          'The Assessment (or your own team) already pointed to one specific problem — a data quality fix, a risk model, or an executive dashboard — and you want it solved, not just described.',
        includes: [
          'Everything the diagnostic found, scoped into one pillar: Data Quality, Fraud & Risk, or Profitability',
          'Technical build for that single deliverable (pipeline fix, scoring model, or dashboard)',
          'Documentation of what was built and why',
          'One structured revision round',
          'Handover session with your team',
        ],
        excludes: [
          'Multiple pillars in the same engagement',
          'Ongoing monitoring or managed service',
          'Custom ML research beyond a proven approach',
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
          'The problem spans more than one pillar — dirty data feeding an unreliable dashboard, or a risk process that also needs automation — and needs to be solved end to end.',
        includes: [
          'Source analysis and information validation across systems',
          'Indicator and KPI construction',
          'Executive dashboard',
          'Process automation where the evidence supports it',
          'Full technical documentation and data model',
          'Team training session',
          'Phased delivery: analysis → build → validation → handover',
        ],
        excludes: [
          'Anything not tied to a diagnosed problem — we don\'t sell scope the evidence didn\'t ask for',
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
      { label: 'Data quality / risk / margin assessment', values: ['yes', 'partial', 'yes'], note: 'Focused tier assumes the assessment already happened' },
      { label: 'Executive report with prioritized findings', values: ['yes', 'no', 'yes'] },
      { label: 'Single-pillar implementation', values: ['no', 'yes', 'yes'] },
      { label: 'Multi-pillar / end-to-end implementation', values: ['no', 'no', 'yes'] },
      { label: 'Executive dashboard', values: ['no', 'partial', 'yes'], note: 'Included in Focused only if the dashboard is the chosen deliverable' },
      { label: 'Process automation', values: ['no', 'no', 'yes'] },
      { label: 'Full technical documentation', values: ['no', 'yes', 'yes'] },
      { label: 'Team training / handover session', values: ['no', 'yes', 'yes'] },
      { label: 'Structured revision round', values: ['no', 'yes', 'yes'] },
      { label: 'Results presentation meeting', values: ['yes', 'yes', 'yes'] },
    ],
    paymentTitle: 'How payment works',
    paymentIntro: "No card checkout on this page — every engagement is confirmed in writing before money moves. That's deliberate: it's the same discipline the diagnostic itself is built on.",
    paymentSteps: [
      {
        title: '1. Scope in writing',
        body: 'Before any payment, you get a written proposal stating exactly what is included, the timeline, and the price — matching the Pricing tier or a custom scope discussed in the discovery call.',
      },
      {
        title: '2. Invoice',
        body: 'The Executive Data Assessment is invoiced upfront as a fixed price. Focused and Full engagements follow a milestone schedule stated in the proposal (typically a portion upfront, the remainder at delivery).',
      },
      {
        title: '3. Payment method',
        body: 'Bank transfer or Nequi for Colombian clients; international wire transfer or PayPal for clients elsewhere. The exact method is confirmed with your invoice — whichever is simplest on your end.',
      },
    ],
    competitorKicker: 'The honest comparison',
    competitorTitle: "What you're actually choosing between",
    competitorIntro:
      "Not to claim we're right for everyone — to make the trade-offs explicit, so you can pick the option that actually fits your problem, not just the cheapest-sounding one.",
    competitorColumns: { henao: 'Henao Intelligence', freelancer: 'Typical Independent Freelancer', agency: 'Large Traditional Consultancy' },
    competitorRows: [
      {
        dimension: 'Where the engagement starts',
        henao: 'With a paid diagnostic that produces evidence before any solution is proposed',
        freelancer: 'With the tool they already know — Power BI, Python — offered from the first message',
        agency: 'With weeks of unpaid discovery before you see any deliverable',
      },
      {
        dimension: 'Scope discipline',
        henao: 'Scope is exactly what the diagnostic found — nothing sold that the evidence didn\'t ask for',
        freelancer: 'Scope is informal and shifts mid-project, usually in your favor until it suddenly isn\'t',
        agency: 'Scope is rigid; anything outside it becomes a change order with its own price tag',
      },
      {
        dimension: 'Quality review',
        henao: 'A separate reviewer role checks every deliverable before delivery — never the same person who built it',
        freelancer: 'Self-reviewed — there is no second set of eyes by design',
        agency: 'Reviewed, but diluted across account layers that add time, not necessarily rigor',
      },
      {
        dimension: 'Entry price',
        henao: 'From US$500 for a fixed-scope diagnostic — a real deliverable, not a sales call',
        freelancer: 'Variable, sometimes "free" — quality and follow-through are the real cost',
        agency: 'Typical project minimums start at US$10,000+, often regardless of actual scope',
      },
      {
        dimension: 'Who you actually talk to',
        henao: 'Miguel Ángel Henao Cañas, directly, for the entire engagement',
        freelancer: 'Also direct — but without a documented method behind the work',
        agency: 'An account manager first; the person doing the analysis is usually someone you never meet',
      },
      {
        dimension: 'Handling of your data',
        henao: 'A documented least-privilege framework — see the Privacy Policy for exactly how it works',
        freelancer: 'Rarely documented at all',
        agency: 'Documented, but generic — written for liability, not for your specific engagement',
      },
    ],
    faqTitle: 'Before you ask',
    faqs: [
      {
        q: 'Why does the price range grow instead of being fixed?',
        a: "Because the Focused and Full tiers respond to what your data actually needs — which we don't know until the Assessment (or an equivalent internal diagnosis) has happened. A fixed number before that point would be a guess, not a quote.",
      },
      {
        q: 'Can I skip the Assessment and go straight to a proposal?',
        a: "If you already have a clear, evidenced diagnosis — your own or from someone else — yes. We'll validate it in the discovery meeting before scoping the proposal, at no extra cost.",
      },
      {
        q: 'What currency are these prices in?',
        a: 'US dollars, as a common reference for both local and international clients. Colombian clients are invoiced in COP at the prevailing rate; the underlying scope and investment are the same.',
      },
      {
        q: 'Do you offer ongoing or retainer work?',
        a: "For clients who need continuous monitoring, iteration, or a growing scope after a Full Engagement, yes — that's scoped individually once we know what ongoing work is actually justified.",
      },
    ],
    disclaimer:
      'Prices are a planning reference for evaluating whether an engagement fits your budget, not a binding quote. The final scope and investment for the Focused and Full tiers are confirmed in writing before any work beyond the Assessment begins.',
    finalCtaTitle: "Not sure which tier fits?",
    finalCtaBody: "That's exactly what the first conversation is for. Tell us what's not adding up, and we'll tell you honestly where to start.",
  },
  es: {
    kicker: 'Precios',
    title: 'Tres formas de empezar, un solo método detrás de todas',
    intro:
      'Todo proyecto empieza con una investigación, no con una cotización. Los rangos de abajo son una referencia de planeación — el alcance y la inversión exactos para cualquier cosa más allá del Diagnóstico Ejecutivo se definen después de haber revisado sus datos y su problema, nunca antes.',
    tiers: [
      {
        id: 'assessment',
        kicker: 'Empiece aquí',
        name: 'Diagnóstico Ejecutivo de Datos',
        priceLabel: 'Desde US$500',
        priceNote: 'Precio fijo · pago único',
        duration: '5–7 días hábiles',
        bestFor:
          'Sospecha que hay un problema de datos pero aún no sabe su tamaño, su causa, ni si vale la pena una inversión mayor.',
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
        priceLabel: 'US$1.200 – 1.800',
        priceNote: 'Se define después del Diagnóstico',
        duration: '3–4 semanas',
        bestFor:
          'El Diagnóstico (o su propio equipo) ya señaló un problema específico — una corrección de calidad de datos, un modelo de riesgo, o un dashboard ejecutivo — y quiere resolverlo, no solo describirlo.',
        includes: [
          'Todo lo que arrojó el diagnóstico, delimitado a un solo pilar: Calidad de Datos, Fraude y Riesgo, o Rentabilidad',
          'Construcción técnica de ese entregable único (corrección de pipeline, modelo de scoring, o dashboard)',
          'Documentación de qué se construyó y por qué',
          'Una ronda estructurada de ajustes',
          'Sesión de entrega con su equipo',
        ],
        excludes: [
          'Varios pilares en el mismo proyecto',
          'Monitoreo continuo o servicio administrado',
          'Investigación de ML a la medida más allá de un enfoque ya probado',
        ],
        ctaLabel: 'Conversar sobre este plan',
        featured: true,
      },
      {
        id: 'full',
        kicker: 'Para problemas de varias partes',
        name: 'Proyecto Integral',
        priceLabel: 'Desde US$2.500',
        priceNote: 'Inversión final confirmada en la propuesta',
        duration: '6–8 semanas',
        bestFor:
          'El problema abarca más de un pilar — datos sucios alimentando un dashboard poco confiable, o un proceso de riesgo que también necesita automatización — y hay que resolverlo de punta a punta.',
        includes: [
          'Análisis de fuentes y validación de información entre sistemas',
          'Construcción de indicadores y KPIs',
          'Dashboard ejecutivo',
          'Automatización de procesos donde la evidencia lo respalde',
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
      { label: 'Evaluación de calidad / riesgo / margen', values: ['yes', 'partial', 'yes'], note: 'El plan Enfocado asume que el diagnóstico ya se hizo' },
      { label: 'Informe ejecutivo con hallazgos priorizados', values: ['yes', 'no', 'yes'] },
      { label: 'Implementación de un solo pilar', values: ['no', 'yes', 'yes'] },
      { label: 'Implementación multi-pilar de punta a punta', values: ['no', 'no', 'yes'] },
      { label: 'Dashboard ejecutivo', values: ['no', 'partial', 'yes'], note: 'Incluido en Enfocado solo si el dashboard es el entregable elegido' },
      { label: 'Automatización de procesos', values: ['no', 'no', 'yes'] },
      { label: 'Documentación técnica completa', values: ['no', 'yes', 'yes'] },
      { label: 'Capacitación / sesión de entrega al equipo', values: ['no', 'yes', 'yes'] },
      { label: 'Ronda estructurada de ajustes', values: ['no', 'yes', 'yes'] },
      { label: 'Reunión de presentación de resultados', values: ['yes', 'yes', 'yes'] },
    ],
    paymentTitle: 'Cómo funciona el pago',
    paymentIntro: 'No hay botón de pago con tarjeta en esta página — todo proyecto se confirma por escrito antes de que se mueva dinero. Es deliberado: es la misma disciplina sobre la que está construido el propio diagnóstico.',
    paymentSteps: [
      {
        title: '1. Alcance por escrito',
        body: 'Antes de cualquier pago, usted recibe una propuesta escrita que indica exactamente qué incluye, el cronograma y el precio — según el plan de Precios o un alcance a la medida definido en la llamada de descubrimiento.',
      },
      {
        title: '2. Factura',
        body: 'El Diagnóstico Ejecutivo se factura por adelantado a precio fijo. Los proyectos Enfocados e Integrales siguen un cronograma de pagos por hitos indicado en la propuesta (típicamente un porcentaje inicial y el resto contra entrega).',
      },
      {
        title: '3. Medio de pago',
        body: 'Transferencia bancaria o Nequi para clientes en Colombia; transferencia internacional o PayPal para clientes en otros países. El medio exacto se confirma junto con la factura — el que resulte más simple de su lado.',
      },
    ],
    competitorKicker: 'La comparación honesta',
    competitorTitle: 'Entre qué está eligiendo realmente',
    competitorIntro:
      'No para decir que somos la opción correcta para todos — para dejar explícitas las diferencias, de modo que elija la opción que realmente se ajusta a su problema, no solo la que suena más barata.',
    competitorColumns: { henao: 'Henao Intelligence', freelancer: 'Freelancer Independiente Típico', agency: 'Consultora Tradicional Grande' },
    competitorRows: [
      {
        dimension: 'Dónde empieza el proyecto',
        henao: 'Con un diagnóstico pago que produce evidencia antes de proponer cualquier solución',
        freelancer: 'Con la herramienta que ya conoce — Power BI, Python — ofrecida desde el primer mensaje',
        agency: 'Con semanas de discovery sin costo antes de ver cualquier entregable',
      },
      {
        dimension: 'Disciplina de alcance',
        henao: 'El alcance es exactamente lo que encontró el diagnóstico — nunca se vende lo que la evidencia no pidió',
        freelancer: 'El alcance es informal y cambia a mitad de proyecto, usualmente a su favor hasta que deja de serlo',
        agency: 'El alcance es rígido; cualquier cosa fuera de él se convierte en una orden de cambio con precio propio',
      },
      {
        dimension: 'Revisión de calidad',
        henao: 'Un rol de revisión separado verifica cada entregable antes de entregarlo — nunca la misma persona que lo construyó',
        freelancer: 'Se autorevisa — no hay una segunda mirada por diseño',
        agency: 'Se revisa, pero diluido entre capas de cuenta que suman tiempo, no necesariamente rigor',
      },
      {
        dimension: 'Precio de entrada',
        henao: 'Desde US$500 por un diagnóstico de alcance fijo — un entregable real, no una llamada de ventas',
        freelancer: 'Variable, a veces "gratis" — la calidad y el seguimiento son el costo real',
        agency: 'Los mínimos de proyecto típicos parten de US$10.000+, muchas veces sin importar el alcance real',
      },
      {
        dimension: 'Con quién habla realmente',
        henao: 'Con Miguel Ángel Henao Cañas, directamente, durante todo el proyecto',
        freelancer: 'También directo — pero sin un método documentado detrás del trabajo',
        agency: 'Primero con un account manager; a quien hace el análisis usualmente nunca lo conoce',
      },
      {
        dimension: 'Manejo de sus datos',
        henao: 'Un marco documentado de mínimo privilegio — vea la Política de Privacidad para el detalle exacto',
        freelancer: 'Rara vez documentado en absoluto',
        agency: 'Documentado, pero genérico — escrito para efectos legales, no para su proyecto específico',
      },
    ],
    faqTitle: 'Antes de preguntar',
    faqs: [
      {
        q: '¿Por qué el rango de precio crece en vez de ser fijo?',
        a: 'Porque los planes Enfocado e Integral responden a lo que sus datos realmente necesitan — algo que no sabemos hasta que el Diagnóstico (o un diagnóstico interno equivalente) ya ocurrió. Dar una cifra fija antes de ese punto sería una suposición, no una cotización.',
      },
      {
        q: '¿Puedo saltarme el Diagnóstico e ir directo a una propuesta?',
        a: 'Si ya cuenta con un diagnóstico claro y con evidencia — propio o de un tercero — sí. Lo validaremos en la reunión de descubrimiento antes de definir la propuesta, sin costo adicional.',
      },
      {
        q: '¿En qué moneda están estos precios?',
        a: 'En dólares estadounidenses, como referencia común para clientes locales e internacionales. A los clientes en Colombia se les factura en pesos colombianos a la tasa vigente; el alcance y la inversión de fondo son los mismos.',
      },
      {
        q: '¿Ofrecen trabajo continuo o por destajo (retainer)?',
        a: 'Para clientes que necesitan monitoreo continuo, iteración, o un alcance creciente después de un Proyecto Integral, sí — se define de forma individual una vez que sabemos qué trabajo continuo está realmente justificado.',
      },
    ],
    disclaimer:
      'Los precios son una referencia de planeación para evaluar si un proyecto se ajusta a su presupuesto, no una cotización vinculante. El alcance y la inversión final de los planes Enfocado e Integral se confirman por escrito antes de iniciar cualquier trabajo más allá del Diagnóstico.',
    finalCtaTitle: '¿No está seguro de qué plan le conviene?',
    finalCtaBody: 'Para eso es exactamente la primera conversación. Cuéntenos qué no está cuadrando, y le diremos con honestidad por dónde empezar.',
  },
}
