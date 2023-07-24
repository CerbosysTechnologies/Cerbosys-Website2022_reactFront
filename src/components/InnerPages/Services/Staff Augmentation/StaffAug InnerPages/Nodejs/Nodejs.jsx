import React from 'react';
import NodejsBody from './NodejsBody';
import NodejsForm from './NodejsForm';
import { Helmet } from 'react-helmet';

const Nodejs = () => {
  return (
    <div>
      <>
        <Helmet>
          <title>Hire Dedicated NodeJS Developer in Indore | Cerbosys</title>
          <meta
            name="keywords"
            content="hire nodejs dveloper, hire remote nodejs developers, hire dedicated Node.js developers in india"
          />
          <meta
            name="description"
            content="Hire NodeJS developers on flexible hiring models. Our highly-skilled NodeJS Developers have the ability to build your business."
          />
          <link
            rel="canonical"
            href="https://cerbosys.com/hire-node-js-developer"
          />
        </Helmet>

        <div className="mx-auto w-full md:h-[35rem]  h-96 py-12 px-4 bg-NodejsHeader bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[35rem] h-96 mx-auto">
            <h1 className="text-white uppercase font-heading pt-2 md:text-5xl text-2xl md:mb-4 mb-5 min-w-fit">
              NODE.JS
            </h1>

            <p className="text-center text-Skyblue font-subheading  md:text-lg text-xs md:w-[980px] max-w-fit">
              Position your business for success in the marketplace by hiring
              NodeJS developers from Cerbosys.
            </p>
          </div>
          {/* Content Section Ends*/}
        </div>
      </>
      <NodejsBody />
      <NodejsForm />
    </div>
  );
};

export default Nodejs;
