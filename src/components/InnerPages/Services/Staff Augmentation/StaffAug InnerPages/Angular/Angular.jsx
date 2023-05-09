import React from 'react';

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
    
        <div className="mx-auto w-full md:h-[35rem]  h-96 py-12 px-4 bg-ReactjsHeader bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[35rem] h-96 mx-auto">
            <h1 className="text-white uppercase font-heading pt-2 md:text-5xl text-2xl md:mb-4 mb-5 min-w-fit">
              ANGULAR DEVELOPER
            </h1>

            <p className="text-center text-Skyblue font-subheading  md:text-lg text-xs md:w-[980px] max-w-fit">
              Hire experienced Angular developers from Cerbosys to provide your
              business with a distinct advantage in the current, highly
              competitive market.
            </p>
          </div>
          {/* Content Section Ends*/}
        </div>
      </>
      <AngularBody />
      <AngularForm />
    
    </div>
  );
};

export default Angular;
