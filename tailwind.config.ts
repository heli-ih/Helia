import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Syne', 'sans-serif'],
      },
      colors: {
        void:     '#09080f',
        terminal: '#0d0c12',
        panel:    '#100f18',
        hover:    '#18181c',
        active:   '#1e1e24',
        purple: {
          DEFAULT: '#6070c8',
          dim:    '#2a3070',
          bg:     '#0e1028',
          border: '#2a3060',
        },
        amber: {
          DEFAULT: '#e6a817',
          dim:    '#3d2c08',
        },
        blue: {
          label: '#6090c8',
        },
        border: {
          dim:    'rgba(255,255,255,0.06)',
          mid:    'rgba(255,255,255,0.10)',
          bright: 'rgba(255,255,255,0.16)',
        },
        text: {
          primary:   '#e8e8f0',
          secondary: '#888894',
          muted:     '#3e3e4a',
        },
      },
      borderRadius: {
        bezel: '28px',
        screen: '20px',
      },
      animation: {
        blink:          'blink 1.2s step-end infinite',
        pulse:          'pulse 2s ease-in-out infinite',
        fadeIn:         'fadeIn 0.3s cubic-bezier(0.16,1,0.3,1) forwards',
        floatY:         'floatY 3.5s ease-in-out infinite',
        typeIn:         'typeIn 0.3s ease forwards',
        slideIndicator: 'slideIndicator 0.2s ease forwards',
        shimmer:        'shimmer 2.5s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
