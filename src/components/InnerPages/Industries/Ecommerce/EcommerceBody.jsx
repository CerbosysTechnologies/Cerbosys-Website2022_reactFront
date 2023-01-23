import React from 'react';
import ecommercemobicon from '../../../../assets/innerpage/ecommerce/ecommercemob.png';
import ecommersarrival from '../../../../assets/innerpage/ecommerce/ecommersarrival.png';
import newphone from '../../../../assets/innerpage/ecommerce/newphone.png';
import ecommerfashi from '../../../../assets/innerpage/ecommerce/ecommerfashi.png';
import ecommersboutic from '../../../../assets/innerpage/ecommerce/ecommersboutic.png';
import fourthmob from '../../../../assets/innerpage/ecommerce/fourthmob.png';
import thirdmob from '../../../../assets/innerpage/ecommerce/thirdmob.png';
import secondmob from '../../../../assets/innerpage/ecommerce/seconmob.png';
import ecommermob from '../../../../assets/innerpage/ecommerce/ecommermob.png';
import Slider from 'react-slick';
export const EcommerceBody = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="w-full py-10 px-4 ">
        <div className="">
          {/* Image Section */}
          <div className="flex flex-wrap justify-center items-center px-8 ">
            <div className="flex flex-wrap justify-center items-center px-8 gap-6 mt-3">
              {/* Mobile Image */}
              <div className="flex flex-col hidden md:block  ">
                <div className=" ">
                  <img
                    src={ecommermob}
                    alt="Ecommerce Mobile"
                    className="w-full py-2"
                  />
                </div>
                <div className="">
                  <img
                    src={secondmob}
                    alt="Ecommerce Mobile"
                    className="w-full py-2"
                  />
                </div>
              </div>
              <div className="">
                <img
                  src={newphone}
                  alt="Ecommerce Mobile"
                  // className="w-full"
                  className="md:h-[30rem]"
                />
              </div>
              <div className="flex flex-col hidden md:block ">
                <div className="">
                  <img
                    src={thirdmob}
                    alt="Ecommerce Mobile"
                    className="w-full py-2"
                  />
                </div>
                <div className="">
                  <img
                    src={fourthmob}
                    alt="Ecommerce Mobile"
                    className="w-full py-2"
                  />
                </div>
              </div>
            </div>

            {/* Mobile Image */}

            {/* Image Section Ends*/}

            {/* Side */}
            <div className="flex flex-wrap flex-col mt-3">
              <h2 className="text-Secondary md:text-3xl text-xl mt-4 font-heading text-center mb-6">
                E-COMMERCE<span className="text-Green"> &</span> RETAIL
              </h2>
              {/* <img
                src={ecommercebusinessicon}
                alt="Ecommerce Business"
                className="md:h-[20rem]"
              /> */}
              <p className="font-content  md:w-[33rem] mt-6 text-justify">
                The ecommerce and retail sector is one of the most competitive
                markets in the world. This means that it's not just about
                finding the right product or service to offer, but also about
                finding a way to stand out from all the other websites that are
                out there.
              </p>
              <p className="font-content  md:w-[33rem] mt-6 text-justify">
                There's no doubt that your website has to be easy to navigate,
                but it also needs to be appealing and show off your brand
                identity in a way that will make visitors want to return again
                and again.
              </p>
              <p className="font-content md:w-[33rem] mt-6 text-justify">
                You can indeed get away with using simple graphics and text on
                your website if you're only selling one product or service, but
                as soon as you begin to sell more items or services, it becomes
                necessary for you to invest more time and money into making sure
                everything is done correctly.
              </p>
            </div>
            {/* Side Image*/}
          </div>

          {/* slider Section */}
          <div className="w-full md:h-[36rem] bg-EcommersBodybg  mt-16 py-8">
            <div className="px-8 md:px-12">
              <div>
                {/* "font-heading md:text-3xl text-xl mt-10 text-center text-Primary" */}
                <p className="text-white md:text-3xl text-xl mt-4 font-heading mb-6">
                  Why Choose Cerbosys as Your Tech Partner
                </p>
              </div>
              <div className="mt-3">
                {/* h-52 md:h-90 */}
                <Slider {...settings}>
                  <div className="h-96 md:h-90 px-8 ">
                    <div className="relative bg-Lightpink h-[140px] md:h-[200px] rounded-t-lg">
                      <div className="absolute inset-x-0 bottom-0 left-3 right-3 top-6 h-[160px]">
                        <img
                          src={ecommersarrival}
                          alt="img"
                          className="w-48 mx-auto  h-[118px] md:h-[178px]"
                        />
                      </div>
                    </div>

                    <div className="bg-white text-center rounded-br-[50px] h-32">
                      <div className="pt-5">
                        <p className=" font-subheading">
                          Fashion E-commerce<br></br> Store
                        </p>
                      </div>
                      <div className="">
                        <button className="bg-Primary rounded-md text-white px-2 mt-2 ">
                          Know More
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="h-52 md:h-90 px-8">
                    <div className="relative bg-Lightgreen h-[140px] md:h-[200px] rounded-t-lg">
                      <div className="absolute inset-x-0 bottom-0 left-3 right-3 top-6">
                        <img
                          src={ecommerfashi}
                          alt="img"
                          className="w-48 mx-auto  h-[118px] md:h-[178px]"
                        />
                      </div>
                    </div>

                    <div className="bg-white text-center  rounded-br-[50px] h-32">
                      <div className="pt-5">
                        <p className=" font-subheading">
                          Fashion E-commerce<br></br> Store
                        </p>
                      </div>
                      <div className="">
                        <button className="bg-Primary rounded-md text-white px-2 mt-2 ">
                          Know More
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="h-52 md:h-90 px-8">
                    <div className="relative bg-Lightblue h-[140px] md:h-[200px] rounded-t-lg">
                      <div className="absolute inset-x-0 bottom-0 left-3 right-3 top-6 h-[160px]">
                        <img
                          src={ecommersboutic}
                          alt="img"
                          className="w-48 mx-auto  h-[118px] md:h-[178px]"
                        />
                      </div>
                    </div>

                    <div className="bg-white  text-center  rounded-br-[50px] h-32">
                      <div className="pt-5">
                        <p className=" font-subheading">
                          Fashion E-commerce<br></br> Store
                        </p>
                      </div>
                      <div className="">
                        <button className="bg-Primary rounded-md text-white px-2 mt-2 ">
                          Know More
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="h-52 md:h-90 px-8">
                    <div className="relative bg-Lightgreen  h-[140px] md:h-[200px] rounded-t-lg">
                      <div className="absolute inset-x-0 bottom-0 left-3 right-3 top-6 h-[160px]">
                        <img
                          src={ecommerfashi}
                          alt="img"
                          className="w-48 mx-auto  h-[118px] md:h-[178px]"
                        />
                      </div>
                    </div>

                    <div className="bg-white  text-center  rounded-br-[50px] h-32">
                      <div className="pt-5">
                        <p className=" font-subheading">
                          Fashion E-commerce<br></br> Store
                        </p>
                      </div>
                      <div className="">
                        <button className="bg-Primary rounded-md text-white px-2 mt-2 ">
                          Know More
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="h-52 md:h-90 px-8">
                    <div className="relative bg-Lightpink h-[140px] md:h-[200px] rounded-t-lg">
                      <div className="absolute inset-x-0 bottom-0 left-3 right-3 top-6 h-[160px]">
                        <img
                          src={ecommersarrival}
                          alt="img"
                          className="w-48 mx-auto  h-[118px] md:h-[178px]"
                        />
                      </div>
                    </div>

                    <div className="bg-white  text-center  rounded-br-[50px] h-32">
                      <div className="pt-5">
                        <p className=" font-subheading">
                          Fashion E-commerce<br></br> Store
                        </p>
                      </div>
                      <div className="pt-4">
                        <button className="bg-Primary rounded-md text-white px-2 mt-2  ">
                          Know More
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="h-52 md:h-90 px-8">
                    <div className="relative bg-Lightgreen h-[140px] md:h-[200px] rounded-t-lg">
                      <div className="absolute inset-x-0 bottom-0 left-3 right-3 top-6">
                        <img
                          src={ecommerfashi}
                          alt="img"
                          className="w-48 mx-auto h-[118px] md:h-[178px]"
                        />
                      </div>
                    </div>

                    <div className="bg-white text-center  h-32   rounded-br-[50px]">
                      <div className="pt-5">
                        <p className=" font-subheading">
                          Fashion E-commerce<br></br> Store
                        </p>
                      </div>
                      <div className="">
                        <button className="bg-Primary rounded-md text-white px-2">
                          Know More
                        </button>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
          {/* slider Section Ends*/}
        </div>
      </div>
    </div>
  );
};
