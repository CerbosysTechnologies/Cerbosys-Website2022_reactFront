import React from "react";
import bankingicon from "../../assets/industry/banking.svg";
import ecommerceicon from "../../assets/industry/ecommerce.svg";
import educationicon from "../../assets/industry/education.svg";
import fitnessicon from "../../assets/industry/fitness.svg";
import foodicon from "../../assets/industry/food.svg";
import healthcareicon from "../../assets/industry/healthcare.svg";
import logisticsicon from "../../assets/industry/logistics.svg";
import manufacturingicon from "../../assets/industry/manufacturing.svg";
import miningicon from "../../assets/industry/mining.svg";
import realestateicon from "../../assets/industry/real-estate.svg";
import transportationicon from "../../assets/industry/transportation.svg";
import agricultureicon from "../../assets/industry/agriculture.svg";
import Flip from "react-reveal/Flip";
import Roll from "react-reveal/Roll";
import LightSpeed from "react-reveal/LightSpeed";
import { Link } from "react-router-dom";

const IndustriesHomePage = () => {
  return (
    <div>
      <div className="bg-Primary mx-auto w-full h-full py-16 px-4 ">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          {/* Content Part */}
          <div className="flex flex-col md:px-16 px-2">
            <h2 className="text-white font-heading md:text-3xl text-xl mb-3">
              Our Industries
            </h2>
            <div className="text-white font-content  text-justify">
              Cerbosys has successfully managed to win the trust and hold hands
              with clients in several emerging business sectors across the
              country which include:-
              <ul className="font-content  list-disc">
                <li>Agriculture</li>
                <li>Ecommerce And Retail</li>
                <li>Healthcare And Life Science</li>
                <li>Banking And Finance</li>
                <li>Mining</li>
              </ul>
              and many more.
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
                <Link to="/Agriculture">
                <img
                  src={agricultureicon}
                  alt="Agriculture Icon"
                  className="md:w-[170px] md:h-[170px] 
                w-[120px] h-[120px]"
                ></img>
                </Link>
              </div>
            </Flip>


              <div>
              <Link to="/Ecommerce">
                <img
                  src={ecommerceicon}
                  alt="E-commerce Icon"
                  className="md:w-[170px] md:h-[170px] 
                w-[120px] h-[120px]"
                ></img>
                </Link>
              </div>

              <div>
              <Link to="/HealthCare">
                <img
                  src={healthcareicon}
                  alt="Healthcare Icon"
                  className="md:w-[170px] md:h-[170px] 
                w-[120px] h-[120px]"
                ></img>
                </Link>
              </div>

              <div>
              <Link to="/Banking">
                <img
                  src={bankingicon}
                  alt="Banking Icon"
                  className="md:w-[170px] md:h-[170px] 
                w-[120px] h-[120px]"
                ></img>
                </Link>
              </div>
           
              <div>
              <Link to="/Mining">
                <img
                  src={miningicon}
                  alt="Mining Icon"
                  className="md:w-[170px] md:h-[170px] 
                w-[120px] h-[120px]"
                ></img>
                </Link>
              </div>
              <Flip duration={4000}>

              <div>
                <img
                  src={fitnessicon}
                  alt="Fitness Icon"
                  className="md:w-[170px] md:h-[170px] 
                w-[120px] h-[120px]"
                ></img>
              </div>
</Flip>
              <div>
              <Link to="/Transportation">
                <img
                  src={transportationicon}
                  alt="Transportation Icon"
                  className="md:w-[170px] md:h-[170px] 
                w-[120px] h-[120px]"
                ></img>
                </Link>
              </div>

              <div>
                <img
                  src={logisticsicon}
                  alt="Logistics Icon"
                  className="md:w-[170px] md:h-[170px] 
                w-[120px] h-[120px]"
                ></img>
              </div>
          
          
              <div>
                <img
                  src={foodicon}
                  alt="Food Icon"
                  className="md:w-[170px] md:h-[170px] 
                w-[120px] h-[120px]"
                ></img>
              </div>

              <div>
                <img
                  src={educationicon}
                  alt="Education Icon"
                  className="md:w-[170px] md:h-[170px] 
                w-[120px] h-[120px]"
                ></img>
              </div>
              <Flip duration={4000}>
              <div>
                <img
                  src={realestateicon}
                  alt="Real Estate Icon"
                  className="md:w-[170px] md:h-[170px] 
                w-[120px] h-[120px]"
                ></img>
              </div>
</Flip>
              <div>
                <img
                  src={manufacturingicon}
                  alt="Manufacturing Icon"
                  className="md:w-[170px] md:h-[170px] 
                w-[120px] h-[120px]"
                ></img>
              </div>
           
          </div>
          {/* Icons Ends */}
        </div>
      </div>
    </div>
  );
};

export default IndustriesHomePage;
