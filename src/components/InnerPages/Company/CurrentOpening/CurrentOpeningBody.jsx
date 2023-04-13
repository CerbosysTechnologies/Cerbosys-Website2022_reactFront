import axios from 'axios';
import React, { useEffect, useState } from 'react';
import tripicon from '../../../../assets/innerpage/currentopening/trip.svg';
import { SERVER } from '../../../../ServerUrls';
import experience from '../../../../assets/Careerpage/experience.png';
import location from '../../../../assets/Careerpage/location.png';
import rupes from '../../../../assets/Careerpage/rupes.png';
import fulltime from '../../../../assets/Careerpage/fulltime.png';
// import Rupees from '../../../../assets/Careerpage/Rupees.svg';
// import hands from '../../../../assets/Careerpage/hands.svg';
// import place from '../../../../assets/Careerpage/ic_place_24px.svg';
import description from '../../../../assets/Careerpage/ic_description_24px.svg';

import ApplyForjob from './ApplyForjob';
import { createMemoryRouter, Navigate, useNavigate } from 'react-router-dom';

const CurrentOpeningBody = () => {
  let navigate = useNavigate();
  // const ModalPotion = () => {
  //   document.getElementById('ModalPotion').style.display = 'block';
  // };

  const IMG = 'https://cerbosys.in:3700/job_post/';
  const [Job, setJob] = useState([]);

  const getData = () => {
    // this is for getAllJobPost for career page

    axios
      .get(SERVER + '/getAllJobPost', {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res, i) => {
        console.log('getAllJobPost', res.data);
        setJob(res.data.data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const CurrentOpningGetbyOne = (id) => {
    let path = `/current-opening/${id}`;
    // let path = `/${casestudy_title}/${id}`;
    navigate(path);
  };
  return (
    <div>
      <div className="mx-auto w-full py-16 px-2">
        <div className="max-w-[1240px] mx-auto">
          <p className="font-heading text-3xl text-center ">Open Positions</p>
          <div className="block w-40  rounded-md h-[8px] bg-black justify-center m-auto mt-3">
            <span className="animate-waving-hand block w-12  rounded-md h-[8px] bg-Orange justify-center m-auto mt-3 "></span>{' '}
          </div>
          {/* <div className="block w-40 h-1 bg-black justify-center m-auto mt-3">
            <div className="block w-20 h-1 bg-Orange justify-center m-auto mt-3"></div>
          </div> */}
          {/* Card Content Section */}
          <div className="flex justify-center">
            <div className="flex flex-wrap md:flex-nowrap mt-10   gap-10">
              {Job ? (
                Job.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="mx-2 w-[100%]"
                      onClick={() => CurrentOpningGetbyOne(item.jobpost_id)}
                    >
                      <a
                        className=" rounded-md block py-4 px-6 max-w-sm  bg-white
                     
                     shadow-xl cursor-pointer h-full mt-5"
                      >
                        <h5
                          className="mb-2 text-xl font-heading tracking-tight text-Orange
              uppercase text-center"
                          // key={index}
                        >
                          {item.jobposition}
                        </h5>
                        <hr></hr>
                        <p className="font-content text-Textblue text-justify mt-5 mb-4">
                          {/* images */}
                          <div className="h-30 w-70">
                            {/* \object-scale-down */}
                            <img
                              className="h-28 w-full "
                              src={IMG + `${item.job_icon.substr(18)}`}
                              alt="img"
                            />
                          </div>

                          {/* Content */}
                          <div className=" my-2 justify-center items-center ">
                            <div className="flex items-center gap-3.5">
                              <div className=" md:mt-1">
                                <img
                                  className="card-icon h-7 w-7"
                                  src={location}
                                  alt="Placeholder"
                                />
                              </div>
                              <div className="text-sm font-bold">
                                {item.joblocation}
                                {/* indore */}
                                {/* {item.jobexperience}  */}
                              </div>
                            </div>

                            <div className="flex items-center gap-3.5">
                              <div className="md:mt-1">
                                <img
                                  className="card-icon h-7 w-7"
                                  src={experience}
                                  alt="Placeholder"
                                />
                              </div>
                              <div className="text-sm  font-bold ">
                                Experience {item.jobexperience} years
                              </div>
                            </div>
                            <div className="flex items-center gap-2.5">
                              <div className="md:mt-1">
                                <img
                                  className="card-icon h-7 w-7"
                                  src={fulltime}
                                  alt="Placeholder"
                                />
                              </div>
                              <div className="font-bold text-sm">
                                {item.jobemploymenttype}
                              </div>
                            </div>
                            <div className="flex items-center gap-3.5">
                              <div className="md:mt-1">
                                <img
                                  className="card-icon h-7 w-7"
                                  src={rupes}
                                  alt="Placeholder"
                                />
                              </div>
                              <div className=" font-bold text-sm">
                                Salary {item.salaryscale} /Months
                              </div>
                            </div>
                            {/* <div className="flex gap-3.5">
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
                          </div> */}
                          </div>
                        </p>

                        <div className="flex  ">
                          <button
                            className="py-2 px-6 text-sm font-heading 
                          hover:bg-Darkblue hover:text-white
                          text-Darkblue rounded-xl border-Darkblue border-2
              text-center
              //  text-Primary rounded-xl border border-Primary "
                            // onClick={() => {
                            //   ModalPotion();
                            // }}
                          >
                            More
                          </button>
                        </div>
                      </a>
                    </div>
                  );
                })
              ) : (
                <h2 className="font-heading md:text-2xl text-lg">
                  No Open Positions
                </h2>
              )}
            </div>
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
                  <h2 className="font-heading text-xl p-2">
                    Healthy Work Environment
                  </h2>
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
                  <h2 className="font-heading text-xl p-2 w-96">
                    Performance Linked Incentives and Reward Programs
                  </h2>
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
                  <h2 className="font-heading text-xl p-2 w-96">
                    Training and Development Sessions
                  </h2>
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
                  <h2 className="font-heading text-xl  p-2">Team Activities</h2>
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
                  <h2 className="font-heading text-xl p-2">
                    Maternity and Paternity Leaves
                  </h2>
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
                  <h2 className="font-heading text-xl p-2">
                    Work/Life Balance
                  </h2>
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
      <ApplyForjob />
    </div>
  );
};

export default CurrentOpeningBody;
