import React from "react";
import Navbar from "../../../../../Navbar/Navbar";
import Footer from "../../../../../Common/Component/Footer";
import DotNetBody from "./DotNetBody";
import DotNetForm from "./DotNetForm";
import { Link } from "react-router-dom";

const DotNet = () => {
  return (
    <div>
      <>
        <Navbar />
        <div className="mx-auto w-full md:h-[35rem]  h-96 py-12 px-4 bg-AngularHeader bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[35rem] h-96 mx-auto">
            <p className="text-white font-heading py-2 md:text-3xl text-xl mb-10 ">
              Hire .Net Developer
            </p>

            <p className="text-white font-heading py-2 md:text-xl text-xs md:mb-28 mb-24 md:w-[480px] text-justify">
              Hire a .Net Developer from Us for your business to excel in
              innovative marketing services, by creating the latest applications
              for websites.
            </p>

            <Link to="/ContactUs">
              <button
                className="bg-Primary rounded-full font-heading md:px-5 md:py-2 md:text-lg
              text-white uppercase px-3 py-1.5 text-xs mb-2"
              >
                Contact Us
              </button>
            </Link>
          </div>
          {/* Content Section Ends*/}
        </div>
      </>
      <DotNetBody />
      <DotNetForm />
      <Footer />
    </div>
  );
};

export default DotNet;
