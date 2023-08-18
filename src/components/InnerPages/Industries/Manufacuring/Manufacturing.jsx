import React from 'react';
// import Navbar from '../../../Navbar/Navbar';
// import Footer from '../../../Common/Component/Footer';
import ManufacturingBody from './ManufacturingBody';
import ManufacturingForm from './ManufacturingForm';
import { Helmet } from 'react-helmet';

const Manufacturing = () => {
  return (
    <div>
      <>
        <Helmet>
          <title>
            Digital marketing services for manufacturing industry - cerbosys{' '}
          </title>
          <meta
            name="keywords"
            content="manufacturing, manufacturing industry, IT Solutions for manufacturing industry, manufacturing industry IT solutions, manufacturing engineering, manufacturing industries"
          />
          <meta
            name="description"
            content="Manufacturing industry IT solutions ready with our process & discrete manufacturing software services. Manufacturers can develop their social media profiles and deliver the latest company news or new product information to their clients"
          />
          {/* <link rel="canonical" href="https://cerbosys.com/manufacturing" /> */}

        </Helmet>
        {/* <Navbar /> */}
        <div className="selection:bg-Green selection:text-white mx-auto w-full md:h-[36rem] bg-ManufacturingHeader h-96 py-12 px-4 bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[30rem] h-96 mx-auto">
            <h1 className="text-white font-heading pt-2 md:text-5xl text-2xl md:mb-5  min-w-fit">
              MANUFACTURING
            </h1>

            <p className="text-center text-Skyblue font-subheading  md:text-lg text-xs md:w-[980px] max-w-fit">
              Our Digital Accelerators allow Companies to gain the capabilities
              they need to face the future with confidence, particularly within
              Process and Discrete Manufacturing.
            </p>
            {/* <p className="mt-4 text-center text-Skyblue font-subheading  md:text-lg text-xs md:w-[980px] max-w-fit">
              We help you find the IT solutions you need to make your
              institution run smoothly and<br></br> efficiently, so you can
              focus on what matters most: educating students and helping them
              succeed.
            </p> */}
          </div>
          {/* Content Section Ends */}
        </div>
      </>
      <div className="selection:bg-Green selection:text-white">
        <ManufacturingBody />
        <ManufacturingForm />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Manufacturing;
