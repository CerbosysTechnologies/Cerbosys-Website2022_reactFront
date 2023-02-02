import React from 'react';
import miningmobicon from '../../../../assets/innerpage/mining/miningmob.svg';
import miningbusinessicon from '../../../../assets/innerpage/mining/miningimage.svg';
import multymob from '../../../../assets/innerpage/mining/miningleft.png';
import miningright from '../../../../assets/innerpage/mining/miningright.png';
import Ecommercesilder from '../Ecommerce/Ecommercesilder';
import Miningtabs from './Miningtabs';
const MiningBody = () => {
  return (
    <div>
      <div>
        <div className="mx-auto w-full py-4 md:py-10 px-4 ">
          <div className="max-w-[1240px] mx-auto">
            {/* Image Section */}
            <div className="w-full mt-4">
              <div className="flex flex-wrap md:flex-nowrap justify-between  md:gap-10 p-6">
                <div className="md:w-[50%] w-[100%]">
                  <img
                    src={multymob}
                    alt="img"
                    className="md:h-[24rem] w-full"
                  />
                </div>
                <div className="md:w-[50%] w-[100%]">
                  <h1 className="text-Secondary font-heading  md:text-3xl text-xl md:mb-5 min-w-fit mt-5 md:mt-0">
                    MINING
                  </h1>
                  <p className="mt-2 min-w-fit">
                    Mining is one of the most demanding industries in terms of
                    IT and automation. The mining industry is a mix of high-tech
                    and low-tech, requiring the advanced use of IT to manage all
                    aspects of the business. Some of the most challenging trends
                    for mining companies include:
                  </p>
                  <p className="mt-2">
                    {' '}
                    * Using big data to improve decision-making by providing
                    more information about the market, customers, competitors,
                    and suppliers. * Using analytics to optimize operations,
                    including reducing costs and increasing efficiency. *
                    Integrating legacy systems into new architectures that can
                    be more flexible and responsive to changing requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* vertical tabs start */}
      <div className="max-w-[1240px] mx-auto ">
        <Miningtabs />
      </div>
      {/*vertical tabs end  */}
      {/* slider section start */}
      <div className="mx-auto  w-full h-fit-content md:h-[36rem] bg-EcommersBodybg  py-12  bg-cover md:bg-top bg-center">
        <div className="max-w-[1240px] mx-auto ">
          {' '}
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
      {/* slider section end */}
      {/*start Cerbosys can help your 
mining business? */}
      <div className="mx-auto w-full py-10 px-4 bg-gradient-to-r from-cyan-600 to-blue-800">
        <div className="max-w-[1240px] mx-auto">
          <div className=" py-0 md:py-6">
            <div className="flex flex-wrap justify-center gap-5 md:flex-nowrap  px-8 md:px-12">
              <div className="flex justify-center gap-10 md:w-[50%] w-[100%] text-white">
                <div className="mt-3">
                  <h2 className=" md:text-3xl text-xl mt-4 font-heading  mb-6">
                    How Cerbosys can help your mining business?
                  </h2>
                  <p className="font-content   mt-6 text-justify">
                    We know your mining business is the heart of your company.
                    It's where the money is made and where you build
                    relationships with your customers. When it comes to engaging
                    with those customers, nothing beats a good website. But what
                    if you had a website that was easy to use, innovative, and
                    mobile responsive?
                  </p>
                  <p className="font-content   mt-6 text-justify">
                    Don't worry, we have got you covered. We have years of
                    experience in developing websites for mining companies
                    across the country, and we're ready to help your business
                    grow through digital marketing channels like email
                    marketing, social media marketing, and more.
                  </p>
                </div>
              </div>
              <div className=" md:w-[50%] w-[100%] text-white mt-3">
                <img
                  src={miningright}
                  alt="Ecommerce Business"
                  // className="w-full"
                  className="md:h-[24rem] mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end Cerbosys can help your 
mining business? */}
    </div>
  );
};

export default MiningBody;
