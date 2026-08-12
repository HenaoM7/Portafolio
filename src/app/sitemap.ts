import type { MetadataRoute } from 'next'
import { routing } from '@/i18n/routing'
import { caseStudies } from '@/content/case-studies'
import { insights } from '@/content/insights'
import { SITE_URL } from '@/lib/seo'

const staticPaths = ['', '/services', '/method', '/about', '/contact', '/case-studies', '/insights']

export default function sitemap(): MetadataRoute.Sitemap {
  const dynamicPaths = [
    ...caseStudies.map((cs) => `/case-studies/${cs.slug}`),
    ...insights.map((i) => `/insights/${i.slug}`),
  ]

  const allPaths = [...staticPaths, ...dynamicPaths]

  return allPaths.map((path) => ({
    url: `${SITE_URL}/${routing.defaultLocale}${path}`,
    lastModified: new Date(),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((loc) => [loc, `${SITE_URL}/${loc}${path}`])
      ),
    },
  }))
}
