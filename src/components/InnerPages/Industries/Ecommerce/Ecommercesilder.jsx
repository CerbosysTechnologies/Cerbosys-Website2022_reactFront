import React from 'react';
import Slider from 'react-slick';

import Footwear from '../../../../assets/innerpage/ecommerce/Footwear.jpg';
import ecommerfashi from '../../../../assets/innerpage/ecommerce/ecommerfashi.png';
import Ecommersarrival from '../../../../assets/innerpage/ecommerce/ecommersarrival.png';
import apparel from '../../../../assets/innerpage/ecommerce/apparel.jpg';
import boutique from '../../../../assets/innerpage/ecommerce/boutique.jpg';
import { Link } from 'react-router-dom';
const Ecommercesilder = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
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
      {/*  */}
      <Slider {...settings}>
      
        <div className=" px-8">
          <div className="relative bg-Lightgreen h-[140px] md:h-[200px] rounded-t-lg">
            <div className="absolute inset-x-0 bottom-0 left-3 right-3 top-6">
              <img
                src={Footwear}
                alt="img"
                className="w-48 mx-auto  h-[118px] md:h-[178px]"
              />
            </div>
          </div>

          <div className="bg-white text-center  rounded-br-[50px] h-32">
            <div className="pt-5">
              <p className=" font-subheading">
              Footwear<br></br> Store
              </p>
            </div>
            <div className="">
              <Link to="/Portfolio">
                <button className="bg-Primary rounded-md text-white px-2 mt-2 ">
                  Know More
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className=" px-8">
          <div className="relative bg-Lightblue h-[140px] md:h-[200px] rounded-t-lg">
            <div className="absolute inset-x-0 bottom-0 left-3 right-3 top-6 h-[160px]">
              <img
                src={boutique}
                alt="img"
                className="w-48 mx-auto  h-[118px] md:h-[178px]"
              />
            </div>
          </div>

          <div className="bg-white  text-center  rounded-br-[50px] h-32">
            <div className="pt-5">
              <p className=" font-subheading">
              Womens-Clothing<br></br> Store
              </p>
            </div>
            <div className="">
              <Link to="/Portfolio">
                <button className="bg-Primary rounded-md text-white px-2 mt-2 ">
                  Know More
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className=" px-8">
          <div className="relative bg-Lightgreen  h-[140px] md:h-[200px] rounded-t-lg">
            <div className="absolute inset-x-0 bottom-0 left-3 right-3 top-6 h-[160px]">
              <img
                src={Ecommersarrival}
                alt="img"
                className="w-48 mx-auto  h-[118px] md:h-[178px]"
              />
            </div>
          </div>

          <div className="bg-white  text-center  rounded-br-[50px] h-32">
            <div className="pt-5">
              <p className=" font-subheading">
              Accessories<br></br> Online Shopping
              </p>
            </div>
            <div className="">
              <Link to="/Portfolio">
                <button className="bg-Primary rounded-md text-white px-2 mt-2 ">
                  Know More
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className=" px-8">
          <div className="relative bg-Lightpink h-[140px] md:h-[200px] rounded-t-lg">
            <div className="absolute inset-x-0 bottom-0 left-3 right-3 top-6 h-[160px]">
              <img
                src={ecommerfashi}
                alt="img"
                className="w-48 mx-auto h-[118px] md:h-[178px]"
              />
            </div>
          </div>

          <div className="bg-white text-center rounded-br-[50px] h-32">
            <div className="pt-5">
              <p className=" font-subheading">
              Designer<br></br> Boutique
              </p>
            </div>
            <div className="">
              <Link to="/Portfolio">
                <button className="bg-Primary rounded-md text-white px-2 mt-2">
                  Know More
                </button>
              </Link>
            </div>
          </div>
        </div>
       
      </Slider>
    </div>
  );
};

export default Ecommercesilder;
