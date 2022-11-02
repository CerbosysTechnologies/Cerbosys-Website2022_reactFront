import React from "react";
import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../Common/Component/Footer";
import CurrentOpeningBody from "./CurrentOpeningBody";
import CurrentOpeningForm from "./CurrentOpeningForm";
import { Helmet } from "react-helmet";

const CurrentOpening = () => {
  return (
    <div>
      <>
        <Helmet>
          <title>Current-Opening | Cerbosys</title>
          <meta
            name="description"
            content="Cerbosys Technologies Inc. is one of the leading Website Design and  Mobile App Development company who provides services across the world. Contact us now for growth."
          />
        </Helmet>

        {/* <Navbar /> */}
        <div className="mx-auto w-full md:h-[30rem]  h-96 py-12 px-4 bg-CurrentOpeningBackground bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[30rem] h-96 mx-auto">
            <p className="text-white font-heading py-2 md:text-3xl text-xl mb-2">
              Current Openings
            </p>

            <p className="text-Primary font-heading py-2 md:text-lg text-xs mb-8 md:w-[480px] text-center">
              Join us: We are one of the most well-versed & innovative business
              solution provider companies in India.
            </p>
          </div>
          {/* Content Section Ends */}
        </div>
      </>
      <CurrentOpeningBody />
      <CurrentOpeningForm />
      {/* <Footer /> */}
    </div>
  );
};

export default CurrentOpening;
