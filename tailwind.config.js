/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],

  corePlugins: {
    userSelect: false,
  },
  theme: {
    extend: {
      colors: {
        //'Primary':'#151F53',
        Primary: '#0F52BA', // Sapphire Blue
        //'Primary':'#003399', // Rotary Blue
        //'Primary':'#4169E1', // King Blue
        //'Primary':'#0050B5', // Cobolt Blue
        Secondary: '#404CDC',
        Green: '#3C9612',
        Skyblue: '#00D8FF',
        Lightpink: '#FFD0D2',
        Lightgreen: '#31E2B2',
        Lightgrey: '#7A7A7A',
        Lightblue: '#6BE6EB',
        Darkblue: '#6c0ba9',
        Textblue: '#4d516d',
        Orange: '#fe6e00',
        Grey: '#9F9F9F',
        Lightsky: '#C9DEFF',
      },
    },

    backgroundImage: {
      Hero: "url('assets/header.png')",
      // Service: "url('assets/services/service_ page_background.png')",
      WebDevelopment:
        "url('assets/innerpage/webdevelopment/web_developmentpage_background.png')",
      // FooterBackground: "url('assets/footer/footer.svg')",
      FooterBackground: "url('assets/footer/Newmapinfooter.svg')",
      FormBackground: "url('assets/innerpage/letstalk.png')",
      TeamBackground: "url('assets/innerpage/team/team_image_background.png')",
      OverviewBackground: "url('assets/innerpage/overview/overview_image.svg')",
      // OverviewBackgroundBody:
      //   "url('assets/innerpage/overview/overviewbackground.svg')",
      CurrentOpeningBackground:
        "url('assets/innerpage/currentopening/banner_image.png')",
      PerksBackground:
        "url('assets/innerpage/currentopening/perks_benefits.png')",
      DiversityBackground: "url('assets/innerpage/diversity/banner_image.png')",
      ContactUsBackgroud: "url('assets/contactus/banner_image.png')",
      ContactLeaf: "url('assets/contactus/backgroundleaf.png')",
      TrainingAndDevelopment:
        "url('assets/innerpage/traininganddevelopment/trainingbackground-min.png')",
      TrainingAndDevelopmentBody:
        "url('assets/innerpage/traininganddevelopment/trainingbody.svg')",
      LifeCerbosysBody:
        "url('assets/innerpage/lifecerbosys/dotsbackground.svg')",
      LifeCerbosys:
        "url('assets/innerpage/lifecerbosys/life@cerbosysheader-min.png')",
      TeamCerbosys: "url('assets/innerpage/team/meetourteamheader-min.png')",
      TestimonialHeader:
        "url('assets/innerpage/testimonial/testimoniyalheader.svg')",
      AgricultureHeader:
        "url('assets/innerpage/agriculture/agricultureheader.svg')",
      Agriculturebg: "url('assets/innerpage/agriculture/bgimgagriculture.png')",
      BankingHeader: "url('assets/innerpage/banking/bankingheader.svg')",
      EcommerceHeader: "url('assets/innerpage/ecommerce/ecommersbg.png')",
      EcommersBodybg: "url('assets/innerpage/ecommerce/ecommesgreenbg.png')",
      HealthCareHeader: "url('assets/innerpage/healthcare/bghealth.png')",
      HealthCarebody: "url('assets/innerpage/healthcare/healthbgbody.png')",
      MiningHeader: "url('assets/innerpage/mining/miningheader.svg')",
      Miningbg: "url('assets/innerpage/mining/miningbg.png')",
      TransportHeader: "url('assets/innerpage/transport/transportheader.svg')",
      Transportbg: "url('assets/innerpage/transport/transportbg.png')",
      RealEstateHeader:
        "url('assets/innerpage/realestate/realestateheader.svg')",
      EducationHeader: "url('assets/innerpage/education/educationbg.png')",
      EducationTabsbg: "url('assets/innerpage/education/tabbg.png')",
      Manufacturingcenter:
        "url('assets/innerpage/manufacturing/manufactur2bg.png')",
      ManufacturingHeader:
        "url('assets/innerpage/manufacturing/manufacturbg.png')",
      DotNetHeader: "url('assets/innerpage/dotnet/dotnetheader.png')",

      AndroidHeader: "url('assets/innerpage/android/androidheader.png')",
      AngularHeader: "url('assets/innerpage/angular/angularheader.png')",
      CodeIgniterHeader:
        "url('assets/innerpage/codeigniter/codeigniterheader.svg')",
      FlutterHeader: "url('assets/innerpage/flutter/flutterheader.png')",
      IOSHeader: "url('assets/innerpage/ios/iosheader1.png')",
      LaravelHeader: "url('assets/innerpage/laravel/laravelheader.png')",
      NodejsHeader: "url('assets/innerpage/nodejs/node.jsheader.svg')",
      ReactjsHeader: "url('assets/innerpage/reactjs/reactjsheader1.png')",
      CaseStudyHeader: "url('assets/innerpage/casestudy/casestudy.svg')",
      CaseStudyHeader2: "url('assets/innerpage/casestudy/Slice.svg')",
      PrivacyPolicy: "url('assets/Privecy/Privacy.png')",
      Termandcondition: "url('assets/Privecy/term.png')",
      Aboutus: "url('assets/Aboutus/About4.png')",
      Blogbg: "url('assets/Blogs/blogbg.png')",
      Solution: "url('assets/Solution/solution.png')",
      SchholBg: "url('assets/Solution/schoolBg.svg')",
      SchholBgone: "url('assets/Solution/SchoolOne.png')",
      Ecomers: "url('assets/Solution/Ecomers.png')",
    },
    fontFamily: {
      heading: ['"Heading"', 'Montserrat-Bold'],
      subheading: ['"Subheading"', 'Montserrat-Medium'],
      content: ['"Content"', 'Montserrat-Regular'],
    },

    theme: {
      screens: {
        sm: '640px',
        // => @media (min-width: 640px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '1024px',
        // => @media (min-width: 1024px) { ... }

        xl: '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
