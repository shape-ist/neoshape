const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.svelte'],
  darkMode: 'class',
  theme: {
    boxShadow: {
      'shape': '0px 6px 40px -10px rgba(0, 0, 0, 0.02), -32px 32px 60px -10px rgba(128, 0, 255, 0.09), 32px -32px 60px -10px rgba(255, 0, 138, 0.09), 0px 0px 60px rgba(69, 255, 222, 0.08)'
    },
    extend: {
      lineHeight: {
        '90': '90%'
       },
      fontFamily: {
        'title': ['"Hind"', ...defaultTheme.fontFamily.sans],
        'secondary': ['"Work Sans"', ...defaultTheme.fontFamily.sans],
        sans: ['"Roboto"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
