import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1a] border-t border-[#1e293b] py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Miguel Ángel Henao Cañas · Hecho con Next.js & Tailwind CSS
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/HenaoM7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-cyan-400 transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/henaom777/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-cyan-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:miguelhenaoc2007@gmail.com"
            className="text-slate-500 hover:text-cyan-400 transition-colors"
            aria-label="Gmail"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
