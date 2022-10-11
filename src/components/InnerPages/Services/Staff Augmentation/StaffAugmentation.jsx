import React from "react";
import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../Common/Component/Footer";
import { Link } from "react-router-dom";
import StaffAugmentationDesc from "./StaffAugmentationDesc";
import StaffAugmentationDiagram from "./StaffAugmentationDiagram";
import StaffAugmentationProcess from "./StaffAugmentationProcess";
import StaffAugmentationForm from "./StaffAugmentationForm";

const StaffAugmentation = () => {
  return (
    <div>
      <>
        <Navbar />
        <div className="mx-auto w-full md:h-[30rem]  h-96 py-12 px-4 bg-WebDevelopment bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[30rem] h-96 mx-auto">
            <p className="text-white font-heading py-2 md:text-3xl text-xl mb-2">
              Staff Augmentation
            </p>

            <p className="text-white font-heading py-2 md:text-xs text-xs mb-8 md:w-[480px] text-justify">
              Staff augmentation is a process by which a business can bring in
              additional employees to help with specific tasks or projects.
              There are several different ways to go about staff augmentation,
              so it's important to choose the option that best fits your needs.
            </p>

            <Link to="/contact-us">
              <button
                className="bg-Primary rounded-full font-heading md:px-5 md:py-2 md:text-lg
              text-white uppercase px-3 py-1.5 text-xs mb-6">
                Contact Us
              </button>
            </Link>
            
          </div>
          {/* Content Section Ends*/}
        </div>
        <StaffAugmentationDesc />
        <StaffAugmentationDiagram />
        <StaffAugmentationProcess />
        <StaffAugmentationForm />
        <Footer />
      </>
    </div>
  );
};

export default StaffAugmentation;
