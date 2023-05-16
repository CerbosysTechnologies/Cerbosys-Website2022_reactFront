import React from 'react';
import { Link } from 'react-router-dom';
import architecture from '../../../../assets/innerpage/realestate/architecture.jpg';
import realstate from '../../../../assets/innerpage/realestate/realstate.jpg';
import hotel from '../../../../assets/innerpage/realestate/hotel.jpg';
import Slider from 'react-slick';

const Realsilder = () => {
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
            <a href="https://realestate.cerbosys.com/architectural-design"
              target="_blank" rel="noopener noreferrer">
               <img
                src={architecture}
                alt="img"
                className="w-48 mx-auto  h-[118px] md:h-[178px]"
              />
              </a>
            
            </div>
          </div>

          <div className="bg-white text-center rounded-br-[50px] h-32">
            <div className="pt-5">
              <p className=" font-subheading">
              Architectural <br></br> Design
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
            <a href="https://realestate.cerbosys.com/property-dealing"
            target="_blank" rel="noopener noreferrer">
             <img
                src={realstate}
                alt="img"
                className="w-48 mx-auto  h-[118px] md:h-[178px]"
              /></a>
             
            </div>
          </div>

          <div className="bg-white text-center  rounded-br-[50px] h-32">
            <div className="pt-5">
              <p className=" font-subheading">
              Property <br></br> Dealing
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
            <a href="https://realestate.cerbosys.com/book-luxury-hotel-online"
             target="_blank" rel="noopener noreferrer">
               <img
                src={hotel}
                alt="img"
                className="w-48 mx-auto  h-[118px] md:h-[178px]"
              />
              </a>
             
            </div>
          </div>

          <div className="bg-white  text-center  rounded-br-[50px] h-32">
            <div className="pt-5">
              <p className=" font-subheading">
              Book Luxury <br></br> Hotel Online
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

export default Realsilder;
