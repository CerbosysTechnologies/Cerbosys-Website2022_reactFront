import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../../../Navbar/Navbar';
import Footer from '../../../../../Common/Component/Footer';

import AndroidBody from './AndroidBody';
import AndroidForm from './AndroidForm';
import { Helmet } from 'react-helmet';

const Android = () => {
  return (
    <div>
      <>
        <Helmet>
          <title>Android | Cerbosys Technologies</title>
          <meta
            name="keywords"
            content="Hire android developer, hire dedicated android developer, hire android programmer, hire developers, hire dedicated developers in india"
          />
          <meta name="description" content="" />
        </Helmet>
        {/* <Navbar /> */}
        <div className="mx-auto w-full md:h-[35rem]  h-96 py-12 px-4 bg-AndroidHeader bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[35rem] h-96 mx-auto">
            <h1 className="text-white font-heading py-2 md:text-3xl text-xl mb-10 ">
              Hire Android Developer
            </h1>

            <p className="text-white font-subheading py-2 md:text-xl text-xs md:mb-28 mb-24 md:w-[480px] text-justify">
              Hire an Android Developer from Us to amplify your business online,
              by creating the best Android application as per your requirements.
            </p>

            <Link to="/contact-us">
              <button
                className="bg-Primary rounded-full font-heading md:px-5 md:py-2 md:text-lg
              text-white uppercase px-3 py-1.5 text-xs mb-2"
              >
                Contact Us
              </button>
            </Link>
          </div>
          {/* Content Section Ends*/}
        </div>
      </>
      <AndroidBody />
      <AndroidForm />
      {/* <Footer /> */}
    </div>
  );
};

export default Android;
