import React from "react";
import uiuximageicon from "../../../../assets/innerpage/ui and ux/uiuximage.png";
import uiandux_articon from "../../../../assets/innerpage/ui and ux/illustrator.svg";
import { Bounce } from "react-reveal";
const UIAndUXDesc = () => {
  return (
    <div>
      <div className=" mx-auto w-full py-16 px-4 ">
        <div className="max-w-[1240px] mx-auto ">
          {/* First Section */}
          <Bounce duration={3000}>
            <div className="grid md:grid-cols-2">
              {/* Content Section */}
              <div className="mx-auto flex flex-col md:px-24 px-14 text-justify">
                <h1 className="font-heading md:text-2xl text-lg">
                  {" "}
                  UI/UX Development{" "}
                </h1>
                <p className="font-content md:text-lg text-sm">
                  Our UI/UX developers make sure that users have a positive
                  experience when using a product, and that they can easily find
                  the information they're looking for. They are able to create
                  designs that are both aesthetically pleasing and functional.
                </p>
              </div>
              {/* Content Section Ends*/}

              {/* Image Section */}
              <img
                src={uiuximageicon}
                alt="UI And UX Icon"
                className="mx-auto md:w-[28rem]
             w-[18rem] mt-8"
              />
              {/* Image Section Ends*/}
            </div>
          </Bounce>
          {/* Grid Div */}
          {/* First Section Ends */}

          {/* Second Section */}
          <Bounce duration={3000}>
            <div className="grid md:grid-cols-2 bg-Primary mt-8 rounded-3xl gap-2">
              {/* Image Section */}
              <img
                src={uiandux_articon}
                alt="UI/UX Icon"
                className="md:w-[24rem] mx-auto my-8
             w-[28rem] h-[20rem] mt-8"
              />
              {/* Image Section Ends*/}

              {/* Content Section */}
              <div className="flex flex-col md:px-24 px-14 mx-auto text-justify mt-8">
                <h1 className="font-heading md:text-2xl text-lg text-white">
                  We are aware of the Technology Pulse that Leads to Better
                  Performance
                </h1>
                <p className="font-content md:text-lg text-sm mb-8 text-white mt-3 ">
                  Our UI/UX development program helps businesses to create
                  user-friendly interfaces for websites and apps. We are experts
                  in creating interfaces that are easy to navigate and use.
                  <br></br>
                  <br></br>
                  Since,UI/UX development is the process of creating user
                  interfaces and user experiences for software applications, our
                  main focus is on building robust, high-performance user
                  experiences for software applications.
                </p>
              </div>
              {/* Content Section Ends*/}
            </div>
          </Bounce>
          {/* Grid Div */}
          {/* Second Section Ends */}
        </div>
        {/* Max Width Div Ends */}
      </div>
      {/* Second Div Ends */}
    </div>
  );
};

export default UIAndUXDesc;
