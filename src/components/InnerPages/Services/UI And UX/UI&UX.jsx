import React from 'react';
import Navbar from '../../../Navbar/Navbar';
import Footer from '../../../Common/Component/Footer';
import { Link } from 'react-router-dom';
import UIAndUXDesc from './UI&UXDesc';
import UIAndUXDiagram from './UI&UXDiagram';
import UIAndUXProcess from './UI&UXProcess';
import UIAndUXForm from './UI&UXForm';
import Investment from '../UserInvestment/Investment';
import { Helmet } from 'react-helmet';

const UIAndUXDevelopment = () => {
  return (
    <div>
      <>
        <Helmet>
          <title>ui ux design & development - Cerbosys Technologies</title>
          <meta
            name="keywords"
            content="ui ux design & development services, ui ux development company in india, best ux development company, ui ux development services in indore, android mobile ui ux development company"
          />
          <meta
            name="description"
            content="We are an excellent UX/UI development company catering to our client's needs. Our team is comprised of UX/UI pros with in-depth knowledge of web and mobile development"
          />
        </Helmet>
        {/* <Navbar /> */}
        <div className="mx-auto w-full md:h-[30rem]  h-96 py-12 px-4 bg-WebDevelopment bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[30rem] h-96 mx-auto">
            <h1 className="font-heading md:text-2xl text-xl mb-5 text-white">
              UI/UX Development
            </h1>

            <p className="md:w-[480px] text-justify text-white  py-2 mb-8 font-content md:text-lg text-sm ">
              UI/UX development is all about creating beautiful and
              user-friendly interfaces for websites and apps. A strong
              understanding of both design and coding is needed for this.
            </p>

            <Link to="/contact-us">
              <button
                className="bg-Primary rounded-full font-heading md:px-5 md:py-2 md:text-lg
              text-white uppercase px-3 py-1.5 text-xs mb-6 mt-3"
              >
                Contact Us
              </button>
            </Link>
          </div>
          {/* Content Section Ends*/}
        </div>
        <Investment />
        <UIAndUXDesc />
        <UIAndUXDiagram />
        <UIAndUXProcess />
        <UIAndUXForm />
        {/* <Footer /> */}
      </>
    </div>
  );
};

export default UIAndUXDevelopment;
