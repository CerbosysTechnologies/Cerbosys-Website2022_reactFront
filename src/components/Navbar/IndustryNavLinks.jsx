import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TbPlayerTrackNext } from 'react-icons/tb';

const IndustryNavLinks = () => {
  const [heading, setHeading] = useState('Industries');
  const [subHeading, setSubHeading] = useState('');

  return (
    <div>
      {/* md:py-4 sm:py-3 md:h-32*/}
      
      <div className="px-3 text-left md:cursor-pointer group">
        <div className="relative">
          <h2
            className="py-2 flex justify-between items-center md:pr-0 pr-5 group 
          after:content-[''] after:absolute after:bg-orange-600 after:h-[3px] after:w-[0%] after:left-0 after:bottom-[-3px]
          after:ease-in-out after:duration-300
          hover:after:w-[100%]"
            onClick={() => {
              heading !== 'Industries'
                ? setHeading('Industries')
                : setHeading('');
              setSubHeading('');
            }}
          >
            {'Industries'}
          </h2>
        </div>

        <div className="absolute top-[63px] left-0 right-0 hidden group-hover:md:block hover:md:block ">
          <div
            className="bg-Primary flex flex-row items-center justify-center md:h-[400px] text-white pb-2
          "
          >
            {/* First Row */}
            <div className="flex flex-wrap flex-col m-2 border-r-2 py-7">
              <div className="mt-[5px]">
                <ul className="text-sm font-subheading list-inside list-none px-5">
                  <li>
                    <Link to="/agriculture">
                      <span className="flex items-center gap-2 ">
                        <TbPlayerTrackNext className="fill-white text-white   hover:text-green-500 hover:fill-green-500" />
                        Agriculture
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/ecommerce-development-services">
                      <span className="flex items-center gap-2 ">
                        <TbPlayerTrackNext className="fill-white text-white   hover:text-green-500 hover:fill-green-500" />
                        Ecommerce and Retail
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/health-care">
                      <span className="flex items-center gap-2 ">
                        <TbPlayerTrackNext className="fill-white text-white   hover:text-green-500 hover:fill-green-500" />
                        Healthcare and Life Science
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/banking-and-finance">
                      <span className="flex items-center gap-2 ">
                        <TbPlayerTrackNext className="fill-white text-white   hover:text-green-500 hover:fill-green-500" />
                        Banking and Finance
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/mining">
                      <span className="flex items-center gap-2 ">
                        <TbPlayerTrackNext className="fill-white text-white   hover:text-green-500 hover:fill-green-500" />
                        Mining
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/transport-and-logistics">
                      <span className="flex items-center gap-2 ">
                        <TbPlayerTrackNext className="fill-white text-white   hover:text-green-500 hover:fill-green-500" />
                        Transport and Logistics
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/education">
                      <span className="flex items-center gap-2 ">
                        <TbPlayerTrackNext className="fill-white text-white   hover:text-green-500 hover:fill-green-500" />
                        Education
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/real-estate">
                      <span className="flex items-center gap-2 ">
                        <TbPlayerTrackNext className="fill-white text-white   hover:text-green-500 hover:fill-green-500" />
                        Real Estate and Construction
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/manufacturing">
                      <span className="flex items-center gap-2 ">
                        <TbPlayerTrackNext className="fill-white text-white   hover:text-green-500 hover:fill-green-500" />
                        Manufacturing
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* First Row Ends */}

            {/* Second Row */}
            <div className="flex flex-wrap flex-col justify-evenly">
              <div className="">
                <div className="font-subheading text-lg m-6 normal-case hover:uppercase">
                  Call us at
                  <p>+91 9826906988</p>
                  <p>+91 8839697183</p>
                </div>

                <div className="font-subheading text-lg m-6  normal-case">
                  Email us at
                  <p>info@cerbosys.com</p>
                </div>
              </div>
            </div>
            {/* Second Row */}

            {/* Third Row */}
            <div>
              <Link to="/contact-us">
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
              Let’s work together & grow together
            </div>
            {/* Slogan Ends */}
          </div>
        </div>
      </div>

      {/* Web Menu Ends */}

      {/* Mobile Menu Starts */}

      <div className={` ${heading === 'Indu stries' ? 'hidden' : 'md:hidden'}`}>
        <div className="flex flex-wrap flex-col m-2">
          <div className="mt-[-10px] ">
            <ul className="text-sm font-subheading list-inside list-disc">
              <li>
                <Link to="/agriculture">Agriculture</Link>
              </li>
              <li>
                <Link to="/ecommerce-development-services">
                  Ecommerce and Retail
                </Link>
              </li>
              <li>
                <Link to="/health-care">Healthcare and Life Science</Link>
              </li>
              <li>
                <Link to="/banking-and-finance">Banking and Finance</Link>
              </li>
              <li>
                <Link to="/mining">Mining</Link>
              </li>
              <li>
                <Link to="/transport-and-logistics">
                  Transport and Logistics
                </Link>
              </li>
              <li>
                <Link to="/education">Education</Link>
              </li>
              <li>
                <Link to="/real-estate">Real Estate and Construction</Link>
              </li>
              <li>
                <Link to="/manufacturing">Manufacturing</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Menu Ends */}
    </div>
  );
};

export default IndustryNavLinks;
