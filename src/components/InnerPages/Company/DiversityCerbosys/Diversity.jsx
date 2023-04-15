import React from 'react';
import { Helmet } from 'react-helmet';
import DiversityBody from './DiversityBody';
import DiversityForm from './DiversityForm';

const Diversity = () => {
  return (
    <div>
      <>
        <Helmet>
          <title>Cerbosys values diversity and inclusion</title>
          <meta
            name="keywords"
            content="exciting place to work, our diversity, our vision, recruiting and retaining, value and ethics"
          />
          <meta
            name="description"
            content="Cerbosys is committed to diversity and inclusion. Everyone is encouraged to bring their whole self to work, and we build a culture of diversity and creativity."
          />
        </Helmet>
        <div className="mx-auto w-full md:h-[43rem]  h-96 py-12 px-4 bg-DiversityBackground bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[30rem] h-[30rem] mx-auto">
            <h1 className="text-white font-heading py-2 md:text-5xl text-xl md:mt-40">
              Diversity
            </h1>

            <p className="text-white font-subheading py-2  md:w-[50rem] text-justify md:my-20 md:mb-10 mb-28 ">
              Cerbosys values diversity and inclusion. We encourage all members
              of the team to be themselves, bring their whole selves to work,
              and shape a creative and inclusive culture.
            </p>
          </div>
          {/* Content Section Ends */}
        </div>

        <DiversityBody />
        <DiversityForm />
      </>
    </div>
  );
};

export default Diversity;
