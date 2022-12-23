import React from "react";
import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../Common/Component/Footer";
import { TransportBody } from "./TransportBody";
import TransportForm from "./TransportForm";

const Transport = () => {
  return (
    <div>
      <>
        {/* <Navbar /> */}
        <div className="mx-auto w-full md:h-[36rem] bg-TransportHeader h-96 py-12 px-4 bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[30rem] h-96 mx-auto">
            <h1 className="text-white font-heading py-2 md:text-5xl text-2xl md:mb-48 mb-28">
              Transport and Logistics
            </h1>

            <p className="text-white font-heading py-2 md:text-lg text-xs md:w-[980px] text-justify">
              Transport and logistics management is one of the fastest growing
              business fields in today's world. Our company helps you improve
              sales, reduce costs and raise the efficiency of your transport
              management system.
            </p>
          </div>
          {/* Content Section Ends */}
        </div>
      </>
      <TransportBody />
      <TransportForm />
      {/* <Footer /> */}
    </div>
  );
};

export default Transport;
