import React from 'react';
import Navbar from '../../../../../Navbar/Navbar';
import Footer from '../../../../../Common/Component/Footer';
import { Link } from 'react-router-dom';
import AngularBody from './AngularBody';
import AngularForm from './AngularForm';
import { Helmet } from 'react-helmet';

const Angular = () => {
  return (
    <div>
      <>
        <Helmet>
          <title>Hire Dedicated Angular Developer in Indore | Cerbosys</title>
          <meta
            name="keywords"
            content="Hire Angular Developers, Hire Remote Angular Developers, AngularJS development company, hire AngularJS developers in India, AngularJS mobile and web apps development company"
          />
          <meta
            name="description"
            content="Hire angular developers on flexible hiring models. Our highly-skilled angular Developers have the ability to build your business."
          />
        </Helmet>
        {/* <Navbar /> */}
        <div className="mx-auto w-full md:h-[35rem]  h-96 py-12 px-4 bg-AngularHeader bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[35rem] h-96 mx-auto">
            <h1 className="text-white font-heading py-2 md:text-3xl text-xl mb-10 ">
              Hire Angular Developer
            </h1>

            <p className="text-white font-heading py-2 md:text-xl text-xs md:mb-28 mb-24 md:w-[480px] text-justify">
              Get a dedicated Angular Developer from Us for your business to run
              smoothly online, by developing a user-friendly interface for your
              web applications.
            </p>

            <Link to="/contact-us">
              <button
                className="bg-Primary rounded-full font-heading md:px-5 md:py-2 md:text-lg
            text-white uppercase px-3 py-1.5 text-xs mb-2"
              >
                Contact Us
              </button>
            </Link>
          </div>
          {/* Content Section Ends*/}
        </div>
      </>
      <AngularBody />
      <AngularForm />
      {/* <Footer /> */}
    </div>
  );
};

export default Angular;
