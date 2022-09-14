import React, { useState, useEffect } from "react";
import { SERVER } from "../../../ServerUrls";
import axios from "axios";
import MobileForm from "../../InnerPages/Services/Mobile/MobileForm";

const ServicesForm = (props) => {
  //hooks
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  console.log("contactNumber", contactNumber);
  const [serviceId, setServiceId] = useState("");
  console.log("serviceId", serviceId);
  const [hearaboutus, setHearaboutus] = useState("");
  const [Heard, setHeard] = useState("");
  const [message, setMessage] = useState("");
  const [serviceitems, setServiceItems] = React.useState([]);
  const [myservicesid, setmyservicesid] = useState([]);
  // console.log(myservicesid);
  const a = myservicesid.map((val) => {
    var b = val.myservices_id;
    // console.log(b);
  });

  //Image
  const [techimg, setTechImg] = useState("");

  const [showImageSec, setShowImageSection] = useState(true);

  const insertEnquiry = () => {};

  const handlerChange = (event) => {
    props.onChangeSelected(event.target.value);
    // setServiceId(event.target.);

    // hadalChnageID();
  };
  // const hadalChnageID = (item) => {
  //   console.log(item);
  //   setServiceId(item.target.myservices_id);
  //   // console.log(serviceId);
  // };

  const getAllServices = () => {
    axios
      .get(SERVER + "/getAllServices", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log("Get All Services->", res.data.data);
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
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const insertData = {
      username: username,
      email: email,
      subject: subject,
      contact_number: contactNumber,
      myservice_id: serviceId,
      hearabout_us: Heard,
      message: message,
    };
    console.log("befor", insertData);
    axios
      .post(SERVER + "/insertEnquiry", insertData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log("Insert Enquiry Res", res);
        console.log("after", insertData);
      });
  };

  const addHearAboutUs = (e) => {
    //let newTask = {content: e, completed: false};
    // const hearaboutus = e.target.value;
    // setHearaboutus({ ...hearaboutus });
    setHearaboutus([...hearaboutus, e.target.value]);
    // setHearaboutus(...hearaboutus, [e.target.value]);
    setHeard([...hearaboutus]);
    console.log(...hearaboutus);
    // let hear = [];
    // hear.push(e);
    // console.log(hear);
    // let uniqueNames;
    // if(hear.length >0){
    //   uniqueNames = (...new Set(hear));
    // }
    // console.log("UN", uniqueNames);
    // setHearaboutus(prevTask => {
    //   return ([...prevTask, uniqueNames]);
    // });
  };

  return (
    <div>
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
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
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
              onChange={(e) => setContactNumber(e.target.value)}
              value={contactNumber}
            />
          </div>
          {/* Contact Number Div Ends*/}

          {/* Selection Div */}
          <div className=" mb-3 w-full group">
            <select
              className="dropdown text-gray-400 font-heading  text-sm flex flex-wrap
                    border-2 rounded-lg px-2 py-2 border-gray-400"
              onChange={(e) => {
                handlerChange(e);
              }}
            >
              {serviceitems.map((item) => (
                <option
                  key={item.myservices_id}
                  id={item.myservices_id}
                  value={item.service_image}
                  // onChange={(item) => {
                  //   hadalChnageID(item);
                  //   // setServiceId(item.target.myservices_id);
                  //   console.log(item);
                  // }}
                >
                  {item.service_name}
                </option>
              ))}
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
                id="checkbox-1"
                type="checkbox"
                // value={position}
                // name="Google"
                onChange={addHearAboutUs}
                // onChange={(e) => addHearAboutUs(e.target.value)}
                value="Google"
                className="w-4 h-4 text-gray-400 bg-gray-100 rounded border-gray-300 "
              />
              <label
                htmlFor="checkbox-Google"
                className="ml-2 text-sm font-heading text-gray-600 
                      dark:text-gray-500"
              >
                Google
              </label>

              <input
                id="checkbox-LinkdIn"
                type="checkbox"
                // onChange={(e) => addHearAboutUs(e.target.value)}
                onChange={addHearAboutUs}
                // name="LinkedIn"
                value="LinkedIn"
                className="ml-4 w-4 h-4 text-gray-400 bg-gray-100 rounded border-gray-300 "
              />
              <label
                htmlFor="checkbox-Google"
                className="ml-2 text-sm font-heading text-gray-600 
                      dark:text-gray-500"
              >
                LinkedIn
              </label>

              <input
                id="checkbox-Facebook"
                type="checkbox"
                // name="Facebook"
                onChange={addHearAboutUs}
                // onChange={(e) => addHearAboutUs(e.target.value)}
                value="Facebook"
                className="ml-5 w-4 h-4 text-gray-400 bg-gray-100 rounded border-gray-300 "
              />
              <label
                htmlFor="checkbox-Facebook"
                className="ml-2 text-sm font-heading text-gray-600 
                      dark:text-gray-500"
              >
                Facebook
              </label>

              {/* <input
              id="checkbox-Instagram"
              type="checkbox"
              value=""
              className="ml-4 w-4 h-4 text-gray-400 bg-gray-100 rounded border-gray-300 "
            />
            <label
              htmlFor ="checkbox-Instagram"
              className="ml-2 text-sm font-heading text-gray-600 
                      dark:text-gray-500"
            >
              Instagram
            </label> */}
            </div>

            <div className="flex mb-4">
              <input
                id="checkbox-Instagram"
                type="checkbox"
                value=""
                className=" w-4 h-4 text-gray-400 bg-gray-100 rounded border-gray-300 "
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
                type="checkbox"
                value=""
                className="ml-2 w-4 h-4 text-gray-400 bg-gray-100 rounded border-gray-300 "
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
                type="checkbox"
                value=""
                className="ml-4  w-4 h-4 text-gray-400 bg-gray-100 rounded border-gray-300 "
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
          />
        </form>
      </div>
    </div>
  );
};

export default ServicesForm;
