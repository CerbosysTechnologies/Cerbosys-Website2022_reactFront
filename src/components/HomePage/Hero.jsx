import React, { useEffect, useState } from 'react';
import Typed from 'typed.js';
import ServiceHomePage from '../../components/HomePage/ServiceHomePage';
import TechnologyHomePage from '../../components/HomePage/TechnologyHomePage';
import IndustriesHomePage from '../../components/HomePage/IndustriesHomePage';
import CustomerRelationHomePage from '../../components/HomePage/CustomerRelationHomePage';
import ClientLogoPage from './ClientLogoPage';
import TypeWriter from 'react-typewriter-effect';
import MovingComponent from 'react-moving-text';
import Recommendations from './Recommendations';
import { Link } from 'react-router-dom';
import Bounce from 'react-reveal/Bounce';
import { Helmet } from 'react-helmet';
import Roll from 'react-reveal/Roll';
const Hero = () => {
  /* animation for buthhon logic start */

  const AnimationsForChaining = ['bounce'];
  const [animationIndex, setAnimationIndex] = useState(0);
  const [animationType, setAnimationType] = useState(AnimationsForChaining[0]);
  const handleChainAnimation = () => {
    setAnimationIndex(animationIndex + 1);
    setAnimationType([animationIndex + 1]);
  };

  /* animation for buthhon logic end */
  // text animation start
  useEffect(() => {
    var typed = new Typed('.auto', {
      strings: ['INNOVATION ',
        'PASSION ',
        'SATISFACTION',
        'INNOVATION ',
        'PASSION ',
        'SATISFACTION',
        'INNOVATION ',
        'PASSION ',
        'SATISFACTION',
        'INNOVATION ',
        'PASSION ',
        'SATISFACTION',
        'INNOVATION ',
        'PASSION ',
        'SATISFACTION',],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true
    });
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, [])


  return (
    <>
      <Helmet>
        <title>
          Web Development Company | Mobile App Services | India & UK
        </title>

        <meta
          name="keywords"
          content="mobile app development, mobile app development services, website designing company in india, web development services, best app development company in uk, web app development company in uk, ecommerce website development, best digital marketing services company in india, digital marketing services for startups, b2b lead generation and appointment setting services, android mobile ui ux development company, staff augmentation"
        />
        <meta
          name="description"
          content="Are you looking for the Best Web Development Company? Get top-notch Ecommerce Web & Mobile App development solutions tailored to your needs"
        />
        {/* <link rel="canonical" href="https://cerbosys.com" /> */}
      </Helmet>

      {/* <Navbar /> */}
      <div
        className="mx-auto w-full md:h-screen h-full py-16 px-4 bg-Hero bg-cover md:bg-top bg-center"
        title="Trusted Web Development Company "
      >
        {/* Content Section */}
        <div className="flex flex-col justify-center text-center items-center h-3/4 mx-auto">
          {/*font-heading Home Contet Animation start */}

          <p className="text-white text-center py-3 md:text-6xl text-xl  mb-8 md:mt-2 mt-24 min-w-fit">
            {/* The Ideal Web and Mobile Solutions for your emerging business- You’re just one click away!! */}
            <span className="font-middle whitespace-nowrap text-white text-center  py-3 md:text-4xl text-xl   mb-8 md:mt-2 mt-24">
              WE WORK FOR
              <p className='text-bluetext font-semibold' ><span className='auto' ></span></p>


            </span>
          </p>
          {/* Home Contet Animation End */}

          {/* animation for buthhon start */}
          <Link to="/Contact-us">
            <button
              className="bg-Green rounded-full font-heading md:px-5 md:py-2 md:text-lg
              text-white uppercase px-3 py-1.5 text-xs mb-6 md:mt-10"
            >
              Click to Connect
            </button>
          </Link>
          {/* animation for buthhon end */}
          <p className="font-heading text-white md:text-base text-xs md:mt-3 mt-10">
            {/* <div style={exampleStyle}> */}
            <div className="uppercase flex md:mt-8">
              <Roll bottom>
                <div className="">Let's collaborate to &nbsp;</div>
              </Roll>
              <div>
                <MovingComponent
                  onAnimationEnd={handleChainAnimation}
                  type={animationType}
                  duration="2000ms"
                  // timing="linear"
                  fillMode="forwards"
                  iteration={500}
                >
                  <Bounce left>&nbsp;@accelerate&nbsp;</Bounce>
                </MovingComponent>
              </div>
              <Roll bottom>
                {' '}
                <div> &nbsp;your business growth </div>
              </Roll>
            </div>
          </p>
        </div>
        {/* Content Section Ends*/}
        {/* Testing Code */}
        {/* Testing Code Ends */}
      </div>
      <ServiceHomePage />
      <IndustriesHomePage />
      <CustomerRelationHomePage />
      <ClientLogoPage />
      <TechnologyHomePage />
      <Recommendations />
      {/* <Footer /> */}
    </>
  );
};
export default Hero;
