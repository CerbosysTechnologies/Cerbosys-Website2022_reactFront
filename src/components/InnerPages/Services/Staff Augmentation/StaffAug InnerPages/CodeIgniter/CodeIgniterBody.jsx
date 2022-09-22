import React from "react";

import codeigniterimage from "../../../../../../assets/innerpage/codeigniter/codeignitorimage.svg";
import codeigniterprocess from "../../../../../../assets/innerpage/codeigniter/codeigniterhire.svg";

const CodeIgniterBody = () => {
  return (
    <div>
      <div className="bg-Service mx-auto w-full py-16 px-4 ">
        <div className="max-w-[1240px] mx-auto ">
          <div className="flex flex-wrap flex-col">
            <h1 className="font-heading md:text-6xl text-2xl text-center text-Primary">
              About CodeIgniter
            </h1>

            <p className="font-subheading md:text-2xl text-sm text-justify md:mt-10">
              Codeigniter is a powerful PHP framework that enables developers to
              create sophisticated web applications. It is an open-source
              framework with a large community of developers who contribute to
              its growth and development.
            </p>
            <img
              src={codeigniterimage}
              alt="CI Image"
              className="md:mt-16 mt-8 h-[30rem]"
            />

            <p className="font-subheading md:text-2xl text-sm text-justify md:mt-10">
              If you're looking for a top-notch Codeigniter developer, you've
              come to the right place.
              <br></br>
              <br></br>
              We hire a team of experienced Codeigniter developers who can get
              the job done quickly and efficiently.
            </p>

            <h1 className="font-heading md:text-6xl text-2xl text-center text-Primary mt-10">
              Process to Hire CodeIgniter Developer
            </h1>
            <img
              src={codeigniterprocess}
              alt="Dot Net Process"
              className="mt-16"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeIgniterBody;