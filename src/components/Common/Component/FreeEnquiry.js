import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import imagepopup from "../../../assets/contactus/Getintuch.png";
import { SERVER } from "../../../ServerUrls";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Emailthankyou from "./Thankyou/Emailthankyou";
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
const FreeEnquiry = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneChange = (value) => {
    setPhoneNumber(value);
  }
  console.log(phoneNumber);
  const [username, setUsername] = useState("");
  const [errorsname, setErrorsName] = useState("");
  const [errorsNa, setErrorsNa] = useState("");
  const [email, setEmail] = useState("");

  const [contactNumber, setContactNumber] = useState("");
  const [errorscon, setErrorsCon] = useState(false);
  const [errorscontact, setErrorsContact] = useState("");
  const [serviceId, setServiceId] = useState("");

  const [message, setMessage] = useState("");
  const [serviceitems, setServiceItems] = React.useState([]);

  const handlerChange = (event) => {
    setServiceId(event.target.value);
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
      contact_number: phoneNumber,
      myservice_id: serviceId,
      message: message,
      obtained_from: "Email",
    };
    console.log("befor Quote", insertData);
    axios
      .post(SERVER + "/insertQuoteEnquiry", insertData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log("Insert Enquiry Res", res);
        console.log("after Quote api", res.data);
        toast.success("Thank you we will get back to you shortly");
        document.getElementById("Thankyouemail").style.display = "block";
        setTimeout(() => {
          window.location.reload();
        }, 5000);
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
    <div>
      <Helmet>
        <title>Enquiry- Get free Enquiry | cerbosys</title>
        <meta name="keywords" content="" />
        <meta name="description" content="" />
      </Helmet>

      <div className="mx-auto w-full md:h-[20rem]  h-96 py-12 px-4 bg-CurrentOpeningBackground bg-cover md:bg-top bg-center">
        {/* Content Section */}
        <div className="flex flex-col justify-center text-center items-center md:h-[20rem] h-96 mx-auto">
          <h1 className="text-white font-heading py-2 md:text-3xl text-xl mb-2">
            Book a free Consultation
          </h1>

          <p className="text-center text-white font-subheading   md:text-lg text-xs md:w-[980px] max-w-fit">
          "Book a free consultation and gain valuable insights from industry experts to help you make informed decisions and achieve your goals."
          </p>
        </div>
        {/* Content Section Ends */}
      </div>

      <div className="grid md:grid-cols-2 md:mb-4 md:mt-10 mt-5  ">
        <div className="mx-10 hidden md:block">
          <img src={imagepopup}  alt="Mobile App Development Services" className="h-full w-screen" />
        </div>
        <form onSubmit={(e) => handleSubmit(e)} className="mx-10 mx-auto">
          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={username}
              onChange={onchangeFullName}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Your name"
              required
            />
            {errorsNa && (
              <div className="text-left text-red-500">{errorsname}</div>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Contact Number</label>
            {/* <input
              type="tel"
              name="contactNumber"
              value={contactNumber}
              onChange={onchangeContact}
              maxLength="10"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Your contact number"
              required
            /> */}
             <PhoneInput
        country={'in'} // Set the default country
        name="contactNumber"
              // value={contactNumber}
              // onChange={onchangeContact}
              value={phoneNumber}
        onChange={handlePhoneChange}
              maxLength="10"
              containerClass="w-full "
              inputStyle={{
          width: '100%',
          paddingleft: '48px',
          border: '1px solid #ccc',
          borderRadius: '0.25rem',
          outline: 'none',
          boxShadow: '0 0 0 2px rgba(66, 153, 225, 0.2)', // example focus style
        }}
        inputClass="w-full h-20 p-2 border border-gray-300 rounded-md"
              // className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Your contact number"
              required
        />
            {errorscon && (
              <div className="text-left text-red-500">{errorscontact}</div>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Enquiry Type</label>
            <select
              name="enquiryType"
              onChange={(e) => {
                handlerChange(e);
                // hadalChnageID();
              }}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            >
              <option>Select Enquiry For </option>

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
          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Message</label>
            <textarea
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Your message"
              rows="4"
              required
            />
          </div>
          <div className="flex justify-center justify-items-center">
            <input
              className="mt-6 mb-6 bg-Primary  text-white font-heading py-2 px-4 rounded "
              type="submit"
              value="Submit"
              disabled={username === "" || phoneNumber === "" ? true : false}
            />
          </div>
        </form>
        <Emailthankyou />

      <ToastContainer />
      </div>

      {/* this is thankyou popup  */}

    
    </div>
    
  );
};

export default FreeEnquiry;
