import { Agriculture } from '@mui/icons-material';
import React from 'react';
import ecommerfashi from '../../assets/portfolio/ecommerfashi.png';
import tem2 from '../../assets/portfolio/tem2.png';
import templet1 from '../../assets/portfolio/templet1.png';
const Tabstemplate = () => {
  return (
    <>
      <div>
        <div className="mt-6 ">
          <h1 className="text-Purpal border-b-2  border-b-Orange rounded-md mx-auto  p-3 max-w-fit  text-center font-heading  md:text-3xl text-xl md:mb-5 min-w-fit mt-5 md:mt-0">
            Agriculture
          </h1>
        </div>
        <div className="flex justify-between flex-col md:flex-row content-center items-center mt-12 gap-6 text-white">
          <div className="md:w-[50%] w-[100%]">
            <img
              src={templet1}
              alt="djhfj"
              className="md:h-[24rem] mx-auto rounded-lg"
            />{' '}
          </div>
          <div className="md:w-[50%] w-[100%]">
            <img
              src={tem2}
              alt="djhfj"
              className="md:h-[24rem] mx-auto rounded-lg"
            />{' '}
          </div>
          <div className="md:w-[50%] w-[100%]">
            <img
              src={tem2}
              alt="djhfj"
              className="md:h-[24rem] mx-auto rounded-lg"
            />
          </div>
        </div>
        <div className="mt-6 ">
          <h1 className="text-Purpal border-b-2  border-b-Orange rounded-md mx-auto  p-3 max-w-fit  text-center font-heading  md:text-3xl text-xl md:mb-5 min-w-fit mt-5 md:mt-0">
            Ecommerce & Retail
          </h1>
        </div>
        <div className="flex justify-between flex-col md:flex-row content-center items-center mt-12 gap-6 text-white">
          <div className="md:w-[50%] w-[100%]">
            <img
              src={ecommerfashi}
              alt="djhfj"
              className="md:h-[24rem] mx-auto"
            />{' '}
          </div>
          <div className="md:w-[50%] w-[100%]">
            <img
              src={ecommerfashi}
              alt="djhfj"
              className="md:h-[24rem] mx-auto"
            />{' '}
          </div>
          <div className="md:w-[50%] w-[100%]">
            <img
              src={ecommerfashi}
              alt="djhfj"
              className="md:h-[24rem] mx-auto"
            />
          </div>
        </div>
        <div className="mt-6 ">
          <h1 className="text-Purpal border-b-2  border-b-Orange rounded-md mx-auto  p-3 max-w-fit  text-center font-heading  md:text-3xl text-xl md:mb-5 min-w-fit mt-5 md:mt-0">
            Healthcare & Life Science
          </h1>
        </div>
        <div className="flex justify-between flex-col md:flex-row content-center items-center mt-12 gap-6 text-white">
          <div className="md:w-[50%] w-[100%]">
            <img
              src={ecommerfashi}
              alt="djhfj"
              className="md:h-[24rem] mx-auto"
            />{' '}
          </div>
          <div className="md:w-[50%] w-[100%]">
            <img
              src={ecommerfashi}
              alt="djhfj"
              className="md:h-[24rem] mx-auto"
            />{' '}
          </div>
          <div className="md:w-[50%] w-[100%]">
            <img
              src={ecommerfashi}
              alt="djhfj"
              className="md:h-[24rem] mx-auto"
            />
          </div>
        </div>
        <div className="mt-6 ">
          <h1 className="text-Purpal border-b-2  border-b-Orange rounded-md mx-auto  p-3 max-w-fit  text-center font-heading  md:text-3xl text-xl md:mb-5 min-w-fit mt-5 md:mt-0">
            Banking & Finance
          </h1>
        </div>
        <div className="flex justify-between flex-col md:flex-row content-center items-center mt-12 gap-6 text-white">
          <div className="md:w-[50%] w-[100%]">
            <img
              src={ecommerfashi}
              alt="djhfj"
              className="md:h-[24rem] mx-auto"
            />{' '}
          </div>
          <div className="md:w-[50%] w-[100%]">
            <img
              src={ecommerfashi}
              alt="djhfj"
              className="md:h-[24rem] mx-auto"
            />{' '}
          </div>
          <div className="md:w-[50%] w-[100%]">
            <img
              src={ecommerfashi}
              alt="djhfj"
              className="md:h-[24rem] mx-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabstemplate;
