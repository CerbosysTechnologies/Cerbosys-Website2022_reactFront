import React from 'react';
import Navbar from '../../../Navbar/Navbar';
import AgricultureBody from './AgricultureBody';
import AgricultureForm from './AgricultureForm';
import Footer from '../../../Common/Component/Footer';
import { Helmet } from 'react-helmet';

const Agriculture = () => {
  return (
    <div>
      <>
        <Helmet>
          <title>
            Top Agriculture Software and App Development Company in Indore
          </title>
          <meta
            name="keywords"
            content="agriculture website design company,farming web designer,agriculture web developer, agriculture software and app development services, agri mobile apps"
          />
          <meta
            name="description"
            content="Cerbosys provides agriculture software and app development services for start-ups to large business companies. Our domain specific services are customized and fine tuned according to the farmer’s perception.
"
          />
        </Helmet>

        {/* <Navbar /> */}
        <div className="mx-auto w-full md:h-[36rem] bg-AgricultureHeader h-96 py-12 px-4 bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[30rem] h-96 mx-auto">
            <h1 className="text-white font-heading py-2 md:text-5xl text-2xl md:mb-48 mb-28">
              Agriculture
            </h1>

            <p className="text-white font-heading py-2 md:text-lg text-xs md:w-[980px] text-justify">
              We provide the technology backbone for the complete agricultural
              process by setting up the website, managing apps, and providing IT
              support and supply chain management systems online.
            </p>
          </div>
          {/* Content Section Ends */}
        </div>
      </>
      <AgricultureBody />
      <AgricultureForm />
      {/* <Footer /> */}
    </div>
  );
};

export default Agriculture;
