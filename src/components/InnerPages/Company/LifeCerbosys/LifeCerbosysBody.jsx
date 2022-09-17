import React from "react";
import cloudicon from "../../../../assets/innerpage/lifecerbosys/cloud.png";
import gifticon from "../../../../assets/innerpage/lifecerbosys/gift.png";
import diwaliicon from "../../../../assets/innerpage/lifecerbosys/diwali.png";
import flagicon from "../../../../assets/innerpage/lifecerbosys/flag.png";
import holiicon from "../../../../assets/innerpage/lifecerbosys/holi.png";
import newyearicon from "../../../../assets/innerpage/lifecerbosys/newyear.svg";
import bossthoughticon from "../../../../assets/innerpage/lifecerbosys/bossthought.svg";

const LifeCerbosysBody = () => {
  return (
    <div>
      <div className="mx-auto w-full py-16 px-4 bg-LifeCerbosysBody ">
        <div className="max-w-[1240px] mx-auto ">
          {/* Body Section */}
          <div className="grid md:grid-cols-2 mt-32">
            {/* First Grid */}
            <div
              className="relative mx-auto flex flex-col md:px-10 px-6 py-10 
                text-justify border-4 border-Primary rounded-xl items-center"
            >
              <img
                src={cloudicon}
                alt="Cloud Icon"
                className="md:w-96 md:h-96 w-52 relative md:bottom-56 bottom-32 object-contain"
              />

              <p className="font-content md:text-sm md:w-80 w-64 text-xs md:-mt-64 -mt-32">
                <h1 className="font-heading text-center">Company Event</h1>
                <br></br>
                The company event this year was intended for the employees and
                clients to discuss some strategies and have fun of course.
                <br></br>
                <br></br>
                Discussions do not need to be serious every time, sometimes it's
                all about working with fun and involvement. #company event and
                strategies
              </p>
            </div>

            {/* First Grid Ends */}

            {/* Second Grid */}
            <div
              className="relative mx-auto flex flex-col md:px-10 px-6 py-10 
                text-justify border-4 border-Primary rounded-xl items-center md:mt-0 mt-40"
            >
              <img
                src={gifticon}
                alt="Gift Icon"
                className="md:w-80 md:h-80 w-52 relative bottom-48 object-contain"
              />

              <p className="font-content md:text-sm md:w-80 w-64 text-xs -mt-40">
                <h1 className="font-heading text-center">Employee Farewell</h1>
                <br></br>
                As we say goodbye to our valued employees, the team always
                celebrates this opportunity to thank them for their dedication
                and service over their work tenure.
                <br></br>
                <br></br>
                Rather than a formal goodbye, we always try to make it a more
                memorable last-day work experience for the employee. 
                <strong>#employee farewell</strong>
              </p>
            </div>

            {/* Second Grid Ends */}

            {/* Third Grid */}
            <div
              className="relative mx-auto flex flex-col md:px-10 px-6 py-10 
                text-justify border-4 border-Primary rounded-xl items-center mt-36"
            >
              <img
                src={diwaliicon}
                alt="Diwali Icon"
                className="md:w-96 md:h-96 w-56 relative md:bottom-48 bottom-32 object-contain "
              />

              <p className="font-content md:text-sm md:w-80 w-64 text-xs md:-mt-60 -mt-28">
                <h1 className="font-heading text-center">Diwali Celebration</h1>
                <br></br>
                The company event this year was intended for the employees and
                clients to discuss some strategies and have fun of course.
                <br></br>
                <br></br>
                Discussions do not need to be serious every time, sometimes it's
                all about working with fun and involvement. #company event and
                strategies
              </p>
            </div>

            {/* Third Grid Ends */}

            {/* Fourth Grid */}
            <div
              className="relative mx-auto flex flex-col md:px-10 px-6 py-10 
                text-justify border-4 border-Primary rounded-xl items-center mt-48"
            >
              <img
                src={flagicon}
                alt="Flag Icon"
                className="md:w-96 md:h-96 w-52 relative bottom-48 object-contain"
              />

              <p className="font-content md:text-sm md:w-80 w-64 text-xs -mt-48">
                <h1 className="font-heading text-center">
                  Independence Day Celebration
                </h1>
                <br></br>
                Independence day 2022 was special as it was about the theme “Har
                Ghar Tiranga”. It is always a pleasant experience to celebrate
                national festivals with the Cerbosys family since your workplace
                is nothing less than your second home.{" "}
                <strong>#salute to tiranga</strong>
              </p>
            </div>

            {/* Fourth Grid Ends */}

            {/* Fifth Grid */}
            <div
              className="relative mx-auto flex flex-col md:px-10 px-6 py-10 
                text-justify border-4 border-Primary rounded-xl items-center md:mt-52 mt-32"
            >
              <img
                src={holiicon}
                alt="Holi Icon"
                className="md:w-96 md:h-96 w-56 relative md:bottom-48 bottom-32 object-contain"
              />

              <p className="font-content md:text-sm md:w-80 w-64 text-xs md:-mt-48 -mt-28">
                <h1 className="font-heading text-center">Holi Celebration</h1>
                <br></br>
                Holi this year was a delightful experience with workmates. Being
                one of the most bright, colorful, and vibrant festivals, Holi as
                a festival teaches us to stay colorful and creative in life.
              </p>
            </div>

            {/* Fifth Grid Ends */}

            {/* Sixth Grid */}
            <div
              className="relative mx-auto flex flex-col md:px-10 px-6 py-10 
                text-justify border-4 border-Primary rounded-xl items-center mt-52"
            >
              <img
                src={newyearicon}
                alt="New Year Icon"
                className="md:w-96 md:h-96 w-52 relative bottom-48 object-contain"
              />

              <p className="font-content md:text-sm md:w-80 w-64 text-xs -mt-44">
                <h1 className="font-heading text-center">
                  New Year Celebration
                </h1>
                <br></br>
                New year is all about new life, new resolutions, and a fresh
                start. Our resolution and aspiration this year was to work more
                efficiently and joyfully.
                <br></br>
                We switched from - working hard to working joyfully, as we
                believe that if you love what you do then miracles happen.{" "}
                <strong>#new year celebration</strong>
              </p>
            </div>

            {/* Sixth Grid Ends */}
          </div>
          {/* Body Section Ends */}

          {/* Heading Section */}
          <div className="flex flex-wrap items-center justify-center mt-10">
            <p className="font-heading text-2xl text-center">
              What Our Employees Say About Us:
            </p>

            <p className="mx-10 w-[900px] font-content md:text-lg text-sm text-justify mt-5">
              Cerbosys is a great place to work. Working with team Cerbosys is
              fun and challenging, and we love seeing new ideas and developments
              coming out of the office every day. We've been extremely proud of
              our accomplishments as a company.
              <br></br>
              <br></br>
              At Cerbosys technologies, we pride ourselves on our strong team of
              employees. They are the heart and soul of our company, and we are
              constantly striving to provide them with the best possible working
              environment.
            </p>
          </div>

          {/* Image Thought Section */}
          <div className="items-center justify-center md:px-28 md:py-5 mt-10 md:-mb-96 -mb-56">
            <img src={bossthoughticon} alt="Boss Thought" className="md:w-[60rem] md:h-[70rem]"/>
          </div>
          {/* Image Thought Section Ends*/}

          {/* Heading Section Ends */}
        </div>
      </div>
    </div>
  );
};

export default LifeCerbosysBody;
