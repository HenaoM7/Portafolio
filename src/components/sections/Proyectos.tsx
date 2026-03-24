import { projects } from '@/data/projects'
import ProjectCard from '@/components/ui/ProjectCard'
import FadeInSection from '@/components/ui/FadeInSection'
import SectionTitle from '@/components/ui/SectionTitle'

export default function Proyectos() {
  return (
    <section id="proyectos" className="py-20 md:py-28 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <SectionTitle
            title="Proyectos"
            subtitle="Análisis reales con datos reales — no solo dashboards bonitos"
          />
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <FadeInSection key={project.id} delay={idx * 100}>
              <ProjectCard project={project} />
            </FadeInSection>
          ))}
        </div>

        <FadeInSection delay={300}>
          <p className="text-center text-slate-500 text-sm mt-10">
            Más proyectos disponibles en{' '}
            <a
              href="https://github.com/HenaoM7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              GitHub
            </a>
          </p>
        </FadeInSection>
      </div>
    </section>
  )
}
