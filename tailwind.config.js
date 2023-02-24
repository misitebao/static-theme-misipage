const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: 'var(--color-primary)',
      },
      backgroundColor: {
        base: 'var(--color-base)',
        // primary: 'var(--color-primary)',
        // secondary: 'var(--color-secondary)',
        // muted: 'var(--color-text-muted)',
      },
      borderRadius: {
        DEFAULT: 'var(--border-radius)',
      },
      typography: {},
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
