import React, { useState, useEffect, useRef } from "react";
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";
import icon1 from "../../assets/clientlogo/1.png";
import icon2 from "../../assets/clientlogo/2.png";
import icon3 from "../../assets/clientlogo/3.png";
import icon4 from "../../assets/clientlogo/4.jpg";
import icon5 from "../../assets/clientlogo/5.jpg";
import icon6 from "../../assets/clientlogo/6.png";
import icon7 from "../../assets/clientlogo/7.jpg";
import icon8 from "../../assets/clientlogo/8.png";
import icon9 from "../../assets/clientlogo/9.png";
import icon10 from "../../assets/clientlogo/12.png";
import icon11 from "../../assets/clientlogo/13.png";
import icon12 from "../../assets/clientlogo/14.png";
import icon13 from "../../assets/clientlogo/15.jpg";
import icon14 from "../../assets/clientlogo/16.png";
import icon15 from "../../assets/clientlogo/17.png";
import icon16 from "../../assets/clientlogo/18.png";
import icon17 from "../../assets/clientlogo/19.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const featuredicons = [
  icon1, icon2, icon3, icon4, icon5, icon6, icon7,
  icon8, icon9, icon10, icon11, icon12, icon13, icon14,
  icon15, icon16, icon17, ];

const ClientLogoSlider = () => {
  SwiperCore.use([Autoplay]);

  return (
    <div className="flex flex-wrap items-center z-[-15]">
      <Swiper className="md:h-64 h-72"
       modules={[Autoplay, Pagination]}
       pagination={{
        clickable: true}}
        loop={true}
        slidesPerView={3}       
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}>
        {featuredicons.map((slideContent, index) => (
          <SwiperSlide key={slideContent} virtualIndex={index}>
            <img src={slideContent} alt="" className="w-40 h-36 mt-10 mx-6 " />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientLogoSlider;
