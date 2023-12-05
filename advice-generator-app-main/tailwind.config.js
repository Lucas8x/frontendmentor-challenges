/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html'],
  theme: {
    extend: {
      dropShadow: {
        glow: [
          '0 0px 20px rgba(52, 211, 153, 0.8)',
          '0 0px 50px rgba(52, 211, 153, 0.2)',
        ],
      },
    },
  },
  plugins: [],
};
