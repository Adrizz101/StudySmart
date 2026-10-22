/** @type{import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        'surface-hover': 'var(--surface-hover)',
        'surface-active': 'var(--surface-active)',
        border: 'var(--border)',
        'border-light': 'var(--border-light)',
        text: 'var(--text)',
        'text-muted': 'var(--text-muted)',
        'text-dim': 'var(--text-dim)',
        accent: {
          DEFAULT: 'var(--accent)',
          50: 'var(--accent-50)',
          100: 'var(--accent-100)',
          200: 'var(--accent-200)',
          300: 'var(--accent-300)',
          400: 'var(--accent-400)',
          500: 'var(--accent-500)',
          600: 'var(--accent-600)',
          700: 'var(--accent-700)',
          800: 'var(--accent-800)',
          900: 'var(--accent-900)',
        },
      },
    },
  },
  plugins: [],
};
