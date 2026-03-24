'use client'

import { useState } from 'react'
import { GraduationCap, Award, ExternalLink, Database, Brain, Code2, Shield, LayoutGrid } from 'lucide-react'
import { education } from '@/data/education'
import FadeInSection from '@/components/ui/FadeInSection'
import SectionTitle from '@/components/ui/SectionTitle'
import type { EducationItem } from '@/types'

type FilterKey = 'all' | 'datos' | 'ml' | 'programacion' | 'seguridad' | 'otros'

const FILTERS: { key: FilterKey; label: string; icon: React.ReactNode; color: string }[] = [
  { key: 'all', label: 'Todos', icon: <LayoutGrid size={14} />, color: 'text-slate-300 border-slate-600 bg-slate-800 hover:border-slate-400' },
  { key: 'datos', label: 'Datos & BI', icon: <Database size={14} />, color: 'text-cyan-300 border-cyan-700 bg-cyan-900/20 hover:border-cyan-400' },
  { key: 'ml', label: 'Machine Learning', icon: <Brain size={14} />, color: 'text-blue-300 border-blue-700 bg-blue-900/20 hover:border-blue-400' },
  { key: 'programacion', label: 'Programación', icon: <Code2 size={14} />, color: 'text-violet-300 border-violet-700 bg-violet-900/20 hover:border-violet-400' },
  { key: 'seguridad', label: 'Ciberseguridad', icon: <Shield size={14} />, color: 'text-rose-300 border-rose-700 bg-rose-900/20 hover:border-rose-400' },
]

const CATEGORY_STYLES: Record<string, { badge: string; icon: string; ring: string }> = {
  datos:       { badge: 'bg-cyan-900/30 text-cyan-300 border-cyan-700/50',    icon: 'text-cyan-400 bg-cyan-500/10',    ring: 'hover:ring-cyan-500/30' },
  ml:          { badge: 'bg-blue-900/30 text-blue-300 border-blue-700/50',    icon: 'text-blue-400 bg-blue-500/10',    ring: 'hover:ring-blue-500/30' },
  programacion:{ badge: 'bg-violet-900/30 text-violet-300 border-violet-700/50', icon: 'text-violet-400 bg-violet-500/10', ring: 'hover:ring-violet-500/30' },
  seguridad:   { badge: 'bg-rose-900/30 text-rose-300 border-rose-700/50',    icon: 'text-rose-400 bg-rose-500/10',    ring: 'hover:ring-rose-500/30' },
  otros:       { badge: 'bg-slate-700/50 text-slate-300 border-slate-600/50', icon: 'text-slate-400 bg-slate-700/40',  ring: 'hover:ring-slate-500/30' },
}

const CATEGORY_ICON: Record<string, React.ReactNode> = {
  datos:        <Database size={18} />,
  ml:           <Brain size={18} />,
  programacion: <Code2 size={18} />,
  seguridad:    <Shield size={18} />,
  otros:        <Award size={18} />,
}

const CATEGORY_LABEL: Record<string, string> = {
  datos:        'Datos & BI',
  ml:           'Machine Learning',
  programacion: 'Programación',
  seguridad:    'Ciberseguridad',
  otros:        'Otros',
}

function CertCard({ item }: { item: EducationItem }) {
  const cat = item.category ?? 'otros'
  const style = CATEGORY_STYLES[cat]

  return (
    <div
      className={`section-card p-4 flex flex-col gap-3 ring-1 ring-transparent transition-all duration-200 ${style.ring}`}
    >
      {/* Header */}
      <div className="flex items-start gap-3">
        <div className={`p-2 rounded-lg shrink-0 ${style.icon}`}>
          {CATEGORY_ICON[cat]}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-heading font-semibold text-slate-100 text-sm leading-snug">
            {item.degree}
          </h4>
          <p className="text-slate-400 text-xs mt-0.5">{item.institution}</p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto pt-1 border-t border-[#1e293b]">
        <span className={`text-xs px-2 py-0.5 rounded-full border ${style.badge}`}>
          {CATEGORY_LABEL[cat]}
        </span>
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500">{item.year}</span>
          {item.pdfUrl && (
            <a
              href={item.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-slate-400 hover:text-cyan-400 transition-colors"
              title="Ver certificado"
            >
              <ExternalLink size={13} />
              <span>Ver</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Educacion() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all')

  const degrees = education.filter((e) => e.type === 'degree')
  const certs = education.filter((e) => e.type !== 'degree')

  const filtered =
    activeFilter === 'all'
      ? certs
      : certs.filter((c) => c.category === activeFilter)

  const counts: Record<FilterKey, number> = {
    all: certs.length,
    datos: certs.filter((c) => c.category === 'datos').length,
    ml: certs.filter((c) => c.category === 'ml').length,
    programacion: certs.filter((c) => c.category === 'programacion').length,
    seguridad: certs.filter((c) => c.category === 'seguridad').length,
    otros: certs.filter((c) => c.category === 'otros').length,
  }

  return (
    <section id="educacion" className="py-20 md:py-28 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <SectionTitle title="Educación" subtitle="Formación académica y certificaciones" />
        </FadeInSection>

        {/* Educación Formal */}
        <FadeInSection delay={100}>
          <div className="max-w-3xl mx-auto mb-12">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-4 pb-2 border-b border-[#1e293b]">
              Educación Formal
            </h3>
            <div className="space-y-4">
              {degrees.map((item, i) => (
                <div key={i} className="section-card p-5 flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 shrink-0">
                    <GraduationCap size={22} className="text-cyan-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-heading font-semibold text-slate-100 text-base">
                      {item.degree}
                    </h4>
                    <p className="text-slate-400 text-sm mt-0.5">{item.institution}</p>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-400 border border-[#1e293b] shrink-0 self-start">
                    {item.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* Certificaciones */}
        <FadeInSection delay={200}>
          <div>
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-[#1e293b]">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
                Certificaciones
              </h3>
              <span className="text-xs text-slate-500">{filtered.length} certificados</span>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {FILTERS.map((f) => (
                <button
                  key={f.key}
                  onClick={() => setActiveFilter(f.key)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-150 ${
                    activeFilter === f.key
                      ? f.color + ' ring-1 ring-current opacity-100'
                      : f.color + ' opacity-60'
                  }`}
                >
                  {f.icon}
                  {f.label}
                  <span className="ml-0.5 opacity-70">({counts[f.key]})</span>
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((item, i) => (
                <CertCard key={i} item={item} />
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
