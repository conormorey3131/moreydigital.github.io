/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#060a0d',
          100: '#0a1118',
          200: '#0f1923',
          300: '#14212e',
          400: '#1a2a3a',
        },
        jade: {
          DEFAULT: '#00c896',
          50: '#e6faf4',
          100: '#b3f0de',
          200: '#80e6c8',
          300: '#4ddcb2',
          400: '#1ad29c',
          500: '#00c896',
          600: '#00a078',
          700: '#00785a',
          800: '#00503c',
          900: '#00281e',
        },
        glass: {
          DEFAULT: 'rgba(15,25,35,0.6)',
          border: 'rgba(255,255,255,0.08)',
          light: 'rgba(255,255,255,0.03)',
        }
      },
      fontFamily: {
        heading: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
