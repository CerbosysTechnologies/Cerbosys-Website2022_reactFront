import React from 'react';
import bankingicon from '../../assets/industry/Banking.svg';
import ecommerceicon from '../../assets/industry/ecommerce.svg';
import educationicon from '../../assets/industry/Education.svg';
import fitnessicon from '../../assets/industry/Fitness.svg';
import foodicon from '../../assets/industry/Food.svg';
import healthcareicon from '../../assets/industry/Healthcare.svg';
import logisticsicon from '../../assets/industry/Logistics.svg';
import manufacturingicon from '../../assets/industry/Manufacturing.svg';
import miningicon from '../../assets/industry/Mining.svg';
import realestateicon from '../../assets/industry/real-estate.svg';
import transportationicon from '../../assets/industry/Transportation.svg';
import agricultureicon from '../../assets/industry/Agriculture.svg';
import Flip from 'react-reveal/Flip';

import { Link } from 'react-router-dom';

const IndustriesHomePage = () => {
  return (
    <div>
      <div className="bg-Primary mx-auto w-full h-full py-16 px-4 ">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          {/* Content Part */}
          <div className="flex flex-col md:px-7 px-2">
            <h2 className="text-white uppercase font-heading md:text-3xl text-xl mb-3">
              Our Industries
            </h2>
            <div className="text-white font-content  text-justify">
              Cerbosys, a trusted global web development company, has successfully earned the trust and formed strong partnerships with clients in various emerging business sectors worldwide, which include:
              <ul className="font-content  list-disc">
                <li>Agriculture</li>
                <li>Ecommerce And Retail</li>
                <li>Healthcare And Life Science</li>
                <li>Banking And Finance</li>
                <li>Mining and many more.</li>
              </ul>
            </div>

            <div className="font-heading italic text-white md:text-xl text-lg mt-10">
              Connect with US if you are looking to grow your business.
            </div>
          </div>
          {/* Content Part */}
          {/* Icons Starts */}
          <div className="mx-auto my-4 grid md:grid-cols-4 md:gap-4 grid-cols-2 gap-10">
            <Flip duration={4000}>
              <div>
                <Link to="/agriculture">
                  <img
                    src={agricultureicon}
                    alt="Mobile App Development Services"

                  ></img>
                </Link>
              </div>
            </Flip>

            <div>
              <Link to="/ecommerce-development-services">
                <img
                  src={ecommerceicon}
                  alt="Mobile App Development Services"

                ></img>
              </Link>
            </div>

            <div>
              <Link to="/health-care">
                <img
                  src={healthcareicon}
                  alt="Mobile App Development Services"

                ></img>
              </Link>
            </div>
            <div>
              <Link to="/banking-and-finance">
                <img
                  src={bankingicon}
                  alt="Mobile App Development Services"

                ></img>
              </Link>
            </div>

            <div>
              <Link to="/mining">
                <img
                  src={miningicon}
                  alt="Mobile App Development Services"

                ></img>
              </Link>
            </div>
            <Flip duration={4000}>
              <div>
                <Link to="/health-care">
                  <img
                    src={fitnessicon}
                    alt="Mobile App Development Services"

                  ></img>
                </Link>
              </div>
            </Flip>
            <div>
              <Link to="/transport-and-logistics">
                <img
                  src={transportationicon}
                  alt="Mobile App Development Services"

                ></img>
              </Link>
            </div>

            <div>
              <Link to="/transport-and-logistics">
                <img
                  src={logisticsicon}
                  alt="Mobile App Development Services"

                ></img>
              </Link>
            </div>

            <div>
              <Link to="/agriculture">
                <img
                  src={foodicon}
                  alt="Mobile App Development Services"
                // className="md:w-[170px] md:h-[170px]
                // w-[120px] h-[120px]"
                ></img>
              </Link>
            </div>
            <div>
              <Link to="/education">
                <img
                  src={educationicon}
                  alt="Mobile App Development Services"

                ></img>
              </Link>
            </div>
            <Flip duration={4000}>
              <div>
                <Link to="/real-estate">
                  <img
                    src={realestateicon}
                    alt="Mobile App Development Services"
                  //     className="md:w-[170px] md:h-[170px]
                  // w-[120px] h-[120px]"
                  ></img>
                </Link>
              </div>
            </Flip>
            <div>
              <Link to="/manufacturing">
                <img
                  src={manufacturingicon}
                  alt="Mobile App Development Services"

                ></img>
              </Link>
            </div>
          </div>
          {/* Icons Ends */}
        </div>
      </div>
    </div>
  );
};

export default IndustriesHomePage;
