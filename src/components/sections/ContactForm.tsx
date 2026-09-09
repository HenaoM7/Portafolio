'use client'

import { useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactForm() {
  const t = useTranslations('contactForm')
  const locale = useLocale()
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')

    const data = new FormData(e.currentTarget)
    const payload = {
      name: data.get('name')?.toString() ?? '',
      company: data.get('company')?.toString() ?? '',
      email: data.get('email')?.toString() ?? '',
      role: data.get('role')?.toString() ?? '',
      service: data.get('service')?.toString() ?? '',
      challenge: data.get('challenge')?.toString() ?? '',
      message: data.get('message')?.toString() ?? '',
      website: data.get('website')?.toString() ?? '', // honeypot
      locale,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      e.currentTarget.reset()
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full bg-ink-surface border border-ink-border card-edge px-4 py-2.5 text-[#ece9e2] placeholder:text-[#5a616c] focus:outline-none focus:border-brass transition-colors disabled:opacity-60'
  const labelClass = 'block text-xs font-mono uppercase tracking-wide text-slate mb-1.5'
  const isSubmitting = status === 'submitting'

  return (
    <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5 max-w-2xl" noValidate>
      {/* Honeypot field — hidden from real visitors via CSS, bots tend to fill every field they find. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="name" className={labelClass}>{t('name')}</label>
        <input id="name" name="name" type="text" required disabled={isSubmitting} className={inputClass} />
      </div>
      <div>
        <label htmlFor="company" className={labelClass}>{t('company')}</label>
        <input id="company" name="company" type="text" required disabled={isSubmitting} className={inputClass} />
      </div>
      <div>
        <label htmlFor="email" className={labelClass}>{t('email')}</label>
        <input id="email" name="email" type="email" required disabled={isSubmitting} className={inputClass} />
      </div>
      <div>
        <label htmlFor="role" className={labelClass}>{t('role')}</label>
        <input id="role" name="role" type="text" disabled={isSubmitting} className={inputClass} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="service" className={labelClass}>{t('service')}</label>
        <select id="service" name="service" disabled={isSubmitting} className={inputClass}>
          <option value={t('serviceOptions.dataQuality')}>{t('serviceOptions.dataQuality')}</option>
          <option value={t('serviceOptions.fraudRisk')}>{t('serviceOptions.fraudRisk')}</option>
          <option value={t('serviceOptions.profitability')}>{t('serviceOptions.profitability')}</option>
          <option value={t('serviceOptions.unsure')}>{t('serviceOptions.unsure')}</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="challenge" className={labelClass}>{t('challenge')}</label>
        <input id="challenge" name="challenge" type="text" disabled={isSubmitting} className={inputClass} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className={labelClass}>{t('message')}</label>
        <textarea id="message" name="message" rows={5} required disabled={isSubmitting} className={inputClass} />
      </div>
      <div className="sm:col-span-2 flex items-center gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-3 card-edge bg-brass text-ink font-semibold hover:bg-brass/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? t('sending') : t('submit')}
        </button>
        {status === 'success' && (
          <span className="text-sm text-moss" role="status">{t('success')}</span>
        )}
        {status === 'error' && (
          <span className="text-sm text-red-400" role="alert">{t('error')}</span>
        )}
      </div>
    </form>
  )
}
