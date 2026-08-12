import type { Bilingual } from '../types'

export interface ContactPageContent {
  intro: string
  locationLine: string
}

export const contactContent: Bilingual<ContactPageContent> = {
  en: {
    intro:
      "Let's investigate what your data isn't telling you. This starts as a conversation, not a form submission into a queue — tell us what's not adding up, and we'll tell you honestly whether it's something worth looking at together.",
    locationLine: 'Medellín, Colombia (GMT-5) — available for remote engagements internationally.',
  },
  es: {
    intro:
      'Investiguemos lo que sus datos no le están diciendo. Esto empieza como una conversación, no como un formulario que cae en una cola — cuéntenos qué no está cuadrando, y le diremos con honestidad si vale la pena revisarlo juntos.',
    locationLine: 'Medellín, Colombia (GMT-5) — disponible para proyectos remotos a nivel internacional.',
  },
}

export const CONTACT_EMAIL = 'miguelangelhenaoc2007@gmail.com'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/henaom777/'
export const GITHUB_URL = 'https://github.com/HenaoM7'
export const WHATSAPP_NUMBER = '573002421730'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`
