import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

export default createMiddleware(routing)

export const config = {
  // Run on every path except static assets, Next.js internals, and API routes.
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
