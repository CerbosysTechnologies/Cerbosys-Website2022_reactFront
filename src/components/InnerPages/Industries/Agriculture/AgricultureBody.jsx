import React from "react";
import agriculturemobicon from "../../../../assets/innerpage/agriculture/agriculturemob.svg";
import agriculturebusinessicon from "../../../../assets/innerpage/agriculture/agricultureimage.svg";

const AgricultureBody = () => {
  return (
    <div>
      <div className="mx-auto w-full py-10 px-4 ">
        <div className="max-w-[1240px] mx-auto">
          {/* Image Section */}
          <div className="flex flex-wrap mx-auto items-center justify-center space-x-10">
            {/* Mobile Image */}
            <div className="">
              <img
                src={agriculturemobicon}
                alt="Agriculture Mobile"
                className="md:h-[40rem]"
              />
            </div>
            {/* Mobile Image */}

            {/* Image Section Ends*/}

            {/* Side */}
            <div className="flex flex-wrap flex-col ">
              <h1 className="text-Green md:text-4xl text-center mb-6">
                Agriculture In Business
              </h1>
              <img
                src={agriculturebusinessicon}
                alt=""
                className="md:h-[20rem]"
              />
              <p className="font-subheading md:text-xl text-lg md:w-[30rem] mt-6 text-justify">
                At Agricultural in Business, we provide tips and advice for
                entrepreneurs who are willing to grow in this field. Whether
                you're looking for information on specific crops or tips on how
                to get started in the agriculture business world, we've got you
                covered.
              </p>
            </div>
            {/* Side Image*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgricultureBody;
