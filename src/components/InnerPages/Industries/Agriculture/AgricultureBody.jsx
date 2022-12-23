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
                className="md:h-[30rem]"
              />
            </div>
            {/* Mobile Image */}

            {/* Image Section Ends*/}

            {/* Side */}
            <div className="flex flex-wrap flex-col ">
              <h2 className="text-Green md:text-3xl text-center mb-6 text-xl mt-4 font-heading">
                Agriculture In Business
              </h2>
              <img
                src={agriculturebusinessicon}
                alt=""
                className="md:h-[20rem]"
              />
              <p className="font-content  md:w-[33rem] mt-6 text-justify">
                At Agricultural in Business, we provide tips and advice for
                entrepreneurs who are willing to grow in this field. Whether
                you're looking for information on specific crops or tips on how
                to get started in the agriculture business world, we've got you
                covered.
              </p>
            </div>
            {/* Side Image*/}
          </div>

          {/* Bullet Section */}
          <div className="flex flex-wrap flex-col mx-auto">
            <div className="font-heading md:text-3xl text-xl mt-10 text-center">
              Our Services for the Agriculture Industry
            </div>

            <ul className="text-justify font-content  mt-10 list-disc">
              <li>
                <strong>Agro App and Website development :-</strong> As a
                farmer, you can now develop your very own agro app and website
                which will be an easy-to-use platform to meet your specific
                needs.
              </li>

              <li>
                <strong>Managing IT Support :-</strong> Providing comprehensive
                support and services to help you stay connected and productive.
                We'll work with you to create a custom solution that meets the
                specific needs of your online agriculture business.
              </li>

              <li>
                <strong>Product Supply Chain Management :-</strong> Your product
                supply chain management will get a lot easier, with our software
                solutions you can track your inventory, plan your production,
                and manage your sales all in one place.
              </li>

              <li>
                <strong>E-procurement of Crops :-</strong> E-procurement
                services offer a new and efficient way to procure crops for your
                farm. With e-procurement, you can connect with a variety of
                suppliers online and get the best prices for the crops you need.
              </li>
            </ul>
          </div>
          {/* Bullet Section Ends*/}
        </div>
      </div>
    </div>
  );
};

export default AgricultureBody;
