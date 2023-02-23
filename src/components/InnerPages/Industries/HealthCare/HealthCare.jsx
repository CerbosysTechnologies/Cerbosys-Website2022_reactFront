import React from 'react';
import Navbar from '../../../Navbar/Navbar';
import Footer from '../../../Common/Component/Footer';
import HealthCareBody from './HealthCareBody';
import HealthCareForm from './HealthCareForm';
import { Helmet } from 'react-helmet';

const HealthCare = () => {
  return (
    <div>
      <>
        <Helmet>
          <title>
            Healthcare & life science customised solutions | Cerbosys
          </title>
          <meta
            name="keywords"
            content="healthcare and life sciences industry, healthcare and life sciences consulting,  changes in healthcare industry, technology trends in healthcare industry, healthcare information services industry
"
          />
          <meta
            name="description"
            content="We offer end-to-end wide spectrum of healthcare solutions including telemedicine applications, highly optimized & targeted marketing campaign."
          />
        </Helmet>
        {/* <Navbar /> */}
        <div className="selection:bg-Green selection:text-white mx-auto w-full md:h-[36rem] bg-HealthCareHeader h-96 py-12 px-4 bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[30rem] h-96 mx-auto">
            <h1 className="text-white uppercase font-heading pt-2 md:text-5xl text-2xl md:mb-4 min-w-fit">
              HealthCare And Life Science
            </h1>

            <p className="text-center text-Skyblue font-subheading  md:text-lg text-xs md:w-[980px] max-w-fit">
              Our company develops unique mobile applications as per the
              <br></br> trends & changes in the healthcare industry for clinics
              that<br></br> allow doctors to book appointments online.
            </p>
          </div>
          {/* Content Section Ends */}
        </div>
      </>
      <div className="selection:bg-Green selection:text-white">
        <div>
          <HealthCareBody />
        </div>
        <div>
          <HealthCareForm />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default HealthCare;
