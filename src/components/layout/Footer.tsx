import { getTranslations, getLocale } from 'next-intl/server'
import { Github, Linkedin, Mail } from 'lucide-react'
import { SiWhatsapp } from 'react-icons/si'
import { Link } from '@/i18n/navigation'
import { CONTACT_EMAIL, LINKEDIN_URL, GITHUB_URL, WHATSAPP_URL } from '@/content/pages/contact'

export default async function Footer() {
  const t = await getTranslations('footer')
  const tNav = await getTranslations('nav')
  const tCta = await getTranslations('cta')
  const locale = await getLocale()

  return (
    <footer className="bg-ink border-t border-ink-border">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 pt-14">
        <p className="font-display text-lg font-semibold text-[#ece9e2]">
          Henao <span className="text-brass">Intelligence</span>
        </p>
        <p className="text-sm text-[#9298a3] mt-1.5 max-w-md">
          {locale === 'es' ? 'Consultoría en Tecnología e Inteligencia de Datos' : 'Technology & Data Intelligence Consulting'}
        </p>
      </div>
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-14 grid grid-cols-2 sm:grid-cols-4 gap-10">
        <div>
          <p className="font-mono text-xs uppercase tracking-wide text-slate mb-4">
            {t('firmHeading')}
          </p>
          <ul className="space-y-2 text-sm text-[#9298a3]">
            <li><Link href="/about" className="hover:text-[#ece9e2]">{tNav('about')}</Link></li>
            <li><Link href="/method" className="hover:text-[#ece9e2]">{tNav('method')}</Link></li>
            <li><Link href="/insights" className="hover:text-[#ece9e2]">{tNav('insights')}</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-wide text-slate mb-4">
            {t('workHeading')}
          </p>
          <ul className="space-y-2 text-sm text-[#9298a3]">
            <li><Link href="/services" className="hover:text-[#ece9e2]">{tNav('services')}</Link></li>
            <li><Link href="/pricing" className="hover:text-[#ece9e2]">{tNav('pricing')}</Link></li>
            <li><Link href="/case-studies" className="hover:text-[#ece9e2]">{tNav('caseStudies')}</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-wide text-slate mb-4">
            {t('startHeading')}
          </p>
          <ul className="space-y-2 text-sm text-[#9298a3]">
            <li><Link href="/contact" className="hover:text-[#ece9e2]">{tCta('startConversation')}</Link></li>
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-[#ece9e2] flex items-center gap-1.5">
                <Mail size={13} /> {CONTACT_EMAIL}
              </a>
            </li>
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#ece9e2] flex items-center gap-1.5">
                <SiWhatsapp size={13} /> WhatsApp
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-wide text-slate mb-4">
            {t('legalHeading')}
          </p>
          <ul className="space-y-2 text-sm text-[#9298a3]">
            <li><Link href="/legal/privacy" className="hover:text-[#ece9e2]">{t('privacyLink')}</Link></li>
            <li><Link href="/legal/terms" className="hover:text-[#ece9e2]">{t('termsLink')}</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-border">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#9298a3] text-xs font-mono">
            © {new Date().getFullYear()} Henao Intelligence — Miguel Ángel Henao Cañas · {t('rights')}
          </p>
          <div className="flex items-center gap-4">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9298a3] hover:text-brass transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9298a3] hover:text-brass transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
