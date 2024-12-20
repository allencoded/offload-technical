/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        primary: {
          DEFAULT: 'hsl(197, 100%, 49%)',
          light: 'hsl(202, 100%, 77%)',
          dark: 'hsl(205, 100%, 35%)',
        },
        delayed: 'hsl(0, 79%, 58%)',
        completed: 'hsl(151, 65%, 49%)',
        process: 'hsl(217, 88%, 53%)',
        unplanned: {
          DEFAULT: 'hsl(210, 13%, 55%)',
          light: 'hsl(210, 13%, 92%)',
          lightest: 'hsl(210, 13%, 96%)',
          dark: 'hsl(210, 13%, 20%)',
        },
        analyzing: 'hsl(0, 0%, 92%)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
