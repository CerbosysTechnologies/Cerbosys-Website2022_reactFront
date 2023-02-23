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
        <div className="selection:bg-Green selection:text-white mx-auto w-full md:h-[36rem] bg-Transportbg h-96 py-12 px-4 bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[30rem] h-96 mx-auto">
            <h1 className="text-white uppercase font-heading pt-2 md:text-5xl text-2xl md:mb-5 min-w-fit">
              TRANSPORT & LOGISTICS
            </h1>

            <p className="text-center text-Skyblue font-subheading  md:text-lg text-xs md:w-[980px] max-w-fit">
              We specialize in providing IT services to the Transportation and
              <br></br> Logistics sector that address consultation,
              implementation, and <br></br>support as well as ongoing innovation
              in T&L solutions. 
            </p>
          </div>
          {/* Content Section Ends */}
        </div>
      </>
      <div className="selection:bg-Green selection:text-white">
        <TransportBody />
        <TransportForm />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Transport;
