import React from 'react';

import newphone from '../../../../assets/innerpage/ecommerce/newphone.png';

import fourthmob from '../../../../assets/innerpage/ecommerce/fourthmob.png';
import thirdmob from '../../../../assets/innerpage/ecommerce/thirdmob.png';
import secondmob from '../../../../assets/innerpage/ecommerce/seconmob.png';
import ecommermob from '../../../../assets/innerpage/ecommerce/ecommermob.png';
import Slide from 'react-reveal/Slide';
import Ecommercesilder from './Ecommercesilder';
export const EcommerceBody = () => {
  return (
    <div>
      <div className="w-full py-10 px-4 ">
        <div className="">
          {/* Image Section */}
          <div className="flex flex-wrap justify-center items-center px-8 ">
            <Slide left duration={3000}>
              <div className="flex flex-wrap justify-center items-center px-8 gap-6 mt-3">
                {/* Mobile Image */}
                <div className="flex flex-col hidden md:block  ">
                  <div className=" ">
                    <img
                      src={ecommermob}
                      alt="Ecommerce Mobile"
                      className="w-full py-2"
                    />
                  </div>
                  <div className="">
                    <img
                      src={secondmob}
                      alt="Ecommerce Mobile"
                      className="w-full py-2"
                    />
                  </div>
                </div>
                <div className="">
                  <img
                    src={newphone}
                    alt="Ecommerce Mobile"
                    // className="w-full"
                    className="md:h-[30rem]"
                  />
                </div>
                <div className="flex flex-col hidden md:block ">
                  <div className="">
                    <img
                      src={thirdmob}
                      alt="Ecommerce Mobile"
                      className="w-full py-2"
                    />
                  </div>
                  <div className="">
                    <img
                      src={fourthmob}
                      alt="Ecommerce Mobile"
                      className="w-full py-2"
                    />
                  </div>
                </div>
              </div>
            </Slide>

            {/* Mobile Image */}

            {/* Image Section Ends*/}

            {/* Side */}
            <Slide right duration={3000}>
              <div className="flex flex-wrap flex-col mt-3">
                <h2 className="text-Secondary md:text-3xl text-xl mt-4 font-heading text-center mb-6">
                  E-COMMERCE<span className="text-Green"> &</span> RETAIL
                </h2>
                {/* <img
                src={ecommercebusinessicon}
                alt="Ecommerce Business"
                className="md:h-[20rem]"
              /> */}
                <p className="font-content  md:w-[33rem] mt-6 text-justify">
                  The ecommerce and retail sector is one of the most competitive
                  markets in the world. This means that it's not just about
                  finding the right product or service to offer, but also about
                  finding a way to stand out from all the other websites that
                  are out there.
                </p>
                <p className="font-content  md:w-[33rem] mt-6 text-justify">
                  There's no doubt that your website has to be easy to navigate,
                  but it also needs to be appealing and show off your brand
                  identity in a way that will make visitors want to return again
                  and again.
                </p>
                <p className="font-content md:w-[33rem] mt-6 text-justify">
                  You can indeed get away with using simple graphics and text on
                  your website if you're only selling one product or service,
                  but as soon as you begin to sell more items or services, it
                  becomes necessary for you to invest more time and money into
                  making sure everything is done correctly.
                </p>
              </div> 
            </Slide>
            {/* Side Image*/}
          </div>
        </div>
      </div>
      {/* slider Section */}

      <div className="mx-auto w-full h-fit-content md:h-[36rem] bg-EcommersBodybg mt-8 py-12  bg-cover md:bg-top bg-center">
        <div className="max-w-[1240px] mx-auto ">
          <div className="px-8 md:px-12">
            <div>
              {/* "font-heading md:text-3xl text-xl mt-10 text-center text-Primary" */}
              <p className="text-white uppercase md:text-3xl text-xl mt-4 font-heading mb-6">
                Why Choose Cerbosys as Your Tech Partner
              </p>
            </div>
            <Ecommercesilder />
          </div>
        </div>
      </div>
      {/* slider Section Ends*/}
    </div>
  );
};
