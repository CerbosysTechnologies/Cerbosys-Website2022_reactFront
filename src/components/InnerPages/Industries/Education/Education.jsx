import React from "react";
import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../Common/Component/Footer";
import EducationBody from "./EducationBody";
import EducationForm from "./EducationForm";

const Education = () => {
  return (
    <div>
      <>
        {/* <Navbar /> */}
        <div className="mx-auto w-full md:h-[36rem] bg-EducationHeader h-96 py-12 px-4 bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[30rem] h-96 mx-auto">
            <p className="text-white font-heading py-2 md:text-5xl text-2xl md:mb-48 mb-28">
              Education
            </p>

            <p className="text-white font-heading py-2 md:text-lg text-xs md:w-[980px] text-justify">
              As an IT-based company, we have lots of experience in providing
              excellent educational solutions to students and teachers. We
              understand the way students and teachers can use technology for
              their learning process.
            </p>
          </div>
          {/* Content Section Ends */}
        </div>
      </>
      <EducationBody />
      <EducationForm />
      {/* <Footer /> */}
    </div>
  );
};

export default Education;
