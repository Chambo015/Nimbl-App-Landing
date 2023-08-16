/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        rfdewi: ['RFDewi', 'Inter', '-apple-system', 'Helvetica Neue', 'sans-serif'],
        'tt-octosquares': ['TT Octosquares', 'Inter', '-apple-system', 'Helvetica Neue', 'sans-serif'],
        gilroy: ['Gilroy', 'Inter', '-apple-system', 'Helvetica Neue', 'sans-serif'],
        univers: ['Univers', 'Inter', '-apple-system', 'Helvetica Neue', 'sans-serif'],
    },
    },
    container: {
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1160px',
      },
    },
  },
  plugins: [],
};
