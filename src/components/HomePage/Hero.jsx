import React from "react";
import Navbar from "../Navbar/Navbar";
import ServiceHomePage from '../../components/HomePage/ServiceHomePage';
import TechnologyHomePage from '../../components/HomePage/TechnologyHomePage';
import IndustriesHomePage from '../../components/HomePage/IndustriesHomePage';
import CustomerRelationHomePage from '../../components/HomePage/CustomerRelationHomePage';
import Footer from '../../components/Common/Component/Footer';
import ClientLogoPage from "./ClientLogoPage";



const Hero = () => {
  return (
    <>
      <Navbar />
      <div className="mx-auto w-full md:h-screen h-full py-16 px-4 bg-Hero bg-cover md:bg-top bg-center">

{/* Content Section */}
        <div className="flex flex-col justify-center text-center items-center h-3/4 mx-auto">
          
          {/* <p className="text-white font-heading py-3 md:text-3xl text-lg md:w-[600px] w-[300px] mb-8 animate-pulse">
          The Ideal Web and Mobile Solutions for your emerging business- You’re just one click away!!
          </p> */}

          <p className="text-white font-heading md:text-lg text-sm mb-8 md:w-[730px] w-[350px] mt-36">
          Generating innovative ideas that convert the clicks into leads for your business - with the help of highly enthusiastic and creative tech-wizards.
          </p>

            <button
              className="bg-Green rounded-full font-heading md:px-5 md:py-2 md:text-lg
              text-white uppercase px-3 py-1.5 text-xs mb-6">
              Click to Connect
            </button>

          <p className="font-heading text-white md:text-base text-xs">
          Let's collaborate to accelerate your business growth with us!!
          </p>
        </div>
      
        {/* Content Section Ends*/}       

{/* Testing Code */}



{/* Testing Code Ends */}
      </div>
      <ServiceHomePage />
      <IndustriesHomePage />
      <CustomerRelationHomePage />
      <ClientLogoPage />
      <TechnologyHomePage />
      <Footer />      
    


    </>
  );
};

export default Hero;
