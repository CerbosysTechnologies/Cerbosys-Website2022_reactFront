import React from "react";
import slider1 from "../../../../assets/innerpage/education/slider1.png";
import second from "../../../../assets/innerpage/education/second.png";
import third from "../../../../assets/innerpage/education/third.png";
import coaching from "../../../../assets/innerpage/education/coaching.jpg";
import school from "../../../../assets/innerpage/education/school.jpg";
import college from "../../../../assets/innerpage/education/college.jpg";
import Slider from "react-slick";
import { Link } from "react-router-dom";
const Educattionsilder = () => {
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
    <div>
      {" "}
      <div className="">
        <div className="w-full md:h-[36rem] bg-EcommersBodybg h-96   mt-16 py-8">
          <div className="max-w-[1040px] mx-auto ">
            <div className="px-8 md:px-12">
              <div>
                {/* "font-heading md:text-3xl text-xl mt-10 text-center text-Primary" */}
                <p className="text-white md:text-3xl uppercase text-xl mt-4 font-heading text-center mb-6">
                  Our Portfolio
                </p>
              </div>
              <div>
                <Slider {...settings}>
                  <div className="h-96 md:h-90 px-8 ">
                    <div className="relative bg-Lightpink h-[140px] md:h-[200px] rounded-t-lg">
                      <div className="absolute inset-x-0 bottom-0 left-3 right-3 top-6 h-[160px]">
                        <a
                          href="https://education.cerbosys.com/online-education"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src={college}
                            alt="img"
                            className="w-48 mx-auto  h-[118px] md:h-[178px]"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="bg-white text-center rounded-br-[50px] h-32">
                      <div className="pt-5">
                        <p className=" font-subheading">
                          {" "}
                          Online <br></br> Education
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
                          href="https://education.cerbosys.com/coaching-classes-online"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src={coaching}
                            alt="img"
                            className="w-48 mx-auto  h-[118px] md:h-[178px]"
                          />
                        </a>
                      </div>
                    </div>

                    <div className="bg-white text-center  rounded-br-[50px] h-32">
                      <div className="pt-5">
                        <p className=" font-subheading">
                          Coaching Classes <br></br> Online
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
                          href="https://education.cerbosys.com/top-international-school"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={school}
                            alt="img"
                            className="w-48 mx-auto  h-[118px] md:h-[178px]"
                          />
                        </a>
                      </div>
                    </div>

                    <div className="bg-white  text-center  rounded-br-[50px] h-32">
                      <div className="pt-5">
                        <p className=" font-subheading">
                          Top International<br></br> School
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
      </div>
    </div>
  );
};

export default Educattionsilder;
