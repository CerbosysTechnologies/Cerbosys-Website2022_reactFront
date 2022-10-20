import React from "react";
import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../Common/Component/Footer";
import ManufacturingBody from "./ManufacturingBody";
import ManufacturingForm from "./ManufacturingForm";

const Manufacturing = () => {
  return (
    <div>
      <>
        {/* <Navbar /> */}
        <div className="mx-auto w-full md:h-[36rem] bg-ManufacturingHeader h-96 py-12 px-4 bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[30rem] h-96 mx-auto">
            <p className="text-white font-heading py-2 md:text-5xl text-2xl md:mb-48 mb-28">
              Manufacturing
            </p>

            <p className="text-white font-heading py-2 md:text-lg text-xs md:w-[980px] text-justify">
              Whether you're a small business or a mid-sized enterprise, we have
              the best software solutions for your company. We create web-based
              applications to solve problems and help you improve your company's
              bottom line.
            </p>
          </div>
          {/* Content Section Ends */}
        </div>
      </>
      <ManufacturingBody />
      <ManufacturingForm />
      {/* <Footer /> */}
    </div>
  );
};

export default Manufacturing;
