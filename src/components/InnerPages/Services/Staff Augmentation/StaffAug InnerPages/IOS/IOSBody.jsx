import React from 'react';
import iosapple from '../../../../../../assets/innerpage/ios/iosapple.png';
import reactjsgroup from '../../../../../../assets/innerpage/reactjs/reactjsgroup.png';
import iosrightimg from '../../../../../../assets/innerpage/ios/iosrightimg.png';
import iconapple from '../../../../../../assets/innerpage/ios/iconapple.svg';
import Heading from '../Heading';
import Reactwork from '../Reactjs/Reactwork';
import Reacthelpfull from '../Reactjs/Reacthelpfull';

const IOSBody = () => {
  return (
    <div>
      <div className=" mx-auto w-full py-16 px-4 ">
        <div className="max-w-[1240px] mx-auto ">
          {/* start nodejs developer section */}
          <div className="flex md:flex-nowrap gap-16 md:gap-28 flex-wrap flex-row justify-between">
            <div className="w-[100%] md:w-[70%] ">
              <Heading
                className="text-Primary"
                title="About iOS Development Services"
              />
              <p className="font-content   mt-6 text-justify max-w-fit">
                iOS Development Services is the best way to get your app
                approved for the App Store. We offer a wide range of services,
                from coding and design to marketing and distribution.
              </p>
              <p className="font-content   mt-5 text-justify max-w-fit ">
                With our iOS development services, you can focus on what you
                love most: creating your app. You don't have to worry about all
                the technical details that come with building an app—we'll take
                care of them so you can spend your time building something
                great!
              </p>
            </div>
            <div className="w-[100%] md:w-[30%] ">
              <div className="px-4">
                <img src={iosapple} alt="img" className="w-[80%] mx-auto" />
              </div>
            </div>
          </div>
          {/* end nodejs developer section */}
        </div>
      </div>
      {/* start Process to Hire ios Developer From Us */}
      <div className="bg-gradient-to-r from-cyan-400 to-blue-500 py-8">
        <div className="max-w-[1240px] mx-auto px-3">
          <Heading
            className="text-Primarys"
            title="Process to Hire iOS Developer From Us"
          />
          <div className="flex md:flex-nowrap items-center gap-16 md:gap-28 flex-wrap flex-row justify-between py-10">
            <div className="w-[100%] md:w-[45%] ">
              <div className="px-4">
                <div className="px-4 ">
                  <img src={reactjsgroup} alt="img" className="w-full py-16" />
                </div>
              </div>
            </div>
            <div className="w-[100%] md:w-[55%] ">
              <div className="px-4">
                <img src={iosrightimg} alt="img" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end Process to Hire ios Developer From Us */}
      {/*start Why work with us */}
      <Reactwork />
      {/*end Why work with us */}
      {/* start Benefits of Hiring React JS */}
      <div className="bg-gradient-to-r from-cyan-50 to-blue-500">
        <div className="max-w-[1240px] mx-auto px-3 py-8">
          <Heading title="Benefits of Hiring Node JS Developers for your business" />
          <div className="flex justify-between   gap-20  flex-wrap md:flex-nowrap mt-7">
            <div className="flex gap-5 md:w-[50%] w-[100%]">
              <div className="w-[20%]">
                <img src={iconapple} alt="img" className="w-[60px] mx-auto" />
              </div>
              <div className="w-[80%]">
                <p className="font-content text-Primary   mt-2 text-justify max-w-fit">
                  iOS developers are skilled at creating engaging and intuitive
                  apps.
                </p>
              </div>
            </div>
            <div className="flex gap-5 md:w-[50%] w-[100%]">
              <div className="w-[20%]">
                <img src={iconapple} alt="img" className="w-[60px] mx-auto" />
              </div>
              <div className="w-[80%]">
                <p className="font-content text-Primary  mt-2 text-justify max-w-fit ">
                  They understand how to use design and user experience to
                  create an app that will be easy for users to navigate, while
                  still being functional and useful.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between  gap-20  flex-wrap md:flex-nowrap mt-7">
            <div className="flex gap-5 md:w-[50%] w-[100%]">
              <div className="w-[20%]">
                <img src={iconapple} alt="img" className="w-[60px] mx-auto" />
              </div>
              <div className="w-[80%]">
                <p className="font-content text-Primary   mt-2 text-justify max-w-fit">
                  An iOS developer can help you create an app that will attract
                  customers through its appearance and functionality, as well as
                  through the way it's marketed online or in other ways.
                </p>
              </div>
            </div>
            <div className="flex gap-5 md:w-[50%] w-[100%]">
              <div className="w-[20%]">
                <img src={iconapple} alt="img" className="w-[60px] mx-auto" />
              </div>
              <div className="w-[80%]">
                <p className="font-content text-Primary  mt-2 text-justify max-w-fit ">
                  An iOS developer can help build your company's brand awareness
                  by creating apps that promote your company's products or
                  services and even sell them directly from within the app
                  itself.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* end Benefits of Hiring React JS*/}
      {/*start Helpful Resources */}
      <Reacthelpfull />
      {/*end Helpful Resources */}
    </div>
  );
};

export default IOSBody;
