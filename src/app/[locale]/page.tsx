import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { buildAlternates } from '@/lib/seo'
import Hero from '@/components/sections/home/Hero'
import ProblemList from '@/components/sections/home/ProblemList'
import PillarsPreview from '@/components/sections/home/PillarsPreview'
import MethodPreview from '@/components/sections/home/MethodPreview'
import EvidencePreview from '@/components/sections/home/EvidencePreview'
import Differentiator from '@/components/sections/home/Differentiator'
import DiagnosticBanner from '@/components/sections/home/DiagnosticBanner'
import FinalCta from '@/components/sections/home/FinalCta'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return { alternates: buildAlternates(locale, '/') }
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <Hero />
      <ProblemList />
      <PillarsPreview />
      <MethodPreview />
      <EvidencePreview />
      <Differentiator />
      <DiagnosticBanner />
      <FinalCta />
    </>
  )
}
