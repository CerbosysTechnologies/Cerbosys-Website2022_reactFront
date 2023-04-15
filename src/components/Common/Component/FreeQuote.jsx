import React, { useState, useEffect } from 'react';
import { SERVER } from '../../../ServerUrls';
import axios from 'axios';
import { AiOutlineClose } from 'react-icons/ai';
import imagepopup from '../../../assets/contactus/Getintuch.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Thankumodal from './Thankyou/Thankumodal';
const FreeQuote = () => {


  const toggleModal = () => {
    document.getElementById('modal').style.display = 'block';
  };
  const modalclose = () => {
    document.getElementById('modal').style.display = 'none';
  };
  //hooks
  const [username, setUsername] = useState('');
  const [errorsname, setErrorsName] = useState('');
  const [errorsNa, setErrorsNa] = useState('');
  const [email, setEmail] = useState('');


  const [contactNumber, setContactNumber] = useState('');
  const [errorscon, setErrorsCon] = useState(false);
  const [errorscontact, setErrorsContact] = useState('');
  const [serviceId, setServiceId] = useState('');



  const [message, setMessage] = useState('');
  const [serviceitems, setServiceItems] = React.useState([]);
 

  const handlerChange = (event) => {
    
    setServiceId(event.target.value);
    
  };

  const getAllServices = () => {
    axios
      .get(SERVER + '/getAllServices', {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        console.log('Get All Services->', res.data.data);
        setServiceItems(res.data.data);
      });
  };

  useEffect(() => {
    getAllServices();
  }, []);
  // Form Validation
  const onchangeFullName = (e) => {
    const username = e.target.value.replace(/[^a-z]/gi, ' ');
    setUsername(username);
    if (username.length <= 5) {
      setErrorsName('Enter Name');
      setErrorsNa(true);
      return username;
    } else {
      setErrorsName(false);
    }
  };

  const onchangeContact = (e) => {
    const contactNumber = e.target.value.replace(/([^0-9])+/i, '');
    setContactNumber(contactNumber);
    // (contact.length < 10 || contact.length > 10)
    if (contactNumber.length < 10) {
      setErrorsContact('Enter valid Contact');
      setErrorsCon(true);
    } else {
      setErrorsCon(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const insertData = {
      fullname: username,
      email: email,
      contact_number: contactNumber,
      myservice_id: serviceId,
      message: message,
      obtained_from: 'Quote',
    };
    console.log('befor Quote', insertData);
    axios
      .post(SERVER + '/insertQuoteEnquiry', insertData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        console.log('Insert Enquiry Res', res);
        console.log('after Quote api', res.data);
        document.getElementById('Thankyou').style.display = 'block';
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      })
      .catch((err) => {
        console.log('not post', err);
        toast.error('something wrong');
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      });

 
  };

  return (
    <>
      <div
        className="fixed z-20 top-1/2 right-[-4.55rem] bg-Green
  p-1 px-2 justify-end items-end rotate-90 rounded-bl-3xl rounded-br-3xl text-white"
      >
        <span
          className="uppercase font-heading text-base cursor-pointer "
          onClick={() => {
            toggleModal();
          }}
        >
          Get a Free quote
        </span>
      </div>

      <div
        className="fixed z-10 overflow-y-auto top-0 w-full left-0 hidden "
        id="modal"
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
             
            
              rounded-lg text-left shadow-xl transform transition-all md:w-10/12 md:mt-40 mt-28"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            {/* md:h-1/2 */}
            <div className="grid md:grid-cols-2 md:mb-4 md:mt-10 mt-5 ">
              <div className="mx-10 hidden md:block">
                <img src={imagepopup} alt="" className="h-full w-screen" />
              </div>

              <div className="bg-white md:mx-20 mx-10 md:mb-20  2xl:mb-10 md:h-[400px]   md:overflow-scroll">
                <div className="flex justify-between">
                  <div className="text-3xl">Get in touch</div>
                  <div>
                    <AiOutlineClose
                      className="text-3xl"
                      onClick={() => modalclose()}
                    />
                  </div>
                </div>
                <div className="bg-white md:px-1 items-center justify-center text-center">
                  <form onSubmit={(e) => handleSubmit(e)}>
                    {/* Name Div */}
                    <div className="mb-6 md:w-full group">
                      <input
                        type="text"
                        name="username"
                        id="username"
                        className="block mt-5 py-2.5 px-0 w-full font-heading text-sm text-gray-900 bg-transparent border-0 border-b-2 
        border-gray-300 appearance-none  dark:border-gray-400 
        focus:outline-none focus:ring-0 peer"
                        placeholder="Name"
                        required
                        value={username}
                        onChange={onchangeFullName}
                        // onChange={(e) => setUsername(e.target.value)}
                        // value={username}
                      />
                      {errorsNa && (
                        <div className="text-left text-red-500">
                          {errorsname}
                        </div>
                      )}
                    </div>
                    {/* Name Div Ends */}

                    {/* Email Div */}
                    <div className="mb-6 md:w-full group">
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
                    <div className=" mb-6 md:w-full group">
                      <input
                        type="tel"
                        name="contact_number"
                        id="contact_number"
                        className="block py-2.5 px-0 w-full font-heading text-sm text-gray-900 bg-transparent 
              border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-400 
        focus:outline-none focus:ring-0 peer"
                        placeholder="Contact Number"
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
                    {/* Contact Number Div Ends*/}

                    {/* Selection Div */}
                    <div className=" mb-3 w-full group">
                      <select
                        className="block py-2.5 px-0 w-full font-heading text-sm text-gray-900 bg-transparent 
                        border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-400 
                        focus:outline-none focus:ring-0 peer dropdown text-gray-400 font-heading  text-sm flex flex-wrap
                        border-b-2  px-2 py-2  w-full"
                        onChange={(e) => {
                          handlerChange(e);
                          // hadalChnageID();
                        }}
                      >
                         <option>Select Enquiry For  </option>

                        {serviceitems ? (
                          serviceitems.map((item) => (
                            <option
                              key={item.service_name}
                              value={item.myservices_id}
                            >
                              {item.service_name}
                            </option>
                          ))
                        ) : (
                          <>
                            <option value="">No Service</option>
                            <p>no service</p>
                          </>
                        )}
                      </select>
                    </div>
                    {/* Selection Div Ends*/}

                    {/* Message Div */}
                    <div className=" mb-6 md:w-full group">
                      <input
                        type="text"
                        name="message"
                        id="message"
                        className="block mt-5 py-2.5 px-0 w-full font-heading text-sm text-gray-900 bg-transparent border-0 border-b-2 
        border-gray-300 appearance-none  dark:border-gray-400 
        focus:outline-none focus:ring-0 peer"
                        placeholder="Message"
                        required
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                      />
                    </div>
                    {/* Message Div Ends */}

                    <input
                      className="mt-6 mb-6 bg-Primary text-white font-heading py-2 px-4 rounded "
                      type="submit"
                      value="Submit"
                      disabled={
                        username === '' || contactNumber === '' ? true : false
                      }
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Thankumodal />

        <ToastContainer />
      </div>
    </>
  );
};

export default FreeQuote;
