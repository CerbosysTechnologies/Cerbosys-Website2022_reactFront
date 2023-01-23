import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMAGE_SERVER } from '../../../../ServerUrls';
import experience from '../../../../assets/Careerpage/experience.png';
import location from '../../../../assets/Careerpage/location.png';
import rupes from '../../../../assets/Careerpage/rupes.png';
import fulltime from '../../../../assets/Careerpage/fulltime.png';
import description from '../../../../assets/Careerpage/ic_description_24px.svg';
import ApplyForjob from './ApplyForjob';
import parser from 'html-react-parser';

function CurrentOpningGetbyOne() {
  const ModalPotion = () => {
    document.getElementById('ModalPotion').style.display = 'block';
  };
  const IMG = IMAGE_SERVER + '/job_post/';
  const { id } = useParams();
  console.log(id);
  const [jobPost, setjobPost] = useState('');
  const [Location, setLocation] = useState('');
  const [Exprence, setExprence] = useState('');
  const [Type, setType] = useState('');
  const [Salry, setSalry] = useState('');
  const [JobDesc, setJobDesc] = useState('');
  const [job_icon, setjob_icon] = useState('');

  useEffect(() => {
    axios
      .get(
        `https://cerbosys.in:3700/cerbosys/getJobPostById?jobpost_id=${id}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => {
        console.log(res.data.data);
        const i = res?.data?.data.length - 1;
        setjobPost(res?.data?.data[i].jobposition);
        setLocation(res?.data?.data[i].joblocation);
        setExprence(res?.data?.data[i].jobexperience);
        setType(res?.data?.data[i].jobemploymenttype);
        setSalry(res?.data?.data[i].salaryscale);
        setJobDesc(res?.data?.data[i].jobdescription);
        setjob_icon(res?.data?.data[i].job_icon.substr(18));
      });
  }, []);

  return (
    <div>
      <div className="mx-auto w-full md:h-[20rem]  h-96 py-5 px-4 bg-CurrentOpeningBackground bg-cover md:bg-top bg-center">
        {/* Content Section */}
        <div className="flex flex-col justify-center text-center items-center md:h-[30rem] h-96 mx-auto">
          <h1 className="text-white font-heading py-2 md:text-3xl text-xl mb-2">
            Current Openings
          </h1>
          <hr></hr>
        </div>
        {/* Content Section Ends */}
      </div>
      {/* md:w-[600px]  md:h-[400px] md:w-[400px] */}
      <div className="mt-4">
        <p className="font-heading text-3xl text-center "> {jobPost}</p>
        <div className="block w-40 h-1 bg-black justify-center m-auto mt-3">
          <div className="block w-20 h-1 bg-Orange justify-center m-auto mt-3"></div>
        </div>
        <div className="flex flex-wrap md:flex-nowrap mt-4 lg:flex-nowrap justify-center gap-12  mx-auto w-full px-[30px]">
          <div className="self-center py-4">
            <ul>
              {/* <li className="text-center font-heading md:my-5 my-2 md:text-3xl text-xl">
              {jobPost}
            </li> */}
              <li>
                <div className="flex items-center gap-3.5">
                  <div className="md:mt-1">
                    <img
                      className="card-icon h-7 w-7"
                      src={location}
                      alt="Placeholder"
                    />
                  </div>
                  <div className="text-xl font-bold">{Location}</div>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-3.5">
                  <div className=" md:mt-1">
                    <img
                      className="card-icon h-7 w-7"
                      src={experience}
                      alt="Placeholder"
                    />
                  </div>
                  <div className="text-xl font-bold">
                    Exp. min {Exprence} years
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2.5">
                  <div className="md:mt-1">
                    <img
                      className="card-icon h-7 w-7"
                      src={fulltime}
                      alt="Placeholder"
                    />
                  </div>
                  <div className="text-xl font-bold">{Type}</div>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-3.5">
                  <div className="md:mt-1">
                    <img
                      className="card-icon h-7 w-7"
                      src={rupes}
                      alt="Placeholder"
                    />
                  </div>
                  <div className="text-xl  font-bold ">
                    Salary {Salry} /Month
                  </div>
                </div>
              </li>
              <br />
              {/* <li className="text-justify ">{parser(JobDesc)}</li> */}
              <li>
                <div
                  className="flex "
                  // md:my-10 my-5
                >
                  <button
                    className="py-2 px-6 text-sm font-heading hover:bg-Darkblue hover:text-white
              text-center text-Darkblue rounded-xl border-Darkblue border-2"
                    onClick={() => {
                      ModalPotion();
                    }}
                  >
                    Apply Now
                  </button>
                </div>
              </li>
            </ul>
          </div>
          <div className="justify-center flex md:p-5 p-0 py-6">
            <img
              src={IMG + job_icon}
              alt="img"
              className="w-80 object-cover "
            />
          </div>
        </div>
      </div>
      <ApplyForjob />
    </div>
  );
}

export default CurrentOpningGetbyOne;
