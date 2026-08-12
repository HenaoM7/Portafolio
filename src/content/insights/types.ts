import type { Bilingual } from '../types'

export interface InsightContent {
  title: string
  dek: string
  body: string[]
}

export interface Insight {
  slug: string
  readingTime: string
  tags: string[]
  content: Bilingual<InsightContent>
}
