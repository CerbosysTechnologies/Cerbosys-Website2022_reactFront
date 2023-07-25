import React from 'react';
import { Link } from 'react-router-dom';
import clientinteractionicon from '../../assets/customer/Client_interaction.svg';
import consolidationicon from '../../assets/customer/Consolidation.svg';
import deliverablesicon from '../../assets/customer/Deliverables.svg';
import developmenticon from '../../assets/customer/Development.svg';
const CustomerRelationHomePage = () => {
  return (
    <div>
      <div className="bg-[#1B1B1B] mx-auto w-full h-full py-16 px-4 ">
        <div className="max-w-[1240px] mx-auto ">
          {/* Heading */}
          <h2
            className="font-heading text-sm md:text-2xl text-white uppercase text-center md:indent-24
          indent-10"
          >
            Build Customer Relationship
          </h2>
          {/* Heading Ends */}

          {/* Main Container For Image and Content */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Image Section */}
            <div className="mx-auto md:my-6 grid md:grid-cols-2 md:gap-4 grid-cols-2 gap-6 relative mt-[-10rem]">
              <div>
                <img
                  src={clientinteractionicon}
                  alt="Mobile App Development Services"
                  className="md:w-[320px] md:h-[320px] 
                w-[160px] h-[620px] scale-75 hover:scale-100 ease-in duration-500 "
                ></img>
                
              </div>

              <div>
                <img
                  src={consolidationicon}
                  alt="Mobile App Development Services"
                  className="md:w-[320px] md:h-[320px] 
                w-[160px] h-[620px] scale-75 hover:scale-100 ease-in duration-500"
                ></img>
              </div>

              <div className="md:mt-0 -mt-[26rem]">
                <img
                  src={developmenticon}
                  alt="Mobile App Development Services"
                  className="md:w-[320px] md:h-[320px] 
                w-[160px] h-[620px] scale-75 hover:scale-100 ease-in duration-500"
                ></img>
                
              </div>

              <div className="md:mt-0 -mt-[26rem]">
                <img
                  src={deliverablesicon}
                  alt="Mobile App Development Services"
                  className="md:w-[320px] md:h-[320px] 
                w-[160px] h-[620px] scale-75 hover:scale-100 ease-in duration-500"
                ></img>
               
              </div>
            </div>
            {/* Image Section Ends */}

            {/* Content Section */}
            <div className="mx-auto flex flex-col justify-center  ">
              <h2 className="text-white uppercase font-heading md:text-2xl text-lg align-top mb-8 md:-mt-[5rem] -mt-[10rem]">
                Our Customer On-Boarding Process
              </h2>
              <p className="text-white font-content  mb-10 text-justify md:px-0 px-4">
                The customer onboarding process is undoubtedly the most crucial
                stage of the customer lifecycle, and since the products from
                Cerbosys are designed with simplicity and ease of use in mind.
                You can find the perfect solution for your business no matter
                what industry you're in.
              </p>

              <p className="text-white bold italic font-subheading  text-justify md:mb-16 mb-5 px-4">
                As innovative and creative digital creators, we have broken down
                this typical process into four major steps that involve:
              </p>

              <div>
                <Link to="/contact-us">
                  <span
                    className="bg-Primary rounded-full font-heading md:py-3 md:px-3 md:text-lg
                  text-[12px] px-2 py-2 text-white "
                  >
                    Let's Work Together
                  </span>
                </Link>
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
