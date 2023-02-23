import React from 'react';
import Navbar from '../../../Navbar/Navbar';
import DigitalDesc from '../Digital Marketing/DigitalDesc';
import DigitalDiagram from '../Digital Marketing/DigitalDiagram';
import DigitalProcess from '../Digital Marketing/DigitalProcess';
import Footer from '../../../Common/Component/Footer';
import AllServiceForm from '../../../Common/Component/AllServicesForm';
import DigitalForm from './DigitalForm';
import { Link } from 'react-router-dom';
import Investment from '../UserInvestment/Investment';
import { Helmet } from 'react-helmet';

const DigitalMarketing = () => {
  return (
    <div>
      <>
        <Helmet>
          <title>Top Digital Marketing Services -Cerbosys Technologies</title>
          <meta
            name="keywords"
            content="best digital marketing services company in india, complete digital marketing services, digital marketing audit service, digital marketing automation services, digital marketing services for startups"
          />
          <meta
            name="description"
            content="Looking for making a strong online presence? Our digital marketing consultants will help to grow SMM, SEO, paid advertisment, content marketing, email marketing & whatsapp automation for business"
          />
        </Helmet>
        {/* <Navbar /> */}
        <div className="selection:bg-Green selection:text-white mx-auto w-full md:h-[30rem]  h-96 py-12 px-4 bg-WebDevelopment bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[30rem] h-96 mx-auto">
            <h1 className="text-white uppercase font-heading pt-2 md:text-5xl text-2xl md:mb-4 min-w-fit">
              Digital Marketing
            </h1>

            <p className="text-center text-white font-subheading  md:text-lg text-xs md:w-[980px] max-w-fit">
              Connecting with potential customers online comes under the digital
              marketing process. This can be done through a variety of means,
              such as email, social media, and web-based advertising.
            </p>

            <Link to="/contact-us">
              <button
                className="bg-Primary mt-4 rounded-full font-heading md:px-5 md:py-2 md:text-lg
              text-white uppercase px-3 py-1.5 text-xs mb-2"
              >
                Contact Us
              </button>
            </Link>
          </div>
          {/* Content Section Ends*/}
        </div>
        <div className="selection:bg-Green selection:text-white">
          <Investment />
          <DigitalDesc />
          <DigitalDiagram />
          <DigitalProcess />
          <DigitalForm />
        </div>
        {/* <Footer /> */}
      </>
    </div>
  );
};

export default DigitalMarketing;
