import React, { useState } from 'react';
import callicon from '../../../assets/footer/FooterWhatsp.svg';
import emailicon from '../../../assets/footer//FooterEmail.svg';
import fbcon from '../../../assets/footer/Facebook.svg';
import instagramicon from '../../../assets/footer/Instagram.svg';
import linkedinicon from '../../../assets/footer/Linkdin_footer.svg';
import locationicon from '../../../assets/footer/FooterLoction.svg';
import twittericon from '../../../assets/footer/Twittter.svg';
import whatsappicon from '../../../assets/footer/FoterColl.svg';
import youtubeicon from '../../../assets/footer/Youtube.svg';
import footerlogo from '../../../assets/footer/FooterLogosCer.svg';
import { HiOutlineArrowSmRight } from 'react-icons/hi';
import right from '../../../assets/footer/right.svg';
import left from '../../../assets/footer/left.svg';
import { Link } from 'react-router-dom';
import MovingComponent from 'react-moving-text';
const Footer = () => {
  // animation start
  const AnimationsForChaining = ['unfold'];
  const [animationIndex, setAnimationIndex] = useState(0);
  const [animationType, setAnimationType] = useState(AnimationsForChaining[0]);

  const handleChainAnimation = () => {
    setAnimationIndex(animationIndex + 1);
    setAnimationType([animationIndex + 1]);
  };
  // animation end
  return (
    <div>
      {/* py-4 px-20 */}
      <div className="bg-FooterBackground w-full h-full mx-auto px-5 py-2  md:px-20 md:py-4">
        <div className="max-w-[1240px] mx-auto">
          <div className="">
            {/* <div className="grid md:grid-cols-5 gap-2"> */}
            {/* First Col */}
            {/* <div>   
              <img
                src={footerlogo}
                alt="Logo Footer"
                className="w-[350px] h-[200px]"
              />
              <h1 className="font-heading  text-sm md:text-lg text-white">
                About Us
              </h1>
              <p className="font-content text-gray-400 md:text-sm text-xs font-extrabold  ">
                Cerbosys is an experienced professional services provider
                company with a proven track record of excellence which fosters
                long-term relationships with our clients.
                <br></br>
                <br></br>
                Our ability to understand and problem-solve complex client
                issues in multiple business areas helps us differentiate in the
                services sector. Our mission is to ensure consistent growth in
                the performance of our clients.
              </p>
            </div> */}
            {/* First Col Ends */}
            <div className="md:col-span-2 col-span-1 flex-col-reverse  flex  md:flex-row  md:justify-around md:items-center items-center md:m-2 md:mt-5 md:gap-20 mt-3 gap-10  ">
              <div className="text-white flex font-heading uppercase  sm:mb-3 mb-0 sm:text-2xl lg:text-2xl xl:text-3xl  w-full ">
                <MovingComponent
                  onAnimationEnd={handleChainAnimation}
                  type={animationType}
                  duration="1000ms"
                  timing="linear"
                  fillMode="forwards"
                  iteration={1}
                >
                  {/* <span className="whitespace-nowrap flex ">
        <img src={left} alt="" className="w-10 h-10 mr-3" /> Enabling Business Make Business <img src={right} alt="" className="w-10 h-10 ml-3" />  
        </span> */}
                  "Enabling Business Make Business"
                </MovingComponent>
                {/* " Enabling Business Make Business " */}
              </div>{' '}
              <div className="flex">
                <img
                  src={footerlogo}
                  alt="Logo Footer"
                  className="w-[350px] h-[200px]"
                />
              </div>
            </div>
            {/* md:gap-20 md:gap-20*/}
            {/* Main Div of all three columns */}
            <div
              className="md:col-span-4 flex flex-wrap
              md:justify-between 
            md:m-3 md:mt-5  mt-3 "
            >
              {/* md:justify-between justify-center 
              md:items-center items-center  */}
              {/* Second Column */}
              <div className="">
                <h6 className="font-heading text-sm md:text-lg text-white uppercase mb-3 md:px-0 max-w-fit">
                  Explore
                  <div className="block rounded-md h-[8px] bg-white justify-center m-auto mt-3">
                    <span className="animate-waving-hand block w-12 rounded-md h-[8px] bg-Green justify-center m-auto mt-3 "></span>
                  </div>
                </h6>
                <ul className="text-white font-subheading text-xs ">
                  <li className="">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="">
                    <Link to="/overview">Company</Link>
                  </li>
                  {/* <li className="">Services</li>
                  <li className="">Industries</li>
                  <li className="">Case Study</li>
                  <li className="">Blog</li> */}
                  <li className="">
                    <Link to="/team">Team</Link>
                  </li>
                  <li className="">
                    <Link to="/contact-us">Contact Us</Link>
                  </li>
                  <li className="">
                    <Link to="/whitepapers">whitepapers</Link>
                  </li>
                  <li className="">
                    <Link to="/blog">Blogs</Link>
                  </li>
                  <li className="">
                    <Link to="/about-us">About US</Link>
                  </li>
                  <li className="">
                    <Link to="/terms-conditions">Terms & Conditions</Link>
                  </li>
                  <li className="">
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
              <div className="">
                <h6 className="font-heading text-sm md:text-lg text-white uppercase mb-3 md:px-0 max-w-fit">
                  Company
                  <div className="block rounded-md h-[8px] bg-white justify-center m-auto mt-3">
                    <span className="animate-waving-hand block w-12 rounded-md h-[8px] bg-Green justify-center m-auto mt-3 "></span>
                  </div>
                </h6>
                <ul className="text-white font-subheading text-xs ">
                  <li className="">
                    <Link to="/overview">Overview</Link>
                  </li>
                  <li className="">
                    <Link to="/training-and-development">
                      Traing and development
                    </Link>
                  </li>
                  {/* <li className="">Services</li>
                  <li className="">Industries</li>
                  <li className="">Case Study</li>
                  <li className="">Blog</li> */}
                  <li className="">
                    <Link to="/team">Team</Link>
                  </li>
                  <li className="">
                    <Link to="/life-at-cerbosys">Life @ Cerbosys</Link>
                  </li>
                  <li className="">
                    <Link to="/diversity-at-cerbosys">Deversity Cerbosys</Link>
                  </li>
                  <li className="">
                    <Link to="/testimonial">Testimonial</Link>
                  </li>
                </ul>
              </div>

              {/* Second Column Ends */}

              {/* Third Column */}

              <div>
                <h6 className="font-heading text-sm md:text-lg text-white uppercase mb-3  w-full max-w-fit">
                  Services
                  <div className="block rounded-md h-[8px] bg-white justify-center m-auto mt-3">
                    <span className="animate-waving-hand block w-12 rounded-md h-[8px] bg-Green justify-center m-auto mt-3 "></span>
                  </div>
                </h6>

                <ul className="text-white font-subheading text-xs">
                  <li className="">
                    <Link to="/web-development">Web Development</Link>
                  </li>
                  <li className="">
                    <Link to="/software-development">
                      {' '}
                      Software Development
                    </Link>
                  </li>
                  <li className="">
                    <Link to="/staff-augmentation">Staff Augmentation</Link>
                  </li>
                  <li className="">
                    <Link to="/mobile-app-development">Mobile Development</Link>
                  </li>
                  <li className="">
                    <Link to="/ui-ux-designing">UI/UX Designing</Link>
                  </li>
                  <li className="">
                    <Link to="/digital-marketing">Digital Marketing</Link>
                  </li>
                  <li className="">
                    <Link to="/branding-and-packaging">
                      Brand And Packaging
                    </Link>
                  </li>
                  <li className="">
                    <Link to="/lead-generation">Lead Generation</Link>
                  </li>
                  <br></br>
                  <br></br>
                </ul>
              </div>
              {/* Third Column Ends*/}

              {/* Fourth Column */}
              {/* Industry Div */}
              <div>
                <h6 className="font-heading text-white text-sm md:text-lg  mb-3 uppercase max-w-fit">
                  Industries
                  <div className="block rounded-md h-[8px] bg-white justify-center m-auto mt-3">
                    <span className="animate-waving-hand ease-in-out duration-300  block w-12 rounded-md h-[8px] bg-Green justify-center m-auto mt-3 "></span>
                  </div>
                </h6>

                <ul className="text-white font-subheading text-xs">
                  <li className="">
                    <Link to="/agriculture">Agriculture</Link>
                  </li>
                  <li className="">
                    <Link to="/ecommerce-development-services">
                      Ecommerce And Retail
                    </Link>
                  </li>
                  <li className="">
                    <Link to="/health-care">Healthcare And Life Science</Link>
                  </li>
                  <li className="">
                    <Link to="/banking-and-finance">Banking And Finance</Link>
                  </li>
                  <li className="">
                    <Link to="/mining">Mining</Link>
                  </li>
                  <li className="">
                    <Link to="/transport-and-logistics">
                      Transport And Logistics
                    </Link>
                  </li>
                  <li className="flex">
                    <Link
                      to="/education "
                      // className="inline-flex  transition duration-150 all-in-out"
                    >
                      Education
                    </Link>
                  </li>
                  <li className="">
                    <Link to="/real-estate">Real Estate And Construction</Link>
                  </li>
                  <li className="">
                    <Link to="/manufacturing">Manufacturing</Link>
                  </li>
                  <br></br>
                </ul>
              </div>
              {/* Industry Div Ends*/}

              {/* Fourth Column Ends */}

              {/* Fifth Column */}
              <div className=" ">
                <h6 className="font-heading text-lg text-white uppercase  mb-3 max-w-fit">
                  Contact Us
                  <div className="block rounded-md h-[8px] bg-white justify-center m-auto mt-3">
                    <span className="animate-waving-hand block w-12 rounded-md h-[8px] bg-Green justify-center m-auto mt-3 "></span>
                  </div>
                </h6>

                <div className="flex flex-row mb-5 md:w-64 w-64">
                  <img
                    src={locationicon}
                    alt="Location Icon"
                    className="mr-3"
                  ></img>
                  <span className="font-subheading text-sm text-white">
                    15, Lakshya Vihar,kanadia Road, Indore, M.P.-452016
                  </span>
                </div>

                <div className="flex flex-row mb-5">
                  <img src={callicon} alt="Call Icon" className="mr-3"></img>
                  <span className="font-subheading text-sm text-white">
                    +91 9826906988
                  </span>
                </div>

                <div className="flex flex-row mb-5 w-72">
                  <img
                    src={whatsappicon}
                    alt="What'sApp Icon"
                    className="mr-3"
                  ></img>
                  <span className="font-subheading text-sm text-white">
                    +91 9826906988, &nbsp;88-3969-7183
                  </span>
                </div>

                <div className="flex flex-row mb-5">
                  <img src={emailicon} alt="Email Icon" className="mr-3"></img>
                  <span className="font-subheading text-sm text-white">
                    info@cerbosys.com
                  </span>
                </div>
                <br />
                <br />
                <br></br>
              </div>

              {/* Fifth Column Ends*/}
            </div>
            {/* Main div of inside */}
          </div>
          {/* Grid Div Ends */}

          {/* Contact Us Div */}
          {/* <div className="mt-5 ">
            <h6 className="font-heading text-lg text-white uppercase grid grid-flow-row mb-3">
              Contact Us
            </h6>

            <div className="flex flex-row mb-5 md:w-64 w-64">
              <img
                src={locationicon}
                alt="Location Icon"
                className="mr-3"
              ></img>
              <span className="font-subheading text-sm text-white">
                15-16, Lakshya Vihar,kanadia Road, Indore, M.P.-452016
              </span>
            </div>

            <div className="flex flex-row mb-5">
              <img src={callicon} alt="Call Icon" className="mr-3"></img>
              <span className="font-subheading text-sm text-white">
                0731-499-3-444
              </span>
            </div>

            <div className="flex flex-row mb-5 w-72">
              <img
                src={whatsappicon}
                alt="What'sApp Icon"
                className="mr-3"
              ></img>
              <span className="font-subheading text-sm text-white">
                999-999-2892, &nbsp;88-3969-7183
              </span>
            </div>

            <div className="flex flex-row mb-5">
              <img src={emailicon} alt="Email Icon" className="mr-3"></img>
              <span className="font-subheading text-sm text-white">
                info@cerbosys.com
              </span>
            </div>
          </div> */}
          {/* Contact Us Div Ends*/}

          {/* Social Icons Div */}
          <div className="flex flex-row items-center justify-center mt-20 gap-2 mb-4">
            <a
              href="https://www.facebook.com/cerbosystech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={fbcon}
                alt="Facebook Icon"
                className="md:w-[40px] md:h-[40px] w-[25px] h-[25px] scale-100 hover:scale-125 ease-out duration-500"
              />
            </a>
            <a
              href="https://www.instagram.com/cerbosys"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagramicon}
                alt="Facebook Icon"
                className="md:w-[40px] md:h-[40px] w-[25px] h-[25px] scale-100 hover:scale-125 ease-out duration-500"
              />
            </a>
            <a
              href="https://twitter.com/CerbosysTech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={twittericon}
                alt="Facebook Icon"
                className="md:w-[40px] md:h-[40px] w-[25px] h-[25px] scale-100 hover:scale-125 ease-out duration-500"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/cerbosys"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedinicon}
                alt="Facebook Icon"
                className="md:w-[40px] md:h-[40px] w-[25px] h-[25px] scale-100 hover:scale-125 ease-out duration-500"
              />
            </a>
            <img
              src={youtubeicon}
              alt="Facebook Icon"
              className="md:w-[40px] md:h-[40px] w-[25px] h-[25px] scale-100 hover:scale-125 ease-out duration-500"
            />
          </div>

          {/* Social Icons Div Ends*/}
        </div>
        <hr></hr>
        <div className="font-heading text-center text-white md:text-sm text-xs mt-2">
          &copy; Cerbosys Technologies Inc. All rights reserved
        </div>
        {/* Max Width Div Ends */}
      </div>
    </div>
  );
};

export default Footer;
