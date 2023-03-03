import React from 'react';
import reacticon2 from '../../../../../../assets/innerpage/reactjs/reacticon2.png';
import reacticon3 from '../../../../../../assets/innerpage/reactjs/reacticon3.png';
import reacticon4 from '../../../../../../assets/innerpage/reactjs/reacticon4.png';
import reacticon5 from '../../../../../../assets/innerpage/reactjs/reacticon5.png';
import reacticon7 from '../../../../../../assets/innerpage/reactjs/reacticon7.png';
import reacticon8 from '../../../../../../assets/innerpage/reactjs/reacticon8.png';
import Heading from '../Heading';
import Reacthelpfull from './Reacthelpfull';
const Reactwork = () => {
  return (
    <>
      <div className="max-w-[1240px] mx-auto my-8">
        <Heading title="Why work with us" />
        <div className="flex flex-row md:flex-nowrap items-start flex-wrap  gap-10 mt-5">
          <div className="w-[100%] md:w-[50%]">
            <div className="bg-Darkgray px-5 py-3 gap-6  flex  lg:h-[200px] h-fit ">
              <div className="w-[22%] my-auto">
                <img src={reacticon2} alt="img" className="w-full" />
              </div>
              <div className="w-[78%] ">
                <p className="font-heading text-Primary  mt-2 text-justify max-w-fit ">
                  5+ years on the market
                </p>
                <p className="font-content text-Primary   mt-2 text-justify  max-w-fit ">
                  We’ve been delivering working code and awesome solutions
                  since2014. 90% of our current clients have stayed with us for
                  morethan two years.
                </p>
              </div>
            </div>
          </div>

          <div className="w-[100%] md:w-[50%]">
            <div className="bg-Darkgray px-5 py-3 lg:h-[200px] h-fit gap-6  flex ">
              <div className="w-[22%] my-auto">
                <img src={reacticon3} alt="img" className="w-full" />
              </div>
              <div className="w-[78%] ">
                <p className="font-heading text-Primary  mt-2 text-justify max-w-fit ">
                  Talent pool
                </p>
                <p className="font-content text-Primary   mt-2 text-justify max-w-fit ">
                  There are more than 20 software engineers on the Clockwise
                  Software team. However, if you need more specialists than are
                  currently available, our skillful People Team is ready to find
                  and hire the top talents for your project.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row md:flex-nowrap flex-wrap  gap-10 mt-5">
          <div className="w-[100%] md:w-[50%]">
            <div className="bg-Darkgray px-5  py-3 gap-6 lg:h-[200px]  flex  h-fit">
              <div className="w-[22%] my-auto">
                <img src={reacticon4} alt="img" className="w-full" />
              </div>
              <div className="w-[78%] ">
                <p className="font-heading text-Primary  mt-2 text-justify max-w-fit ">
                  Expertise fueled by experience
                </p>
                <p className="font-content text-Primary   mt-2 text-justify max-w-fit ">
                  More than 35% of Clockwise Software engineers have been
                  working in the IT industry for over five years. We keep our
                  finger on the pulse of technology trends and employ tried and
                  tested tactics to write error-free code.
                </p>
              </div>
            </div>
          </div>

          <div className="w-[100%] md:w-[50%]">
            <div className="bg-Darkgray px-5  py-3 lg:h-[200px]  h-fit gap-6  flex ">
              <div className="w-[22%] my-auto">
                <img src={reacticon5} alt="img" className="w-full" />
              </div>
              <div className="w-[78%] ">
                <p className="font-heading text-Primary  mt-2 text-justify max-w-fit ">
                  Quality-driven technical skills
                </p>
                <p className="font-content text-Primary   mt-2 text-justify max-w-fit ">
                  We aim to make you a better employee, by providing our clients
                  with quality-driven technical skills. Whether you're just
                  starting your business or have been around the block a few
                  times, we can help you get where you're going.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row md:flex-nowrap flex-wrap  gap-10 mt-5">
          <div className="w-[100%] md:w-[50%]">
            <div className="bg-Darkgray px-5  py-3 gap-6  flex lg:h-[200px]   h-fit">
              <div className="w-[22%] my-auto">
                <img src={reacticon7} alt="img" className="w-full" />
              </div>
              <div className="w-[78%] ">
                <p className="font-heading text-Primary  mt-2 text-justify max-w-fit ">
                  Low turnover rate
                </p>
                <p className="font-content text-Primary   mt-2 text-justify max-w-fit ">
                  Most software engineers work at Clockwise Software for three
                  years or more. We’ve raised engineers from trainees to system
                  architects in-house. We keep on hiring new IT experts while
                  our dedicated specialists stay with us!
                </p>
              </div>
            </div>
          </div>

          <div className="w-[100%] md:w-[50%]">
            <div className="bg-Darkgray px-5  py-3 lg:h-[200px] h-fit gap-6  flex ">
              <div className="w-[22%] my-auto">
                <img src={reacticon8} alt="img" className="w-full" />
              </div>
              <div className="w-[78%] ">
                <p className="font-heading text-Primary  mt-2 text-justify max-w-fit ">
                  Transparent processes
                </p>
                <p className="font-content text-Primary   mt-2 text-justify max-w-fit ">
                  Minimum bureaucracy and maximum efficiency. Detailed
                  agreements and clear security protocols. Clockwise Software
                  can become your dependable IT team augmentation service
                  provider for years.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* tell us about ur busniss start */}
        <div className="flex px-3 flex-wrap justify-between items-center border-2 border-white border-y-indigo-500 mt-5 py-12">
          <div className="mt-2">
            <p className="font-heading md:text-xl text-Primary text-md ">
              Tell us about your business needs and let’s<br></br> find the best
              cooperation model for you"
            </p>
          </div>
          <div className="mt-2">
            <button className="bg-Primary px-10 py-3 text-white">
              Schedule a call
            </button>
          </div>
        </div>
        {/* tell us about ur busniss end */}
      </div>
    </>
  );
};

export default Reactwork;
