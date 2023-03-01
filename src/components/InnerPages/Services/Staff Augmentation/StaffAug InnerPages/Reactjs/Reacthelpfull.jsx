import React from 'react';
import Heading from '../Heading';

const Reacthelpfull = () => {
  return (
    <>
      <div>
        <div className="max-w-[1240px] mx-auto px-3 py-8">
          <Heading title="Helpful Resources" />
          <div className="flex flex-row flex-wrap justify-start gap-4 lg:gap-48 mt-3">
            <div className="font-heading text-Primary pt-3">
              <p>Staff Augmentation :</p>
              <p>The Best Way To </p>
              <p>Enhance Your Team</p>
              <p>With IT Talents</p>
            </div>
            <div className="font-heading text-Primary pt-3">
              <p>Blog 2 :</p>
              <p>Loreum Contact the </p>
              <p>company’s </p>
              <p>representative</p>
            </div>
            <div className="font-heading text-Primary pt-3">
              <p>Blog 3 :</p>
              <p>Loreum Discuss the </p>
              <p>details</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reacthelpfull;
