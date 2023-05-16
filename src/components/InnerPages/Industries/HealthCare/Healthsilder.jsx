import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import silder1img from '../../../../assets/innerpage/healthcare/silder1img.png';
import silder2img from '../../../../assets/innerpage/healthcare/silder2img.png';
import gym from '../../../../assets/innerpage/healthcare/gym.jpg';
import salon from '../../../../assets/innerpage/healthcare/salon.jpg';
import barbistan from '../../../../assets/innerpage/healthcare/barbistan.jpg';
// import silder3img from '../../../../assets/innerpage/healthcare/silder3img.png';
const Healthsilder = () => {
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
    <>
      <div className=" mx-auto w-full md:h-[36rem] bg-EcommersBodybg  py-12 px-4 bg-cover md:bg-top bg-center">
        <div className="max-w-[1040px] mx-auto ">
          <div className="px-8 md:px-12">
            <div>
              {/* "font-heading md:text-3xl text-xl mt-10 text-center text-Primary" */}
              <p className="text-white uppercase md:text-3xl text-xl mt-4 font-heading text-center mb-6">
                Our Portfolio
              </p>
            </div>
            <div>
              <Slider {...settings}>
                <div className="h-96 md:h-90 px-8 ">
                  <div className="relative bg-Lightpink h-[140px] md:h-[200px] rounded-t-lg">
                    <div className="absolute inset-x-0 bottom-0 left-3 right-3 top-6 h-[160px]">
                     
                    <a href="https://healthcare.cerbosys.com/fitness-gym" target='_blank'  rel='noreferrer'>
                    <img
                        src={gym}
                        alt="img"
                        className="w-48 mx-auto  h-[118px] md:h-[178px]"
                      />
               </a>
     
     
                     
                    </div>
                  </div>

                  <div className="bg-white text-center rounded-br-[50px] h-32">
                    <div className="pt-5">
                      <p className=" font-subheading">
                      Fitness<br></br> gym
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
                    <a href="https://healthcare.cerbosys.com/lookwell-parlour" target='_blank'  rel='noreferrer' >
                    <img
                        src={salon}
                        alt="img"
                        className="w-48 mx-auto  h-[118px] md:h-[178px]"
                      />
                
                </a>
                     
                    </div>
                  </div>

                  <div className="bg-white text-center  rounded-br-[50px] h-32">
                    <div className="pt-5">
                      <p className=" font-subheading">
                      Lookwell<br></br> Parlour
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
                    <a href="https://healthcare.cerbosys.com/mens-hair-salon" 
                    target='_blank'  rel='noreferrer'>       
                   <img
                        src={barbistan}
                        alt="img"
                        className="w-48 mx-auto  h-[118px] md:h-[178px]"
                      />
              </a>
                      
                    </div>
                  </div>

                  <div className="bg-white  text-center  rounded-br-[50px] h-32">
                    <div className="pt-5">
                      <p className=" font-subheading">
                      Mens Hair<br></br> Salon
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Healthsilder;
