import React from "react";

import androidimage from "../../../../../../assets/innerpage/android/androidimage.svg";
import androidprocess from "../../../../../../assets/innerpage/android/androidhire.svg";

const AndroidBody = () => {
  return (
    <div>
      <div className=" mx-auto w-full py-16 px-4 ">
        <div className="max-w-[1240px] mx-auto ">
          <div className="flex flex-wrap flex-col">
            <h2 className="font-heading md:text-3xl text-2xl text-center text-Primary">
              About Android
            </h2>

            <p className="font-content text-justify md:mt-10">
              Android is a software package and linux based operating system for
              mobile devices such as tablet computers and smartphones.
              <br></br>
              <br></br>
              It is developed by Google and later the OHA (Open Handset
              Alliance). Java language is mainly used to write the android code
              even though other languages can be used.
              <br></br>
              <br></br>
              The goal of the android project is to create a successful
              real-world product that improves the mobile experience for end
              users.
              <br></br>
              <br></br>
              There are many code names of android such as Lollipop, Kitkat,
              Jelly Bean, Ice cream Sandwich, Froyo, Ecliar, Donut etc.
            </p>
            <img
              src={androidimage}
              alt="Android Image"
              className="md:mt-16 mt-8 h-[20rem]"
            />

            <p className="font-content text-justify md:mt-10">
              If your business project needs a well-skilled android developer
              then, Cerbosys for sure can help you with that. <br></br>There is
              no doubt that Android is one of the most popular mobile operating
              systems in the world. This is why many businesses are now looking
              to hire Android app developers to help them create and launch
              their Android apps.
            </p>

            <h2 className="font-heading md:text-3xl text-2xl text-center text-Primary mt-10">
              Process to Hire Android Developer
            </h2>
            <img src={androidprocess} alt="Android Process" className="mt-16 h-[20rem]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AndroidBody;
