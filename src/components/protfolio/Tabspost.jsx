import React from 'react';
import postimg1 from '../../assets/portfolio/postimg1.jpg';
import Sarthipost2 from '../../assets/portfolio/Sarthipost2.jpg';
import postimg3 from '../../assets/portfolio/postimg3.jpg';
import postimg4 from '../../assets/portfolio/postimg4.jpg';
import postimg5 from '../../assets/portfolio/postimg5.png';
import postimg6 from '../../assets/portfolio/postimg6.png';
import postimg7 from '../../assets/portfolio/postimg7.png';
import real from '../../assets/portfolio/real.mp4';

const Tabspost = () => {
  return (
    <>
      <div>
        <div className="mt-6 ">
          <h1 className="text-Purpal border-b-2  border-b-Orange rounded-md mx-auto  p-3 max-w-fit  text-center font-heading  md:text-3xl text-xl md:mb-5 min-w-fit mt-5 md:mt-0">
            Post
          </h1>
        </div>

        {/* w-[72%]  */}
        <div className="grid grid-cols-3 col-w-[33%] gap-10">
          <div className="">
            <img
              src={postimg7}
              alt="fgh"
              className="w-full rounded-lg h-full object-cover"
            />
          </div>
          <div className="">
            <img
              src={postimg7}
              alt="fgh"
              className="w-full rounded-lg h-full object-cover"
            />
          </div>
          <div className="">
            <img
              src={postimg7}
              alt="fgh"
              className="w-full rounded-lg h-full object-cover"
            />
          </div>
          <div className="">
            <img
              src={postimg7}
              alt="fgh"
              className="w-full rounded-lg object-cover"
            />
          </div>

          <div className="">
            <video className="rounded-lg" src={real} controls autoPlay></video>
          </div>
          <div className="">
            <video className="rounded-lg" src={real} controls autoPlay></video>
          </div>
          <div className="">
            <video className="rounded-lg" src={real} controls autoPlay></video>
          </div>

          {/* <div className="min-h-fit inline relative">
            <video className="rounded-lg" src={real} controls autoPlay></video>
          </div>
          <div className="min-h-fit inline relative">
            <img src={postimg7} alt="fgh" className="w-full rounded-lg" />
          </div>
          <div className="min-h-fit inline relative">
            <img src={postimg7} alt="fgh" className="w-full rounded-lg" />
          </div>
          <div className="min-h-fit inline relative">
            <img src={postimg7} alt="fgh" className="w-full rounded-lg" />
          </div>
          <div className="min-h-fit inline relative">
            <img src={postimg7} alt="fgh" className="w-full rounded-lg" />
          </div>
          <div className="min-h-fit inline relative">
            <img src={postimg7} alt="fgh" className="w-full rounded-lg" />
          </div>
          <div className="min-h-fit">
            <video className="rounded-lg" src={real} controls autoPlay></video>
          </div>
          <div className="min-h-fit inline relative">
            <img src={postimg7} alt="fgh" className="w-full rounded-lg" />
          </div>
          <div className="min-h-fit inline relative">
            <img src={postimg7} alt="fgh" className="w-full rounded-lg" />
          </div>
          <div className="min-h-fit inline relative">
            <img src={postimg7} alt="fgh" className="w-full rounded-lg" />
          </div>
          <div className="min-h-fit inline relative">
            <video className="rounded-lg" src={real} controls autoPlay></video>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Tabspost;
