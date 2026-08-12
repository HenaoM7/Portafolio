import type { Bilingual } from '../types'

export interface AboutPageContent {
  paragraphs: string[]
  evolutionTitle: string
  evolutionBody: string
  credentialsTitle: string
  credentialsBody: string
}

export const aboutContent: Bilingual<AboutPageContent> = {
  en: {
    paragraphs: [
      "I'm Miguel Ángel Henao Cañas. I work at the intersection of data quality, business intelligence, and applied analytics — currently as a Data Quality Analyst / QA Engineer at Quipux, where I validate millions of transactional records in production systems, and independently, building the evidence-based investigations behind this site.",
      "The two aren't separate tracks. Quality assurance taught me to ask whether a number can be trusted before doing anything else with it — completeness, uniqueness, consistency, referential integrity, checked before conclusions get drawn. Most of the failures I've found in data analysis, mine included, trace back to skipping that step.",
      "I'm completing a degree in Systems Technology (final semester, expected 2026), alongside more than 30 certifications in data science, statistics, machine learning, and business intelligence. Three investigations — data quality, fraud and risk, and profitability — form the evidence behind the services this site offers; several more technical projects, in predictive modeling and applied machine learning, sit alongside them as capability evidence.",
    ],
    evolutionTitle: 'Where this is headed',
    evolutionBody:
      'Deeper into data engineering and applied machine learning, with quantum computing as a longer-range research interest — not a service I offer today, but a direction I\'m building toward.',
    credentialsTitle: 'Credentials',
    credentialsBody:
      '30+ certifications across Data & BI, Machine Learning & AI, Programming, and Security — from Platzi, SENA, and HackerRank.',
  },
  es: {
    paragraphs: [
      'Soy Miguel Ángel Henao Cañas. Trabajo en la intersección entre calidad de datos, inteligencia de negocio y analítica aplicada — actualmente como Analista de Calidad de Datos / Ingeniero QA en Quipux, donde valido millones de registros transaccionales en sistemas de producción, y de forma independiente, construyendo las investigaciones basadas en evidencia detrás de este sitio.',
      'Los dos no son caminos separados. El aseguramiento de calidad me enseñó a preguntar si una cifra es confiable antes de hacer cualquier otra cosa con ella — completitud, unicidad, consistencia, integridad referencial, verificadas antes de sacar conclusiones. La mayoría de las fallas que he encontrado en análisis de datos, incluyendo los míos, se remontan a saltarse ese paso.',
      'Estoy terminando una Tecnología en Sistemas (último semestre, graduación estimada en 2026), junto con más de 30 certificaciones en ciencia de datos, estadística, machine learning e inteligencia de negocio. Tres investigaciones — calidad de datos, fraude y riesgo, y rentabilidad — son la evidencia detrás de los servicios de este sitio; varios proyectos técnicos adicionales, en modelado predictivo y machine learning aplicado, las acompañan como evidencia de capacidad.',
    ],
    evolutionTitle: 'Hacia dónde va esto',
    evolutionBody:
      'Más profundidad en ingeniería de datos y machine learning aplicado, con la computación cuántica como interés de investigación de largo plazo — no un servicio que ofrezca hoy, sino una dirección hacia la que estoy construyendo.',
    credentialsTitle: 'Credenciales',
    credentialsBody:
      'Más de 30 certificaciones en Datos y BI, Machine Learning e IA, Programación, y Seguridad — de Platzi, SENA y HackerRank.',
  },
}
