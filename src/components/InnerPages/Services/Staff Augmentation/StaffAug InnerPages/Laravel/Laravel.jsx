import React from 'react';
import Navbar from '../../../../../Navbar/Navbar';
import Footer from '../../../../../Common/Component/Footer';
import { Link } from 'react-router-dom';
import LaravelBody from './LaravelBody';
import LaravelForm from './LaravelForm';
import { Helmet } from 'react-helmet';

const Laravel = () => {
  return (
    <div>
      <>
        <Helmet>
          <title>Laravel | Cerbosys Technologies</title>
          <meta
            name="keywords"
            content="Hire Laravel Developers, Hire Remote Laravel Developers, Hire Top Laravel Engineers, Hire Laravel Coders, Hire Laravel Expert, Dedicated Laravel Web Framework Developer, hire dedicated laravel developer"
          />
          <meta name="description" content="" />
        </Helmet>
        {/* <Navbar /> */}
        <div className="mx-auto w-full md:h-[35rem]  h-96 py-12 px-4 bg-LaravelHeader bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[35rem] h-96 mx-auto">
            <h1 className="text-white font-heading py-2 md:text-3xl text-xl mb-10 ">
              Hire Laravel Developer
            </h1>

            <p className="text-white font-heading py-2 md:text-xl text-xs md:mb-28 mb-24 md:w-[480px] text-justify">
              For developing and maintaining Laravel web applications for your
              business, augment your developers team by hiring a Larvel
              developer from Cerbosys.
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
      <LaravelBody />
      <LaravelForm />
      {/* <Footer /> */}
    </div>
  );
};

export default Laravel;
