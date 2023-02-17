import React from 'react';

import realimgright from '../../../../assets/innerpage/realestate/realimgright.png';
import realestateimg from '../../../../assets/innerpage/realestate/realestateimg.png';

import Ecommercesilder from '../Ecommerce/Ecommercesilder';
import Realsolution from './Realsolution';
import { Link } from 'react-router-dom';

const RealEstateBody = () => {
  const data = [
    {
      step: 'Step 1',
      para: ' Helping you manage your real estate portfolio from anywhere in the world.',
      btn: 'Get More Info',
    },
    {
      step: 'Step 2',
      para: 'Keeping track of all your properties in one place.',
      btn: 'Get A Quote',
    },
    {
      step: 'Step 3',
      para: 'Keeping track of all your properties in one place.',
      btn: 'Build An MVP',
    },
    {
      step: 'Step 4',
      para: 'Providing you with a host of other features that will help you grow your business.',
      btn: 'Let’s Talk About Idea',
    },
  ];

  return (
    <div>
      <div className="mx-auto w-full py-10  ">
        <div className="mx-auto max-w-[1240px] ">
          {/* Image Section */}
          {/* <div className="flex flex-wrap  items-center justify-center space-x-10"> */}
          {/*  start CONSTRUCTION*/}
          <div className=" mt-3">
            <div className="flex flex-wrap justify-center gap-10 px-8">
              <div className="flex justify-center px-4">
                <img
                  src={realimgright}
                  alt="Ecommerce Business"
                  // className="w-full"
                  className="md:h-[24rem] "
                  // className="md:h-[22rem] w-full"
                />
              </div>
              <div className="">
                <h2 className="text-Secondary md:text-3xl text-xl mt-4 font-heading text-center mb-6">
                  REAL ESTATE <span className="text-Green"> &</span>{' '}
                  CONSTRUCTION
                </h2>
                <p className="font-content md:w-[33rem]  mt-6 text-justify">
                  The real estate and construction industries are two of the
                  most important industries in the world, with over $1 trillion
                  in annual revenue and a combined workforce of 350 million
                  people. IT investments are critical for these industries, to
                  ensure access to credit and capital to improve internal
                  operations and increase productivity. Construction companies
                  use technology for a variety of tasks, from building office
                  spaces to managing contractors' schedules, while construction
                  managers need quick access to information.
                </p>
              </div>
            </div>
          </div>
          <div className="px-5 md:px-16">
            {' '}
            <h2 className="text-black md:text-2xl text-lg mt-4 font-heading text-left mb-6">
              How Our Real Estate Management System, Software & App Solutions
              Can Help You Grow Your Business
            </h2>
            <p className="font-content   mt-6 text-justify">
              Our real estate management software & app solutions are designed
              to solve the challenges you face every day. From managing your
              accounts to keeping up with property records and sales records,
              our platform will help you get the most out of your investments.
              <p className="font-content   mt-6 text-justify">
                {' '}
                Our real estate management system, Software & App Solutions can
                help you grow your business by:
              </p>
            </p>
          </div>
          {/*  end CONSTRUCTION*/}
          {/* </div> */}
        </div>
        {/* Bullet Section md:flex-nowrap */}
        <div className="max-w-[1240px] mx-auto ">
          <div className="flex  flex-wrap  md:flex-nowrap  justify-between gap-5 mt-10 px-8">
            {data &&
              data.map((curent, ind) => {
                return (
                  <>
                    {/*  md:w-[50%]  lg:w-[100%] */}
                    <div
                      className="shadow-xl w-full relative h-[300px] md:h-[340px]"
                      key={ind}
                    >
                      <div className="bg-Lightsky p-6 text-center">
                        <p className=" text-2xl">{curent.step}</p>
                      </div>
                      <div className="p-4 md:p-3 lg:p-7">
                        <p className=" pt-4 pl-4 pr-4">{curent.para}</p>
                        <div className="text-center absolute bottom-5 left-0 right-0 ">
                          <Link to="/contact-us">
                            <button className="p-3 bg-Primary text-white rounded">
                              {curent.btn}
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
        {/* Bullet Section Ends*/}
        {/*start slider section */}
        <div className="mx-auto mt-7 w-full h-fit-content md:h-[36rem] bg-EcommersBodybg  py-12  bg-cover md:bg-top bg-center">
          <div className="max-w-[1240px] mx-auto ">
            <div className="px-8 md:px-12">
              <div>
                {/* "font-heading md:text-3xl text-xl mt-10 text-center text-Primary" */}
                <p className="text-white text-center uppercase md:text-3xl text-xl mt-4 font-heading mb-6">
                  Our Portfolio
                </p>
              </div>
              <Ecommercesilder />
            </div>
          </div>
        </div>
        {/*end slider section */}
        {/*start Choice For Real Estate Management */}
        <div className="bg-gradient-to-r from-cyan-600 to-blue-800 py-6">
          <div className="max-w-[1240px] mx-auto ">
            <div className="flex flex-wrap justify-center md:flex-nowrap  px-12">
              <div className="flex justify-center md:w-[50%] w-[100%]">
                <img
                  src={realestateimg}
                  alt="Ecommerce Business"
                  // className="w-full"
                  className="md:h-[24rem]"
                />
              </div>
              <div className=" md:w-[50%] w-[100%] text-white">
                <h2 className=" md:text-3xl text-xl mt-4 font-heading  mb-6">
                  What Makes Cerbosys The Perfect Choice For Real Estate
                  Management Systems, Software And Apps?
                </h2>
                <p className="font-content   mt-6 text-justify">
                  At Cerbosys, we build IT solutions that make your business
                  work better. We take our time to get to know you and your
                  company before developing a solution that works for both of
                  you.
                </p>
                <p className="font-content   mt-6 text-justify">
                  Our team consists of experts in different fields who work
                  together with you to create a customized solution that meets
                  your needs. Our developers have experience building real
                  estate management systems (REMS), software applications, and
                  apps for both small businesses and large corporations—but we
                  don't stop there! We also specialize in developing custom
                  solutions for organizations like yours.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*end Choice For Real Estate Management */}
        {/*start Real Estate It Solutions  */}
        <div className="max-w-[1240px] mx-auto ">
          <div className="mt-10">
            {' '}
            <h2 className=" md:text-3xl uppercase text-xl mt-4 font-heading text-center mb-6">
              Our{' '}
              <span className="text-Primary"> Real Estate It Solutions</span>{' '}
              Are Tailored To Meet Your Business Needs
            </h2>
            <div className="flex text-white flex-wrap text-center  md:flex-nowrap  justify-between gap-5 mt-6 px-8">
              <Realsolution />
            </div>
          </div>
        </div>
        {/*end Real Estate It Solutions  */}
      </div>
    </div>
  );
};

export default RealEstateBody;
