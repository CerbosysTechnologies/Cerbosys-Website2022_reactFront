import React from "react";

import flutterimage from "../../../../../../assets/innerpage/flutter/flutterimage.svg";
import flutterprocess from "../../../../../../assets/innerpage/flutter/flutterhire.svg";

const FlutterBody = () => {
  return (
    <div>
      <div className="bg-Service mx-auto w-full py-16 px-4 ">
        <div className="max-w-[1240px] mx-auto ">
          <div className="flex flex-wrap flex-col">
            <h1 className="font-heading md:text-6xl text-2xl text-center text-Primary">
              Hire Flutter Developer
            </h1>

            <img
              src={flutterimage}
              alt="Flutter Image"
              className="md:mt-16 mt-8"
            />

            <p className="font-subheading md:text-2xl text-sm text-justify md:mt-10">
              Flutter developers are in high demand as the framework continues
              to grow in popularity.
              <br></br>
              <br></br>
              If you are looking for an experienced flutter developer who has
              hands-on experience in both iOS and Android then, Cerbosys for
              sure can help you with that.
            </p>

            <h1 className="font-heading md:text-6xl text-2xl text-center text-Primary mt-10">
              Process to Flutter Developer
            </h1>
            <img src={flutterprocess} alt="Flutter Process" className="mt-16" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlutterBody;
