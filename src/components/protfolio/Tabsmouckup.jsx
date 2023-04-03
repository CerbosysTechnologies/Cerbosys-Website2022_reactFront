import React from 'react';
// import portlog1 from '../../assets/portfolio/porlog1.png';
// import portlog2 from '../../assets/portfolio/portlog2.png';
// import portlog3 from '../../assets/portfolio/portlog3.png';
// import portlog4 from '../../assets/portfolio/portlog4.png';
// import portlog5 from '../../assets/portfolio/portlog5.png';
// import portlog6 from '../../assets/portfolio/portlog6.png';
// import portlog7 from '../../assets/portfolio/portlog7.png';
// import portlog8 from '../../assets/portfolio/portlog8.png';
import mockicon2 from '../../assets/portfolio/mockicon2.png';
import mockicon3 from '../../assets/portfolio/mockicon3.png';
import mockicon4 from '../../assets/portfolio/mockicon4.png';
import mockicon5 from '../../assets/portfolio/mockicon5.png';
import mockicon6 from '../../assets/portfolio/mockicon6.png';
import mockicon7 from '../../assets/portfolio/mockicon7.png';
import mockicon8 from '../../assets/portfolio/mockicon8.jpg';
import mockicon9 from '../../assets/portfolio/mockicon9.jpg';
import mockicon10 from '../../assets/portfolio/mockicon10.jpg';
import mockicon11 from '../../assets/portfolio/mockicon11.jpg';
import mockicon12 from '../../assets/portfolio/mockicon12.jpg';
import mockicon13 from '../../assets/portfolio/mockicon13.jpg';
import mockupicon1 from '../../assets/portfolio/mockupicon1.png';
import { motion } from 'framer-motion';
import { useRef } from 'react';

import { useState } from 'react';
import { DesignServices, WebStoriesRounded } from '@mui/icons-material';
const Tabsmouckup = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      {/*  opacity: 0.2;
  background: white;
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 30px;
  top: calc(50% - 150px);
  left: calc(50% - 150px); */}
      <div>
        <div className="flex  justify-center flex-col md:flex-row content-center items-center gap-6 text-white">
          <div className="mt-6 w-full ">
            <h1 className="text-Purpal border-b-2  border-b-Orange rounded-md mx-auto  p-3 max-w-fit  text-center font-heading  md:text-3xl text-xl md:mb-5 min-w-fit mt-5 md:mt-0">
              Mockups
            </h1>
            <div className="flex mx-auto md:flex-nowrap px-10 flex-wrap justify-center flex-col md:flex-row content-center items-center md:gap-y-20 gap-y-5 gap-x-8 text-black">
              <div className="  my-10">
                <div className="shadow mx-auto  flex justify-center items-center w-[220px] h-[240px] lg:w-[300px] lg:h-[240px]">
                  <img
                    src={mockupicon1}
                    alt="djhfj"
                    className="object-fill w-full  p-5 "
                  />
                </div>
              </div>
              <div className=" my-10">
                <div className="shadow mx-auto  flex justify-center items-center w-[220px] h-[240px] lg:w-[300px] lg:h-[240px]">
                  <img
                    src={mockicon2}
                    alt="djhfj"
                    className="object-fill w-full p-5"
                  />
                </div>
              </div>
              <div className=" my-10">
                <div className="shadow mx-auto  flex justify-center items-center w-[220px] h-[240px] lg:w-[300px] lg:h-[240px]">
                  <img
                    src={mockicon3}
                    alt="djhfj"
                    className="object-fill w-full p-5"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center px-10 flex-col md:flex-row content-center items-center md:gap-y-20 gap-y-5 gap-x-8 text-black">
              <div className=" my-10">
                <div className="shadow mx-auto  flex justify-center items-center w-[220px] h-[240px] lg:w-[300px] lg:h-[240px]">
                  <img
                    src={mockicon4}
                    alt="djhfj"
                    className="object-fill w-full p-5"
                  />
                </div>
              </div>
              <div className="my-10">
                <div className="shadow mx-auto  flex justify-center items-center w-[220px] h-[240px] lg:w-[300px] lg:h-[240px]">
                  <img
                    src={mockicon5}
                    alt="djhfj"
                    className="object-fill w-full  p-5"
                  />
                </div>
              </div>
              <div className=" my-10">
                <div className="shadow mx-auto  flex justify-center items-center w-[220px] h-[240px] lg:w-[300px] lg:h-[240px]">
                  <img
                    src={mockicon6}
                    alt="djhfj"
                    className="object-fill w-full  p-5"
                  />
                </div>
              </div>
            </div>
            <div className="flex px-10 justify-center flex-col md:flex-row content-center items-center md:gap-y-20 gap-y-5 gap-x-8 text-black">
              <div className=" my-10">
                <div className="shadow  mx-auto  flex justify-center items-center w-[220px] h-[240px] lg:w-[300px] lg:h-[240px]">
                  <img
                    src={mockicon7}
                    alt="djhfj"
                    className="object-fill w-full h-full p-5"
                  />
                  {/* box-shadow: rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px, rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px, rgb(255, 85, 85) 0px 0px 0px 15px; */}
                </div>
              </div>
              <div className="my-10">
                <div className="shadow mx-auto  flex justify-center items-center w-[220px] h-[240px] lg:w-[300px] lg:h-[240px]">
                  <img
                    src={mockicon8}
                    alt="djhfj"
                    className="object-fill w-full h-full p-5"
                  />
                </div>
              </div>
              <div className=" my-10">
                <div className="shadow mx-auto  flex justify-center items-center w-[220px] h-[240px] lg:w-[300px] lg:h-[240px] ">
                  <img
                    src={mockicon9}
                    alt="djhfj"
                    className="object-fill w-full h-full p-5"
                  />
                </div>
              </div>
            </div>
            <div className="flex px-10 justify-center flex-col md:flex-row content-center items-center md:gap-y-20 gap-y-5 gap-x-8 text-black">
              <div className=" my-10">
                <div className="shadow  mx-auto  flex justify-center items-center w-[220px] h-[240px] lg:w-[300px] lg:h-[240px]">
                  <img
                    src={mockicon10}
                    alt="djhfj"
                    className="object-fill w-full h-full p-5"
                  />
                  {/* box-shadow: rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px, rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px, rgb(255, 85, 85) 0px 0px 0px 15px; */}
                </div>
              </div>
              <div className="my-10">
                <div className="shadow mx-auto  flex justify-center items-center w-[220px] h-[240px] lg:w-[300px] lg:h-[240px]">
                  <img
                    src={mockicon11}
                    alt="djhfj"
                    className="object-fill w-full h-full p-5"
                  />
                </div>
              </div>
              <div className=" my-10">
                <div className="shadow mx-auto  flex justify-center items-center w-[220px] h-[240px] lg:w-[300px] lg:h-[240px] ">
                  <img
                    src={mockicon13}
                    alt="djhfj"
                    className="object-fill w-full h-full p-5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabsmouckup;

