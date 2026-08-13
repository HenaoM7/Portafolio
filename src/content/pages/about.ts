import type { Bilingual } from '../types'

export interface AboutPageContent {
  kicker: string
  title: string
  companyParagraphs: string[]
  capabilitiesLine: string
  capabilitiesLinkLabel: string
  evolutionTitle: string
  evolutionBody: string
  credentialsTitle: string
  credentialsBody: string
}

export const aboutContent: Bilingual<AboutPageContent> = {
  en: {
    kicker: 'About',
    title: 'Henao Intelligence',
    companyParagraphs: [
      'Henao Intelligence is a data and technology intelligence consulting practice. We investigate the business problems that live inside data and the processes around it — unreliable numbers, manual work, fragmented systems, hidden risk, lost profitability — for companies that no longer fully trust what their own data is telling them.',
      "Our approach is consultive, not transactional. Every engagement starts with a business question, not a technology choice: we diagnose what's actually happening, investigate the pattern, turn what we find into evidence, and hand over a decision — not a slide deck of charts. That sequence is the practice's method, applied the same way regardless of what the problem turns out to need.",
      'We combine data analytics, data engineering, applied statistics, machine learning, and software quality assurance discipline — the last one is what sets the approach apart. Before trusting a number, we check it. That habit shapes how every investigation is run, and what gets built once the investigation is done.',
    ],
    capabilitiesLine:
      "What we build with depends entirely on what the investigation finds — data engineering, machine learning, automation, business intelligence, or some combination none of those names alone would capture.",
    capabilitiesLinkLabel: 'See the full range of solution capabilities',
    evolutionTitle: 'Where the practice is headed',
    evolutionBody:
      "Deeper into data engineering and applied machine learning, with quantum computing as a longer-range research interest — not a service offered today, but a direction the practice is building toward.",
    credentialsTitle: 'Credentials',
    credentialsBody:
      '30+ certifications across Data & BI, Machine Learning & AI, Programming, and Security — from Platzi, SENA, and HackerRank.',
  },
  es: {
    kicker: 'Sobre Nosotros',
    title: 'Henao Intelligence',
    companyParagraphs: [
      'Henao Intelligence es una práctica de consultoría en datos y tecnología. Investigamos los problemas de negocio que viven dentro de los datos y de los procesos que los rodean — cifras poco confiables, trabajo manual, sistemas fragmentados, riesgo oculto, utilidad perdida — para empresas que ya no confían del todo en lo que sus propios datos les están diciendo.',
      'Nuestro enfoque es consultivo, no transaccional. Cada proyecto empieza con una pregunta de negocio, no con una elección de tecnología: diagnosticamos qué está pasando realmente, investigamos el patrón, convertimos lo que encontramos en evidencia, y entregamos una decisión — no una presentación de gráficos. Esa secuencia es el método de la práctica, aplicado de la misma forma sin importar qué termine necesitando el problema.',
      'Combinamos analítica de datos, ingeniería de datos, estadística aplicada, machine learning y la disciplina del aseguramiento de calidad de software — esta última es lo que diferencia el enfoque. Antes de confiar en una cifra, la verificamos. Ese hábito define cómo se ejecuta cada investigación, y qué se construye una vez que la investigación termina.',
    ],
    capabilitiesLine:
      'Con qué construimos depende por completo de lo que encuentre la investigación — ingeniería de datos, machine learning, automatización, business intelligence, o alguna combinación que ningún nombre por sí solo alcanzaría a describir.',
    capabilitiesLinkLabel: 'Ver el rango completo de capacidades de solución',
    evolutionTitle: 'Hacia dónde va la práctica',
    evolutionBody:
      'Más profundidad en ingeniería de datos y machine learning aplicado, con la computación cuántica como interés de investigación de largo plazo — no un servicio que se ofrezca hoy, sino una dirección hacia la que la práctica está construyendo.',
    credentialsTitle: 'Credenciales',
    credentialsBody:
      'Más de 30 certificaciones en Datos y BI, Machine Learning e IA, Programación, y Seguridad — de Platzi, SENA y HackerRank.',
  },
}
