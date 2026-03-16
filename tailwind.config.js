/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 'dark' remapped to navy — keeps all existing bg-dark, bg-dark-100 etc. classes working
        dark: {
          DEFAULT: '#1A3C6E',
          100: '#153160',
          200: '#0F2750',
          300: '#0A1D40',
          400: '#071430',
        },
        // 'jade' remapped to brand orange — keeps all existing text-jade, bg-jade etc. classes working
        jade: {
          DEFAULT: '#F47B20',
          50: '#FFF4EC',
          100: '#FDE9D4',
          200: '#FBCFA7',
          300: '#F9B47A',
          400: '#F6984D',
          500: '#F47B20',
          600: '#D4690F',
          700: '#A85309',
          800: '#7D3E07',
          900: '#512804',
        },
        // Light blue for alternating sections
        'light-blue': '#D6E4F0',
        // Light orange for callout boxes
        'light-orange': '#FDE9D4',
        glass: {
          DEFAULT: 'rgba(255,255,255,0.95)',
          border: 'rgba(214,228,240,1)',
          light: 'rgba(248,250,252,1)',
        }
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
