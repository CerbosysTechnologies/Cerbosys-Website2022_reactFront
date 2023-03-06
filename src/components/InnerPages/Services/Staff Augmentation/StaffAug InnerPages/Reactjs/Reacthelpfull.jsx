import React from 'react';
import { Link } from 'react-router-dom';
import Heading from '../Heading';

const Reacthelpfull = () => {
  return (
    <>
      <div>
        <div className="max-w-[1240px] mx-auto px-3 py-8">
          <Heading title="Helpful Resources" />
          <div className="flex flex-row flex-wrap justify-start gap-4 lg:gap-5 mt-3">
            <div className="font-heading text-Primary pt-3 w-[32%]">
              <Link to="/Blog">
                <p>
                  Staff Augmentation : The Best Way To Enhance Your Team With IT
                  Talents
                </p>
              </Link>
            </div>
            <div className="font-heading text-Primary pt-3 w-[32%]">
              <Link to="/Blog">
                <p>
                  How To Manage Early-Stage Employees As Your Business Scales Up
                </p>
              </Link>
              {/* <p>Loreum Contact the </p>
              <p>company’s </p>
              <p>representative</p> */}
            </div>
            <div className="font-heading text-Primary pt-3 w-[32%]">
              <Link to="/Blog">
                <p>How to hire dedicated dot net developer?</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reacthelpfull;
