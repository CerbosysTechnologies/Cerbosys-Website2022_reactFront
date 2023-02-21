import axios from 'axios';
import React, { useState } from 'react';
import { SERVER } from '../../../../ServerUrls';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Investment() {
  const [username, setUsername] = useState('');
  const [errorsname, setErrorsName] = useState('');
  const [errorsNa, setErrorsNa] = useState('');
  const [companyname, setCompanyname] = useState('');
  const [Amount, setAmount] = useState('');

  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [errorscon, setErrorsCon] = useState(false);
  const [errorscontact, setErrorsContact] = useState('');
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
    // console.log("onchangeContact");.replace(/([^0-9])+/i, '');
    const contactNumber = e.target.value;
    setContactNumber(contactNumber);
    // (contact.length < 10 || contact.length > 10)
    if (contactNumber.length < 10) {
      setErrorsContact('Enter valid Contact');
      setErrorsCon(true);
    } else {
      setErrorsCon(false);
    }
  };

  // Api colling

  const handleSubmit = (e) => {
    e.preventDefault();
    const insertData = {
      investment_enquiryname: username,
      investment_enquirycompanyname: companyname,
      investment_amount: Amount,
      contact_number: contactNumber,
      email: email,
      investment_status: 'Open',
    };
    console.log(insertData);
    axios
      .post(SERVER + '/insertInvestmentEnquiry', insertData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        console.log('Insert Invest Enquiry', res);
        console.log('Insert Invest Enquiry', res.data);
        console.log('Insert Invest Enquiry', res.data.data);

        setTimeout(() => {
          toast.success('Thank You !!');
          window.location.reload();
        }, 1000);
      })
      .catch((err) => {
        console.log('not post', err);
        toast.error('something wrong');
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      });

    // document.getElementById("modal").style.display = "none";
    // window.location.reload();
  };

  return (
    <div>
      <div className=" mx-auto w-full py-16 px-4 selection:bg-Green selection:text-white">
        <div className="max-w-[1240px] mx-auto ">
          <div className="font-heading text-justify break-all text-2xl px-10 my-5">
            Make today's investment count for tomorrow's success.
          </div>
          <div className="font-subheading text-justify text-xl px-10 my-5 break-words ">
            Let's get together and start growing your business.
          </div>
          <div className="text-justify mt-10">
            <div className="justify-center md:px-0 px-5">
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className=" text-center text-xl px-10  ">
                  My name is
                  <input
                    value={username}
                    onChange={onchangeFullName}
                    type="text"
                    placeholder="Name"
                    className=" text-blue-500 font-bold border-b-2 flex-wrap border-black text-center border-0 focus:outline-none focus:ring-0"
                  />
                  {/* {errorsNa && (
                  <div className="text-left text-red-500">{errorsname}</div>
                )} */}
                  & I am associated with a company called
                  <input
                    onChange={(e) => setCompanyname(e.target.value)}
                    value={companyname}
                    type="text "
                    placeholder="Company Name"
                    className=" text-blue-500 font-bold border-b-2 border-black text-center border-0 focus:outline-none focus:ring-0 "
                  />
                  .
                </div>
                <div className=" text-center text-xl px-10  py-10">
                  I want to invest
                  <input
                    onChange={(e) => setAmount(e.target.value)}
                    value={Amount}
                    type="number"
                    placeholder="AMOUNT"
                    className=" text-blue-500 font-bold border-b-2 border-black text-center border-0 focus:outline-none focus:ring-0"
                  />
                  in my business
                </div>
                <div className=" text-center text-xl px-10 ">
                  Here are my contact details
                  <input
                    value={contactNumber}
                    onChange={onchangeContact}
                    type="text"
                    placeholder="Number"
                    className=" text-blue-500 font-bold border-b-2 border-black text-center border-0 focus:outline-none focus:ring-0"
                  />
                  {/* {errorscon && (
                  <div className="text-left text-red-500">{errorscontact}</div>
                )} */}
                  &
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    placeholder="Email"
                    className=" text-blue-500 font-bold border-b-2 border-black text-center border-0 focus:outline-none focus:ring-0"
                  />
                  .
                </div>
                <div className="py-10 justify-center text-center">
                  <input
                    className="mt-6 mb-6 bg-Primary text-white font-heading py-2 px-4 rounded "
                    type="submit"
                    value="Get a free consultation"
                    disabled={
                      username === '' || contactNumber === '' ? true : false
                    }
                  />
                  {/* <button
                  className="bg-Primary rounded-full font-heading md:px-5 md:py-2 md:text-lg
              text-white uppercase px-3 py-1.5 text-xs mb-6"
                >
                  Get a free consultation
                </button> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Investment;
