'use client'

import { useLocale } from 'next-intl'
import { SiWhatsapp } from 'react-icons/si'
import { WHATSAPP_NUMBER } from '@/content/pages/contact'

const prefilledMessage: Record<string, string> = {
  en: "Hi Henao Intelligence — I'd like to talk about a data problem.",
  es: 'Hola Henao Intelligence — quisiera hablar sobre un problema de datos.',
}

const label: Record<string, string> = {
  en: 'Chat on WhatsApp',
  es: 'Chatear por WhatsApp',
}

export default function WhatsAppBubble() {
  const locale = useLocale()
  const text = encodeURIComponent(prefilledMessage[locale] ?? prefilledMessage.en)
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
  const ariaLabel = label[locale] ?? label.en

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      title={ariaLabel}
      className="fixed z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-ink shadow-lg shadow-black/30 transition-transform duration-200 ease-out hover:scale-105 focus-visible:scale-105"
      style={{
        right: 'max(1.25rem, env(safe-area-inset-right))',
        bottom: 'max(1.25rem, env(safe-area-inset-bottom))',
      }}
    >
      <SiWhatsapp size={26} aria-hidden="true" />
    </a>
  )
}
