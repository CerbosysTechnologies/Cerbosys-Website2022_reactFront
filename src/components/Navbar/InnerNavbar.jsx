import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import cerbosysblack from '../../assets/cerbosys_blueball_black_svg.svg';
import callicon from '../../assets/call_icon.png';
import NavLinks from './ServiceNavLinks';
import IndustryNavLinks from './IndustryNavLinks';
import CompanyNavLinks from './CompanyNavLinks';

const InnerNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="z-0 bg-white fixed m-auto w-full">
      <div className="flex items-center font-heading justify-around">
        {/* Logo Div */}
        <div className="z-10 p-5 md:w-auto w-full flex justify-between h-24">
          <Link to="/">
            <img
              src={cerbosysblack}
              alt="Mobile App Development Services"
              className="md:cursor-pointer w-[150px] h-14"
            />
          </Link>
          {/* Test Code */}
          <div
            className={`text-5xl md:hidden mt-5 text-black`}
            onClick={() => setOpen(!open)}
          >
            <ion-icon name={`${open ? 'close' : 'menu'}`}></ion-icon>
          </div>
        </div>

        {/* Menu */}

        <ul
          className={`md:flex hidden uppercase items-center gap-1 font-heading text-black text-sm`}
        >
          <CompanyNavLinks></CompanyNavLinks>
          <NavLinks></NavLinks>
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
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Call Icon */}
        <div className="md:flex hidden">
          <img
            className="w-[40px] h-[30px] mr-1 cursor-pointer"
            src={callicon}
            alt="Mobile App Development Services"
          />
          <span className={`text-sm font-heading mt-1 text-black`}>
            <p>+91 9826906988</p>
            <p>+91 8839697183</p>
          </span>
        </div>

        {/* Menu Ends */}

        {/* Mobile nav */}
        <ul
          className={`bg-Primary
        md:hidden fixed w-full top-[95px] overflow-y-auto bottom-0 py-1 pl-4 text-white font-heading
        duration-500 ${open ? 'left-0' : 'left-[-100%]'}
        `}
        >
          <CompanyNavLinks></CompanyNavLinks>
          <NavLinks />
          <IndustryNavLinks />
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
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default InnerNavbar;
