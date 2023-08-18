import React from 'react';

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
          <title>UI/UX Design Company in Indore, India & UK | Cerbosys</title>
          <meta
            name="keywords"
            content="ui ux design & development services, ui ux development company in india, best ux development company, ui ux development services in indore, android mobile ui ux development company"
          />
          <meta
            name="description"
            content="We are an excellent UX/UI development company catering to our client's needs. Our team is comprised of UX/UI pros with in-depth knowledge of web and mobile development"
          />
          {/* <link
            rel="canonical"
            href="https://cerbosys.com/ui-ux-designing"
          /> */}
        </Helmet>
   
        <div className="selection:bg-Green selection:text-white mx-auto w-full md:h-[30rem]  h-96 py-12 px-4 bg-WebDevelopment bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[30rem] h-96 mx-auto">
            <h1 className="text-white uppercase font-heading pt-2 md:text-5xl text-2xl md:mb-4 min-w-fit">
              UI/UX Designing
            </h1>

            <p className="text-center text-white font-subheading  md:text-lg text-xs md:w-[980px] max-w-fit">
              UI/UX Designing is all about creating beautiful and user-friendly
              interfaces for websites and apps. A strong understanding of both
              design and coding is needed for this.
            </p>

            <Link to="/contact-us">
              <button
                className="bg-Primary rounded-full font-heading md:px-5 md:py-2 md:text-lg
              text-white uppercase px-3 py-1.5 text-xs mb-2 mt-3"
              >
                Contact Us
              </button>
            </Link>
          </div>
          {/* Content Section Ends*/}
        </div>
        <div className="selection:bg-Green selection:text-white">
          <Investment />
          <UIAndUXDesc />
          <UIAndUXDiagram />
          <UIAndUXProcess />
          <UIAndUXForm />
        </div>
        
      </>
    </div>
  );
};

export default UIAndUXDevelopment;
