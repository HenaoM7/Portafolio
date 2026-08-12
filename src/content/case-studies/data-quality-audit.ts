import type { CaseStudy } from './types'

export const dataQualityAudit: CaseStudy = {
  slug: 'data-quality-audit',
  classification: 'simulated',
  category: 'data-quality',
  technologies: ['PostgreSQL', 'SQL', 'Python', 'Power BI'],
  period: 'Sep–Oct 2023 (simulated)',
  images: [],
  headlineStats: [
    { value: 'COP $7.57M', label: { en: 'Revenue at risk', es: 'Ingreso en riesgo' } },
    { value: '83.2%', label: { en: 'Data quality score', es: 'Puntaje de calidad de datos' } },
    { value: '119', label: { en: 'Records analyzed', es: 'Registros analizados' } },
  ],
  relatedServiceAnchor: 'data-quality',
  content: {
    en: {
      title: 'Data Quality Audit — Transactional Revenue Reconciliation',
      subtitle:
        'Investigating recurring differences between transactional revenue and financial reporting.',
      executiveSummary:
        'An internal review flagged recurring differences between transactional revenue and financial reporting. The investigation found a global data quality score of 83.2% and a quantified revenue at risk of COP $7,565,000 over a two-month window, traced to four specific categories of unreconciled records.',
      context:
        'RetailPro S.A.S. is a simulated Colombian retail company, built to model a real transactional environment complete with intentionally injected data problems — duplicate customer records, orphaned payments, and referential integrity gaps of the kind that show up in real production systems. This is explicitly a Simulated Business Case: no real company, no real client, built to demonstrate the investigation method against a realistic (if compact) dataset.',
      problem:
        'An internal review flagged recurring differences between transactional revenue and financial reporting. Before anyone could explain the gap, the underlying question had to be answered first: can this data be trusted at all?',
      data:
        '119 total records across four entities — 35 customers, 20 products, 44 orders, 40 payments — covering a two-month window (September–October 2023). A small dataset by design: enough to demonstrate the method with fully traceable, individually inspectable records, not a claim of enterprise scale.',
      methodology:
        'SQL-based checks across four data quality dimensions — completeness, uniqueness, consistency, and referential integrity — run against each entity independently, then reconciled against each other to trace where orders, payments, and customer records disagreed.',
      evidence:
        'A global data quality score of 83.2% (customers 82.9%, orders 77.3%, payments 90.0%). Three duplicate email pairs affecting 6 customers (17.1% of the customer base). Three orders referencing an invalid customer_id (6.8% of orders).',
      findings:
        'Revenue at risk: COP $7,565,000 over the two-month period — completed orders with no matching payment (4 records, COP $5,250,000, 69.4%), orphaned payments with no matching order (4 records, COP $1,615,000, 21.4%), underpaid orders (3 records, COP $450,000, 5.9%), and overpaid orders creating refund liability (1 record, COP $250,000, 3.3%). An indicative annual projection — explicitly a projection, not a measured figure — puts the range between COP $45.4M and $90.8M depending on assumptions.',
      relevance:
        'In a real transactional system at even modest scale, this class of problem compounds silently — every month it goes unaddressed adds to both the financial exposure and the erosion of trust in whatever reporting depends on that data.',
      recommendations: {
        immediate:
          'Reconcile the specific orphaned-payment and unpaid-order records identified; close the referential-integrity gap allowing invalid customer_id values.',
        mediumTerm:
          'Add automated completeness and consistency checks to the order-to-payment pipeline, run on a recurring schedule rather than discovered by accident.',
        longTerm:
          'Build a standing data quality monitoring layer with the same four dimensions used here, so the next discrepancy is caught before it compounds for two months.',
      },
      technicalEvidence:
        'PostgreSQL schema and seed data, SQL-based quality checks, Python reporting layer, Power BI dashboard setup. Two SQL files in the original scripts contained syntax issues that have been corrected for this write-up; the Python implementation that produced the figures above ran correctly throughout. No dashboard screenshots are confirmed available yet — the Power BI section documents a setup guide rather than a finished report.',
    },
    es: {
      title: 'Auditoría de Calidad de Datos — Reconciliación de Ingresos Transaccionales',
      subtitle:
        'Investigando diferencias recurrentes entre el ingreso transaccional y los reportes financieros.',
      executiveSummary:
        'Una revisión interna detectó diferencias recurrentes entre el ingreso transaccional y los reportes financieros. La investigación encontró un puntaje global de calidad de datos de 83.2% y un ingreso en riesgo cuantificado de COP $7.565.000 en una ventana de dos meses, rastreado a cuatro categorías específicas de registros sin conciliar.',
      context:
        'RetailPro S.A.S. es una empresa colombiana de retail simulada, construida para modelar un entorno transaccional real, con problemas de datos inyectados intencionalmente — registros de clientes duplicados, pagos huérfanos y vacíos de integridad referencial del tipo que aparecen en sistemas de producción reales. Este es explícitamente un Caso de Negocio Simulado: no hay empresa real ni cliente real; se construyó para demostrar el método de investigación sobre un dataset realista, aunque compacto.',
      problem:
        'Una revisión interna detectó diferencias recurrentes entre el ingreso transaccional y los reportes financieros. Antes de poder explicar la brecha, había que responder primero la pregunta de fondo: ¿se puede confiar en estos datos?',
      data:
        '119 registros en total distribuidos en cuatro entidades — 35 clientes, 20 productos, 44 órdenes, 40 pagos — cubriendo una ventana de dos meses (septiembre–octubre de 2023). Un dataset pequeño por diseño: suficiente para demostrar el método con registros completamente trazables e inspeccionables uno a uno, no una afirmación de escala empresarial.',
      methodology:
        'Verificaciones basadas en SQL a través de cuatro dimensiones de calidad de datos — completitud, unicidad, consistencia e integridad referencial — ejecutadas de forma independiente sobre cada entidad, y luego conciliadas entre sí para rastrear dónde discrepaban órdenes, pagos y registros de clientes.',
      evidence:
        'Un puntaje global de calidad de datos de 83.2% (clientes 82.9%, órdenes 77.3%, pagos 90.0%). Tres pares de correos duplicados que afectan a 6 clientes (17.1% de la base de clientes). Tres órdenes que referencian un customer_id inválido (6.8% de las órdenes).',
      findings:
        'Ingreso en riesgo: COP $7.565.000 durante el período de dos meses — órdenes completadas sin pago asociado (4 registros, COP $5.250.000, 69.4%), pagos huérfanos sin orden asociada (4 registros, COP $1.615.000, 21.4%), órdenes con pago incompleto (3 registros, COP $450.000, 5.9%), y órdenes con sobrepago que generan pasivo por reembolso (1 registro, COP $250.000, 3.3%). Una proyección anual indicativa — explícitamente una proyección, no una cifra medida — ubica el rango entre COP $45.4M y $90.8M según los supuestos.',
      relevance:
        'En un sistema transaccional real, incluso a escala modesta, este tipo de problema se acumula en silencio — cada mes que pasa sin corregirse suma tanto a la exposición financiera como al deterioro de la confianza en cualquier reporte que dependa de esos datos.',
      recommendations: {
        immediate:
          'Conciliar los registros específicos de pagos huérfanos y órdenes sin pago identificados; cerrar el vacío de integridad referencial que permite valores de customer_id inválidos.',
        mediumTerm:
          'Agregar verificaciones automáticas de completitud y consistencia al flujo de orden a pago, ejecutadas de forma recurrente en lugar de descubiertas por accidente.',
        longTerm:
          'Construir una capa permanente de monitoreo de calidad de datos con las mismas cuatro dimensiones usadas aquí, para que la próxima discrepancia se detecte antes de acumularse durante dos meses.',
      },
      technicalEvidence:
        'Esquema PostgreSQL y datos semilla, verificaciones de calidad basadas en SQL, capa de reporting en Python, configuración de dashboard en Power BI. Dos archivos SQL originales contenían errores de sintaxis que fueron corregidos para esta publicación; la implementación en Python que generó las cifras anteriores se ejecutó correctamente en todo momento. Aún no hay capturas de dashboard confirmadas — la sección de Power BI documenta una guía de configuración, no un reporte terminado.',
    },
  },
}
