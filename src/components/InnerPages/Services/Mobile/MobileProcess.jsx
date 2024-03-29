import React from 'react';
import oneicon from '../../../../assets/innerpage/mobiledevelopment/1.svg';
import twoicon from '../../../../assets/innerpage/mobiledevelopment/2.svg';
import threeicon from '../../../../assets/innerpage/mobiledevelopment/3.svg';
import fouricon from '../../../../assets/innerpage/mobiledevelopment/4.svg';
import processicon1 from '../../../../assets/innerpage/mobiledevelopment/processimage1.png';
import processicon2 from '../../../../assets/innerpage/mobiledevelopment/processimage2.png';
import processicon3 from '../../../../assets/innerpage/mobiledevelopment/processimage3.png';
import processicon4 from '../../../../assets/innerpage/mobiledevelopment/processimage4.png';
import { Flip } from 'react-reveal';
const MobileProcess = () => {
  return (
    <div>
      <div className="bg-white mx-auto w-full py-5 px-6 md:px-16">
        <div className="max-w-[1240px] mx-auto ">
          {/* Heading */}
          <div className="flex flex-col flex-wrap items-center">
            <h2 className="font-heading uppercase md:text-3xl text-Primary text-xl">
              Process
            </h2>
            <h2 className="font-subheading uppercase md:text-xl text-black text-sm mb-5 mt-3">
              Our Mobile App Development Process
            </h2>
            <p className="text-sm  md:text-base text-justify  text-black  align-baseline md:px-28 px-0">
              Highly creative technology platforms are utilized by our team to
              provide you with the best of the best app services.
              <br></br>
              <br></br>
              Our mobile app development process includes four major steps which
              also involve our expertise ranging from strategy to design and
              development.
            </p>
          </div>
          {/* Heading Ends */}
          {/* App Concept Div */}
          <div className="mx-auto flex flex-col md:px-28 px-0 mt-10">
            <Flip duration={3000}>
              <img
                src={oneicon}
                alt="Mobile App Development Services"
                // alt="Icon One"
                className="md:w-[80px] md:h-[80px] w-[50px] h-[50px] mx-auto"
              />
            </Flip>
          </div>
          <div className="grid md:grid-cols-2 mt-10 gap-1 md:px-28 px-0 justify-center">
            <img
              src={processicon1}
              alt="Mobile App Development Services"
              className="md:w-[27rem] md:h-[22rem] w-[14rem] h-[14rem] mx-auto mt-3"
            />
            <div className="mx-auto flex flex-col text-justify mt-3">
              <h2 className="font-heading md:text-xl text-sm uppercase mb-4">
                App Concept
              </h2>
              <p className="text-sm  md:text-base text-justify  col-span-2">
                The company has developed and deployed several apps for various
                clients, including Business Tools, Fitness Apps, Educational
                Apps, and more.
                <br></br>
                <br></br>
                The concept of app development is totally dependent on
                understanding the users and the kind of user experience needed,
                which eventually adds value to the users of the app and of
                course your business growth too.
              </p>
            </div>
          </div>

          {/* App Concept Div Ends*/}

          {/* Understanding the Requirement Div */}

          <div className="mx-auto flex flex-col md:px-28 px-0 mt-10 items-end">
            <Flip duration={3000}>
              {' '}
              <img
                src={twoicon}
                alt="Mobile App Development Services"
                className="md:w-[80px] md:h-[80px] w-[50px] h-[50px] mx-auto"
              />
            </Flip>
          </div>

          <div className="grid md:grid-cols-2 mt-10 gap-24 md:px-28 px-0 justify-center">
            <div className="mx-auto flex flex-col text-justify">
              <h2 className="font-heading md:text-xl text-sm uppercase mb-4">
                Understanding the Requirement
              </h2>
              <p className="text-sm  md:text-base text-justify  col-span-2">
                It’s always crucial to avoid ambiguity and understand the
                requirements of your business and your users since it is a
                stepping stone towards a well flourished online business.
              </p>
            </div>
            <img
              src={processicon2}
              alt="Mobile App Development Services"
              className="md:w-[27rem] md:h-[22rem] w-[14rem] h-[14rem] mx-auto"
            />
          </div>

          {/* Understanding the Requirement Div Ends*/}

          {/* Agile App Development Div */}

          <div className="mx-auto flex flex-col md:px-28 px-0 mt-10">
            <Flip duration={3000}>
              {' '}
              <img
                src={threeicon}
                alt="Mobile App Development Services"
                className="md:w-[80px] md:h-[80px] w-[50px] h-[50px] mx-auto"
              />
            </Flip>
          </div>
          <div className="grid md:grid-cols-2 mt-10 gap-1 md:px-28 px-0 justify-center">
            <img
              src={processicon3}
              alt="Mobile App Development Services"
              className="md:w-[27rem] md:h-[22rem] w-[14rem] h-[14rem] mx-auto"
            />
            <div className="mx-auto flex flex-col text-justify">
              <h2 className="font-heading md:text-xl text-sm uppercase mb-4 mt-3">
                Agile App Development
              </h2>
              <p className="text-sm  md:text-base text-justify  col-span-2">
                Using the agile app development program, we always make sure
                that there is always room for flexibility in the app development
                for future updates.
              </p>
            </div>
          </div>

          {/* Agile App Development Div Ends*/}

          {/* Deployment App Div */}

          <div className="mx-auto flex flex-col md:px-28 px-0 mt-10 items-end">
            <Flip duration={3000}>
              {' '}
              <img
                src={fouricon}
                alt="Mobile App Development Services"
                className="md:w-[80px] md:h-[80px] w-[50px] h-[50px] mx-auto"
              />
            </Flip>
          </div>
          <div className="grid md:grid-cols-2 mt-10 gap-24 md:px-28 px-0 justify-center">
            <div className="mx-auto flex flex-col text-justify">
              <h2 className="font-heading md:text-xl text-sm uppercase mb-4">
                Deployment of Mobile App
              </h2>
              <p className="text-sm  md:text-base text-justify  col-span-2">
                Mobile app development is a very complex process, and it takes
                time and effort to develop it. However, passing through all the
                three stages of complex processes involved in app development,
                the final step is to deploy quality mobile apps in less time
                with maximum efficiency that can meet all business goals and
                expectations.
              </p>
            </div>
            <img
              src={processicon4}
              alt="Mobile App Development Services"
              className="md:w-[27rem] md:h-[22rem] w-[14rem] h-[14rem] mx-auto"
            />
          </div>

          {/* Deployment App Div Ends*/}
        </div>
      </div>
    </div>
  );
};

export default MobileProcess;
