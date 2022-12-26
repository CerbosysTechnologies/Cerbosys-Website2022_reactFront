import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { AiOutlineClose } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import { saveAs } from 'file-saver';
import { SERVER } from '../../ServerUrls';
import { IMAGE_SERVER } from '../../ServerUrls';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CaseStudyByOne() {
  const IMG = IMAGE_SERVER + '/casestudyimage/';
  const { id } = useParams();
  console.log(id);
  const [pdf, setpdf] = useState('');
  const [CaseStudytitle, setCaseStudytitle] = useState('');
  const [casestudyDes, setcasestudyDes] = useState('');
  const [casestudyimage, setcasestudyimage] = useState('');
  const [email, setEmail] = useState('');
  const modalclose = () => {
    document.getElementById('Suscreption').style.display = 'none';
  };

  axios
    .get(
      `https://cerbosys.in:3700/cerbosys/getAllCaseStudyById?casestudy_id=${id}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    .then((res) => {
      console.log(res);
      const i = res?.data?.data.length - 1;

      setCaseStudytitle(res?.data?.data[i].casestudy_title);
      setcasestudyDes(res?.data?.data[i].casestudy_description);
      setcasestudyimage(res?.data?.data[i].casestudy_image);
      setpdf(res?.data?.data[i].casestudy_pdf.substr(22));
    });
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
        saveFile();
        document.getElementById('Suscreption').style.display = 'none';
        document.getElementById('ContectThankyou').style.display = 'block';
      })
      .catch((err) => {
        console.log('not post', err);
        toast.error('something wrong');
        // setTimeout(() => {
        //   window.location.reload();
        // }, 2000);
      });
  };
  const saveFile = () => {
    saveAs(
      `https://cerbosys.in:3700/casestudypdf/${pdf}`,

      `${pdf}.pdf`
    );
    // saveAs(
    //   `https://cerbosys.in:3700/casestudypdf/${casestudy_id.casestudy_pdf.substr(
    //     22
    //   )}`,
    //   // `${casestudy_id.casestudy_pdf}`
    //   `dawnlode.pdf`
    // );
  };
  return (
    <div>
      <div className="mx-auto w-full md:h-[38rem]  h-96 py-12 px-4 bg-CaseStudyHeader bg-cover md:bg-top bg-center">
        {/* Content Section */}

        <div className="flex flex-col justify-center text-center items-center md:h-[35rem] h-96 mx-auto">
          <p className="text-white font-heading py-2 md:text-3xl text-xl mb-10 ">
            {CaseStudytitle}
          </p>

          <p className="text-white font-heading py-2 md:text-xl text-xs md:mb-28 mb-24 md:w-[480px] text-justify"></p>
        </div>
        {/* Content Section Ends*/}
      </div>
      <div className="flex justify-around py-10 px-10 flex-wrap">
        <div>
          <img
            src={IMG + `${casestudyimage.substr(24)}`}
            alt="image"
            className="w-[400px] object-cover rounded-2xl"
          />
        </div>
        <div className="w-[800px]">
          <div className="font-content text-lg">{casestudyDes}</div>
          <div>
            <button
              className="py-2 px-4 text-sm font-heading 
                        hover:text-white
                        hover:bg-blue-700
              text-center text-Primary rounded-3xl border border-Primary  my-10"
            >
              <div
                onClick={(e) => {
                  handleSubmit();
                }}
              >
                {pdf}
              </div>
            </button>
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
              </div>{' '}
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
      {/* Thankyou start  */}
      <div
        className="fixed z-10 overflow-y-auto top-0 w-full left-0 hidden"
        id="ContectThankyou"
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
             justify-center
             justify-items-center
        
      
            rounded-lg text-left shadow-xl transform transition-all  "
          >
            <div className="flex items-center justify-center h-screen">
              <div className="p-1 rounded shadow-lg bg-gradient-to-r from-purple-500 via-green-500 to-blue-500">
                <div
                  className="flex flex-col items-center p-4 space-y-2 bg-white rounded-lg  "
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(156,195,255,1) 30%, rgba(138,255,116,1) 100%)',
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-green-600 w-28 h-28"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="1"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h1
                    className="md:text-4xl  font-extrabold 
                    text-green-600 font-heading text-xl"
                  >
                    Thank You !
                  </h1>
                  <p className="font-heading md:text-xl text-lg">
                    Thank you for contacting us!<br></br>Please Wait for
                    Download PDF
                  </p>
                  <a class="inline-flex items-center px-4 py-2 text-white bg-indigo-600 border border-indigo-600 rounded rounded-full hover:bg-indigo-700 focus:outline-none focus:ring">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-3 h-3 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M7 16l-4-4m0 0l4-4m-4 4h18"
                      />
                    </svg>
                    <span className="md:text-lg font-subheading text-sm">
                      <a href="/case-study">Back</a>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Thankyou End  */}
      <ToastContainer />
    </div>
  );
}

export default CaseStudyByOne;
