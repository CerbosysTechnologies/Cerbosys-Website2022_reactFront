import React from 'react';
import overviewtrack from '../../../../assets/innerpage/overview/overviewroad.svg';

const OverviewBody = () => {
  return (
    <div>
      <div className="mx-auto w-full py-16 px-2 bg-OverviewBackgroundBody bg-no-repeat bg-center bg-cover">
        <div className="max-w-[1240px] mx-auto ">
          <p className="font-heading md:text-3xl text-xl text-center mb-20">
            Big Journeys Begin with Small Steps
          </p>
        </div>

        {/* Track */}
        <div className="">
          <img
            src={overviewtrack}
            alt="Mobile App Development Services"
            className="md:w-10/12 w-11/12"
          />
        </div>
        {/* Track Ends */}
      </div>
      <div className="mx-auto md:w-[1240px]  w-80 font-content  my-5 text-justify text-xl md:px-0 px-4">
        With excitement, energy & a healthy workspace, we began this business.
        Our accomplishments have been a combined exertion of our digital
        marketing team with the software & web development team, lead generation
        team, and designing team. After innovatively working for 5 years, we
        managed to build up our new headquarters in the UK; moreover, "School &
        College ERP" is now an effectively established venture
      </div>
    </div>
  );
};

export default OverviewBody;

//Previous Chart

