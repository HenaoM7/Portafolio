import type { CaseStudy } from './types'

export const wildfireCauseClassification: CaseStudy = {
  slug: 'wildfire-cause-classification',
  classification: 'personal',
  category: 'public-interest',
  technologies: ['Python', 'scikit-learn', 'pandas'],
  repository: 'https://github.com/HenaoM7/Clasificacion_Incendios',
  images: [
    { src: '/case-studies/wildfire-cause-classification/area_burned_by_region.png', alt: { en: 'Area burned by region', es: 'Área quemada por región' } },
    { src: '/case-studies/wildfire-cause-classification/area_burned_distribution.png', alt: { en: 'Distribution of area burned', es: 'Distribución del área quemada' } },
    { src: '/case-studies/wildfire-cause-classification/incidents_by_cause_category.png', alt: { en: 'Incidents by cause category', es: 'Incidentes por categoría de causa' } },
  ],
  headlineStats: [
    { value: '5,234', label: { en: 'Real incidents (CONAF, Chile)', es: 'Incidentes reales (CONAF, Chile)' } },
  ],
  relatedServiceAnchor: 'capabilities',
  content: {
    en: {
      title: 'Wildfire Cause Classification — Public Incident Data',
      subtitle: 'Real government data, with all the imbalance a clean benchmark dataset hides.',
      executiveSummary:
        'An analysis of 5,234 real Chilean wildfire incidents (CONAF), exploring area burned by region and cause ahead of a cause-category classification model. Real government data carries genuine regional and categorical imbalance that a benchmark dataset would not.',
      context:
        "A personal analysis of real, publicly available Chilean wildfire incident data (CONAF) — not a commissioned engagement, and not simulated. Personal Project, using genuinely real government data rather than a benchmark dataset.",
      problem:
        "Could the recorded cause category of a wildfire incident be predicted from the incident's other recorded attributes — and what would that classification reveal about which categories are hardest to distinguish?",
      data: "5,234 real wildfire incidents recorded by CONAF (Chile's national forestry corporation), 2016–2017.",
      methodology: 'A Random Forest classifier predicting cause category, preceded by exploratory analysis of area burned by region and by cause.',
      evidence:
        "Area burned varies substantially by region and by cause category, visible directly in the exploratory analysis — the classification model's own performance metrics are part of the underlying repository rather than restated here, since this write-up's visual evidence covers the exploratory stage, not a confusion matrix or other model-diagnostic chart.",
      findings:
        'Real government incident data carries exactly the kind of regional and categorical imbalance that makes classification genuinely hard — a more honest test bed than a clean benchmark dataset, even without a headline accuracy number to quote here.',
      relevance:
        "Public-interest classification problems — incident triage, resource allocation, risk zoning — share this same shape: imbalanced categories, regional variation, and a cost to getting the rarer categories wrong that a simple accuracy score doesn't capture.",
      recommendations: {
        immediate: 'None — closed technical exercise.',
        mediumTerm: "Add model-diagnostic visuals (confusion matrix, per-class performance) to the evidence base — currently the strongest gap in this project's documentation.",
        longTerm: 'Not applicable.',
      },
      technicalEvidence: 'Python, scikit-learn, pandas. Three real charts, all exploratory: area burned by region, area burned distribution, incidents by cause category.',
    },
    es: {
      title: 'Clasificación de Causas de Incendios Forestales — Datos Públicos de Incidentes',
      subtitle: 'Datos gubernamentales reales, con todo el desbalance que un dataset de referencia limpio oculta.',
      executiveSummary:
        'Un análisis de 5.234 incidentes reales de incendios forestales en Chile (CONAF), explorando el área quemada por región y causa antes de un modelo de clasificación por categoría de causa. Los datos gubernamentales reales presentan un desbalance regional y categórico genuino que un dataset de referencia no tendría.',
      context:
        'Un análisis personal de datos reales y públicos de incidentes de incendios forestales en Chile (CONAF) — no es un proyecto encargado ni simulado. Proyecto Personal, usando datos gubernamentales genuinamente reales en lugar de un dataset de referencia.',
      problem:
        '¿Se podía predecir la categoría de causa registrada de un incendio forestal a partir de los demás atributos registrados del incidente — y qué revelaría esa clasificación sobre qué categorías son más difíciles de distinguir?',
      data: '5.234 incidentes reales de incendios forestales registrados por CONAF (Corporación Nacional Forestal de Chile), 2016–2017.',
      methodology: 'Un clasificador Random Forest para predecir la categoría de causa, precedido de un análisis exploratorio del área quemada por región y por causa.',
      evidence:
        'El área quemada varía sustancialmente por región y por categoría de causa, visible directamente en el análisis exploratorio — las métricas de desempeño del propio modelo de clasificación forman parte del repositorio subyacente y no se repiten aquí, ya que la evidencia visual de esta publicación cubre la etapa exploratoria, no una matriz de confusión u otro gráfico de diagnóstico del modelo.',
      findings:
        'Los datos reales de incidentes gubernamentales presentan exactamente el tipo de desbalance regional y categórico que hace que la clasificación sea genuinamente difícil — un banco de pruebas más honesto que un dataset de referencia limpio, incluso sin una cifra de exactitud destacada para citar aquí.',
      relevance:
        'Los problemas de clasificación de interés público — priorización de incidentes, asignación de recursos, zonificación de riesgo — comparten esta misma forma: categorías desbalanceadas, variación regional, y un costo por equivocarse en las categorías más raras que un puntaje simple de exactitud no captura.',
      recommendations: {
        immediate: 'Ninguna — ejercicio técnico cerrado.',
        mediumTerm: 'Agregar visuales de diagnóstico del modelo (matriz de confusión, desempeño por clase) a la base de evidencia — actualmente la brecha más importante en la documentación de este proyecto.',
        longTerm: 'No aplica.',
      },
      technicalEvidence: 'Python, scikit-learn, pandas. Tres gráficos reales, todos exploratorios: área quemada por región, distribución del área quemada, incidentes por categoría de causa.',
    },
  },
}
