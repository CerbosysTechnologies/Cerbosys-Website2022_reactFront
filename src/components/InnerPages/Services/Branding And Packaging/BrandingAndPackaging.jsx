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
          <title>Creative Brand Packaging Design Company - Cerbosys </title>
          <meta
            name="keywords"
            content="product packaging design maker, best product packaging company, best branding services, branding logo design services, brand designing services in india"
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
            <h1 className="text-white uppercase font-heading pt-2 md:text-5xl text-2xl md:mb-4 min-w-fit">
              Branding & Packaging
            </h1>

            <p className="text-center text-white font-subheading  md:text-lg text-xs md:w-[980px] max-w-fit">
              Branding is all about creating a unique identity for your product
              to make your product stand out from other products. Packaging is
              about how you present your product to the world.
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
