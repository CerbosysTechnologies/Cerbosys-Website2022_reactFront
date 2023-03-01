import React from 'react';

import nodejsimage from '../../../../../../assets/innerpage/nodejs/node.jsimage.svg';
import nodejsprocess from '../../../../../../assets/innerpage/nodejs/node.jshire.svg';
import nodejsrig from '../../../../../../assets/innerpage/nodejs/nodejsrig.png';
import reactjsgroup from '../../../../../../assets/innerpage/reactjs/reactjsgroup.png';
import nodejsimg from '../../../../../../assets/innerpage/nodejs/nodejsimg.png';
import nodejsicon from '../../../../../../assets/innerpage/nodejs/nodejsicon.png';
import Heading from '../Heading';
import Reactwork from '../Reactjs/Reactwork';
import Reacthelpfull from '../Reactjs/Reacthelpfull';
const NodejsBody = () => {
  return (
    <div>
      <div className=" mx-auto w-full py-16 px-4 ">
        <div className="max-w-[1240px] mx-auto ">
          {/* start nodejs developer section */}
          <div className="flex md:flex-nowrap gap-16 md:gap-28 flex-wrap flex-row justify-between">
            <div className="w-[100%] md:w-[70%] ">
              <Heading
                className="text-Primary"
                title="About Node JS Development Services"
              />
              <p className="font-content   mt-6 text-justify max-w-fit">
                NodeJS is an open-source JavaScript runtime, which means it can
                be used to build server-side applications. It's built on
                Chrome's V8 JavaScript engine and uses libuv as its event loop.
                NodeJS is often referred to as a platform for building scalable
                network applications, thanks to its asynchronous I/O model and
                non-blocking I/O model.
              </p>
              <p className="font-content   mt-5 text-justify max-w-fit ">
                Our team of developers specializes in NodeJS and is dedicated to
                delivering high-quality work. Our team has over 5+ years of
                experience working with NodeJS. You can hire dedicated Node.js
                developers in India from us, so if you have any questions or
                concerns regarding our services, feel free to reach out!
              </p>
            </div>
            <div className="w-[100%] md:w-[30%] ">
              <div className="px-4">
                <img src={nodejsrig} alt="img" className="w-full" />
              </div>
            </div>
          </div>
          {/* end nodejs developer section */}
        </div>
      </div>
      {/* start Process to Hire ReactJs Developer From Us */}
      <div className="bg-gradient-to-r from-cyan-400 to-blue-500 py-8">
        <div className="max-w-[1240px] mx-auto px-3">
          <Heading
            className="text-Primarys"
            title="Process to Hire Node Js Developer From Us"
          />
          <div className="flex items-center md:flex-nowrap gap-16 md:gap-28 flex-wrap flex-row justify-between py-10">
            <div className="w-[100%] md:w-[45%] ">
              <div className="px-4">
                <div className="px-4">
                  <img src={reactjsgroup} alt="img" className="w-full" />
                </div>
              </div>
            </div>
            <div className="w-[100%] md:w-[55%] ">
              <div className="px-4">
                <img src={nodejsimg} alt="img" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end Process to Hire ReactJs Developer From Us */}
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
                <img src={nodejsicon} alt="img" className="w-[60px]" />
              </div>
              <div className="w-[80%]">
                <p className="font-content text-Primary   mt-2 text-justify max-w-fit">
                  NodeJS is a popular and powerful server-side technology that
                  can be used to build web applications in JavaScript.
                </p>
              </div>
            </div>
            <div className="flex gap-5 md:w-[50%] w-[100%]">
              <div className="w-[20%]">
                <img src={nodejsicon} alt="img" className="w-[60px]" />
              </div>
              <div className="w-[80%]">
                <p className="font-content text-Primary  mt-2 text-justify max-w-fit ">
                  NodeJS allows you to build faster and more scalable
                  applications than other languages do, so you'll see results
                  quickly.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between  gap-20  flex-wrap md:flex-nowrap mt-7">
            <div className="flex gap-5 md:w-[50%] w-[100%]">
              <div className="w-[20%]">
                <img src={nodejsicon} alt="img" className="w-[60px]" />
              </div>
              <div className="w-[80%]">
                <p className="font-content text-Primary   mt-2 text-justify max-w-fit">
                  The skills required to write NodeJS applications is very
                  similar to what you'd need for building web pages in HTML5 or
                  CSS3, so if you already know how to write those types of code
                  then hiring a NodeJS developer should be easy.
                </p>
              </div>
            </div>
            <div className="flex gap-5 md:w-[50%] w-[100%]">
              <div className="w-[20%]">
                <img src={nodejsicon} alt="img" className="w-[60px]" />
              </div>
              <div className="w-[80%]">
                <p className="font-content text-Primary  mt-2 text-justify max-w-fit ">
                  NodeJS developers will be able to work on projects with a team
                  or individually, whichever makes sense for your business needs
                  at any given time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* end Benefits of Hiring React JS*/}
      {/* start Helpful Resources  */}
      <Reacthelpfull />
      {/*end Helpful Resources  */}
    </div>
  );
};

export default NodejsBody;
