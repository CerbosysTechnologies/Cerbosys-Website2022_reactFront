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
              <p className="font-subheading md:text-xl text-lg md:w-[33rem] mt-6 text-justify">
                Transport and logistics is the process of delivering goods from
                one point to another. Some words used in the industry are
                shipping, transporting, hustling, transportation, freight and
                supply chain management, etc. Transport and logistics is the
                most complex economic sector in the world.
              </p>
            </div>
            {/* Side Image*/}
          </div>

          {/* Bullet Section */}
          <div className="flex flex-wrap flex-col mx-auto">
            <div className="font-heading md:text-4xl text-xl mt-10 text-center">
              Our Services for the Transport and Logistics Industry
            </div>

            <ul className="text-justify font-content md:text-xl text-sm mt-10 list-disc">
              <li>
                <strong>Transport Management Solution :-</strong>
                Whether moving your products between production, distribution,
                or store inventory, our transport management and solution module
                can help you to optimize processes and manage your transport
                management well.
              </li>

              <li>
                <strong>Supply Chain Management :-</strong> Supply chain
                management software services provided by us assist the process
                of managing the transportation and distribution of materials,
                components, finished goods, and information. Everything in this
                industry can be managed smoothly by our online services.
              </li>

              <li>
                <strong>Courier Delivery :-</strong>We are a company that
                provides software solutions for domestic and international
                courier services to manage package delivery services. Our
                cloud-based e-commerce platform helps to manage your operation
                from anywhere with the help of our SaaS solution that allows
                users to access any part of their data from anywhere, anytime.
              </li>

              <li>
                <strong>Fleet Management :-</strong> Fleet management
                applications designed by our company automate the management of
                commercial motor vehicles. Vehicle, trucks, specialist vehicles
                and trailers tracking and fleet tracking is available through
                several different types of equipment and technology solutions
                provided by us.
              </li>
            </ul>
          </div>
          {/* Bullet Section Ends*/}
        </div>
      </div>
    </div>
  );
};
