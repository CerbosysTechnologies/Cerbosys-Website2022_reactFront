import React from 'react';
import Slider from 'react-slick';
// import ecommercemobicon from '../../../../assets/innerpage/ecommerce/ecommercemob.png';
import ecommersarrival from '../../../../assets/innerpage/ecommerce/ecommersarrival.png';
import ecommerfashi from '../../../../assets/innerpage/ecommerce/ecommerfashi.png';
import ecommersboutic from '../../../../assets/innerpage/ecommerce/ecommersboutic.png';
const Ecommercesilder = () => {
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
    <div className="mt-8">
      {/* h-52 md:h-90 */}
      <Slider {...settings}>
        <div className="h-96 md:h-90 px-8">
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
            <div className="">
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
              <button className="bg-Primary rounded-md text-white px-2 mt-2">
                Know More
              </button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Ecommercesilder;
