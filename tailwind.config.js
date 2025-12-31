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
          50: '#e6e9ed',
          100: '#ccd3db',
          200: '#99a7b7',
          300: '#667b93',
          400: '#334f6f',
          500: '#1a365d', // Navy blue
          600: '#152b4a',
          700: '#102038',
          800: '#0a1525',
          900: '#050b13',
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
