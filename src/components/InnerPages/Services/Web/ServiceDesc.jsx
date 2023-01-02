import React from 'react';
import webserviceicon from '../../../../assets/innerpage/webdevelopment/web_development_services_image.png';
import webserviceclip_articon from '../../../../assets/innerpage/webdevelopment/illustrator.svg';
import technologyicon from '../../../../assets/innerpage/webdevelopment/technologies_icons.svg';
import Bounce from 'react-reveal/Bounce';

const ServiceDesc = () => {
  return (
    <div>
      <div className=" mx-auto w-full py-16 px-4 ">
        <div className="max-w-[1240px] mx-auto ">
          {/* First Section */}
          <Bounce duration={3000}>
            <div className="grid md:grid-cols-2">
              {/* Content Section */}

              <div className="mx-auto flex flex-col md:px-24 px-14 text-justify">
                <h2 className="font-heading md:text-2xl text-xl mb-5">
                  Web Development Services
                </h2>

                <p className="font-content md:text-lg text-sm">
                  Web development is the process of designing and coding a
                  website, web applications, or other computer programs that are
                  accessible on the internet. Website design & development
                  services are a very specific set of skills that includes
                  creating the front-end build, website architecture, and
                  functionality within HTML, CSS, JavaScript, and various other
                  bits of code.
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
            </div>{' '}
          </Bounce>
          {/* Grid Div */}
          {/* First Section Ends */}

          {/* Second Section */}
          <Bounce duration={3000}>
            <div className="grid md:grid-cols-2 bg-Primary mt-8 rounded-3xl gap-2">
              {/* Image Section */}
              {/* <Bounce left duration={3000}> */}
              <img
                src={webserviceclip_articon}
                alt="Web Service Icon"
                className="md:w-[24rem] mx-auto my-8
             w-[18rem] mt-8"
              />
              {/* </Bounce> */}
              {/* Image Section Ends*/}

              {/* Content Section */}
              {/* <Bounce right duration={3000}> */}
              <div className="flex flex-col md:px-24 px-14 mx-auto text-justify mt-8">
                <h2 className="font-heading md:text-2xl text-lg text-white mb-5">
                  Web Development Services
                </h2>
                <p className="font-content md:text-lg text-sm mb-8 text-white">
                  The core function of a website development service is to help
                  a business to excel in its online presence. As a professional
                  web development company in India, we develop a website keeping
                  in mind that it creates a great web user experience. The three
                  major web services involve Front-end web development, Back-end
                  web development & Full-stack web development. Our major
                  services include ecommerce website development, cms website
                  development services in Indore & many more.
                </p>
              </div>
              {/* </Bounce> */}
              {/* Content Section Ends*/}
            </div>
          </Bounce>
          {/* Grid Div */}
          {/* Second Section Ends */}

          {/* Third Section */}
          <div className="flex flex-row flex-wrap items-center gap-8 mt-36 mx-auto">
            <img src={technologyicon} alt="Technology Icon" className="" />
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
