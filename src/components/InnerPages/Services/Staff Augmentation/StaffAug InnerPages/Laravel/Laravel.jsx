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
          <title>Hire Dedicated Laravel Developer in Indore | Cerbosys</title>
          <meta
            name="keywords"
            content="Hire Laravel Developers, Hire Remote Laravel Developers, Hire Top Laravel Engineers, Hire Laravel Coders, Hire Laravel Expert, Dedicated Laravel Web Framework Developer, hire dedicated laravel developer"
          />
          <meta
            name="description"
            content="Hire laravel developers on flexible hiring models. Our highly-skilled laravel Developers have the ability to build your business."
          />
        </Helmet>
        {/* <Navbar /> */}
        <div className="mx-auto w-full md:h-[35rem]  h-96 py-12 px-4 bg-ReactjsHeader bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[35rem] h-96 mx-auto">
            <h1 className="text-white uppercase font-heading pt-2 md:text-5xl text-2xl md:mb-4 mb-5 min-w-fit">
              LARAVEL DEVELOPER
            </h1>

            <p className="text-center text-Skyblue font-subheading  md:text-lg text-xs md:w-[980px] max-w-fit">
              Hire skilled Laravel developers from Cerbosys to maximize the
              possibilities of your business and stay ahead in today's highly
              competitive market.
            </p>
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
