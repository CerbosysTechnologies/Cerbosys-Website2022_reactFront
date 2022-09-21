import React from "react";

import angularimage from "../../../../../../assets/innerpage/angular/angularimage.svg";
import angularprocess from "../../../../../../assets/innerpage/angular/angularhire.svg";

const AngularBody = () => {
  return (
    <div>
      <div className="bg-Service mx-auto w-full py-16 px-4 ">
        <div className="max-w-[1240px] mx-auto ">
          <div className="flex flex-wrap flex-col">
            <h1 className="font-heading md:text-6xl text-2xl text-center text-Primary">
              About Angular
            </h1>

            <p className="font-subheading md:text-2xl text-sm text-justify md:mt-10">
              AngularJS is a web development framework and it is maintained by
              Google and by a community of individual developers so that the
              framework helps in creating single page applications that run on
              both desktop and mobile platforms.
            </p>
            <img
              src={angularimage}
              alt="Dot Net Image"
              className="md:mt-16 mt-8 h-[30rem]"
            />

            <p className="font-subheading md:text-2xl text-sm text-justify md:mt-10">
              If you're looking for Angular Developer Services in India, you've
              come to the right place. We're experts in hiring quality Angular
              developers, and we're here to help you with your project.
              <br></br>
              <br></br>
              No matter what your needs are, we can help you find the right
              Angular developer for your project. We have a wide range of
              developers who are experts in different areas, so you can be sure
              to find the right person for the job.
            </p>

            <h1 className="font-heading md:text-6xl text-2xl text-center text-Primary mt-10">
              Process to Hire Angular Developer
            </h1>
            <img src={angularprocess} alt="Dot Net Process" className="mt-16" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AngularBody;
