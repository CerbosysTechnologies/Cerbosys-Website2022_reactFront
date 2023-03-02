import React from 'react';
import Navbar from '../../../../../Navbar/Navbar';
import Footer from '../../../../../Common/Component/Footer';
import { Link } from 'react-router-dom';
import IOSBody from './IOSBody';
import IOSForm from './IOSForm';
import { Helmet } from 'react-helmet';

const IOS = () => {
  return (
    <div>
      <>
        <Helmet>
          <title>Hire Dedicated ios Developer in Indore | Cerbosys</title>
          <meta
            name="keywords"
            content="hire iPhone app developers, hire iOS app developers, hire ios developer, iphone iOS developers India, ios development services, top ios development services in India, dedicated ios developers"
          />
          <meta
            name="description"
            content="Hire ios developers on flexible hiring models. Our highly-skilled ios Developers have the ability to build your business."
          />
        </Helmet>
        {/* <Navbar /> */}
        <div className="mx-auto w-full md:h-[35rem]  h-96 py-12 px-4 bg-ReactjsHeader bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[35rem] h-96 mx-auto">
            <h1 className="text-white uppercase font-heading pt-2 md:text-5xl text-2xl md:mb-4 mb-5 min-w-fit">
              iOS DEVELOPER
            </h1>

            <p className="text-center text-Skyblue font-subheading  md:text-lg text-xs md:w-[980px] max-w-fit">
              Enhance the prospects of success for your organization in the
              intense market by hiring iOS developers from Cerbosys.
            </p>

           
          </div>
          {/* Content Section Ends*/}
        </div>
      </>
      <IOSBody />
      <IOSForm />
      {/* <Footer /> */}
    </div>
  );
};

export default IOS;
