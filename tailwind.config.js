/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: { min: "0px", max: "640px" }, // mobile view 
      smmd: { min: "641px", max: "767px" }, // small tablets
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "768px", max: "1023px" }, // ipad view 
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "1024px", max: "1279px" }, // laptop
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1280px", max: "1440px" }, //  desktop
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      "2xl": { min: "1441px", max: "1536px" }, // large desktop
      // => @media (min-width: 1536px) { ... }
      "3xl": "1537  px", // 4k screen 
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