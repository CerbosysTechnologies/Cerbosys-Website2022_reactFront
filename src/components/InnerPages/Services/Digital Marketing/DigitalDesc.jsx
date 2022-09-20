import React from "react";
import digitalmarketingicon from "../../../../assets/innerpage/digitalmarketing/digital_marketing_image.png";
import digitalmarketing_articon from "../../../../assets/innerpage/digitalmarketing/illustrator.png";
import Bounce from "react-reveal/Bounce";

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
                <h1 className="font-heading md:text-2xl text-lg mb-5">
                  Digital Marketing
                </h1>
                <p className="font-content md:text-lg text-sm">
                  Digital marketing is an umbrella term encompassing several
                  disciplines, including web design and development, social
                  media, search engine optimization (SEO), email marketing,
                  content marketing, and mobile marketing.
                  <br></br>
                  <br></br>
                  As a business owner, the company’s marketing and digital
                  marketing strategies play a critical role in your company’s
                  success. Marketing strategies ensure that you have a clear
                  understanding of how to use your digital marketing budget to
                  generate leads and potential customers for your business.
                </p>
              </div>
              {/* Content Section Ends*/}

              {/* Image Section */}
              <img
                src={digitalmarketingicon}
                alt="Digital Marketing Icon"
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
              src={digitalmarketing_articon}
              alt="Digital Marketing Icon"
              className="md:w-[44rem] md:h-[22rem] mx-auto my-8
             w-[18rem] mt-16"
            />
            {/* Image Section Ends*/}

            {/* Content Section */}
            <div className="flex flex-col md:px-24 px-14 mx-auto text-justify mt-8">
              <h1 className="font-heading md:text-2xl text-lg text-white">
                We are aware of the Technology Pulse that Leads to Better
                Performance
              </h1>
              <p className="font-content md:text-lg text-sm mb-8 text-white">
                Our digital marketing program helps businesses to create
                engaging content for their customers. We are experts in
                generating SEO content that eventually manages to produce
                traffic on the website.
                <br></br>
                <br></br>
                Our main focus is to promote the brand by using effective
                digital marketing tactics that deliver real value to our
                clients. We understand the needs of businesses and take them
                into consideration while promoting the brand online.
              </p>
            </div>
            {/* Content Section Ends*/}
          </div></Bounce>
          {/* Grid Div */}
          {/* Second Section Ends */}
        </div>
        {/* Max Width Div Ends */}
      </div>
      {/* Second Div Ends */}
    </div>
  );
};

export default MobileDesc;
