const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        coiny: ['Coiny', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'brand-light': 'var(--clr-light)',
        'brand-black': 'var(--clr-rich-black)',
        'brand-oxford-blue': 'var(--clr-oxford-blue)',
        'brand-silver-blue': 'var(--clr-silver-lake-blue)',
        'brand-platinum': 'var(--clr-platinum)',
        'brand-background': 'var(--clr-background)',
        'brand-green': 'var(--clr-green)'
      },
      animation: { 'pulse-slow': 'pulse 8s linear infinite' }
    }
  },
  plugins: []
}
