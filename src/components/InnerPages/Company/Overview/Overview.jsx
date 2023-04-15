import React from 'react';
import { Helmet } from 'react-helmet';

import OverviewBody from './OverviewBody';

const Overview = () => {
  return (
    <div>
      <>
        <Helmet>
          <title>Company overview page - Cerbosys Technologies</title>
          <meta
            name="keywords"
            content="digital marketing team, web development, software development, your startup conclave, new headquarter, healthy workspace, staff augmentation"
          />
          <meta
            name="description"
            content="Looking for the Best IT Solutions Company? We offer a wide range of services, including Ecommerce development, Web &Mobile App Development, Digital Marketing, etc."
          />
        </Helmet>
     
        <div className="mx-auto w-full md:h-[40rem]  h-96 py-12 px-4 bg-OverviewBackground bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[30rem] h-96 mx-auto">
            <h1 className="text-white font-heading py-2 md:text-5xl text-2xl ">
              Overview
            </h1>

            <p className="text-white font-heading py-2 md:text-3xl text-2xl md:-mb-64 md:mt-32 mt-24">
              “Walk with us towards a beautiful destination…”
            </p>
          
          </div>
          {/* Content Section Ends */}
        </div>
      </>
      <OverviewBody />
   
    </div>
  );
};

export default Overview;
