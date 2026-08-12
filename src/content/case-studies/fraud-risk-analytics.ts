import type { CaseStudy } from './types'

export const fraudRiskAnalytics: CaseStudy = {
  slug: 'fraud-risk-analytics',
  classification: 'simulated',
  category: 'fraud-risk',
  technologies: ['PostgreSQL', 'Python', 'scikit-learn', 'Power BI'],
  period: '2024 (simulated)',
  images: [
    {
      src: '/case-studies/fraud-risk-analytics/histogram_amount.png',
      alt: {
        en: 'Histogram of transaction amounts across the full dataset',
        es: 'Histograma de montos de transacción sobre el dataset completo',
      },
    },
    {
      src: '/case-studies/fraud-risk-analytics/boxplot_amount_by_status.png',
      alt: {
        en: 'Boxplot of transaction amount distribution by flagged status',
        es: 'Boxplot de la distribución de montos por estado marcado',
      },
    },
  ],
  headlineStats: [
    { value: '48,447', label: { en: 'Transactions analyzed', es: 'Transacciones analizadas' } },
    { value: '10.88%', label: { en: 'Flagged as anomalous', es: 'Marcadas como anómalas' } },
    { value: '108', label: { en: 'High-risk users identified', es: 'Usuarios de alto riesgo' } },
  ],
  relatedServiceAnchor: 'fraud-risk',
  content: {
    en: {
      title: 'Fraud & Risk Analytics — Transactional Anomaly Detection',
      subtitle:
        'Scoring 48,447 transactions to surface the patterns hidden inside legitimate volume.',
      executiveSummary:
        'In a high-volume transactional environment, fraudulent or anomalous activity hides inside legitimate volume. A combined rule-based and machine-learning scoring approach flagged 5,269 of 48,447 transactions (10.88%) and identified 108 high-risk users from the aggregate pattern of their activity.',
      context:
        'A simulated fintech transaction environment, built to test anomaly-detection methodology against a realistic volume and pattern of financial activity across a full calendar year. Simulated Business Case — no real fintech client, no real transactions; the company is unnamed by design, since the investigation method is the point, not a specific brand.',
      problem:
        "In a high-volume transactional environment, fraudulent or anomalous activity doesn't announce itself — it hides inside legitimate volume, distinguishable only through pattern, not through any single transaction in isolation.",
      data: '48,447 transactions across 2,000 users, full calendar year 2024, totaling $9,640,107.52 in transaction volume.',
      methodology:
        "A rule-based weighted risk score combining four signals — duplicate transactions (30 points), transaction velocity within 60-second windows (25 points), amount-based statistical outliers via Z-score and IQR (25 points), and geographically inconsistent 'impossible travel' patterns via self-join (20 points) — layered with an unsupervised Isolation Forest + Local Outlier Factor ensemble, evaluated against injected ground-truth fraud labels using precision, recall, and F1.",
      evidence:
        '5,269 transactions flagged (10.88% of volume), totaling $2,950,376.29 — 444 scored High risk, 1,782 Medium, 46,221 Low. 108 users identified as high-risk based on the aggregate pattern of their activity, not any single transaction.',
      findings:
        "Risk concentrated in a small, identifiable subset of users rather than spreading evenly across the base — the top 108 high-risk users account for a disproportionate share of flagged volume, meaning investigation effort doesn't need to scale with total transaction count.",
      relevance:
        "A prioritized, evidence-backed list turns a 48,000-transaction haystack into a 108-user shortlist — the difference between an investigation team that can act and one that's paralyzed by volume.",
      recommendations: {
        immediate: 'Review the 108 flagged high-risk users, starting with the High-risk-scored transactions.',
        mediumTerm:
          'Tune scoring weights against real outcomes as investigations close, rather than leaving them fixed at initial values.',
        longTerm:
          'Move from batch scoring to near-real-time evaluation at the point of transaction, so flags happen before settlement rather than after.',
      },
      technicalEvidence:
        'PostgreSQL, Python (pandas, scikit-learn), Power BI. Two of the six original SQL analysis files contained a column-name typo and an incorrect join key, both corrected for this write-up — the Python pipeline that produced the figures above was unaffected and ran correctly.',
    },
    es: {
      title: 'Fraude y Riesgo — Detección de Anomalías Transaccionales',
      subtitle:
        'Calificando 48.447 transacciones para revelar los patrones ocultos dentro del volumen legítimo.',
      executiveSummary:
        'En un entorno transaccional de alto volumen, la actividad fraudulenta o anómala se esconde dentro del volumen legítimo. Un enfoque combinado de reglas y machine learning marcó 5.269 de 48.447 transacciones (10.88%) e identificó 108 usuarios de alto riesgo a partir del patrón agregado de su actividad.',
      context:
        'Un entorno transaccional fintech simulado, construido para probar una metodología de detección de anomalías sobre un volumen y patrón realista de actividad financiera durante un año calendario completo. Caso de Negocio Simulado — sin cliente fintech real ni transacciones reales; la empresa no tiene nombre por diseño, ya que lo relevante es el método de investigación, no una marca específica.',
      problem:
        'En un entorno transaccional de alto volumen, la actividad fraudulenta o anómala no se anuncia — se esconde dentro del volumen legítimo, distinguible solo por patrón, no por ninguna transacción aislada.',
      data: '48.447 transacciones de 2.000 usuarios, durante todo el año calendario 2024, por un volumen total de $9.640.107,52.',
      methodology:
        "Un puntaje de riesgo ponderado que combina cuatro señales — transacciones duplicadas (30 pts), velocidad transaccional en ventanas de 60 segundos (25 pts), valores atípicos por monto vía Z-score e IQR (25 pts), y patrones de 'viaje imposible' vía auto-join (20 pts) — combinado con un ensamble no supervisado de Isolation Forest + Local Outlier Factor, evaluado contra etiquetas de fraude inyectadas usando precisión, recall y F1.",
      evidence:
        '5.269 transacciones marcadas (10.88% del volumen), por un total de $2.950.376,29 — 444 con riesgo Alto, 1.782 Medio, 46.221 Bajo. 108 usuarios identificados como de alto riesgo con base en el patrón agregado de su actividad, no en una transacción aislada.',
      findings:
        'El riesgo se concentró en un subconjunto pequeño e identificable de usuarios, en lugar de distribuirse de forma uniforme — los 108 usuarios de alto riesgo concentran una proporción desproporcionada del volumen marcado, por lo que el esfuerzo de investigación no necesita escalar con el volumen total.',
      relevance:
        'Una lista priorizada y respaldada por evidencia convierte un pajar de 48.000 transacciones en una lista corta de 108 usuarios — la diferencia entre un equipo de investigación que puede actuar y uno paralizado por el volumen.',
      recommendations: {
        immediate: 'Revisar los 108 usuarios de alto riesgo marcados, comenzando por las transacciones con puntaje de riesgo Alto.',
        mediumTerm:
          'Ajustar los pesos del scoring contra resultados reales a medida que se cierran las investigaciones, en lugar de dejarlos fijos en sus valores iniciales.',
        longTerm:
          'Pasar de scoring por lotes a evaluación casi en tiempo real en el momento de la transacción, para que las alertas ocurran antes de la liquidación, no después.',
      },
      technicalEvidence:
        'PostgreSQL, Python (pandas, scikit-learn), Power BI. Dos de los seis archivos SQL originales de análisis contenían un error de tipeo en un nombre de columna y una clave de join incorrecta, ambos corregidos para esta publicación — el pipeline en Python que generó las cifras anteriores no se vio afectado y se ejecutó correctamente.',
    },
  },
}
