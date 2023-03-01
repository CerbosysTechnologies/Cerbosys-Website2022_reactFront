import React from 'react';
import Navbar from '../../../../../Navbar/Navbar';
import Footer from '../../../../../Common/Component/Footer';
import { Link } from 'react-router-dom';
import ReactjsBody from './ReactjsBody';
import ReactjsForm from './ReactjsForm';
import { Helmet } from 'react-helmet';

const Reactjs = () => {
  return (
    <div>
      <>
        <Helmet>
          <title>Hire Dedicated ReactJS Developer in Indore | Cerbosys</title>
          <meta
            name="keywords"
            content="hire best reactjs programmers, hire react coders, hire react.js developers, hire remote react.js developers, hire top react.js engineers"
          />
          <meta
            name="description"
            content="Hire ReactJS developers on flexible hiring models. Our highly-skilled ReactJS Developers have the ability to build your business."
          />
        </Helmet>

        {/* <Navbar /> */}
        <div className="mx-auto w-full md:h-[35rem]  h-96 py-12 px-4 bg-ReactjsHeader bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[35rem] h-96 mx-auto">
            <h1 className="text-white uppercase font-heading pt-2 md:text-5xl text-2xl md:mb-4 mb-5 min-w-fit">
              REACT.JS
            </h1>

            <p className="text-center text-Skyblue font-subheading  md:text-lg text-xs md:w-[980px] max-w-fit">
              Set your company up for achievement in the competitive environment
              by hiring React.Js specialists from Cerbosys.
            </p>

            <Link to="/contact-us">
              <button
                className="bg-Primary rounded-full font-heading md:px-5 md:py-2 md:text-lg
            text-white uppercase px-3 py-1.5 mt-4 text-xs mb-2"
              >
                Contact Us
              </button>
            </Link>
          </div>
          {/* Content Section Ends*/}
        </div>
      </>
      <ReactjsBody />
      <ReactjsForm />
      {/* <Footer /> */}
    </div>
  );
};

export default Reactjs;
