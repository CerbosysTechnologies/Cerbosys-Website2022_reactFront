import React from 'react';
import oneicon from '../../../../assets/innerpage/ui and ux/1.svg';
import twoicon from '../../../../assets/innerpage/ui and ux/2.svg';
import threeicon from '../../../../assets/innerpage/ui and ux/3.svg';
import fouricon from '../../../../assets/innerpage/ui and ux/4.svg';
import fiveicon from '../../../../assets/innerpage/ui and ux/5.svg';
import processicon1 from '../../../../assets/innerpage/ui and ux/empathize.png';
import processicon2 from '../../../../assets/innerpage/ui and ux/define.png';
import processicon3 from '../../../../assets/innerpage/ui and ux/ideate.png';
import processicon4 from '../../../../assets/innerpage/ui and ux/prototype.png';
import processicon5 from '../../../../assets/innerpage/ui and ux/test.png';
import { Flip } from 'react-reveal';
const UIAndUXProcess = () => {
  return (
    <div>
      <div className="bg-white mx-auto w-full py-5 px-4 md:p-16 ">
        <div className="max-w-[1240px] mx-auto ">
          {/* Heading */}
          <div className="flex flex-col flex-wrap items-center">
            <h2 className="text-Primary uppercase font-heading pt-2 md:text-5xl text-2xl md:mb-4 min-w-fit">
              Process
            </h2>
            <h2 className="font-heading md:text-xl text-sm uppercase mb-4">
              Our UI/UX Development Process
            </h2>
            <p className="text-sm  md:text-base text-justify  text-black  align-baseline md:px-28 px-10 ">
              UI/UX developers work closely with software developers and product
              managers to create applications that are both effective and easy
              to use.
            </p>
          </div>
          {/* Heading Ends */}

          {/* Empathize Div */}

          <div className="mx-auto flex flex-col md:px-28 px-10 mt-10">
            <Flip duration={3000}>
              <img
                src={oneicon}
                alt="Icon One"
                className="md:w-[80px] md:h-[80px] w-[50px] h-[50px]"
              />
            </Flip>
          </div>
          <div className="grid md:grid-cols-2 mt-10 gap-1 md:px-28 px-10 justify-center">
            <img
              src={processicon1}
              alt="Process Icon 1"
              className="md:w-[27rem] md:h-[22rem] w-[14rem] h-[14rem]"
            />
            <div className="mx-auto flex flex-col text-justify py-3">
              <h2 className="font-heading md:text-xl text-sm uppercase mb-4">
                Empathize
              </h2>
              <p className="text-sm  md:text-base text-justify  col-span-2">
                This process involves in depth research and analysis to
                understand people, their experiences and their needs regarding
                web and apps. It's important to empathize with them and try to
                understand what they're expecting, to give them a user-friendly
                experience.
              </p>
            </div>
          </div>

          {/* Empathize Div Ends*/}

          {/* Define  Div */}

          <div className="mx-auto flex flex-col md:px-28 px-10 mt-10 items-end">
            <Flip duration={3000}>
              <img
                src={twoicon}
                alt="Icon Two"
                className="md:w-[80px] md:h-[80px] w-[50px] h-[50px]"
              />
            </Flip>
          </div>

          <div className="grid md:grid-cols-2 mt-10 gap-24 md:px-28 px-10 justify-center py-3">
            <div className="mx-auto flex flex-col text-justify">
              <h2 className="font-heading md:text-xl text-sm uppercase mb-4">
                Define
              </h2>
              <p className="text-sm  md:text-base text-justify  col-span-2">
                After the Empathize stage, it's time to gather all the
                information collected and then it is analyzed. This helps our
                team identify the core problems. These problem statements are
                called personas. Once these personas are identified, we move on
                to ideation with a human-centered approach.
              </p>
            </div>
            <img
              src={processicon2}
              alt="Process Icon 2"
              className="md:w-[27rem] md:h-[22rem] w-[14rem] h-[14rem]"
            />
          </div>

          {/* Define Div Ends*/}

          {/* Ideate Div */}

          <div className="mx-auto flex flex-col md:px-28 px-10 mt-10">
            <Flip duration={3000}>
              <img
                src={threeicon}
                alt="Icon Three"
                className="md:w-[80px] md:h-[80px] w-[50px] h-[50px]"
              />
            </Flip>
          </div>
          <div className="grid md:grid-cols-2 mt-10 gap-1 md:px-28 px-10 justify-center py-3">
            <img
              src={processicon3}
              alt="Process Icon 3"
              className="md:w-[27rem] md:h-[22rem] w-[14rem] h-[14rem]"
            />
            <div className="mx-auto flex flex-col text-justify">
              <h2 className="font-heading md:text-xl text-sm uppercase mb-4">
                Ideate
              </h2>
              <p className="text-sm  md:text-base text-justify col-span-2">
                Now that all the necessary information is gathered, we start
                generating ideas. With a strong foundation of knowledge from the
                first two phases, we think creatively and look for different
                ways to approach the problem, and identify novel solutions to
                the problem statement.
              </p>
            </div>
          </div>

          {/* Ideate Div Ends*/}

          {/* Prototype Div */}

          <div className="mx-auto flex flex-col md:px-28 px-10 mt-10 items-end">
            <Flip duration={3000}>
              <img
                src={fouricon}
                alt="Icon Four"
                className="md:w-[80px] md:h-[80px] w-[50px] h-[50px]"
              />
            </Flip>
          </div>
          <div className="grid md:grid-cols-2 mt-10 gap-24 md:px-28 px-10 justify-center py-3">
            <div className="mx-auto flex flex-col text-justify">
              <h2 className="font-heading md:text-xl text-sm uppercase mb-4">
                Prototype
              </h2>
              <p className="text-sm  md:text-base text-justify  col-span-2">
                This is an exploratory phase. The focus is to find the most
                optimal solution for each issue discovered. Our group creates
                some lower-cost, smaller versions of the product (or particular
                features within the product) to test out the concepts you’ve
                come up with.
              </p>
            </div>
            <img
              src={processicon4}
              alt="Process Icon 4"
              className="md:w-[27rem] md:h-[22rem] w-[14rem] h-[14rem] "
            />
          </div>

          {/* Prototype Div Ends*/}

          {/* Test Div */}

          <div className="mx-auto flex flex-col md:px-28 px-10 mt-10">
            <Flip duration={3000}>
              <img
                src={fiveicon}
                alt="Icon Five"
                className="md:w-[80px] md:h-[80px] w-[50px] h-[50px]"
              />
            </Flip>
          </div>
          <div className="grid md:grid-cols-2 mt-10 gap-1 md:px-28 px-2 justify-center">
            <img
              src={processicon5}
              alt="Process Icon 5"
              className="md:w-[27rem] md:h-[22rem] w-[14rem] h-[14rem]"
            />
            <div className="mx-auto flex flex-col text-justify py-3">
              <h2 className="font-heading md:text-xl text-sm uppercase mb-4">
                Brand Launch
              </h2>
              <p className="text-sm  md:text-base text-justify  col-span-2">
                Brand launching is a big undertaking, but it can be an
                incredibly rewarding experience. Since this is the final phase
                of design & thinking, here are a few things we follow to launch
                your brand: Brand definition, developing strong visual identity,
                creating, getting involved in the community.
              </p>
            </div>
          </div>

          {/* Test Div Ends*/}
        </div>
      </div>
    </div>
  );
};

export default UIAndUXProcess;
