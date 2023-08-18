import React from 'react';
import Navbar from '../../../Navbar/Navbar';
import Footer from '../../../Common/Component/Footer';
import EducationBody from './EducationBody';
import EducationForm from './EducationForm';
import { Helmet } from 'react-helmet';

const Education = () => {
  return (
    <div>
      <>
        <Helmet>
          <title>
            Digital marketing for educational institutions Indore, India
          </title>
          <meta
            name="keywords"
            content="school & college educational erp, e-learning mobile app development, e learning mobile app design, education app developers india, online learning web app development, online learning web app development, learning games development, educational app development india"
          />

          <meta
            name="description"
            content="We provide professional Education Apps Services to small-leading educational organizations on iOS & Android platforms. Engaging digital marketing for- schools, colleges, universities & the education industry"
          />
          {/* <link rel="canonical" href="https://cerbosys.com/education" /> */}
        </Helmet>
        {/* <Navbar /> */}
        <div className="selection:bg-Green selection:text-white mx-auto w-full md:h-[36rem] bg-EducationHeader h-96 py-12 px-4 bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[30rem] h-96 mx-auto">
            <h1 className="text-white font-heading pt-2 md:text-5xl text-2xl md:mb-5  min-w-fit">
              EDUCATION
            </h1>

            <p className="text-center text-Skyblue font-subheading  md:text-lg text-xs md:w-[980px] max-w-fit">
              We provide an all-around IT Solution for All Educational
              Institutes.
            </p>
            <p className="mt-4 text-center text-Skyblue font-subheading  md:text-lg text-xs md:w-[980px] max-w-fit">
              We help you find the IT solutions you need to make your
              institution run smoothly and<br></br> efficiently, so you can
              focus on what matters most: educating students and helping them
              succeed.
            </p>
          </div>
          {/* Content Section Ends */}
        </div>
      </>
      <div className="selection:bg-Green selection:text-white">
        <EducationBody />
        <EducationForm />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Education;
