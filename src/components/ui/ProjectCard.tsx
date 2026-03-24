import { ExternalLink, Github } from 'lucide-react'
import type { Project } from '@/types'
import { cn } from '@/lib/utils'

const accentClasses = {
  cyan: {
    bar: 'from-cyan-500 to-cyan-300',
    badge: 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20',
    link: 'text-cyan-400 hover:text-cyan-300',
    shadow: 'hover:shadow-cyan-500/10',
  },
  blue: {
    bar: 'from-blue-500 to-blue-300',
    badge: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
    link: 'text-blue-400 hover:text-blue-300',
    shadow: 'hover:shadow-blue-500/10',
  },
  purple: {
    bar: 'from-violet-500 to-violet-300',
    badge: 'bg-violet-500/10 text-violet-400 border border-violet-500/20',
    link: 'text-violet-400 hover:text-violet-300',
    shadow: 'hover:shadow-violet-500/10',
  },
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const accent = accentClasses[project.accentColor]

  return (
    <div
      className={cn(
        'section-card flex flex-col overflow-hidden',
        'hover:-translate-y-1 transition-all duration-300',
        'hover:shadow-lg',
        accent.shadow
      )}
    >
      {/* Color bar */}
      <div
        className={cn(
          'h-1.5 w-full bg-gradient-to-r',
          accent.bar
        )}
      />

      <div className="flex flex-col flex-1 p-6 gap-4">
        <h3 className="font-heading text-xl font-semibold text-slate-100">
          {project.title}
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={cn(
                'text-xs px-2.5 py-1 rounded-full font-medium',
                accent.badge
              )}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-2 border-t border-[#1e293b]">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'flex items-center gap-1.5 text-sm font-medium transition-colors',
              accent.link
            )}
          >
            <Github size={15} />
            Ver Código
          </a>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'flex items-center gap-1.5 text-sm font-medium transition-colors',
                accent.link
              )}
            >
              <ExternalLink size={15} />
              Ver Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
