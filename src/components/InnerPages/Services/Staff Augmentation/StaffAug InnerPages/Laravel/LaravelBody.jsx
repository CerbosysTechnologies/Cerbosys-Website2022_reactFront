import React from 'react';

import laravelimage from '../../../../../../assets/innerpage/laravel/laravelimage.svg';
import laravelprocess from '../../../../../../assets/innerpage/laravel/laravelhire.svg';
import laravelimg from '../../../../../../assets/innerpage/laravel/laravalimg.svg';
import reactjsgroup from '../../../../../../assets/innerpage/reactjs/reactjsgroup.png';
import laravelrgimg from '../../../../../../assets/innerpage/laravel/laravelrgimg.png';
import laravelicon from '../../../../../../assets/innerpage/laravel/laravelicon.svg';
import Heading from '../Heading';
import Reactwork from '../Reactjs/Reactwork';
import Reacthelpfull from '../Reactjs/Reacthelpfull';

const LaravelBody = () => {
  return (
    <div>
      <div className=" mx-auto w-full py-16 px-4 ">
        <div className="max-w-[1240px] mx-auto ">
          {/* start androidbody developer section */}
          <div className="flex md:flex-nowrap gap-16 md:gap-28 flex-wrap flex-row justify-between">
            <div className="w-[100%] md:w-[70%] ">
              <Heading
                className="text-Primary"
                title="About Laravel Development Services"
              />
              <p className="font-content   mt-6 text-justify max-w-fit">
                Laravel is an open-source web framework for PHP. It's designed
                to make it easy for developers to build database-driven
                applications.
              </p>
              <p className="font-content   mt-6 text-justify max-w-fit ">
                Laravel is a popular choice among developers because of its
                expressive syntax and the ease with which you can get started
                building your application. It also has many features that make
                developing complex applications easier, such as routing and
                authentication.
              </p>
            </div>
            <div className="w-[100%] md:w-[30%]">
              <div className="px-4">
                <img src={laravelimg} alt="img" className="w-[80%] mx-auto" />
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
            title="Process to Hire Laravel Developer From Us"
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
                <img src={laravelrgimg} alt="img" className="w-full" />
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
          <Heading title="Benefits of Hiring Laravel Developers for your business" />
          <div className="flex justify-between   gap-8 md:gap-20 flex-wrap md:flex-nowrap mt-7">
            <div className="flex gap-5 md:w-[50%] w-[100%]">
              <div className="w-[20%]">
                <img src={laravelicon} alt="img" className="w-[60px] mx-auto" />
              </div>
              <div className="w-[80%]">
                <p className="font-content text-Primary   mt-2 text-justify max-w-fit">
                  Laravel is the most popular PHP framework.
                </p>
              </div>
            </div>
            <div className="flex gap-5 md:w-[50%] w-[100%]">
              <div className="w-[20%]">
                <img src={laravelicon} alt="img" className="w-[60px] mx-auto" />
              </div>
              <div className="w-[80%]">
                <p className="font-content text-Primary  mt-2 text-justify max-w-fit ">
                  Laravel has many features that make it easy for developers to
                  learn and use, so you can be sure your developers will be able
                  to do what you need them to do without any hassle or
                  confusion.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between  gap-8 md:gap-20  flex-wrap md:flex-nowrap mt-7">
            <div className="flex gap-5 md:w-[50%] w-[100%]">
              <div className="w-[20%]">
                <img src={laravelicon} alt="img" className="w-[60px] mx-auto" />
              </div>
              <div className="w-[80%]">
                <p className="font-content text-Primary   mt-2 text-justify max-w-fit">
                  Laravel developers are available on the open market, so you
                  don't have to worry about finding them or paying them a lot of
                  money to get a job done.
                </p>
              </div>
            </div>
            <div className="flex gap-5 md:w-[50%] w-[100%]">
              <div className="w-[20%]">
                <img src={laravelicon} alt="img" className="w-[60px] mx-auto" />
              </div>
              <div className="w-[80%]">
                <p className="font-content text-Primary  mt-2 text-justify max-w-fit ">
                  Laravel's flexible architecture means that it can be
                  customized for almost any kind of application, so if there's
                  something special about your business that requires a custom
                  solution, Laravel can help.
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

export default LaravelBody;
