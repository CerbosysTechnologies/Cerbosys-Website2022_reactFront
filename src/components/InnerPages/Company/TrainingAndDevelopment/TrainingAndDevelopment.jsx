import React from "react";
import Footer from "../../../Common/Component/Footer";
import Navbar from "../../../Navbar/Navbar";
import TrainingAndDevelopmentBody from "./TrainingAndDevelopmentBody";
import TrainingAndDevelopmentForm from "./TrainingAndDevelopmentForm";

const TrainingAndDevelopment = () => {
  return (
    <div>
      <>
        <Navbar />
        <div className="mx-auto w-full md:h-[30rem]  h-96 py-12 px-4 bg-TrainingAndDevelopment bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[30rem] h-96 mx-auto">
            <p className="text-white font-heading py-2 md:text-3xl text-xl mb-2">
              Training And Development
            </p>

            <p className="text-Primary font-heading py-2 md:text-lg text-xs mb-8 md:w-[480px] text-justify">
            Cerbosys conducts an extensive training and development program for our new recruits. Under the guidance of experienced employees, subject matter experts and personality development mentors, we improve the employee’s performance. 
            </p>
          </div>
          {/* Content Section Ends */}
        </div>
      </>

      <TrainingAndDevelopmentBody />
      <TrainingAndDevelopmentForm />
      <Footer />
    </div>
  );
};

export default TrainingAndDevelopment;
