import React from "react";
import traineeicon from "../../../../assets/innerpage/traininganddevelopment/traineeicon.svg";
import boxone_icon from "../../../../assets/innerpage/traininganddevelopment/1box.svg";
import boxtwo_icon from "../../../../assets/innerpage/traininganddevelopment/2box.svg";
import boxthree_icon from "../../../../assets/innerpage/traininganddevelopment/3box.svg";
import boxfour_icon from "../../../../assets/innerpage/traininganddevelopment/4box.svg";
// import Lottie from "react-lottie-player";
// import lottieJson from "../../../../assets/JSN/circle-fade-loader.json";
const TrainingAndDevelopmentBody = () => {
  return (
    <div>
      <div className="mx-auto w-full py-16 px-4 bg-TrainingAndDevelopmentBody bg-no-repeat object-fill bg-center bg-contain">
        <div className="max-w-[1240px] mx-auto ">
          {/* Heading Section */}
          <div className="flex flex-wrap items-center justify-center">
            <p className="font-heading text-2xl text-center">
              Training And Development
            </p>
            <img
              src={traineeicon}
              alt="Trainee Icon"
              className="md:w-56 md:h-48 md:ml-20 w-36 h-20 mt-10"
            />

            <p className="mx-10 w-[900px] font-content md:text-lg text-sm text-justify mt-5">
              The complete training and development program is designed to
              ensure the highest level of learning.
              <br></br>
              <br></br>
              By doing so, the overall performance and competitiveness of our
              organization can improve. Training and development programs can
              also help to retain employees and reduce turnover.
            </p>
          </div>
          {/* Heading Section Ends*/}

          {/* Body Section */}

          <div className="grid md:grid-cols-2 mt-8">
            {/* First Grid */}
            <div className="mx-auto flex flex-col md:px-14 md:py-14 px-6 py-6 text-justify border-4 border-gray-700 rounded-xl items-center">
              {/* <Lottie
                loop
                animationData={lottieJson}
                play
                style={{ width: 300, height: 300 }}
              > */}
              <img
                src={boxone_icon}
                alt="First Icon"
                className="md:w-80 md:h-80 w-52 h-52"
              />
              {/* </Lottie> */}

              <p className="font-content md:text-sm md:w-96 mt-10 w-64 text-xs">
                <h1 className="font-heading text-center">
                  Ideas And Creativity
                </h1>
                <br></br>
                Ideas are one of the most powerful tools that you can use to
                motivate and educate your team. This is true whether you are
                training your staff in general office safety, or trying to
                convince them to take part in a new initiative.
                <br></br>
                <br></br>
                On the other hand, one of the most important things for an
                employee is to learn how to generate creative ideas and bring
                something out of the blue to the table.
              </p>
            </div>

            {/* First Grid Ends */}

            {/* Second Grid  */}

            <div className="md:mt-0 mt-20 mx-auto flex flex-col md:px-14 py-6 px-6 text-justify border-4 border-gray-700 rounded-xl items-center">
              <img
                src={boxtwo_icon}
                alt="Second Icon"
                className="md:w-80 md:h-80 w-52 h-52"
              />
              <p className="font-content md:text-sm md:w-96 mt-10 w-64 text-xs">
                <h1 className="text-center font-heading">
                  Tools And Implementation
                </h1>
                <br></br>
                This training and development program addresses three different
                levels of how you can approach the various tools and
                implementation processes covered in the enterprise.
                <br></br>
                Especially in business, people are often the difference-maker
                between failure and success. It’s not always easy to get the
                best talent, but if you can, you’ll be a step ahead.
                <br></br>
                <br></br>
                This training program helps to learn various tools that take
                away complex tasks and make the efforts more productive.
              </p>
            </div>
            {/* Second Grid Ends */}

            {/* Third Grid  */}

            <div className=" mt-20 mx-auto flex flex-col md:px-14 py-6 px-6 text-justify border-4 border-gray-700 rounded-xl items-center">
              <img
                src={boxthree_icon}
                alt="Third Icon"
                className="md:w-80 md:h-80 w-52 h-52"
              />
              <p className="font-content md:text-sm md:w-96 mt-10 w-64 text-xs">
                <h1 className="text-center font-heading">
                  Interaction And Discussion
                </h1>
                <br></br>
                Interaction and Discussion in Training and Development session
                is a presentation that encourages and promotes discussion among
                the members of the audience in order to gain a better
                understanding of the subject.
                <br></br>
                <br></br>
                Training and Development sessions are a critical aspect of the
                business. In order to gain the maximum from such training, it is
                important that your participants are actively involved in the
                process and are involved in discussion. This will help them
                remember the key points and get a better understanding of their
                relevance.
              </p>
            </div>
            {/* Third Grid Ends */}

            {/* Fourth Grid  */}

            <div className=" mt-20 mx-auto flex flex-col md:px-14 py-6 px-6 text-justify border-4 border-gray-700 rounded-xl items-center">
              <img
                src={boxfour_icon}
                alt="Fourth Icon"
                className="md:w-80 md:h-80 w-52 h-52"
              />
              <p className="font-content md:text-sm md:w-96 mt-10 w-64 text-xs">
                <h1 className="text-center font-heading">
                  Possibilities of Growth
                </h1>
                <br></br>
                The final crux of this training and development session is the
                possibility of growth in the future.
                <br></br>
                <br></br>
                As an employee, it’s possible to grow your career and develop
                new skills within the corporation where you’re currently
                working. Since, the corporate sector is growing at a very rapid
                rate, especially in the IT sector. IT companies and industries
                are increasing day by day with new technological inventions.
                <br></br>
                <br></br>
                This means that this training session can open up a huge number
                of possibilities for the employees of the company.
              </p>
            </div>
            {/* Fourth Grid Ends */}
          </div>

          {/* Body Section Ends*/}
        </div>
      </div>
    </div>
  );
};

export default TrainingAndDevelopmentBody;
