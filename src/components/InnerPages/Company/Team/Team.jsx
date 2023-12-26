import React from 'react';
import { Helmet } from 'react-helmet';

import Teambody from './Teambody';
import TeamForm from './TeamForm';

const Team = () => {
  return (
    <div>
      <>
        <Helmet>
          <title>Meet Our Team |Cerbosys</title>
          <meta
            name="keywords"
            data-react-helmet="true"
            content="Founder and Managing Director, our team, young, dynamic, talented individuals, UI/UX and Graphic Designer, Front end Developer, Marketing Executive, Digital Marketer"
          />
          <meta
            name="description"
            data-react-helmet="true"
            content="Cerbosys’s progressive growth is defined by a zealous and committed leadership team of intellectual leaders. Explore their experience, expertise, and responsibilities. "
          />
          {/* <link rel="canonical" href="https://cerbosys.com/team" /> */}
        </Helmet>

        <div className="mx-auto w-full md:h-[48rem] bg-TeamCerbosys h-96 py-12 px-4 bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[30rem] h-96 mx-auto">
            <h1 className="text-white font-heading py-2 md:text-7xl text-2xl md:mb-48 mb-28">
              Meet Our Team
            </h1>
          </div>
          {/* Content Section Ends */}
        </div>
      </>
      <Teambody />
      <TeamForm />
    </div>
  );
};

export default Team;
