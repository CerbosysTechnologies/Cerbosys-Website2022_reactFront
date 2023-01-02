import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMAGE_SERVER } from '../../../../ServerUrls';
import exp from '../../../../assets/Careerpage/ic_work_24px.svg';
import Rupees from '../../../../assets/Careerpage/Rupees.svg';
import hands from '../../../../assets/Careerpage/hands.svg';
import place from '../../../../assets/Careerpage/ic_place_24px.svg';
import description from '../../../../assets/Careerpage/ic_description_24px.svg';
import ApplyForjob from './ApplyForjob';
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
        </div>
        {/* Content Section Ends */}
      </div>

      <div className="flex flex-wrap   justify-evenly md:px-0 px-5">
        <div className="md:w-[600px] justify-center flex">
          <img
            src={IMG + job_icon}
            alt=""
            className="md:h-[400px] md:w-[400px]  object-cover "
          />
        </div>
        <div className="md:w-[600px]">
          <ul>
            <li className="text-center font-heading md:my-5 my-2 md:text-3xl text-xl">
              {jobPost}
            </li>
            <li>
              <div className="flex gap-3.5">
                <div className="md:mt-1">
                  <img
                    className="card-icon h-5 w-5"
                    src={place}
                    alt="Placeholder"
                  />
                </div>
                <div className="uppercase font-bold">{Location}</div>
              </div>
            </li>
            <li>
              <div className="flex gap-3.5">
                <div className=" md:mt-1">
                  <img
                    className="card-icon h-5 w-5"
                    src={exp}
                    alt="Placeholder"
                  />
                </div>
                <div className="uppercase font-bold">
                  Exp. min {Exprence} years
                </div>
              </div>
            </li>
            <li>
              <div className="flex gap-2.5">
                <div className="md:mt-1">
                  <img
                    className="card-icon h-5 w-5"
                    src={hands}
                    alt="Placeholder"
                  />
                </div>
                <div className="uppercase font-bold">{Type}</div>
              </div>
            </li>
            <li>
              <div className="flex gap-3.5">
                <div className="md:mt-1">
                  <img
                    className="card-icon h-5 w-5"
                    src={Rupees}
                    alt="Placeholder"
                  />
                </div>
                <div className=" uppercase font-bold ">
                  Salary {Salry} /Month
                </div>
              </div>
            </li>
            <br />
            <li className="text-justify ">{JobDesc}</li>
            <li>
              <div className="flex items-center justify-center md:my-10 my-5">
                <button
                  className="py-2 px-4 text-sm font-heading 
              text-center text-Primary rounded-3xl border border-Primary "
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
      </div>
      <ApplyForjob />
    </div>
  );
}

export default CurrentOpningGetbyOne;
