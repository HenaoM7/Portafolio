import FadeInSection from '@/components/ui/FadeInSection'
import SectionTitle from '@/components/ui/SectionTitle'

const stats = [
  { value: '1+', label: 'años en QA' },
  { value: '10+', label: 'proyectos de datos' },
  { value: '5+', label: 'herramientas dominadas' },
]

export default function SobreMi() {
  return (
    <section id="sobre-mi" className="py-20 md:py-28 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <SectionTitle
            title="Sobre Mí"
            subtitle="De la calidad del software a la calidad del dato"
          />
        </FadeInSection>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <FadeInSection delay={100}>
            <div className="space-y-6">
              <p className="text-slate-300 leading-relaxed text-lg">
                Mi trayectoria como{' '}
                <span className="text-cyan-400 font-semibold">
                  Ingeniero QA en Quipux
                </span>{' '}
                me permitió desarrollar una visión profunda sobre la integridad y
                calidad de los datos transaccionales. Trabajando con millones de
                registros en entornos productivos, aprendí que los datos de mala
                calidad no son solo un problema técnico — son un riesgo de
                negocio.
              </p>

              <p className="text-slate-300 leading-relaxed text-lg">
                Hoy aplico esa mentalidad al análisis de datos: construcción de{' '}
                <span className="text-cyan-400 font-semibold">KPIs estratégicos</span>,
                validación de integridad, automatización de pipelines y
                visualización ejecutiva con Power BI. Mi diferencial es que no
                solo analizo los datos — los entiendo desde su origen.
              </p>

              {/* Quote block */}
              <blockquote className="border-l-4 border-cyan-400 pl-5 py-2">
                <p className="text-slate-400 italic text-base">
                  &ldquo;El valor de un análisis depende completamente de la calidad
                  de los datos que lo sustentan. Ahí es donde inicio mi trabajo.&rdquo;
                </p>
              </blockquote>
            </div>
          </FadeInSection>

          {/* Stats card */}
          <FadeInSection delay={200}>
            <div className="section-card p-8 space-y-6">
              <h3 className="font-heading font-semibold text-slate-300 text-sm uppercase tracking-widest">
                En números
              </h3>
              <div className="space-y-5">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center gap-4 pb-5 border-b border-[#1e293b] last:border-0 last:pb-0"
                  >
                    <span className="font-heading font-bold text-4xl gradient-text min-w-[4rem]">
                      {stat.value}
                    </span>
                    <span className="text-slate-400 text-base">{stat.label}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-2">
                {['SQL', 'Python', 'Power BI', 'Data Quality', 'ETL', 'CI/CD'].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-medium"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
