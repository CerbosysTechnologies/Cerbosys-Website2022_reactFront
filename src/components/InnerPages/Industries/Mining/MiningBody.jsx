import React from "react";
import miningmobicon from "../../../../assets/innerpage/mining/miningmob.svg";
import miningbusinessicon from "../../../../assets/innerpage/mining/miningimage.svg";

const MiningBody = () => {
  return (
    <div>
      <div>
        <div className="mx-auto w-full py-10 px-4 ">
          <div className="max-w-[1240px] mx-auto">
            {/* Image Section */}
            <div className="flex flex-wrap mx-auto items-center justify-center space-x-10">
              {/* Mobile Image */}
              <div className="">
                <img
                  src={miningmobicon}
                  alt="Mining Mobile"
                  className="md:h-[30rem]"
                />
              </div>
              {/* Mobile Image */}

              {/* Image Section Ends*/}

              {/* Side */}
              <div className="flex flex-wrap flex-col ">
                <h2 className="text-Green md:text-3xl text-center mb-6 text-xl mt-4 font-heading">
                  About Mining
                </h2>
                <img
                  src={miningbusinessicon}
                  alt="Mining Business"
                  className="md:h-[20rem]"
                />
                <p className="font-content md:w-[33rem] mt-6 text-justify">
                  Mining is the process of extracting useful minerals and metals
                  from the earth. There are a lot of minerals available in
                  nature, but most of them are not accessible to humans because
                  they are under the surface or hidden beneath the water. To
                  manage such a huge belt, business solution provider companies
                  are required to assist the business online.
                </p>
              </div>
              {/* Side Image*/}
            </div>

            {/* Bullet Section */}
            <div className="flex flex-wrap flex-col mx-auto">
              <div className="font-heading md:text-3xl text-xl mt-10 text-center">
                Our Services for the Mining Industry
              </div>

              <ul className="text-justify font-content  mt-10 list-disc md:px-0 px-5">
                <li>
                  <strong>Synchronized Digital Mining Solution :-</strong>
                  The synchronized digital mining solution built by our company
                  allows you to control the entire process from planning to
                  execution, i.e. from the creation of designs to manufacturing,
                  refinement, and packaging procedures.
                </li>

                <li>
                  <strong>Mining Analytics :-</strong>Mining Analytics is a new
                  service platform that delivers mining analytics to business
                  users through clear, step-by-step instructions. The Mining
                  Analytics solution helps in reducing costs and creating a
                  better balance between business adoption and IT resources.
                </li>

                <li>
                  <strong>Mobility Services :-</strong> Our mobility solution is
                  made up of multiple components that we deploy when a client
                  engages with us for the first time. This ensures that our
                  clients have a strong foundation in place for long-term
                  growth, reduced costs, and higher efficiency in their
                  environment.
                </li>

                <li>
                  <strong>Reserve Management :-</strong> Reserve Management is
                  one of the most important factors in a company's strategic
                  planning. It is designed to cover over- and under-production,
                  maintenance, supply, and demand of the products, it also helps
                  in the automation, integration, and standardization of mine
                  technical systems.
                </li>
              </ul>
            </div>
            {/* Bullet Section Ends*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiningBody;
