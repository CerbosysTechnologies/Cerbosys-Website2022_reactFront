import React from "react";
import ClientLogoSlider from "./ClientLogoSlider";

const ClientLogoPage = () => {
  return (
    <div>
      <div className="bg-[#FAF6F5] mx-auto w-full h-full py-16 px-4 ">
        <div className="max-w-[1240px] mx-auto md:grid md:grid-cols-2">
          {/* Content Part */}
          <div className="flex flex-col text-justify justify-center px-16 ">
            <h1 className="text-gray-500 font-heading md:text-xl text-lg uppercase mb-5">
              Our Clients
            </h1>

            <h2 className="font-heading md:text-3xl text-lg text-gray-800 mb-5 w-64">
                Trusted by over 500+ clients
            </h2>
            <div className="text-black font-content text-lg md:text-lg md:text-left md:items-center md:w-[500px] whitespace-pre-wrap">
            With more than 4 years of working experience, Cerbosys has successfully managed to handle several clients by providing them 360 degrees in IT & business service solutions.
            <br></br>
            <br></br>
            Our team of multidisciplinary designers and developers is ready to make your vision a reality -- and we’re trusted by over 500+ clients.
            <br></br>
            <br></br>            
            We take pride in our work and we love to show you why we are the <b><i>#the most trusted choice</i></b> for small businesses and startups. 
            </div>
          </div>
          {/* Content Part */}

          {/* Icons Start */}
          <div className=''>
          <ClientLogoSlider />
          </div>
          {/* Icons Ends */}

        </div>
      </div>
    </div>
    
  );
};

export default ClientLogoPage;
