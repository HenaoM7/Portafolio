'use client'

import { useEffect, useState } from 'react'
import { ChevronDown, Download, Mail } from 'lucide-react'
import Button from '@/components/ui/Button'

const typewriterPhrases = [
  'SQL | Python | Power BI',
  'Data Quality Specialist',
  'Analista de Datos',
]

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const phrase = typewriterPhrases[phraseIndex]
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (charIndex < phrase.length) {
            setDisplayText(phrase.slice(0, charIndex + 1))
            setCharIndex((c) => c + 1)
          } else {
            setTimeout(() => setDeleting(true), 1800)
          }
        } else {
          if (charIndex > 0) {
            setDisplayText(phrase.slice(0, charIndex - 1))
            setCharIndex((c) => c - 1)
          } else {
            setDeleting(false)
            setPhraseIndex((i) => (i + 1) % typewriterPhrases.length)
          }
        }
      },
      deleting ? 40 : 75
    )
    return () => clearTimeout(timeout)
  }, [charIndex, deleting, phraseIndex])

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background gradients */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-cyan-500 blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-violet-500 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-blue-500 blur-[100px] opacity-60" />
      </div>

      {/* Dot grid overlay */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-8 animate-[fadeInUp_0.6s_ease_forwards]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
          </span>
          Disponible para nuevas oportunidades
        </div>

        {/* Name */}
        <h1
          className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl leading-tight mb-4"
          style={{ animationDelay: '0.1s' }}
        >
          <span className="text-slate-100">Miguel Angel </span>
          <span className="gradient-text">Henao </span>
        </h1>

        {/* Role */}
        <p className="font-heading text-xl sm:text-2xl text-slate-300 font-semibold mb-3">
          Data Analyst
        </p>

        {/* Typewriter */}
        <div className="h-8 mb-6">
          <p className="text-cyan-400 font-mono text-lg">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        {/* Subtitle */}
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Transformo datos en decisiones estratégicas con enfoque en{' '}
          <span className="text-slate-300 font-medium">calidad</span>,{' '}
          <span className="text-slate-300 font-medium">automatización</span> y{' '}
          <span className="text-slate-300 font-medium">análisis transaccional</span>.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="#proyectos" variant="primary" size="lg">
            Ver Proyectos
          </Button>
          <Button
            href="/cv-miguel-henao.html"
            variant="outline"
            size="lg"
          >
            <Download size={18} />
            Ver CV
          </Button>
          <Button href="#contacto" variant="ghost" size="lg">
            <Mail size={18} />
            Contacto
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 animate-bounce">
        <ChevronDown size={28} />
      </div>
    </section>
  )
}
