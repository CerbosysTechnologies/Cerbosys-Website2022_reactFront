import React from 'react';
import portlog1 from '../../assets/portfolio/porlog1.png';
import portlog2 from '../../assets/portfolio/portlog2.png';
import portlog3 from '../../assets/portfolio/portlog3.png';
import portlog4 from '../../assets/portfolio/portlog4.png';
import portlog5 from '../../assets/portfolio/portlog5.png';
import portlog6 from '../../assets/portfolio/portlog6.png';
import portlog7 from '../../assets/portfolio/portlog7.png';
import portlog8 from '../../assets/portfolio/portlog8.png';
const Tabslogo = () => {
  return (
    <>
      <div>
        <div className="flex  justify-center flex-col md:flex-row content-center items-center gap-6 text-white">
          <div className="mt-6 w-full">
            <h1 className="text-Purpal border-b-2  border-b-Orange rounded-md mx-auto  p-3 max-w-fit  text-center font-heading  md:text-3xl text-xl md:mb-5 min-w-fit mt-5 md:mt-0">
              Logo
            </h1>
            <div className="flex justify-between flex-col md:flex-row content-center items-center gap-y-20 text-black">
              <div className="md:w-[50%] w-[100%] my-10">
                <div className="shadow flex justify-center items-center md:h-[20rem] md:w-[20rem]">
                  <img
                    src={portlog1}
                    alt="djhfj"
                    className="object-cover p-3"
                  />
                </div>
              </div>
              <div className="md:w-[50%] w-[100%] my-10">
                <div className="shadow flex justify-center items-center md:h-[20rem] md:w-[20rem]">
                  <img
                    src={portlog2}
                    alt="djhfj"
                    className="object-cover p-3"
                  />
                </div>
              </div>
              <div className="md:w-[50%] w-[100%] my-10">
                <div className="shadow flex justify-center items-center md:h-[20rem] md:w-[20rem]">
                  <img
                    src={portlog3}
                    alt="djhfj"
                    className="object-cover p-3"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-between flex-col md:flex-row content-center items-center gap-y-20 text-black">
              <div className="md:w-[50%] w-[100%] my-10">
                <div className="shadow flex justify-center items-center md:h-[20rem] md:w-[20rem]">
                  <img
                    src={portlog4}
                    alt="djhfj"
                    className="object-cover p-3"
                  />
                </div>
              </div>
              <div className="md:w-[50%] w-[100%] my-10">
                <div className="shadow flex justify-center items-center md:h-[20rem] md:w-[20rem]">
                  <img
                    src={portlog5}
                    alt="djhfj"
                    className="object-cover p-3"
                  />
                </div>
              </div>
              <div className="md:w-[50%] w-[100%] my-10">
                <div className="shadow flex justify-center items-center md:h-[20rem] md:w-[20rem]">
                  <img
                    src={portlog6}
                    alt="djhfj"
                    className="object-cover p-3"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-between flex-col md:flex-row content-center items-center gap-y-20 text-black">
              <div className="md:w-[50%] w-[100%] my-10">
                <div className="shadow  flex justify-center items-center md:h-[20rem] md:w-[20rem]">
                  <img
                    src={portlog7}
                    alt="djhfj"
                    className="object-cover p-3"
                  />
                  {/* box-shadow: rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px, rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px, rgb(255, 85, 85) 0px 0px 0px 15px; */}
                </div>
              </div>
              <div className="md:w-[50%] w-[100%] my-10">
                <div className="shadow flex justify-center items-center md:h-[20rem] md:w-[20rem]">
                  <img
                    src={portlog8}
                    alt="djhfj"
                    className="object-cover p-3"
                  />
                </div>
              </div>
              <div className="md:w-[50%] w-[100%] my-10">
                <div className="shadow flex justify-center items-center md:h-[20rem] md:w-[20rem]">
                  <img
                    src={portlog8}
                    alt="djhfj"
                    className="object-cover p-3"
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

export default Tabslogo;
