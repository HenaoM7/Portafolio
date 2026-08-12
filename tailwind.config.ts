import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0b0e13',
          surface: '#171c24',
          alt: '#1d232c',
          border: '#2a313c',
        },
        paper: {
          DEFAULT: '#eef0f2',
          surface: '#ffffff',
          alt: '#e3e6ea',
          border: '#d3d8de',
        },
        brass: {
          DEFAULT: '#d69a4e',
          light: '#a8681f',
        },
        slate: {
          DEFAULT: '#7fa0c2',
          light: '#3f5f7d',
        },
        moss: {
          DEFAULT: '#7fc29e',
          light: '#2f6b4d',
        },
        violet: {
          DEFAULT: '#b4a3dd',
          light: '#6a5a97',
        },
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-plex-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-plex-mono)', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        content: '1280px',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(8px)' },
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
