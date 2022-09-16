import React from "react";
import oneicon from "../../../../assets/innerpage/staffaugmentation/1.svg";
import twoicon from "../../../../assets/innerpage/staffaugmentation/2.svg";
import threeicon from "../../../../assets/innerpage/staffaugmentation/3.svg";
import fouricon from "../../../../assets/innerpage/staffaugmentation/4.svg";

import processicon1 from "../../../../assets/innerpage/staffaugmentation/requirementreview.png";
import processicon2 from "../../../../assets/innerpage/staffaugmentation/interview.png";
import processicon3 from "../../../../assets/innerpage/staffaugmentation/onboard.png";
import processicon4 from "../../../../assets/innerpage/staffaugmentation/staffsupport.png";

const StaffAugmentationProcess = () => {
  return (
    <div>
      <div className="bg-white mx-auto w-full py-5 px-16 ">
        <div className="max-w-[1240px] mx-auto ">
          {/* Heading */}
          <div className="flex flex-col flex-wrap items-center">
            <h1 className="font-heading md:text-3xl uppercase text-Primary text-xl">
              Process
            </h1>
            <h2 className="font-subheading md:text-xl text-black text-sm">
              Our Staff Augmentation Process
            </h2>
            <p className="font-content md:text-lg text-black text-sm text-justify align-baseline md:px-28 px-10">
              The staff augmentation process at Cerbosys has been segmented into
              four basic steps that involve requirement review, interviewing and
              hiring experts, onboarding new team members and providing staff
              support.
            </p>
          </div>
          {/* Heading Ends */}

          {/* Requirement Review Div */}

          <div className="mx-auto flex flex-col md:px-28 px-10 mt-10">
            <img
              src={oneicon}
              alt="Icon One"
              className="md:w-[80px] md:h-[80px] w-[50px] h-[50px]"
            />
          </div>
          <div className="grid md:grid-cols-2 mt-10 gap-1 md:px-28 px-10 justify-center">
            <img
              src={processicon1}
              alt="Process Icon 1"
              className="md:w-[27rem] md:h-[22rem] w-[14rem] h-[14rem]"
            />
            <div className="mx-auto flex flex-col text-justify">
              <h1 className="font-heading md:text-xl text-sm uppercase mb-4">
                {" "}
                Requirement Review
              </h1>
              <p className="font-content md:text-lg text-sm col-span-2">
                Before hiring or expanding the staff requirement by our clients,
                we first review the requirement of the company and the sectors
                in which candidates are required. With this growing significance
                in the marketing world at present, we work on hiring the most
                promising candidates for our clients.
              </p>
            </div>
          </div>

          {/* Requirement Review Ends*/}

          {/* Interview  Div */}

          <div className="mx-auto flex flex-col md:px-28 px-10 mt-10 items-end">
            <img
              src={twoicon}
              alt="Icon Two"
              className="md:w-[80px] md:h-[80px] w-[50px] h-[50px]"
            />
          </div>

          <div className="grid md:grid-cols-2 mt-10 gap-24 md:px-28 px-10 justify-center">
            <div className="mx-auto flex flex-col text-justify">
              <h1 className="font-heading md:text-xl text-sm uppercase mb-4">
                Interview And Hire Experts
              </h1>
              <p className="font-content md:text-lg text-sm col-span-2">
                Hiring experts is an essential part of growing any business. As
                business owners, we are well aware of how crucial it is to know
                how to interview experts. With the ability to hire the most
                promising talents, we can take your business to the next level.
              </p>
            </div>
            <img
              src={processicon2}
              alt="Process Icon 2"
              className="md:w-[27rem] md:h-[22rem] w-[14rem] h-[14rem]"
            />
          </div>

          {/* Interview Div Ends*/}

          {/* Onboard Div */}

          <div className="mx-auto flex flex-col md:px-28 px-10 mt-10">
            <img
              src={threeicon}
              alt="Icon Three"
              className="md:w-[80px] md:h-[80px] w-[50px] h-[50px]"
            />
          </div>
          <div className="grid md:grid-cols-2 mt-10 gap-1 md:px-28 px-10 justify-center">
            <img
              src={processicon3}
              alt="Process Icon 3"
              className="md:w-[27rem] md:h-[22rem] w-[14rem] h-[14rem]"
            />
            <div className="mx-auto flex flex-col text-justify">
              <h1 className="font-heading md:text-xl text-sm uppercase mb-4">
                Onboard New Team Members
              </h1>
              <p className="font-content md:text-lg text-sm col-span-2">
                Onboarding new team members is one of the most important parts
                of a particular business. We make sure that we have invested
                ample time and energy in onboarding new talent. The right
                onboarding always gives a huge impact on startup companies and
                sets the tone for their success journey.
              </p>
            </div>
          </div>

          {/* Onboard Div Ends*/}

          {/* Staff Support Div */}

          <div className="mx-auto flex flex-col md:px-28 px-10 mt-10 items-end">
            <img
              src={fouricon}
              alt="Icon Four"
              className="md:w-[80px] md:h-[80px] w-[50px] h-[50px]"
            />
          </div>
          <div className="grid md:grid-cols-2 mt-10 gap-24 md:px-28 px-10 justify-center">
            <div className="mx-auto flex flex-col text-justify">
              <h1 className="font-heading md:text-xl text-sm uppercase mb-4">
                Provide Staff Support
              </h1>
              <p className="font-content md:text-lg text-sm col-span-2">
                Staff management is a tough job, with so many people to keep
                track of, which is why we provide staff support for new trainees
                and joinee so that the managers can effectively manage their
                staff.
              </p>
            </div>
            <img
              src={processicon4}
              alt="Process Icon 4"
              className="md:w-[27rem] md:h-[22rem] w-[14rem] h-[14rem] "
            />
          </div>

          {/* Staff Support Div Ends*/}
        </div>
      </div>
    </div>
  );
};

export default StaffAugmentationProcess;
