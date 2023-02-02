import React from 'react';
// import agriculturemobicon from '../../../../assets/innerpage/agriculture/agriculturemob.svg';
import ledimg from '../../../../assets/innerpage/agriculture/ledimg.png';
import sideimg1 from '../../../../assets/innerpage/agriculture/sideimg1.png';
import sideimg2 from '../../../../assets/innerpage/agriculture/sideimg2.png';
import sideimg3 from '../../../../assets/innerpage/agriculture/sideimg3.png';
import sideimg4 from '../../../../assets/innerpage/agriculture/sideimg4.png';
import sideimg5 from '../../../../assets/innerpage/agriculture/sideimg5.png';
import sideimg6 from '../../../../assets/innerpage/agriculture/sideimg6.png';
// import agriculturebusinessicon from '../../../../assets/innerpage/agriculture/agricultureimage.svg';
import Ecommercesilder from '../Ecommerce/Ecommercesilder';
import Accordion from './Accordion';
import bgimg1 from '../../../../assets/innerpage/agriculture/bgimg1.png';
import bgimg2 from '../../../../assets/innerpage/agriculture/bgimg2.png';
import bgimg3 from '../../../../assets/innerpage/agriculture/bgimg3.png';
const AgricultureBody = () => {
  const data = [
    {
      img1: sideimg1,
      img2: sideimg2,
    },
    {
      img1: sideimg3,
      img2: sideimg4,
    },
    {
      img1: sideimg5,
      img2: sideimg6,
    },
  ];
  return (
    <div>
      <div className="mx-auto w-full py-10 px-4 ">
        <div className="max-w-[1240px] mx-auto">
          {/* Image Section */}
          <div className="flex flex-wrap md:flex-nowrap mx-auto  justify-between py-5">
            {/* Mobile Image */}
            <div className="md:w-[40%] w-[100%]">
              <img src={ledimg} alt="Agriculture Mobile" className=" w-full" />
              {/* md:h-[30rem] */}
            </div>
            {/* Mobile Image */}

            {/* Image Section Ends*/}

            {/* Side */}
            <div className=" md:w-[60%] w-[100%]">
              <h2 className="text-Primary uppercase md:text-3xl mb-6 text-xl  font-heading max-w-fit">
                Agriculture
              </h2>

              <p className="font-content  md:w-[33rem] mt-6 text-justify">
                The agricultural sector has been facing many challenges in
                recent years, including high costs and low productivity. These
                are some of the reasons why they need IT solutions.
              </p>
              <h2 className="  mb-6 text-lg  font-subheading">
                {' '}
                IT solutions can help them with:
              </h2>
              <h2 className="  mb-6 text-lg  font-subheading max-w-fit">
                {' '}
                -Automation:{' '}
                <span className="font-content  md:w-[33rem] mt-6 text-justify">
                  {' '}
                  The use of computers and technology to increase efficiency,
                  reduce costs and increase productivity
                </span>
              </h2>
              <h2 className="  mb-6 text-lg  font-subheading max-w-fit">
                {' '}
                -Information sharing:
                <span className="font-content  md:w-[33rem] mt-6 text-justify">
                  {' '}
                  The use of electronic data interchange (EDI) to share
                  information among all parties involved in an agricultural
                  transaction
                </span>
              </h2>
              <h2 className="  mb-6 text-lg  font-subheading max-w-fit">
                -Integration:
                <span className="font-content  md:w-[33rem] mt-6 text-justify">
                  Use of software applications to integrate different systems
                  into a single system by sharing data between them
                </span>
              </h2>
            </div>
            {/* Side Image*/}
          </div>

          {/* start Agriculture in the 21st Century: Technological Trends Section */}
          <div className=" mx-auto">
            <div className="font-heading md:text-3xl text-xl mt-10 ">
              <h2 className="uppercase md:text-3xl mb-6 text-xl  font-heading   text-center">
                Agriculture in the 21st Century:
                <span className="text-Primary">
                  {' '}
                  &nbsp;Technological Trends
                </span>
              </h2>
            </div>
            <div className="flex flex-wrap md:flex-nowrap mx-auto gap-14  justify-between py-5">
              <div className="md:w-[50%] w-[100%]">
                <Accordion />
              </div>
              <div className="md:w-[50%] w-[100%]">
                <div className="flex flex-col gap-6">
                  {data.map((curent, ind) => {
                    return (
                      <>
                        <div
                          className="flex flex-row justify-between gap-6"
                          key={ind}
                        >
                          <div>
                            <img
                              src={curent.img1}
                              alt="img"
                              className="w-full"
                            />
                          </div>
                          <div>
                            <img
                              src={curent.img2}
                              alt="img"
                              className="w-full"
                            />
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* end Agriculture in the 21st Century: Technological Trends Section */}
        </div>
      </div>
      {/*start slider section */}
      <div className="w-full md:h-[36rem] bg-EcommersBodybg  mt-16 py-8">
        <div className="max-w-[1240px] mx-auto">
          <div className="px-8 md:px-12">
            <div>
              {/* "font-heading md:text-3xl text-xl mt-10 text-center text-Primary" */}
              <p className="text-white md:text-3xl text-xl mt-4 font-heading mb-6  uppercase text-center">
                Our Portfolio
              </p>
            </div>
            <Ecommercesilder />
          </div>
        </div>
      </div>
      {/*end slider section */}

      {/*start smart solution we provide */}
      {/* w-full md:h-[62rem] h-[62rem] bg-Agriculturebg relative bg-no-repeat */}
      <div className="mx-auto w-full relative  bg-Agriculturebg lg:h-[62rem] md:h-[62rem] h-[62rem] py-12 px-4 bg-cover md:bg-top bg-center">
        <p className="text-Primary md:text-3xl text-xl  font-heading mb-6 p-5">
          SMART FARMING
          <span className="text-black md:text-3xl text-xl font-heading mb-6">
            &nbsp;SOLUTIONS WE PROVIDE
          </span>
        </p>

        <div className=" absolute  right-0 left-0 bottom-[28rem] md:left-[62rem] md:bottom-64">
          <img
            src={bgimg1}
            alt="img"
            className="mx-auto w-[150px]  md:w-[18rem]"
          />
        </div>

        <div
          className="absolute 
          right-0 left-0
         bottom-[18rem] md:left-[30rem]
        md:bottom-[6rem] "
        >
          {/* lg:w-[18rem] */}
          <img
            src={bgimg2}
            alt="img"
            className="mx-auto w-[150px]  md:w-[18rem]"
          />
        </div>

        <div
          className="absolute  right-0 left-0 bottom-32 md:left-[-6rem] md:bottom-4  
        "
        >
          <img
            src={bgimg3}
            alt="img"
            className="mx-auto w-[150px]  md:w-[18rem]"
          />
        </div>
      </div>
      {/*end smart solution we provide */}
    </div>
  );
};

export default AgricultureBody;
