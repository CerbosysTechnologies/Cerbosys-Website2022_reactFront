/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
    backgroundImage: {
      Hero: "url('assets/header.png')",
    },
    fontFamily: {
      heading: ['"Heading"', "Montserrat-Bold"],
      subheading: ['"Subheading"', "Montserrat-Medium"],
      content: ['"Content"', "Montserrat-Regular"],
    },
    theme: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    }
  },
  plugins: [],
}
