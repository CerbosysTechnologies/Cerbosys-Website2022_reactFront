import React from 'react';

import TermconditionsBody from './TermconditionsBody';
import { Helmet } from 'react-helmet';

function Termconditions() {
  return (
    <>
      <Helmet>
        <title>Term conditions</title>
        <meta name="keywords" content="Termconditions" />
        <meta name="description" content="Termconditions" />
        {/* <link rel="canonical" href="https://cerbosys.com/terms-conditions" /> */}
      </Helmet>
      <div className="selection:bg-Green selection:text-white mx-auto w-full md:h-[38rem]  h-96 py-12 px-4 bg-Termandcondition bg-cover md:bg-top bg-center">
        {/* Content Section */}
        <div className="flex flex-col justify-center text-center items-center md:h-[35rem] h-96 mx-auto">
          <h1 className="text-white font-heading py-2 md:text-3xl text-xl mb-10 ">
            Terms and conditions
          </h1>
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
