import React from "react";
import mobileserviceicon from "../../../../assets/innerpage/mobiledevelopment/mobile_app_services_image.png";
import mobileservice_articon from "../../../../assets/innerpage/mobiledevelopment/illustrator.svg";
import mobiletechnologyicon from "../../../../assets/innerpage/mobiledevelopment/tectnologies_mobile_app.svg";
import { Bounce } from "react-reveal";
const MobileDesc = () => {
  return (
    <div>
      <div className="bg-Service mx-auto w-full py-16 px-4 ">
        <div className="max-w-[1240px] mx-auto ">
          {/* First Section */}
          <Bounce duration={3000}>
            <div className="grid md:grid-cols-2">
              {/* Content Section */}
              <div className="mx-auto flex flex-col md:px-24 px-14 text-justify">
                <h1 className="font-heading md:text-2xl text-lg mb-10">
                  {" "}
                  Mobile App Development{" "}
                </h1>
                <p className="font-content md:text-lg text-sm">
                  Simplifying app development by enhancing and rebuilding mobile
                  applications that add value to your business online and end up
                  providing a good user experience. With the advancement in
                  mobile app development technology, we can provide you with a
                  wide range of services through our app development programs.
                </p>
              </div>
              {/* Content Section Ends*/}

              {/* Image Section */}
              <img
                src={mobileserviceicon}
                alt="Mobile Service Icon"
                className="mx-auto md:w-[28rem]
             w-[18rem] mt-8"
              />
              {/* Image Section Ends*/}
            </div>
          </Bounce>
          {/* Grid Div */}
          {/* First Section Ends */}

          {/* Second Section */}
          <Bounce duration={3000}>
            <div className="grid md:grid-cols-2 bg-Primary mt-8 rounded-3xl gap-2">
              {/* Image Section */}
              <img
                src={mobileservice_articon}
                alt="Mobile Service Icon"
                className="md:w-[24rem] mx-auto my-8
             w-[18rem] mt-8"
              />
              {/* Image Section Ends*/}

              {/* Content Section */}
              <div className="flex flex-col md:px-24 px-14 mx-auto text-justify mt-8">
                <h1 className="font-heading md:text-2xl text-lg text-white">
                  We are aware of the Technology Pulse that Leads to Better
                  Performance
                </h1>
                <p className="font-content md:text-lg text-sm mb-8 text-white">
                  Our mobile app development program helps businesses to create
                  engaging and personalized apps for their customers. We are
                  experts in creating apps that are easy to navigate and use.
                  <br></br>
                  <br></br>
                  Our main focus is on building robust, high-performance mobile
                  apps that deliver real value to our clients. We understand the
                  needs of businesses and take them into consideration while
                  building our apps.
                </p>
              </div>
              {/* Content Section Ends*/}
            </div>
          </Bounce>
          {/* Grid Div */}
          {/* Second Section Ends */}

          {/* Third Section */}
          <div className="flex flex-row flex-wrap items-center gap-8 mt-36 mx-auto">
            <img
              src={mobiletechnologyicon}
              alt="Technology Icon"
              className=""
            />
          </div>
          {/* Third Section Ends*/}
        </div>
        {/* Max Width Div Ends */}
      </div>
      {/* Second Div Ends */}
    </div>
  );
};

export default MobileDesc;
