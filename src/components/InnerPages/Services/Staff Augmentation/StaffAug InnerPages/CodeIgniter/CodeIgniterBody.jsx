import React from 'react';

import codeigniterimage from '../../../../../../assets/innerpage/codeigniter/codeignitorimage.svg';
import codeigniterprocess from '../../../../../../assets/innerpage/codeigniter/codeigniterhire.svg';
import codergimg from '../../../../../../assets/innerpage/codeigniter/codergimg.svg';
import reactjsgroup from '../../../../../../assets/innerpage/reactjs/reactjsgroup.png';
import coderightimg from '../../../../../../assets/innerpage/codeigniter/coderightimg.png';
import codeicon from '../../../../../../assets/innerpage/codeigniter/codeicon.png';
import Heading from '../Heading';
import Reactwork from '../Reactjs/Reactwork';
import Reacthelpfull from '../Reactjs/Reacthelpfull';

const CodeIgniterBody = () => {
  return (
    <div>
      <div className=" mx-auto w-full py-16 px-4 ">
        <div className="max-w-[1240px] mx-auto ">
          {/* start androidbody developer section */}
          <div className="flex md:flex-nowrap gap-16 md:gap-28 flex-wrap flex-row justify-between">
            <div className="w-[100%] md:w-[70%] ">
              <Heading
                className="text-Primary"
                title="About CodeIgniter Development Services"
              />
              <p className="font-content   mt-6 text-justify max-w-fit">
                CodeIgniter is the most popular open-source PHP framework, used
                by millions of developers across the globe. It provides a
                powerful set of tools for building dynamic websites, rapidly and
                easily.
              </p>
              <p className="font-content   mt-2 text-justify max-w-fit ">
                CodeIgniter Development Services is here to provide you with the
                best possible experience when developing your project on
                CodeIgniter. We offer services such as:
              </p>
              <ul className="list-disc mt-4 px-4">
                <li> 3rd party libraries integration</li>
                <li>Custom Caching solutions</li>
                <li>Security measures and countermeasures</li>
              </ul>
            </div>
            <div className="w-[100%] md:w-[30%]">
              <div className="px-4">
                <img src={codergimg} alt="img" className="w-[80%] mx-auto" />
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
                <img src={coderightimg} alt="img" className="w-full" />
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
                <img src={codeicon} alt="img" className="w-[60px] mx-auto" />
              </div>
              <div className="w-[80%]">
                <p className="font-content text-Primary   mt-2 text-justify max-w-fit">
                  Flutter is a fast-growing platform for building apps
                </p>
              </div>
            </div>
            <div className="flex gap-5 md:w-[50%] w-[100%]">
              <div className="w-[20%]">
                <img src={codeicon} alt="img" className="w-[60px] mx-auto" />
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
                <img src={codeicon} alt="img" className="w-[60px] mx-auto" />
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
                <img src={codeicon} alt="img" className="w-[60px] mx-auto" />
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

export default CodeIgniterBody;
