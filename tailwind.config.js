/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f2eb',
          100: '#cce5d7',
          200: '#99cbaf',
          300: '#66b187',
          400: '#33975f',
          500: '#0E6A37', // GSE Green
          600: '#0b552c',
          700: '#084021',
          800: '#062b16',
          900: '#03150b',
        },
        navy: {
          50: '#e8f5ec',
          100: '#d1ebd9',
          200: '#a3d7b3',
          300: '#75c38d',
          400: '#47af67',
          500: '#0d5a2f', // Dark green (replacing navy blue)
          600: '#0a4825',
          700: '#08361c',
          800: '#052412',
          900: '#031209',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Montserrat', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
