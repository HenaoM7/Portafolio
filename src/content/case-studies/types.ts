import type { Bilingual } from '../types'

/**
 * Classification is a credibility label, not a marketing choice — it governs
 * which template fields render (see CaseStudyContent) and must never be
 * softened or omitted. "simulated" = a stated-fictitious business scenario
 * used to demonstrate the method. "personal" = a real, non-client technical
 * project with no business/client framing available.
 */
export type Classification = 'simulated' | 'personal'

export type CaseStudyCategory =
  | 'data-quality'
  | 'fraud-risk'
  | 'profitability'
  | 'predictive-analytics'
  | 'computer-vision'
  | 'public-interest'

export interface CaseStudyRecommendations {
  immediate: string
  mediumTerm: string
  longTerm: string
}

export interface CaseStudyContent {
  title: string
  /** One-line business/project problem statement, shown in the hero and on index cards. */
  subtitle: string
  /** Composed only from the approved context/problem/findings copy — never a new claim. */
  executiveSummary: string
  context: string
  problem: string
  data: string
  methodology: string
  evidence: string
  findings: string
  relevance: string
  recommendations: CaseStudyRecommendations
  technicalEvidence: string
}

export interface EvidenceImage {
  /** Path under /public, e.g. "/case-studies/fraud-risk-analytics/histogram_amount.png" */
  src: string
  alt: Bilingual<string>
  caption?: Bilingual<string>
}

export interface HeadlineStat {
  value: string
  label: Bilingual<string>
}

export interface CaseStudy {
  slug: string
  classification: Classification
  category: CaseStudyCategory
  technologies: string[]
  period?: string
  /** Only set when a real, confirmed git remote exists — never inferred from a README instruction. */
  repository?: string
  images: EvidenceImage[]
  headlineStats: HeadlineStat[]
  /** Anchor on the Services page this case study demonstrates, for cross-linking. */
  relatedServiceAnchor?: string
  content: Bilingual<CaseStudyContent>
}
