import React from 'react';
import Navbar from '../../../Navbar/Navbar';
import Footer from '../../../Common/Component/Footer';
import MiningBody from './MiningBody';
import MiningForm from './MiningForm';
import { Helmet } from 'react-helmet';

const Mining = () => {
  return (
    <div>
      <>
        <Helmet>
          <title>Mining | Cerbosys</title>
          <meta
            name="keywords"
            content="mining web development,app development for mining industry, mining application development, "
          />
        </Helmet>
        {/* <Navbar /> */}
        <div className="mx-auto w-full md:h-[36rem] bg-MiningHeader h-96 py-12 px-4 bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[30rem] h-96 mx-auto">
            <h1 className="text-white font-heading py-2 md:text-5xl text-2xl md:mb-48 mb-28">
              Mining
            </h1>

            <p className="text-white font-heading py-2 md:text-lg text-xs md:w-[980px] text-justify">
              We believe that mining solutions should be more than just limited
              to designing processes, identifying quality control issues, and
              overseeing safety protocols. It needs to be coordinated with a
              whole new method of doing business. In short, it has to be
              Synchronized Digital Mining (SDM).
            </p>
          </div>
          {/* Content Section Ends */}
        </div>
      </>
      <MiningBody />
      <MiningForm />
      {/* <Footer /> */}
    </div>
  );
};

export default Mining;
