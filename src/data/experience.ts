import type { ExperienceItem } from '@/types'

export const experience: ExperienceItem[] = [
  {
    company: 'Quipux',
    role: 'Ingeniero QA',
    period: '2025 – Presente',
    location: 'Colombia',
    impacts: [
      'Ejecución de consultas SQL avanzadas para validación de millones de registros transaccionales en entornos productivos.',
      'Identificación y documentación de inconsistencias en integridad referencial, reduciendo errores de datos críticos.',
      'Automatización de flujos de validación end-to-end con Serenity BDD, disminuyendo tiempos de prueba manuales en un 40%.',
      'Implementación de pipelines CI/CD en Azure DevOps, integrando pruebas automatizadas al ciclo de entrega continua.',
      'Análisis de logs y trazabilidad de datos transaccionales para identificar patrones de fallo y anomalías recurrentes.',
      'Diseño y ejecución de casos de prueba orientados a la calidad del dato: completitud, unicidad, consistencia y vigencia.',
    ],
    techUsed: ['SQL', 'Azure DevOps', 'Serenity BDD', 'Postman', 'Jira', 'Git'],
  },
]
