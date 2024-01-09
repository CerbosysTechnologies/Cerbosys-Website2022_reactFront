import React from 'react';

import CodeIgniterBody from './CodeIgniterBody';
import CodeIgniterForm from './CodeIgniterForm';
import { Helmet } from 'react-helmet';

const CodeIgniter = () => {
  return (
    <div>
      <>
        <Helmet>
          <title>
            Hire Dedicated CodeIgniter Developer in Indore | Cerbosys
          </title>
          <meta
            name="keywords"
            content="hire codeigniter developers, hire remote codeIgniter developers,  hire codeigniter expert, codeigniter programmers in india, codeigniter framework development, codeigniter developers, hire codeigniter developers in india, codeigniter expert"
          />
          <meta
            name="description"
            content="Hire codeigniter developers on flexible hiring models. Our highly-skilled codeigniter Developers have the ability to build your business."
          />
           <link
            rel="canonical"
            href="https://cerbosys.com/hire-codeIgniter-developer"
          />
        </Helmet> 

        <div className="mx-auto w-full md:h-[35rem]  h-96 py-12 px-4 bg-ReactjsHeader bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[35rem] h-96 mx-auto">
            <h1 className="text-white uppercase font-heading pt-2 md:text-5xl text-2xl md:mb-4 mb-5 min-w-fit">
              CodeIgniter
            </h1>

            <p className="text-center text-Skyblue font-subheading  md:text-lg text-xs md:w-[980px] max-w-fit">
              Set your company up for achievement in the competitive environment
              by hiring React.Js specialists from Cerbosys.
            </p>
          </div>
          {/* Content Section Ends*/}
        </div>
      </>
      <CodeIgniterBody />
      <CodeIgniterForm />

    </div>
  );
};

export default CodeIgniter;
