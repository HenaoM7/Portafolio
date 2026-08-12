import { doesAugmentationHelp } from './does-augmentation-help'
import type { Insight } from './types'

export * from './types'

export const insights: Insight[] = [doesAugmentationHelp]

export function getInsight(slug: string): Insight | undefined {
  return insights.find((i) => i.slug === slug)
}
