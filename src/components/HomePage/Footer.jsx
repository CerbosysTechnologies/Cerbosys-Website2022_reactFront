import React from "react";
import callicon from "../../assets/footer/call_icon.svg";
import emailicon from "../../assets/footer/email_icon.svg";
import fbcon from "../../assets/footer/Facebook.svg";
import instagramicon from "../../assets/footer/Instagram.svg";
import linkedinicon from "../../assets/footer/Linkedin.svg";
import locationicon from "../../assets/footer/Location_icon.svg";
import twittericon from "../../assets/footer/Twittter.svg";
import whatsappicon from "../../assets/footer/Whatsapp_icon.svg";
import youtubeicon from "../../assets/footer/Youtube.svg";
import footerlogo from "../../assets/footer/Logo_in_footer.svg";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#24262A] w-full h-full mx-auto py-4 px-24">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid md:grid-cols-4 gap-5">
            {/* First Col */}
            <div>
              <img
                src={footerlogo}
                alt="Logo Footer"
                className="w-[150px] h-[150px]"
              />
              <h1 className="font-heading  text-sm md:text-lg text-white">
                About Us
              </h1>
              <p className="font-content text-gray-400 md:text-sm text-xs">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aspernatur adipisci mollitia iste consectetur exercitationem
                voluptatibus neque deserunt! Vel, cumque amet! Voluptates iure
                expedita animi veritatis sunt soluta perspiciatis tempora illo!
              </p>
            </div>
            {/* First Col Ends */}
            {/* Main Div of all three columns */}
            <div className="md:col-span-3 flex flex-wrap justify-center m-3 mt-16 gap-4">
              {/* Second Column */}
              <div>
                <h6 className="font-heading text-lg text-white uppercase mb-3">
                  Explore
                </h6>
                <ul className="text-gray-400 font-subheading text-xs grid md:grid-cols-2 pr-3">
                  <li className="col-start-1">Home</li>
                  <li className="col-start-1">Company</li>
                  <li className="col-start-1">Services</li>
                  <li className="col-start-1">Industries</li>
                  <li className="col-start-1">Case Study</li>
                  <li className="col-start-1">Blog</li>
                  <li className="col-start-2 row-start-1">Team</li>
                  <li className="col-start-2 row-start-2">Contact Us</li>
                </ul>
              </div>

              {/* Second Column Ends */}

              {/* Third Column */}

              <div>
                <h6 className="font-heading text-lg text-white uppercase mb-3">
                  Services
                </h6>
                <ul className="text-gray-400 font-subheading text-xs pr-6">
                  <li className="">Web Development</li>
                  <li className="">Staff Augmentation</li>
                  <li className="">Mobile Development</li>
                  <li className="">UI/UX Development</li>
                  <li className="">Digital Marketing</li>
                  <li className="">Digital Marketing</li>
                  <li className="">Brand And Packiging</li>
                  <li className="">Lead Generation</li>
                </ul>
              </div>
              {/* Third Column Ends*/}

              {/* Fourth Column */}

              <div>
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
                    07314993444
                  </span>
                </div>

                <div className="flex flex-row mb-5">
                  <img
                    src={whatsappicon}
                    alt="What'sApp Icon"
                    className="mr-3"
                  ></img>
                  <span className="font-subheading text-sm text-white">
                    07314993444
                  </span>
                </div>

                <div className="flex flex-row mb-5">
                  <img src={emailicon} alt="Email Icon" className="mr-3"></img>
                  <span className="font-subheading text-sm text-white">
                    info@cerbosys.com
                  </span>
                </div>
              </div>

              {/* Fourth Column Ends */}
            </div>
            {/* Main div of inside */}
          </div>
          {/* Grid Div Ends */}


          {/* Industry Div */}
          <div>
            <h1 className="font-heading text-white text-sm md:text-lg mb-3 mt-10">
              Industries
            </h1>
        
                <ul className="text-gray-400 font-subheading text-xs grid md:grid-cols-8 pr-6">
                  <li className="col-start-1">Agriculture</li>
                  <li className="col-start-1 col-span-2">Ecommerce And Retail</li>
                  <li className="col-start-1 col-span-2">Healthcare And Life Science</li>
                  <li className="col-start-1">Banking And Finance</li>
                  <li className="col-start-1">Mining</li>
                  <li className="col-start-1 col-span-2">Transport And Logistics</li>
                  <li className="col-start-1">Education</li>
                  <li className="col-start-3 row-start-1 col-span-2">Real Estate And Construction</li>
                  <li className="col-start-3 row-start-2">Manufacturing</li>
                </ul>
          </div>
          {/* Industry Div Ends*/}

        {/* Social Icons Div */}
        <div>

        </div>

        
        {/* Social Icons Div Ends*/}
        <div className="flex flex-row items-center justify-center mt-20 gap-2">
            <img src={fbcon} alt="Facebook Icon" className="md:w-[40px] md:h-[40px] w-[25px] h-[25px]"/>
            <img src={instagramicon} alt="Facebook Icon" className="md:w-[40px] md:h-[40px] w-[25px] h-[25px]"/>
            <img src={twittericon} alt="Facebook Icon" className="md:w-[40px] md:h-[40px] w-[25px] h-[25px]"/>
            <img src={linkedinicon} alt="Facebook Icon" className="md:w-[40px] md:h-[40px] w-[25px] h-[25px]"/>
            <img src={youtubeicon} alt="Facebook Icon" className="md:w-[40px] md:h-[40px] w-[25px] h-[25px]"/>
        </div>

        </div>
        {/* Max Width Div Ends */}
      </div>
    </div>
  );
};

export default Footer;
