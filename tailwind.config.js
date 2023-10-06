/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    backgroundImage: {
      'gradient-pink-blue': 'linear-gradient(89deg, #ff5edf 0%, #04c8de 100%)',
      'image-link-form':
        'radial-gradient(circle farthest-side at 0% 50%, #fb1 23.5%, rgba(240, 166, 17, 0) 0) 21px 30px, radial-gradient(circle farthest-side at 0% 50%, #B71 24%, rgba(240, 166, 17, 0) 0) 19px 30px, linear-gradient(#fb1 14%, rgba(240, 166, 17, 0) 0, rgba(240, 166, 17, 0) 85%, #fb1 0) 0 0, linear-gradient(150deg, #fb1 24%, #B71 0, #B71 26%, rgba(240, 166, 17, 0) 0, rgba(240, 166, 17, 0) 74%, #B71 0, #B71 76%, #fb1 0) 0 0, linear-gradient(30deg, #fb1 24%, #B71 0, #B71 26%, rgba(240, 166, 17, 0) 0, rgba(240, 166, 17, 0) 74%, #B71 0, #B71 76%, #fb1 0) 0 0, linear-gradient(90deg, #B71 2%, #fb1 0, #fb1 98%, #B71 0%) 0 0 #fb1',
    },
  },
  plugins: [],
};
