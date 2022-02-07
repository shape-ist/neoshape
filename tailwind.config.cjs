const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.svelte'],
  darkMode: 'class',
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      'purple-dark': '#16151C',
      'purple-dark-secondary': '#2A2541',
    }),
    textColor: (theme) => ({
      ...theme('colors'),
      'purple-dark': '#16151C',
      'purple-dark-secondary': '#2A2541',
    }),
    gradientColorStops: (theme) => ({
      ...theme('colors'),
      'bg-grad-dark': 'rgba(30, 29, 42, 0.5)',
      'bg-grad-light': 'rgba(0, 0, 0, .1)',
    }),
    extend: {
      lineHeight: {
        90: '90%',
        110: '110%',
      },
      boxShadow: {
        'shape-dark':
          '0px 10px 60px -12px rgba(0, 0, 0, 0.7), -32px 32px 160px -10px rgba(128, 0, 255, 0.09), 32px -32px 160px -10px rgba(255, 0, 138, 0.09), 0px 0px 60px rgba(69, 255, 222, 0.075)',
        'shape-light':
          '0px 6px 48px -10px rgba(0, 0, 0, 0.05), -32px 32px 160px -10px rgba(128, 0, 255, 0.1), 32px -32px 160px -10px rgba(255, 0, 138, 0.1), 0px 0px 60px rgba(69, 255, 222, 0.05)',
      },
      fontFamily: {
        title: ['"Hind"', ...defaultTheme.fontFamily.sans],
        secondary: ['"Work Sans"', ...defaultTheme.fontFamily.sans],
        sans: ['"Roboto"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
