import React from "react";
import Contact from "../../../Common/Component/Contact";
import contacticon from '../../../../assets/contactus/icon_contact.svg'

const ContactUsBody = () => {
  return (
    <div>
      <div className="bg-ContactLeaf mx-auto w-full py-16 px-2 justify-center items-center bg-no-repeat bg-center">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex flex-wrap flex-row">
            <div className="grid md:grid-cols-2 mb-4 mt-10 md:w-10/12 mx-auto">
          {/* Form Section */}
              <div className="bg-white px-10 py-5 rounded-tl-xl rounded-bl-xl">                
                <div>
                  <h1 className="font-heading md:text-lg">Get in touch</h1>
                  <p className="font-subheading py-2 md:text-lg text-xs mb-8">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Iusto odio veritatis cumque debitis quam. Illum,
                    reprehenderit.
                  </p>
                  <Contact />
                </div>
                </div>
                {/* Form Section Ends*/}

              
                 
                
             
                {/* Contact Details Section */}
              <div className="bg-Primary rounded-tr-xl rounded-br-xl pb-10 flex flex-wrap items-center">

                <h1 className="font-heading text-sm md:text-xl md:mx-20 mx-10 md:w-12 mt-10 text-white">Contact Information</h1>
              {/* First Card */}
              <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white w-80 mt-10 md:mx-20 mx-10 h-32">
                <div className="px-8 py-8 flex flex-wrap">
                  <img src={contacticon} alt="" className="px-5" />
                  <h1 className="font-heading md:text-xl text-lg mt-4">Contact Details</h1>
                </div>
              </div>

              <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white w-80 mt-10 md:mx-20 mx-10 h-32">
              <div className="px-8 py-8 flex flex-wrap">
                  <img src={contacticon} alt="" className="px-5" />
                  <h1 className="font-heading md:text-xl text-lg mt-4">Contact Details</h1>
                </div>
              </div>
                    
              <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white w-80 mt-10 md:mx-20 mx-10 h-32">
              <div className="px-8 py-8 flex flex-wrap">
                  <img src={contacticon} alt="" className="px-5" />
                  <h1 className="font-heading md:text-xl text-lg mt-4">Contact Details</h1>
                </div>
              </div>
                  
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
