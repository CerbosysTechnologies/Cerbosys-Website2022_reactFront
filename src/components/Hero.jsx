import React from "react";
import Navbar from "./Navbar/Navbar";

const Hero = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen bg-Hero bg-cover md:bg-top bg-center">

        {/* Free Quote */}
        <div className="fixed z-20 top-1/2 right-[-4.55rem] bg-[#404CDC] 
         p-1 px-2 justify-end items-end rotate-90 rounded-bl-xl rounded-br-xl">
          <span className="uppercase font-heading text-base">Get a free quote</span>
        </div>

        {/* Free Quote Ends */}

{/* Content Section */}
        <div className="flex flex-col justify-center text-center items-center h-3/4 mx-auto">
          <p className="text-white font-heading py-2 xl:text-lg text-sm mb-4">
            Experience A New Degree Of Innovation
          </p>
          <p className="text-white font-heading py-3 text-3xl">
            The Ultimate Mobile App & Web Solutions for Every Trade
          </p>

          <p className="text-white font-heading text-sm">
            Accelerate your business growth with our customer-led, insights
            driven and innovative solutions
          </p>

          <button
            className="bg-[#404CDC] rounded-full font-heading xl:px-5 xl:py-2 xl:text-lg text-white uppercase
          px-3 py-1.5 text-xs"
          >
            start your free consulation
          </button>

          <p className="font-heading text-white text-base">
            FREE, NO-OBLIGATION CONSULTATION OR ASSESSMENT WITH THE EXPERTS
          </p>
        </div>

        {/* Content Section Ends*/}
      </div>
    </>
  );
};

export default Hero;
