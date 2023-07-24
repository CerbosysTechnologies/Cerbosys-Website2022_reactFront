import React from 'react';

import { Link } from 'react-router-dom';
import LeadGenerationDesc from './LeadGenerationDesc';
import LeadGenerationProcess from './LeadGenerationProcess';
import LeadGenerationForm from './LeadGenerationForm';
import Investment from '../UserInvestment/Investment';
import { Helmet } from 'react-helmet';
const LeadGeneration = () => {
  return (
    <div>
      <>
        <Helmet>
          <title>Online Lead Generation Company in Indore - Cerbosys</title>
          <meta
            name="keywords"
            content="best b2b lead generation services, business lead generation services, b2b lead generation & appointment setting services, cold calling lead generation services, email lead generation services, lead generation service providers, linkedin lead generation service, local lead generation services"
          />
          <meta
            name="description"
            content="We offer a wide array of key cold-calling lead-generation services that are scalable and customizable. Generate more qualified leads with our cold-calling services"
          />
          <link rel="canonical" href="https://cerbosys.com/lead-generation" />

        </Helmet>
  
        <div className="selection:bg-Green selection:text-white mx-auto w-full md:h-[30rem] h-96 py-12 px-4 bg-WebDevelopment bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[30rem] h-96 mx-auto">
            <h1 className="text-white uppercase font-heading pt-2 md:text-5xl text-2xl md:mb-4 min-w-fit">
              Lead Generation
            </h1>

            <p className="text-center text-white font-subheading  md:text-lg text-xs md:w-[980px] max-w-fit">
              Lead generation is the process of creating and nurturing leads for
              your business. It involves creating interest in your product or
              service, and then converting that interest into a sales
              opportunity.
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
          <LeadGenerationDesc />
          <LeadGenerationProcess />
          <LeadGenerationForm />
        </div>
  
      </>
    </div>
  );
};

export default LeadGeneration;
