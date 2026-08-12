import type { CaseStudy } from './types'

export const garmentVisualQa: CaseStudy = {
  slug: 'garment-visual-qa',
  classification: 'personal',
  category: 'computer-vision',
  technologies: ['TensorFlow', 'Keras'],
  repository: 'https://github.com/HenaoM7/Red_Convolucional',
  images: [
    { src: '/case-studies/garment-visual-qa/confusion_matrix.png', alt: { en: 'Confusion matrix for the garment classifier', es: 'Matriz de confusión del clasificador de prendas' } },
    { src: '/case-studies/garment-visual-qa/training_history.png', alt: { en: 'Training history', es: 'Historial de entrenamiento' } },
    { src: '/case-studies/garment-visual-qa/sample_predictions.png', alt: { en: 'Sample predictions', es: 'Predicciones de muestra' } },
  ],
  headlineStats: [
    { value: '79%', label: { en: 'Auto-pass rate, simulated monitoring session', es: 'Tasa de auto-aprobación, sesión de monitoreo simulada' } },
  ],
  relatedServiceAnchor: 'capabilities',
  content: {
    en: {
      title: 'Garment Visual QA — A Served Classification Layer',
      subtitle: 'Testing whether a trained classifier can become a system a business can actually run.',
      executiveSummary:
        'A CNN garment classifier wrapped in a servable decision layer and exercised through a simulated drift-monitoring session, reaching a 79% auto-pass rate. The thinnest evidence base of the eight case studies — presented as such, not inflated.',
      context:
        'A compact personal project testing whether an image classifier could be wrapped in a servable decision layer with basic monitoring — not a full production system, and the evidence base here is intentionally the thinnest of the eight. Personal Project.',
      problem:
        'A trained classifier is not the same thing as a usable system — it needs to be servable, and someone needs to know when its predictions start to drift from what it was trained on.',
      data: 'A CNN garment classifier, wrapped in a REST-style serving layer, exercised through a simulated drift-monitoring session against a stream of new predictions.',
      methodology: 'A CNN garment classifier, wrapped in a REST-style serving layer, exercised through a simulated drift-monitoring session against a stream of new predictions.',
      evidence: 'A 79% auto-pass rate in the simulated monitoring session — the proportion of predictions the system accepted without flagging for review.',
      findings:
        'The serving and monitoring scaffolding works as designed; the classification accuracy itself, on the available evidence, is adequate but not the standout result of this project — the architecture pattern is.',
      relevance:
        "Most client-facing classification needs aren't 'train a model' — they're 'make a model something a business can actually run and trust over time.' This is a small-scale rehearsal of that second problem.",
      recommendations: {
        immediate: 'None — closed technical exercise.',
        mediumTerm: 'Extend the evaluation set beyond the current 3-chart evidence base before treating classification accuracy as a settled result.',
        longTerm: 'Not applicable.',
      },
      technicalEvidence: 'TensorFlow/Keras. Three real charts: confusion matrix, training history, sample predictions.',
    },
    es: {
      title: 'Control Visual de Calidad Textil — Una Capa de Clasificación Servida',
      subtitle: 'Probando si un clasificador entrenado puede convertirse en un sistema que un negocio pueda realmente operar.',
      executiveSummary:
        'Un clasificador CNN de prendas, envuelto en una capa de decisión servible y ejercitado a través de una sesión de monitoreo de deriva simulada, alcanzando una tasa de auto-aprobación del 79%. La base de evidencia más delgada de los ocho casos de estudio — presentada como tal, sin inflar.',
      context:
        'Un proyecto personal compacto que probó si un clasificador de imágenes podía envolverse en una capa de decisión servible con monitoreo básico — no es un sistema de producción completo, y la base de evidencia aquí es intencionalmente la más delgada de las ocho. Proyecto Personal.',
      problem:
        'Un clasificador entrenado no es lo mismo que un sistema utilizable — necesita ser servible, y alguien necesita saber cuándo sus predicciones empiezan a desviarse de aquello para lo que fue entrenado.',
      data: 'Un clasificador CNN de prendas, envuelto en una capa de servicio tipo REST, ejercitado a través de una sesión simulada de monitoreo de deriva contra un flujo de nuevas predicciones.',
      methodology: 'Un clasificador CNN de prendas, envuelto en una capa de servicio tipo REST, ejercitado a través de una sesión simulada de monitoreo de deriva contra un flujo de nuevas predicciones.',
      evidence: 'Una tasa de auto-aprobación del 79% en la sesión de monitoreo simulada — la proporción de predicciones que el sistema aceptó sin marcarlas para revisión.',
      findings:
        'El andamiaje de servicio y monitoreo funciona como fue diseñado; la exactitud de clasificación en sí, con la evidencia disponible, es adecuada pero no es el resultado más destacado de este proyecto — el patrón de arquitectura sí lo es.',
      relevance:
        "La mayoría de las necesidades de clasificación de cara al cliente no son 'entrenar un modelo' — son 'convertir un modelo en algo que un negocio pueda realmente operar y en lo que pueda confiar con el tiempo.' Este es un ensayo a pequeña escala de ese segundo problema.",
      recommendations: {
        immediate: 'Ninguna — ejercicio técnico cerrado.',
        mediumTerm: 'Ampliar el conjunto de evaluación más allá de la base de evidencia actual de 3 gráficos antes de tratar la exactitud de clasificación como un resultado consolidado.',
        longTerm: 'No aplica.',
      },
      technicalEvidence: 'TensorFlow/Keras. Tres gráficos reales: matriz de confusión, historial de entrenamiento, predicciones de muestra.',
    },
  },
}
