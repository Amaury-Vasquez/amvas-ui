/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'scroll-down': {
          '0%': { transform: 'translateY(-100%)' },
          '70%': { transform: 'translateY(8px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        'to-bottom': 'scroll-down 1s ease-in-out',
      },
    },
  },
  plugins: [],
};
