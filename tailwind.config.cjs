const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.svelte'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'title': ['"Hind"', ...defaultTheme.fontFamily.sans],
        'big-title': ['"Work Sans"', ...defaultTheme.fontFamily.sans],
        sans: ['"Roboto"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
