import React from 'react';
import Navbar from '../../../Navbar/Navbar';
import ServiceDesc from './ServiceDesc';
import ServiceDiagram from './ServiceDiagram';
import ServiceForm from './ServiceForm';
import ServiceProcess from './ServiceProcess';
import Footer from '../../../Common/Component/Footer';
import { Link } from 'react-router-dom';
import Investment from '../UserInvestment/Investment';
import { Helmet } from 'react-helmet';

const WebDevelopment = () => {
  return (
    <div className="overflow-y-scroll">
      <>
        <Helmet>
          <title>Web Development - Cerbosys Technologies</title>
          <meta
            name="keywords"
            content="web development company in indore, ecommerce website development, website development company in india, website design & development services, cms website development services, php websites development services indore"
          />
          <meta
            name="description"
            content="Cerbosys Technologies is a prominent web development company in Indore, offering enterprise-grade services all over the world. The three major web services involve Front-end web development, Back-end web development & Full-stack development"
          />
        </Helmet>
        {/* <Navbar /> */}
        <div className=" mx-auto w-full md:h-[30rem]  h-96 py-12 px-4 bg-WebDevelopment bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[30rem] h-96 mx-auto">
            <h1 className="text-white font-heading py-2 md:text-3xl text-xl mb-2">
              Web Design and Development
            </h1>
            <p className="text-white font-heading py-2 md:text-xl text-xs mb-8 ">
              Delivering designs that inspires next generation
            </p>
            <Link to="/contact-us">
              <button
                className="bg-Primary rounded-full font-heading md:px-5 md:py-2 md:text-lg
              text-white uppercase px-3 py-1.5 text-xs mb-6"
              >
                Contact Us
              </button>
            </Link>
          </div>
          {/* Content Section Ends*/}
        </div>
        <Investment />
        <ServiceDesc />
        <ServiceDiagram />
        <ServiceProcess />
        <ServiceForm />
        {/* <Footer /> */}
      </>
    </div>
  );
};

export default WebDevelopment;
