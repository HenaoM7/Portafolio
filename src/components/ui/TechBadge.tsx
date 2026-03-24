'use client'

import {
  SiPython,
  SiPandas,
  SiPostgresql,
  SiJupyter,
  SiPlotly,
  SiGit,
  SiGithub,
  SiSelenium,
  SiPostman,
  SiJira,
  SiTestinglibrary,
  SiVscodium,
} from 'react-icons/si'
import type { TechItem } from '@/types'

type IconComponent = React.ComponentType<{ size?: number; className?: string }>

const iconMap: Record<string, IconComponent> = {
  SiPython,
  SiPandas,
  SiPostgresql,
  SiJupyter,
  SiPlotly,
  SiGit,
  SiGithub,
  SiSelenium,
  SiPostman,
  SiJira,
  SiTestinglibrary,
  SiVscodium,
}

interface TechBadgeProps {
  tech: TechItem
}

export default function TechBadge({ tech }: TechBadgeProps) {
  const Icon = tech.iconKey ? iconMap[tech.iconKey] : undefined

  return (
    <div className="section-card flex flex-col items-center gap-2.5 p-4 hover:border-cyan-500/40 transition-colors duration-200 cursor-default group">
      {Icon ? (
        <Icon
          size={32}
          className="text-slate-400 group-hover:text-cyan-400 transition-colors duration-200"
        />
      ) : (
        <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-xs font-bold text-cyan-400 border border-cyan-500/20">
          {tech.name.slice(0, 2).toUpperCase()}
        </div>
      )}
      <span className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors font-medium text-center leading-tight">
        {tech.name}
      </span>
    </div>
  )
}
