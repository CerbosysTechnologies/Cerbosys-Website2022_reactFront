import React from "react";
import ecommercemobicon from "../../../../assets/innerpage/ecommerce/ecoomersmob.svg";
import ecommercebusinessicon from "../../../../assets/innerpage/ecommerce/ecommerceimage.svg";

export const EcommerceBody = () => {
  return (
    <div>
      <div className="mx-auto w-full py-10 px-4 ">
        <div className="max-w-[1240px] mx-auto">
          {/* Image Section */}
          <div className="flex flex-wrap mx-auto items-center justify-center space-x-10">
            {/* Mobile Image */}
            <div className="">
              <img
                src={ecommercemobicon}
                alt="Ecommerce Mobile"
                className="md:h-[40rem]"
              />
            </div>
            {/* Mobile Image */}

            {/* Image Section Ends*/}

            {/* Side */}
            <div className="flex flex-wrap flex-col ">
              <h1 className="text-Green md:text-4xl text-xl mt-4 font-heading text-center mb-6">
                Ecommerce In Business
              </h1>
              <img
                src={ecommercebusinessicon}
                alt="Ecommerce Business"
                className="md:h-[20rem]"
              />
              <p className="font-subheading md:text-xl text-lg md:w-[30rem] mt-6 text-justify">
                E-commerce is a powerful force in today's economy. It allows
                buyers to purchase items from the comfort of their own homes,
                and it allows sellers to reach a global audience. Whether you're
                a buyer looking for the best deals, or a seller looking to
                expand your business, e-commerce is a great way to do it.
              </p>
            </div>
            {/* Side Image*/}
          </div>
        </div>
      </div>
    </div>
  );
};
