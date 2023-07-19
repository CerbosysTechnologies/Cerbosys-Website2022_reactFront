import React from 'react';
import ClientLogoSlider from './ClientLogoSlider';

const ClientLogoPage = () => {
  return (
    <div>
      <div className="bg-[#FAF6F5] mx-auto w-full h-full py-16 px-4 selection:bg-Green selection:text-white ">
        <div className="max-w-[1240px] mx-auto md:grid md:grid-cols-2">
          {/* Content Part */}
          <div className="flex flex-col text-justify justify-center md:px-16 px-4">
            <h2 className="text-black font-heading md:text-xl text-lg uppercase mb-5">
              Our Clients
            </h2>
            <h1 className="font-heading md:text-2xl text-lg text-gray-800 mb-5  text-justify">
              Trusted Web Development Company & Mobile App Services for 150+ Clients

            </h1>
            <div className="text-black font-content  md:text-left md:items-center md:w-[500px] md:whitespace-pre-wrap ">
              With more than four years of working experience, Cerbosys has
              successfully managed to handle several clients by providing them
              360 degrees in IT and business service solutions.
              <br></br>
              <br></br>
              Our team of multi-disciplinary designers and developers is ready
              to make your vision a reality --{' '}
              <strong>and we are trusted by over 150 clients.</strong>
              <br></br>
              <br></br>
              We take pride in our work and we love to show you why we are the{' '}
              <b>
                <i>#the most trusted choice</i>
              </b>
              for small businesses and startups.
            </div>
          </div>
          {/* Content Part */}

          {/* Icons Start */}
          <div className="selection:bg-Green selection:text-white">
            <ClientLogoSlider />
          </div>
          {/* Icons Ends */}
        </div>
      </div>
    </div>
  );
};

export default ClientLogoPage;
