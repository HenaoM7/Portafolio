'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { CONTACT_EMAIL } from '@/content/pages/contact'

export default function ContactForm() {
  const t = useTranslations('contactForm')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = data.get('name')?.toString() ?? ''
    const company = data.get('company')?.toString() ?? ''
    const role = data.get('role')?.toString() ?? ''
    const challenge = data.get('challenge')?.toString() ?? ''
    const service = data.get('service')?.toString() ?? ''
    const message = data.get('message')?.toString() ?? ''
    const email = data.get('email')?.toString() ?? ''

    const subject = encodeURIComponent(`${t('submit')} — ${company || name}`)
    const body = encodeURIComponent(
      `${t('name')}: ${name}\n${t('company')}: ${company}\n${t('email')}: ${email}\n${t('role')}: ${role}\n${t('service')}: ${service}\n\n${t('challenge')}:\n${challenge}\n\n${t('message')}:\n${message}`
    )

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  const inputClass =
    'w-full bg-ink-surface border border-ink-border card-edge px-4 py-2.5 text-[#ece9e2] placeholder:text-[#5a616c] focus:outline-none focus:border-brass transition-colors'
  const labelClass = 'block text-xs font-mono uppercase tracking-wide text-slate mb-1.5'

  return (
    <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5 max-w-2xl">
      <div>
        <label htmlFor="name" className={labelClass}>{t('name')}</label>
        <input id="name" name="name" type="text" required className={inputClass} />
      </div>
      <div>
        <label htmlFor="company" className={labelClass}>{t('company')}</label>
        <input id="company" name="company" type="text" required className={inputClass} />
      </div>
      <div>
        <label htmlFor="email" className={labelClass}>{t('email')}</label>
        <input id="email" name="email" type="email" required className={inputClass} />
      </div>
      <div>
        <label htmlFor="role" className={labelClass}>{t('role')}</label>
        <input id="role" name="role" type="text" className={inputClass} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="service" className={labelClass}>{t('service')}</label>
        <select id="service" name="service" className={inputClass}>
          <option value={t('serviceOptions.dataQuality')}>{t('serviceOptions.dataQuality')}</option>
          <option value={t('serviceOptions.fraudRisk')}>{t('serviceOptions.fraudRisk')}</option>
          <option value={t('serviceOptions.profitability')}>{t('serviceOptions.profitability')}</option>
          <option value={t('serviceOptions.unsure')}>{t('serviceOptions.unsure')}</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="challenge" className={labelClass}>{t('challenge')}</label>
        <input id="challenge" name="challenge" type="text" className={inputClass} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className={labelClass}>{t('message')}</label>
        <textarea id="message" name="message" rows={5} required className={inputClass} />
      </div>
      <div className="sm:col-span-2 flex items-center gap-4">
        <button
          type="submit"
          className="px-6 py-3 card-edge bg-brass text-ink font-semibold hover:bg-brass/90 transition-colors"
        >
          {t('submit')}
        </button>
        {submitted && (
          <span className="text-sm text-moss" role="status">
            ✓
          </span>
        )}
      </div>
    </form>
  )
}
