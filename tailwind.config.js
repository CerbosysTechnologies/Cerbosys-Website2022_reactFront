/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  // darekmood start
  // darkMode: 'class',
  // darekmood snd
  corePlugins: {
    userSelect: false,
  },
  theme: {
    extend: {
      colors: {
        //'Primary':'#151F53',
        Primary: "#0F52BA", // Sapphire Blue
        //'Primary':'#003399', // Rotary Blue
        //'Primary':'#4169E1', // King Blue
        //'Primary':'#0050B5', // Cobolt Blue
        Secondary: "#404CDC",
        Green: "#3C9612",
        Skyblue: "#00D8FF",
        Lightpink: "#FFD0D2",
        Lightgreen: "#31E2B2",
        Lightgrey: "#7A7A7A",
        Lightblue: "#6BE6EB",
        Darkblue: "#6c0ba9",
        Textblue: "#4d516d",
        Orange: "#fe6e00",
        Grey: "#9F9F9F",
        Lightsky: "#C9DEFF",
        Purpal: "#522165",
        Darkgray: " #F8F9FC",
        bluetext: "rgb(15, 82, 186)",
        // greyss:"##952b2b"
      },
      keyframes: {
        wave: {
          "0%": { transform: "translateX(-35px)" },
          "100%": { transform: "translateX(40px)" },
        },
        cyclie: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        pulse: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        // bouns: {
        //   '0%': { transform: 'rotateY(180deg)' },
        //   '100%': { transform: 'rotateY(360deg)' },
        // },

        btns: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        btnani: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        bttn: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },

        typing: {
          "100%": {
            left: "100%",
            margin: "0px -35px 0 35px",
          },
        },
        silde: {
          "100%": {
            top: "-360px",
          },
        },
      },

      animation: {
        "waving-hand": "wave 3s linear infinite",
        "cyclieing-hand": "cyclie 1s linear infinite",
        "pulse-hand": "pulse 3s linear infinite",
        "btns-hand": "btns 3s linear infinite",
        "btnani-hand": "moveInBottom 5s ease-out",
        "bttn-hand": "bttn 3s linear infinite",
        "typing-hand": "typing 1.5s steps(10) infinite",
        "silde-hand": "silde 9s steps(5) infinite",
      },
    },

    backgroundImage: {
      Hero: "url('assets/header.png')",
      banner: "url('assets/Gittex_banner2.svg')",
      bannermobai: "url('assets/Gittex_Mobile2.svg')",
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
      Bankingbgcenter: "url('assets/innerpage/banking/bankingbgcenter.png')",
      Bankingbg: "url('assets/innerpage/banking/bankingbg.png')",
      Portfoliobg: "url('assets/portfolio/portfoliobgimg.png')",
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
      NodejsHeader: "url('assets/innerpage/nodejs/nodejsbg.png')",
      ReactjsHeader: "url('assets/innerpage/reactjs/reactjsbg.png')",
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
      heading: ['"Heading"', "Montserrat-Bold"],
      subheading: ['"Subheading"', "Montserrat-Medium"],
      content: ['"Content"', "Montserrat-Regular"],
    },

    theme: {
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
        "2xxl": "1920px",
        // => @media (min-width: 1920px) { ... }
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
