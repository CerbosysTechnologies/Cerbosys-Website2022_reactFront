import React from 'react';
import AboutUSBody from './AboutUSBody';
import { Helmet } from 'react-helmet';
function AboutUS() {
  return (
    <>
      <Helmet>
        <title >About us</title>
        <meta name="keywords" content="About use" data-react-helmet="true"  />
        <meta name="description" content="About us" />
        {/* <link rel="canonical" href="https://cerbosys.com/about-us" /> */}
      </Helmet>
      
      <div className="selection:bg-Green selection:text-white mx-auto w-full md:h-[30rem]  h-96 py-12 px-4 bg-Aboutus bg-cover md:bg-top bg-center">
        {/* Content Section */}
        <div className="flex flex-col justify-center text-center items-center md:h-[35rem] h-96 mx-auto">
          <h1 className="text-white font-heading py-2 md:text-3xl text-xl mb-10 ">
            About us
          </h1>
          <p className="text-white font-heading py-2 md:text-xl text-xs md:mb-28 mb-24 md:w-[480px] text-justify">
            <p className="font-content  md:text-sm text-xs font-extrabold  ">
              CERBOSYS is a leading provider of professional business services
              in India, providing bespoke and creative solutions for online
              businesses.
              <br></br>
              <br></br>
              Our offerings range from mobile app development to web design,
              graphic designing, UI/UX development, branding and packaging, lead
              generation, digital marketing, staff augmentation, and much more -
              catering to the needs of budding startups and entrepreneurs.
            </p>
          </p>
        </div>
        {/* Content Section Ends*/}
      </div>
      <div className="selection:bg-Green selection:text-white">
        <AboutUSBody />
      </div>
    </>
  );
}

export default AboutUS;
