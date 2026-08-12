import type { Metadata } from 'next'
import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { buildAlternates, SITE_URL } from '@/lib/seo'
import NavBar from '@/components/layout/NavBar'
import Footer from '@/components/layout/Footer'
import '../globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: ['500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-plex-sans',
  weight: ['400', '500', '600'],
  display: 'swap',
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-plex-mono',
  weight: ['400', '500'],
  display: 'swap',
})

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata' })

  return {
    metadataBase: new URL(SITE_URL),
    title: { default: t('title'), template: '%s — Henao Intelligence' },
    description: t('description'),
    alternates: buildAlternates(locale, '/'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
      locale: locale === 'es' ? 'es_CO' : 'en_US',
      siteName: 'Henao Intelligence',
    },
    robots: { index: true, follow: true },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)

  return (
    <html lang={locale} className={`${fraunces.variable} ${plexSans.variable} ${plexMono.variable}`}>
      <body className="font-sans bg-ink text-[#ece9e2]">
        <NextIntlClientProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-2 focus:left-2 focus:bg-brass focus:text-ink focus:px-4 focus:py-2 focus:card-edge"
          >
            Skip to content
          </a>
          <NavBar />
          <main id="main-content">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
