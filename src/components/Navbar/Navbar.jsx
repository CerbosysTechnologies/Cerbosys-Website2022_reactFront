import React, { useState } from "react";
import { Link } from "react-router-dom";
import cerbosyswhite from "../../assets/cerbo_logo_white.svg";
import callicon from "../../assets/call_icon.png";
import NavLinks from "./ServiceNavLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-transparent">
      <div className="flex items-center font-heading justify-around">
        {/* Logo Div */}
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <img
            src={cerbosyswhite}
            alt="logo"
            className="md:cursor-pointer w-[150px] h-auto"
          />
            {/* Test Code */}
            <div className="text-5xl md:hidden text-white mt-5" onClick={() => setOpen(!open)}>
              <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
            </div>
          </div>

        {/* Menu */}

        <ul className="md:flex hidden uppercase items-center gap-1 font-heading text-white">
          <li>
            <Link to="/" className="py-7 px-1 inline-block">
              Home
            </Link>
          </li>
          <li>
            <Link to="/" className="py-7 px-1 inline-block">
              Company
            </Link>
          </li>
          {/* <li >
            <Link to="/" className="py-7 px-1 inline-block">
              Services
            </Link>
          </li> */}
          <NavLinks></NavLinks>
          <li>
            <Link to="/" className="py-7 px-1 inline-block">
              Industries
            </Link>
          </li>
          <li>
            <Link to="/" className="py-7 px-1 inline-block">
              Case Study
            </Link>
          </li>
          <li>
            <Link to="/" className="py-7 px-1 inline-block">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/" className="py-7 px-1 inline-block">
              Team
            </Link>
          </li>
          <li>
            <Link to="/" className="py-7 px-1 inline-block">
              Contact Us
            </Link>
          </li>
          
        </ul>

        {/* Call Icon */}
        <div className="md:flex hidden">
          <img
            className="w-[40px] h-[30px] mr-1"
            src={callicon}
            alt="callicon"
          />
          <span className="text-sm font-heading mt-1 text-white">
            0731-4993444
          </span>
        </div>

        {/* Menu Ends */}

        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-[#404CDC] fixed w-full top-[95px] overflow-y-auto bottom-0 py-1 pl-4 text-white font-heading
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-1 px-1 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link to="/" className="py-1 px-1 inline-block">
              Industries
            </Link>
          </li>
          <li>
            <Link to="/" className="py-1 px-1 inline-block">
              Case Study
            </Link>
          </li>
          <li>
            <Link to="/" className="py-1 px-1 inline-block">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/" className="py-1 px-1 inline-block">
              Case Study
            </Link>
          </li>
          <li>
            <Link to="/" className="py-1 px-1 inline-block">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
