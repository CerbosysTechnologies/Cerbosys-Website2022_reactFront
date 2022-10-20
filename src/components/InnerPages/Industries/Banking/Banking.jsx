import React from "react";
import Navbar from "../../../Navbar/Navbar";
import BankingBody from "./BankingBody";
import BankingForm from "./BankingForm";
import Footer from "../../../Common/Component/Footer";

const Banking = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="mx-auto w-full md:h-[36rem] bg-BankingHeader h-96 py-12 px-4 bg-cover md:bg-top bg-center">
        {/* Content Section */}
        <div className="flex flex-col justify-center text-center items-center md:h-[30rem] h-96 mx-auto">
          <p className="text-white font-heading py-2 md:text-5xl text-2xl md:mb-48 mb-28">
            Banking And Finance
          </p>

          <p className="text-white font-heading py-2 md:text-lg text-xs md:w-[980px] text-justify">
            We believe in building long-term relationships with our clients, who
            count on us for high-quality banking and financial services. We
            thrive on providing a wide array of banking and finance services to
            grow our customers' businesses faster.
          </p>
        </div>
        {/* Content Section Ends */}
      </div>
      <BankingBody />
      <BankingForm />
      {/* <Footer /> */}
    </>
  );
};

export default Banking;
