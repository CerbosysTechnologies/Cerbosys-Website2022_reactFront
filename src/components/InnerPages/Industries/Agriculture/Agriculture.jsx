import React from "react";
import Navbar from "../../../Navbar/Navbar";
import AgricultureBody from "./AgricultureBody";
import AgricultureForm from "./AgricultureForm";
import Footer from '../../../Common/Component/Footer';

const Agriculture = () => {
  return (
    <div>
      <>
        {/* <Navbar /> */}
        <div className="mx-auto w-full md:h-[36rem] bg-AgricultureHeader h-96 py-12 px-4 bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[30rem] h-96 mx-auto">
            <p className="text-white font-heading py-2 md:text-5xl text-2xl md:mb-48 mb-28">
              Agriculture
            </p>

            <p className="text-white font-heading py-2 md:text-lg text-xs md:w-[980px] text-justify">
              We provide the technology backbone for the complete agricultural
              process by setting up the website, managing apps, and providing IT
              support and supply chain management systems online.
            </p>
          </div>
          {/* Content Section Ends */}
        </div>
      </>
      <AgricultureBody />
      <AgricultureForm />
      {/* <Footer /> */}
    </div>
  );
};

export default Agriculture;
