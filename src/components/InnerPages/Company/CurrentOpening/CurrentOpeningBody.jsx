import axios from "axios";
import React, { useEffect, useState } from "react";
import tripicon from "../../../../assets/innerpage/currentopening/trip.svg";
import { SERVER } from "../../../../ServerUrls";
import exp from "../../../../assets/Careerpage/ic_work_24px.svg";
import Rupees from "../../../../assets/Careerpage/Rupees.svg";
import hands from "../../../../assets/Careerpage/hands.svg";
import place from "../../../../assets/Careerpage/ic_place_24px.svg";
import description from "../../../../assets/Careerpage/ic_description_24px.svg";



import ApplyForjob from "./ApplyForjob";

const CurrentOpeningBody = () => {
  const ModalPotion = () => {
    document.getElementById("ModalPotion").style.display = "block";
  };


  const IMG = "https://cerbosys.in:3700/job_post/";
  const [Job, setJob] = useState([]);

  const getData = () => {
    // this is for getAllJobPost for career page

    axios
      .get(SERVER + "/getAllJobPost", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res, i) => {
        console.log("getAllJobPost", res.data.data);
        setJob(res.data.data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  

  return (
    <div>
      <div className="mx-auto w-full py-16 px-2">
        <div className="max-w-[1240px] mx-auto">
          <p className="font-heading text-3xl text-center underline underline-offset-[26px]">
            Open Positions
          </p>

          {/* Card Content Section */}

          <div className="flex flex-wrap mt-10  justify-between">
            {Job ? (
              Job.map((item, index) => {
                return (
                  <div className="mx-2 mt-5">
                    <a
                      className="block p-6 max-w-sm  bg-white border border-gray-200 shadow-md
               "
                    >
                      <h5
                        className="mb-2 text-2xl font-heading tracking-tight text-gray-500
              uppercase text-center"
                        key={index}
                      >
                        {item.jobposition}
                      </h5>
                      <p className="font-content text-gray-700 text-justify mt-5 mb-10">
                        {/* images */}
                        <div>
                          <img
                            className="object-scale-down h-48 w-80"
                            src={IMG + `${item.job_icon.substr(18)}`}
                            alt="img"
                          />
                        </div>

                        {/* Content */}
                        <div className="  ">
                          <div className="flex gap-3.5">
                            <div className=" md:mt-1">
                              <img
                                className="card-icon h-5 w-5"
                                src={exp}
                                alt="Placeholder"
                              />
                            </div>
                            <div className="uppercase font-bold">
                              Exp. min {item.jobexperience} years
                            </div>
                          </div>

                          <div className="flex gap-3.5">
                            <div className="md:mt-1">
                              <img
                                className="card-icon h-5 w-5"
                                src={Rupees}
                                alt="Placeholder"
                              />
                            </div>
                            <div className=" uppercase font-bold ">
                              Salary {item.salaryscale} /Year
                            </div>
                          </div>
                          <div className="flex gap-2.5">
                            <div className="md:mt-1">
                              <img
                                className="card-icon h-5 w-5"
                                src={hands}
                                alt="Placeholder"
                              />
                            </div>
                            <div className="uppercase font-bold">
                              {item.jobemploymenttype}
                            </div>
                          </div>
                          <div className="flex gap-3.5">
                            <div className="md:mt-1">
                              <img
                                className="card-icon h-5 w-5"
                                src={place}
                                alt="Placeholder"
                              />
                            </div>
                            <div className="uppercase font-bold">
                              {item.joblocation}
                            </div>
                          </div>
                          <div className="flex gap-3.5">
                            <div className="md:mt-1 ">
                              <img
                                className="card-icon h-5 w-5"
                                src={description}
                                alt="Placeholder"
                              />
                            </div>
                            <div className=" uppercase font-bold">
                              {item.jobdescription}
                            </div>
                          </div>
                        </div>
                      </p>

                      <div className="flex items-center justify-center">
                        <button
                          className="py-2 px-4 text-sm font-heading 
              text-center text-Primary rounded-3xl border border-Primary "
                          onClick={() => {
                            ModalPotion();
                          }}
                        >
                          APPLY NOW
                        </button>
                      </div>
                    </a>
                  </div>
                );
              })
            ) : (
              <h1 className="font-heading md:text-2xl text-lg">No Open Positions</h1>
            )}
          </div>
          {/* Card Content Section Ends */}

          {/* Perks Section */}
          <div className="bg-PerksBackground mx-auto w-full py-16 px-2 object-contain bg-cover bg-center mt-10">
            <p className="font-heading text-3xl text-center underline underline-offset-[26px]">
              Perks and Benefits
            </p>

            <div
              className="mx-auto grid md:grid-cols-2 grid-cols-1 
            items-center justify-center gap-8 w-3/4 mt-16"
            >
              <div>
                <div className="flex flex-wrap">
                  <img src={tripicon} />
                  <h1 className="font-heading text-xl p-2">
                    Healthy Work Environment
                  </h1>
                </div>
                <p className="font-content text-lg ml-14 text-justify">
                  Cerbosys constantly strives to provide the best possible
                  working environment for its employees. Since the work
                  environment directly affects the mentality and performance of
                  the employee.
                </p>
              </div>

              <div>
                <div className="flex flex-wrap">
                  <img src={tripicon} />
                  <h1 className="font-heading text-xl p-2 w-96">
                    Performance Linked Incentives and Reward Programs
                  </h1>
                </div>
                <p className="font-content text-lg ml-14 text-justify">
                  Our PLI and rewards programs help to increase employee
                  efficiency and performance. As employees give their best
                  performance to get rewarded and receive the best pay increase.
                </p>
              </div>

              <div>
                <div className="flex flex-wrap">
                  <img src={tripicon} />
                  <h1 className="font-heading text-xl p-2 w-96">
                    Training and Development Sessions
                  </h1>
                </div>
                <p className="font-content text-lg ml-14 text-justify ">
                  Cerbosys conducts an extensive training and development
                  program to improve the overall performance and competitiveness
                  of our employees.
                </p>
              </div>

              <div>
                <div className="flex flex-wrap">
                  <img src={tripicon} />
                  <h1 className="font-heading text-xl  p-2">Team Activities</h1>
                </div>
                <p className="font-content text-lg ml-14 text-justify">
                  Cerbosys organizes several team activities like conferencing,
                  games, trips, extempore, etc. which brings the team together,
                  keeps the employees happy and increases employee retention.
                </p>
              </div>

              <div>
                <div className="flex flex-wrap">
                  <img src={tripicon} />
                  <h1 className="font-heading text-xl p-2">
                    Maternity and Paternity Leaves
                  </h1>
                </div>
                <p className="font-content text-lg ml-14 text-justify">
                  Our company provides maternity and paternity leaves for our
                  employees when they can avail to take care of their newly born
                  child.
                </p>
              </div>

              <div>
                <div className="flex flex-wrap">
                  <img src={tripicon} />
                  <h1 className="font-heading text-xl p-2">
                    Work/Life Balance
                  </h1>
                </div>
                <p className="font-content text-lg ml-14 text-justify">
                  We manage to create a balance between work and life in the
                  best way for our employees so that coming to work each day is
                  refreshing for them.
                </p>
              </div>
            </div>
          </div>
          {/* Perks Section Ends*/}
        </div>
      </div>
      <ApplyForjob/> 
      
    </div>
  );
};

export default CurrentOpeningBody;
