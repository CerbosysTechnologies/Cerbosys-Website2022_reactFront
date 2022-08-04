import React from 'react'
import oneicon from "../../../../assets/innerpage/staffaugmentation/1.svg";
import twoicon from "../../../../assets/innerpage/staffaugmentation/2.svg";
import threeicon from "../../../../assets/innerpage/staffaugmentation/3.svg";
import fouricon from "../../../../assets/innerpage/staffaugmentation/4.svg";

import processicon1 from "../../../../assets/innerpage/staffaugmentation/requirementreview.png";
import processicon2 from "../../../../assets/innerpage/staffaugmentation/interview.png"
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae,
              inventore, odit, perferendis eius possimus corporis vitae
              excepturi porro totam facilis dicta. Rerum, at? Accusantium harum
              tempora, reiciendis quibusdam a quod?
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
              <p className="font-content md:text-sm text-xs col-span-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
                omnis magni! Maiores aspernatur incidunt labore minus quo hic,
                tenetur delectus, deleniti praesentium esse pariatur in
                provident? Aliquid vel alias eos! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Rem, omnis magni! Maiores
                aspernatur incidunt labore minus quo hic, tenetur delectus,
                deleniti praesentium esse pariatur in provident? Aliquid vel
                alias eos!
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
              <p className="font-content md:text-sm text-xs col-span-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
                omnis magni! Maiores aspernatur incidunt labore minus quo hic,
                tenetur delectus, deleniti praesentium esse pariatur in
                provident? Aliquid vel alias eos! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Rem, omnis magni! Maiores
                aspernatur incidunt labore minus quo hic, tenetur delectus,
                deleniti praesentium esse pariatur in provident? Aliquid vel
                alias eos!
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
              <p className="font-content md:text-sm text-xs col-span-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
                omnis magni! Maiores aspernatur incidunt labore minus quo hic,
                tenetur delectus, deleniti praesentium esse pariatur in
                provident? Aliquid vel alias eos! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Rem, omnis magni! Maiores
                aspernatur incidunt labore minus quo hic, tenetur delectus,
                deleniti praesentium esse pariatur in provident? Aliquid vel
                alias eos!
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
              <p className="font-content md:text-sm text-xs col-span-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
                omnis magni! Maiores aspernatur incidunt labore minus quo hic,
                tenetur delectus, deleniti praesentium esse pariatur in
                provident? Aliquid vel alias eos! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Rem, omnis magni! Maiores
                aspernatur incidunt labore minus quo hic, tenetur delectus,
                deleniti praesentium esse pariatur in provident? Aliquid vel
                alias eos!
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
  )
}

export default StaffAugmentationProcess