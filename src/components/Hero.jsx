import React from "react";
import Navbar from "./Navbar/Navbar";

const Hero = () => {
  return (
    <section className="h-screen bg-Hero bg-cover md:bg-top bg-center">
      <Navbar />
      <div className="flex flex-col justify-center text-center items-center h-3/4 mx-auto">
        <p className="text-white font-heading py-2 text-lg">
          Experience A New Degree Of Innovation
        </p>
        <p className="text-white font-heading py-3 text-3xl">
          The Ultimate Mobile App & Web Solutions for Every Trade
        </p>

        <p className="text-white font-heading text-sm">
          Accelerate your business growth with our customer-led, insights driven
          and innovative solutions
        </p>

        <button
          className="bg-[#404CDC] rounded-full 
            font-heading px-6 py-3 text-white uppercase"
        >
          start your free consulation
        </button>

        <p className="font-heading text-white text-base ">
          FREE, NO-OBLIGATION CONSULTATION OR ASSESSMENT WITH THE EXPERTS
        </p>
      </div>
    </section>
  );
};

export default Hero;
