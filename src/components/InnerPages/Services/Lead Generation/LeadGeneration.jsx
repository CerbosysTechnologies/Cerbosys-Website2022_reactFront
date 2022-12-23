import React from "react";
import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../Common/Component/Footer";
import { Link } from "react-router-dom";
import LeadGenerationDesc from "./LeadGenerationDesc";
import LeadGenerationProcess from "./LeadGenerationProcess";
import LeadGenerationForm from "./LeadGenerationForm";
import Investment from '../UserInvestment/Investment';
const LeadGeneration = () => {
  return (
    <div>
      <>
        {/* <Navbar /> */}
        <div className="mx-auto w-full md:h-[30rem] h-96 py-12 px-4 bg-WebDevelopment bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[30rem] h-96 mx-auto">
            <h1 className="text-white font-heading py-2 md:text-3xl text-xl mb-2">
              Lead Generation
            </h1>

            <p className="text-white font-heading py-2 md:text-xs text-xs mb-8 md:w-[480px] text-justify">
              Lead generation is the process of creating and nurturing leads for
              your business. It involves creating interest in your product or
              service, and then converting that interest into a sales
              opportunity.
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
        <LeadGenerationDesc />
        <LeadGenerationProcess />
        <LeadGenerationForm />
        {/* <Footer /> */}
      </>
    </div>
  );
};

export default LeadGeneration;
