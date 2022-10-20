import React from "react";
import Contact from "../../../Common/Component/Contact";
import contacticon from "../../../../assets/contactus/icon_contact.svg";
import logo from '../../../../assets/footer/Logo_in_footer.svg'
import callicon from "../../../../assets/footer/call_icon.svg";
import emailicon from "../../../../assets/footer/email_icon.svg";

const ContactUsBody = () => {
  return (
    <div>
      <div className="bg-ContactLeaf mx-auto w-full py-16 px-2 justify-center items-center bg-no-repeat bg-center">
        <div className="max-w-[1240px] mx-auto">
          {/* heading */}
          <div className="text-center items-center justify-center">
            <p className="font-heading md:text-3xl text-lg">
              Give us a shout, we’ll make it worth it…
            </p>
          </div>
          {/* heading Ends */}

          <div className="flex flex-wrap flex-row">
            <div className="grid md:grid-cols-2 mb-4 mt-10 md:w-10/12 mx-auto">
              {/* Form Section */}
              <div className="bg-white px-10 py-5 rounded-tl-xl rounded-bl-xl">
                <div>
                  {/* <h1 className="font-heading md:text-lg">Get in touch</h1>
                  <p className="font-subheading py-2 md:text-lg text-xs mb-8">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Iusto odio veritatis cumque debitis quam. Illum,
                    reprehenderit.
                  </p> */}

                  <Contact />
                </div>
              </div>
              {/* Form Section Ends*/}

              {/* Contact Details Section */}
              <div className="bg-Primary rounded-tr-xl rounded-br-xl pb-10 flex flex-wrap items-center">
                {/* <h1 className="font-heading text-sm md:text-xl md:mx-20 mx-10 md:w-12 mt-10 text-white">
                  Contact Information
                </h1> */}
                {/* First Card */}
                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white md:w-80 w-72 mt-10 md:mx-20 mx-5 h-64">
                  <div className="px-8 py-8 flex flex-wrap">
                    {/* <img src={contacticon} alt="" className="px-5" /> */}
                    <h1 className="font-heading md:text-xl text-lg mt-1">
                      For Business Enquiries
                    </h1>
                    <div className="flex flex-row">
                      <img
                        src={callicon}
                        alt="Call Icon"
                        className="mr-3 md:w-10 md:h-10 mt-4"
                      ></img>
                      <span className="font-subheading md:text-lg text-sm text-black mt-5">
                        0731-499-34-44<br></br>
                        999-999-2892<br></br> 883-969-7183
                      </span>
                      </div>

                      <div className="flex flex-row mb-4">
                      <img
                        src={emailicon}
                        alt="Email Icon"
                        className="mr-3 md:w-10 md:h-10 mt-4"
                      ></img>
                      <span className="font-subheading md:text-lg text-sm text-black mt-5">
                        info@cerbosys.com
                      </span>           
                    </div>

                  </div>
                </div>

                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white w-80 mt-10 md:mx-20 mx-10 h-48">
                  <div className="px-8 py-8 flex flex-wrap">
                    {/* <img src={contacticon} alt="" className="px-5" /> */}
                    <h1 className="font-heading md:text-xl text-lg mt-1">
                      To Join Our Team
                    </h1>

                    <div className="flex flex-row">
                      <img
                        src={callicon}
                        alt="Call Icon"
                        className="mr-3 md:w-10 md:h-10 mt-4"
                      ></img>
                      <span className="font-subheading md:text-lg text-sm text-black mt-5">
                        0731-499-34-44                        
                      </span>
                      </div>
                    <div className="flex flex-row">
                      <img
                        src={emailicon}
                        alt="Email Icon"
                        className="mr-3 md:w-10 md:h-10 mt-4"
                      ></img>
                      <span className="font-subheading md:text-lg text-sm text-black mt-5">
                        career@cerbosys.com
                      </span>           
                    </div>
                  </div>
                </div>

                {/* <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white w-80 mt-10 md:mx-20 mx-10 h-32">
                  <div className="px-8 py-8 flex flex-wrap">
                    <img src={contacticon} alt="" className="px-5" />
                    <h1 className="font-heading md:text-xl text-lg mt-4">
                      Contact Details
                    </h1>
                  </div>
                </div> */}
              </div>
              {/* Contact Details Section Ends*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsBody;
