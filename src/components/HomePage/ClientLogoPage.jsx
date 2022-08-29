import React from "react";
import ClientLogoSlider from "./ClientLogoSlider";

const ClientLogoPage = () => {
  return (
    <div>
      <div className="bg-[#FAF6F5] mx-auto w-full h-full py-16 px-4 ">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 ">
          {/* Content Part */}
          <div className="flex flex-col text-justify justify-center px-16 ">
            <h1 className="text-gray-500 font-heading md:text-xl text-lg uppercase mb-5">
              Our Clients
            </h1>

            <h2 className="font-heading md:text-3xl text-lg text-gray-800 mb-5 w-64">
                Trusted by over 500+ clients
            </h2>
            <div className="text-black font-content text-xs md:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum molestiae delectus culpa hic assumenda, voluptate
              reprehenderit dolore autem cum ullam sed odit perspiciatis.
              Doloribus quos velit, eveniet ex deserunt fuga?
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
