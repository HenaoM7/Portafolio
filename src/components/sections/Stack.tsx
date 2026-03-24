import { stack } from '@/data/stack'
import TechBadge from '@/components/ui/TechBadge'
import FadeInSection from '@/components/ui/FadeInSection'
import SectionTitle from '@/components/ui/SectionTitle'

const groups: { key: 'data' | 'devops' | 'qa'; label: string }[] = [
  { key: 'data', label: 'Data & Analytics' },
  { key: 'devops', label: 'DevOps & Herramientas' },
  { key: 'qa', label: 'QA & Testing' },
]

export default function Stack() {
  return (
    <section id="stack" className="py-20 md:py-28 bg-[#0a0f1a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <SectionTitle
            title="Stack Tecnológico"
            subtitle="Herramientas que domino en entornos de producción"
          />
        </FadeInSection>

        <div className="space-y-12">
          {groups.map((group, gi) => {
            const items = stack.filter((t) => t.group === group.key)
            return (
              <FadeInSection key={group.key} delay={gi * 100}>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-4 pb-2 border-b border-[#1e293b]">
                    {group.label}
                  </h3>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-3">
                    {items.map((tech) => (
                      <TechBadge key={tech.name} tech={tech} />
                    ))}
                  </div>
                </div>
              </FadeInSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
