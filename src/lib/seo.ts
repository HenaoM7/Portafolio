import type { Metadata } from 'next'
import { routing } from '@/i18n/routing'

// TODO: switch to the henaointelligence.com custom domain once it's registered and connected in Vercel.
const SITE_URL = 'https://portafolio-ochre-gamma.vercel.app'

/**
 * Builds canonical + hreflang alternates for a route that exists identically
 * (same slug) under every locale — true for every route in this app, since
 * slugs are never translated.
 */
export function buildAlternates(locale: string, pathWithoutLocale: string): Metadata['alternates'] {
  const clean = pathWithoutLocale === '/' ? '' : pathWithoutLocale
  const languages = Object.fromEntries(
    routing.locales.map((loc) => [loc, `${SITE_URL}/${loc}${clean}`])
  )
  return {
    canonical: `${SITE_URL}/${locale}${clean}`,
    languages,
  }
}

export { SITE_URL }
