import React from 'react';
import educationmobicon from '../../../../assets/innerpage/education/educationmob.svg';
import educationleft from '../../../../assets/innerpage/education/educationleft.png';
// import educationbusinessicon from '../../../../assets/innerpage/education/educationimage.svg';
import educationfirst from '../../../../assets/innerpage/education/educationfirst.png';
import educationsecond from '../../../../assets/innerpage/education/educationsecond.png';
import educationthird from '../../../../assets/innerpage/education/educationthird.png';
import educationfouth from '../../../../assets/innerpage/education/educationfouth.png';
import slider1 from '../../../../assets/innerpage/education/slider1.png';
import multymob from '../../../../assets/innerpage/education/multymob.png';

import Educattionsilder from './Educattionsilder';

import Tabscon from './educationtabs/Tabscon';

const EducationBody = () => {
  return (
    <div>
      <div className="mx-auto w-full py-10 px-4 ">
        <div className="max-w-[1240px] mx-auto">
          {/* Image Section */}
          <div className="flex flex-wrap md:flex-nowrap justify-between items-center  gap-10 p-6">
            {/* Mobile Image */}
            <div className="p-3 md:w-[50%] w-[100%]">
              <img
                src={educationleft}
                alt="Education Mobile"
                // className="md:h-[30rem]"
                className="w-full"
              />
            </div>
            {/* Mobile Image */}

            {/* Image Section Ends*/}

            {/* Side */}
            <div className=" md:w-[50%] w-[100%]">
              <h2 className="text-Primary md:text-3xl  mb-6 text-xl  font-heading">
                EDUCATION
              </h2>

              <p className="font-content   mt-6 text-justify">
                The educational industry has been at the forefront of technology
                for decades, and it's no surprise that schools have been on the
                cutting edge of innovation.
              </p>
              <p className="font-content   mt-6 text-justify">
                However, not all educational institutions can take full
                advantage of these developments. Many schools aren't even aware
                that they need an IT solution to help them run efficiently and
                effectively.
              </p>
            </div>
            {/* Side Image*/}
          </div>
          <p className="font-content   px-8 text-justify ">
            This is where Cerbosys comes in! We specialize in providing IT
            solutions for educational institutes across the globe.Our services
            include website development, mobile app development, ERP & CRM
            software development.
          </p>

          {/* Bullet Section */}
          <div className="mt-12">
            {' '}
            <h2 className="text-Primary md:text-3xl text-center uppercase  mb-6 text-xl  font-heading">
              Services
              <span className="text-black md:text-3xl  mb-6 text-xl  font-heading">
                &nbsp;we can offer
              </span>
            </h2>{' '}
            <div className="flex md:flex-nowrap flex-wrap gap-y-20  gap-x-72 mt-12">
              <div className="">
                <img src={educationfirst} alt="iomg" className="w-[230px]" />
                <div className="">
                  <p className="text-grey   font-heading">
                    Website Development
                  </p>
                  <p className="font-content  mt-4  text-justify">
                    We provide solutions that will help you build a strong
                    online presence for your institute, which will help attract
                    more students and enhance your brand recognition among them
                    as well.
                  </p>
                </div>
              </div>
              <div className="">
                <img src={educationsecond} alt="iomg" className="w-[230px] " />
                <div className="">
                  <p className="text-grey   font-heading">
                    Mobile App Development
                  </p>
                  <p className="font-content  mt-4  text-justify">
                    We help you create mobile apps that can enhance the
                    education system across the country, from assessment
                    purposes to sharing lesson plans with other teachers across
                    different districts or countries as part of virtual
                    collaboration.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex md:flex-nowrap flex-wrap gap-y-20  gap-x-72 mt-12">
              <div className="">
                <img src={educationthird} alt="iomg" className="w-[230px] " />
                <div className="">
                  <p className="text-grey   font-heading">
                    ERP & LMS Software Development
                  </p>
                  <p className="font-content  mt-4  text-justify">
                    Our ERP & LMS Software Development services will help you
                    streamline your operations and improve efficiency across all
                    departments, from admissions to record management.
                  </p>
                </div>
              </div>
              <div className="">
                <img src={educationfouth} alt="iomg" className="w-[230px] " />
                <div className="">
                  <p className="text-grey   font-heading">
                    Educational Digital Marketing Solutions
                  </p>
                  <p className="font-content  mt-4  text-justify">
                    We provide Digital Marketing Solutions that will help your
                    school reach more students, increase enrollment rates, and
                    improve retention rates by making sure you're reaching out
                    to the right people at the right time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bullet Section Ends*/}
      {/* slider section */}
      <Educattionsilder />
      {/* end slider section */}
      {/*start tabs */}
      <Tabscon />
      {/*end tabs */}
      {/*start Learn and have some fun */}
      <div className="bg-Primary">
        <div className="max-w-[1240px] mx-auto ">
          <div className="flex flex-wrap md:flex-nowrap justify-between   gap-10 p-3">
            {/* Mobile Image */}
            <div className="p-3 md:w-[50%] w-[100%]">
              <img
                src={multymob}
                alt="Education Mobile"
                // className="md:h-[30rem]"
                className="w-full md:p-3"
              />
            </div>
            {/* Mobile Image */}

            {/* Image Section Ends*/}

            {/* Side */}
            <div className=" md:w-[50%] w-[100%] py-7">
              <h2 className="text-white md:text-3xl  mb-6 text-xl  font-heading">
                Learn and have some fun
              </h2>

              <ul className="text-white list-disc px-5">
                <li className="mt-5"> Online learning platforms</li>
                <li className="mt-5">AI & virtual tutors</li>
                <li className="mt-5">Cloud-based assessments</li>
                <li className="mt-5"> Immersive & interactive technologies</li>
                <li className="mt-5">Data-driven approaches</li>
                <li className="mt-5">
                  Online portfolios and collaboration tools
                </li>
              </ul>
            </div>
            {/* Side Image*/}
          </div>
        </div>
      </div>
      {/*end Learn and have some fun */}
    </div>
  );
};

export default EducationBody;
