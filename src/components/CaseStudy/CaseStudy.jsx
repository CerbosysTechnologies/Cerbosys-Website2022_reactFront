import React from 'react';
import CaseStudyBody from './CaseStudyBody';
import Navbar from '../Navbar/Navbar';
import Footer from '../Common/Component/Footer';
import { Helmet } from 'react-helmet';

const CaseStudy = () => {
  return (
    <div>
      <>
        {/* <Navbar /> */}
        <Helmet>
          <title>Case Studies That Brought Amazing Results in 2023</title>
          <meta
            name="keywords"
            content="cerbosys, cerbosys whitepaper, whitepapers, digital marketing whitepaper, ecommerce whitepaper, retail whitepaper, ERP whitepaper, mobile app development whitepaper, whitepaper pdf"
          />
          <meta
            name="description"
            content="Download Cerbosys whitepapers - covering ecommerce develpment, digital marketing, ERP, mobile app"
          />
        </Helmet>
        <div className="mx-auto w-full md:h-[30rem]  h-96 py-12 px-4 bg-CaseStudyHeader bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[35rem] h-96 mx-auto">
            <h1 className="text-white font-heading py-2 md:text-3xl text-xl mb-10 ">
              Whitepapers
            </h1>

            <p className="text-white font-heading py-2 md:text-xl text-xs md:mb-28 mb-24 md:w-[480px] text-justify">
              In this section, you'll get an overview of our working model along
              with ERP whitepaper, ecommerce whitepaper, digital marketing
              whitepaper, mobile app development whitepaper & whitepaper pdf as
              per your niche.
            </p>
          </div>
          {/* Content Section Ends*/}
        </div>
      </>
      <CaseStudyBody />
      {/* <Footer /> */}
    </div>
  );
};

export default CaseStudy;
