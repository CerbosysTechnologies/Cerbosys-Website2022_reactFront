import React from "react";
import portfolioleftimg from "../../assets/portfolio/portfolioleftimg.png";
import portfolioright from "../../assets/portfolio/portfolioright.png";
import Portfoliotabs from "./Portfoliotabs";
import { Link } from "react-router-dom";
const Portfoliobody = () => {
  return (
    <>
      {/* Image Section */}
      <div>
        {/* portfolio sections start */}

        <div className=" mx-auto w-full md:h-[38rem]  py-12 px-4 bg-Portfoliobg bg-cover md:bg-top bg-center">
          <div className="mx-auto w-full py-4 md:py-10 px-4 ">
            <div className="max-w-[1240px] mx-auto">
              {/* Image Section */}
              <div className="w-full mt-4">
                <div className="flex flex-wrap md:flex-nowrap justify-between items-center  md:gap-10 p-0 md:p-6">
                  <div className="md:w-[50%] w-[100%] pt-4 z-50">
                    <img src={portfolioleftimg} alt="img" className="w-full" />
                    {/* md:h-[24rem] */}
                  </div>
                  <div className="md:w-[50%] w-[100%] pt-4 z-50">
                    <h1 className="text-Secondary z-50 uppercase font-heading  md:text-5xl text-2xl md:mb-5 min-w-fit mt-5 md:mt-0">
                      Portfolio
                    </h1>
                    <p className="mt-2 min-w-fit text-xl font-bold ">
                      Join forces with us to elevate your business's growth! We
                      offer a diverse range of choices for you to explore. Let's
                      embark on this path of growth and success together.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="z-10 opacity-50 bg-black absolute top-0 left-0 right-0 bottom-[100px] lg:bottom-[140px] md:bottom-[50px]  xl:bottom-[160px]"></div>
        </div>

        {/* portfolio sections end */}
        <hr className="h-1 bg-Orange"></hr>
        {/*  about portfolio start*/}

        <div className="mx-auto w-full py-4 md:py-10 px-4">
          <div className="max-w-[1240px] mx-auto">
            {/* Image Section */}
            <div className="w-full mt-4">
              <div className="flex flex-wrap lg:flex-nowrap justify-between  md:gap-10 p-0 md:p-6">
                <div className="lg:w-[50%] w-[100%] pt-4">
                  <h1 className="text-Purpal uppercase font-heading  md:text-4xl text-2xl md:mb-5 min-w-fit mt-5 md:mt-0">
                    ABOUT PORTFOLIO
                  </h1>
                  <hr className="h-1 bg-Orange md:w-[420px] m-0 w-[220px]"></hr>
                  <p className="mt-10 min-w-fit text-xl">
                    In our portfolio, you will discover an extensive collection
                    of website and UI designs, social media posts, logos, and
                    mockups. Dig deep into our captivating designs and get in
                    touch with us to discuss how we can customize them to
                    fulfill your business needs.
                  </p>
                  <p className="mt-10 min-w-fit text-xl">
                    As a web design company in Indore, we stay at the forefront
                    of the latest technologies in web development. Our team of
                    talented logo and graphic designers is dedicated to crafting
                    visually stunning and impactful designs. Whether you're
                    searching for a web designing company near you or looking
                    for innovative solutions, we are here to assist you every
                    step of the way.
                  </p>
                  <Link to="/contact-us">
                    <button className="bg-Purpal p-2 rounded mt-8 text-white">
                      Book A Consultation Call
                    </button>
                  </Link>
                  {/* md:h-[24rem] */}
                </div>
                <div className="lg:w-[50%] w-[100%] pt-4">
                  <img src={portfolioright} alt="img" className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* about portfolio end */}
        {/* portfolio tabs sections */}
        <Portfoliotabs />
        {/* portfolio tabs sections */}
      </div>
    </>
  );
};

export default Portfoliobody;
