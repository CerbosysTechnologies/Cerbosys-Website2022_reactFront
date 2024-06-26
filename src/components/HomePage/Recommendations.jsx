import React from 'react';
import topfirmicon from '../../assets/recommend/topdeveloper.svg';
import goodfirmicon from '../../assets/recommend/goodfirm.svg';
import clutchicon from '../../assets/recommend/clutch.svg';
import appfuturaicon from '../../assets/recommend/aapfutura.svg';
import Entrepreneur from '../../assets/recommend/Entrepreneur India.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Recommendations = () => {
  SwiperCore.use([Autoplay]);
  return (
    <div>
      <div className="bg-[#FAF6F5] mx-auto w-full h-full py-16 px-4 ">
        <div className="max-w-[1240px] mx-auto">
          {/* Heading */}
          <div className="justify-center items-center text-center">
            <h2 className="font-heading text-center md:text-3xl uppercase text-lg">
              Recommendations
            </h2>
          </div>
          {/* Heading Ends */}

          {/* Slider Div */}
          <div className="flex flex-wrap items-center z-[-15]">
            <Swiper
              className="md:h-96 h-80"
              modules={[Autoplay, Pagination]}
              pagination={{
                clickable: true,
              }}
              loop={true}
              slidesPerView={3}
              autoplay
            >
              <SwiperSlide>
                <img
                  src={topfirmicon}
                  alt="Mobile App Development Services"
                  className="md:w-72 md:h-72 mt-10 md:mx-4 px-2 w-80 h-80 md:mt-0 scale-100 hover:scale-125 ease-out duration-500"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={Entrepreneur}
                  alt="Mobile App Development Services"
                  className="md:w-72 md:h-72 mt-10 md:mx-4 px-2 w-80 h-80 md:mt-0 scale-100 hover:scale-125 ease-out duration-500"
                />
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="https://www.goodfirms.co/company/cerbosys-technologies-inc"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={goodfirmicon}
                    alt="Mobile App Development Services"
                    className="md:w-72 md:h-72 mt-10 md:mx-4 px-2 w-80 h-80 md:mt-0 scale-100 hover:scale-125 ease-out duration-500"
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="https://clutch.co/profile/cerbosys-technologies#summary"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={clutchicon}
                    alt="Mobile App Development Services"
                    className="md:w-72 md:h-72 mt-10 md:mx-4 px-2 w-80 h-80 md:mt-0 scale-100 hover:scale-125 ease-out duration-500"
                  />{' '}
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="https://www.appfutura.com/companies/cerbosys-technologies"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={appfuturaicon}
                    alt="Mobile App Development Services"
                    className="md:w-72 md:h-72 mt-10 md:mx-4 px-2 w-80 h-80 md:mt-0 scale-100 hover:scale-125 ease-out duration-500"
                  />
                </a>
              </SwiperSlide>
              {/* ))} */}
            </Swiper>
          </div>
          {/* Slider Div Ends*/}
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
