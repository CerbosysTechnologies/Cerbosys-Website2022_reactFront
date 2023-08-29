import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TbPlayerTrackNext } from 'react-icons/tb';
import { AiFillCaretRight } from 'react-icons/ai';

const NavLinks = () => {
  const [heading, setHeading] = useState('');
  const [subHeading, setSubHeading] = useState('');

  const slinks = [
    {
      Head: 'Web Developemnt',
    },
    {
      Head: 'Mobile Development',
    },
    {
      Head: 'UI/UX Designing',
    },
    {
      Head: 'Digital Marketing',
    },
  ];
 

  return (
    <>
      <div>
        
        <div className="px-3 text-left md:cursor-pointer active:duration-700  group">
          <div className="relative">
            <h2
              className=" py-2 flex justify-between items-center md:pr-0 pr-5 group
            after:content-[''] after:absolute after:bg-orange-600 after:h-[3px] after:w-[0%] after:left-0 after:bottom-[-2px]
            after:ease-in-out after:duration-500
            hover:after:w-[100%]
           "
              
              onC
              lick={() => {
                heading !== 'Services'
                  ? setTimeout(() => {
                      setHeading('Services');
                    }, 10000)
                  : setHeading('');
                setSubHeading('');
              }}
            >
              {'Services'}
            
            </h2>
          </div>

          <div>
            <div
              className="absolute top-[63px]
                 left-0 right-0 hidden group-hover:md:block hover:md:block "
            >
              <div className="bg-Primary flex flex-row items-center justify-center md:h-[380px] text-white pb-5">
                {/* First Row top-32*/}
                <div className="flex flex-wrap flex-col  border-r-2  py-4 px-10 ">
                  <div className="mt-4">
                    <h2 className="font-subheading md:text-sm text-xs">
                      <Link to="/web-development">
                        <span className="flex items-center gap-2 ">
                          <TbPlayerTrackNext className="fill-white text-white   hover:text-green-500 hover:fill-green-500" />
                          Web Development
                        </span>
                      </Link>
                    </h2>
                  </div>
                  <div className="mt-4">
                    <h2 className="font-subheading md:text-sm text-xs">
                      <Link to="/software-development">
                        <span className="flex items-center gap-2 ">
                          <TbPlayerTrackNext className="fill-white text-white   hover:text-green-500 hover:fill-green-500" />
                          Software Development
                        </span>
                      </Link>
                    </h2>
                  </div>

                  <div className="mt-5">
                    <h2 className="font-subheading md:text-sm text-xs">
                      <Link to="/https://digitalmarketing.cerbosys.com/">
                        <span className="flex items-center gap-2 ">
                          <TbPlayerTrackNext className="fill-white text-white   hover:text-green-500 hover:fill-green-500" />
                          Digital Marketing
                        </span>
                      </Link>
                    </h2>
                  </div>

                  <div className="mt-5">
                    <h2 className="font-subheading md:text-sm text-xs">
                      <Link to="/lead-generation">
                        <span className="flex items-center gap-2 ">
                          <TbPlayerTrackNext className="fill-white text-white   hover:text-green-500 hover:fill-green-500" />
                          Lead Generation
                        </span>
                      </Link>
                    </h2>
                  </div>
                  <div className="mt-5">
                    <h2 className="font-subheading md:text-sm text-xs">
                      <Link to="/branding-and-packaging">
                        <span className="flex items-center gap-2 ">
                          <TbPlayerTrackNext className="fill-white text-white   hover:text-green-500 hover:fill-green-500" />
                          Branding And Packaging
                        </span>
                      </Link>
                    </h2>
                  </div>

                  <div className="mt-5">
                    <h2 className="font-subheading md:text-sm text-xs">
                      <Link to="/mobile-app-development">
                        <span className="flex items-center gap-2 ">
                          <TbPlayerTrackNext className="fill-white text-white   hover:text-green-500 hover:fill-green-500" />
                          Mobile App Development
                        </span>
                      </Link>
                    </h2>
                  </div>

                  <div className="mt-5">
                    <h2 className="font-subheading md:text-sm text-xs">
                      <Link to="/ui-ux-designing">
                        <span className="flex items-center gap-2 ">
                          <TbPlayerTrackNext className="fill-white text-white   hover:text-green-500 hover:fill-green-500" />
                          UI/UX Designing
                        </span>
                      </Link>
                    </h2>
                  </div>
                </div>
                {/* First Row Ends */}

                {/* Second Row */}
                <div className="flex flex-wrap flex-col m-2 border-r-2 py-4">
                  <div className="mx-4">
                    <h2 className="font-subheading md:text-sm text-xs">
                      <Link to="/staff-augmentation">Staff Augmentation</Link>
                    </h2>
                    <ul className="text-sm font-subheading list-inside list-none capitalize">
                      <li>
                        <Link to="/hire-react-js-developer">
                          <span className="flex items-center gap-2  text-white fill-white">
                            <AiFillCaretRight className="fill-white text-white   hover:text-green-500 hover:fill-green-500" />
                            Hire Reactjs Developer
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/hire-node-js-developer">
                          <span className="flex items-center gap-2  text-white fill-white">
                            <AiFillCaretRight className="    fill-white text-white   hover:text-green-500 hover:fill-green-500" />
                            Hire Node.js Developer
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/hire-android-developer">
                          <span className="flex items-center gap-2  text-white fill-white">
                            <AiFillCaretRight className="    fill-white text-white   hover:text-green-500 hover:fill-green-500" />
                            Hire Android Developer
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/hire-ios-developer">
                          <span className="flex items-center gap-2  text-white fill-white">
                            <AiFillCaretRight className="    fill-white text-white   hover:text-green-500 hover:fill-green-500" />
                            Hire IOS Developer
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/hire-flutter-developer">
                          <span className="flex items-center gap-2  text-white fill-white">
                            <AiFillCaretRight className="    fill-white text-white   hover:text-green-500 hover:fill-green-500" />
                            Hire Flutter Developer
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/hire-laravel-developer">
                          <span className="flex items-center gap-2  text-white fill-white">
                            <AiFillCaretRight className="    fill-white text-white   hover:text-green-500 hover:fill-green-500" />
                            Hire Laravel Developer
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/hire-codeIgniter-developer">
                          <span className="flex items-center gap-2  text-white fill-white">
                            <AiFillCaretRight className="    fill-white text-white   hover:text-green-500 hover:fill-green-500" />
                            Hire CodeIgniter Developer
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/hire-angular-developer">
                          <span className="flex items-center gap-2  text-white fill-white">
                            <AiFillCaretRight className="    fill-white text-white   hover:text-green-500 hover:fill-green-500" />
                            Hire Angular Developer
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/hire-dotnet-developer">
                          <span className="flex items-center gap-2  text-white fill-white">
                            <AiFillCaretRight className="    fill-white text-white   hover:text-green-500 hover:fill-green-500" />
                            Hire .Net Developer
                          </span>
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
                      <p>+91 9826906988</p>
                      <p>+91 8839697183</p>
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
          //   className={`
          //   ${heading === 'Services' ? 'hidden' : 'md:hidden'}
          // (setTimeout(() => setShowModal(true), 1000))`}
          className={`
          ${heading === 'Services' ? 'hidden' : 'md:hidden'}
        `}
        >
          {/* sublinks */}

          <div>
            <div>
              <h2
                onClick={() =>
                  subHeading !== slinks.Head
                    ? setSubHeading(slinks.Head)
                    : setSubHeading('')
                }
                className="py-2 pl-2 font-heading md:pr-0 pr-5 flex justify-between items-center text-white "
              >
                <div className="flex flex-wrap flex-col m-2">
                  <div className="mt-[5px] ">
                    <h2 className="font-heading text-sm">
                      <Link to="/web-development">Web Development</Link>
                    </h2>
                  </div>
                  <div className="mt-[5px] ">
                    <h2 className="font-heading text-sm">
                      <Link to="/software-development">
                        Software Development
                      </Link>
                    </h2>
                  </div>
                  <div className="mt-[5px] ">
                    <h2 className="font-heading text-sm">
                      <Link to="/https://digitalmarketing.cerbosys.com/">Digital Marketing</Link>
                    </h2>
                  </div>

                  <div className="mt-[8px]">
                    <h2 className="font-heading text-sm">
                      <Link to="/mobile-app-development">
                        Mobile Development
                      </Link>
                    </h2>
                  </div>
                  <div className="mt-[8px]">
                    <h2 className="font-heading  text-sm ">
                      <Link to="/ui-ux-designing"> UI/UX Designing</Link>
                    </h2>
                  </div>
                  <div className="mt-[8px]">
                    <h2 className="font-heading text-sm">
                      <Link to="/lead-generation">Lead Generation</Link>
                    </h2>
                    <h2 className="mt-[8px] font-heading text-sm">
                      <Link to="/branding-and-packaging">
                        Branding And Packaging
                      </Link>
                    </h2>
                  </div>

                  <div className="mt-[5px]">
                    <Link to="/staff-augmentation">
                      <h2 className="font-heading text-sm">
                        Staff Augmentation
                      </h2>
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
              </h2>
              <div
                className={`${
                  subHeading === slinks.Head ? 'md:hidden' : 'hidden'
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
