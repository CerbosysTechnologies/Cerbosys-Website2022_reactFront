import React from 'react';

import dotnetimage from '../../../../../../assets/innerpage/dotnet/netimage.svg';
import dotnetprocess from '../../../../../../assets/innerpage/dotnet/nethire.svg';
import Heading from '../Heading';
import netrightimg from '../../../../../../assets/innerpage/dotnet/netrightimg.svg';
import reactjsgroup from '../../../../../../assets/innerpage/reactjs/reactjsgroup.png';
import netimg from '../../../../../../assets/innerpage/dotnet/netimg.png';
import neticons from '../../../../../../assets/innerpage/dotnet/neticons.svg';
import Reactwork from '../Reactjs/Reactwork';
import Reacthelpfull from '../Reactjs/Reacthelpfull';

const NetBody = () => {
  return (
    <div>
      <div className=" mx-auto w-full py-16 px-4 ">
        <div className="max-w-[1240px] mx-auto ">
          {/* start androidbody developer section */}
          <div className="flex md:flex-nowrap gap-16 md:gap-28 flex-wrap flex-row justify-between">
            <div className="w-[100%] md:w-[70%] ">
              <Heading
                className="text-Primary"
                title="About .NET Development Services"
              />
              <p className="font-content   mt-6 text-justify max-w-fit">
                .Net Development Services is a platform that allows you to build
                and develop apps for the .Net Framework. This framework is a
                collection of software components that are used by developers to
                create applications for desktop, web, and mobile.
              </p>
              <p className="font-content   mt-6 text-justify max-w-fit ">
                It offers tools for application development and management,
                deployment and distribution, testing, debugging, and
                maintenance. It also provides support for different programming
                languages like C#, VB.net, ASP.NET MVC, etc.
              </p>
            </div>
            <div className="w-[100%] md:w-[30%]">
              <div className="px-4">
                <img src={netrightimg} alt="img" className="w-[80%] mx-auto" />
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
            title="Process to Hire .NET Developer From Us"
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
                <img src={netimg} alt="img" className="w-full" />
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
          <Heading title="Benefits of Hiring .NET Developers for your business" />
          <div className="flex justify-between   gap-8 md:gap-20 flex-wrap md:flex-nowrap mt-7">
            <div className="flex gap-5 md:w-[50%] w-[100%]">
              <div className="w-[20%]">
                <img src={neticons} alt="img" className="w-[60px] mx-auto" />
              </div>
              <div className="w-[80%]">
                <p className="font-content text-Primary   mt-2 text-justify max-w-fit">
                  .Net developers can help you create an app that works with
                  other apps on your site so it feels more integrated into the
                  overall experience for users.
                </p>
              </div>
            </div>
            <div className="flex gap-5 md:w-[50%] w-[100%]">
              <div className="w-[20%]">
                <img src={neticons} alt="img" className="w-[60px] mx-auto" />
              </div>
              <div className="w-[80%]">
                <p className="font-content text-Primary  mt-2 text-justify max-w-fit ">
                  The skills they have are often in high demand, so they're
                  likely to be paid well for their work.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between  gap-8 md:gap-20  flex-wrap md:flex-nowrap mt-7">
            <div className="flex gap-5 md:w-[50%] w-[100%]">
              <div className="w-[20%]">
                <img src={neticons} alt="img" className="w-[60px] mx-auto" />
              </div>
              <div className="w-[80%]">
                <p className="font-content text-Primary   mt-2 text-justify max-w-fit">
                   They know how to write clean code, which makes it easier for
                  you to read and understand what they've done.
                </p>
              </div>
            </div>
            <div className="flex gap-5 md:w-[50%] w-[100%]">
              <div className="w-[20%]">
                <img src={neticons} alt="img" className="w-[60px] mx-auto" />
              </div>
              <div className="w-[80%]">
                <p className="font-content text-Primary  mt-2 text-justify max-w-fit ">
                  They understand how their client's businesses work, so they
                  can help them avoid costly mistakes.
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

export default NetBody;
