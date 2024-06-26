import React from 'react';
import brandingandpackagingicon from '../../../../assets/innerpage/brandingandpackaging/image.jpg';
import brandingandpackaging_articon from '../../../../assets/innerpage/brandingandpackaging/illustrator.svg';
import { Bounce } from 'react-reveal';
const BrandingAndPackagingDesc = () => {
  return (
    <div>
      <div className=" mx-auto w-full py-16 px-4 ">
        <div className="max-w-[1240px] mx-auto ">
          {/* First Section */}
          <Bounce duration={3000}>
            <div className="grid md:grid-cols-2">
              {/* Content Section */}
              <div className="mx-auto flex flex-col  px-5 text-justify">
                <h2 className="font-heading md:text-2xl text-lg mb-4">
                  {' '}
                  Branding And Packaging{' '}
                </h2>
                <p className="text-sm  md:text-base text-start">
                  Both branding and packaging are important for getting your
                  product noticed and ensuring that it makes a lasting
                  impression. Used together, they can create a powerful
                  marketing tool that will help you boost sales and build a
                  loyal customer base.
                  <br></br>
                  <br></br>
                  Branding and packaging are two of the most important aspects
                  of any product or service. They are what help to make a
                  product or service unique and recognizable, and they can also
                  be used to influence customer perceptions and preferences.
                </p>
              </div>
              {/* Content Section Ends*/}

              {/* Image Section */}
              <img
                src={brandingandpackagingicon}
                alt="Branding And Packaging Icon"
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
                src={brandingandpackaging_articon}
                alt="Lead Generation Icon"
                className="md:w-[24rem] mx-auto my-8
             w-[18rem] mt-8"
              />
              {/* Image Section Ends*/}

              {/* Content Section */}
              <div className="flex flex-col  px-5 mx-auto text-justify mt-8">
                <h2 className="font-heading md:text-2xl text-lg text-white mb-4">
                  We are aware of the Technology Pulse that Leads to Better
                  Performance
                </h2>
       
                <p className="text-sm  md:text-base text-start    mb-8 text-white">
                  Our brand and packaging team helps businesses, especially
                  small size businesses to make it stand out from the
                  competition using creativity unique packaging models.
                  <br></br>
                  <br></br>
                  Our main focus is to get your product noticed and ensure that
                  it makes a lasting impression on the users so that it can
                  build a loyal customer base.
                </p>
              </div>
              {/* Content Section Ends*/}
            </div>
          </Bounce>

          {/* Grid Div */}
          {/* Second Section Ends */}
        </div>
        {/* Max Width Div Ends */}
      </div>
      {/* Second Div Ends */}
    </div>
  );
};

export default BrandingAndPackagingDesc;
