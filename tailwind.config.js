/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
        fontFamily: {
            sans: ['Inter', 'sans-serif'],
        },
        colors: {
            'brand-primary': '#6A3DE8',
            'brand-secondary': '#8B5CF6',
            'dark-bg': '#111827',
            'light-bg': '#F9FAFB',
            'dark-card': '#1F2937',
        }
    }
  },
  plugins: [],
}