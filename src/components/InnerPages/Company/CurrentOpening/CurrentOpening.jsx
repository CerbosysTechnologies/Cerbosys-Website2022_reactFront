import React from 'react';

import CurrentOpeningBody from './CurrentOpeningBody';
import CurrentOpeningForm from './CurrentOpeningForm';
import { Helmet } from 'react-helmet';

const CurrentOpening = () => {
  return (
    <div>
      <>
        <Helmet>
          <title>
            Careers- web development & digital marketing jobs in Indore |
            cerbosys
          </title>
          <meta
            name="keywords"
            content="healthy work environment, innovative business solution provider, training & development sessions, performance linked incentives, reward programs, open positions, career"
          />
          <meta
            name="description"
            content="Join cerbosys & lead innovations in digital marketing, ecommerce development. Make the choice that will build your future.
            Meet future coworkers who inspire you..
            "
          />
          <link rel="canonical" href="https://cerbosys.com/current-opening" />
        </Helmet>

        <div className="mx-auto w-full md:h-[30rem]  h-96 py-12 px-4 bg-CurrentOpeningBackground bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[30rem] h-96 mx-auto">
            <h1 className="text-white font-heading py-2 md:text-3xl text-xl mb-2">
              Current Openings
            </h1>

            <p className="text-center text-white font-subheading   md:text-lg text-xs md:w-[980px] max-w-fit">
              Join us: We are one of the most well-versed & innovative business
              solution provider companies in India.
            </p>
          </div>
          {/* Content Section Ends */}
        </div>
      </>
      <CurrentOpeningBody />
      <CurrentOpeningForm />
    </div>
  );
};

export default CurrentOpening;
