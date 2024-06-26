import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { TbPlayerTrackNext } from 'react-icons/tb';

const CompanyNavLinks = () => {
  const [heading, setHeading] = useState('Company');
  const [subHeading, setSubHeading] = useState('');

  return (
    <div>
      <div className="px-3 text-left md:cursor-pointer group">
        <h2
          className="md:py-4 sm:py-3 flex justify-between items-center md:pr-0 pr-5 group  md:h-32"
          onClick={() => {
            heading !== 'Company' ? setHeading('Company') : setHeading('');
            setSubHeading('');
          }}
        >
          {'Company'}
        </h2>
        <div className="absolute top-20 left-0 right-0 hidden group-hover:md:block hover:md:block transition duration-700 hover:duration-700">
          <div className="bg-Primary flex flex-row items-center justify-center md:h-[330px] text-white pb-5">
            {/* First Row */}
            <div className="flex flex-wrap flex-col m-0 border-r-2 py-10">
              <div className="mt-[4px] ">
                <ul className="text-sm font-subheading list-inside list-none px-5">
                  <li>
                    {/* <span className=" whitespace-wrap"> */}
                    <Link to="/overview" className="">
                      <span className="flex items-center gap-2 ">
                        <TbPlayerTrackNext className="fill-white text-white   hover:text-green-500 hover:fill-green-500" />
                        Overview
                      </span>
                    </Link>
                    {/* </span> */}
                  </li>
                  <li>
                    <Link to="/training-and-development">
                      <span className="flex items-center gap-2 ">
                        <TbPlayerTrackNext className="fill-white text-white  hover:text-green-500 hover:fill-green-500" />
                        Training and Development
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/team">
                      <span className="flex items-center gap-2 ">
                        <TbPlayerTrackNext className="fill-white text-white  hover:text-green-500 hover:fill-green-500" />
                        Team
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/life-at-cerbosys">
                      <span className="flex items-center gap-2 ">
                        <TbPlayerTrackNext className="fill-white text-white  hover:text-green-500 hover:fill-green-500" />
                        Life @ Cerbosys
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/diversity-at-cerbosys">
                      <span className="flex items-center gap-2 ">
                        <TbPlayerTrackNext className="fill-white text-white  hover:text-green-500 hover:fill-green-500" />
                        Diversity @ Cerbosys
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/testimonial">
                      <span className="flex items-center gap-2 ">
                        <TbPlayerTrackNext className="fill-white text-white  hover:text-green-500 hover:fill-green-500" />
                        Testimonial
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* First Row Ends */}

            {/* Fourth Row */}
            <div className="flex flex-wrap flex-col justify-evenly">
              <div className="">
                <div className="font-subheading text-lg m-4 normal-case hover:uppercase">
                  Call us at
                  <p>+91 9826906988</p>
                  <p>+91 8839697183</p>
                </div>

                <div className="font-subheading text-lg m-6 normal-case">
                  Email us at
                  <p>info@cerbosys.com</p>
                </div>
              </div>
            </div>
            {/* Fourth Row */}

            {/* Button Row */}
            <div>
              <Link to="/contact-us">
                <button
                  className="bg-Green rounded-full 
            font-heading px-6 py-3 text-white uppercase"
                >
                  Get Free Estimation
                </button>
              </Link>
            </div>
            {/* Button Row Ends*/}

            {/* Slogan Line */}
            <div className="bottom-3 font-heading text-xl text-center absolute border-t-2 ">
              WE CREATE WHAT YOU BELIEVE
            </div>
            {/* Slogan Ends */}
          </div>
        </div>
      </div>

      {/* Web Menu Ends */}

      {/* Mobile Menu Starts */}

      <div
        className={`
        ${heading === 'Company' ? 'hidden' : 'md:hidden'}
      `}
      >
        <div className="flex flex-wrap flex-col m-2">
          <div className="mt-[-10px] ">
            <ul className="text-sm font-subheading list-inside list-disc">
              <li>
                <Link to="/overview">Overview</Link>
              </li>
              <li>
                <Link to="/training-and-development">
                  Training and Development
                </Link>
              </li>
              <li>
                <Link to="/team">Team</Link>
              </li>
              <li>
                <Link to="/life-at-cerbosys">Life @ Cerbosys</Link>
              </li>
              <li>
                <Link to="/diversity-at-cerbosys">Diversity @ Cerbosys</Link>
              </li>
              <li>
                <Link to="/testimonial">Testimonial</Link>
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
