import React from "react";
import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../Common/Component/Footer";
import { Link } from "react-router-dom";
import UIAndUXDesc from "./UI&UXDesc";
import UIAndUXDiagram from "./UI&UXDiagram";
import UIAndUXProcess from "./UI&UXProcess";
import UIAndUXForm from "./UI&UXForm";

const UIAndUXDevelopment = () => {
  return (
    <div>
      <>
        {/* <Navbar /> */}
        <div className="mx-auto w-full md:h-[30rem]  h-96 py-12 px-4 bg-WebDevelopment bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[30rem] h-96 mx-auto">
            <p className="text-white font-heading py-2 md:text-3xl text-xl mb-2">
              UI/UX Development
            </p>

            <p className="text-white font-heading py-2 md:text-xs text-xs mb-8 md:w-[480px] text-justify">
              UI/UX development is all about creating beautiful and
              user-friendly interfaces for websites and apps. A strong
              understanding of both design and coding is needed for this.
            </p>

            <Link to="/contact-us">
              <button
                className="bg-Primary rounded-full font-heading md:px-5 md:py-2 md:text-lg
              text-white uppercase px-3 py-1.5 text-xs mb-6">
                Contact Us
              </button>
            </Link>
          </div>
          {/* Content Section Ends*/}
        </div>
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
