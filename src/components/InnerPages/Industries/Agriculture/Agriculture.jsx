import React from 'react';
import AgricultureBody from './AgricultureBody';
import AgricultureForm from './AgricultureForm';

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
          <link rel="canonical" href="https://cerbosys.com/agriculture" />

        </Helmet>

       
        <div className="selection:bg-Green selection:text-white mx-auto w-full md:h-[36rem] bg-AgricultureHeader h-96 py-12 px-4 bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[30rem] h-96 mx-auto">
            <h1 className="text-white uppercase font-heading pt-2 md:text-5xl text-2xl md:mb-4 mb-5 min-w-fit">
              Agriculture
            </h1>

            <p className="text-center text-Skyblue font-subheading  md:text-lg text-xs md:w-[980px] max-w-fit">
              Join us in collaborating with agriculture technology with
              technological trends that will take modern agriculture forward
            </p>
          </div>
          {/* Content Section Ends */}
        </div>
      </>
      <AgricultureBody />
      <AgricultureForm />
  
    </div>
  );
};

export default Agriculture;
