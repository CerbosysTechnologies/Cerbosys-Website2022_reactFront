import React from 'react';


import Heading from '../Heading';
import andoriimg from '../../../../../../assets/innerpage/android/andoriimg.svg';
import reactjsgroup from '../../../../../../assets/innerpage/reactjs/reactjsgroup.png';
import andoridrgimg from '../../../../../../assets/innerpage/android/androidrgimg.png';
import abdroidsmimg from '../../../../../../assets/innerpage/android/androidsmimg.svg';
import Reactwork from '../Reactjs/Reactwork';
import Reacthelpfull from '../Reactjs/Reacthelpfull';
const AndroidBody = () => {
  return (
    <div>
      <div className=" mx-auto w-full py-16 px-4 ">
        <div className="max-w-[1240px] mx-auto ">
          {/* start androidbody developer section */}
          <div className="flex md:flex-nowrap gap-16 md:gap-28 flex-wrap flex-row justify-between">
            <div className="w-[100%] md:w-[70%] ">
              <Heading
                className="text-Primary"
                title="About Andriod Development Services"
              />
              <p className="font-content   mt-6 text-justify max-w-fit">
                Android developers are responsible for creating applications
                that run on Android devices. They use the Java programming
                language, which is a popular programming language used by many
                companies.
              </p>
              <p className="font-content   mt-6 text-justify max-w-fit ">
                Android developers need to be creative and innovative. They
                should also be able to work well with other developers,
                designers, and other people in the business.
              </p>
            </div>
            <div className="w-[100%] md:w-[30%]">
              <div className="px-4">
                <img src={andoriimg} alt="img" className="w-[80%] mx-auto" />
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
                <img src={andoridrgimg} alt="img" className="w-full" />
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
          <Heading title="Benefits of Hiring Andriod JS Developers for your business" />
          <div className="flex justify-between   gap-8 md:gap-20 flex-wrap md:flex-nowrap mt-7">
            <div className="flex gap-5 md:w-[50%] w-[100%]">
              <div className="w-[20%]">
                <img
                  src={abdroidsmimg}
                  alt="img"
                  className="w-[60px] mx-auto"
                />
              </div>
              <div className="w-[80%]">
                <p className="font-content text-Primary   mt-2 text-justify max-w-fit">
                  Android Developers are familiar with all of the latest trends
                  and technologies, including mobile app development, HTML5, and
                  more.
                </p>
              </div>
            </div>
            <div className="flex gap-5 md:w-[50%] w-[100%]">
              <div className="w-[20%]">
                <img
                  src={abdroidsmimg}
                  alt="img"
                  className="w-[60px] mx-auto"
                />
              </div>
              <div className="w-[80%]">
                <p className="font-content text-Primary  mt-2 text-justify max-w-fit ">
                  They have experience working on both large-scale projects as
                  well as small one-off projects.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between  gap-8 md:gap-20  flex-wrap md:flex-nowrap mt-7">
            <div className="flex gap-5 md:w-[50%] w-[100%]">
              <div className="w-[20%]">
                <img
                  src={abdroidsmimg}
                  alt="img"
                  className="w-[60px] mx-auto"
                />
              </div>
              <div className="w-[80%]">
                <p className="font-content text-Primary   mt-2 text-justify max-w-fit">
                  Android Developers are highly skilled in areas such as web
                  design, front-end development, back-end coding, database
                  management, and more.
                </p>
              </div>
            </div>
            <div className="flex gap-5 md:w-[50%] w-[100%]">
              <div className="w-[20%]">
                <img
                  src={abdroidsmimg}
                  alt="img"
                  className="w-[60px] mx-auto"
                />
              </div>
              <div className="w-[80%]">
                <p className="font-content text-Primary  mt-2 text-justify max-w-fit ">
                  They have a deep understanding of the needs of your business
                  and how best to meet those needs through an app.
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

export default AndroidBody;
