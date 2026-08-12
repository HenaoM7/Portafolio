import type { CaseStudy } from './types'

export const predictiveAnalyticsPlatform: CaseStudy = {
  slug: 'predictive-analytics-platform',
  classification: 'personal',
  category: 'predictive-analytics',
  technologies: ['Python', 'XGBoost', 'LightGBM', 'scikit-learn', 'FastAPI', 'Next.js', 'Docker'],
  period: '2020–2025 seasons',
  repository: 'https://github.com/HenaoM7/AI_APUESTAS',
  images: [],
  headlineStats: [
    { value: '~7,230', label: { en: 'Historical matches, 4 leagues', es: 'Partidos históricos, 4 ligas' } },
    { value: '6.2x', label: { en: 'Predicted-vs-real edge overestimation caught by self-audit', es: 'Sobreestimación de ventaja detectada por autoauditoría' } },
  ],
  relatedServiceAnchor: 'capabilities',
  content: {
    en: {
      title: 'Predictive Analytics Platform — Sports Forecasting & Self-Audit',
      subtitle: 'A stacked ML ensemble that caught its own inflated performance claim before anyone else did.',
      executiveSummary:
        "A full-stack predictive platform stacking XGBoost, LightGBM, and a Dixon-Coles Poisson model over ~7,230 historical matches. The platform's own internal audit tooling — not an external review — flagged its headline backtest metrics as inflated, which is the finding presented here instead of the disputed numbers themselves.",
      context:
        'A personal, full-stack predictive analytics platform built around real historical football data — not a business engagement, and not a simulated case. Personal Project: the value here is engineering depth and analytical rigor, not a client outcome.',
      problem:
        'Could a stacked ensemble of statistical and machine learning models produce genuinely calibrated match predictions — and, separately, could the system that evaluates its own performance be trusted?',
      data:
        'Approximately 7,230 historical matches across four major European leagues (Premier League, La Liga, Bundesliga, Serie A), spanning five seasons (2020-21 to 2024-25), sourced from public football-data records.',
      methodology:
        'XGBoost for match outcome (1X2) and LightGBM for over/under 2.5 goals, combined with a Dixon-Coles Poisson model, stacked through a logistic-regression meta-learner trained on out-of-fold predictions to avoid look-ahead leakage. Deployed as a full-stack application — FastAPI backend, Next.js frontend, Docker, three CI/CD workflows — with a dedicated internal audit suite that independently checks the system\'s own outputs for bias.',
      evidence:
        "The platform's own audit tooling — not an external review — flagged its headline backtest ROI and win-rate figures as inflated: a predicted-versus-real edge overestimation of roughly 6.2x, a calibration (Brier) score worse than a naive baseline, and a win-rate pattern matching the specific look-ahead-bias signature the codebase's own inline documentation warns about. Those specific headline numbers are not restated here as fact, in line with that finding.",
      findings:
        "The architecture is sound and the engineering is production-grade — real CI/CD, containerization, and a genuinely full-stack deployment. The more important finding is procedural: the project's own audit discipline caught its own inflated performance claim before it reached anyone else. That catch is the evidence worth presenting, not the uncorrected number it caught.",
      relevance:
        "The same instinct that flagged this project's own inflated metric is the instinct applied to every client engagement: verify the result before presenting it, especially — especially — when it's your own work.",
      recommendations: {
        immediate: 'Re-run the backtest on the current, bug-fixed pipeline before quoting any performance figure publicly again.',
        mediumTerm: "Add the audit suite's checks as a required, automated gate before any model update ships — not a manual step run after the fact.",
        longTerm: 'Extend the self-audit pattern (predicted-vs-real edge tracking, calibration monitoring) into a reusable checklist applied to future modeling work, including client engagements.',
      },
      technicalEvidence:
        'Python, XGBoost, LightGBM, scikit-learn, FastAPI, Next.js, Docker, GitHub Actions. Public repository, active commit history including the bug-fix and audit commits referenced above. No dashboard screenshots exist — the frontend renders charts dynamically.',
    },
    es: {
      title: 'Plataforma de Analítica Predictiva — Pronóstico Deportivo y Autoauditoría',
      subtitle: 'Un ensamble de ML apilado que detectó su propia afirmación de desempeño inflada antes que nadie más.',
      executiveSummary:
        'Una plataforma predictiva full-stack que apila XGBoost, LightGBM y un modelo de Poisson Dixon-Coles sobre ~7.230 partidos históricos. Las propias herramientas de auditoría interna de la plataforma — no una revisión externa — marcaron sus métricas principales del backtest como infladas, y ese es el hallazgo presentado aquí en lugar de las cifras cuestionadas.',
      context:
        'Una plataforma personal de analítica predictiva, full-stack, construida sobre datos históricos reales de fútbol — no es un proyecto de negocio ni un caso simulado. Proyecto Personal: el valor aquí está en la profundidad de ingeniería y el rigor analítico, no en un resultado para un cliente.',
      problem:
        '¿Podía un ensamble apilado de modelos estadísticos y de machine learning producir predicciones de partido genuinamente calibradas — y, por separado, se podía confiar en el sistema que evalúa su propio desempeño?',
      data:
        'Aproximadamente 7.230 partidos históricos de cuatro ligas europeas (Premier League, La Liga, Bundesliga, Serie A), a lo largo de cinco temporadas (2020-21 a 2024-25), obtenidos de registros públicos de fútbol.',
      methodology:
        'XGBoost para el resultado del partido (1X2) y LightGBM para más/menos de 2.5 goles, combinados con un modelo de Poisson Dixon-Coles, apilados mediante un meta-modelo de regresión logística entrenado sobre predicciones out-of-fold para evitar fuga de información. Desplegado como una aplicación full-stack — backend en FastAPI, frontend en Next.js, Docker, tres flujos de CI/CD — con una suite de auditoría interna dedicada que revisa de forma independiente los propios resultados del sistema en busca de sesgos.',
      evidence:
        'Las propias herramientas de auditoría de la plataforma — no una revisión externa — marcaron sus cifras principales de ROI y win-rate del backtest como infladas: una sobreestimación de la ventaja predicha frente a la real de aproximadamente 6.2x, un puntaje de calibración (Brier) peor que una línea base ingenua, y un patrón de win-rate que coincide con la firma específica de sesgo de anticipación que la documentación interna del propio código advierte. Esas cifras principales específicas no se repiten aquí como hechos, en línea con ese hallazgo.',
      findings:
        'La arquitectura es sólida y la ingeniería tiene calidad de producción — CI/CD real, contenerización, y un despliegue genuinamente full-stack. El hallazgo más importante es procedimental: la propia disciplina de auditoría del proyecto detectó su propia afirmación de desempeño inflada antes de que llegara a nadie más. Esa detección es la evidencia que vale la pena presentar, no la cifra sin corregir que detectó.',
      relevance:
        'El mismo instinto que marcó la métrica inflada de este proyecto propio es el que se aplica a cada proyecto con clientes: verificar el resultado antes de presentarlo, especialmente — especialmente — cuando es trabajo propio.',
      recommendations: {
        immediate: 'Volver a ejecutar el backtest sobre el pipeline actual, ya corregido, antes de volver a citar públicamente cualquier cifra de desempeño.',
        mediumTerm: 'Agregar las verificaciones de la suite de auditoría como una compuerta automática y obligatoria antes de publicar cualquier actualización del modelo — no un paso manual posterior.',
        longTerm: 'Extender el patrón de autoauditoría (seguimiento de ventaja predicha vs. real, monitoreo de calibración) a una lista de verificación reutilizable, aplicada a futuros proyectos de modelado, incluyendo proyectos con clientes.',
      },
      technicalEvidence:
        'Python, XGBoost, LightGBM, scikit-learn, FastAPI, Next.js, Docker, GitHub Actions. Repositorio público, historial de commits activo, incluyendo los commits de corrección de errores y auditoría referenciados anteriormente. No existen capturas de dashboard — el frontend renderiza gráficos de forma dinámica.',
    },
  },
}
