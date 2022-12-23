import React from "react";
import manufacturingmobicon from "../../../../assets/innerpage/manufacturing/manufacturingmob.svg";
import manufacturingbusinessicon from "../../../../assets/innerpage/manufacturing/manufacturingimage.svg";

const ManufacturingBody = () => {
  return (
    <div>
      <div className="mx-auto w-full py-10 px-4 ">
        <div className="max-w-[1240px] mx-auto">
          {/* Image Section */}
          <div className="flex flex-wrap mx-auto items-center justify-center space-x-10">
            {/* Mobile Image */}
            <div className="">
              <img
                src={manufacturingmobicon}
                alt="Manufacture Mobile"
                className="md:h-[30rem]"
              />
            </div>
            {/* Mobile Image */}

            {/* Image Section Ends*/}

            {/* Side */}
            <div className="flex flex-wrap flex-col ">
              <h2 className="text-Green md:text-3xl text-center mb-6 text-xl mt-4 font-heading">
                About Manufacturing Industry
              </h2>
              <img
                src={manufacturingbusinessicon}
                alt="Manufacture Business"
                className="md:h-[20rem]"
              />
              <p className="font-content  md:w-[35rem] mt-6 text-justify">
                The manufacturing industry is one of the largest industries
                today. This is due to the level of productivity that these
                manufacturing firms have reached and their ability to produce
                goods at a quick pace. The manufacturing industry plays an
                important role in the economy by creating jobs and transforming
                raw materials into higher-value products.
              </p>
            </div>
            {/* Side Image*/}
          </div>

          {/* Bullet Section */}
          <div className="flex flex-wrap flex-col mx-auto">
            <div className="font-heading md:text-3xl text-xl mt-10 text-center">
              Our Services for the Real Estate and Construction Industry
            </div>

            <ul className="text-justify font-content  mt-10 list-disc">
              <li>
                <strong>Manufacturing Sales Enablement :-</strong> Cerbosys
                offers innovative sales enablement solutions that empower your
                team with best practices and tools that help them win the
                business and delight customers. Our focus is on helping our
                customers make the most of their sales operations.
              </li>

              <li>
                <strong>Enterprise and Supply Chain Management :-</strong> We
                believe that your business is more successful when you have a
                comprehensive view of your supply chain. We create a supply
                chain strategy including supply chain management, logistics, and
                warehouse management software to make your business function
                with its full efficiency.
              </li>

              <li>
                <strong>Product Lifecycle Management :-</strong> From getting
                better planning to eliminating defects and producing faster, our
                online product lifecycle management solution is the answer for
                manufacturers. With our software solutions, manufacturers will
                be able to streamline their supply chain processes and gain a
                competitive advantage.
              </li>

              <li>
                <strong>Inventory & Order Management :-</strong>Our solution
                helps organizations minimize operational and Inventory costs
                since order management is the backbone of any business. The
                right inventory management system helps you streamline your
                operations and also serves as a valuable asset in planning and
                achieving financial goals.
              </li>
            </ul>
          </div>
          {/* Bullet Section Ends*/}
        </div>
      </div>
    </div>
  );
};

export default ManufacturingBody;
