import React, { useState } from "react";
import ecom from "../../assets/Solution/ecom.jpg";
import School from "../../assets/Solution/School.png";
import { GrLinkNext } from "react-icons/gr";
import { Link } from "react-router-dom";
import { Component } from "react";
import Slider from "react-slick";
import s1 from "../../assets/Solution/s1.png";
import s2 from "../../assets/Solution/s2.png";
import s3 from "../../assets/Solution/s3.png";
import s4 from "../../assets/Solution/s4.png";
import s6 from "../../assets/Solution/s6.png";
import s5 from "../../assets/Solution/s5.png";
import s7 from "../../assets/Solution/s7.png";
import p1 from "../../assets/Solution/p1.png";
import p2 from "../../assets/Solution/p2.png";
import p3 from "../../assets/Solution/p3.png";
import p4 from "../../assets/Solution/p4.png";
import inf from "../../assets/Solution/inf.png";
import pep from "../../assets/Solution/pep.png";
import forn from "../../assets/Solution/forn.png";
import acd from "../../assets/Solution/acd.png";
import fin from "../../assets/Solution/fin.png";
import mob from "../../assets/Solution/mob.png";
import mob1 from "../../assets/Solution/mob1.png";
import u11 from "../../assets/Solution/u11.png";
import u12 from "../../assets/Solution/u12.png";
import u1 from "../../assets/Solution/u1.png";
import real1 from "../../assets/Solution/real1.png";
import mobapp from "../../assets/Solution/mobapp.png";

function SolutionBody() {
  const [chang1, setChang1] = useState();
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="md:w-[1280px] mx-auto">
        <div className="mt-10">
          <p className="font-heading text-xl text-center md:text-4xl md:pt-10">
            VEDANTA ERP | Introduction
          </p>
          <p className="mt-2">
            <span>VEDANTA ERP</span> - Institution Automation System is a
            versatile, proprietary and integrated system for an Institution
            encompassing the end-to-end academic and administrative processes
            across the Institution. Our product offers a comprehensive solution
            that covers every aspect of the functioning of an Institution – from
            academic activities to administrative functions – all on a single
            window platform. With flexible reporting capabilities, sound
            educational analytics and protected access.
          </p>
        </div>
        {/* featur section start */}

        <div>
          <p className="font-heading text-xl text-center md:text-4xl md:pt-10">
            Features of VEDANTA ERP
          </p>
          <p className="text-center mt-2">
            Our idea is to develop a future ready product which make people more
            efficient with the use of technnology
          </p>
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-12 mt-10">
            <div className=" bg-white shadow-md rounded-md p-3">
              <img src={forn} alt="" className=" rounded-lg w-full " />

              <div className="px-7">
                <p className="font-heading text-lg  md:text-2xl md:pt-5">
                  Front Office
                </p>

                <ul className="list-disc text-start px-4">
                  <li className="text-[15px]">Visitor Management</li>
                  <li className="text-[15px]">Enquiry & Appointment</li>
                  <li className="text-[15px]">Automated Attendance</li>
                  <li className="text-[15px]">Daily Activity Reporting</li>
                  <li className="text-[15px]">Student/Staff Birthday Alert</li>
                  <li className="text-[15px]">
                    Role Based/Access User Accounts
                  </li>
                  <li className="text-[15px]">Student/Parents login</li>
                  <li className="text-[15px]">User Roles & Permissions</li>
                </ul>
              </div>
            </div>
            <div className=" bg-white shadow-md rounded-md p-3">
              <img src={pep} alt="" className="w-full rounded-lg  " />

              <div className="px-7">
                <p className="font-heading text-lg  md:text-2xl md:pt-5">
                  People
                </p>
                <ul className="list-disc text-start px-4">
                  <li className="text-[15px]">HR Management</li>
                  <li className="text-[15px]">Student Management</li>
                  <li className="text-[15px]">Vendor Management</li>
                  <li className="text-[15px]">Registration Workflows</li>
                  <li className="text-[15px]">Admission Management</li>
                  <li className="text-[15px]">Address and Contacts</li>
                  <li className="text-[15px]">Staff/Student Attendance</li>
                  <li className="text-[15px]">Integrated SMS Messaging</li>
                  <li className="text-[15px]">Leave Approvals Management</li>
                  <li className="text-[15px]">Auto Complete Student Search</li>
                  <li className="text-[15px]">Timeline/Profile</li>
                  <li className="text-[15px]">Documentation Checklist</li>
                </ul>
              </div>
            </div>
            <div className=" bg-white shadow-md rounded-md p-3">
              <img src={acd} alt="" className=" rounded-lg w-full" />

              <div className="px-7">
                <p className="font-heading text-lg  md:text-2xl md:pt-5">
                  Academics
                </p>
                <ul className="list-disc text-start px-4">
                  <li className="text-[15px]">Academics Session Management</li>
                  <li className="text-[15px]">Standard Section Management</li>
                  <li className="text-[15px]">Books/Subject/Classes</li>
                  <li className="text-[15px]">Interactive Time Table</li>
                  <li className="text-[15px]">Examination & Report Card</li>
                  <li className="text-[15px]">Library Management</li>
                  <li className="text-[15px]">
                    Examination / Curriculum Planner
                  </li>
                  <li className="text-[15px]">Performance Tracker</li>
                  <li className="text-[15px]">Students Home/Assignments</li>
                  <li className="text-[15px]">Examination Management System</li>
                  <li className="text-[15px]">Report Card Generation</li>
                  <li className="text-[15px]">Digital Video Report Card</li>
                </ul>
              </div>
            </div>
          </div>
          {/* second sectoon */}

          <div className="grid sm:grid-cols-3 grid-cols-1 gap-12 mt-10">
            <div className=" bg-white shadow-md rounded-md p-3">
              <img src={fin} alt="" className="w-full rounded-lg  " />

              <div className="px-7">
                <p className="font-heading text-lg  md:text-2xl md:pt-5">
                  Finance
                </p>

                <ul className="list-disc text-start px-4">
                  <li className="text-[15px]">Fee Management</li>
                  <li className="text-[15px]">Discount Category</li>
                  <li className="text-[15px]">Salary Management</li>
                  <li className="text-[15px]">Vendor Billing Management</li>
                  <li className="text-[15px]">Receipts and Payments</li>
                  <li className="text-[15px]">
                    Financial Reports / Cash Collection
                  </li>
                  <li className="text-[15px]">
                    Online Fee Payment Integration
                  </li>
                  <li className="text-[15px]">Advanced Fee statement report</li>
                  <li className="text-[15px]">
                    General discount/sibling discount
                  </li>
                  <li className="text-[15px]">
                    Accounting with Tally Integration
                  </li>
                </ul>
              </div>
            </div>
            <div className=" bg-white shadow-md rounded-md p-3">
              <img src={inf} alt="" className=" rounded-lg w-full " />

              <div className="px-7">
                <p className="font-heading text-lg  md:text-2xl md:pt-5">
                  Infrastructure
                </p>
                <ul className="list-disc text-start px-4">
                  <li className="text-[15px]">Building & Asset Management</li>
                  <li className="text-[15px]">Facilities Management</li>
                  <li className="text-[15px]">Transport Management</li>
                  <li className="text-[15px]">
                    Multiple Store/Inventory Management
                  </li>
                  <li className="text-[15px]">Hostel Facility Management</li>
                  <li className="text-[15px]">Student Health Care Module</li>
                </ul>
              </div>
            </div>
            <div className=" bg-white shadow-md rounded-md p-3">
              <img src={mobapp} alt="" className=" rounded-lg  w-full  " />

              <div className="px-7">
                <p className="font-heading text-lg  md:text-2xl md:pt-5">
                  Mobile Application
                </p>
                <ul className="list-disc text-start px-4">
                  <li className="text-[15px]">Student Profile</li>
                  <li className="text-[15px]">Online Fee Payment</li>
                  <li className="text-[15px]">Home work</li>
                  <li className="text-[15px]">Transport Tracking</li>
                  <li className="text-[15px]">Time Table</li>
                  <li className="text-[15px]">Communication & Collabration</li>
                  <li className="text-[15px]">Report Card</li>
                  <li className="text-[15px]">Lesson Plan</li>
                  <li className="text-[15px]">Report Card</li>
                </ul>
              </div>
            </div>
          </div>
          {/* second section */}
        </div>
        {/* feature section end */}
        {/* vender erp section start */}
        <div className="mt-5">
          <p className="font-heading text-xl text-center md:text-4xl md:pt-10">
            Why vedanta ERP SIS/SMS
          </p>
          <p className="text-center mt-3">
            Vedanta ERP helps the education industry to make good decisions,
            reduce costs, improve efficiency and transform their customer
            experience into a competitive advantage.Vedanta education ERP system
            helps an education institution to become compliant with best
            practices for the education sector. It is developed with significant
            domain expertise contributed by leading educationists.
          </p>
          <div className="grid sm:grid-cols-3 justify-center grid-cols-1 gap-20 mt-10">
            <div className=" bg-white shadow-md rounded-md p-3">
              <img src={u11} alt="" className="w-full rounded-lg mx-auto" />

              <div className="px-3 text-left">
                <p className="font-heading text-lg  md:text-2xl md:pt-5">
                  Secure Cloud
                </p>
                <p className="text-[14px]">
                  Over 90% of our clients switched to our cloud solution as it
                  is Secure, Reliance & Cost effective. Don't spend money on
                  buying expensive computers & managing the servers. Our secure
                  SSL enabled servie gives you information in lightning speed at
                  the same time keep the information secure using state of art,
                  industry accepted best practices. You can just pay for use
                  then relax & take care of your business while we manage
                  server, backup, virus protection, technical support for you .
                </p>{" "}
              </div>
            </div>
            <div className=" bg-white shadow-md rounded-md p-3">
              <img src={real1} alt="" className="w-full rounded-lg  mx-auto" />

              <div className="px-3 text-left">
                <p className="font-heading text-lg  md:text-2xl md:pt-5">
                  Real Time Information & Upto Date Software
                </p>
                <p className="text-[14px]">
                  In today's digital world you need to make decision with
                  lightening speed therefore we ensured that you get real time
                  feed of your educational institute wherever you are in the
                  world. Our product solves biggest problem of information
                  availability on time. We ensure that you always use the best
                  without any surprises on the pricing factors. We work with
                  several education industry leader & community which help us
                  craft the best solution for your education institute's need.
                  Always get the best today & in future.
                </p>{" "}
              </div>
            </div>
            <div className=" bg-white shadow-md rounded-md p-3">
              <img src={u1} alt="" className="w-full rounded-lg  mx-auto" />

              <div className="px-3 text-left">
                <p className="font-heading text-lg  md:text-2xl md:pt-5">
                  User Friendly
                </p>
                <p className="text-[14px]">
                  Design for us is not how it looks like but how it works.
                  Everything we do we take utmost care that how the user will
                  use the system with ease.
                </p>{" "}
              </div>
            </div>
          </div>
          <div className="md:flex justify-center flex-wrap  gap-20 mt-10 ">
            {/* <div className=" bg-white shadow-md rounded-md p-3 md:w-[40%] w-[100%]">
              <img
                // src={items.img}
                alt=""
                className=" rounded-lg  mx-auto"
              />

              <div className="px-3 text-left">
                <p className="font-heading text-lg  md:text-2xl md:pt-5">
                  User Friendly
                </p>
                <p className="text-[14px]">
                  Design for us is not how it looks like but how it works.
                  Everything we do we take utmost care that how the user will
                  use the system with ease.
                </p>{" "}
              </div>
            </div> */}
            <div className="     bg-white shadow-md rounded-md p-3 md:w-[40%] w-[100%]">
              <img src={u12} alt="" className=" rounded-lg w-full mx-auto" />

              <div className="px-3 text-left">
                <p className="font-heading text-lg  md:text-2xl md:pt-5">
                  Integrated/ Role Based
                </p>
                <p className="text-[14px]">
                  Every user will have personalized dashboard. Let user
                  view/edit the information which is relevant to them. You have
                  a great control on who will see what. Automate every process
                  in your institute
                </p>{" "}
              </div>
            </div>
            <div className=" bg-white shadow-md rounded-md p-3 md:w-[40%] w-[100%]">
              <img src={mob1} alt="" className="w-full rounded-lg  mx-auto" />

              <div className="px-3 text-left">
                <p className="font-heading text-lg  md:text-2xl md:pt-5">
                  Mobile App
                </p>
                <p className="text-[14px]">
                  Our mobile app gives you and parents a great control to find
                  every piece of information in your cell phone like fee
                  payment, home-work , attendance alert etc. Parents can view
                  the digital report card.
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
        {/* vender erp section end */}
        {/* trust of comunitty start section */}
        <div className="my-8">
          <p className="font-heading text-center text-lg  md:text-2xl md:pt-5">
            Trusted by Community
          </p>
          <div className="grid sm:grid-cols-4 grid-cols-1 gap-12 mt-10">
            <div className=" bg-white border-[1px] border-grey rounded-md p-8">
              <img
                src={p2}
                alt=""
                className="lg:w-[1100px] lg:h-[1100px ] p-4 rounded-lg w-300px h-300px "
              />
              <p className="text-Green font-heading text-center text-lg  md:text-2xl md:pt-5">
                350000+
              </p>
              <p className="font-heading text-center text-lg  md:text-xl ">
                Students & Parents
              </p>
            </div>
            <div className=" bg-white border-[1px] border-grey rounded-md p-8">
              <img
                src={p1}
                alt=""
                className="lg:w-[1100px] lg:h-[1100px ] p-4 rounded-lg w-300px h-300px "
              />
              <p className="text-Green font-heading text-center text-lg  md:text-2xl md:pt-5">
                90,000+
              </p>
              <p className="font-heading text-center text-lg  md:text-xl ">
                Teachers & Staff
              </p>
            </div>
            <div className=" bg-white border-[1px] border-grey rounded-md p-8">
              <img
                src={p3}
                alt=""
                className="lg:w-[1100px] lg:h-[1100px ] p-4 rounded-lg w-300px h-300px "
              />
              <p className="text-Green font-heading text-center text-lg  md:text-2xl md:pt-5">
                1500+
              </p>
              <p className="font-heading text-center text-lg  md:text-xl ">
                Schools & Colleges
              </p>
            </div>
            <div className=" bg-white border-[1px] border-grey rounded-md p-8">
              <img
                src={p4}
                alt=""
                className="lg:w-[1100px] lg:h-[1100px ] p-4 rounded-lg w-300px h-300px "
              />
              <p className="text-Green font-heading text-center text-lg  md:text-2xl md:pt-5">
                300+
              </p>
              <p className="font-heading text-center text-lg  md:text-xl ">
                Modules & Features
              </p>
            </div>
          </div>
        </div>
        {/* trust of comunity end section */}
        {/* our top customer start */}
        <div className="my-8 w-[80%] mx-auto">
          <p className="font-heading text-center text-lg  md:text-2xl md:pt-5">
            Our Top Customers
          </p>
          <div className="my-5">
            {/* <h2> Single Item</h2> */}
            <Slider {...settings}>
              <div className="">
                {" "}
                <img src={s1} alt="" className="rounded-lg w-[60%] mx-auto" />
                <div className="text-center rounded-md p-2 border-[1px] w-[70%] mx-auto">
                  <p>Basava International Dwarka</p>
                  <p>200+ Branchan</p>
                </div>
              </div>
              <div className="">
                {" "}
                <img src={s2} alt="" className="rounded-lg w-[60%]  mx-auto" />
                <div className="text-center rounded-md p-2 border-[1px] w-[70%] mx-auto">
                  <p>Delhi Public school</p>
                </div>
                {/* <div className="bg-grey p-6">hello</div> */}
              </div>
              <div className="">
                {" "}
                <img
                  src={s3}
                  alt=""
                  className="  rounded-lg w-[60%]  mx-auto"
                />
                <div className="text-center rounded-md p-2 border-[1px] w-[70%] mx-auto">
                  <p>Shriram Centennial</p>
                  <p>Dehradun</p>
                </div>
              </div>
              <div className="">
                {" "}
                <img
                  src={s4}
                  alt=""
                  className="  rounded-lg  w-[60%]  mx-auto"
                />
                <div className="text-center rounded-md p-2 border-[1px] w-[70%] mx-auto">
                  <p>Ram Mohan Roy/Cambridge</p>
                  <p>School</p>
                </div>
                {/* <div className="bg-grey p-6">hello</div> */}
              </div>
              <div className="">
                <img
                  src={s5}
                  alt=""
                  className="  rounded-lg  w-[60%]  mx-auto"
                />
                <div className="text-center rounded-md p-2 border-[1px] w-[70%] mx-auto">
                  <p>Excelsior American School</p>
                  <p>Gurugram</p>
                </div>
              </div>
              <div className="">
                {/* <div className=" bg-white  rounded-2xl shadow-md  w-250px h-340px"> */}
                <img src={s6} alt="" className="  rounded-lg w-[60%] mx-auto" />
                <div className="text-center rounded-md p-2 border-[1px] w-[70%] mx-auto">
                  <p>MVM Maharishi Vidya Mandir</p>
                  <p>200+ Branches</p>
                </div>
              </div>
              <div className="">
                {/* <div className=" bg-white  rounded-2xl shadow-md  w-250px h-340px"> */}
                <img src={s7} alt="" className="  rounded-lg w-[60%] mx-auto" />
                <div className="text-center rounded-md p-2 border-[1px] w-[70%] mx-auto">
                  <p>Ridge Valley School</p>
                  <p>DLF School</p>
                </div>
              </div>
            </Slider>
          </div>{" "}
        </div>
        {/* our top customer end */}
        {/* <div className="md:flex gap-10 py-5 px-5 justify-between">
          <div className="md:w-[1280px] md:h-[500px] ">
            <img
              src={School}
              alt=""
              className="lg:w-[1100px] lg:h-[1100px ] rounded-lg w-300px h-300px "
            />
          </div>
          <div className="md:w-[1280px] md:h-[500px]">
            <p className="font-heading text-xl md:text-4xl md:pt-10">
              Choosing School ERP or College ERP for your business?
            </p>
            <p className="font-subheading text-justify pt-5">
              Vedanta ERP solution which is an education ERP software means that
              anyone who is having education business in india can buy this
              software. It can automate school, college, university or
              professional institutions. This is School ERP and College ERP, let
              you dynamically design user dashboard and automate every process
              in your school/college and help you make data driven decisions
            </p>
            <div className="flex justify-evenly md:mt-10">
              <Link to="/solution/schoolerp">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  <span className=" flex items-center gap-3">
                    Lern more
                    <GrLinkNext
                      className="bg-green-500 rounded-full w-5 h-5  hover:bg-blue-600 hover:rotate-180
              duration-300  "
                    />
                  </span>
                </button>
              </Link>
              <Link to="/contact-us">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  contact us
                </button>
              </Link>
            </div>
          </div>
        </div> */}

        {/* <div className="flex gap-10 py-5 px-5 justify-between flex-col-reverse md:flex-row">
          <div className="md:w-[1280px] md:h-[500px] ">
            <p className="font-heading text-xl md:text-4xl md:pt-10">
              Easily build and run your ecommerce website
            </p>
            <p className="font-subheading text-justify pt-5">
              Shopify sorts the products you’re selling online into categories
              called collections. For example, you could put all of your
              t-shirts and sweaters in a "clothing" collection, while also
              having some of the same t-shirts in a "sales" collection. You can
              also organize your products by using smart collections. Smart
              collections group products by conditions that you define. For
              example, you can create a smart collection that automatically
              gathers all products under $20 and present this smart collection
              as "Gift Ideas" to your customers.
            </p>
            <div className="flex justify-evenly md:mt-10">
              <Link to="/solution/E-Commerse">
                {" "}
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  <span className=" flex items-center gap-3">
                    Lern more
                    <GrLinkNext
                      className="bg-green-500 rounded-full w-5 h-5  hover:bg-blue-600 hover:rotate-180
              duration-300  "
                    />
                  </span>
                </button>
              </Link>
              <Link to="/contact-us">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  contact us
                </button>
              </Link>
            </div>
          </div>
          <div className="d:w-[1280px] md:h-[500px] ">
            <img
              src={ecom}
              alt=""
              className="lg:w-[1100px] lg:h-[1100px ] rounded-lg w-300px h-300px "
            />
          </div>
        </div> */}
        {/* second start  */}
      </div>
    </>
  );
}

export default SolutionBody;
