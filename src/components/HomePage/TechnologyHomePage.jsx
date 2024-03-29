import React from 'react';

import androidicon from '../../assets/technology/andriod.svg';
import fluttericon from '../../assets/technology/flutter.svg';
import iosicon from '../../assets/technology/iOS.svg';
import mongodbicon from '../../assets/technology/mongodb.svg';
import mysqlicon from '../../assets/technology/MySQL.svg';
import neticon from '../../assets/technology/net.svg';
import nodejsicon from '../../assets/technology/nodejs.svg';
import reactjsicon from '../../assets/technology/reactjs.svg';
import wordpressicon from '../../assets/technology/wordpress.svg';
import angularicon from '../../assets/technology/angular.svg';
import codeignitericon from '../../assets/technology/codeigniter.svg';
import laravelicon from '../../assets/technology/laravel.svg';
import phpicon from '../../assets/technology/php.svg';
import Bounce from 'react-reveal/Bounce';

const TechnologyHomePage = () => {
  return (
    <div>
      <div className=" w-full h-full py-16 px-4">
        <div className="max-w-[1240px] mx-auto ">
          {/* Heading */}

          <h2 className="font-heading uppercase text-xl md:text-3xl text-black md:indent-24 text-center">
            Technologies
          </h2>
          {/* Heading Ends */}

          {/* Content */}
          <p className="font-content mx-auto mt-3 md:text-center md:items-center md:indent-24  md:w-[620px] whitespace-pre-wrap">
            We work with different technologies, including few of the lastest
            and most talked about stacks.
          </p>
          {/* Content Ends */}

          {/* Image Section md:ml-20*/}

          <div className="flex flex-row flex-wrap items-center justify-center gap-8 mt-10  md:mt-16 ">
            <Bounce duration={4000}>
              <div>
                <img
                  src={androidicon}
                  alt="Mobile App Development Services"
                  className="w-[90px] h-[90px] mb-2 scale-100 hover:scale-125 ease-out duration-500"
                ></img>
              </div>
            </Bounce>
            <Bounce duration={4000}>
              <div>
                <img
                  src={wordpressicon}
                  alt="Mobile App Development Services"
                  className="w-[90px] h-[90px] mb-2 scale-100 hover:scale-125 ease-out duration-500"
                ></img>
              </div>
            </Bounce>
            <Bounce duration={4000}>
              <div>
                <img
                  src={fluttericon}
                  alt="Mobile App Development Services"
                  className="w-[90px] h-[90px] mb-2 scale-100 hover:scale-125 ease-out duration-500"
                ></img>
              </div>
            </Bounce>
            <Bounce duration={4000}>
              <div>
                <img
                  src={nodejsicon}
                  alt="Mobile App Development Services"
                  className="w-[90px] h-[90px] mb-2 scale-100 hover:scale-125 ease-out duration-500"
                ></img>
              </div>
            </Bounce>
            <Bounce duration={4000}>
              <div>
                <img
                  src={mongodbicon}
                  alt="Mobile App Development Services"
                  className="w-[90px] h-[90px] mb-2 scale-100 hover:scale-125 ease-out duration-500"
                ></img>
              </div>
            </Bounce>
            <Bounce duration={4000}>
              <div>
                <img
                  src={reactjsicon}
                  alt="Mobile App Development Services"
                  className="w-[90px] h-[90px] mb-2 scale-100 hover:scale-125 ease-out duration-500"
                ></img>
              </div>
            </Bounce>
            <Bounce duration={4000}>
              <div>
                <img
                  src={mysqlicon}
                  alt="Mobile App Development Services"
                  className="w-[90px] h-[90px] mb-2 scale-100 hover:scale-125 ease-out duration-500"
                ></img>
              </div>
            </Bounce>
            <Bounce duration={4000}>
              <div>
                <img
                  src={iosicon}
                  alt="Mobile App Development Services"
                  className="w-[90px] h-[90px] mb-2 scale-100 hover:scale-125 ease-out duration-500"
                ></img>
              </div>
            </Bounce>
            <Bounce duration={4000}>
              <div>
                <img
                  src={neticon}
                  alt="Mobile App Development Services"
                  className="w-[90px] h-[90px] mb-2 scale-100 hover:scale-125 ease-out duration-500"
                ></img>
              </div>
            </Bounce>
            <Bounce duration={4000}>
              <div>
                <img
                  src={phpicon}
                  alt="Mobile App Development Services"
                  className="w-[90px] h-[90px] mb-2 scale-100 hover:scale-125 ease-out duration-500"
                ></img>
              </div>
            </Bounce>
            <Bounce duration={4000}>
              <div>
                <img
                  src={angularicon}
                  alt="Mobile App Development Services"
                  className="w-[90px] h-[90px] mb-2 scale-100 hover:scale-125 ease-out duration-500"
                ></img>
              </div>
            </Bounce>
            <Bounce duration={4000}>
              <div>
                <img
                  src={laravelicon}
                  alt="Mobile App Development Services"
                  className="w-[90px] h-[90px] mb-2 scale-100 hover:scale-125 ease-out duration-500"
                ></img>
              </div>
            </Bounce>
            <Bounce duration={4000}>
              <div>
                <img
                  src={codeignitericon}
                  alt="Mobile App Development Services"
                  className="w-[90px] h-[90px] mb-2 scale-100 hover:scale-125 ease-out duration-500"
                ></img>
              </div>
            </Bounce>
          </div>
          {/* Image Section Ends */}
        </div>
      </div>
    </div>
  );
};

export default TechnologyHomePage;
