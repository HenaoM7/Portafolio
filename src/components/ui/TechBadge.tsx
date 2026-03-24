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

function PowerBIIcon({ size = 32 }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect x="4" y="18" width="5" height="10" rx="1.5" fill="#F2C811" />
      <rect x="13" y="11" width="5" height="17" rx="1.5" fill="#F2C811" opacity="0.85" />
      <rect x="22" y="4" width="5" height="24" rx="1.5" fill="#F2C811" opacity="0.65" />
    </svg>
  )
}

function ExcelIcon({ size = 32 }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect x="3" y="3" width="26" height="26" rx="4" fill="#1D6F42" />
      <path d="M9 10l4.5 6L9 22" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 22h8" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M19 10v12" stroke="white" strokeWidth="2.2" strokeLinecap="round" opacity="0.6" />
    </svg>
  )
}

function AzureDevOpsIcon({ size = 32 }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path d="M4 20.5L8.5 8l8-4.5v5.5L10 13.5 26 11v3.5L8.5 24.5 4 20.5z" fill="#0078D4" />
      <path d="M16.5 9l9.5-2.5v14L8.5 24.5l8-4V9z" fill="#0078D4" opacity="0.65" />
    </svg>
  )
}

const customIconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  CustomPowerBI: PowerBIIcon,
  CustomExcel: ExcelIcon,
  CustomAzureDevOps: AzureDevOpsIcon,
}

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
  const CustomIcon = tech.iconKey ? customIconMap[tech.iconKey] : undefined

  return (
    <div className="section-card flex flex-col items-center gap-2.5 p-4 hover:border-cyan-500/40 transition-colors duration-200 cursor-default group">
      {Icon ? (
        <Icon
          size={32}
          className="text-slate-400 group-hover:text-cyan-400 transition-colors duration-200"
        />
      ) : CustomIcon ? (
        <CustomIcon size={32} />
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
