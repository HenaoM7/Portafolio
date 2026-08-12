export interface EducationItem {
  institution: string
  degree: string
  year: string
  type: 'degree' | 'certification' | 'course'
  category?: 'datos' | 'ml' | 'programacion' | 'seguridad' | 'otros'
  pdfUrl?: string
}
