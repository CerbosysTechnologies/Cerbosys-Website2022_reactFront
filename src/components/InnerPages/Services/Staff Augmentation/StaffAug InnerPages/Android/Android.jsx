import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../../../Navbar/Navbar';
import Footer from '../../../../../Common/Component/Footer';

import AndroidBody from './AndroidBody';
import AndroidForm from './AndroidForm';
import { Helmet } from 'react-helmet';

const Android = () => {
  return (
    <div>
      <>
        <Helmet>
          <title>Hire Dedicated Android Developer in Indore | Cerbosys</title>
          <meta
            name="keywords"
            content="Hire android developer, hire dedicated android developer, hire android programmer, hire developers, hire dedicated developers in india"
          />
          <meta
            name="description"
            content="Hire android developers on flexible hiring models. Our highly-skilled android Developers have the ability to build your business."
          />
        </Helmet>
        {/* <Navbar /> */}
        <div className="mx-auto w-full md:h-[35rem]  h-96 py-12 px-4 bg-ReactjsHeader bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[35rem] h-96 mx-auto">
            <h1 className="text-white uppercase font-heading pt-2 md:text-5xl text-2xl md:mb-4 mb-5 min-w-fit">
              ANDRIOD DEVELOPER
            </h1>

            <p className="text-center text-Skyblue font-subheading  md:text-lg text-xs md:w-[980px] max-w-fit">
              Cerbosys offers skilled Android Developers that can help you
              secure success in today's highly competitive business landscape.
            </p>
          </div>
          {/* Content Section Ends*/}
        </div>
      </>
      <AndroidBody />
      <AndroidForm />
      {/* <Footer /> */}
    </div>
  );
};

export default Android;
