import React from 'react';
import Navbar from '../../../Navbar/Navbar';
import Footer from '../../../Common/Component/Footer';
import RealEstateBody from './RealEstateBody';
import RealEstateForm from './RealEstateForm';
import { Helmet } from 'react-helmet';

const RealEstate = () => {
  return (
    <div>
      <>
        <Helmet>
          <title>Real estate digital marketing company | cerbosys</title>
          <meta
            name="keywords"
            content="real estate app development, real estate web app development company, real estate web solutions, real estate website development, real estate website development company, real estate web design company,real estate website solutions, real estate web development services"
          />
          <meta
            name="description"
            content="Cerbosys technologies creates growth-oriented digital experiences for your real estate brand. Partner with the top-rated real estate digital marketing company today!"
          />
        </Helmet>
        {/* <Navbar /> */}
        <div className="mx-auto w-full md:h-[36rem] bg-RealEstateHeader h-96 py-12 px-4 bg-cover md:bg-top bg-center">
          {/* Content Section */}
          {/* flex flex-col justify-center text-center items-center md:h-[30rem] h-70 mx-auto */}
          <div className="flex flex-col justify-center text-center items-center md:h-[30rem] h-70 mx-auto">
            <h1 className="text-white uppercase font-heading pt-2  md:text-5xl text-2xl md:mb-10 min-w-fit8">
              REAL ESTATE & CONSTRUCTION
            </h1>
            {/* md:w-[980px] */}

            <p className="text-Skyblue font-heading py-2 md:text-lg text-xs  text-center">
              Our IT services are the gateway to a new, tech-driven era of real
              estate. Our creative strategies will help realtors get the most
              out of the latest industry trends.
            </p>
            <p className="text-Skyblue font-heading py-2 md:text-lg text-xs text-center">
                Unlock the possibilities of the future by exploring our
              offerings today!
            </p>
          </div>
          {/* Content Section Ends */}
        </div>
      </>
      <RealEstateBody />
      <RealEstateForm />
      {/* <Footer /> */}
    </div>
  );
};

export default RealEstate;
