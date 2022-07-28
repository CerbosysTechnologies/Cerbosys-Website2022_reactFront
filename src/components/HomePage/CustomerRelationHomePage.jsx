import React from "react";

import clientinteractionicon from "../../assets/customer/Client_interaction.svg";
import consolidationicon from "../../assets/customer/Consolidation.svg";
import deliverablesicon from "../../assets/customer/Deliverables.svg";
import developmenticon from "../../assets/customer/Development.svg";

const CustomerRelationHomePage = () => {
  return (
    <div>
      <div className="bg-[#1B1B1B] mx-auto w-full h-full py-16 px-4 ">
        <div className="max-w-[1240px] mx-auto ">
          {/* Heading */}
          <h1 className="font-heading text-sm md:text-2xl text-white uppercase text-left indent-24">
            Build Customer Relationship
          </h1>
          {/* Heading Ends */}

{/* Main Container For Image and Content */}
          <div className="grid md:grid-cols-2">
            {/* Image Section */}
            <div className="mx-auto my-6 grid md:grid-cols-2 md:gap-4 grid-cols-2 gap-10">
              <div>
                <img
                  src={clientinteractionicon}
                  alt="Client Interaction Icon"
                  className="md:w-[220px] md:h-[220px] 
                w-[120px] h-[120px]"
                ></img>
              </div>

              <div>
                <img
                  src={consolidationicon}
                  alt="Consolidation Icon"
                  className="md:w-[220px] md:h-[220px] 
                w-[120px] h-[120px]"
                ></img>
              </div>

              <div>
                <img
                  src={developmenticon}
                  alt="Development Icon"
                  className="md:w-[220px] md:h-[220px] 
                w-[120px] h-[120px]"
                ></img>
              </div>

              <div>
                <img
                  src={deliverablesicon}
                  alt="Deliverables Icon"
                  className="md:w-[220px] md:h-[220px] 
                w-[120px] h-[120px]"
                ></img>
              </div>
            </div>
            {/* Image Section Ends */}

          
            {/* Content Section */}
            <div className="flex flex-col justify-center">
              <h1 className="text-white font-heading md:text-xl text-sm align-top mb-12">
                Our Customer On-Boarding Process
              </h1>
              <p className="text-white font-content md:text-lg  text-xs mb-20 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum molestiae delectus culpa hic assumenda, voluptate
                reprehenderit dolore autem cum ullam sed odit perspiciatis.
                Doloribus quos velit, eveniet ex deserunt fuga? Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Ipsam corporis
                quas nobis consequatur nemo delectus saepe odit pariatur!
                Doloribus ea provident voluptatibus dicta vero distinctio modi
                quae quaerat aspernatur quis.
              </p>

              <div>
                <span
                  className="bg-Primary rounded-full font-heading md:py-3 md:px-3 md:text-lg
                  text-[9px] px-1 py-1 text-white">
                  Let's Work Together
                </span>
              </div>
            </div>

            {/* Content Section Ends */}
          </div>
{/* Main Container For Image and Content Ends*/}          
        </div>
      </div>
    </div>
  );
};

export default CustomerRelationHomePage;
