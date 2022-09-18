import React from "react";
import transportmobicon from "../../../../assets/innerpage/transport/transportmob.svg";
import transportbusinessicon from "../../../../assets/innerpage/transport/transportimage.svg";

export const TransportBody = () => {
  return (
    <div>
      <div className="mx-auto w-full py-10 px-4 ">
        <div className="max-w-[1240px] mx-auto">
          {/* Image Section */}
          <div className="flex flex-wrap mx-auto items-center justify-center space-x-10">
            {/* Mobile Image */}
            <div className="">
              <img
                src={transportmobicon}
                alt="Transport Mobile"
                className="md:h-[40rem]"
              />
            </div>
            {/* Mobile Image */}

            {/* Image Section Ends*/}

            {/* Side */}
            <div className="flex flex-wrap flex-col ">
              <h1 className="text-Green md:text-4xl text-center items-center mb-6 text-xl mt-4 font-heading md:w-96 justify-center mx-10">
              About Transport and Logistics
              </h1>
              <img
                src={transportbusinessicon}
                alt="Transport Business"
                className="md:h-[20rem]"
              />
              <p className="font-subheading md:text-xl text-lg md:w-[30rem] mt-6 text-justify">
                Transport and logistics is the process of delivering goods from
                one point to another. Some words used in the industry are
                shipping, transporting, hustling, transportation, freight and
                supply chain management, etc. Transport and logistics is the
                most complex economic sector in the world.
              </p>
            </div>
            {/* Side Image*/}
          </div>
        </div>
      </div>
    </div>
  );
};
