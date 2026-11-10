/** @type {import('tailwindcss').Config} */
const themeColor = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: themeColor('surface'),
        'surface-alt': themeColor('surface-alt'),
        'surface-card': themeColor('surface-card'),
        ink: themeColor('ink'),
        'ink-soft': themeColor('ink-soft'),
        'ink-faint': themeColor('ink-faint'),
        line: themeColor('line'),
        accent: themeColor('accent'),
        'on-accent': themeColor('on-accent'),
      },
    },
  },
  plugins: [],
};
