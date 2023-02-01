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
  const data = [
    {
      img: educationfirst,
      title: 'Website Development',
      para: 'We provide solutions that will help you build a strong online presence for your institute, which will help attract more students and enhance your brand recognition among them as well',
    },
    {
      img: educationthird,
      title: 'ERP & LMS Software Development',
      para: 'Our ERP & LMS Software Development services will help you streamline your operations and improve efficiency across all departments, from admissions to record management.',
    },
    {
      img: educationsecond,
      title: 'Mobile App Development',
      para: 'We help you create mobile apps that can enhance the education system across the country, from assessment purposes to sharing lesson plans with other teachers across different districts or countries as part of virtual collaboration.',
    },
    {
      img: educationfouth,
      title: 'Educational Digital Marketing Solutions',
      para: "We provide Digital Marketing Solutions that will help your school reach more students, increase enrollment rates, and improve retention rates by making sure you're reaching out to the right people at the right time.",
    },
  ];
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
            <div className="grid grid-flow-row grid-rows-2 md:grid-flow-col gap-y-20  gap-x-72 mt-12">
              {data &&
                data.map((curent, ind) => {
                  return (
                    <>
                      <div key={ind} className="">
                        <img src={curent.img} alt="iomg" />
                        <div className="mt-8">
                          <p className="text-grey   font-heading">
                            {curent.title}
                          </p>
                          <p className="font-content  mt-4  text-justify">
                            {curent.para}
                          </p>
                        </div>
                      </div>
                    </>
                  );
                })}
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
        <div className="flex flex-wrap md:flex-nowrap justify-between   gap-10 p-6">
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
      {/*end Learn and have some fun */}
    </div>
  );
};

export default EducationBody;
