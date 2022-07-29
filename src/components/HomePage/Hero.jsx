import React from "react";
import Navbar from "../Navbar/Navbar";
import ServiceHomePage from '../../components/HomePage/ServiceHomePage';
import TechnologyHomePage from '../../components/HomePage/TechnologyHomePage';
import IndustriesHomePage from '../../components/HomePage/IndustriesHomePage';
import CustomerRelationHomePage from '../../components/HomePage/CustomerRelationHomePage';
import Footer from '../../components/HomePage/Footer';
import { ScrollToTop } from "../Common/ScrollToTop";



const Hero = () => {
  return (
    <>
      <Navbar />
      <div className="mx-auto w-full md:h-screen h-full py-16 px-4 bg-Hero bg-cover md:bg-top bg-center">


        {/* Free Quote */}
        <div className="fixed z-20 top-1/2 right-[-4.55rem] bg-Primary
         p-1 px-2 justify-end items-end rotate-90 rounded-bl-3xl rounded-br-3xl text-white">
          <span className="uppercase font-heading text-base">Get a free quote</span>
        </div>

        {/* Free Quote Ends */}

{/* Content Section */}
        <div className="flex flex-col justify-center text-center items-center h-3/4 mx-auto">
          <p className="text-white font-heading py-2 md:text-lg text-sm mb-8 md:mt-48">
            Experience A New Degree Of Innovation
          </p>
          <p className="text-white font-heading py-3 md:text-3xl text-lg md:w-[500px] w-[350px] mb-8">
            The Ultimate Mobile App & Web Solutions for Every Trade
          </p>

          <p className="text-white font-heading md:text-lg text-sm mb-8 md:w-[730px] w-[420px]">
            Accelerate your business growth with our customer-led, insights
            driven and innovative solutions
          </p>

            <button
              className="bg-Primary rounded-full font-heading md:px-5 md:py-2 md:text-lg
              text-white uppercase px-3 py-1.5 text-xs mb-6"
            >
              start your free consulation
            </button>

          <p className="font-heading text-white md:text-base text-xs">
            FREE, NO-OBLIGATION CONSULTATION OR ASSESSMENT WITH THE EXPERTS
          </p>
        </div>

        {/* Content Section Ends*/}       

{/* Testing Code */}



{/* Testing Code Ends */}
      </div>
      <ServiceHomePage />
      <IndustriesHomePage />
      <CustomerRelationHomePage />
      <TechnologyHomePage />
      <Footer />
      
      <ScrollToTop />
    </>
  );
};

export default Hero;
