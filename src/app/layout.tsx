import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import NavBar from '@/components/layout/NavBar'
import Footer from '@/components/layout/Footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://portafolio-ochre-gamma.vercel.app'),
  title: 'Miguel Ángel Henao — Data Analyst',
  description:
    'Portafolio profesional de Miguel Ángel Henao, Data Analyst con background en QA. Especialista en SQL, Python, Power BI y Data Quality.',
  keywords: [
    'Data Analyst',
    'Miguel Henao',
    'SQL',
    'Python',
    'Power BI',
    'Data Quality',
    'PostgreSQL',
    'Machine Learning',
    'Business Intelligence',
    'QA Engineer',
    'Colombia',
  ],
  authors: [{ name: 'Miguel Ángel Henao Cañas' }],
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Miguel Ángel Henao — Data Analyst',
    description:
      'Data Analyst | QA Engineer | Python · SQL · Power BI · Data Quality',
    type: 'website',
    url: 'https://portafolio-ochre-gamma.vercel.app',
    locale: 'es_CO',
    siteName: 'Miguel Ángel Henao — Portafolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Miguel Ángel Henao — Data Analyst',
    description: 'Data Analyst | QA Engineer | Python · SQL · Power BI · Data Quality',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans">
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
