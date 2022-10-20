import React from "react";
import Footer from "../../../Common/Component/Footer";
import Navbar from "../../../Navbar/Navbar";
import { EcommerceBody } from "./EcommerceBody";
import EcommerceForm from "./EcommerceForm";

const Ecommerce = () => {
  return (
    <div>
      <>
        {/* <Navbar /> */}
        <div className="mx-auto w-full md:h-[36rem] bg-EcommerceHeader h-96 py-12 px-4 bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[30rem] h-96 mx-auto">
            <p className="text-white font-heading py-2 md:text-5xl text-2xl md:mb-48 mb-28">
              Ecommerce And Retail
            </p>

            <p className="text-white font-heading py-2 md:text-lg text-xs md:w-[980px] text-justify">
              Our e-commerce offerings can help you determine the best online
              marketplace to sell your products and reach more customers. Our
              result-oriented approach will help you achieve your business
              goals.
            </p>
          </div>
          {/* Content Section Ends */}
        </div>
      </>
      <EcommerceBody />
      <EcommerceForm />
      {/* <Footer /> */}
    </div>
  );
};

export default Ecommerce;
