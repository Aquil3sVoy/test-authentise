const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter var',
          ...defaultTheme.fontFamily.sans,
        ],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.slate'),

            // ...
          },
        },
      }),
      colors: {
        gray: colors.slate,
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['dark'],
      cursor: ['disabled'],
      opacity: ['disabled'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
};
