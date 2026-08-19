/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        olisp: {
          50: '#f0f5ff',
          100: '#e0ebff',
          200: '#c7dafe',
          300: '#a3c2fd',
          400: '#759ff9',
          500: '#487af4',
          600: '#2b57e7',
          700: '#2242cc',
          800: '#1e38a5',
          900: '#1d3282',
          950: '#0f1c4e',
        },
        gold: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      }
    },
  },
  plugins: [],
}
