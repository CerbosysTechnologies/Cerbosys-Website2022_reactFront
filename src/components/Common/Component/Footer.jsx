import React from "react";
import callicon from "../../../assets/footer/call_icon.svg";
import emailicon from "../../../assets/footer/email_icon.svg";
import fbcon from "../../../assets/footer/facebook.svg";
import instagramicon from "../../../assets/footer/Instagram.svg";
import linkedinicon from "../../../assets/footer/Linkedin.svg";
import locationicon from "../../../assets/footer/Location_icon.svg";
import twittericon from "../../../assets/footer/Twittter.svg";
import whatsappicon from "../../../assets/footer/Whatsapp_icon.svg";
import youtubeicon from "../../../assets/footer/youtube.svg";
import footerlogo from "../../../assets/footer/logo_white.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="bg-FooterBackground w-full h-full mx-auto py-4 px-24">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid md:grid-cols-4 gap-4">
            {/* First Col */}
            <div>
              <img
                src={footerlogo}
                alt="Logo Footer"
                className="w-[250px] h-[200px]"
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
            </div>
            {/* First Col Ends */}
            {/* Main Div of all three columns */}
            <div className="md:col-span-3 flex flex-wrap md:justify-center md:items-center md:m-3 md:mt-16 md:gap-24 gap-6">
              {/* Second Column */}
              <div className="">
                <h6 className="font-heading text-sm md:text-lg text-white uppercase mb-3 md:px-0 ">
                  Explore
                </h6>
                <ul className="text-white font-subheading text-xs ">
                  <li className="">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="">
                    <Link to="/Overview">Company</Link>
                  </li>
                  {/* <li className="">Services</li>
                  <li className="">Industries</li>
                  <li className="">Case Study</li>
                  <li className="">Blog</li> */}
                  <li className="">
                    <Link to="/Team">Team</Link>
                  </li>
                  <li className="">
                    <Link to="/ContactUs">Contact Us</Link>
                  </li>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                </ul>
              </div>

              {/* Second Column Ends */}

              {/* Third Column */}

              <div>
                <h6 className="font-heading text-sm md:text-lg text-white uppercase mb-3">
                  Services
                </h6>
                <ul className="text-white font-subheading text-xs">
                  <li className="">
                    <Link to="/WebDevelopment">Web Development</Link>
                  </li>
                  <li className="">
                    <Link to="/StaffAugmentation">Staff Augmentation</Link>
                  </li>
                  <li className="">
                    <Link to="/MobileDevelopment">Mobile Development</Link>
                  </li>
                  <li className="">
                    <Link to="/UIAndUX">UI/UX Development</Link>
                  </li>
                  <li className="">
                    <Link to="/DigitalMarketing">Digital Marketing</Link>
                  </li>
                  <li className="">
                    <Link to="/BrandingAndPackaging">Brand And Packaging</Link>
                  </li>
                  <li className="">
                    <Link to="/LeadGeneration">Lead Generation</Link>
                  </li>
                  <br></br>
                  <br></br>
                </ul>
              </div>
              {/* Third Column Ends*/}

              {/* Fourth Column */}
              {/* Industry Div */}
              <div>
                <h1 className="font-heading text-white text-sm md:text-lg mb-3 uppercase">
                  Industries
                </h1>

                <ul className="text-white font-subheading text-xs">
                  <li className="">Agriculture</li>
                  <li className="">Ecommerce And Retail</li>
                  <li className="">Healthcare And Life Science</li>
                  <li className="">Banking And Finance</li>
                  <li className="">Mining</li>
                  <li className="">Transport And Logistics</li>
                  <li className="">Education</li>
                  <li className="">Real Estate And Construction</li>
                  <li className="">Manufacturing</li>
                </ul>
              </div>
              {/* Industry Div Ends*/}

              {/* Fourth Column Ends */}
            </div>
            {/* Main div of inside */}
          </div>
          {/* Grid Div Ends */}

          {/* Contact Us Div */}
          <div className="mt-5">
            <h6 className="font-heading text-lg text-white uppercase grid grid-flow-row mb-3">
              Contact Us
            </h6>

            <div className="flex flex-row mb-5 md:w-64">
              <img
                src={locationicon}
                alt="Location Icon"
                className="mr-3"
              ></img>
              <span className="font-subheading text-sm text-white">
                15-16, Lakshya Vihar,Vaibhav Nagar, Indore (MP) 452016
              </span>
            </div>

            <div className="flex flex-row mb-5">
              <img src={callicon} alt="Call Icon" className="mr-3"></img>
              <span className="font-subheading text-sm text-white">
                0731-499-34-44
              </span>
            </div>

            <div className="flex flex-row mb-5">
              <img
                src={whatsappicon}
                alt="What'sApp Icon"
                className="mr-3"
              ></img>
              <span className="font-subheading text-sm text-white">
                999-999-2892, 883-969-7183
              </span>
            </div>

            <div className="flex flex-row mb-5">
              <img src={emailicon} alt="Email Icon" className="mr-3"></img>
              <span className="font-subheading text-sm text-white">
                info@cerbosys.com
              </span>
            </div>
          </div>
          {/* Contact Us Div Ends*/}

          {/* Social Icons Div */}

          <div className="flex flex-row items-center justify-center mt-20 gap-2 mb-2">
            <a href="https://www.facebook.com/cerbosystech/" target="_blank">
              <img
                src={fbcon}
                alt="Facebook Icon"
                className="md:w-[40px] md:h-[40px] w-[25px] h-[25px]"
              />
            </a>
            <a href="https://www.instagram.com/cerbosys/?hl=en" target="_blank">
              <img
                src={instagramicon}
                alt="Facebook Icon"
                className="md:w-[40px] md:h-[40px] w-[25px] h-[25px]"
              />
            </a>

            <a href="https://twitter.com/CerbosysTech" target="_blank">
              <img
                src={twittericon}
                alt="Twitter Icon"
                className="md:w-[40px] md:h-[40px] w-[25px] h-[25px]"
              />
            </a>

            <a href="https://in.linkedin.com/company/cerbosys" target="_blank">
              <img
                src={linkedinicon}
                alt="LinkedIn Icon"
                className="md:w-[40px] md:h-[40px] w-[25px] h-[25px]"
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCUXbH7ByTAyE0D8ZgAL5Muw?app=desktop"
              target="_blank"
            >
              <img
                src={youtubeicon}
                alt="Youtube Icon"
                className="md:w-[40px] md:h-[40px] w-[25px] h-[25px]"
              />
            </a>
          </div>

          {/* Social Icons Div Ends*/}
          <hr></hr>
          <div className="flex flex-row items-center justify-center mt-2 gap-2 text-white font-heading text-sm text-center">
            &copy;2022 Cerbosys Technologies Inc. <br></br>All Rights Reserved.
          </div>
        </div>
        {/* Max Width Div Ends */}
      </div>
    </div>
  );
};

export default Footer;
