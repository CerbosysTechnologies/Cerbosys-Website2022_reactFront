import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../Navbar/Navbar";
import MobileDesc from "./MobileDesc";
import MobileDiagram from "./MobileDiagram";
import MobileProcess from "./MobileProcess";
import MobileForm from "./MobileForm";
import Footer from "../../../Common/Component/Footer";

const MobileDevelopment = () => {
  return (
    <div>
      <>
        {/* <Navbar /> */}
        <div className="mx-auto w-full md:h-[30rem]  h-96 py-12 px-4 bg-WebDevelopment bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[30rem] h-96 mx-auto">
            <h1 className="text-white font-heading py-2 md:text-3xl text-xl mb-2">
              Mobile App Development
            </h1>

            <p className="text-white font-heading py-2 md:text-xs text-xs mb-8 md:w-[480px]">
              Our app development platform builds mobile applications that
              easily solve problems and deliver a fast value to your users and
              is capable of effortlessly increasing the number of users.
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
        <MobileDesc />
        <MobileDiagram />
        <MobileProcess />
        <MobileForm />
        {/* <Footer /> */}
      </>
    </div>
  );
};

export default MobileDevelopment;
