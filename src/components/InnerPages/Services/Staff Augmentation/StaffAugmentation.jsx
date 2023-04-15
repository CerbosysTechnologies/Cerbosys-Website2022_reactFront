import React from 'react';

import { Link } from 'react-router-dom';
import StaffAugmentationDesc from './StaffAugmentationDesc';
import StaffAugmentationDiagram from './StaffAugmentationDiagram';
import StaffAugmentationProcess from './StaffAugmentationProcess';
import StaffAugmentationForm from './StaffAugmentationForm';
import { Helmet } from 'react-helmet';

const StaffAugmentation = () => {
  return (
    <div>
      <>
        <Helmet>
          <title>
            Staff augmentation services & staffing solutions- cerbosys
          </title>
          <meta
            name="keywords"
            content="staff augmentation services, staff augmentation, it staff augmentation, it staff augmentation services, it staff augmentation solutions, onboard new team members"
          />
          <meta
            name="description"
            content="Looking for Hire Remote Developers? Hire a dedicated web developer on a contract basis, or work with my dedicated team at GraffersID to build your software."
          />
        </Helmet>
     
        <div className="selection:bg-Green selection:text-white mx-auto w-full md:h-[30rem]  h-96 py-12 px-4 bg-WebDevelopment bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[30rem] h-96 mx-auto">
            <p className="text-white font-heading py-2 md:text-3xl text-xl mb-2">
              Staff Augmentation
            </p>

            <p className="text-white font-heading py-2 md:text-xs text-xs mb-8 md:w-[480px] text-justify">
              Staff augmentation is a process by which a business can bring in
              additional employees to help with specific tasks or projects.
              There are several different ways to go about staff augmentation,
              so it's important to choose the option that best fits your needs.
            </p>

            <Link to="/contact-us">
              <button
                className="bg-Primary rounded-full font-heading md:px-5 md:py-2 md:text-lg
              text-white uppercase px-3 py-1.5 text-xs mb-6"
              >
                Contact Us
              </button>
            </Link>
          </div>
          {/* Content Section Ends*/}
        </div>
        <div className="selection:bg-Green selection:text-white">
          <StaffAugmentationDesc />
          <StaffAugmentationDiagram />
          <StaffAugmentationProcess />
          <StaffAugmentationForm />
        </div>
      </>
    </div>
  );
};

export default StaffAugmentation;
