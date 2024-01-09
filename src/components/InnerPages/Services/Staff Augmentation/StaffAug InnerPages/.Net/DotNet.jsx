import React from 'react';

import DotNetBody from './DotNetBody';
import DotNetForm from './DotNetForm';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const DotNet = () => {
  return (
    <div>
      <>
        <Helmet>
          <title>Hire Dedicated dotnet Developer in Indore | Cerbosys</title>
          <meta
            name="keywords"
            content="hire .net developers,  hire asp .net developer, hire dot net programmers, dot net development company, .net development company, dot net development, .net application development, .net application development company, hire .net development team, .net Development team, .net Programmers, .net Programming Team, .net Team, hire .net developers"
          />
          <meta
            name="description"
            content="Hire dotnet developers on flexible hiring models. Our highly-skilled dotnet Developers have the ability to build your business."
          />
           <link
            rel="canonical"
            href="https://cerbosys.com/hire-dotnet-developer"
          />
        </Helmet>

        <div className="mx-auto w-full md:h-[35rem]  h-96 py-12 px-4 bg-ReactjsHeader bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[35rem] h-96 mx-auto">
            <h1 className="text-white uppercase font-heading pt-2 md:text-5xl text-2xl md:mb-4 mb-5 min-w-fit">
              .NET DEVELOPER
            </h1>

            <p className="text-center text-Skyblue font-subheading  md:text-lg text-xs md:w-[980px] max-w-fit">
              If you are seeking a strategic advantage in the present
              competitive climate, then hire the experienced .Net developers
              from Cerbosys to deliver the edge your business needs.
            </p>
          </div>
          {/* Content Section Ends*/}
        </div>
      </>
      <DotNetBody />
      <DotNetForm />
  
    </div>
  );
};

export default DotNet;
