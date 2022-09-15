import React, { useState } from "react";
import { Link } from "react-router-dom";

const CompanyNavLinks = () => {
  const [heading, setHeading] = useState("Company");
  const [subHeading, setSubHeading] = useState("");

  return (
    <div>
      <div className="px-3 text-left md:cursor-pointer group">
        <h1
          className="md:py-4 sm:py-3 flex justify-between items-center md:pr-0 pr-5 group"
          onClick={() => {
            heading !== "Company" ? setHeading("Company") : setHeading("");
            setSubHeading("");
          }}
        >
          {"Company"}
        </h1>

        <div className="absolute top-28 left-0 right-0 hidden group-hover:md:block hover:md:block">
          <div className="bg-Primary flex flex-row items-center justify-center md:h-[450px] text-white">
            {/* First Row */}
            <div className="flex flex-wrap flex-col m-0 border-r-2 py-10">
              <div className="mt-[10px] ">
                <ul className="text-sm font-subheading list-inside list-disc px-5">
                  <li>
                    {" "}
                    <Link to="/Overview">Overview</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/TrainingAndDevelopment">
                      Training and Development
                    </Link>
                  </li>
                  {/* <li>
                    {" "}
                    <Link to="/Team">Team</Link>
                  </li> */}
                  <li> <Link to="/LifeCerbosys">Life @ Cerbosys</Link></li>
                  <li>
                    {" "}
                    <Link to="/Diversity">Diversity @ Cerbosys</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/CurrentOpening">Current Openings</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* First Row Ends */}

            {/* Fourth Row */}
            <div className="flex flex-wrap flex-col justify-evenly">
              <div className="">               

                <div className="font-subheading text-lg m-6">
                  call us at
                  <p>+91 731 499 3444</p>
                  <p>+91 88 3969 7183</p>
                </div>

                <div className="font-subheading text-lg m-6">
                  email us at
                  <p>info@cerbosys.com</p>
                </div>
              </div>
            </div>
            {/* Fourth Row */}

            {/* Button Row */}
<div>
<button
                      className="bg-Green rounded-full 
            font-heading px-6 py-3 text-white uppercase "
                    >
                      Get Free Estimation
                    </button>
</div>
{/* Button Row Ends*/}

            {/* Slogan Line */}
            <div className="bottom-1 font-heading text-xl text-center absolute border-t-2 ">
              WE CREATE WHAT YOU BELIEVE!!
            </div>
            {/* Slogan Ends */}
          </div>
        </div>
      </div>

      {/* Web Menu Ends */}

      {/* Mobile Menu Starts */}

      <div
        className={`
        ${heading === "Company" ? "hidden" : "md:hidden"}
      `}
      >
        <div className="flex flex-wrap flex-col m-2">
          <div className="mt-[-10px] ">
            <ul className="text-sm font-subheading list-inside list-disc">
              <li>
                {" "}
                <Link to="/Overview">Overview</Link>
              </li>
              <li>
                {" "}
                <Link to="/TrainingAndDevelopment">
                  Training and Development{" "}
                </Link>
              </li>
              {/* <li> <Link to="/Team">Team</Link></li> */}
              <li> <Link to="/LifeCerbosys">Life @ Cerbosys</Link></li>
              <li>
                {" "}
                <Link to="/Diversity">Diversity @ Cerbosys</Link>
              </li>
              <li>
                {" "}
                <Link to="/CurrentOpening">Current Openings</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Menu Ends */}
    </div>
  );
};

export default CompanyNavLinks;
