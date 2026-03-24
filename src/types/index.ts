export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  accentColor: 'cyan' | 'blue' | 'purple'
  githubUrl: string
  demoUrl?: string
}

export interface ImpactBullet {
  text: string
}

export interface ExperienceItem {
  company: string
  role: string
  period: string
  location: string
  impacts: string[]
  techUsed: string[]
}

export interface TechItem {
  name: string
  iconKey: string
  group: 'data' | 'devops' | 'qa'
}

export interface EducationItem {
  institution: string
  degree: string
  year: string
  type: 'degree' | 'certification' | 'course'
  category?: 'datos' | 'ml' | 'programacion' | 'seguridad' | 'otros'
  pdfUrl?: string
}
