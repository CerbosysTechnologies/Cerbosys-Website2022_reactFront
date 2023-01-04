import React from 'react';
import Navbar from '../../../../../Navbar/Navbar';
import Footer from '../../../../../Common/Component/Footer';
import DotNetBody from './DotNetBody';
import DotNetForm from './DotNetForm';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const DotNet = () => {
  return (
    <div>
      <>
        <Helmet>
          <title>DotNet | Cerbosys Technologies</title>
          <meta
            name="keywords"
            content="hire .net developers,  hire asp .net developer, hire dot net programmers, dot net development company, .net development company, dot net development, .net application development, .net application development company, hire .net development team, .net Development team, .net Programmers, .net Programming Team, .net Team, hire .net developers"
          />
          <meta name="description" content="" />
        </Helmet>
        {/* <Navbar /> */}
        <div className="mx-auto w-full md:h-[35rem]  h-96 py-12 px-4 bg-AngularHeader bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[35rem] h-96 mx-auto">
            <h1 className="text-white font-heading py-2 md:text-3xl text-xl mb-10 ">
              Hire .Net Developer
            </h1>

            <p className="text-white font-heading py-2 md:text-xl text-xs md:mb-28 mb-24 md:w-[480px] text-justify">
              Hire a .Net Developer from Us for your business to excel in
              innovative marketing services, by creating the latest applications
              for websites.
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
      <DotNetBody />
      <DotNetForm />
      {/* <Footer /> */}
    </div>
  );
};

export default DotNet;
