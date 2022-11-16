import React from "react";
import { Link } from "react-router-dom";
import ECommersebody from "./ECommersebody";

function ECommerse() {
  return (
    <>
      <div className="mx-auto w-full md:h-[30rem]  h-96 py-12 px-4 bg-Ecomers bg-cover md:bg-top bg-center">
        {/* Content Section */}
        <div className="flex flex-col justify-center text-center items-center md:h-[35rem] h-96 mx-auto">
          <p className="text-white font-heading py-2 md:text-3xl text-xl mb-10 ">
            E-Commerse
          </p>
          <p className="text-white font-heading py-2 md:text-xl text-xs md:mb-2 mb-2 md:w-[480px] text-justify">
            Ecommerce, also known as electronic commerce or internet commerce
          </p>
          <Link to="/Contact-us">
            <button
              className="bg-Green rounded-full font-heading md:px-5  md:text-lg
              text-white uppercase px-3 py-1.5 text-xs mb-6"
            >
              Click to Connect
            </button>
          </Link>
        </div>
        {/* Content Section Ends*/}
      </div>
      <ECommersebody />
    </>
  );
}

export default ECommerse;
