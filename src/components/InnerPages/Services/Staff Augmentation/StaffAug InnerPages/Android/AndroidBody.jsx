import React from "react";

import androidimage from "../../../../../../assets/innerpage/android/androidimage.svg";
import androidprocess from "../../../../../../assets/innerpage/android/androidhire.svg";

const AndroidBody = () => {
  return (
    <div>
      <div className="bg-Service mx-auto w-full py-16 px-4 ">
        <div className="max-w-[1240px] mx-auto ">
          <div className="flex flex-wrap flex-col">
            <h1 className="font-heading md:text-6xl text-2xl text-center text-Primary">
              Hire Android Developer
            </h1>

            <img src={androidimage} alt="Android Image" className="md:mt-16 mt-8" />

            <p className="font-subheading md:text-2xl text-sm text-justify md:mt-10">
              If your business project needs a well-skilled android developer
              then, Cerbosys for sure can help you with that. <br></br>There is no doubt
              that Android is one of the most popular mobile operating systems
              in the world. This is why many businesses are now looking to hire
              Android app developers to help them create and launch their
              Android apps.
            </p>

            <h1 className="font-heading md:text-6xl text-2xl text-center text-Primary mt-10">
              Process to Hire Android Developer
            </h1>
            <img src={androidprocess} alt="Android Process" className="mt-16" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AndroidBody;
