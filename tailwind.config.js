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
        TTOctos: ['TTOctosquares', 'Inter', '-apple-system', 'Helvetica Neue', 'sans-serif'],
    },
    backgroundImage: {
      'btn-bg-liner': 'radial-gradient(119.98% 176.69% at 84.00% -4.95%, rgba(170, 214, 255, 0.81) 0%, rgba(170, 214, 255, 0.81) 0.01%, #0066FE 100%)'
    }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        xl: 0
      },
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
