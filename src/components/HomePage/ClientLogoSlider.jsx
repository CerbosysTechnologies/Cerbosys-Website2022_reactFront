import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";
import icon1 from '../../assets/clientlogo/1.png'
import icon2 from '../../assets/clientlogo/2.png'
import icon3 from '../../assets/clientlogo/3.png'
import icon4 from '../../assets/clientlogo/4.jpg'
import icon5 from '../../assets/clientlogo/5.jpg'
import icon6 from '../../assets/clientlogo/6.png'
import icon7 from '../../assets/clientlogo/7.jpg'
import icon8 from '../../assets/clientlogo/8.png'
import icon9 from '../../assets/clientlogo/9.png'
import icon10 from '../../assets/clientlogo/12.png'
import icon11 from '../../assets/clientlogo/13.png'
import icon12 from '../../assets/clientlogo/14.png'
import icon13 from '../../assets/clientlogo/15.jpg'
import icon14 from '../../assets/clientlogo/16.png'
import icon15 from '../../assets/clientlogo/17.png'
import icon16 from '../../assets/clientlogo/18.png'
import icon17 from '../../assets/clientlogo/19.png'


import AliceCarousel from 'react-alice-carousel';


const featuredicons = [
    icon1,icon2,icon3,icon4,icon5,icon6,
    icon7,icon8,icon9,icon10,icon11,icon12,
    icon13,icon14,icon15,icon16,icon17,
  ];
  
  let count = 0;
  let slideInterval;

const ClientLogoSlider = () => {

    <AliceCarousel mouseTracking items={featuredicons}/>
    // <AliceCarousel mouseTracking items={featuredProducts} />
    // const [currentIndex, setCurrentIndex] = useState(0);

    // const slideRef = useRef();
  
    // const removeAnimation = () => {
    //   slideRef.current.classList.remove("fade-anim");
    // };
  
    // useEffect(() => {
    //   slideRef.current.addEventListener("animationend", removeAnimation);
    //   slideRef.current.addEventListener("mouseenter", pauseSlider);
    //   slideRef.current.addEventListener("mouseleave", startSlider);
  
    //   startSlider();
    //   return () => {
    //     pauseSlider();
    //   };
    //   // eslint-disable-next-line
    // }, []);
  
    // const startSlider = () => {
    //   slideInterval = setInterval(() => {
    //     handleOnNextClick();
    //   }, 3000);
    // };
  
    // const pauseSlider = () => {
    //   clearInterval(slideInterval);
    // };
  
    // const handleOnNextClick = () => {
    //   count = (count + 3) % featuredProducts.length;
    //   setCurrentIndex(count);
    //   slideRef.current.classList.add("fade-anim");
    // };
    // const handleOnPrevClick = () => {
    //   const productsLength = featuredProducts.length;
    //   count = (currentIndex + productsLength - 1) % productsLength;
    //   setCurrentIndex(count);
    //   slideRef.current.classList.add("fade-anim");
    // };
  



  return (
    <div>

{/* <div ref={slideRef} className="w-full select-none relative mt-10">
      <div className="aspect-w-8 aspect-h-9">
        <img src={featuredProducts[currentIndex]} alt="" className='mx-16 w-32'/>
      </div>

      <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 
      flex justify-between items-center">
        <button
          className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnPrevClick}
        >
          <AiOutlineVerticalRight size={30} />
        </button>
        <button
          className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnNextClick}
        >
          <AiOutlineVerticalLeft size={30} />
        </button>
      </div>
    </div> */}
    </div>
  )
}

export default ClientLogoSlider