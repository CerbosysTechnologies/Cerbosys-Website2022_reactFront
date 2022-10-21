import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavLinks = () => {
  const [heading, setHeading] = useState("Services");
  const [subHeading, setSubHeading] = useState("");

  const slinks = [
    {
      Head: "Web Developemnt",
    },
    {
      Head: "Mobile Development",
    },
    {
      Head: "UI/UX Development",
    },
    {
      Head: "Digital Marketing",
    },
  ];

  return (
    <>
      <div>
        <div className="px-3 text-left md:cursor-pointer group">
          <h1
            className="md:py-4 sm:py-3 flex justify-between items-center md:pr-0 pr-5 group md:h-32"
            onClick={() => {
              heading !== "Services" ? setHeading("Services") : setHeading("");
              setSubHeading("");
            }}
          >
            {"Services"}
            {/* <span className="text-xl md:hidden inline">
              <ion-icon
                name={`${heading === "Services" ? "toggle-up" : "toggle-down"}`}
              ></ion-icon>
            </span> */}
          </h1>
          <div>
            <div
              className="absolute top-32
             left-0 right-0 hidden group-hover:md:block hover:md:block "
            >
              <div className="bg-Primary flex flex-row items-center justify-center md:h-[380px] text-white mb-5">
                {/* First Row */}
                <div className="flex flex-wrap flex-col  border-r-2  py-4 px-10 ">
                  <div className="mt-4">
                    <h1 className="font-subheading md:text-sm text-xs">
                      <Link to="/web-development">Web Development</Link>
                    </h1>
                  </div>

                  <div className="mt-5">
                    <h1 className="font-subheading md:text-sm text-xs">
                      <Link to="/digital-marketing">Digital Marketing</Link>
                    </h1>
                  </div>

                  <div className="mt-5">
                    <h1 className="font-subheading md:text-sm text-xs">
                      <Link to="/lead-generation">Lead Generation</Link>
                    </h1>
                  </div>
                  <div className="mt-5">
                    <h1 className="font-subheading md:text-sm text-xs">
                      <Link to="/branding-and-packaging">
                        Branding And Packaging
                      </Link>
                    </h1>
                  </div>

                  <div className="mt-5">
                    <h1 className="font-subheading md:text-sm text-xs">
                      <Link to="/mobile-app-development">
                        Mobile App Development
                      </Link>
                    </h1>
                  </div>

                  <div className="mt-5">
                    <h1 className="font-subheading md:text-sm text-xs">
                      <Link to="/uiux-development">UI/UX Development</Link>
                    </h1>
                  </div>
                </div>
                {/* First Row Ends */}

                {/* Second Row */}
                <div className="flex flex-wrap flex-col m-2 border-r-2 py-4">
                  <div className="mx-4">
                    <h1 className="font-subheading md:text-sm text-xs">
                      <Link to="/staff-augmentation">Staff Augmentation</Link>
                    </h1>
                    <ul className="text-sm font-subheading list-inside list-disc capitalize">
                      <li>
                        <Link to="/hire-react-js-developer">
                          Hire Reacjs Developer
                        </Link>
                      </li>
                      <li>
                        <Link to="/hire-node-js-developer">
                          Hire Node.js Developer
                        </Link>
                      </li>
                      <li>
                        <Link to="/hire-android-developer">
                          Hire Android Developer
                        </Link>
                      </li>
                      <li>
                        <Link to="/hire-ios-developer">Hire IOS Developer</Link>
                      </li>
                      <li>
                        <Link to="/hire-flutter-developer">
                          Hire Flutter Developer
                        </Link>
                      </li>
                      <li>
                        <Link to="/hire-laravel-developer">
                          Hire Laravel Developer
                        </Link>
                      </li>
                      <li>
                        <Link to="/hire-codeIgniter-developer">
                          Hire CodeIgniter Developer
                        </Link>
                      </li>
                      <li>
                        <Link to="/hire-angular-developer">
                          Hire Angular Developer
                        </Link>
                      </li>
                      <li>
                        <Link to="/hire-dotnet-developer">
                          Hire .Net Developer
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Second Row Ends */}

                {/* Third Row */}
                <div className="flex flex-wrap flex-col justify-evenly py-8">
                  <div className="mx-3">
                    <div className="font-subheading text-lg mt-8  normal-case hover:uppercase">
                      Call us at
                      <p>0731-4993-444</p>
                      <p>+91 88-3969-7183</p>
                    </div>

                    <div className="font-subheading text-lg mt-8 normal-case ">
                      Email us at
                      <p>info@cerbosys.com</p>
                    </div>
                  </div>
                </div>
                {/* Third Row */}

                {/* Fourth Row */}
                <div>
                  <Link to="/contact-us">
                    <button
                      className="bg-Green rounded-full 
            font-heading px-6 py-3 text-white uppercase "
                    >
                      Get Free Estimation
                    </button>
                  </Link>
                </div>
                {/* Fourth Row Ends*/}

                {/* Slogan Line */}
                <div className="bottom-[0px] font-heading text-xl text-center absolute border-t-2 mb-5">
                  BUILD A FUTURE IN ONLINE BUSINESS WITH OUR TEAM
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
              ${heading === "Services" ? "hidden" : "md:hidden"}
            `}
        >
          {/* sublinks */}

          <div>
            <div>
              <h1
                onClick={() =>
                  subHeading !== slinks.Head
                    ? setSubHeading(slinks.Head)
                    : setSubHeading("")
                }
                className="py-2 pl-2 font-heading md:pr-0 pr-5 flex justify-between items-center text-white "
              >
                <div className="flex flex-wrap flex-col m-2">
                  <div className="mt-[5px] ">
                    <h1 className="font-heading text-sm">
                      <Link to="/web-development">Web Development</Link>
                    </h1>
                  </div>
                  <div className="mt-[5px] ">
                    <h1 className="font-heading text-sm">
                      <Link to="/digital-marketing">Digital Marketing</Link>
                    </h1>
                  </div>

                  <div className="mt-[8px]">
                    <h1 className="font-heading text-sm">
                      <Link to="/mobile-app-development">
                        Mobile Development
                      </Link>
                    </h1>
                  </div>
                  <div className="mt-[8px]">
                    <h1 className="font-heading  text-sm ">
                      <Link to="/uiux-development"> UI/UX Development</Link>
                    </h1>
                  </div>
                  <div className="mt-[8px]">
                    <h1 className="font-heading text-sm">
                      <Link to="/lead-generation">Lead Generation</Link>
                    </h1>
                    <h1 className="mt-[8px] font-heading text-sm">
                      <Link to="/branding-and-packaging">
                        Branding And Packaging
                      </Link>
                    </h1>
                  </div>

                  <div className="mt-[5px]">
                    <Link to="/staff-augmentation">
                      {" "}
                      <h1 className="font-heading text-sm">
                        Staff Augmentation
                      </h1>
                    </Link>
                    <ul className="text-sm font-subheading list-inside list-disc">
                      <li>
                        <Link to="/hire-react-js-developer">
                          Hire Reacjs Developer
                        </Link>
                      </li>
                      <li>
                        <Link to="/hire-node-js-developer">
                          Hire Node.js Developer
                        </Link>
                      </li>
                      <li>
                        <Link to="/hire-android-developer">
                          Hire Android Developer
                        </Link>
                      </li>
                      <li>
                        <Link to="/hire-ios-developer">Hire IOS Developer</Link>
                      </li>
                      <li>
                        <Link to="/hire-flutter-developer">
                          Hire Flutter Developer
                        </Link>
                      </li>
                      <li>
                        <Link to="/hire-laravel-developer">
                          Hire Laravel Developer
                        </Link>
                      </li>
                      <li>
                        <Link to="/hire-codeIgniter-developer">
                          Hire CodeIgniter Developer
                        </Link>
                      </li>
                      <li>
                        <Link to="/hire-angular-developer">
                          Hire Angular Developer
                        </Link>
                      </li>
                      <li>
                        <Link to="/hire-dotnet-developer">
                          Hire .Net Developer
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* First Row Ends */}
              </h1>
              <div
                className={`${
                  subHeading === slinks.Head ? "md:hidden" : "hidden"
                }`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavLinks;
