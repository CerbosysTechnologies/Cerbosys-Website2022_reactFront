import React, { useState, useEffect } from "react";
import { SERVER } from "../../../ServerUrls";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContectThankyou from "./Thankyou/ContectThankyou";
const Contact = () => {
  //hooks
  const [username, setUsername] = useState("");
  const [errorsname, setErrorsName] = useState("");
  const [errorsNa, setErrorsNa] = useState("");
  const [email, setEmail] = useState("");

  const [subject, setSubject] = useState('');
  const [errorsEmail_s, setErrorsEmail_s] = useState('');
  const [errorsEml, setErrorsEml] = useState(false);

  const [contactNumber, setContactNumber] = useState("");
  const [errorscon, setErrorsCon] = useState(false);
  const [errorscontact, setErrorsContact] = useState('');
  const [serviceId, setServiceId] = useState('');
  console.log(serviceId);

  const [hearaboutus, setHearaboutus] = useState('');
  const [message, setMessage] = useState('');
  const [serviceitems, setServiceItems] = useState([]);
  //Image
  const [techimg, setTechImg] = useState('');
  const [showImageSec, setShowImageSection] = useState(true);

  const handlerChange = (event) => {
    // props.onChangeSelected(event.target.value)
    setServiceId(event.target.value);
    // console.log(serviceId);
  };

  const getAllServices = () => {
    axios
      .get(SERVER + "/getAllServices", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log("Get All Services->", res.data.data);
        setServiceItems(res.data.data);
      });
  };

  useEffect(() => {
    getAllServices();
  }, []);
  // Form Validation
  const onchangeFullName = (e) => {
    const username = e.target.value.replace(/[^a-z]/gi, " ");
    setUsername(username);
    if (username.length <= 5) {
      setErrorsName("Enter Name");
      setErrorsNa(true);
      return username;
    } else {
      setErrorsName(false);
    }
  };
  const onchangeContact = (e) => {
    // console.log("onchangeContact");
    const contactNumber = e.target.value.replace(/([^0-9])+/i, "");
    setContactNumber(contactNumber);
    // (contact.length < 10 || contact.length > 10)
    if (contactNumber.length < 10) {
      setErrorsContact("Enter valid Contact");
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
      // subject: subject,
      contact_number: contactNumber,
      myservice_id: serviceId,
      message: message,
      obtained_from: "Contact",
    };
    console.log("befor", insertData);
    axios
      .post(SERVER + "/insertQuoteEnquiry", insertData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log('Insert Enquiry Res', res);
        console.log('afterrun api', res.data);
        document.getElementById('ContectThankyou').style.display = 'block';
        // setTimeout(() => {
        //   window.location.reload();
        // }, 5000);
      })
      .catch((err) => {
        console.log("not post", err);
        toast.error("something wrong");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      });
  };

  return (
    <div className="selection:bg-Green selection:text-white">
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
              <div className="text-left text-red-500">{errorscontact}</div>
            )}
          </div>
          {/* Contact Number Div Ends*/}
          {/* Selection Div */}
          <div className=" mb-3 w-full group mt-2">
            <select
              className="block py-2.5 px-0 w-full font-heading text-sm text-gray-900 bg-transparent 
              border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-400 
              focus:outline-none focus:ring-0 peer dropdown text-gray-400 font-heading  text-sm flex flex-wrap
              border-b-2   py-2  w-full"
              onChange={(e) => {
                handlerChange(e);
                // hadalChnageID();
              }}
            >
              <option> Select Contact For</option>

              {serviceitems ? (
                serviceitems.map((item) => (
                  <option key={item.service_name} value={item.myservices_id}>
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
            className="mt-6 mb-6 bg-Primary text-white font-heading py-2 px-4 rounded w-full"
            type="submit"
            value="Submit"
            disabled={username === "" || contactNumber === "" ? true : false}
          />
        </form>
      </div>
      <ContectThankyou />
      <ToastContainer />
    </div>
  );
};

export default Contact;
