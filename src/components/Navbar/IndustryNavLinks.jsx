import React, { useState } from "react";
import { Link } from "react-router-dom";

const IndustryNavLinks = () => {
  const [heading, setHeading] = useState("Industries");
  const [subHeading, setSubHeading] = useState("");

  return (
    <div>
      <div className="px-3 text-left md:cursor-pointer group">
        <h1
          className="md:py-4 sm:py-3 flex justify-between items-center md:pr-0 pr-5 group md:h-32"
          onClick={() => {
            heading !== "Industries"
              ? setHeading("Industries")
              : setHeading("");
            setSubHeading("");
          }}
        >
          {"Industries"}
        </h1>

        <div className="absolute top-32 left-0 right-0 hidden group-hover:md:block hover:md:block ">
          <div
            className="bg-Primary flex flex-row items-center justify-center md:h-[400px] text-white mb-2
          "
          >
            {/* First Row */}
            <div className="flex flex-wrap flex-col m-2 border-r-2 py-7">
              <div className="mt-[5px]">
                <ul className="text-sm font-subheading list-inside list-disc px-5">
                  <li> Agriculture</li>
                  <li> Ecommerce and Retail</li>
                  <li> Healthcare and Life Science</li>
                  <li> Banking and Finance</li>
                  <li> Mining</li>
                  <li> Transport and Logistics</li>
                  <li> Education</li>
                  <li> Real Estate and Construction</li>
                  <li> Manufacturing</li>
                </ul>
              </div>
            </div>
            {/* First Row Ends */}

            {/* Second Row */}
            <div className="flex flex-wrap flex-col justify-evenly">
              <div className="">
                <div className="font-subheading text-lg m-6">
                  call us at
                  <p>0731-499-3-444</p>
                  <p>+91 88-3969-7183</p>
                </div>

                <div className="font-subheading text-lg m-6">
                  email us at
                  <p>info@cerbosys.com</p>
                </div>
              </div>
            </div>
            {/* Second Row */}

            {/* Third Row */}
            <div>
            <Link to="/ContactUs">
              <button
                className="bg-Green rounded-full 
            font-heading px-6 py-3 text-white uppercase "
              >
                Get A Free Estimate
              </button>
              </Link>
            </div>
            {/* Third Row Ends*/}

            {/* Slogan Line */}
            <div className="bottom-1 font-heading text-xl text-center absolute border-t-2 mb-2">
              Let’s work together & grow together!!
            </div>
            {/* Slogan Ends */}
          </div>
        </div>
      </div>

      {/* Web Menu Ends */}

      {/* Mobile Menu Starts */}

      <div className={` ${heading === "Industries" ? "hidden" : "md:hidden"}`}>
        <div className="flex flex-wrap flex-col m-2">
          <div className="mt-[-10px] ">
            <ul className="text-sm font-subheading list-inside list-disc">
              <li> Agriculture</li>
              <li> Ecommerce and Retail</li>
              <li> Healthcare and Life Science</li>
              <li> Banking and Finance</li>
              <li> Mining</li>
              <li> Transport and Logistics</li>
              <li> Education</li>
              <li> Real Estate and Construction</li>
              <li> Manufacturing</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Menu Ends */}
    </div>
  );
};

export default IndustryNavLinks;
