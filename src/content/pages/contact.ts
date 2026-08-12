import type { Bilingual } from '../types'

export interface ContactPageContent {
  intro: string
  locationLine: string
}

export const contactContent: Bilingual<ContactPageContent> = {
  en: {
    intro:
      "This starts as a conversation, not a form submission into a queue. Tell me what's not adding up, and I'll tell you honestly whether it's something we should look at together.",
    locationLine: 'Medellín, Colombia (GMT-5) — available for remote engagements internationally.',
  },
  es: {
    intro:
      'Esto empieza como una conversación, no como un formulario que cae en una cola. Cuénteme qué no está cuadrando, y le diré con honestidad si es algo que deberíamos revisar juntos.',
    locationLine: 'Medellín, Colombia (GMT-5) — disponible para proyectos remotos a nivel internacional.',
  },
}

export const CONTACT_EMAIL = 'miguelangelhenaoc2007@gmail.com'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/henaom777/'
export const GITHUB_URL = 'https://github.com/HenaoM7'
