import React from "react";
import Navbar from '../../../Navbar/Navbar'
import ServiceDesc from "./ServiceDesc";
import ServiceDiagram from "./ServiceDiagram";
import ServiceForm from "./ServiceForm";
import ServiceProcess from "./ServiceProcess";
import Footer from '../../../Common/Component/Footer';
import { Link} from "react-router-dom";

const WebDevelopment = () => {
  return (
    <div>
      <>
        <Navbar />
        <div className="mx-auto w-full md:h-[30rem]  h-96 py-12 px-4 bg-WebDevelopment bg-cover md:bg-top bg-center">

          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[30rem] h-96 mx-auto">
          
          <p className="text-white font-heading py-2 md:text-3xl text-xl mb-2">
            Web Design and Development
          </p>

          <p className="text-white font-heading py-2 md:text-xs text-xs mb-8 ">
          Delivering designs that inspires next generation 
          </p>

          <Link to="/contact-us"><button
              className="bg-Primary rounded-full font-heading md:px-5 md:py-2 md:text-lg
              text-white uppercase px-3 py-1.5 text-xs mb-6"
            >
              Contact Us
            </button>
            </Link>


          </div>
          {/* Content Section Ends*/}
        </div>

        <ServiceDesc />
        <ServiceDiagram />
        <ServiceProcess />
        <ServiceForm />
        <Footer />
   
      </>
    </div>
  );
};

export default WebDevelopment;
