import React from 'react';
import Navbar from '../../../Navbar/Navbar';
import Footer from '../../../Common/Component/Footer';
import BrandingAndPackagingDesc from './BrandingAndPackagingDesc';
import BrandAndPackagingProcess from './BrandingAndPackagingProcess';
import BrandingAndPackagingForm from './BrandingAndPackagingForm';
import { Link } from 'react-router-dom';
import Investment from '../UserInvestment/Investment';
import { Helmet } from 'react-helmet';
const BrandingAndPackaging = () => {
  return (
    <div>
      <>
        <Helmet>
          <title>Branding Packaging - Cerbosys Technologies</title>
          <meta
            name="keywords"
            content="mobile app development, mobile app development services, website designing company in india, web development services, best app development company in uk, web app development company in uk, ecommerce website development, best digital marketing services company in india, digital marketing services for startups, b2b lead generation and appointment setting services, android mobile ui ux development company, staff augmentation"
          />
          <meta
            name="description"
            content="We provide brand packaging solutions with important services from brand packaging, logo designing, and brand designing"
          />
        </Helmet>

        {/* <Navbar /> */}
        <div className="mx-auto w-full md:h-[30rem]  h-96 py-12 px-4 bg-WebDevelopment bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[30rem] h-96 mx-auto">
            <h1 className="text-white font-heading py-2 md:text-3xl text-xl mb-2">
              Branding & Packaging
            </h1>

            <p className="text-white font-heading py-2 md:text-xs text-xs mb-8 md:w-[480px] text-justify">
              Branding is all about creating a unique identity for your product
              to make your product stand out from other products. Packaging is
              about how you present your product to the world.
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
        <BrandingAndPackagingDesc />
        <BrandAndPackagingProcess />
        <BrandingAndPackagingForm />
        {/* <Footer /> */}
      </>
    </div>
  );
};

export default BrandingAndPackaging;
