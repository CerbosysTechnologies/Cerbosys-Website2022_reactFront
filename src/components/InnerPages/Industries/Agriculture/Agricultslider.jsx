import React from "react";

import Slider from "react-slick";

import food from "../../../../assets/innerpage/agriculture/food.jpg";
import plant from "../../../../assets/innerpage/agriculture/plant.jpg";
import Agriculture from "../../../../assets/innerpage/agriculture/Agriculture.jpg";

import { Link } from "react-router-dom";

const Agricultslider = () => {
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
      <Slider {...settings}>
        <div className="h-96 md:h-90 px-8">
          <div className="relative bg-Lightpink h-[140px] md:h-[200px] rounded-t-lg">
            <div className="absolute inset-x-0 bottom-0 left-3 right-3 top-6 h-[160px]">
              <a
                href="https://agriculture.cerbosys.com/order-food-online"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={food}
                  alt="Mobile App Development Services"
                  className="w-48 mx-auto  h-[118px] md:h-[178px]"
                />
              </a>
            </div>
          </div>

          <div className="bg-white text-center rounded-br-[50px] h-32">
            <div className="pt-5">
              <p className=" font-subheading">
                Food <br></br> ordering
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
        <div className="h-52 md:h-90 px-8">
          <div className="relative bg-Lightgreen h-[140px] md:h-[200px] rounded-t-lg">
            <div className="absolute inset-x-0 bottom-0 left-3 right-3 top-6">
              <a
                href="https://agriculture.cerbosys.com/plants"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={plant}
                  alt="Mobile App Development Services"
                  className="w-48 mx-auto  h-[118px] md:h-[178px]"
                />
              </a>
            </div>
          </div>

          <div className="bg-white text-center  rounded-br-[50px] h-32">
            <div className="pt-5">
              <p className=" font-subheading">
                Plants<br></br> Store
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
        <div className="h-52 md:h-90 px-8">
          <div className="relative bg-Lightblue h-[140px] md:h-[200px] rounded-t-lg">
            <div className="absolute inset-x-0 bottom-0 left-3 right-3 top-6 h-[160px]">
              <a
                href="https://agriculture.cerbosys.com/agricuture"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={Agriculture}
                  alt="Mobile App Development Services"
                  className="w-48 mx-auto  h-[118px] md:h-[178px]"
                />
              </a>
            </div>
          </div>

          <div className="bg-white  text-center  rounded-br-[50px] h-32">
            <div className="pt-5">
              <p className=" font-subheading">
                Farming<br></br>
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
      </Slider>
    </div>
  );
};

export default Agricultslider;
