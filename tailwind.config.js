/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': { 'max': '766px' },
      // => @media (min-width: 640px) { ... }
      'mdsm': '641px',
      // => @media (min-width: 768px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lgmd': '1200px',
      // => @media (min-width: 1024px) { ... }
      'lg': '1201px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontSize: {
      'sm': '14px',
      'tiny': '12px',
      'base': '16px',
      'h6': '16px',
      'h5': '18px',
      'h4': '20px',
      'h3': '22px',
      'h2': '24px',
      'h1': '36px',
    },
    colors: {
      'marine-blue': 'hsl(213, 96%, 18%)',
      'purplish-blue': 'hsl(243, 100%, 62%)',
      'pastel-blue': 'hsl(228, 100%, 84%)',
      'light-blue': 'hsl(206, 94%, 87%)',
      'strawberry-red': 'hsl(354, 84%, 57%)',
      'light-gray': 'hsl(231, 11%, 63%)',
      'magnolia': 'hsl(217, 100%, 97%)',
      'alabaster': 'hsl(231, 100%, 99%)',
      'white': 'hsl(0, 0%, 100%)',
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '8px',
      'lg': '16px',
    },
    extend: {},
  },
  plugins: [],
}