import { setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'
import { Mail, Linkedin, MapPin } from 'lucide-react'
import { SiWhatsapp } from 'react-icons/si'
import FadeInSection from '@/components/ui/FadeInSection'
import SectionTitle from '@/components/ui/SectionTitle'
import ContactForm from '@/components/sections/ContactForm'
import { contactContent, CONTACT_EMAIL, LINKEDIN_URL, WHATSAPP_URL } from '@/content/pages/contact'
import { buildAlternates } from '@/lib/seo'
import type { Locale } from '@/content/types'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const title = locale === 'es' ? 'Contacto' : 'Contact'
  const description = contactContent[locale as Locale].intro
  return {
    title,
    description,
    alternates: buildAlternates(locale, '/contact'),
    openGraph: { title, description },
  }
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const loc = locale as Locale
  const c = contactContent[loc]

  return (
    <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
      <FadeInSection>
        <SectionTitle as="h1" kicker={loc === 'es' ? 'Contacto' : 'Contact'} title={loc === 'es' ? 'Hablemos' : "Let's talk"} />
        <p className="text-lg text-[#9298a3] max-w-2xl leading-relaxed -mt-4 mb-14">{c.intro}</p>
      </FadeInSection>

      <div className="grid lg:grid-cols-[1fr_auto] gap-16">
        <FadeInSection>
          <ContactForm />
        </FadeInSection>

        <FadeInSection delay={100}>
          <div className="flex flex-col gap-4 lg:w-64">
            <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-2.5 text-sm text-[#c9c5bb] hover:text-brass transition-colors">
              <Mail size={16} className="text-slate shrink-0" /> {CONTACT_EMAIL}
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm text-[#c9c5bb] hover:text-brass transition-colors">
              <SiWhatsapp size={16} className="text-slate shrink-0" /> WhatsApp
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm text-[#c9c5bb] hover:text-brass transition-colors">
              <Linkedin size={16} className="text-slate shrink-0" /> linkedin.com/in/henaom777
            </a>
            <p className="flex items-start gap-2.5 text-sm text-[#9298a3]">
              <MapPin size={16} className="text-slate shrink-0 mt-0.5" /> {c.locationLine}
            </p>
          </div>
        </FadeInSection>
      </div>

      <FadeInSection>
        <section id="diagnostic" className="scroll-mt-28 mt-20 border-t border-ink-border pt-10 max-w-2xl">
          <h2 className="font-display text-xl font-semibold mb-3">
            {loc === 'es' ? 'Diagnóstico Inicial de Datos' : 'Initial Data Diagnostic'}
          </h2>
          <p className="text-[#9298a3] leading-relaxed">
            {loc === 'es'
              ? 'Una revisión acotada a una sola pregunta de negocio, que termina en un hallazgo por escrito y una recomendación sobre si un proyecto completo se justifica. Sin resultados garantizados. Mencione "Diagnóstico Inicial" en el mensaje de arriba para empezar.'
              : 'A scoped review of one business question, ending in a written finding and a recommendation on whether a full engagement is justified. No guaranteed outcomes. Mention "Initial Diagnostic" in the message above to start.'}
          </p>
        </section>
      </FadeInSection>
    </div>
  )
}
