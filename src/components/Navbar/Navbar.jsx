import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import cerbosyswhite from "../../assets/cerbosys_blueball_white_svg.svg";
import cerbosysblack from "../../assets/cerbosys_blueball_black_svg.svg";
import callicon from "../../assets/call_icon.png";
import NavLinks from "./ServiceNavLinks";
import IndustryNavLinks from "./IndustryNavLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  //navbar scroll when active state
  //const [navbar, setNavbar] = useState(false)

  //logo scroll when active
  const [navbarLogo, setNavbarLogo] = useState(cerbosyswhite)

    //navbar scroll changeBackground function
    // const changeBackground = () => {
    //   console.log(window.scrollY)
    //   if (window.scrollY >= 66) {
    //     setNavbar(true)
    //   } else {
    //     setNavbar(false)
    //   }
    // }

    const [headerVisible, setheaderVisible] = useState(false);

    useEffect(() => {
      if (typeof window !== "undefined") {
        window.addEventListener("scroll", () =>
        setheaderVisible(window.pageYOffset > 100)
        );
      }
    }, []);

    // useEffect(() => {
    //   changeBackground()      // adding the event when scroll change background
    //   window.addEventListener("scroll", changeBackground)
    // })
  
    //logo scroll function
    const changeLogo = () => {
      if (window.scrollY >= 60) {
        setNavbarLogo(cerbosysblack)
      } else {
        setNavbarLogo(cerbosyswhite)
      }
    }
  
    useEffect(() => {
      changeLogo()
      // adding the event when scroll change Logo
      window.addEventListener("scroll", changeLogo)
    })


  return (
    <nav className={!headerVisible ? "z-0 bg-transparent fixed m-auto w-full": "z-0 bg-gray-500 fixed m-auto w-full" }>
      <div className="flex items-center font-heading justify-around">
        {/* Logo Div */}
        <div className="z-10 p-5 md:w-auto w-full flex justify-between">
          <img
            src={!headerVisible ? cerbosyswhite : cerbosysblack}
            alt="logo"
            className="md:cursor-pointer w-[150px] h-14"
          />
            {/* Test Code */}
            <div className="text-5xl md:hidden text-white mt-5" onClick={() => setOpen(!open)}>
              <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
            </div>
          </div>

        {/* Menu */}

        <ul className="md:flex hidden uppercase items-center gap-1 font-heading text-white text-sm">
          <li>
            <Link to="/" className="py-5 px-1 inline-block">
              Home
            </Link>
          </li>
          <li>
            <Link to="/" className="py-5 px-1 inline-block">
              Company
            </Link>
          </li>
          {/* <li >
            <Link to="/" className="py-7 px-1 inline-block">
              Services
            </Link>
          </li> */}
          <NavLinks></NavLinks>
          {/* <li>
            <Link to="/" className="py-7 px-1 inline-block">
              Industries
            </Link>
          </li> */}
          <IndustryNavLinks></IndustryNavLinks>
          <li>
            <Link to="/" className="py-5 px-1 inline-block">
              Case Study
            </Link>
          </li>
          <li>
            <Link to="/" className="py-5 px-1 inline-block">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/" className="py-5 px-1 inline-block">
              Team
            </Link>
          </li>
          <li>
            <Link to="/" className="py-5 px-1 inline-block">
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
          <span className="text-sm font-heading mt-1 text-white">
            0731-4993444
          </span>
        </div>

        {/* Menu Ends */}

        {/* Mobile nav */}
        <ul
          className={`bg-[#404CDC]
        md:hidden fixed w-full top-[95px] overflow-y-auto bottom-0 py-1 pl-4 text-white font-heading
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
