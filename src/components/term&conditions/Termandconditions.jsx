import React from "react";
import Footer from "../Common/Component/Footer";
import Navbar from "../Navbar/Navbar";
import TermconditionsBody from "./TermconditionsBody";

function Termconditions() {
  return (
    <>
      <div className="mx-auto w-full md:h-[38rem]  h-96 py-12 px-4 bg-Termandcondition bg-cover md:bg-top bg-center">
        {/* Content Section */}
        <div className="flex flex-col justify-center text-center items-center md:h-[35rem] h-96 mx-auto">
          <p className="text-white font-heading py-2 md:text-3xl text-xl mb-10 ">
            Terms and conditions
          </p>
          <p className="text-white font-heading py-2 md:text-xl text-xs md:mb-28 mb-24 md:w-[480px] text-justify">
            Cerbosys reserves the right to change the Terms and Conditions at
            any time, for any reason.
          </p>
        </div>
        {/* Content Section Ends*/}
      </div>
      <TermconditionsBody />
    </>
  );
}

export default Termconditions;
