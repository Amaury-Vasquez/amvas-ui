/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './overview/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'transparent-black': 'rgba(0, 0, 0, 0.3)',
        'transparent-white': 'rgba(255, 255, 255, 0.3)',
        primary: '#3b82f6',
        'primary-dark': '#2563eb',
        'primary-darker': '#1d4ed8',
        'primary-light': '#60a5fa',
      },
      keyframes: {
        'scroll-down': {
          '0%': { transform: 'translateY(-100%)', transform: 'scaleY(0)' },
          '100%': { transform: 'translateY(0)', transform: 'scaleY(1)' },
        },
        'scroll-up': {
          '0%': { transform: 'translateY(0)', transform: 'scaleY(1)' },
          '100%': { transform: 'translateY(-100%)', transform: 'scaleY(0)' },
        },
        'appear-right': {
          '0%': { transform: 'translateX(-100%)', transform: 'scaleX(0)' },
          '100%': { transform: 'translateX(0)', transform: 'scaleX(1)' },
        },
        'dissapear-left': {
          '0%': { transform: 'translateX(0)', transform: 'scaleX(1)' },
          '100%': { transform: 'translateX(-110%)', transform: 'scaleX(0)' },
        },
        'rotate-90': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(90deg)' },
        },
        'rotate-from-90': {
          '0%': { transform: 'rotate(90deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        'rotate-180': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(180deg)' },
        },
        'rotate-from-180': {
          '0%': { transform: 'rotate(180deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'fade-in': {
          '0%': { opacity: '0', filter: 'blur(5px)' },
          '100%': { opacity: '1', filter: 'blur(0)' },
        },
        'fade-out': {
          '0%': { opacity: '1', filter: 'blur(0)' },
          '100%': { opacity: '0', filter: 'blur(5px)' },
        },
        'toggle-left': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'toggle-right': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'to-bottom': 'scroll-down 0.3s ease',
        'to-top': 'scroll-up 0.3s ease',
        'appear-right': 'appear-right 0.3s ease',
        'dissapear-left': 'dissapear-left 0.3s ease',
        'rotate-90': 'rotate-90 0.3s ease',
        'rotate-from-90': 'rotate-from-90 0.3s ease',
        'rotate-180': 'rotate-180 0.3s ease',
        'rotate-from-180': 'rotate-from-180 0.3s ease',
        'fade-in': 'fade-in 0.3s ease',
        'fade-in-05': 'fade-in 0.5s ease',
        'fade-in-1': 'fade-in 1s ease',
        'fade-out': 'fade-out 0.3s ease',
        'spin-avg': 'spin 1s linear infinite',
        'spin-fast': 'spin 0.5s linear infinite',
        'toggle-left': 'toggle-left 0.2s ease',
        'toggle-right': 'toggle-right 0.2s ease',
      },
      screens: {
        mobileXS: '320px',
        mobile: '600px',
        tablet: '900px',
        tabletXL: '1024px',
        laptop: '1400px',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
  variants: {
    scrollbar: ['rounded'],
  },
};
