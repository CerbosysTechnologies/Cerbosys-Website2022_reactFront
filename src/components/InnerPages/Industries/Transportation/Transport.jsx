import React from 'react';
import Navbar from '../../../Navbar/Navbar';
import Footer from '../../../Common/Component/Footer';
import { TransportBody } from './TransportBody';
import TransportForm from './TransportForm';
import { Helmet } from 'react-helmet';

const Transport = () => {
  return (
    <div>
      <>
        <Helmet>
          <title>
            Transport web design & development company in Indore, India
          </title>
          <meta
            name="keywords"
            content="web application for shipping and logistics, logistics digital marketing, logistics transportation services, logistics and transportation software development, logistics and transportation software development company"
          />
          <meta
            name="description"
            content="We provide logistics software and app development services  will help you optimize operating costs, cut fuel consumption,  improve asset tracking & solve vehicle routing issues"
          />
        </Helmet>
        {/* <Navbar /> */}
        <div className="mx-auto w-full md:h-[36rem] bg-TransportHeader h-96 py-12 px-4 bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[30rem] h-96 mx-auto">
            <h1 className="text-white font-heading py-2 md:text-5xl text-2xl md:mb-48 mb-28">
              Transport and Logistics
            </h1>

            <p className="text-white font-heading py-2 md:text-lg text-xs md:w-[980px] text-justify">
              Transport and logistics management is one of the fastest growing
              business fields in today's world. Our company helps you improve
              sales, reduce costs and raise the efficiency of your transport
              management system.
            </p>
          </div>
          {/* Content Section Ends */}
        </div>
      </>
      <TransportBody />
      <TransportForm />
      {/* <Footer /> */}
    </div>
  );
};

export default Transport;
