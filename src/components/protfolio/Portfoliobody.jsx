import React from 'react';
import portfolioleftimg from '../../assets/portfolio/portfolioleftimg.png';
import portfolioright from '../../assets/portfolio/portfolioright.png';
import Portfoliotabs from './Portfoliotabs';

const Portfoliobody = () => {
  return (
    <>
      {/* Image Section */}
      <div>
        {/* portfolio sections start */}

        <div className="mx-auto w-full md:h-[38rem]  py-12 px-4 bg-Portfoliobg bg-cover md:bg-top bg-center">
          <div className="mx-auto w-full py-4 md:py-10 px-4 ">
            <div className="max-w-[1240px] mx-auto">
              {/* Image Section */}
              <div className="w-full mt-4">
                <div className="flex flex-wrap md:flex-nowrap justify-between items-center  md:gap-10 p-0 md:p-6">
                  <div className="md:w-[50%] w-[100%] pt-4 z-50">
                    <img src={portfolioleftimg} alt="img" className="w-full" />
                    {/* md:h-[24rem] */}
                  </div>
                  <div className="md:w-[50%] w-[100%] pt-4 ">
                    <h1 className="text-Secondary z-50 uppercase font-heading  md:text-5xl text-2xl md:mb-5 min-w-fit mt-5 md:mt-0">
                      Portfolio
                    </h1>
                    <p className="mt-2 min-w-fit text-xl font-bold z-50">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="z-10 opacity-50 bg-black absolute top-0 left-0 right-0 bottom-[147px]"></div>
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
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <button className="bg-Purpal p-2 rounded mt-8 text-white">
                    Know More
                  </button>
                  {/* md:h-[24rem] */}
                </div>
                <div className="lg:w-[50%] w-[100%] pt-4">
                  <img src={portfolioright} alt="img" className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* text start before:py-40 before:px-4*/}
        {/* <div
          className="relative w-[300px] h-96 bg-black rounded-[20px] flex justify-center items-center overflow-hidden
           before:content-[' '] 
          before:absolute 
          before:left-[0%]  
          before:top-[0%] 
          before:w-full
           before-h-full  
          
          before:z-50
           before:animate-btns-hand
           
           after:content-[' '] 
           after:absolute 
           after:left-[0%]  
           after:top-[0%] 
           after:w-full
           after-h-full  
         
           after:z-50
           after:animate-btns-hand"

        
        >
          <span className="text-white z-50 ">hello</span>
        </div> */}
        {/* text end */}

        {/* about portfolio end */}
        {/* portfolio tabs sections */}
        <Portfoliotabs />
        {/* portfolio tabs sections */}
      </div>
    </>
  );
};

export default Portfoliobody;
