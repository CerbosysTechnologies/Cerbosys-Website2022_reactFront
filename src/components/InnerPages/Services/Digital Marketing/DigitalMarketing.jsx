import React from "react";
import Navbar from "../../../Navbar/Navbar";
import DigitalDesc from "../Digital Marketing/DigitalDesc";
import DigitalDiagram from "../Digital Marketing/DigitalDiagram";
import DigitalProcess from "../Digital Marketing/DigitalProcess";
import Footer from "../../../Common/Component/Footer";
import AllServiceForm from "../../../Common/Component/AllServicesForm";
import DigitalForm from "./DigitalForm";
import { Link } from "react-router-dom";

const DigitalMarketing = () => {
  return (
    <div>
      <>
        <Navbar />
        <div className="mx-auto w-full md:h-[30rem]  h-96 py-12 px-4 bg-WebDevelopment bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[30rem] h-96 mx-auto">
            <p className="text-white font-heading py-2 md:text-3xl text-xl mb-2">
              Digital Marketing
            </p>

            <p className="text-white font-heading py-2 md:text-xs text-xs mb-8 md:w-[480px] text-justify">
              Connecting with potential customers online comes under the digital
              marketing process. This can be done through a variety of means,
              such as email, social media, and web-based advertising.
            </p>

            <Link to="/ContactUs">
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
        <DigitalDesc />
        <DigitalDiagram />
        <DigitalProcess />
        <DigitalForm />
        <Footer />
      </>
    </div>
  );
};

export default DigitalMarketing;
