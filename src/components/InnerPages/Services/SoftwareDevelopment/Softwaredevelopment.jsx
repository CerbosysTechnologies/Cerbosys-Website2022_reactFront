import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Investment from '../UserInvestment/Investment';
import ServiceDescSD from './ServiceDescSD';
import ServiceProSD from './ServiceProSD';
import SoftwareDForm from './SoftwareDForm';

function Softwaredevelopment() {
  return (
    <div>
      <Helmet>
        <title>Software development - Cerbosys Technologies</title>
        <meta
          name="keywords"
          content="ui ux design & development services, ui ux development company in india, best ux development company, ui ux development services in indore, android mobile ui ux development company"
        />
        <meta
          name="description"
          content="We are an excellent UX/UI development company catering to our client's needs. Our team is comprised of UX/UI pros with in-depth knowledge of web and mobile development"
        />
      </Helmet>
      <div className="mx-auto w-full md:h-[30rem]  h-96 py-12 px-4 bg-WebDevelopment bg-cover md:bg-top bg-center">
        {/* Content Section */}
        <div className="flex flex-col justify-center text-center items-center md:h-[30rem] h-96 mx-auto">
          <h1 className="text-white font-heading py-2 md:text-3xl text-xl mb-2">
            Software Development
          </h1>
          <p className="text-white font-content py-2 md:text-xl text-xs mb-8 md:w-[700px] w-96">
            Software development is the process of creating computer software.
            It involves writing code, testing it, and making sure it meets the
            requirements of the client
          </p>

          <Link to="/contact-us">
            <button
              className="bg-Primary rounded-full font-heading md:px-5 md:py-2 md:text-lg
              text-white uppercase px-3 py-1.5 text-xs mb-6"
            >
              Contact Us
            </button>
          </Link>
        </div>
        {/* Content Section Ends*/}
      </div>

      <Investment />
      <ServiceDescSD />
      <ServiceProSD />
      <SoftwareDForm />
    </div>
  );
}

export default Softwaredevelopment;
