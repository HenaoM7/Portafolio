import type { CaseStudy } from './types'

export const medicalExpensePrediction: CaseStudy = {
  slug: 'medical-expense-prediction',
  classification: 'personal',
  category: 'predictive-analytics',
  technologies: ['Python', 'pandas', 'statsmodels', 'scikit-learn'],
  repository: 'https://github.com/HenaoM7/Prediccion_Gastos_Medicos',
  images: [
    { src: '/case-studies/medical-expense-prediction/expenses_distribution.png', alt: { en: 'Distribution of annual medical expenses', es: 'Distribución de gastos médicos anuales' } },
    { src: '/case-studies/medical-expense-prediction/correlation_heatmap.png', alt: { en: 'Correlation heatmap across policyholder attributes', es: 'Mapa de calor de correlación entre atributos del asegurado' } },
    { src: '/case-studies/medical-expense-prediction/expenses_by_smoker.png', alt: { en: 'Expenses segmented by smoker status', es: 'Gastos segmentados por estatus de fumador' } },
    { src: '/case-studies/medical-expense-prediction/age_vs_expenses_by_smoker.png', alt: { en: 'Age vs. expenses, segmented by smoker status', es: 'Edad vs. gastos, segmentado por estatus de fumador' } },
  ],
  headlineStats: [
    { value: 'R²=0.9022', label: { en: 'Domain-informed model fit', es: 'Ajuste del modelo informado por dominio' } },
    { value: '4.2x', label: { en: 'Cost multiple, smoker+obesity vs. rest', es: 'Multiplicador de costo, fumador+obesidad vs. resto' } },
  ],
  relatedServiceAnchor: 'data-quality',
  content: {
    en: {
      title: 'Medical Expense Prediction — Data Quality Before Modeling',
      subtitle: 'A mislabeled column, caught before it reached the model.',
      executiveSummary:
        'A data-quality pass on a real 1,338-record health insurance dataset found a mislabeled column and a duplicate record before any model was built. A domain-informed model built on the corrected understanding reached R²=0.9022, outperforming a more complex Random Forest built without it.',
      context:
        'A personal predictive modeling project using a real, publicly available health insurance dataset — not a client engagement. Personal Project: the finding worth presenting is methodological, not a business outcome.',
      problem:
        'Could annual medical expenses be predicted accurately from policyholder attributes — and would the data hold up to the same scrutiny applied in the business case studies before any model got built on top of it?',
      data: '1,338 real policyholder records, 8 attributes, no missing values.',
      methodology:
        "A data quality pass before any modeling: found one duplicate record, discovered that a field labeled 'discount eligibility' actually encoded smoker status, and excluded an unreliable premium field from the feature set. Feature engineering then centered on a smoker-by-obesity interaction term, followed by a comparison of four models on an identical held-out split.",
      evidence:
        'Smoking combined with obesity compounds annual cost dramatically — roughly US$41,558/year versus US$9,839/year for the rest of the population. A domain-informed four-feature linear model reached R²=0.9022, outperforming both a naive linear baseline (R²=0.8069) and a 300-tree Random Forest (R²=0.8983).',
      findings:
        'A simpler model, built on a correctly understood interaction the data-quality pass surfaced, outperformed a more complex one built without that understanding — a direct demonstration that the modeling choice mattered less than getting the data right first.',
      relevance:
        'The mislabeled column would have gone straight into a naive model as noise. Finding it first is the same habit applied throughout every client engagement — check what the data actually says before trusting what it\'s labeled.',
      recommendations: {
        immediate: 'None — this is a closed, self-contained technical exercise, not an ongoing engagement.',
        mediumTerm: 'Not applicable.',
        longTerm: 'The mislabeled-column pattern is now a standing check applied at the start of every new data quality review.',
      },
      technicalEvidence:
        'Python, pandas, statsmodels, scikit-learn, 18 automated tests including a regression test that locks in the central finding. Four real charts: expense distribution, correlation heatmap, and smoker-segmented views.',
    },
    es: {
      title: 'Predicción de Gastos Médicos — Calidad de Datos Antes del Modelado',
      subtitle: 'Una columna mal etiquetada, detectada antes de llegar al modelo.',
      executiveSummary:
        'Una revisión de calidad de datos sobre un dataset real de 1.338 registros de seguros de salud encontró una columna mal etiquetada y un registro duplicado antes de construir cualquier modelo. Un modelo informado por el dominio, construido sobre el entendimiento corregido, alcanzó R²=0.9022, superando a un Random Forest más complejo construido sin ese entendimiento.',
      context:
        'Un proyecto personal de modelado predictivo usando un dataset real y de acceso público sobre seguros de salud — no es un proyecto con cliente. Proyecto Personal: el hallazgo que vale la pena presentar es metodológico, no un resultado de negocio.',
      problem:
        '¿Se podían predecir con precisión los gastos médicos anuales a partir de los atributos del asegurado — y resistirían los datos el mismo escrutinio aplicado en los casos de negocio antes de construir cualquier modelo sobre ellos?',
      data: '1.338 registros reales de asegurados, 8 atributos, sin valores faltantes.',
      methodology:
        "Una revisión de calidad de datos antes de cualquier modelado: se encontró un registro duplicado, se descubrió que un campo etiquetado como 'elegibilidad de descuento' en realidad codificaba el estatus de fumador, y se excluyó del conjunto de variables un campo de prima poco confiable. La ingeniería de variables se centró luego en un término de interacción fumador-obesidad, seguido de una comparación de cuatro modelos sobre un mismo conjunto de prueba.",
      evidence:
        'Fumar combinado con obesidad multiplica dramáticamente el costo anual — aproximadamente US$41.558/año frente a US$9.839/año para el resto de la población. Un modelo lineal de cuatro variables, informado por el dominio, alcanzó R²=0.9022, superando tanto a una línea base lineal ingenua (R²=0.8069) como a un Random Forest de 300 árboles (R²=0.8983).',
      findings:
        'Un modelo más simple, construido sobre una interacción correctamente entendida gracias a la revisión de calidad de datos, superó a uno más complejo construido sin ese entendimiento — una demostración directa de que la elección del modelo importó menos que entender bien los datos primero.',
      relevance:
        'La columna mal etiquetada habría entrado directamente a un modelo ingenuo como ruido. Encontrarla primero es el mismo hábito aplicado en cada proyecto con clientes — verificar lo que los datos realmente dicen antes de confiar en cómo están etiquetados.',
      recommendations: {
        immediate: 'Ninguna — es un ejercicio técnico cerrado y autocontenido, no un proyecto en curso.',
        mediumTerm: 'No aplica.',
        longTerm: 'El patrón de columna mal etiquetada es ahora una verificación permanente aplicada al inicio de cada nueva revisión de calidad de datos.',
      },
      technicalEvidence:
        'Python, pandas, statsmodels, scikit-learn, 18 pruebas automatizadas, incluyendo una prueba de regresión que fija el hallazgo central. Cuatro gráficos reales: distribución de gastos, mapa de calor de correlación, y vistas segmentadas por estatus de fumador.',
    },
  },
}
