import type { Bilingual } from '../types'

export interface AboutPageContent {
  kicker: string
  title: string
  companyParagraphs: string[]
  evolutionTitle: string
  evolutionBody: string
  founderKicker: string
  founderName: string
  founderRole: string
  founderBio: string
  founderCta: { view: string; download: string }
  credentialsTitle: string
  credentialsBody: string
}

export const aboutContent: Bilingual<AboutPageContent> = {
  en: {
    kicker: 'About',
    title: 'Henao Intelligence',
    companyParagraphs: [
      'Henao Intelligence is a technology and data intelligence consulting practice. We investigate the business problems that live inside data — quality gaps, fraud exposure, and lost profitability — for companies that no longer fully trust their own numbers.',
      "Our approach is consultive, not transactional. Every engagement starts with a business question, not a dashboard build: we diagnose the data, investigate the pattern, turn what we find into evidence, and hand over a decision — not a slide deck of charts. That sequence is the practice's method, applied the same way whether the question is about data quality, fraud, or profitability.",
      'We combine data analytics, applied statistics, machine learning, and software quality assurance discipline — the last one is what sets the approach apart. Before trusting a number, we check it. That habit shapes how every investigation is run.',
    ],
    evolutionTitle: 'Where the practice is headed',
    evolutionBody:
      "Deeper into data engineering and applied machine learning, with quantum computing as a longer-range research interest — not a service offered today, but a direction the practice is building toward.",
    founderKicker: 'Founder',
    founderName: 'Miguel Ángel Henao Cañas',
    founderRole: 'Founder & Lead Data Professional',
    founderBio:
      "Miguel leads Henao Intelligence's investigations. He currently works as a Data Quality Analyst / QA Engineer at Quipux, validating millions of transactional records in production systems — the background that shaped the practice's evidence-first method. He's completing a degree in Systems Technology (final semester, expected 2026), alongside 30+ certifications in data science, statistics, machine learning, and business intelligence.",
    founderCta: { view: 'View CV', download: 'Download CV' },
    credentialsTitle: 'Credentials',
    credentialsBody:
      '30+ certifications across Data & BI, Machine Learning & AI, Programming, and Security — from Platzi, SENA, and HackerRank.',
  },
  es: {
    kicker: 'Sobre Nosotros',
    title: 'Henao Intelligence',
    companyParagraphs: [
      'Henao Intelligence es una práctica de consultoría en tecnología e inteligencia de datos. Investigamos los problemas de negocio que viven dentro de los datos — vacíos de calidad, exposición al fraude y utilidad perdida — para empresas que ya no confían del todo en sus propias cifras.',
      'Nuestro enfoque es consultivo, no transaccional. Cada proyecto empieza con una pregunta de negocio, no con la construcción de un dashboard: diagnosticamos los datos, investigamos el patrón, convertimos lo que encontramos en evidencia, y entregamos una decisión — no una presentación de gráficos. Esa secuencia es el método de la práctica, aplicado de la misma forma sin importar si la pregunta es sobre calidad de datos, fraude o rentabilidad.',
      'Combinamos analítica de datos, estadística aplicada, machine learning y la disciplina del aseguramiento de calidad de software — esta última es lo que diferencia el enfoque. Antes de confiar en una cifra, la verificamos. Ese hábito define cómo se ejecuta cada investigación.',
    ],
    evolutionTitle: 'Hacia dónde va la práctica',
    evolutionBody:
      'Más profundidad en ingeniería de datos y machine learning aplicado, con la computación cuántica como interés de investigación de largo plazo — no un servicio que se ofrezca hoy, sino una dirección hacia la que la práctica está construyendo.',
    founderKicker: 'Fundador',
    founderName: 'Miguel Ángel Henao Cañas',
    founderRole: 'Fundador y Líder de Datos',
    founderBio:
      'Miguel lidera las investigaciones de Henao Intelligence. Actualmente trabaja como Analista de Calidad de Datos / Ingeniero QA en Quipux, validando millones de registros transaccionales en sistemas de producción — la experiencia que dio forma al método de la práctica centrado en evidencia. Está terminando una Tecnología en Sistemas (último semestre, graduación estimada en 2026), junto con más de 30 certificaciones en ciencia de datos, estadística, machine learning e inteligencia de negocio.',
    founderCta: { view: 'Ver CV', download: 'Descargar CV' },
    credentialsTitle: 'Credenciales',
    credentialsBody:
      'Más de 30 certificaciones en Datos y BI, Machine Learning e IA, Programación, y Seguridad — de Platzi, SENA y HackerRank.',
  },
}

export const CV_PATH = '/CV/Miguel_Henao_CV_DataAnalyst_2026.pdf'
