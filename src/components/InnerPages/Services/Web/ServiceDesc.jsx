import React from "react";
import webserviceicon from "../../../../assets/innerpage/webdevelopment/web_development_services_image.png";
import webserviceclip_articon from "../../../../assets/innerpage/webdevelopment/illustrator.svg";
import technologyicon from "../../../../assets/innerpage/webdevelopment/technologies_icons.svg"
const ServiceDesc = () => {
  return (
    <div>
      <div className="bg-Service mx-auto w-full py-16 px-4 ">
        <div className="max-w-[1240px] mx-auto ">
          {/* First Section */}
          <div className="grid md:grid-cols-2">
            {/* Content Section */}
            <div className="mx-auto flex flex-col md:px-24 px-14 text-justify">
              <h1 className="font-heading md:text-xl text-sm"> Web Development Services </h1>
              <p className="font-content md:text-sm text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
                omnis magni! Maiores aspernatur incidunt labore minus quo hic,
                tenetur delectus, deleniti praesentium esse pariatur in
                provident? Aliquid vel alias eos! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Rem, omnis magni! Maiores
                aspernatur incidunt labore minus quo hic, tenetur delectus,
                deleniti praesentium esse pariatur in provident? Aliquid vel
                alias eos!
              </p>
            </div>
            {/* Content Section Ends*/}

            {/* Image Section */}
            <img
              src={webserviceicon}
              alt="Web Service Icon"
              className="mx-auto md:w-[28rem]
             w-[18rem] mt-8"
            />
            {/* Image Section Ends*/}
          </div>
          {/* Grid Div */}
          {/* First Section Ends */}

          {/* Second Section */}
          <div className="grid md:grid-cols-2 bg-[#404CDC] mt-8 rounded-3xl gap-2">
            {/* Image Section */}
            <img
              src={webserviceclip_articon}
              alt="Web Service Icon"
              className="md:w-[24rem] mx-auto my-8
             w-[18rem] mt-8"
            />
            {/* Image Section Ends*/}

            {/* Content Section */}
            <div className="flex flex-col md:px-24 px-14 mx-auto text-justify mt-8">
              <h1 className="font-heading md:text-xl text-sm"> Web Development Services </h1>
              <p className="font-content md:text-sm text-xs mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
                omnis magni! Maiores aspernatur incidunt labore minus quo hic,
                tenetur delectus, deleniti praesentium esse pariatur in
                provident? Aliquid vel alias eos! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Rem, omnis magni! Maiores
                aspernatur incidunt labore minus quo hic, tenetur delectus,
                deleniti praesentium esse pariatur in provident? Aliquid vel
                alias eos!
              </p>
            </div>
            {/* Content Section Ends*/}
          </div>
          {/* Grid Div */}
          {/* Second Section Ends */}

        {/* Third Section */}
            <div className="flex flex-row flex-wrap items-center gap-8 mt-36 mx-auto">
                <img src={technologyicon} alt="Technology Icon" className=""/>
            </div>
        {/* Third Section Ends*/}

        </div>
        {/* Max Width Div Ends */}
      </div>
      {/* Second Div Ends */}
    </div>
  );
};

export default ServiceDesc;
