import React, { useState } from "react";
import { Link } from "react-router-dom";


const NavLinks = () => {
  const [heading, setHeading] = useState("Services");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
        <div>
          <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className="py-7 flex justify-between items-center md:pr-0 pr-5 group"
              onClick={() => {
                heading !== "Services" ? setHeading("Services") : setHeading("");
                setSubHeading("");
              }}
            >
              {"Services"}
              <span className="text-xl md:hidden inline">
                <ion-icon
                  name={`${
                    heading === "Services" ? "toggle-up" : "toggle-down"
                  }`}
                ></ion-icon>
              </span>
              <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon name="toggle-down"></ion-icon>
              </span>
            </h1>
           
              <div>
                <div className="absolute top-25 left-2 right-2 hidden group-hover:md:block hover:md:block ">
                  <div className="bg-[#404CDC] flex flex-row flex-wrap items-center justify-center">
                    {/* First Row */}
                    <div className="flex flex-wrap flex-col m-2">
                      <div className="mt-[-46px] ">
                        <h1 className="font-heading underline text-lg">
                          Web Development
                        </h1>
                        <ul className="text-sm font-subheading list-inside list-disc">
                          <li> Reactjs Development</li>
                          <li> Nodejs Development</li>
                          <li> MEAN Development</li>
                         
                        </ul>
                      </div>

                      <div className="mt-16">
                        <h1 className="font-heading underline text-lg">
                          Lead Generation
                        </h1>
                        <h1 className="font-heading underline text-lg">
                          Brand Packaging
                        </h1>
                      </div>

                    </div>
                    {/* First Row Ends */}

                    {/* Second Row */}
                    <div className="flex flex-wrap flex-col m-2">
                      <div className="mt-[2px]">
                        <h1 className="font-heading underline text-lg">
                          Mobile Development
                        </h1>
                        <ul className="text-sm font-subheading list-inside list-disc">
                          <li>Android Development</li>
                          <li>Mobile Development</li>
                          <li>IOS Development</li>
                        </ul>
                      </div>

                      <div className="">
                        <h1 className="font-heading underline text-lg ">
                          UI/UX Development
                        </h1>
                        <ul className="text-sm font-subheading list-inside list-disc">
                          <li>UI research and analysis</li>
                          <li>User Interface Design</li>
                          <li>Wireframes and Prototyping</li>
                          <li>Alternative Frontend Design</li>
                          <li>User Experience Research and Development</li>
                        </ul>
                      </div>
                    </div>
                    {/* Second Row Ends */}

                    {/* Third Row */}
                    <div className="flex flex-wrap flex-col m-2">
                      <div className="mt-[-5px]">
                        <h1 className="font-heading underline text-lg">
                          Staff Augmentation
                        </h1>
                        <ul className="text-sm font-subheading list-inside list-disc">
                          <li>Hire Reacjs Developer</li>
                          <li>Hire Node.js Developer</li>
                          <li>Hire Android Developer</li>
                          <li>Hire IOS Developer</li>
                          <li>Hire Flutter Developer</li>
                          <li>Hire Laravel Developer</li>
                          <li>Hire Code Igniter Developer</li>
                          <li>Hire Angular Developer</li>
                          <li>Hire .Net Developer</li>
                        </ul>
                      </div>
                    </div>

                    {/* Third Row Ends */}

                    {/* Fourth Row */}
                    <div className="flex flex-wrap flex-col justify-evenly">
                      <div className="">
                        <button
                          className="bg-blue-400 rounded-full 
            font-heading px-6 py-3 text-white uppercase m-10">
                          Get Free Estimation
                        </button>

                        <div className="font-subheading text-lg m-10">
                          call us at
                          <p>+91 731 499 3444</p>
                          <p>+91 88 3969 7183</p>
                        </div>

                        <div className="font-subheading text-lg m-10">
                          email us at
                          <p>info@cerbosys.com</p>                          
                        </div>



                      </div>
                      </div>
                      {/* Fourth Row */}
                      
                    

                     {/* Slogan Line */}
                    
                     <div className="font-heading text-xl " >
                            Enabling Business Make business
                          
                          </div>
{/* Slogan Ends */}
                    {/* ))} */}

                   
                  </div>

                </div>
              </div> 
            
          </div>

          {/* Mobile menus */}
          <div
            className={`
              ${heading === "Services" ? "md:hidden" : "hidden"}
            `}
          >
            {/* sublinks */}
            {/* {link.sublinks.map((slinks) => (
              <div>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center md:pr-0 pr-5"
                  >
                    {slinks.Head}

                    <span className="text-xl md:mt-1 md:ml-2 inline">
                      <ion-icon
                        name={`${
                          subHeading === slinks.Head
                            ? "toggle-up"
                            : "toggle-down"
                        }`}
                      ></ion-icon>
                    </span>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li className="py-3 pl-14">
                        <Link to={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))} */}
          </div>
        </div>
      
    </>
  );
};

export default NavLinks;
