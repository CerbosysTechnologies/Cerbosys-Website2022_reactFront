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
          <title>
            Custom Software Development Company for Mining | Cerbosys{' '}
          </title>
          <meta
            name="keywords"
            content="mining web development,app development for mining industry, mining application development, "
          />
          <meta
            name="description"
            content="Cerbosys tech provides an integrated & comprehensive suite of solutions for mining operations management has successfully to reconcile all key functions."
          />
        </Helmet>
        {/* <Navbar /> */}
        <div className="mx-auto w-full md:h-[36rem] bg-Miningbg h-96 py-12 px-4 bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[30rem] h-96 mx-auto">
            <h1 className="text-white uppercase font-heading pt-2 md:text-5xl text-2xl md:mb-4 min-w-fit">
              MINING
            </h1>

            <p className="text-center text-Skyblue font-subheading  md:text-lg text-xs md:w-[980px] max-w-fit">
              We specialize in designing and developing custom websites
              specifically tailored to<br></br> the needs of the mining
              industry.
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
