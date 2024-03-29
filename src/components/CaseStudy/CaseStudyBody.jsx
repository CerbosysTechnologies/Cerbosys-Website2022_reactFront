import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bounce } from 'react-reveal';
import { Flip } from 'react-reveal';
import { AiOutlineClose } from 'react-icons/ai';
import { SERVER } from '../../ServerUrls';
import { IMAGE_SERVER } from '../../ServerUrls';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { saveAs } from 'file-saver';
import { useNavigate } from 'react-router-dom';

const CaseStudyBody = () => {
  const IMG = IMAGE_SERVER + '/casestudyimage/';
  const [AllServices, setAllServices] = useState('');
  const [pdf, setpdf] = useState();
  
  var i = pdf;
  const [email, setEmail] = useState('');
  let navigate = useNavigate();
  const modalclose = () => {
    document.getElementById('Suscreption').style.display = 'none';
  };

  const saveFile = (casestudy_id, casestudy_pdf) => {
    console.log(casestudy_id, casestudy_pdf);
    saveAs(
      `https://cerbosys.in:3700/casestudypdf/${casestudy_id.casestudy_pdf.substr(
        22
      )}`,
      // `${casestudy_id.casestudy_pdf}`
      `dawnlode.pdf`
    );
  };

  const download = (casestudy_id, casestudy_pdf) => {
    axios
      .get(
        `https://cerbosys.in:3700/cerbosys/getAllCaseStudyById?casestudy_id=${casestudy_id}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => {
        const i = res?.data?.data.length - 1;
        setpdf(res?.data?.data[i].casestudy_pdf.substr(22));
        saveFile(casestudy_id, casestudy_pdf);
      });
    document.getElementById('Suscreption').style.display = 'Block';
  };

  const getallcaseStudy = async () => {
    axios
      .get(SERVER + '/getAllCaseStudy', {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        console.log('Get All case study->', res.data.data);
        setAllServices(res.data.data);
      });
  };
  useEffect(() => {
    getallcaseStudy();
  }, []);
  // call suscreption api
  const handleSubmit = (e, id) => {
    document.getElementById('Suscreption').style.display = 'Block';
    console.log(id);
    e.preventDefault();
    const insertData = {
      subscription_email: email,
    };
    console.log('befor insertSubscription', insertData);
    axios
      .post(SERVER + '/insertSubscription', insertData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        console.log('Insert insertSubscription Res', res);
        // saveFile();
        document.getElementById('Suscreption').style.display = 'none';
      })
      .catch((err) => {
        console.log('not post', err);
        toast.error('something wrong');
      });
  };

  const CaseStudyByOne = (id) => {
    let path = `/whitepapers/${id}`;
    navigate(path);
  };
  return (
    <div>
      <div className="mx-auto w-full md:h-[50rem]  h-[30rem]   py-12 px-4 bg-CaseStudyHeader2 bg-cover md:bg-top bg-center">
        {/* Content Section */}
        <div className="flex flex-col justify-center text-left items-left md:h-[35rem] h-96 mx-auto   ">
          <h1 className="text-white font-heading py-2 md:text-3xl text-xl mb-10 mx-20 ">
            whitepapers
          </h1>
          <p className="text-white font-content mx-10 py-2 md:text-sm text-xs   md:w-[480px] w-[250px]  text-left">
            <p className="font-heading flex flex-wrap">
              Our working model is based on the following principles:
            </p>
            <ul>
              <li className="list-disc">
                We believe in working with people, not just products. We strive
                to create a collaborative and supportive culture that allows
                everyone to be their best selves
              </li>
              <li className="list-disc">
                We believe in being honest and open with our clients and
                ourselves. This means we don't hold back anything that might
                help us improve our services or the way we do business.
              </li>
              <li className="list-disc">
                We are constantly evolving our services to meet new challenges
                and opportunities that come up in the market.
              </li>
            </ul>
            As a startup, you're probably feeling pretty overwhelmed by the
            amount of work ahead of you.
            <p>
              Our process is simple: we listen to what you have to say, then we
              design & code from scratch based on your requirements
            </p>
          </p>
        </div>
        {/* Content Section Ends*/}
      </div>
      <div className="max-w-[1240px] mx-auto">
        {/* Requirement Analysis Div */}
        <div className=" [&>*:nth-child(odd)]:my-10  [&>*:nth-child(even)]:md:flex-row-reverse [&>*:nth-child(even)]:md:mr-20 [&>*:nth-child(even)]:md:  md:flex-col   ">
          {AllServices ? (
            AllServices.map((item, index) => (
              <div className="flex md:flex-row flex-col md:gap-72 md:py-5 md:px-5 justify-center items-center ">
                {/* grid md:grid-cols-2 */}
                <div className=" md:w-[400px]">
                  <Flip duration={3000} className="">
                    <div className="bg-blue-700 w-10 h-10 text-white rounded-full  my-5 text-center items-center justify-center flex">
                      {index + 1}
                    </div>
                  </Flip>
                  <Bounce left duration={3000}>
                    <img
                      src={IMG + `${item.casestudy_image.substr(24)}`}
                      alt="Process Icon 1"
                      className="md:w-[27rem] md:h-[22rem] w-[14rem] h-[14rem]"
                    />
                  </Bounce>
                </div>
                {/* grid md:grid-cols-2 mt-10 gap-1 md:px-28 px-10 justify-center */}
                <div className="md:w-[400px] md:mt-20 my-5 md:my-0 md:px-0 px-5">
                  <Bounce right duration={3000}>
                    <div className="mx-auto flex flex-col text-justify">
                      <h2 className="font-heading md:text-xl text-sm uppercase mb-4">
                        {item.casestudy_title}
                      </h2>
                      <p className="font-content md:text-lg text-sm col-span-2">
                        {item.casestudy_description.slice(0, 100)}
                        <br></br>
                      </p>
                      <br />
                      <br />
                      <div className="flex items-center justify-center">
                        <button
                          className="py-2 px-4 text-sm font-heading 
                        hover:text-white
                        hover:bg-blue-700 text-center text-Primary rounded-3xl border border-Primary "
                          onClick={() => CaseStudyByOne(item.casestudy_id)}
                        >
                          <div>Click Here Read More</div>
                        </button>
                      </div>
                    </div>
                  </Bounce>
                </div>
              </div>
            ))
          ) : (
            <p> No service </p>
          )}
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto">
        {/* <div className="row    md:mb-5 "> */}
        {/* Left said coll start */}

        <div class="max-w-[1240px] mx-auto">
          
          <div className="flex flex-wrap justify-around gap-28 py-5">
            
          </div>
        </div>
      </div>

      {/* Suscreption Popup start */}
      <div
        className="fixed z-10 overflow-y-auto top-0 w-full left-0 hidden"
        id="Suscreption"
      >
        <div className="flex items-center justify-center max-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-900 opacity-75" />
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
            &#8203;
          </span>

          {/* To open contact form */}
          <div
            className="inline-block
            md:mt-40 mt-40
            md:w-1/3 w-96 border-blue-700 border-4
            bg-white 
             justify-center
             justify-items-center
            rounded-lg text-left shadow-xl transform transition-all"
          >
            <div className="justify-between flex">
              <div className=""></div>
              <div className=" bg-blue-700">
                <AiOutlineClose
                  className="text-3xl"
                  onClick={() => modalclose()}
                />
              </div>
            </div>
            <div className="     p-5 md:p5    ">
              <div className="font-heading  md:text-2xl md:font-bold text-xl">
                Please Enter Email Address to Download The Whitepaper.
              </div>
              <form onSubmit={(e) => handleSubmit(e)}>
                {/* Email Div */}
                <div className="mb-6 pt-10 md:w-full group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block py-2.5 px-0 w-full font-heading text-sm text-gray-900 bg-transparent border-0 border-b-2 
      border-gray-300 appearance-none  dark:border-gray-400 
       focus:outline-none focus:ring-0 peer"
                    placeholder="Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                {/* Email Div Ends*/}
                <input
                  className="mt-6 mb-6 bg-Primary text-white font-heading py-2 px-4 rounded "
                  type="submit"
                  value="Submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Suscreption Popup End */}

      <ToastContainer />
    </div>
  );
};

export default CaseStudyBody;
