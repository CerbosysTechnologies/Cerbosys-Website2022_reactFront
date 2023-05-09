import React from 'react';
import FlutterBody from './FlutterBody';
import FlutterForm from './FlutterForm';
import { Helmet } from 'react-helmet';

const Flutter = () => {
  return (
    <div>
      <>
        <Helmet>
          <title>Hire Dedicated Flutter Developer in Indore | Cerbosys</title>
          <meta
            name="keywords"
            content="hire flutter app developers, flutter development company, hire dedicated flutter developer, flutter developer, flutter developer in india"
          />
          <meta
            name="description"
            content="Hire flutter developers on flexible hiring models. Our highly-skilled flutter Developers have the ability to build your business."
          />
        </Helmet>

        <div className="mx-auto w-full md:h-[35rem]  h-96 py-12 px-4 bg-ReactjsHeader bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[35rem] h-96 mx-auto">
            <h1 className="text-white uppercase font-heading pt-2 md:text-5xl text-2xl md:mb-4 mb-5 min-w-fit">
              FLUTTER DEVELOPER
            </h1>

            <p className="text-center text-Skyblue font-subheading  md:text-lg text-xs md:w-[980px] max-w-fit">
              Strengthen the potential of your business in today's cutthroat
              market by hiring talented Flutter developers from Cerbosys.
            </p>
          </div>
          {/* Content Section Ends*/}
        </div>
      </>

      <FlutterBody />
      <FlutterForm />

    </div>
  );
};

export default Flutter;
