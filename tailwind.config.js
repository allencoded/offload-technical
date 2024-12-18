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
        delayed: '#ef4444',
        'completed-on-time': '#22c55e',
        'in-process': '#3b82f6',
        unplanned: '#6b7280',
        analyzing: '#e5e7eb',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
