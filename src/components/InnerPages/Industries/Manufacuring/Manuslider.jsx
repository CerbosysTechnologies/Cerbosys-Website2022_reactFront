import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import industry from '../../../../assets/innerpage/manufacturing/industry.jpg';
import manufacturing from '../../../../assets/innerpage/manufacturing/manufacturing.jpg';
import manufacturing1 from '../../../../assets/innerpage/manufacturing/manufacturing1.jpg';
const Manuslider = () => {
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
      {/* h-52 md:h-90 */}
      <Slider {...settings}>
        <div className="h-96 md:h-90 px-8">
          <div className="relative bg-Lightpink h-[140px] md:h-[200px] rounded-t-lg">
            <div className="absolute inset-x-0 bottom-0 left-3 right-3 top-6 h-[160px]">
              <img
                src={manufacturing1}
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
              <img
                src={manufacturing}
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
              <img
                src={industry}
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
              <Link to="/Portfolio">
                <button className="bg-Primary rounded-md text-white px-2 mt-2 ">
                  Know More
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="h-52 md:h-90 px-8">
          <div className="relative bg-Lightgreen  h-[140px] md:h-[200px] rounded-t-lg">
            <div className="absolute inset-x-0 bottom-0 left-3 right-3 top-6 h-[160px]">
              <img
                src={manufacturing1}
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
              <Link to="/Portfolio">
                <button className="bg-Primary rounded-md text-white px-2 mt-2 ">
                  Know More
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="h-52 md:h-90 px-8">
          <div className="relative bg-Lightpink h-[140px] md:h-[200px] rounded-t-lg">
            <div className="absolute inset-x-0 bottom-0 left-3 right-3 top-6 h-[160px]">
              <img
                src={manufacturing}
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
              <Link to="/Portfolio">
                <button className="bg-Primary rounded-md text-white px-2 mt-2  ">
                  Know More
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="h-52 md:h-90 px-8">
          <div className="relative bg-Lightgreen h-[140px] md:h-[200px] rounded-t-lg">
            <div className="absolute inset-x-0 bottom-0 left-3 right-3 top-6">
              <img
                src={industry}
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

export default Manuslider;
