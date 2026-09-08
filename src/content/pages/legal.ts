import type { Bilingual } from '../types'

export interface LegalSection {
  heading: string
  paragraphs: string[]
  list?: string[]
}

export interface LegalPageContent {
  kicker: string
  title: string
  lastUpdated: string
  disclaimer: string
  operatorLine: string
  sections: LegalSection[]
}

const LAST_UPDATED = '2026-09-06'

export const privacyContent: Bilingual<LegalPageContent> = {
  en: {
    kicker: 'Legal',
    title: 'Privacy Policy',
    lastUpdated: `Last updated: ${LAST_UPDATED}`,
    disclaimer:
      "This policy is a good-faith description of our data practices, drafted for transparency — it is not a substitute for legal advice. If you are evaluating a contract with us, we encourage you to have your own counsel review it.",
    operatorLine:
      'Henao Intelligence is the trade name under which Miguel Ángel Henao Cañas provides independent data and technology consulting services, operating as a natural person / self-employed professional (persona natural) based in Medellín, Colombia — not yet a separately incorporated legal entity.',
    sections: [
      {
        heading: '1. What data we collect',
        paragraphs: [
          'We collect the information you actively provide through the contact form, email, WhatsApp, or LinkedIn: your name, company, business email, role, and the description of the business challenge you share with us.',
          'If we begin an Executive Data Assessment or any paid engagement, we additionally receive the data sample or business context you choose to share for that specific purpose, under the scope agreed with you in advance.',
        ],
      },
      {
        heading: '2. Legal basis and applicable framework',
        paragraphs: [
          'For contacts and clients based in Colombia, this processing is governed by Law 1581 of 2012 (Habeas Data) and Decree 1377 of 2013. Your data is processed based on your consent, given by submitting the contact form or initiating a conversation with us, and — once a paid engagement starts — based on the performance of that contract.',
          "For contacts based outside Colombia, we apply the same standard of care described here as a matter of practice, even where a different local framework (such as the GDPR) may formally apply.",
        ],
      },
      {
        heading: '3. How we use your data',
        paragraphs: [
          'To respond to your inquiry, schedule a discovery conversation, prepare and deliver a diagnostic or proposal, and, if you become a client, to execute the agreed engagement.',
          'We do not sell, rent, or share your personal data with third parties for marketing purposes. Data shared as part of a paid engagement is used exclusively for that engagement.',
        ],
      },
      {
        heading: '4. Client data during an engagement',
        paragraphs: [
          'Any business data you share as part of an Executive Data Assessment or implementation project is handled under a least-privilege, need-to-know basis. We follow an internal delivery framework that separates who can read, write, or execute against client data, and we never expose credentials, API keys, or unmasked personally identifiable information in any deliverable, report, or repository without your explicit agreement on how it should be masked or aggregated.',
          "Raw client data is never modified in place — any transformation is applied to a working copy so the original is always recoverable and auditable.",
          "We do not use your business data to train third-party AI models beyond what is strictly required to produce your deliverable, and we do not retain your data beyond what's needed to deliver and support the engagement, unless you ask us to keep it longer for a follow-up project.",
        ],
      },
      {
        heading: '5. Your rights',
        paragraphs: [
          'As a data subject, you can ask us at any time to:',
        ],
        list: [
          'Know what personal data we hold about you (access)',
          'Correct inaccurate or incomplete data (rectification)',
          'Request deletion of your data once there is no active engagement or legal reason to retain it (deletion)',
          'Withdraw your consent to be contacted (revocation)',
          'Ask how your data has been used (proof and consultation)',
        ],
      },
      {
        heading: '6. How to exercise your rights',
        paragraphs: [
          'Send a written request to miguelangelhenaoc2007@gmail.com with the subject "Data Rights Request". We will respond within the terms established by Colombian law for personal data requests.',
        ],
      },
      {
        heading: '7. Cookies and website analytics',
        paragraphs: [
          "This website does not use advertising cookies or third-party tracking pixels. If analytics are added in the future, this policy will be updated in advance of that change taking effect.",
        ],
      },
      {
        heading: '8. Changes to this policy',
        paragraphs: [
          'We may update this policy as the practice grows — for example, if it becomes a registered legal entity. Material changes will be reflected in the "last updated" date above.',
        ],
      },
    ],
  },
  es: {
    kicker: 'Legal',
    title: 'Política de Privacidad',
    lastUpdated: `Última actualización: ${LAST_UPDATED}`,
    disclaimer:
      'Esta política es una descripción de buena fe de nuestras prácticas de manejo de datos, redactada por transparencia — no reemplaza una asesoría legal. Si está evaluando un contrato con nosotros, le recomendamos que la revise con su propio abogado.',
    operatorLine:
      'Henao Intelligence es el nombre comercial bajo el cual Miguel Ángel Henao Cañas presta servicios independientes de consultoría en datos y tecnología, operando como persona natural con sede en Medellín, Colombia — aún no como una sociedad constituida de forma independiente.',
    sections: [
      {
        heading: '1. Qué datos recopilamos',
        paragraphs: [
          'Recopilamos la información que usted proporciona activamente a través del formulario de contacto, correo electrónico, WhatsApp o LinkedIn: su nombre, empresa, correo corporativo, cargo, y la descripción del desafío de negocio que comparta con nosotros.',
          'Si iniciamos un Diagnóstico Ejecutivo de Datos o cualquier proyecto pago, adicionalmente recibimos la muestra de datos o el contexto de negocio que usted decida compartir para ese propósito específico, bajo el alcance acordado previamente con usted.',
        ],
      },
      {
        heading: '2. Base legal y marco aplicable',
        paragraphs: [
          'Para contactos y clientes ubicados en Colombia, este tratamiento se rige por la Ley 1581 de 2012 (Habeas Data) y el Decreto 1377 de 2013. Sus datos se tratan con base en su consentimiento, otorgado al diligenciar el formulario de contacto o iniciar una conversación con nosotros, y — una vez inicia un proyecto pago — con base en la ejecución de ese contrato.',
          'Para contactos ubicados fuera de Colombia, aplicamos como práctica el mismo estándar de cuidado descrito aquí, incluso cuando formalmente pueda aplicar un marco local distinto (como el RGPD/GDPR).',
        ],
      },
      {
        heading: '3. Cómo usamos sus datos',
        paragraphs: [
          'Para responder su consulta, agendar una conversación de descubrimiento, preparar y entregar un diagnóstico o propuesta, y, si se convierte en cliente, ejecutar el proyecto acordado.',
          'No vendemos, alquilamos ni compartimos sus datos personales con terceros con fines de mercadeo. Los datos compartidos como parte de un proyecto pago se usan exclusivamente para ese proyecto.',
        ],
      },
      {
        heading: '4. Datos del cliente durante un proyecto',
        paragraphs: [
          'Cualquier dato de negocio que usted comparta como parte de un Diagnóstico Ejecutivo o proyecto de implementación se maneja bajo un esquema de mínimo privilegio y necesidad de conocer. Seguimos un marco interno de entrega que separa quién puede leer, escribir o ejecutar sobre los datos del cliente, y nunca exponemos credenciales, llaves de API, ni información personal identificable sin enmascarar en ningún entregable, informe o repositorio sin su acuerdo explícito sobre cómo debe enmascararse o agregarse.',
          'Los datos crudos del cliente nunca se modifican en el origen — cualquier transformación se aplica sobre una copia de trabajo, de modo que el original siempre sea recuperable y auditable.',
          'No usamos sus datos de negocio para entrenar modelos de IA de terceros más allá de lo estrictamente necesario para producir su entregable, y no conservamos sus datos más tiempo del necesario para entregar y dar soporte al proyecto, salvo que usted nos pida conservarlos para un proyecto de seguimiento.',
        ],
      },
      {
        heading: '5. Sus derechos',
        paragraphs: [
          'Como titular de los datos, puede solicitarnos en cualquier momento:',
        ],
        list: [
          'Conocer qué datos personales tenemos sobre usted (acceso)',
          'Corregir datos inexactos o incompletos (rectificación)',
          'Solicitar la eliminación de sus datos cuando no haya un proyecto activo ni una razón legal para conservarlos (supresión)',
          'Revocar su consentimiento para ser contactado (revocatoria)',
          'Preguntar cómo se han usado sus datos (prueba y consulta)',
        ],
      },
      {
        heading: '6. Cómo ejercer sus derechos',
        paragraphs: [
          'Envíe una solicitud escrita a miguelangelhenaoc2007@gmail.com con el asunto "Solicitud de Derechos de Datos". Responderemos dentro de los términos establecidos por la ley colombiana para solicitudes sobre datos personales.',
        ],
      },
      {
        heading: '7. Cookies y analítica del sitio web',
        paragraphs: [
          'Este sitio web no usa cookies publicitarias ni píxeles de rastreo de terceros. Si en el futuro se agrega analítica, esta política se actualizará antes de que ese cambio entre en vigencia.',
        ],
      },
      {
        heading: '8. Cambios a esta política',
        paragraphs: [
          'Podemos actualizar esta política a medida que la práctica crezca — por ejemplo, si se convierte en una sociedad legalmente constituida. Los cambios importantes se reflejarán en la fecha de "última actualización" de arriba.',
        ],
      },
    ],
  },
}

export const termsContent: Bilingual<LegalPageContent> = {
  en: {
    kicker: 'Legal',
    title: 'Terms of Service',
    lastUpdated: `Last updated: ${LAST_UPDATED}`,
    disclaimer:
      'These terms are a professional draft describing how we work, intended to set clear expectations — they do not constitute legal advice. Before signing any engagement, we recommend having them reviewed by your own counsel, and final terms for a specific project are always confirmed in a written proposal or statement of work (SOW) signed by both parties.',
    operatorLine:
      'These terms apply to services offered under the trade name Henao Intelligence by Miguel Ángel Henao Cañas, an independent consultant (persona natural) based in Medellín, Colombia.',
    sections: [
      {
        heading: '1. Services covered',
        paragraphs: [
          'These terms apply to the Executive Data Assessment and to Focused or Full data, analytics, and automation engagements described on the Pricing page, as well as any other data and technology consulting service scoped individually in writing.',
        ],
      },
      {
        heading: '2. How an engagement starts',
        paragraphs: [
          'Every engagement begins with a discovery conversation. Paid work beyond the Executive Data Assessment starts only after both parties agree in writing to a scope, timeline, deliverables, and price — no implementation work begins on the strength of a verbal agreement alone.',
        ],
      },
      {
        heading: '3. Pricing and payment',
        paragraphs: [
          'The Executive Data Assessment is billed at a fixed price, payable before or at the start of the engagement. Focused and Full engagements are billed according to the payment schedule stated in the written proposal for that project (commonly a portion upfront and the remainder tied to milestones or delivery) — the exact terms are confirmed per project, not assumed from this page.',
          'Prices on the Pricing page are stated in US dollars as a planning reference; Colombian clients may be invoiced in Colombian pesos at the exchange rate in effect at the time of the proposal.',
        ],
      },
      {
        heading: '4. Confidentiality',
        paragraphs: [
          'Any business information, data, or documentation you share with us is treated as confidential and is used solely to deliver the agreed engagement. We are open to signing a mutual non-disclosure agreement (NDA) before any data sample is shared, if you require one.',
        ],
      },
      {
        heading: '5. Intellectual property',
        paragraphs: [
          'Upon full payment, you own the specific deliverables produced for your engagement (reports, dashboards, models, and code built specifically for you). Reusable internal methods, templates, and frameworks used to produce that work remain the property of Henao Intelligence and may be reused for other clients, provided your confidential data and identity are never disclosed.',
        ],
      },
      {
        heading: '6. What is not included',
        paragraphs: [
          "We only build what the diagnosed problem justifies. Any request outside the written scope of an engagement — including production deployment, infrastructure hosting, or ongoing monitoring — is treated as new scope and quoted separately, not assumed to be included.",
        ],
      },
      {
        heading: '7. Cancellation and changes',
        paragraphs: [
          "Either party may propose changes to scope, timeline, or deliverables in writing at any point; changes are only binding once both parties confirm them. If you cancel a Focused or Full engagement after work has started, you remain responsible for the portion of work already completed, as specified in the signed proposal for that project.",
        ],
      },
      {
        heading: '8. Limitation of liability',
        paragraphs: [
          'Our work is based on the data and context you provide. We are not liable for decisions made using our findings if they were based on incomplete or inaccurate information that was not disclosed to us, nor for indirect or consequential damages beyond the value of the engagement itself.',
        ],
      },
      {
        heading: '9. Governing law',
        paragraphs: [
          'These terms are governed by the laws of Colombia. For international clients, the governing law and jurisdiction for a specific engagement can be discussed and stated explicitly in the written proposal.',
        ],
      },
    ],
  },
  es: {
    kicker: 'Legal',
    title: 'Términos de Servicio',
    lastUpdated: `Última actualización: ${LAST_UPDATED}`,
    disclaimer:
      'Estos términos son un borrador profesional que describe cómo trabajamos, pensado para fijar expectativas claras — no constituyen asesoría legal. Antes de firmar cualquier proyecto, recomendamos que los revise con su propio abogado, y los términos finales de un proyecto específico siempre se confirman en una propuesta escrita o statement of work (SOW) firmado por ambas partes.',
    operatorLine:
      'Estos términos aplican a los servicios ofrecidos bajo el nombre comercial Henao Intelligence por Miguel Ángel Henao Cañas, consultor independiente (persona natural) con sede en Medellín, Colombia.',
    sections: [
      {
        heading: '1. Servicios cubiertos',
        paragraphs: [
          'Estos términos aplican al Diagnóstico Ejecutivo de Datos y a los proyectos Enfocados o Integrales de datos, analítica y automatización descritos en la página de Precios, así como a cualquier otro servicio de consultoría en datos y tecnología definido individualmente por escrito.',
        ],
      },
      {
        heading: '2. Cómo inicia un proyecto',
        paragraphs: [
          'Todo proyecto empieza con una conversación de descubrimiento. El trabajo pago más allá del Diagnóstico Ejecutivo solo inicia después de que ambas partes acuerden por escrito el alcance, cronograma, entregables y precio — ningún trabajo de implementación comienza únicamente con base en un acuerdo verbal.',
        ],
      },
      {
        heading: '3. Precios y forma de pago',
        paragraphs: [
          'El Diagnóstico Ejecutivo se factura a precio fijo, pagadero antes o al inicio del proyecto. Los proyectos Enfocados e Integrales se facturan según el cronograma de pagos establecido en la propuesta escrita de ese proyecto (comúnmente un porcentaje inicial y el resto ligado a hitos o entrega) — los términos exactos se confirman por proyecto, no se asumen de esta página.',
          'Los precios de la página de Precios están expresados en dólares estadounidenses como referencia de planeación; a los clientes en Colombia se les puede facturar en pesos colombianos a la tasa de cambio vigente al momento de la propuesta.',
        ],
      },
      {
        heading: '4. Confidencialidad',
        paragraphs: [
          'Cualquier información de negocio, dato o documentación que usted comparta con nosotros se trata como confidencial y se usa únicamente para entregar el proyecto acordado. Estamos abiertos a firmar un acuerdo mutuo de confidencialidad (NDA) antes de compartir cualquier muestra de datos, si usted lo requiere.',
        ],
      },
      {
        heading: '5. Propiedad intelectual',
        paragraphs: [
          'Una vez pagado en su totalidad, usted es propietario de los entregables específicos producidos para su proyecto (informes, dashboards, modelos y código construidos específicamente para usted). Los métodos, plantillas y marcos internos reutilizables usados para producir ese trabajo siguen siendo propiedad de Henao Intelligence y pueden reutilizarse con otros clientes, siempre que sus datos confidenciales e identidad nunca se divulguen.',
        ],
      },
      {
        heading: '6. Qué no está incluido',
        paragraphs: [
          'Solo construimos lo que el problema diagnosticado justifica. Cualquier solicitud fuera del alcance escrito de un proyecto — incluyendo despliegue en producción, alojamiento de infraestructura o monitoreo continuo — se trata como un alcance nuevo y se cotiza por separado, no se asume incluido.',
        ],
      },
      {
        heading: '7. Cancelación y cambios',
        paragraphs: [
          'Cualquiera de las partes puede proponer cambios de alcance, cronograma o entregables por escrito en cualquier momento; los cambios solo son vinculantes una vez ambas partes los confirman. Si usted cancela un proyecto Enfocado o Integral después de que el trabajo ha iniciado, sigue siendo responsable de la porción de trabajo ya completada, según lo especificado en la propuesta firmada de ese proyecto.',
        ],
      },
      {
        heading: '8. Limitación de responsabilidad',
        paragraphs: [
          'Nuestro trabajo se basa en los datos y el contexto que usted proporciona. No somos responsables por decisiones tomadas con base en nuestros hallazgos si estos se basaron en información incompleta o inexacta que no nos fue divulgada, ni por daños indirectos o consecuenciales que superen el valor del proyecto mismo.',
        ],
      },
      {
        heading: '9. Ley aplicable',
        paragraphs: [
          'Estos términos se rigen por las leyes de Colombia. Para clientes internacionales, la ley aplicable y la jurisdicción de un proyecto específico pueden discutirse y establecerse explícitamente en la propuesta escrita.',
        ],
      },
    ],
  },
}
