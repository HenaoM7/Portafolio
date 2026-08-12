import type { CaseStudy } from './types'

export const profitabilityAnalytics: CaseStudy = {
  slug: 'profitability-analytics',
  classification: 'simulated',
  category: 'profitability',
  technologies: ['PostgreSQL', 'Python', 'statsmodels', 'Power BI'],
  period: '2023–2024 (simulated)',
  images: [
    { src: '/case-studies/profitability-analytics/01_revenue_distribution.png', alt: { en: 'Revenue distribution across the dataset', es: 'Distribución de ingresos en el dataset' } },
    { src: '/case-studies/profitability-analytics/02_revenue_mensual.png', alt: { en: 'Monthly revenue trend', es: 'Tendencia de ingresos mensuales' } },
    { src: '/case-studies/profitability-analytics/03_segmentacion_revenue.png', alt: { en: 'Customer segmentation by revenue quartile', es: 'Segmentación de clientes por cuartil de ingreso' } },
    { src: '/case-studies/profitability-analytics/04_outliers_boxplot.png', alt: { en: 'IQR outlier detection boxplot', es: 'Boxplot de detección de outliers por IQR' } },
    { src: '/case-studies/profitability-analytics/05_abc_pareto.png', alt: { en: 'ABC/Pareto product classification', es: 'Clasificación de productos ABC/Pareto' } },
    { src: '/case-studies/profitability-analytics/06_cohort_heatmap.png', alt: { en: 'Monthly cohort retention heatmap', es: 'Mapa de calor de retención por cohortes mensuales' } },
    { src: '/case-studies/profitability-analytics/07_regression_forecast.png', alt: { en: 'Linear regression revenue forecast', es: 'Proyección de ingresos por regresión lineal' } },
    { src: '/case-studies/profitability-analytics/08_price_simulation.png', alt: { en: 'Price-elasticity simulation', es: 'Simulación de elasticidad-precio' } },
  ],
  headlineStats: [
    { value: '23.28%', label: { en: 'Blended gross margin', es: 'Margen bruto combinado' } },
    { value: 'COP $13.98B', label: { en: 'Total revenue analyzed', es: 'Ingreso total analizado' } },
    { value: '20,000', label: { en: 'Sales transactions', es: 'Transacciones de venta' } },
  ],
  relatedServiceAnchor: 'profitability',
  content: {
    en: {
      title: 'Profitability & Commercial KPIs — Multichannel Retail',
      subtitle: 'Breaking down where a growing retailer actually makes — and loses — margin.',
      executiveSummary:
        "Revenue was growing across a simulated 10-region retail operation. The analysis broke profit down by region, product, and client, finding a blended 23.28% gross margin with substantial regional variation — a gap invisible in a revenue-only view.",
      context:
        'A simulated multichannel retail company with presence across 10 Colombian cities, modeled on a star-schema sales structure with intentionally varied product margins — including deliberately planted \'commodity\' products (3–6% margin) and \'prestige\' products (68–72% margin) to test whether the analysis would surface them. Simulated Business Case — no real retailer, no real transactions.',
      problem:
        "Revenue was growing. Whether profit was growing at the same rate — and where, specifically, it wasn't — had never been broken down by product, client, or region.",
      data: '20,000 sales transactions, 1,000 clients, 50 products, across 10 regions, covering January 2023 through December 2024.',
      methodology:
        'Exploratory data analysis, quartile-based customer segmentation, IQR outlier detection, ABC/Pareto product classification (80%/95% cumulative-value thresholds), a monthly cohort retention analysis, a linear regression revenue forecast with reported R², and a price-elasticity simulation testing +5%, +10%, and +15% pricing scenarios.',
      evidence:
        'Total revenue of COP $13,979,420,338.73 against gross profit of COP $3,253,711,606.06 — a 23.28% blended margin. Average ticket COP $698,971.02. Regional performance varied meaningfully: Bogotá led in volume (5,575 sales, COP $4.2B revenue) at a 25.96% margin, while Medellín (3,738 sales, COP $2.44B) ran closer to 20.98%.',
      findings:
        'Margin varies substantially by region even at similar volume, and the ABC/Pareto classification isolated a small tier of Class-A products and top-quartile clients responsible for a disproportionate share of gross profit — the specific list is in the underlying export data, not restated here as a round-number claim.',
      relevance:
        "A margin gap this size between two major regions, invisible in a revenue-only view, is exactly the kind of finding that changes where a business chooses to invest its next expansion dollar.",
      recommendations: {
        immediate: 'Investigate the specific cost or pricing drivers behind the Medellín–Bogotá margin gap before allocating further regional investment.',
        mediumTerm: 'Build a standing Class-A product and top-quartile client view into regular reporting, rather than a one-time analysis.',
        longTerm: 'Extend the price-elasticity simulation into a live pricing-decision tool, tested against real outcomes as pricing changes are made.',
      },
      technicalEvidence:
        'PostgreSQL, Python (pandas, scikit-learn, statsmodels), Power BI. Eight generated charts cover the full analysis arc from EDA through cohort retention to regression forecasting. One SQL query in the original scripts referenced an incorrect column name, corrected for this write-up.',
    },
    es: {
      title: 'Rentabilidad y KPIs Comerciales — Retail Multicanal',
      subtitle: 'Desglosando dónde un retailer en crecimiento realmente genera — y pierde — margen.',
      executiveSummary:
        'El ingreso crecía en una operación de retail simulada con 10 regiones. El análisis desglosó la utilidad por región, producto y cliente, encontrando un margen bruto combinado de 23.28% con variación regional sustancial — una brecha invisible en una vista basada solo en ingresos.',
      context:
        'Una empresa de retail multicanal simulada, con presencia en 10 ciudades colombianas, modelada sobre una estructura de ventas en esquema estrella con márgenes de producto deliberadamente variados — incluyendo productos \'commodity\' plantados intencionalmente (3–6% de margen) y productos \'prestige\' (68–72% de margen) para probar si el análisis lograba identificarlos. Caso de Negocio Simulado — sin minorista real, sin transacciones reales.',
      problem:
        'El ingreso estaba creciendo. Si la utilidad crecía al mismo ritmo — y dónde, específicamente, no lo hacía — nunca se había desglosado por producto, cliente o región.',
      data: '20.000 transacciones de venta, 1.000 clientes, 50 productos, en 10 regiones, cubriendo enero de 2023 a diciembre de 2024.',
      methodology:
        'Análisis exploratorio de datos, segmentación de clientes por cuartiles, detección de outliers por IQR, clasificación de productos ABC/Pareto (umbrales de valor acumulado de 80%/95%), un análisis de retención por cohortes mensuales, una proyección de ingresos por regresión lineal con R² reportado, y una simulación de elasticidad-precio probando escenarios de +5%, +10% y +15%.',
      evidence:
        'Ingreso total de COP $13.979.420.338,73 frente a una utilidad bruta de COP $3.253.711.606,06 — un margen combinado de 23.28%. Ticket promedio COP $698.971,02. El desempeño regional varió de forma significativa: Bogotá lideró en volumen (5.575 ventas, COP $4.2B de ingreso) con un margen de 25.96%, mientras que Medellín (3.738 ventas, COP $2.44B) se ubicó más cerca del 20.98%.',
      findings:
        'El margen varía sustancialmente por región incluso con volúmenes similares, y la clasificación ABC/Pareto aisló un pequeño grupo de productos Clase A y clientes del cuartil superior responsables de una proporción desproporcionada de la utilidad bruta — el listado específico está en los datos de exportación subyacentes, no se repite aquí como una cifra redonda sin respaldo.',
      relevance:
        'Una brecha de margen de esta magnitud entre dos regiones principales, invisible en una vista basada solo en ingresos, es exactamente el tipo de hallazgo que cambia dónde una empresa decide invertir su próximo dólar de expansión.',
      recommendations: {
        immediate: 'Investigar los factores específicos de costo o precio detrás de la brecha de margen entre Medellín y Bogotá antes de asignar más inversión regional.',
        mediumTerm: 'Incorporar una vista permanente de productos Clase A y clientes del cuartil superior al reporting regular, en lugar de un análisis puntual.',
        longTerm: 'Extender la simulación de elasticidad-precio a una herramienta viva de decisión de precios, contrastada con resultados reales a medida que se hacen cambios de precio.',
      },
      technicalEvidence:
        'PostgreSQL, Python (pandas, scikit-learn, statsmodels), Power BI. Ocho gráficos generados cubren todo el arco del análisis, desde EDA hasta retención por cohortes y proyección por regresión. Una consulta SQL en los scripts originales hacía referencia a un nombre de columna incorrecto, corregido para esta publicación.',
    },
  },
}
