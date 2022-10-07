import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import cerbosyswhite from "../../assets/cerbosyswhite.svg";
import cerbosysblack from "../../assets/cerbosysblack.svg";
import callicon from "../../assets/call_icon.svg";
import NavLinks from "./ServiceNavLinks";
import IndustryNavLinks from "./IndustryNavLinks";
import CompanyNavLinks from "./CompanyNavLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  //Nevbar scrolling effect
  const [headerVisible, setheaderVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setheaderVisible(window.pageYOffset > 100)
      );
    }
  }, []);

  return (
    <nav
      className={
        !headerVisible
          ? "z-[999] bg-transparent fixed m-auto w-full"
          : "z-[999] bg-white fixed m-auto w-full"
      }
    >
      <div className="flex items-center font-heading justify-around">
        {/* Logo Div */}
        <div className="z-10 p-2 md:w-auto w-full flex justify-between">
          <Link to="/">
            <img
              src={!headerVisible ? cerbosyswhite : cerbosysblack}
              alt="logo"
              className="md:cursor-pointer md:w-[300px] md:h-28 md:mt-0 mt-5 w-[200px] h-[65px]"
            />
          </Link>
          {/* Test Code */}
          <div
            className={`text-5xl md:hidden m-5 ${
              !headerVisible ? "text-white" : "text-black"
            }`}
            onClick={() => setOpen(!open)}
          >
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>

        {/* Menu */}

        <ul
          className={`md:flex hidden uppercase items-center gap-1 font-heading  text-sm
       md:text-white  ${!headerVisible ? "" : "md:text-black"}
        `}
        >
          {/* <li>
            <Link to="/" className="py-5 px-1 inline-block">
              Company
            </Link>
          </li> */}
          <CompanyNavLinks></CompanyNavLinks>
          {/* <li >
            <Link to="/" className="py-7 px-1 inline-block">
              Services
            </Link>
          </li> */}
          <NavLinks></NavLinks>

          <IndustryNavLinks></IndustryNavLinks>
          {/* <li>
            <Link to="/" className="py-5 px-1 inline-block">
              Case Study
            </Link>
          </li>
          <li>
            <Link to="/" className="py-5 px-1 inline-block">
              Blog
            </Link>
          </li> */}

          <li>
            <Link to="/current-opening">Career</Link>
          </li>

          <li>
            <Link to="/contact-us" className="py-5 px-1 inline-block">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Call Icon */}
        <div className="md:flex hidden">
          <img
            className="w-[40px] h-[30px] mr-1 cursor-pointer"
            src={callicon}
            alt="callicon"
          />
          <span
            className={`text-sm font-heading mt-1 
          ${!headerVisible ? "text-white" : "text-black"}`}
          >
            0731-499-3-444
          </span>
        </div>

        {/* Menu Ends */}

        {/* Mobile nav */}
        <ul
          className={`bg-Primary
        md:hidden fixed w-full top-[95px] overflow-y-auto bottom-0 py-1 pl-4 text-white font-heading
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li className="py-2 px-2 inline-block">
            <CompanyNavLinks></CompanyNavLinks>
          </li>
          <li className="py-2 px-2 ">
            <NavLinks />
          </li>
          <li className="py-2 px-2 inline-block">
            <IndustryNavLinks />
          </li>

          {/* <li>
            <Link to="/" className="py-3 px-3 ">
              Case Study
            </Link>
          </li>
          <li>
            <Link to="/" className="py-3 px-3 inline-block">
              Blog
            </Link>
          </li>          */}
          <li>
            <Link to="/current-opening" className="py-1 px-3 inline-block">
              Career
            </Link>
          </li>
          <li>
            <Link to="/contact-us" className="py-1 px-3 inline-block">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
