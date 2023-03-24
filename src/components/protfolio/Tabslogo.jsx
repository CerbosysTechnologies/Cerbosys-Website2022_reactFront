import React from 'react';
import portlog1 from '../../assets/portfolio/porlog1.png';
import portlog2 from '../../assets/portfolio/portlog2.png';
import portlog3 from '../../assets/portfolio/portlog3.png';
import portlog4 from '../../assets/portfolio/portlog4.png';
import portlog5 from '../../assets/portfolio/portlog5.png';
import portlog6 from '../../assets/portfolio/portlog6.png';
import portlog7 from '../../assets/portfolio/portlog7.png';
import portlog8 from '../../assets/portfolio/portlog8.png';
import portlogo9 from '../../assets/portfolio/portlogo9.png';
import portlogo10 from '../../assets/portfolio/portlogo10.png';
import portlogo11 from '../../assets/portfolio/portlogo11.jpeg';
import portlogo12 from '../../assets/portfolio/portlogo12.jpg';
import portlogo13 from '../../assets/portfolio/portlogo13.jpeg';
import { motion } from 'framer-motion';
const Tabslogo = () => {
  return (
    <>
      {/*  <motion.h1
                animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
                transition={{
                    duration: 5,
                    delay: 0.3,
                    ease: [0.5, 0.71, 1, 1.5],
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileHover={{ scale: 1.2 }}
            >
                Animation made easy with Framer Motion
            </motion.h1> */}
      <div>
        <div className="flex  justify-center flex-col md:flex-row content-center items-center gap-6 text-white">
          <div className="mt-6 w-full ">
            <h1 className="text-Purpal border-b-2  border-b-Orange rounded-md mx-auto  p-3 max-w-fit  text-center font-heading  md:text-3xl text-xl md:mb-5 min-w-fit mt-5 md:mt-0">
              Logo
            </h1>
            <div className="flex mx-auto md:flex-nowrap px-10 flex-wrap justify-center flex-col md:flex-row content-center items-center md:gap-y-20 gap-y-5 gap-x-8 text-black">
              {/* <motion.div
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
  /> */}
              <div className="  my-10">
                <motion.div
                  animate={{ x: [100, 200, 2], opacity: 1, scale: 1 }}
                  transition={{
                    duration: 5,
                    delay: 0.3,
                    ease: [0.5, 0.71, 1, 1.5],
                  }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileHover={{ scale: 1.2 }}
                  className="shadow mx-auto  flex justify-center items-center w-[220px] h-[200px]"
                >
                  <img
                    src={portlog1}
                    alt="djhfj"
                    className="object-cover p-5 "
                  />
                </motion.div>
              </div>
              <div className=" my-10">
                <motion.div
                  animate={{ x: [50, 150, 2], opacity: 1, scale: 1 }}
                  transition={{
                    duration: 5,
                    delay: 0.3,
                    ease: [0.5, 0.71, 1, 1.5],
                  }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileHover={{ scale: 1.2 }}
                  className="shadow mx-auto  flex justify-center items-center w-[220px] h-[200px]"
                >
                  <img
                    src={portlogo10}
                    alt="djhfj"
                    className="object-cover w-full p-5"
                  />
                </motion.div>
              </div>
              <div className=" my-10">
                <motion.div
                  animate={{ x: [50, 150, 2], opacity: 1, scale: 1 }}
                  transition={{
                    duration: 5,
                    delay: 0.3,
                    ease: [0.5, 0.71, 1, 1.5],
                  }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileHover={{ scale: 1.2 }}
                  className="shadow mx-auto  flex justify-center items-center w-[220px] h-[200px]"
                >
                  <img
                    src={portlogo9}
                    alt="djhfj"
                    className="object-cover p-5"
                  />
                </motion.div>
              </div>
            </div>
            <div className="flex justify-center px-10 flex-col md:flex-row content-center items-center md:gap-y-20 gap-y-5 gap-x-8 text-black">
              <div className=" my-10">
                <motion.div
                  animate={{ x: [50, 150, 2], opacity: 1, scale: 1 }}
                  transition={{
                    duration: 5,
                    delay: 0.3,
                    ease: [0.5, 0.71, 1, 1.5],
                  }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileHover={{ scale: 1.2 }}
                  className="shadow mx-auto  flex justify-center items-center w-[220px] h-[200px]"
                >
                  <img src={portlogo11} alt="djhfj" className="w-full p-5" />
                </motion.div>
              </div>
              <div className="my-10">
                <motion.div
                  animate={{ x: [50, 150, 2], opacity: 1, scale: 1 }}
                  transition={{
                    duration: 5,
                    delay: 0.3,
                    ease: [0.5, 0.71, 1, 1.5],
                  }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileHover={{ scale: 1.2 }}
                  className="shadow mx-auto  flex justify-center items-center w-[220px] h-[200px]"
                >
                  <img
                    src={portlog5}
                    alt="djhfj"
                    className="object-cover p-5"
                  />
                </motion.div>
              </div>
              <div className=" my-10">
                <motion.div
                  animate={{ x: [50, 150, 2], opacity: 1, scale: 1 }}
                  transition={{
                    duration: 5,
                    delay: 0.3,
                    ease: [0.5, 0.71, 1, 1.5],
                  }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileHover={{ scale: 1.2 }}
                  className="shadow mx-auto  flex justify-center items-center w-[220px] h-[200px]"
                >
                  <img
                    src={portlog6}
                    alt="djhfj"
                    className="object-cover p-5"
                  />
                </motion.div>
              </div>
            </div>
            <div className="flex px-10 justify-center flex-col md:flex-row content-center items-center md:gap-y-20 gap-y-5 gap-x-8 text-black">
              <div className=" my-10">
                <motion.div
                  animate={{ x: [50, 150, 2], opacity: 1, scale: 1 }}
                  transition={{
                    duration: 5,
                    delay: 0.3,
                    ease: [0.5, 0.71, 1, 1.5],
                  }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileHover={{ scale: 1.2 }}
                  className="shadow  mx-auto  flex justify-center items-center w-[220px] h-[200px]"
                >
                  <img
                    src={portlogo12}
                    alt="djhfj"
                    className="object-fill w-full p-5"
                  />
                  {/* box-shadow: rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px, rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px, rgb(255, 85, 85) 0px 0px 0px 15px; */}
                </motion.div>
              </div>
              <div className="my-10">
                <motion.div
                  animate={{ x: [50, 150, 2], opacity: 1, scale: 1 }}
                  transition={{
                    duration: 5,
                    delay: 0.3,
                    ease: [0.5, 0.71, 1, 1.5],
                  }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileHover={{ scale: 1.2 }}
                  className="shadow mx-auto  flex justify-center items-center w-[220px] h-[200px]"
                >
                  <img
                    src={portlog8}
                    alt="djhfj"
                    className="object-cover p-5"
                  />
                </motion.div>
              </div>
              <div className=" my-10">
                <motion.div
                  animate={{ x: [50, 150, 2], opacity: 1, scale: 1 }}
                  transition={{
                    duration: 5,
                    delay: 0.3,
                    ease: [0.5, 0.71, 1, 1.5],
                  }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileHover={{ scale: 1.2 }}
                  className="shadow mx-auto  flex justify-center items-center w-[220px] h-[200px]"
                >
                  <img src={portlogo13} alt="djhfj" className=" px-5" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabslogo;
