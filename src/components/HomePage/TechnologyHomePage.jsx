import React from "react";

import androidicon from "../../assets/technology/andriod.svg";
import fluttericon from "../../assets/technology/flutter.svg";
import iosicon from "../../assets/technology/iOS.svg";
import mongodbicon from "../../assets/technology/mongodb.svg";
import mysqlicon from "../../assets/technology/MySQL.svg";
import neticon from "../../assets/technology/net.svg";
import nodejsicon from "../../assets/technology/nodejs.svg";
import reactjsicon from "../../assets/technology/reactjs.svg";
import wordpressicon from "../../assets/technology/wordpress.svg";
import angularicon from "../../assets/technology/angular.svg";
import codeignitericon from "../../assets/technology/codeigniter.svg";
import laravelicon from "../../assets/technology/laravel.svg";
import phpicon from "../../assets/technology/php.svg";
import Bounce from "react-reveal/Bounce";

const TechnologyHomePage = () => {
  return (
    <div>
      <div className="bg-Service w-full h-full py-16 px-4">
        <div className="max-w-[1240px] mx-auto ">
          {/* Heading */}

          <h1 className="font-heading text-xl md:text-3xl text-black md:indent-24">
            Technologies
          </h1>
          {/* Heading Ends */}

          {/* Content */}
          <p className="font-content text-lg md:text-xl md:text-center md:items-center md:indent-24  md:w-[620px] whitespace-pre-wrap">
            We work with different technologies, including few of the lastest
            and most talked about stacks.
          </p>
          {/* Content Ends */}

          {/* Image Section */}

          <div className="flex flex-row flex-wrap items-center justify-center gap-8 mt-10 md:mt-28 md:ml-20">
            <Bounce duration={4000}>
              <div>
                <img
                  src={androidicon}
                  alt="Android Icon"
                  className="w-[90px] h-[90px] mb-2 scale-100 hover:scale-125 ease-out duration-500"
                ></img>
              </div>
            </Bounce>
            <Bounce duration={4000}>
              <div>
                <img
                  src={wordpressicon}
                  alt="Android Icon"
                  className="w-[90px] h-[90px] mb-2 scale-100 hover:scale-125 ease-out duration-500"
                ></img>
              </div>
            </Bounce>
            <Bounce duration={4000}>
              <div>
                <img
                  src={fluttericon}
                  alt="Android Icon"
                  className="w-[90px] h-[90px] mb-2 scale-100 hover:scale-125 ease-out duration-500"
                ></img>
              </div>
            </Bounce>
            <Bounce duration={4000}>
              <div>
                <img
                  src={nodejsicon}
                  alt="Android Icon"
                  className="w-[90px] h-[90px] mb-2 scale-100 hover:scale-125 ease-out duration-500"
                ></img>
              </div>
            </Bounce>
            <Bounce duration={4000}>
              <div>
                <img
                  src={mongodbicon}
                  alt="Android Icon"
                  className="w-[90px] h-[90px] mb-2 scale-100 hover:scale-125 ease-out duration-500"
                ></img>
              </div>
            </Bounce>
            <Bounce duration={4000}>
              <div>
                <img
                  src={reactjsicon}
                  alt="Android Icon"
                  className="w-[90px] h-[90px] mb-2 scale-100 hover:scale-125 ease-out duration-500"
                ></img>
              </div>
            </Bounce>
            <Bounce duration={4000}>
              <div>
                <img
                  src={mysqlicon}
                  alt="Android Icon"
                  className="w-[90px] h-[90px] mb-2 scale-100 hover:scale-125 ease-out duration-500"
                ></img>
              </div>
            </Bounce>
            <Bounce duration={4000}>
              <div>
                <img
                  src={iosicon}
                  alt="Android Icon"
                  className="w-[90px] h-[90px] mb-2 scale-100 hover:scale-125 ease-out duration-500"
                ></img>
              </div>
            </Bounce>
            <Bounce duration={4000}>
              <div>
                <img
                  src={neticon}
                  alt="Net Icon"
                  className="w-[90px] h-[90px] mb-2 scale-100 hover:scale-125 ease-out duration-500"
                ></img>
              </div>
            </Bounce>
            <Bounce duration={4000}>
              <div>
                <img
                  src={phpicon}
                  alt="Php Icon"
                  className="w-[90px] h-[90px] mb-2 scale-100 hover:scale-125 ease-out duration-500"
                ></img>
              </div>
            </Bounce>
            <Bounce duration={4000}>
              <div>
                <img
                  src={angularicon}
                  alt="Angular Icon"
                  className="w-[90px] h-[90px] mb-2 scale-100 hover:scale-125 ease-out duration-500"
                ></img>
              </div>
            </Bounce>
            <Bounce duration={4000}>
              <div>
                <img
                  src={laravelicon}
                  alt="Laravel Icon"
                  className="w-[90px] h-[90px] mb-2 scale-100 hover:scale-125 ease-out duration-500"
                ></img>
              </div>
            </Bounce>
            <Bounce duration={4000}>
              <div>
                <img
                  src={codeignitericon}
                  alt="CI Icon"
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
