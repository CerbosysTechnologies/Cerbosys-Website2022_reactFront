import React from 'react';
import angularrgimg from '../../../../../../assets/innerpage/angular/angularrgimg.svg';
import reactjsgroup from '../../../../../../assets/innerpage/reactjs/reactjsgroup.png';
import angularimg from '../../../../../../assets/innerpage/angular/angularimg.png';
import Heading from '../Heading';
import angularicon from '../../../../../../assets/innerpage/angular/angularicon.svg';
import Reactwork from '../Reactjs/Reactwork';
import Reacthelpfull from '../Reactjs/Reacthelpfull';

const AngularBody = () => {
  return (
    <div>
      <div className=" mx-auto w-full py-16 px-4 ">
        <div className="max-w-[1240px] mx-auto ">
          {/* start androidbody developer section */}
          <div className="flex md:flex-nowrap gap-16 md:gap-28 flex-wrap flex-row justify-between">
            <div className="w-[100%] md:w-[70%] ">
              <Heading
                className="text-Primary"
                title="About Angular Development Services"
              />
              <p className="font-content   mt-6 text-justify max-w-fit">
                Angular is a front-end web application framework that was
                developed by Google. It's used for building single-page
                applications and it's mainly used for building mobile apps.
              </p>
              <p className="font-content   mt-6 text-justify max-w-fit ">
                It has become very popular in recent years due to its advantages
                over other frameworks like React and Vue, which are also being
                used more frequently in development.
              </p>
            </div>
            <div className="w-[100%] md:w-[30%]">
              <div className="px-4">
                <img src={angularrgimg} alt="img" className="w-[80%] mx-auto" />
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
            title="Process to Hire Andriod Developer From Us"
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
                <img src={angularimg} alt="img" className="w-full" />
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
          <Heading title="Benefits of Hiring Angular Developers for your business" />
          <div className="flex justify-between   gap-8 md:gap-20 flex-wrap md:flex-nowrap mt-7">
            <div className="flex gap-5 md:w-[50%] w-[100%]">
              <div className="w-[20%]">
                <img src={angularicon} alt="img" className="w-[60px] mx-auto" />
              </div>
              <div className="w-[80%]">
                <p className="font-content text-Primary   mt-2 text-justify max-w-fit">
                  Angular Developers are a skilled group of professionals who
                  can help you create a new product or redesign an existing one.
                  They are also able to provide you with the right solution for
                  your business needs.
                </p>
              </div>
            </div>
            <div className="flex gap-5 md:w-[50%] w-[100%]">
              <div className="w-[20%]">
                <img src={angularicon} alt="img" className="w-[60px] mx-auto" />
              </div>
              <div className="w-[80%]">
                <p className="font-content text-Primary  mt-2 text-justify max-w-fit ">
                  Angular Developers have been working in the industry for years
                  and are experts at what they do, so you can trust them with
                  any task or project that comes up during working together.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between  gap-8 md:gap-20  flex-wrap md:flex-nowrap mt-7">
            <div className="flex gap-5 md:w-[50%] w-[100%]">
              <div className="w-[20%]">
                <img src={angularicon} alt="img" className="w-[60px] mx-auto" />
              </div>
              <div className="w-[80%]">
                <p className="font-content text-Primary   mt-2 text-justify max-w-fit">
                  They provide their clients with customized solutions that fit
                  their needs, so they can focus on what they do best developing
                  software, and not be bogged down by other tasks like managing
                  a team or managing budgeting issues.
                </p>
              </div>
            </div>
            <div className="flex gap-5 md:w-[50%] w-[100%]">
              <div className="w-[20%]">
                <img src={angularicon} alt="img" className="w-[60px] mx-auto" />
              </div>
              <div className="w-[80%]">
                <p className="font-content text-Primary  mt-2 text-justify max-w-fit ">
                  Angular Developers have been working in the industry for years
                  and are experts at what they do, so you can trust them with
                  any task or project that comes up during working together.
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

export default AngularBody;
