import React from "react";

import reactjsimage from "../../../../../../assets/innerpage/reactjs/reactjsimage.svg";
import reactjsprocess from "../../../../../../assets/innerpage/reactjs/reactjshire.svg";

const ReactjsBody = () => {
  return (
    <div>
      <div className="bg-Service mx-auto w-full py-16 px-4 ">
        <div className="max-w-[1240px] mx-auto ">
          <div className="flex flex-wrap flex-col">
            <h1 className="font-heading md:text-6xl text-2xl text-center text-Primary">
              About React.js
            </h1>

            <p className="font-subheading md:text-2xl text-sm text-justify md:mt-10">
              React Js is a JavaScript library for building user interfaces. It
              is used for building user interfaces since it is an efficient, and
              flexible JavaScript library. React Js helps you to compose
              “components” which are small and isolated pieces of code along
              with complex UIs.
            </p>
            <img
              src={reactjsimage}
              alt="Reactjs Image"
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
              Process to Hire React.js Developer
            </h1>
            <img src={reactjsprocess} alt="Reactjs Process" className="mt-16" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactjsBody;
