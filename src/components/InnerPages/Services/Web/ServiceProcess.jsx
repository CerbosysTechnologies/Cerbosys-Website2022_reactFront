import React from 'react';
import { Bounce } from 'react-reveal';
import { Flip } from 'react-reveal';
import oneicon from '../../../../assets/innerpage/webdevelopment/1.svg';
import twoicon from '../../../../assets/innerpage/webdevelopment/2.svg';
import threeicon from '../../../../assets/innerpage/webdevelopment/3.svg';
import fouricon from '../../../../assets/innerpage/webdevelopment/4.svg';
import processicon1 from '../../../../assets/innerpage/webdevelopment/processimage1.png';
import processicon2 from '../../../../assets/innerpage/webdevelopment/processimage2.png';
import processicon3 from '../../../../assets/innerpage/webdevelopment/processimage3.png';
import processicon4 from '../../../../assets/innerpage/webdevelopment/processimage4.png';

const ServiceProcess = () => {
  return (
    <div>
      <div className="bg-white mx-auto w-full py-5 px-16 ">
        <div className="max-w-[1240px] mx-auto ">
          {/* Heading */}
          <div className="flex flex-col flex-wrap items-center">
            <h2 className="font-heading md:text-3xl uppercase text-Primary text-xl">
              Process
            </h2>
            <h2 className="font-subheading md:text-xl text-black text-sm mb-5 mt-3">
              Our Web Development Process
            </h2>
            <p className="text-sm  md:text-base text-start  text-black  align-baseline  md:px-10  px-3  mt-3">
              Our web development process involves information gathering,
              planning, designing, creating content and assembling it, coding
              and testing, reviewing, and in the end its maintenance.
            </p>
          </div>
          {/* Heading Ends */}

          {/* Requirement Analysis Div */}

          <div className="mx-auto flex flex-col md:px-10  px-3  mt-10">
            <Flip duration={3000}>
              <img
                src={oneicon}
                alt="Icon One"
                className="md:w-[80px] md:h-[80px] w-[50px] h-[50px]"
              />
            </Flip>
          </div>
          <div className="grid md:grid-cols-2 mt-10 gap-1  md:px-10  px-3 justify-center">
            <Bounce left duration={3000}>
              <img
                src={processicon1}
                alt="Process Icon 1"
                className="md:w-[27rem] md:h-[22rem] w-[14rem] h-[14rem]"
              />
            </Bounce>
            <Bounce right duration={3000}>
              <div className="mx-auto flex flex-col text-justify">
                <h2 className="font-heading md:text-xl text-sm uppercase mb-4">
                  Requirement Analysis
                </h2>
                <p className="text-sm  md:text-base text-start  col-span-2">
                  In order to create a website that perfectly suits your needs,
                  we first need to understand what those needs are. That's where
                  requirement analysis comes in.
                  <br></br>
                  <br></br>
                  Through conversation and discussion with the client we will
                  identify every aspect of the desired website design &
                  development services. This includes everything from its
                  outward appearance to the specific functionality it must have.
                </p>
              </div>
            </Bounce>
          </div>

          {/* Requirement Analysis Div Ends*/}

          {/* Creating Blueprint Div */}

          <div className="mx-auto flex flex-col  md:px-10  px-3  mt-10 items-end">
            <Flip duration={3000}>
              {' '}
              <img
                src={twoicon}
                alt="Icon Two"
                className="md:w-[80px] md:h-[80px] w-[50px] h-[50px]"
              />
            </Flip>
          </div>

          <div className="grid md:grid-cols-2 mt-10 gap-24  md:px-10  px-3  justify-center">
            <Bounce left duration={3000}>
              <div className="mx-auto flex flex-col text-justify">
                <h2 className="font-heading md:text-xl text-sm uppercase mb-4">
                  Creating Blueprint
                </h2>
                <p className="text-sm  md:text-base text-start  col-span-2">
                  One of the most important steps to do in order to create a
                  successful website is to create a website blueprint. A website
                  blueprint is an easy and effective way to plan and organize
                  the website. It's a visual guide that helps us to clarify the
                  goals of the website required by the client. A blueprint also
                  helps us to establish the purpose of the site, and prioritize
                  content and features.
                </p>
              </div>
            </Bounce>
            <Bounce right duration={3000}>
              <img
                src={processicon2}
                alt="Process Icon 2"
                className="md:w-[27rem] md:h-[22rem] w-[14rem] h-[14rem]"
              />
            </Bounce>
          </div>

          {/* Creating Blueprint Div Ends*/}

          {/* Development Div */}

          <div className="mx-auto flex flex-col md:px-10  px-3  mt-10">
            <Flip duration={3000}>
              <img
                src={threeicon}
                alt="Icon Three"
                className="md:w-[80px] md:h-[80px] w-[50px] h-[50px]"
              />
            </Flip>
          </div>
          <div className="grid md:grid-cols-2 mt-10 gap-1  md:px-10  px-3 justify-center">
            <Bounce left duration={3000}>
              <img
                src={processicon3}
                alt="Process Icon 3"
                className="md:w-[27rem] md:h-[22rem] w-[14rem] h-[14rem]"
              />
            </Bounce>
            <Bounce right duration={3000}>
              <div className="mx-auto flex flex-col text-justify">
                <h2 className="font-heading md:text-xl text-sm uppercase mb-4">
                  Development
                </h2>
                <p className="text-sm  md:text-base text-start  col-span-2">
                  The website development is performed in two steps that are,
                  Front-end development and Back-end development. It is a
                  comprehensive process that includes everything from
                  information gathering and planning to coding and testing to
                  review and maintenance. The server side of the website is
                  termed the backend and the frontend is that part of the
                  website where the user interacts directly.
                </p>
              </div>
            </Bounce>
          </div>

          {/* Development Div Ends*/}

          {/* Testing And Launching Div */}

          <div className="mx-auto flex flex-col  md:px-10  px-3  mt-10 items-end">
            <Flip duration={3000}>
              {' '}
              <img
                src={fouricon}
                alt="Icon Two"
                className="md:w-[80px] md:h-[80px] w-[50px] h-[50px]"
              />
            </Flip>
          </div>

          <div className="grid md:grid-cols-2 mt-10 gap-24 md:px-10  px-3 justify-center">
            <Bounce left duration={3000}>
              <div className="mx-auto flex flex-col text-justify">
                <h2 className="font-heading md:text-xl text-sm uppercase mb-4">
                  TESTING AND LAUNCHING
                </h2>
                <p className="text-sm  md:text-base text-start col-span-2">
                  The final step involved in website development is testing &
                  launching. The web application testing process ensures the
                  quality of a web app by testing its functionality. This allows
                  you to find and fix bugs before release.
                  <br></br>
                  <br></br>
                  Then comes the launching of the website, which means that,
                  after your website goes live, people from all over the world
                  will be able to view it.
                </p>
              </div>
            </Bounce>
            <Bounce right duration={3000}>
              <img
                src={processicon4}
                alt="Process Icon 2"
                className="md:w-[27rem] md:h-[22rem] w-[14rem] h-[14rem]"
              />
            </Bounce>
          </div>

          {/* Testing And Launching Div Ends*/}
        </div>
      </div>
    </div>
  );
};

export default ServiceProcess;
