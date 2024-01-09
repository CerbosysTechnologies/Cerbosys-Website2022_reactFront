import React from "react";
import SolutionBody from "./SolutionBody";
import { Helmet } from "react-helmet";

function Solution() {
  return (
    <>
      <Helmet>
        <title>Solution </title>
        <meta name="keywords" content="Solution" />
        <meta name="description" content="Solution" />
        <link rel="canonical" href="https://cerbosys.com/solution" />
      </Helmet>
      <div className="selection:bg-Green selection:text-white">
        <div className="mx-auto w-full md:h-[38rem]  h-96 py-12 px-4 bg-Solution bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[35rem] h-96 mx-auto">
            <h1 className="text-white font-heading py-2 md:text-3xl text-xl mb-2">
              Solution
            </h1>
            <p className="text-center text-white font-subheading  md:text-lg text-xs md:w-[980px] max-w-fit">
              We Will Shape Your Brand With Our Digital Solutions
            </p>
          </div>
          {/* Content Section Ends*/}
        </div>
        <div>
          <SolutionBody />
        </div>
      </div>
    </>
  );
}

export default Solution;
