import React from 'react';
import servicelogo from '../../../../assets/innerpage/webdevelopment/services.svg';

const ServiceDiagram = () => {
  return (
    <div>
      <div className="bg-[#FAF6F5] mx-auto w-full py-16 px-4 ">
        <div className="max-w-[1240px] mx-auto ">
          <div className="flex flex-col flex-wrap items-center">
            {/* Heading */}
            <h2 className="font-heading md:text-3xl uppercase text-Primary text-xl">
              Service
            </h2>
            <h2 className="font-subheading md:text-xl text-black text-sm mt-3">
              Using Our Expert Web Development Service
            </h2>
            {/* Heading Ends */}

            {/* Image */}
            <img
              src={servicelogo}
              alt="Service Logo"
              className="md:w-[42rem] mt-10 w-80"
            />
            {/* Image Ends */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDiagram;
