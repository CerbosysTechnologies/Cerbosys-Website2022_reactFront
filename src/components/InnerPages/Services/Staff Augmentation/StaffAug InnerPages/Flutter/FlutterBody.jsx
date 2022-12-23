import React from "react";

import flutterimage from "../../../../../../assets/innerpage/flutter/flutterimage.svg";
import flutterprocess from "../../../../../../assets/innerpage/flutter/flutterhire.svg";

const FlutterBody = () => {
  return (
    <div>
      <div className=" mx-auto w-full py-16 px-4 ">
        <div className="max-w-[1240px] mx-auto ">
          <div className="flex flex-wrap flex-col">
            <h2 className="font-heading md:text-3xl text-2xl text-center text-Primary">
              About Flutter
            </h2>

            <p className="font-content   text-justify md:mt-10">
              Flutter is a cross-platform toolkit that allows you to create
              native-looking apps for both iOS and Android. Flutter is an
              excellent toolkit for creating beautiful, fast, and native-looking
              apps.
            </p>
            <img
              src={flutterimage}
              alt="Flutter Image"
              className="md:mt-16 mt-8 h-[20rem]"
            />

            <p className="font-content  text-justify md:mt-10">
              Flutter developers are in high demand as the framework continues
              to grow in popularity.
              <br></br>
              <br></br>
              If you are looking for an experienced flutter developer who has
              hands-on experience in both iOS and Android then, Cerbosys for
              sure can help you with that.
            </p>

            <h2 className="font-heading md:text-3xl text-2xl text-center text-Primary mt-10">
              Process to Flutter Developer
            </h2>
            <img src={flutterprocess} alt="Flutter Process" className="mt-16  h-[20rem] object-fill" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlutterBody;
