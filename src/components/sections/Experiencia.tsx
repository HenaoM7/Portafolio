import { ArrowRight, MapPin, Calendar } from 'lucide-react'
import { experience } from '@/data/experience'
import FadeInSection from '@/components/ui/FadeInSection'
import SectionTitle from '@/components/ui/SectionTitle'

export default function Experiencia() {
  return (
    <section id="experiencia" className="py-20 md:py-28 bg-[#0a0f1a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <SectionTitle
            title="Experiencia Profesional"
            subtitle="Impacto real en entornos de datos productivos"
          />
        </FadeInSection>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/60 via-cyan-500/20 to-transparent hidden sm:block" />

          <div className="space-y-10">
            {experience.map((item, idx) => (
              <FadeInSection key={idx} delay={idx * 100}>
                <div className="relative sm:pl-16">
                  {/* Dot */}
                  <div className="absolute left-3 top-2 w-4 h-4 rounded-full bg-cyan-500 border-2 border-[#0a0f1a] hidden sm:block shadow-[0_0_10px_rgba(34,211,238,0.5)]" />

                  <div className="section-card p-6 md:p-8">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
                      <div>
                        <h3 className="font-heading font-bold text-xl text-slate-100">
                          {item.role}
                        </h3>
                        <p className="text-cyan-400 font-semibold text-base mt-1">
                          {item.company}
                        </p>
                      </div>
                      <div className="flex flex-col sm:items-end gap-1.5 text-sm text-slate-500 shrink-0">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={14} />
                          {item.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={14} />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    {/* Impacts */}
                    <ul className="space-y-3 mb-6">
                      {item.impacts.map((impact, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <ArrowRight
                            size={15}
                            className="text-cyan-400 mt-0.5 shrink-0"
                          />
                          <span className="text-slate-300 text-sm leading-relaxed">
                            {impact}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-[#1e293b]">
                      {item.techUsed.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
