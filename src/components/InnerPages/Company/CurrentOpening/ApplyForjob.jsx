import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SERVER } from '../../../../ServerUrls';
import { AiOutlineClose } from 'react-icons/ai';
import vacancy from '../../../../assets/Careerpage/job800500.svg';
import { ToastContainer, toast } from 'react-toastify';
import ContectThankyou from '../../../Common/Component/Thankyou/ContectThankyou';
function ApplyForjob() {
  const modalclose = () => {
    document.getElementById('ModalPotion').style.display = 'none';
  };
  //hooks

  const [position, setPosition] = React.useState('');
  const [application, setApplication] = React.useState('');

  const [desc, setDesc] = React.useState('');
  const [jobicons, setJobIcon] = React.useState('');
  const [CoverLeter, setCoverLeter] = React.useState('');

  const [errorspos, setErrorspos] = React.useState(false);

  const [errorsdes, setErrorsdes] = React.useState(false);
  const [errorsicon, setErroricon] = React.useState(false);

  const [errorsposition, setErrorsposition] = React.useState('');

  const [errorsdesc, setErrorsdesc] = React.useState('');
  const [errorsexp, setErrorsexp] = React.useState('');
  const [errorstype, setErrorstype] = React.useState('');
  const [errorsicons, setErroricons] = React.useState('');

  // -------------
  const [username, setUsername] = useState('');
  const [errorsname, setErrorsName] = useState('');
  const [errorsNa, setErrorsNa] = useState('');
  const [email, setEmail] = useState('');

  const [contactNumber, setContactNumber] = useState('');
  const [errorscon, setErrorsCon] = useState(false);
  const [errorscontact, setErrorsContact] = useState('');
  const [serviceId, setServiceId] = useState('');

  // Job post section for tak value and  and set value in state  with validation
  const onchangeFullName = (e) => {
    const username = e.target.value.replace(/[^a-z]/gi, ' ');
    setUsername(username);
    console.log(username);
    if (username.length <= 5) {
      setErrorsName('Enter Name');
      setErrorsNa(true);
      return username;
    } else {
      setErrorsName(false);
    }
  };

  const onchangeContact = (e) => {
    // console.log("onchangeContact");
    const contactNumber = e.target.value.replace(/([^0-9])+/i, '');
    setContactNumber(contactNumber);
    console.log(contactNumber);
    // (contact.length < 10 || contact.length > 10)
    if (contactNumber.length < 10) {
      setErrorsContact('Enter valid Contact');
      setErrorsCon(true);
    } else {
      setErrorsCon(false);
    }
  };

  const onchangePosition = (e) => {
    const position = e.target.value.replace(/[^a-z]/gi, ' ');
    setPosition(position);
    console.log(position);
    if (position.length <= 3) {
      setErrorsposition('Enter Position');
      setErrorspos(true);
    } else {
      setErrorspos(false);
    }
  };
  const onchangeResume = (e) => {
    const jobicons = e.target.files[0];
    console.log('jobIcon', jobicons);
    setJobIcon(jobicons);
    if (jobicons) {
      setErroricon('provide job Resume');
      setErroricons(true);
    } else {
      setErroricon(false);
    }
  };
  const onchangeCoverLeter = (e) => {
    const CoverLeter = e.target.files[0];
    console.log('CoverLeter', CoverLeter);
    setCoverLeter(CoverLeter);
    if (CoverLeter) {
      setErroricon('provide job CoverLeter');
      setErroricons(true);
    } else {
      setErroricon(false);
    }
  };
  const onchangeDesc = (e) => {
    const desc = e.target.value;
    setDesc(desc);
    console.log(desc);

    if (desc.length < 10) {
      setErrorsdesc('Enter minimum 10 word in Description');
      setErrorsdes(true);
    } else {
      setErrorsdes(false);
    }
  };
  // post api

  const handleSubmit = (e) => {
    console.log(formdata);
    e.preventDefault();
    var formdata = new FormData();
    formdata.append('positionapplied', position);
    formdata.append('fullname', username);
    formdata.append('email', email);
    formdata.append('mobilenumber', contactNumber);
    formdata.append('resume', jobicons);
    formdata.append('coverletter', CoverLeter);
    formdata.append('resume_description', desc);
    console.log('befor ', formdata);
    fetch(SERVER + '/insertCareer', {
      method: 'post',
      body: formdata,
    })
      .then((res) =>
        res.json().then((formdata) => {
          console.log('Response', formdata);
          document.getElementById('ContectThankyou').style.display = 'block';
          setTimeout(() => {
            window.location.reload();
          }, 5000);
        })
      )
      .catch((err) => {
        console.log('not post', err);
        toast.error('something wrong');
      });
  };
  return (
    <>
      <div
        class="fixed z-10 overflow-y-auto top-0 w-full left-0 hidden"
        id="ModalPotion"
        // style={{ display: 'none' }}
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
            className="inline-block bg-white 
            2xl:mt-40
            h-[500px]
            md:h-[550px] overflow-auto
            2xl:h-[600px]
            rounded-lg text-left shadow-xl transform transition-all md:w-10/12 md:mt-40 mt-28"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="grid md:grid-cols-2 md:mb-4 md:mt-5 mt-5">
              <div className="mx-10 hidden md:block">
                <img src={vacancy} alt="" className="h-full w-screen" />
              </div>
              <div className="bg-white md:mx-20 mx-10">
                <div className="flex justify-between">
                  <div className="text-3xl">Open Positions</div>
                  <div>
                    <AiOutlineClose
                      className="text-3xl"
                      onClick={() => modalclose()}
                    />
                  </div>
                </div>
                <div className="bg-white md:px-1 items-center justify-center text-center">
                  {/* Name Div */}
                  <div className="mb-2 md:w-full group">
                    <input
                      type="text"
                      name="fullname"
                      id="username"
                      className="block mt-5 py-2.5 px-0 w-full font-heading text-sm text-gray-900 bg-transparent border-0 border-b-2 
      border-gray-300 appearance-none  dark:border-gray-400 
       focus:outline-none focus:ring-0 peer"
                      placeholder="Fullname"
                      required
                      value={username}
                      onChange={onchangeFullName}
                      // onChange={(e) => setUsername(e.target.value)}
                      // value={username}
                    />
                    {errorsNa && (
                      <div className="text-left text-red-500">{errorsname}</div>
                    )}
                  </div>
                  {/* Name Div Ends */}

                  {/* Email Div */}
                  <div className="mb-2 md:w-full group">
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

                  {/* Contact Number Div */}
                  <div className=" mb-2 md:w-full group">
                    <input
                      type="text"
                      name="mobilenumber"
                      id="contact_number"
                      className="block py-2.5 px-0 w-full font-heading text-sm text-gray-900 bg-transparent 
            border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-400 
       focus:outline-none focus:ring-0 peer"
                      placeholder="Mobile Number"
                      required
                      // onChange={(e) => setContactNumber(e.target.value)}
                      value={contactNumber}
                      onChange={onchangeContact}
                      maxLength="10"
                    />
                    {errorscon && (
                      <div className="text-left text-red-500">
                        {errorscontact}
                      </div>
                    )}
                  </div>
                  <div className="mb-2 md:w-full group">
                    <input
                      type="text"
                      name="positionapplied"
                      id="positionapplied"
                      className="block mt-5 py-2.5 px-0 w-full font-heading text-sm text-gray-900 bg-transparent border-0 border-b-2 
      border-gray-300 appearance-none  dark:border-gray-400 
       focus:outline-none focus:ring-0 peer"
                      placeholder="Position Applied"
                      required
                      value={position}
                      onChange={onchangePosition}
                    />
                    {errorspos && (
                      <div className="text-left text-red-500">
                        {errorsposition}
                      </div>
                    )}
                  </div>
                  {/*  */}
                  {/* Contact Number Div Ends*/}
                  <div className=" mb-2 md:w-full group flex ">
                    <div
                      className="block mt-5 py-2.5 px-0 w-full font-heading text-sm text-gray-900 bg-transparent border-0 border-b-2 
      border-gray-300 appearance-none  dark:border-gray-400 
       focus:outline-none focus:ring-0 peer"
                    >
                      <label htmlFor="Resume">Resume</label>

                      <input
                        type="file"
                        file={jobicons}
                        id="myFile"
                        name="resume"
                        placeholder="Resume"
                        onChange={onchangeResume}
                        required
                      />
                    </div>
                  </div>
                  <div className=" mb-2 md:w-full group flex ">
                    <div
                      className="block mt-5 py-2.5 px-0 w-full font-heading text-sm text-gray-900 bg-transparent border-0 border-b-2 
      border-gray-300 appearance-none  dark:border-gray-400 
       focus:outline-none focus:ring-0 peer"
                    >
                      <label htmlFor="Coverletter">Cover Letter</label>
                      <input
                        type="file"
                        file={CoverLeter}
                        id="myFile"
                        name="coverletter"
                        placeholder="Coverletter"
                        onChange={onchangeCoverLeter}
                      />
                    </div>
                  </div>
                  {/* Message Div */}
                  <div className=" mb-2 md:w-full group">
                    <input
                      type="text"
                      name="resume_description"
                      id="message"
                      className="block mt-5 py-2.5 px-0 w-full font-heading text-sm text-gray-900 bg-transparent border-0 border-b-2 
      border-gray-300 appearance-none  dark:border-gray-400 
       focus:outline-none focus:ring-0 peer"
                      placeholder="Resume_description"
                      required
                      // onChange={(e) => setMessage(e.target.value)}
                      // value={message}
                      value={desc}
                      onChange={onchangeDesc}
                    />
                  </div>
                  {/* Message Div Ends */}
                  <button
                    className="mt-6 mb-2 bg-Primary text-white font-heading py-2 px-4 rounded "
                    type="submit"
                    // value="Submit"
                    onClick={handleSubmit}
                    disabled={
                      username === '' || contactNumber === '' || position
                        ? true
                        : false
                    }
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContectThankyou />
      <ToastContainer />
    </>
  );
}

export default ApplyForjob;
