import React from "react";
import Navbar from "../../../../../Navbar/Navbar";
import Footer from "../../../../../Common/Component/Footer";
import { Link } from "react-router-dom";
import FlutterBody from './FlutterBody';
import FlutterForm from './FlutterForm';

const Flutter = () => {
  return (
    <div>
      <>
        {/* <Navbar /> */}
        <div className="mx-auto w-full md:h-[35rem]  h-96 py-12 px-4 bg-FlutterHeader bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[35rem] h-96 mx-auto">
            <p className="text-white font-heading py-2 md:text-3xl text-xl mb-10 ">
              Hire Flutter Developer
            </p>

            <p className="text-white font-heading py-2 md:text-xl text-xs md:mb-28 mb-24 md:w-[480px] text-justify">
              Leverage the best toolkit for building mobile apps for iOS and
              Android for your online business, hire a Flutter developer from
              Cerbosys.
            </p>

            <Link to="/contact-us">
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

      <FlutterBody />
      <FlutterForm />
      {/* <Footer /> */}
    </div>
  );
};

export default Flutter;
