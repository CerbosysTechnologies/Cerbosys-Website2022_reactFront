import React from 'react';
import { Bounce } from 'react-reveal';
import { Flip } from 'react-reveal';
import oneicon from '../../../../assets/innerpage/webdevelopment/1.svg';
import twoicon from '../../../../assets/innerpage/webdevelopment/2.svg';
import threeicon from '../../../../assets/innerpage/webdevelopment/3.svg';
import fouricon from '../../../../assets/innerpage/webdevelopment/4.svg';
import fiveicon from '../../../../assets/innerpage/Softwaredevelopment/five.png';
import Analysis from '../../../../assets/innerpage/Softwaredevelopment/ANALYSIS.png';
import DESIGN from '../../../../assets/innerpage/Softwaredevelopment/DESIGN.png';
import DEVELOPMENT from '../../../../assets/innerpage/Softwaredevelopment/DEVELOPMENT.png';
import TESTING from '../../../../assets/innerpage/Softwaredevelopment/TESTING.png';
import MAINTENANCE from '../../../../assets/innerpage/Softwaredevelopment/MAINTENANCE.svg';
function ServiceProSD() {
  return (
    <div>
      <div className="bg-white mx-auto w-full py-5 px-5 md:px-16 ">
        <div className="max-w-[1240px] mx-auto ">
          {/* Heading */}
          <div className="flex flex-col flex-wrap items-center">
            <h2 className="font-heading md:text-3xl uppercase text-Primary text-xl">
              Process
            </h2>
            <h2 className="font-subheading md:text-xl text-black text-sm mb-5">
              Our software developer process
            </h2>
            <p className="text-sm  md:text-base text-justify    text-black align-baseline md:px-28 px-10">
              The software development lifecycle (SDLC) is a series of stages
              that companies must go through to create the most optimal software
              for their needs
            </p>
          </div>
          {/* Heading Ends */}

          {/* Requirement Analysis Div */}

          <div className="mx-auto flex flex-col px-5 mt-10">
            <Flip duration={3000}>
              <img
                src={oneicon}
                alt="Icon One"
                className="md:w-[80px] md:h-[80px] w-[50px] h-[50px]"
              />
            </Flip>
          </div>
          <div className="grid md:grid-cols-2 mt-10 gap-1 px-5 justify-center">
            <Bounce left duration={3000}>
              <img
                src={Analysis}
                alt="Process Icon 1"
                className="md:w-[27rem] md:h-[22rem] w-[14rem] h-[14rem]"
              />
            </Bounce>
            <Bounce right duration={3000}>
              <div className="mx-auto flex flex-col text-justify">
                <h2 className="font-heading md:text-xl text-sm uppercase mb-4">
                  Analysis
                </h2>
                <p className="text-sm  md:text-base text-justify  col-span-2">
                  The first stage of the SDLC is analysis, which involves
                  identifying the problem you're trying to solve and determining
                  what your end goal is. This is also known as "Business
                  Analysis."
                  <br></br>
                  <br></br>
                </p>
              </div>
            </Bounce>
          </div>

          {/* Requirement Analysis Div Ends*/}

          {/* Creating Blueprint Div */}

          <div className="mx-auto flex flex-col px-5 mt-10 items-end">
            <Flip duration={3000}>
              {' '}
              <img
                src={twoicon}
                alt="Icon Two"
                className="md:w-[80px] md:h-[80px] w-[50px] h-[50px]"
              />
            </Flip>
          </div>

          <div className="grid md:grid-cols-2 mt-10 gap-24 px-5 justify-center">
            <Bounce left duration={3000}>
              <div className="mx-auto flex flex-col text-justify">
                <h2 className="font-heading md:text-xl text-sm uppercase mb-4">
                  DESIGN
                </h2>
                <p className="text-sm  md:text-base text-justify col-span-2">
                  Once you have your problem, you can move on to design. This
                  stage involves brainstorming ideas with other people or using
                  tools like paper sketches or whiteboards to generate a lot of
                  different solutions at once. You might also use storyboards if
                  you're planning a video game or another interactive experience
                </p>
              </div>
            </Bounce>
            <Bounce right duration={3000}>
              <img
                src={DESIGN}
                alt="Process Icon 2"
                className="md:w-[27rem] md:h-[22rem] w-[14rem] h-[14rem]"
              />
            </Bounce>
          </div>

          {/* Creating Blueprint Div Ends*/}

          {/* Development Div */}

          <div className="mx-auto flex flex-col px-5 mt-10">
            <Flip duration={3000}>
              <img
                src={threeicon}
                alt="Icon Three"
                className="md:w-[80px] md:h-[80px] w-[50px] h-[50px]"
              />
            </Flip>
          </div>
          <div className="grid md:grid-cols-2 mt-10 gap-1 px-5 justify-center">
            <Bounce left duration={3000}>
              <img
                src={DEVELOPMENT}
                alt="Process Icon 3"
                className="md:w-[27rem] md:h-[22rem] w-[14rem] h-[14rem]"
              />
            </Bounce>
            <Bounce right duration={3000}>
              <div className="mx-auto flex flex-col text-justify">
                <h2 className="font-heading md:text-xl text-sm uppercase mb-4">
                  Development
                </h2>
                <p className="text-sm  md:text-base text-justify  col-span-2">
                  Development is where you actually start coding. During this
                  stage, you'll refine your ideas and make sure they work
                  properly before moving on to testing them out in a test
                  environment—or beta testing them if that's how your company
                  does things
                </p>
              </div>
            </Bounce>
          </div>

          {/* Development Div Ends*/}

          {/* Testing And Launching Div */}

          <div className="mx-auto flex flex-col px-5 mt-10 items-end">
            <Flip duration={3000}>
              {' '}
              <img
                src={fouricon}
                alt="Icon Two"
                className="md:w-[80px] md:h-[80px] w-[50px] h-[50px]"
              />
            </Flip>
          </div>

          <div className="grid md:grid-cols-2 mt-10 gap-24 px-5 justify-center">
            <Bounce left duration={3000}>
              <div className="mx-auto flex flex-col text-justify">
                <h2 className="font-heading md:text-xl text-sm uppercase mb-4">
                  TESTING
                </h2>
                <p className="text-sm  md:text-base text-justify col-span-2">
                  Testing is where it gets fun. After all the hard work from
                  previous stages has been done, it's time for some serious
                  playtesting with real users so that everything works like it
                  should when released into production
                  <br></br>
                  <br></br>
                </p>
              </div>
            </Bounce>
            <Bounce right duration={3000}>
              <img
                src={TESTING}
                alt="Process Icon 2"
                className="md:w-[27rem] md:h-[22rem] w-[14rem] h-[14rem]"
              />
            </Bounce>
          </div>

          {/* Testing And Launching Div Ends*/}

          {/* Development Div */}

          <div className="mx-auto flex flex-col px-5 mt-10">
            <Flip duration={3000}>
              <img
                src={fiveicon}
                alt="Icon Three"
                className="md:w-[80px] md:h-[80px] w-[50px] h-[50px]"
              />
            </Flip>
          </div>
     
          <div className="grid md:grid-cols-2 mt-10 gap-1 px-5 justify-center">
            <Bounce left duration={3000}>
              <img
                src={MAINTENANCE}
                alt="Process Icon 3"
                className="md:w-[27rem] md:h-[22rem] w-[14rem] h-[14rem]"
              />
            </Bounce>
            <Bounce right duration={3000}>
              <div className="mx-auto flex flex-col text-justify">
                <h2 className="font-heading md:text-xl text-sm uppercase mb-4">
                  MAINTENANCE
                </h2>
                <p className="text-sm  md:text-base text-justify  col-span-2">
                  Website Maintenance is the task of keeping your website up and
                  running. It can be something as simple as checking for errors
                  in the code and fixing them, or it can involve complex
                  problems that require a professional to diagnose and fix. The
                  goal of website maintenance is to make sure that your website
                  works well for you, so that you can use it without any issues
                </p>
              </div>
            </Bounce>
          </div>

          {/* Development Div Ends*/}
        </div>
      </div>
    </div>
  );
}

export default ServiceProSD;
