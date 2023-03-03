import React from 'react';

import flutterimage from '../../../../../../assets/innerpage/flutter/flutterimage.svg';
import flutterprocess from '../../../../../../assets/innerpage/flutter/flutterhire.svg';
import flutterrgimg from '../../../../../../assets/innerpage/flutter/flutterrgimg.svg';
import reactjsgroup from '../../../../../../assets/innerpage/reactjs/reactjsgroup.png';
import flutterimg from '../../../../../../assets/innerpage/flutter/flutterimg.png';
import fluttericon from '../../../../../../assets/innerpage/flutter/fluttericon.svg';
import Heading from '../Heading';
import Reactwork from '../Reactjs/Reactwork';
import Reacthelpfull from '../Reactjs/Reacthelpfull';
const FlutterBody = () => {
  return (
    <div>
      <div className=" mx-auto w-full py-16 px-4 ">
        <div className="max-w-[1240px] mx-auto ">
          {/* start androidbody developer section */}
          <div className="flex md:flex-nowrap gap-16 md:gap-28 flex-wrap flex-row justify-between">
            <div className="w-[100%] md:w-[70%] ">
              <Heading
                className="text-Primary"
                title="About Flutter Development Services"
              />
              <p className="font-content   mt-6 text-justify max-w-fit">
                Flutter Development Services is a company that specializes in
                the development of mobile and desktop apps. We have a team of
                talented developers who are ready to work on your project from
                start to finish, from design to deployment.
              </p>
              <p className="font-content   mt-2 text-justify max-w-fit ">
                We offer a wide range of services including:
              </p>
              <ul className="list-disc mt-4 px-4">
                <li> User Experience Design</li>
                <li>Mobile App Development</li>
                <li>Web Application Development</li>
              </ul>
            </div>
            <div className="w-[100%] md:w-[30%]">
              <div className="px-4">
                <img src={flutterrgimg} alt="img" className="w-[80%] mx-auto" />
              </div>
            </div>
          </div>
          {/* end androidbody developer section */}
        </div>
      </div>
      {/* start Process to Hire ReactJs Developer From Us */}
      <div className="bg-gradient-to-r from-cyan-400 to-blue-500 py-8">
        <div className="max-w-[1240px] mx-auto px-3">
          <Heading
            className="text-Primarys"
            title="Process to Hire Flutter Developer From Us"
          />
          <div className="flex md:flex-nowrap gap-16 md:gap-28 flex-wrap flex-row justify-between items-center py-10">
            <div className="w-[100%] md:w-[45%] ">
              <div className="px-4">
                <div className="px-4">
                  <img src={reactjsgroup} alt="img" className="w-full" />
                </div>
              </div>
            </div>
            <div className="w-[100%] md:w-[55%] ">
              <div className="px-4">
                <img src={flutterimg} alt="img" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end Process to Hire ReactJs Developer From Us */}
      {/* start work with us section */}
      <Reactwork />
      {/*  end work with us section */}
      {/* start Benefits of Hiring android JS */}
      <div className="bg-gradient-to-r from-cyan-50 to-blue-500">
        <div className="max-w-[1240px] mx-auto px-3 py-8">
          <Heading title="Benefits of Hiring Flutter Developers for your business" />
          <div className="flex justify-between   gap-8 md:gap-20 flex-wrap md:flex-nowrap mt-7">
            <div className="flex gap-5 md:w-[50%] w-[100%]">
              <div className="w-[20%]">
                <img src={fluttericon} alt="img" className="w-[60px] mx-auto" />
              </div>
              <div className="w-[80%]">
                <p className="font-content text-Primary   mt-2 text-justify max-w-fit">
                  Flutter is a fast-growing platform for building apps
                </p>
              </div>
            </div>
            <div className="flex gap-5 md:w-[50%] w-[100%]">
              <div className="w-[20%]">
                <img src={fluttericon} alt="img" className="w-[60px] mx-auto" />
              </div>
              <div className="w-[80%]">
                <p className="font-content text-Primary  mt-2 text-justify max-w-fit ">
                  Flutter offers an easy way to create beautiful, intuitive
                  mobile apps that work across all major platforms, including
                  iOS and Android
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between  gap-8 md:gap-20  flex-wrap md:flex-nowrap mt-7">
            <div className="flex gap-5 md:w-[50%] w-[100%]">
              <div className="w-[20%]">
                <img src={fluttericon} alt="img" className="w-[60px] mx-auto" />
              </div>
              <div className="w-[80%]">
                <p className="font-content text-Primary   mt-2 text-justify max-w-fit">
                   Flutter has been used by companies like Uber, Airbnb, and
                  PayPal to build high-quality apps that are easier than ever
                  before to scale up and down as demand changes.
                </p>
              </div>
            </div>
            <div className="flex gap-5 md:w-[50%] w-[100%]">
              <div className="w-[20%]">
                <img src={fluttericon} alt="img" className="w-[60px] mx-auto" />
              </div>
              <div className="w-[80%]">
                <p className="font-content text-Primary  mt-2 text-justify max-w-fit ">
                  Flutter offers a free version with limited features that you
                  can use until you're ready to invest in the full version of
                  Flutter
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* end Benefits of Hiring android JS*/}
      {/*start Helpful Resources */}
      <Reacthelpfull />
      {/*end Helpful Resources */}
    </div>
  );
};

export default FlutterBody;
