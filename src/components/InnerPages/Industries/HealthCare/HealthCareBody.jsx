import React from "react";
import healthcaremobileicon from "../../../../assets/innerpage/healthcare/healthmob.svg";
import healthcarebusinesssicon from "../../../../assets/innerpage/healthcare/healthimage.svg";

const HealthCareBody = () => {
  return (
    <div>
      <div className="mx-auto w-full py-10 px-4 ">
        <div className="max-w-[1240px] mx-auto">
          {/* Image Section */}
          <div className="flex flex-wrap mx-auto items-center justify-center space-x-10">
            {/* Mobile Image */}
            <div className="">
              <img
                src={healthcaremobileicon}
                alt="HealthCare Mobile"
                className="md:h-[40rem]"
              />
            </div>
            {/* Mobile Image */}

            {/* Image Section Ends*/}

            {/* Side */}
            <div className="flex flex-wrap flex-col ">
              <h1 className="text-Green md:text-4xl text-center items-center mb-6 text-xl mt-4 font-heading md:w-96 justify-center mx-10">
                HealthCare And Life Science In Business
              </h1>
              <img
                src={healthcarebusinesssicon}
                alt="HealthCare Business"
                className="md:h-[20rem]"
              />
              <p className="font-subheading md:text-xl text-lg md:w-[30rem] mt-6 text-justify items-center">
                Healthcare and Life Science offers a comprehensive range of
                products and services which includes a wide range of healthcare
                equipment, pharmaceuticals, vascular solutions, medical
                supplies, and more. There are many ways by which digitalization
                can help improve your company's operations.
              </p>
            </div>
            {/* Side Image*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthCareBody;
