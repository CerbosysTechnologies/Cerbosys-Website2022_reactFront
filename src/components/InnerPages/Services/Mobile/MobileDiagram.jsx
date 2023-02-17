import React from 'react';
import mobileservicelogo from '../../../../assets/innerpage/mobiledevelopment/service.svg';

const MobileDiagram = () => {
  return (
    <div>
      <div className="bg-[#FAF6F5] mx-auto w-full py-16  px-4 ">
        <div className="max-w-[1240px] mx-auto ">
          <div className="flex flex-col flex-wrap items-center">
            {/* Heading */}
            <h2 className="font-heading md:text-3xl uppercase text-Primary text-xl">
              Service
            </h2>
            <h2 className="uppercase font-subheading md:text-xl mt-3 text-black text-sm">
              Our Team Utilizes all Technology Platforms to provide you a wide
              range of services.
            </h2>
            {/* Heading Ends */}

            {/* Image */}
            <img
              src={mobileservicelogo}
              alt="Mobile Service Logo"
              className="md:w-[42rem] mt-10 w-80"
            />
            {/* Image Ends */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileDiagram;
