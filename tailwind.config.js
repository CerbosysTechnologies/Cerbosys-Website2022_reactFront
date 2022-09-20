/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        //'Primary':'#151F53',
        'Primary':'#0F52BA', // Sapphire Blue
        //'Primary':'#003399', // Rotary Blue
        //'Primary':'#4169E1', // King Blue
        //'Primary':'#0050B5', // Cobolt Blue
        'Secondary': '#404CDC',
        'Green': '#3C9612',

      },
    },

    backgroundImage: {
      Hero: "url('assets/header.png')",
      Service: "url('assets/services/service_ page_background.png')",
      WebDevelopment: "url('assets/innerpage/webdevelopment/web_developmentpage_background.jpg')",
      FooterBackground: "url('assets/footer/footer.svg')",
      FormBackground: "url('assets/innerpage/letstalk.png')",
      TeamBackground: "url('assets/innerpage/team/team_image_background.png')",
      OverviewBackground: "url('assets/innerpage/overview/overview_image.svg')",
      OverviewBackgroundBody: "url('assets/innerpage/overview/overviewbackground.svg')",
      CurrentOpeningBackground: "url('assets/innerpage/currentopening/banner_image.png')",
      PerksBackground: "url('assets/innerpage/currentopening/perks_benefits.png')",
      DiversityBackground: "url('assets/innerpage/diversity/banner_image.png')",
      ContactUsBackgroud: "url('assets/contactus/banner_image.png')",
      ContactLeaf:"url('assets/contactus/backgroundleaf.png')",
      TrainingAndDevelopment:"url('assets/innerpage/traininganddevelopment/trainingbackground-min.png')",
      TrainingAndDevelopmentBody:"url('assets/innerpage/traininganddevelopment/trainingbody.svg')",
      LifeCerbosysBody:"url('assets/innerpage/lifecerbosys/dotsbackground.svg')",
      LifeCerbosys:"url('assets/innerpage/lifecerbosys/life@cerbosysheader-min.png')",
      TeamCerbosys:"url('assets/innerpage/team/meetourteamheader-min.png')",
      TestimonialHeader:"url('assets/innerpage/testimonial/testimoniyalheader.svg')",
      AgricultureHeader:"url('assets/innerpage/agriculture/agricultureheader.svg')",
      BankingHeader:"url('assets/innerpage/banking/bankingheader.svg')",
      EcommerceHeader:"url('assets/innerpage/ecommerce/ecommerceheader.svg')",
      HealthCareHeader:"url('assets/innerpage/healthcare/healthheader.svg')",
      MiningHeader:"url('assets/innerpage/mining/miningheader.svg')",
      TransportHeader:"url('assets/innerpage/transport/transportheader.svg')",
      RealEstateHeader:"url('assets/innerpage/realestate/realestateheader.svg')",
      EducationHeader:"url('assets/innerpage/education/educationheader.svg')",      
      ManufacturingHeader:"url('assets/innerpage/manufacturing/manufacturingheader.svg')",
      DotNetHeader:"url('assets/innerpage/net/node.jsheader.png')"
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
