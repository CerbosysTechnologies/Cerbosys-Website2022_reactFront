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
          <title>
            Whitepapers- ecommerce & retail, mobile app, digital marketing, ERP
            | Cerbosys Technologies
          </title>
          <meta
            name="keywords"
            content="cerbosys, cerbosys whitepaper, whitepapers, digital marketing whitepaper, ecommerce whitepaper, retail whitepaper, ERP whitepaper, mobile app development whitepaper, whitepaper pdf"
          />
          <meta
            name="description"
            content="Download the whitepapers covering all the on-demand services including ecommerce & retail, mobile app development, digital marketing, ERP."
          />
        </Helmet>
        <div className="mx-auto w-full md:h-[30rem]  h-96 py-12 px-4 bg-CaseStudyHeader bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[35rem] h-96 mx-auto">
            <h1 className="text-white font-heading py-2 md:text-3xl text-xl mb-10 ">
              Whitepapers
            </h1>

            <p className="text-white font-heading py-2 md:text-xl text-xs md:mb-28 mb-24 md:w-[480px] text-justify"></p>
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
