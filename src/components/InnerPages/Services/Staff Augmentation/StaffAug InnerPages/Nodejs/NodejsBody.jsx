import React from "react";

import nodejsimage from "../../../../../../assets/innerpage/nodejs/node.jsimage.svg";
import nodejsprocess from "../../../../../../assets/innerpage/nodejs/node.jshire.svg";

const NodejsBody = () => {
  return (
    <div>
      <div className=" mx-auto w-full py-16 px-4 ">
        <div className="max-w-[1240px] mx-auto ">
          <div className="flex flex-wrap flex-col">
            <h1 className="font-heading md:text-6xl text-2xl text-center text-Primary">
              About Node.js
            </h1>
            <p className="font-subheading md:text-2xl text-sm text-justify md:mt-10">
              Node.JS is a JavaScript framework that is used for developing web
              applications.It is also used for developing server-side
              applications. NodeJS is one of the most popular frameworks for
              developing web applications.
            </p>
            <img
              src={nodejsimage}
              alt="Nodejs Image"
              className="md:mt-16 mt-8 h-[30rem]"
            />

            <p className="font-subheading md:text-2xl text-sm text-justify md:mt-10">
              Node.JS developers are responsible for developing and maintaining
              server-side applications. They are also responsible for ensuring
              that these applications are scalable and can handle large amounts
              of data.
              <br></br>
              <br></br>
              If you are looking to hire a Node.JS developer, then you can
              contact our team of experts at Cerbosys. We will be able to help
              you find the right developer for your needs.
            </p>

            <h1 className="font-heading md:text-6xl text-2xl text-center text-Primary mt-10">
              Process to Hire Node.js Developer
            </h1>
            <img src={nodejsprocess} alt="Dot Net Process" className="mt-16" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NodejsBody;
