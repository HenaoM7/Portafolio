import { dataQualityAudit } from './data-quality-audit'
import { fraudRiskAnalytics } from './fraud-risk-analytics'
import { profitabilityAnalytics } from './profitability-analytics'
import { predictiveAnalyticsPlatform } from './predictive-analytics-platform'
import { medicalExpensePrediction } from './medical-expense-prediction'
import { digitRecognitionPipeline } from './digit-recognition-pipeline'
import { garmentVisualQa } from './garment-visual-qa'
import { wildfireCauseClassification } from './wildfire-cause-classification'
import type { CaseStudy } from './types'

export * from './types'

/** Order matters: the 3 Primary cases first, then the 5 Technical cases. */
export const caseStudies: CaseStudy[] = [
  dataQualityAudit,
  fraudRiskAnalytics,
  profitabilityAnalytics,
  predictiveAnalyticsPlatform,
  medicalExpensePrediction,
  digitRecognitionPipeline,
  garmentVisualQa,
  wildfireCauseClassification,
]

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug)
}

export const primaryCaseStudies = caseStudies.filter((cs) => cs.classification === 'simulated')
export const technicalCaseStudies = caseStudies.filter((cs) => cs.classification === 'personal')
