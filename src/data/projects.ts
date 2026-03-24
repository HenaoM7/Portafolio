import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'data-quality-audit',
    title: 'Auditoría y Mejora de Calidad de Datos',
    description:
      'Evaluación y mejora de calidad de datos en un sistema transaccional de ventas. Se identificaron duplicados, inconsistencias, nulos y fallas de integridad referencial mediante SQL avanzado. Se cuantificó el ingreso en riesgo y se desarrolló un dashboard en Power BI para monitorear indicadores clave de calidad con recomendaciones técnicas orientadas a resultados de negocio.',
    tags: ['PostgreSQL', 'SQL', 'Power BI', 'Data Quality', 'Modelado de Datos'],
    accentColor: 'cyan',
    githubUrl: 'https://github.com/HenaoM7/Analisis_De_Datos_Sistemas_Trasaccionales',
  },
  {
    id: 'fraud-detection',
    title: 'Detección de Fraude y Anomalías en Transacciones',
    description:
      'Identificación de transacciones sospechosas en un entorno fintech mediante análisis de comportamiento y técnicas estadísticas. Se diseñó un modelo en PostgreSQL con reglas de negocio para detectar pagos duplicados, alta frecuencia y actividad geográfica inconsistente. Se aplicó Z-score y análisis de outliers en Python para construir un risk score, visualizado en un dashboard de Power BI.',
    tags: ['PostgreSQL', 'Python', 'Power BI', 'Estadística', 'Detección de Fraude'],
    accentColor: 'blue',
    githubUrl: 'https://github.com/HenaoM7/Analisis_De_Fraude',
  },
  {
    id: 'kpis-rentabilidad',
    title: 'Análisis de Rentabilidad y KPIs Comerciales',
    description:
      'Evaluación de rentabilidad de productos, clientes y regiones en retail para optimizar decisiones comerciales. Se calcularon KPIs como revenue, gross profit, margen, ticket promedio y LTV sobre un modelo relacional en PostgreSQL. EDA en Python para segmentar clientes y detectar baja rotación. Dashboard ejecutivo en Power BI con desempeño por región y evolución temporal del negocio.',
    tags: ['PostgreSQL', 'Python', 'Power BI', 'EDA', 'KPIs', 'Análisis Comercial'],
    accentColor: 'purple',
    githubUrl: 'https://github.com/HenaoM7/Analisis_De_Rentabilidad',
  },
]
