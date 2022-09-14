import React from "react";
import Footer from "../../../Common/Component/Footer";
import Navbar from "../../../Navbar/Navbar";
import Teambody from "./Teambody";

const Team = () => {
  return (
    <div>
      <>
        <Navbar />
        <div className="mx-auto w-full md:h-[48rem]  h-96 py-12 px-4 bg-LifeCerbosys bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[30rem] h-96 mx-auto">
            <p className="text-white font-heading py-2 md:text-7xl text-2xl md:mb-48 mb-28">
              Meet Our Team
            </p>

            {/* <p className="text-Primary font-heading py-2 md:text-lg text-xs md:w-[480px] text-justify mt-36">
              We have a team of young, dynamic, well versed and talented
              individuals who are committed to delivering value to our clients.
              We understand that the success of any business is directly related
              to customer satisfaction.
            </p> */}
          </div>
          {/* Content Section Ends */}
        </div>
      </>
      <Teambody />
      <Footer />
    </div>
  );
};

export default Team;
