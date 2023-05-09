import React from 'react';
import postimg1 from '../../assets/portfolio/postimg1.jpg';
import Sarthipost2 from '../../assets/portfolio/Sarthipost2.jpg';
import postimg3 from '../../assets/portfolio/postimg3.jpg';
import postimg4 from '../../assets/portfolio/postimg4.jpg';
import postimg5 from '../../assets/portfolio/postimg5.png';
import postimg7 from '../../assets/portfolio/postimg7.png';
import real from '../../assets/portfolio/real.mp4';
import reel2 from '../../assets/portfolio/reel2.mp4';
import reel3 from '../../assets/portfolio/reel3.mp4';
import reel4 from '../../assets/portfolio/reel4.mp4';
import reel5 from '../../assets/portfolio/reel5.mp4';
import postiim5 from '../../assets/portfolio/postiim5.png';
import postim from '../../assets/portfolio/postim.png';
import postim6 from '../../assets/portfolio/postim6.png';
import postim7 from '../../assets/portfolio/postim7.png';
import postimg2 from '../../assets/portfolio/postimg2.png';
import postim8 from '../../assets/portfolio/postim8.png';
import reel8 from '../../assets/portfolio/reel8.mp4';
import reel9 from '../../assets/portfolio/reel9.mp4';
import reel0 from '../../assets/portfolio/reel0.mp4';

const Tabspost = () => {
  // const data = [
  //   {
  //     img: postimg1,
  //   },
  //   {
  //     img1: Sarthipost2,
  //   },
  //   {
  //     img2: postimg1,
  //   },
  //   {
  //     img: postimg1,
  //   },
  //   {
  //     img1: postimg3,
  //   },
  //   {
  //     img2: postimg4,
  //   },
  //   {
  //     img: postimg1,
  //   },
  //   {
  //     img2: real,
  //   },
  // ];
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
                    className="block h-full w-full  rounded-2xl  object-fill  object-center "
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
                  <video className=" rounded-2xl " src={real} controls></video>
                </div>
              </div>
              <div className="flex w-1/2 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full  rounded-2xl  object-fill object-center"
                    src={postim}
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full  rounded-2xl  object-fill object-center"
                    src={postiim5}
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <video className="rounded-2xl" src={reel2} controls></video>
                </div>
              </div>
              <div className="flex w-1/2 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-2xl object-fill object-center"
                    src={postimg7}
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
                  <video className=" rounded-2xl " src={reel5} controls></video>
                </div>
              </div>
              <div className="flex w-1/2 flex-wrap">
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full  rounded-2xl  object-fill object-center"
                    src={postimg2}
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full  rounded-2xl  object-fill object-center"
                    src={postim6}
                  />
                </div>
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full  rounded-2xl  object-fill object-center"
                    src={Sarthipost2}
                  />
                </div>
              </div>
              <div className="flex w-1/2 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full  rounded-2xl  object-fill object-center"
                    src={postimg1}
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full  rounded-2xl  object-fill object-center"
                    src={postimg2}
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <video className=" rounded-2xl " src={reel4} controls></video>
                </div>
              </div>
              <div className="flex w-1/2 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full  rounded-2xl  object-fill object-center"
                    src={postimg1}
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
                  <video className=" rounded-2xl " src={reel3} controls></video>
                </div>
              </div>
              <div className="flex w-1/2 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-2xl  object-fill object-center"
                    src={postimg2}
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
                  <video className=" rounded-2xl " src={real} controls></video>
                </div>
              </div>
              <div className="flex w-1/2 flex-wrap">
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-2xl   object-fill object-center"
                    src={postimg2}
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
                    src={postimg2}
                  />
                </div>
              </div>
              <div className="flex w-1/2 flex-wrap">
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full  rounded-2xl  object-fill  object-center"
                    src={postim8}
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
                  <video className=" rounded-2xl " src={reel8} controls></video>
                </div>
              </div>
              <div className="flex w-1/2 flex-wrap">
                <div className="w-1/2 p-1 md:p-2">
                  <video className=" rounded-2xl " src={reel9} controls></video>
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <video className=" rounded-2xl " src={reel0} controls></video>
                </div>
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full  rounded-2xl   object-fill object-center"
                    src={postim7}
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
