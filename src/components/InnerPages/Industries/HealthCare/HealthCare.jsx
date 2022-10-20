import React from "react";
import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../Common/Component/Footer";
import HealthCareBody from "./HealthCareBody";
import HealthCareForm from "./HealthCareForm";

const HealthCare = () => {
  return (
    <div>
      <>
        {/* <Navbar /> */}
        <div className="mx-auto w-full md:h-[36rem] bg-HealthCareHeader h-96 py-12 px-4 bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[30rem] h-96 mx-auto">
            <p className="text-white font-heading py-2 md:text-5xl text-2xl md:mb-48 mb-28">
              HealthCare And Life Science
            </p>

            <p className="text-white font-heading py-2 md:text-lg text-xs md:w-[980px] text-justify">
              Healthcare and life science services provided by your company can
              transform your business. From tracking digital patient records and
              security management to patient portals, data analysis, etc.
            </p>
          </div>
          {/* Content Section Ends */}
        </div>
      </>
      <HealthCareBody />
      <HealthCareForm />
      {/* <Footer /> */}
    </div>
  );
};

export default HealthCare;
