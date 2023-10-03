/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    backgroundImage: {
      'gradient-pink-blue': 'linear-gradient(89deg, #ff5edf 0%, #04c8de 100%)',
    },
  },
  plugins: [],
};
