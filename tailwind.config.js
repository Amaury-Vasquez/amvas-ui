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
          '0%': { transform: 'translateY(-100%)', transform: 'scaleY(0)' },
          '100%': { transform: 'translateY(0)', transform: 'scaleY(1)' },
        },
        'scroll-up': {
          '0%': { transform: 'translateY(0)', transform: 'scaleY(1)' },
          '100%': { transform: 'translateY(-100%)', transform: 'scaleY(0)' },
        },
      },
      animation: {
        'to-bottom': 'scroll-down 0.3s ease',
        'to-top': 'scroll-up 0.3s ease',
      },
    },
  },
  plugins: [],
};
