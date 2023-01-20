import React, { useState, useEffect } from 'react';
import { SERVER } from '../../../ServerUrls';
import axios from 'axios';
import MobileForm from '../../InnerPages/Services/Mobile/MobileForm';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { propTypesMenuProps } from '@material-tailwind/react/types/components/select';
import Servicethankyou from './Thankyou/Servicethankyou';
const ServicesForm = (props) => {
  //hooks
  const [username, setUsername] = useState('');
  const [errorsname, setErrorsName] = useState('');
  const [errorsNa, setErrorsNa] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const [hearaboutus, setHearaboutus] = useState([]);

  const [getHearaboutUs, setGetHearaboutus] = useState();

  const [errorscon, setErrorsCon] = useState(false);
  const [errorscontact, setErrorsContact] = useState('');
  const [serviceId, setServiceId] = useState('');

  const [message, setMessage] = useState('');
  const [serviceitems, setServiceItems] = React.useState([]);
  const [myservicesid, setmyservicesid] = useState([]);

  const a = myservicesid.map((val) => {
    var b = val.myservices_id;
  });

  //Image
  const [techimg, setTechImg] = useState('');

  const [showImageSec, setShowImageSection] = useState(true);

  const insertEnquiry = () => {};

  const handlerChange = (event) => {
    console.log('T&D', event);
    props.onChangeSelected(event.target.value);
    //setServiceId(event.target.name);
    const index = event.target.selectedIndex;
    const el = event.target.childNodes[index];
    const option = el.getAttribute('id');

    setServiceId(option);
    console.log('Test Id:--', option);
    console.log('Value:--', event.target.value);
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
        // const i = res.data.data.length - 1;
        setServiceItems(res.data.data);
        setmyservicesid(res.data.data);
        //console.log('TechImage', techimg)
        // setServiceItems(res.data.data.map((val) =>
        // (
        //   console.log("Map Value", val),
        //   { label: val.service_name, value: val.service_name },
        //   console.log('TechImage', techimg)
        //   )));
      });
  };

  useEffect(() => {
    getAllServices();
    console.log('Use Effect Hear', hearaboutus);

    var stringData = hearaboutus.toString();

    setGetHearaboutus(stringData);
    console.log('SD', stringData);
  }, [hearaboutus]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const insertData = {
      username: username,
      email: email,
      subject: subject,
      contact_number: contactNumber,
      myservice_id: serviceId,
      hearabout_us: getHearaboutUs,
      message: message,
    };
    console.log('befor', insertData);
    axios
      .post(SERVER + '/insertEnquiry', insertData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        console.log('Insert Enquiry Res', res);
        console.log('after', insertData);
        document.getElementById('ServiceThankyou').style.display = 'block';

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

  const addHearAboutUs = (e) => {
    if (e.target.checked === true) {
      setHearaboutus([...hearaboutus, e.target.value]);
    } else if (e.target.checked === false) {
      let freshArray = hearaboutus.filter((val) => val !== e.target.value);
      setHearaboutus([...freshArray]);
    }

    console.log('Hear', hearaboutus);
  };

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

  return (
    <div>
      <div className="bg-white md:px-1 items-center justify-center text-center">
        <Servicethankyou />
        <ToastContainer />
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
              // onChange={(e) => setUsername(e.target.value)}
              onChange={onchangeFullName}
              value={username}
            />
            {errorsNa && (
              <div className="text-left text-red-500">{errorsname}</div>
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

          {/* Subject Div */}
          <div className="mb-6 md:w-full group">
            <input
              type="text"
              name="subject"
              id="subject"
              className="block py-2.5 px-0 w-full font-heading text-sm text-gray-900 bg-transparent border-0 border-b-2 
      border-gray-300 appearance-none  dark:border-gray-400 
       focus:outline-none focus:ring-0 peer"
              placeholder="Subject"
              required
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
            />
          </div>
          {/* Subject Div Ends*/}

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
              onChange={onchangeContact}
              value={contactNumber}
              maxLength="10"
            />{' '}
            {errorscon && (
              <div className="text-left text-red-500">{errorscontact}</div>
            )}
          </div>
          {/* Contact Number Div Ends*/}

          {/* Selection Div */}
          <div className=" mb-3 w-full group">
            <select
              className="dropdown text-gray-400 font-heading  text-sm flex flex-wrap w-full
                    border-2 rounded-lg px-2 py-2 border-gray-400"
              onChange={handlerChange}
            >
              <option>Please Select</option>
              {serviceitems ? (
                serviceitems.map((item) => (
                  <option
                    // key={item.myservices_id}
                    id={item.myservices_id}
                    value={item.service_image}
                    // onChange={(item) => {
                    //   hadalChnageID(item);
                    //   // setServiceId(item.target.myservices_id);
                    //   console.log(item);
                    // }}
                  >
                    {/* {item.myservices_id} */}

                    {item.service_name}
                  </option>
                ))
              ) : (
                <p> No service </p>
              )}
            </select>
          </div>
          {/* Selection Div Ends*/}

          {/* Hear About Div */}
          <div className="mb-6 md:w-full group">
            <label className="flex py-2.5 w-full font-heading text-sm text-gray-400">
              How Did You Hear About Us?
            </label>
            <div className="flex flex-wrap  mb-4">
              <input
                id="checkbox-Google"
                name="options"
                type="checkbox"
                value="Google"
                className="w-4 h-4 text-gray-400 bg-gray-100 rounded border-gray-300 "
                onChange={addHearAboutUs}
              />
              <label
                htmlFor="checkbox-Google"
                className="ml-2 text-sm font-heading text-gray-600 
                      dark:text-gray-500"
              >
                Google
              </label>

              <input
                id="checkbox-LinkedIn"
                name="options"
                type="checkbox"
                value="LinkedIn"
                className="ml-4 w-4 h-4 text-gray-400 bg-gray-100 rounded border-gray-300 "
                onChange={addHearAboutUs}
              />
              <label
                htmlFor="checkbox-LinkedIn"
                className="ml-2 text-sm font-heading text-gray-600 
                      dark:text-gray-500"
              >
                LinkedIn
              </label>

              <input
                id="checkbox-Facebook"
                name="options"
                type="checkbox"
                value="Facebook"
                className="ml-5 w-4 h-4 text-gray-400 bg-gray-100 rounded border-gray-300 "
                onChange={addHearAboutUs}
              />
              <label
                htmlFor="checkbox-Facebook"
                className="ml-2 text-sm font-heading text-gray-600 
                      dark:text-gray-500"
              >
                Facebook
              </label>
            </div>

            <div className="flex flex-wrap mb-4">
              <input
                id="checkbox-Instagram"
                name="options"
                type="checkbox"
                value="Instagram"
                className=" w-4 h-4 text-gray-400 bg-gray-100 rounded border-gray-300 "
                onChange={addHearAboutUs}
              />
              <label
                htmlFor="checkbox-Instagram"
                className="ml-2 text-sm font-heading text-gray-600 
                      dark:text-gray-500 mr-2 "
              >
                Instagram
              </label>
              <input
                id="checkbox-FriendSuggested"
                name="options"
                type="checkbox"
                value="Friend Suggested"
                className="ml-2 w-4 h-4 text-gray-400 bg-gray-100 rounded border-gray-300 "
                onChange={addHearAboutUs}
              />
              <label
                htmlFor="checkbox-FriendSuggested"
                className="md:ml-2 text-sm font-heading text-gray-600 
                      dark:text-gray-500"
              >
                Friend Suggested
              </label>

              <input
                id="checkbox-Others"
                name="options"
                type="checkbox"
                value="Others"
                className="ml-4  w-4 h-4 text-gray-400 bg-gray-100 rounded border-gray-300 "
                onChange={addHearAboutUs}
              />
              <label
                htmlFor="checkbox-Others"
                className="ml-2 text-sm font-heading text-gray-600 
                      dark:text-gray-500"
              >
                Others
              </label>
            </div>
          </div>
          {/* Hear About Div Ends*/}

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
            className="mt-6 mb-6 bg-Primary text-white font-heading py-2 px-4 rounded"
            type="submit"
            value="Submit"
            disabled={username === '' || contactNumber === '' ? true : false}
          />
        </form>
      </div>
    </div>
  );
};

export default ServicesForm;
