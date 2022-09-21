import React from "react";

import dotnetimage from "../../../../../../assets/innerpage/dotnet/netimage.svg";
import dotnetprocess from "../../../../../../assets/innerpage/dotnet/nethire.svg";



const NetBody = () => {

  return (
    <div>
      <div className="bg-Service mx-auto w-full py-16 px-4 ">
        <div className="max-w-[1240px] mx-auto ">
          <div className="flex flex-wrap flex-col">
            <h1 className="font-heading md:text-6xl text-2xl text-center text-Primary">
              Hire .Net Developer
            </h1>

            <img src={dotnetimage} alt="Dot Net Image" className="" />

            <p className="font-subheading md:text-2xl text-sm text-justify">
              We provide top-tier .Net developers for your business so you can
              focus on your core competencies. Looking to hire a .Net developer?
              Cerbosys has you covered! We provide skilled developers who can
              help you take your business to the next level.
            </p>

          <h1 className="font-heading md:text-6xl text-2xl text-center text-Primary mt-10">Process to Hire .Net Developer</h1>
          <img src={dotnetprocess} alt="Dot Net Process" className="mt-16" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetBody;
