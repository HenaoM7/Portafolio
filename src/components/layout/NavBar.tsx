'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { Menu, X } from 'lucide-react'
import { Link, usePathname } from '@/i18n/navigation'
import { cn } from '@/lib/utils'
import LocaleSwitcher from './LocaleSwitcher'

const navHrefs = ['/', '/services', '/method', '/case-studies', '/about', '/insights', '/contact'] as const
const navKeys = ['home', 'services', 'method', 'caseStudies', 'about', 'insights', 'contact'] as const

export default function NavBar() {
  const t = useTranslations('nav')
  const tCta = useTranslations('cta')
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href))

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-colors duration-300',
        scrolled ? 'bg-ink/95 backdrop-blur-md border-b border-ink-border' : 'bg-transparent'
      )}
    >
      <nav className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-display font-semibold text-lg text-[#ece9e2]">
          Henao <span className="text-brass">Intelligence</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {navHrefs.map((href, idx) => (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  'px-3 py-2 card-edge text-sm font-medium transition-colors',
                  isActive(href) ? 'text-brass' : 'text-[#9298a3] hover:text-[#ece9e2]'
                )}
              >
                {t(navKeys[idx])}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-5">
          <LocaleSwitcher />
          <Link
            href="/contact"
            className="px-4 py-2 card-edge bg-brass text-ink text-sm font-semibold hover:bg-brass/90 transition-colors"
          >
            {tCta('startConversation')}
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden text-[#ece9e2] p-2"
          aria-label={mobileOpen ? t('close') : t('menu')}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden bg-ink/98 backdrop-blur-md border-b border-ink-border">
          <ul className="max-w-content mx-auto px-4 py-4 flex flex-col gap-1">
            {navHrefs.map((href, idx) => (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    'block px-4 py-2.5 card-edge text-sm font-medium transition-colors',
                    isActive(href) ? 'text-brass bg-brass/10' : 'text-[#9298a3] hover:text-[#ece9e2]'
                  )}
                >
                  {t(navKeys[idx])}
                </Link>
              </li>
            ))}
          </ul>
          <div className="max-w-content mx-auto px-4 pb-5 flex items-center justify-between">
            <LocaleSwitcher />
            <Link
              href="/contact"
              className="px-4 py-2 card-edge bg-brass text-ink text-sm font-semibold"
            >
              {tCta('startConversation')}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
