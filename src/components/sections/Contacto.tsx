import { Mail, Linkedin, Github, MapPin } from 'lucide-react'
import FadeInSection from '@/components/ui/FadeInSection'
import SectionTitle from '@/components/ui/SectionTitle'

const contactLinks = [
  {
    icon: Mail,
    label: 'Gmail',
    value: 'miguelhenaoc2007@gmail.com',
    href: 'mailto:miguelhenaoc2007@gmail.com?subject=Hola%20Miguel%20-%20Portafolio',
    color: 'cyan',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/henaom777',
    href: 'https://www.linkedin.com/in/henaom777/',
    color: 'blue',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/HenaoM7',
    href: 'https://github.com/HenaoM7',
    color: 'purple',
  },
]

const colorMap = {
  cyan: {
    bg: 'bg-cyan-500/10 hover:bg-cyan-500/20',
    border: 'border-[#1e293b] hover:border-cyan-500/40',
    icon: 'text-cyan-400',
    label: 'text-cyan-400',
  },
  blue: {
    bg: 'bg-blue-500/10 hover:bg-blue-500/20',
    border: 'border-[#1e293b] hover:border-blue-500/40',
    icon: 'text-blue-400',
    label: 'text-blue-400',
  },
  purple: {
    bg: 'bg-violet-500/10 hover:bg-violet-500/20',
    border: 'border-[#1e293b] hover:border-violet-500/40',
    icon: 'text-violet-400',
    label: 'text-violet-400',
  },
}

export default function Contacto() {
  return (
    <section id="contacto" className="py-20 md:py-28 bg-[#0a0f1a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <SectionTitle
            title="Contacto"
            subtitle="¿Tienes un proyecto o una oportunidad en mente? Hablemos."
          />
        </FadeInSection>

        <div className="max-w-3xl mx-auto">
          {/* Contact tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {contactLinks.map((link, idx) => {
              const colors = colorMap[link.color as keyof typeof colorMap]
              const Icon = link.icon
              return (
                <FadeInSection key={link.label} delay={idx * 100}>
                  <a
                    href={link.href}
                    target={link.label !== 'Gmail' ? '_blank' : undefined}
                    rel={link.label !== 'Gmail' ? 'noopener noreferrer' : undefined}
                    className={`section-card flex flex-col items-center gap-4 p-6 transition-all duration-200 hover:-translate-y-1 ${colors.bg} ${colors.border}`}
                  >
                    <div className={`p-3 rounded-xl ${colors.bg}`}>
                      <Icon size={28} className={colors.icon} />
                    </div>
                    <div className="text-center">
                      <p className={`font-semibold text-sm ${colors.label}`}>
                        {link.label}
                      </p>
                      <p className="text-slate-500 text-xs mt-1 truncate max-w-[160px]">
                        {link.value}
                      </p>
                    </div>
                  </a>
                </FadeInSection>
              )
            })}
          </div>

          {/* CTA + availability */}
          <FadeInSection delay={300}>
            <div className="text-center space-y-6">
              <a
                href="mailto:miguelhenaoc2007@gmail.com?subject=Hola%20Miguel%20-%20Portafolio"
                className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-400 text-gray-950 font-semibold rounded-lg hover:bg-cyan-300 shadow-lg shadow-cyan-500/20 transition-all duration-200 hover:shadow-cyan-500/40 text-base"
              >
                <Mail size={18} />
                Enviar Mensaje
              </a>

              <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
                <MapPin size={14} />
                <span>Disponible para proyectos freelance y posiciones full-time</span>
                <span className="mx-1 text-slate-700">·</span>
                <span>Colombia (GMT-5)</span>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
