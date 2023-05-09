import React from 'react';
import Contact from '../../../Common/Component/Contact';
import calling from '../../../../assets/contactus/calling.gif';
import email from '../../../../assets/contactus/email.gif';
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
                 

                  <Contact />
                </div>
              </div>
              {/* Form Section Ends*/}

              {/* Contact Details Section */}
              <div className="bg-Primary justify-center rounded-tr-xl rounded-br-xl pb-10 flex flex-wrap items-center">
             
                {/* First Card  md:mx-20 mx-5*/}
                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white w-80   mt-10 h-64">
                  <div className="px-8 py-8 flex flex-wrap">
                    {/* <img src={contacticon} alt="" className="px-5" /> */}
                    <h2 className="font-heading md:text-xl text-lg mt-1">
                      For Business Enquiries
                    </h2>
                    <div className="flex flex-row">
                      <img
                        src={calling}
                        alt="Call Icon"
                        className="mr-3 w-[55px] mt-4"
                      ></img>
                      <span className="font-subheading md:text-lg text-sm text-black mt-5">
                        +91 9826906988<br></br>
                        +91 8839697183
                      </span>
                    </div>

                    <div className="flex flex-row mb-4">
                      <img
                        src={email}
                        alt="Email Icon"
                        className="mr-3 w-[55px]  mt-4"
                      ></img>
                      <span className="font-subheading md:text-lg text-sm text-black mt-5">
                        info@cerbosys.com
                      </span>
                    </div>
                  </div>
                </div>

                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white w-80  mt-10  h-52">
                  <div className="px-8 py-8 flex flex-wrap">
                
                    <h2 className="font-heading md:text-xl text-lg mt-1">
                      To Join Our Team
                    </h2>
                    <div className="flex flex-row">
                      <img
                        src={calling}
                        alt="Call Icon"
                        className="mr-3 w-[55px]  mt-4"
                      />
                      <span className="font-subheading md:text-lg text-sm text-black mt-5">
                        +91 8817922577 <br /> 0731-499-34-44
                      </span>
                    </div>
                    <div className="flex flex-row">
                      <img
                        src={email}
                        alt="Email Icon"
                        className="mr-3 w-[55px] mt-4"
                      />
                      <span className="font-subheading md:text-lg text-sm text-black mt-5">
                        career@cerbosys.com
                      </span>
                    </div>
                    
              {/* Contact Details Section Ends*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsBody;
