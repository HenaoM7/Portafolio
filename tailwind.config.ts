import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0a0f1a',
          secondary: '#0f172a',
          card: '#111827',
          border: '#1e293b',
        },
        accent: {
          cyan: '#22d3ee',
          blue: '#60a5fa',
          purple: '#a78bfa',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'gradient-shift': 'gradientShift 4s ease infinite',
        'fade-in-up': 'fadeInUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.8s ease forwards',
      },
      keyframes: {
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
