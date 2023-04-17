import React from 'react';
import Heading from '../Heading';
import reactjsimg from '../../../../../../assets/innerpage/reactjs/reactjsimg.svg';
import reactjsgroup from '../../../../../../assets/innerpage/reactjs/reactjsgroup.png';
import reactjssidegp from '../../../../../../assets/innerpage/reactjs/reactjssidegp.png';
import Reactwork from './Reactwork';
import Reacthelpfull from './Reacthelpfull';
const ReactjsBody = () => {
  return (
    <div>
      <div className=" mx-auto w-full py-16 px-4 ">
        <div className="max-w-[1240px] mx-auto ">
          {/* start reactjs developer section */}
          <div className="flex md:flex-nowrap gap-16 md:gap-28 flex-wrap flex-row justify-between">
            <div className="w-[100%] md:w-[70%] ">
              <Heading
                className="text-Primary"
                title="About React JS Development Services"
              />
              <p className="font-content   mt-6 text-justify max-w-fit">
                React.JS is a framework for building user interfaces. It's a
                JavaScript library that lets you build user interfaces using a
                virtual DOM, which keeps your app from being slow and sluggish.
                We provide React development services to help you create a
                professional, responsive website or app with the React framework
                and its components.
              </p>
              <p className="font-content   mt-2 text-justify max-w-fit ">
                We offer services that include:
              </p>
              <ul className="list-disc mt-4 px-4">
                <li>HTML5/CSS3/JS Development</li>
                <li>User Interface (UI) Design</li>
                <li>Backend Development</li>
              </ul>
            </div>
            <div className="w-[100%] md:w-[30%] ">
              <div className="px-4">
                <img src={reactjsimg} alt="img" className="w-[80%] mx-auto" />
              </div>
            </div>
          </div>
          {/* end reactjs developer section */}
        </div>
      </div>
      {/* start Process to Hire ReactJs Developer From Us */}
      <div className="bg-gradient-to-r from-cyan-400 to-blue-500 py-8">
        <div className="max-w-[1240px] mx-auto px-3">
          <Heading
            className="text-Primarys"
            title="Process to Hire React Js Developer From Us"
          />
          <div className="flex md:flex-nowrap items-center gap-16 md:gap-28 flex-wrap flex-row justify-between py-10">
            <div className="w-[100%] md:w-[45%] ">
              <div className="px-4">
                <div className="px-4">
                  <img src={reactjsgroup} alt="img" className="w-full" />
                </div>
              </div>
            </div>
            <div className="w-[100%] md:w-[55%] ">
              <div className="px-4">
                <img src={reactjssidegp} alt="img" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end Process to Hire ReactJs Developer From Us */}
      {/* start work with us section */}
      <Reactwork />
      {/*  end work with us section */}
      {/* start Benefits of Hiring React JS */}
      <div className="bg-gradient-to-r from-cyan-50 to-blue-500">
        <div className="max-w-[1240px] mx-auto px-3 py-8">
          <Heading title="Benefits of Hiring React JS Developers for your business" />
          <div className="flex justify-between gap-20 gap-y-3 flex-wrap md:flex-nowrap mt-7">
            <div className="flex gap-5 md:w-[50%] w-[100%]">
              <img src={reactjsimg} alt="img" className="w-[60px]" />
              <p className="font-content text-Primary   mt-2 text-justify max-w-fit ">
                React.JS developers are a great choice if you're looking to
                increase your business's productivity.
              </p>
            </div>
            <div className="flex gap-5 md:w-[50%] w-[100%]">
              <img src={reactjsimg} alt="img" className="w-[60px]" />
              <p className="font-content text-Primary   mt-2 text-justify max-w-fit ">
                React.JS developers have a strong understanding of the industry,
                so they can create the best possible products for your
                business.s
              </p>
            </div>
          </div>
          <div className="flex justify-between gap-20 gap-y-3 flex-wrap md:flex-nowrap mt-7">
            <div className="flex gap-5 md:w-[50%] w-[100%]">
              <img src={reactjsimg} alt="img" className="w-[60px]" />
              <p className="font-content text-Primary   mt-2 text-justify max-w-fit ">
                React.JS Developers are the most affordable developers in India
              </p>
            </div>
            <div className="flex gap-5 md:w-[50%] w-[100%]">
              <img src={reactjsimg} alt="img" className="w-[60px]" />
              <p className="font-content text-Primary   mt-2 text-justify max-w-fit ">
                They'll help your clients get more from their website by making
                it easier for them to interact with it.
              </p>
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

export default ReactjsBody;
