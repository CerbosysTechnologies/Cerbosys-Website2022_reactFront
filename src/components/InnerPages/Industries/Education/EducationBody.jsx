import React from "react";
import educationmobicon from "../../../../assets/innerpage/education/educationmob.svg";
import educationbusinessicon from "../../../../assets/innerpage/education/educationimage.svg";

const EducationBody = () => {
  return (
    <div>
      <div className="mx-auto w-full py-10 px-4 ">
        <div className="max-w-[1240px] mx-auto">
          {/* Image Section */}
          <div className="flex flex-wrap mx-auto items-center justify-center space-x-10">
            {/* Mobile Image */}
            <div className="">
              <img
                src={educationmobicon}
                alt="Education Mobile"
                className="md:h-[30rem]"
              />
            </div>
            {/* Mobile Image */}

            {/* Image Section Ends*/}

            {/* Side */}
            <div className="flex flex-wrap flex-col ">
              <h2 className="text-Green md:text-3xl text-center mb-6 text-xl mt-4 font-heading">
                Education In Business
              </h2>
              <img
                src={educationbusinessicon}
                alt="Education Business"
                className="md:h-[20rem]"
              />
              <p className="font-content  md:w-[33rem] mt-6 text-justify">
                Education is one of the most important spheres of investment and
                development. Education has become a big business in the past
                decade or so, and it’s only going to get bigger from here on
                out. Therefore, we don't only provide our clients with Education
                Solutions but also help them to understand business.
              </p>
            </div>
            {/* Side Image*/}
          </div>

          {/* Bullet Section */}
          <div className="flex flex-wrap flex-col mx-auto">
            <div className="font-heading md:text-3xl text-xl mt-10 text-center">
              Our Services for the Educational Industry
            </div>

            <ul className="text-justify font-content  mt-10 list-disc">
              <li>
                <strong>E-Learning Module Creation :-</strong> Since Learning is
                improving at an exponential rate, we offer the best e-learning
                module creation services which include a variety of useful and
                advanced functionalities to create dynamic and engaging courses.
              </li>

              <li>
                <strong>Education Application/Web Services Portal :-</strong>{" "}
                Education advancement is one of the biggest challenges faced by
                millions of students all over the world. We provide Education
                businesses with a range of unique and innovative application
                solutions.
              </li>

              <li>
                <strong>Student Management :-</strong> Student management
                software designed by us helps you keep a watchful eye on your
                school's students so they don't fall behind and allow them to
                maintain their grades and progress.
              </li>

              <li>
                <strong>Reducing Complexities and Better Support :-</strong> As
                an IT-based company, we provide strong support in the
                integration of modern-day technologies with education, which
                results in increased efficiency and effectiveness while at the
                same time reducing complexities on both sides.
              </li>
            </ul>
          </div>
          {/* Bullet Section Ends*/}
        </div>
      </div>
    </div>
  );
};

export default EducationBody;
