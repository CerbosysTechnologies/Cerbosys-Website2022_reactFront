import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import callicon from '../../assets/call_icon.svg';
import NavLinks from './ServiceNavLinks';
import IndustryNavLinks from './IndustryNavLinks';

import headerlogo from '../../assets/headerlogo.png';

import opwhitey from '../../assets/opwhitey.png';

import blackopey from '../../assets/blackopey.png';
import blackclosey from '../../assets/blackclosey.png';

import whiclosey from '../../assets/whiclosey.png';
// import MovingComponent from 'react-moving-text';

const firstimg = <img src={opwhitey} alt="img" className="w-full" />;
const secondimg = <img src={whiclosey} alt="img" className="w-full" />;

const firstclose = <img src={blackopey} alt="img" className="w-full" />;
const secondclose = <img src={blackclosey} alt="img" className="w-full" />;
const Navbar = () => {
  const [text, setText] = useState('');
  const [hover, setHover] = useState('');
  const [openeye, setOpeneye] = useState({
    firstimg: firstimg,
    secondimg: secondimg,
  });
  const [closeeye, setCloseeye] = useState({
    fistclose: firstclose,
    secondclose: secondclose,
  });

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
  //   setOpeneye(openeye.secondimg);
  // setCloseeye(closeeye.secondclose);
  const func1 = () => {
    setOpeneye(openeye.firstimg);
    setCloseeye(closeeye.fistclose);
    setTimeout(() => {
      setOpeneye(openeye.secondimg);
      setCloseeye(closeeye.secondclose);
    }, 900);
    setText(true);
  };

  //

  //

  return (
    <>
      <nav
        className={
          !headerVisible
            ? 'z-[999] bg-transparent fixed m-auto w-full h-[80px] '
            : 'z-[999] bg-white fixed m-auto w-full  h-[80px]'
        }
      >
        <div className="flex items-center font-heading justify-around  h-full">
          {/* Logo Div */}
          <div className="z-10 px-2 md:w-auto w-full flex justify-between items-center">
            <Link to="/">
              <div>
                <img
                  src={headerlogo}
                  alt="logo"
                  className="w-[50px] mx-auto"
                  onMouseOver={func1}
                  // onMouseLeave={() => func2()}
                />

                <p className="text-white font-bold font-heading text-4xl">
                  {text ? (!headerVisible ? openeye : closeeye) : ' '}
                </p>
                {/* <p
                  className={`text-white font-bold font-heading text-4xl 
                    hover === text ? (!headerVisible ? openeye : closeeye) : ''
                  }`}
                ></p> */}
              </div>
              {/* <div onMouseEnter={() => func1()}>
                <img
                  src={headerlogo}
                  alt="logo"
                  className="w-[50px] mx-auto "
                />

                <p
                  className={`hover === ${text} ? (!headerVisible ? ${openeye} : ${closeeye}) : ''`}
                ></p>
              </div> */}
            </Link>

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
            <li className="px-3 animate-lines-hover relative">
              <Link
                to="/solution"
                className=" after:content-[''] after:absolute after:bg-orange-600 after:h-[3px] after:w-[0%] after:left-0 after:bottom-[-6px]
                after:ease-in-out after:duration-300
                hover:after:w-[100%]"
              >
                Solution{' '}
              </Link>
            </li>

            <IndustryNavLinks></IndustryNavLinks>
            <li className="px-3 relative">
              <Link
                to="/Portfolio"
                className=" after:content-[''] after:absolute after:bg-orange-600 after:h-[3px] after:w-[0%] after:left-0 after:bottom-[-6px]
                after:ease-in-out after:duration-300
                hover:after:w-[100%]"
              >
                Portfolio
              </Link>
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

            <li className="px-3 relative">
              <Link
                to="/current-opening"
                className=" after:content-[''] after:absolute after:bg-orange-600 after:h-[3px] after:w-[0%] after:left-0 after:bottom-[-6px]
               after:ease-in-out after:duration-300
               hover:after:w-[100%]"
              >
                Career
              </Link>
            </li>

            <li className="px-3 relative">
              <Link
                to="/blog"
                className=" after:content-[''] after:absolute after:bg-orange-600 after:h-[3px] after:w-[0%] after:left-0 after:bottom-[-6px]
               after:ease-in-out after:duration-300
               hover:after:w-[100%]"
              >
                Blog
              </Link>
            </li>

            <li className="px-3 relative">
              <Link
                to="/contact-us"
                className=" px-1 inline-block
               after:content-[''] after:absolute after:bg-orange-600 after:h-[3px] after:w-[0%] after:left-0 after:bottom-[-6px]
               after:ease-in-out after:duration-300
               hover:after:w-[100%]"
              >
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
          <a href="tel:+91 9826906988">
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
          </a>

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
            <li className="px-3 relative">
              <Link
                to="/Portfolio"
                className=" after:content-[''] after:absolute after:bg-orange-600 after:h-[3px] after:w-[0%] after:left-0 after:bottom-[-6px]
                after:ease-in-out after:duration-300
                hover:after:w-[100%]"
              >
                Portfolio
              </Link>
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
