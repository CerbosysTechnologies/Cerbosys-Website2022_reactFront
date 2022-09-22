import React from "react";

import laravelimage from "../../../../../../assets/innerpage/laravel/laravelimage.svg";
import laravelprocess from "../../../../../../assets/innerpage/laravel/laravelhire.svg";

const LaravelBody = () => {
  return (
    <div>
      <div className="bg-Service mx-auto w-full py-16 px-4 ">
        <div className="max-w-[1240px] mx-auto ">
          <div className="flex flex-wrap flex-col">
            <h1 className="font-heading md:text-6xl text-2xl text-center text-Primary">
              About Laravel
            </h1>

            <p className="font-subheading md:text-2xl text-sm text-justify md:mt-10">
              A PHP web application framework with elegant and expressive syntax
              is known as Laravel. It is designed for web artisans who want to
              create user-friendly web applications with minimum hassle.
            </p>
            <img
              src={laravelimage}
              alt="Laravel Image"
              className="md:mt-16 mt-8 h-[40rem]"
            />

            <p className="font-subheading md:text-2xl text-sm text-justify md:mt-10">
              There are different types of developers that specialize in
              different technologies, but Laravel Developer stands apart from
              these because of their special ability to work on the Laravel
              framework.
              <br></br>
              <br></br>
              Laravel developers also create and maintain Laravel-based
              applications. This means they are responsible for creating the
              code that makes up the application, as well as ensuring that the
              application is up to date and bug-free.
            </p>

            <h1 className="font-heading md:text-6xl text-2xl text-center text-Primary mt-10">
              Process to Hire Angular Developer
            </h1>
            <img src={laravelprocess} alt="Laravel Process" className="mt-16" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaravelBody;