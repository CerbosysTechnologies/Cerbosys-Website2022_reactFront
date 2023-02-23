import React from 'react';
import PrivacyBody from './PrivacyBody';

function PrivacyPolicy() {
  return (
    <>
      <div className="selection:bg-Green selection:text-white mx-auto w-full md:h-[38rem]  h-96 py-12 px-4 bg-PrivacyPolicy bg-cover md:bg-top bg-center">
        {/* Content Section */}
        <div className="flex flex-col justify-center text-center items-center md:h-[35rem] h-96 mx-auto">
          <h1 className="text-white font-heading py-2 md:text-3xl text-xl mb-10 ">
            Privacy Policy
          </h1>
          <p className="text-white font-heading py-2 md:text-xl text-xs md:mb-28 mb-24 md:w-[480px] text-justify"></p>
        </div>
        {/* Content Section Ends*/}
      </div>
      <PrivacyBody />
    </>
  );
}

export default PrivacyPolicy;
