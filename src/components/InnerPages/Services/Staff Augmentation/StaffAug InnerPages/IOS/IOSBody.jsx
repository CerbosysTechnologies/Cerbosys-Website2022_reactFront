import React from "react";

import iosimage from "../../../../../../assets/innerpage/ios/iosimage.svg";
import iosprocess from "../../../../../../assets/innerpage/ios/ioshire.svg";

const IOSBody = () => {
  return (
    <div>
      <div className="bg-Service mx-auto w-full py-16 px-4 ">
        <div className="max-w-[1240px] mx-auto ">
          <div className="flex flex-wrap flex-col">
            <h1 className="font-heading md:text-6xl text-2xl text-center text-Primary">
              About IOS
            </h1>

            <p className="font-subheading md:text-2xl text-sm text-justify md:mt-10">
              There are many different types of developers, and each one
              specializes in a different area. IOS developers are no different.
              IOS developers build applications for the iPhone and iPad. While
              some developers may build applications for both platforms, others
              may specialize in one or the other.
            </p>
            <img
              src={iosimage}
              alt="IOS Image"
              className="md:mt-16 mt-8 h-[30rem]"
            />

            <p className="font-subheading md:text-2xl text-sm text-justify md:mt-10">
              There are many different types of developers, but one of the most
              in-demand developers these days is an iOS developer.
              <br></br>
              <br></br>
              As more and more businesses move their operations to mobile apps,
              the need for qualified iOS developers has skyrocketed.
              <br></br>
              <br></br>
              If you're looking for an experienced iOS developer, there's no
              better option for you than Cerbosys.
            </p>

            <h1 className="font-heading md:text-6xl text-2xl text-center text-Primary mt-10">
              Process to Hire IOS Developer
            </h1>
            <img src={iosprocess} alt="IOS Process" className="mt-16" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IOSBody;
