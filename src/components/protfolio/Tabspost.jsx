import React from 'react';
import postimg1 from '../../assets/portfolio/postimg1.jpg';
import Sarthipost2 from '../../assets/portfolio/Sarthipost2.jpg';
import postimg3 from '../../assets/portfolio/postimg3.jpg';
import postimg4 from '../../assets/portfolio/postimg4.jpg';
import postimg5 from '../../assets/portfolio/postimg5.png';
import postimg6 from '../../assets/portfolio/postimg6.png';
import postimg7 from '../../assets/portfolio/postimg7.png';
import real from '../../assets/portfolio/real.mp4';
import InfiniteScroll from 'react-infinite-scroll-component';

const Tabspost = () => {
  const data = [
    {
      img: postimg1,
    },
    {
      img1: Sarthipost2,
    },
    {
      img2: postimg1,
    },
    {
      img: postimg1,
    },
    {
      img1: postimg3,
    },
    {
      img2: postimg4,
    },
    {
      img: postimg1,
    },
    {
      img2: real,
    },
  ];
  return (
    <>
      <div>
        <div className="mt-6 ">
          <h1 className="text-Purpal border-b-2  border-b-Orange rounded-md mx-auto  p-3 max-w-fit  text-center font-heading  md:text-3xl text-xl md:mb-5 min-w-fit mt-5 md:mt-0">
            Post
          </h1>
        </div>

        <section className="overflow-hidden text-neutral-700">
          <div className="container mx-auto px-0 md:px-5 py-2 lg:px-20 lg:pt-12">
            <div className="-m-1 flex flex-wrap md:-m-2">
              <div className="flex w-1/2 flex-wrap">
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full  rounded-2xl  object-fill  object-center hover:opacity-2"
                    src={Sarthipost2}
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full  rounded-2xl  object-fill object-center"
                    src={postimg1}
                  />
                </div>
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full  rounded-2xl  object-fill object-center"
                    src={postimg3}
                  />
                </div>
              </div>
              <div className="flex w-1/2 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full  rounded-2xl  object-fill object-center"
                    src={postimg5}
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full  rounded-2xl   object-fill object-center"
                    src={postimg4}
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <video
                    className=" rounded-2xl "
                    src={real}
                    controls
                    autoPlay
                  ></video>
                </div>
              </div>
              <div className="flex w-1/2 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full  rounded-2xl  object-cover object-center"
                    src={postimg1}
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full  rounded-2xl  object-fill object-center"
                    src={Sarthipost2}
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <video
                    className="rounded-2xl"
                    src={real}
                    controls
                    autoPlay
                  ></video>
                </div>
              </div>
              <div className="flex w-1/2 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-2xl object-cover object-center"
                    src={postimg7}
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full  rounded-2xl  object-cover object-center"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <video
                    className=" rounded-2xl "
                    src={real}
                    controls
                    autoPlay
                  ></video>
                </div>
              </div>
              <div className="flex w-1/2 flex-wrap">
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full  rounded-2xl  object-cover object-center"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full  rounded-2xl  object-fill object-center"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
                  />
                </div>
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full  rounded-2xl  object-fill object-center"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                  />
                </div>
              </div>
              <div className="flex w-1/2 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full  rounded-2xl  object-fill object-center"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full  rounded-2xl  object-fill object-center"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <video
                    className=" rounded-2xl "
                    src={real}
                    controls
                    autoPlay
                  ></video>
                </div>
              </div>
              <div className="flex w-1/2 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full  rounded-2xl  object-cover object-center"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full  rounded-2xl  object-cover object-center"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <video
                    className=" rounded-2xl "
                    src={real}
                    controls
                    autoPlay
                  ></video>
                </div>
              </div>
              <div className="flex w-1/2 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-2xl  object-cover object-center"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full  rounded-2xl  object-fill object-center"
                    src={postimg7}
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <video
                    className=" rounded-2xl "
                    src={real}
                    controls
                    autoPlay
                  ></video>
                </div>
              </div>
              <div className="flex w-1/2 flex-wrap">
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-2xl   object-fill object-center"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full  rounded-2xl  object-fill object-center"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
                  />
                </div>
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full  rounded-2xl  object-fill object-center"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                  />
                </div>
              </div>
              <div className="flex w-1/2 flex-wrap">
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full  rounded-2xl  object-fill  object-center"
                    src={Sarthipost2}
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full  rounded-2xl  object-fill object-center"
                    src={postimg1}
                  />
                </div>
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full  rounded-2xl  object-fill object-center"
                    src={postimg3}
                  />
                </div>
              </div>
              <div className="flex w-1/2 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full  rounded-2xl  object-fill object-center"
                    src={postimg5}
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full  rounded-2xl   object-fill object-center"
                    src={postimg4}
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full  rounded-2xl   object-fill object-center"
                    src={postimg1}
                  />
                </div>
              </div>
              <div className="flex w-1/2 flex-wrap">
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full  rounded-2xl  object-fill object-center"
                    src={postimg5}
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full  rounded-2xl   object-fill object-center"
                    src={postimg4}
                  />
                </div>
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full  rounded-2xl   object-fill object-center"
                    src={postimg7}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Tabspost;
