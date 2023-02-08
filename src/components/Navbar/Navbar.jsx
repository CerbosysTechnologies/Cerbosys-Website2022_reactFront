import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import cerbosyswhite from '../../assets/cerbosysNewSvgWhite.svg';
import cerbosysblack from '../../assets/cerbosysNewSvg.svg';
import logoheader from '../../assets/logoheader.png';
import logotext from '../../assets/logotext.png';
import callicon from '../../assets/call_icon.svg';
import NavLinks from './ServiceNavLinks';
import IndustryNavLinks from './IndustryNavLinks';
import CompanyNavLinks from './CompanyNavLinks';

import MovingComponent from 'react-moving-text';

const Navbar = () => {
  const [text, settext] = useState(false);
  const [search, setSearch] = useState('');
  console.log(search);
  // -------start ----
  // const AnimationsForChaining = ["fold"];
  // const [animationIndex, setAnimationIndex] = useState(0);
  // const [animationType, setAnimationType] = useState(AnimationsForChaining[0]);

  // const handleChainAnimation = () => {
  //   setAnimationIndex(animationIndex + 1);
  //   setAnimationType([animationIndex + 1]);
  // };
  // --------end------------
  const [open, setOpen] = useState(false);
  //Nevbar scrolling effect
  const [headerVisible, setheaderVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () =>
        setheaderVisible(window.pageYOffset > 100)
      );
    }
  }, []);

  const func1 = () => {
    settext(!text);
    setTimeout(() => {
      console.log('Hello deepika!');
    });
    setTimeout(() => {
      console.log('Hello World!');
    }, 500);
  };

  return (
    <>
      <nav
        className={
          !headerVisible
            ? 'z-[999] bg-transparent fixed m-auto w-full'
            : 'z-[999] bg-white fixed m-auto w-full'
        }
      >
        <div className="flex items-center font-heading justify-around">
          {/* Logo Div */}
          <div className="z-10 px-2 md:w-auto w-full flex justify-between">
            <Link to="/">
              <img
                src={!headerVisible ? cerbosyswhite : cerbosysblack}
                // src={
                //   !headerVisible ? (
                //     <span className="text-white">Cerbosys</span>
                //   ) : (
                //     <span className="text-black">Cerbosys</span>
                //   )
                // }
                // src={!headerVisible ? cerbosyswhite : cerbosysblack}
                alt="logo"
                // className="md:cursor-pointer md:w-[65px]  md:h-20 md:mt-0 mt-5 w-[55px] "
                className={
                  !headerVisible
                    ? 'md:cursor-pointer md:w-[65px]  md:h-20 md:mt-0 mt-5 w-[55px] text-white'
                    : 'text-black'
                }
                onMouseEnter={() => func1()}
              />
              <div>
                <p className="text-white font-bold font-heading text-4xl">
                  {text ? <span className="text-white">Cerboys</span> : ''}
                </p>
              </div>
            </Link>
            {/* Test Code */}
            <div
              className={`text-5xl md:hidden m-5 ${
                !headerVisible ? 'text-white' : 'text-black'
              }`}
              onClick={() => setOpen(!open)}
            >
              <ion-icon name={`${open ? 'close' : 'menu'}`}></ion-icon>
            </div>
          </div>

          {/* Menu */}

          <ul
            className={`md:flex hidden uppercase items-center gap-1 font-heading  md:text-[11px] xl:text-sm lg:text-text-[11px]
       md:text-white  ${!headerVisible ? '' : 'md:text-black'}
        `}
          >
            {/* <li>
            <Link to="/" className="py-5 px-1 inline-block">
              Company
            </Link>
          </li> */}
            {/* <CompanyNavLinks></CompanyNavLinks> */}
            {/* <li >
            <Link to="/" className="py-7 px-1 inline-block">
              Services
            </Link>
          </li> */}
            <NavLinks></NavLinks>
            <li>
              <Link to="/solution">Solution </Link>
            </li>
            <IndustryNavLinks></IndustryNavLinks>
            <li>
              <Link to="/Portfolio">Portfolio</Link>
            </li>
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
              <Link to="/blog">Blog</Link>
            </li>

            <li>
              <Link to="/contact-us" className="py-5 px-1 inline-block">
                Contact Us
              </Link>
            </li>

            {/* <li>
           <input
        type="text"
        name=""
        className=" w-32 rounded-md "
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
          </li> */}
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
          ${!headerVisible ? 'text-white' : 'text-black'}`}
            >
              +91 9826906988
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
            {/* <li className="py-2 px-2 inline-block">
              <CompanyNavLinks></CompanyNavLinks>
            </li> */}
            <li className="py-2 px-2 ">
              <NavLinks />
            </li>
            <li className="py-1 px-4 inline-block">
              <Link to="/solution">Solution </Link>
            </li>
            <br />
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
              <Link to="/blog" className="py-1 px-3 inline-block">
                Blog
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
    </>
  );
};

export default Navbar;
