import React from "react";
import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../Common/Component/Footer";
import RealEstateBody from "./RealEstateBody";
import RealEstateForm from "./RealEstateForm";


const RealEstate = () => {
  return (
    <div>
      <>
        <Navbar />
        <div className="mx-auto w-full md:h-[36rem] bg-RealEstateHeader h-96 py-12 px-4 bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[30rem] h-96 mx-auto">
            <p className="text-white font-heading py-2 md:text-5xl text-2xl md:mb-48 mb-28">
            Real Estate and Construction
            </p>

            <p className="text-white font-heading py-2 md:text-lg text-xs md:w-[980px] text-justify">
              We provide custom-made software solutions for the real estate and
              construction industries. Our scalable cloud-based, web-based, and
              mobile applications enable your company to capture leads, increase
              marketing awareness, track leads and convert cloud-based data into
              actionable insights.
            </p>
          </div>
          {/* Content Section Ends */}
        </div>
      </>
      <RealEstateBody />
      <RealEstateForm />
      <Footer />
    </div>
  );
};

export default RealEstate;