import React from 'react';
import icon1img from '../../../../assets/innerpage/healthcare/icon1img.png';
import icon2img from '../../../../assets/innerpage/healthcare/icon2img.png';
import icon3img from '../../../../assets/innerpage/healthcare/icon3img.png';
import icon4img from '../../../../assets/innerpage/healthcare/icon4img.png';
import healthdrimg from '../../../../assets/innerpage/healthcare/healthdrimg.png';
import tickicon2 from '../../../../assets/innerpage/healthcare/tickicon2.png';
import HealthCare from './HealthCare';
import { MdVerified } from 'react-icons/md';
const Managmentsys = () => {
  //   let data;
  //   switch (type) {
  //     case 'user':
  //       data = {
  //         img: <img src={icon1img} alt="img" className="w-full" />,
  //         title: 'Easyto use',
  //         para: 'A quicker access to the integrated high end hospital solution by making it user-friendly. Ensuring top notch patient care with just a single click and is manageable across all platforms..',
  //       };

  //     case 'Customizable':
  //       data = {
  //         img: <img src={icon1img} alt="img" className="w-full" />,
  //         title: 'Easy to use',
  //         para: 'A quicker access to the integrated high end hospital solution by making it user-friendly. Ensuring top notch patient care with just a single click and is manageable across all platforms..',
  //       };
  //     default:
  //       break;
  //   }
  const items = [
    {
      icon: tickicon2,
      para: 'Automation & artificial intelligence to expedite diagnosis and enable predictive analysis.',
    },
    {
      icon: tickicon2,
      para: 'Faster access to data and increased accuracy when compared to manual record-keeping.',
    },
    {
      icon: tickicon2,
      para: 'analytics for increased insights into the operations & data.',
    },
    {
      icon: tickicon2,
      para: 'Telehealth services for easy access to remote healthcare.',
    },
    {
      icon: tickicon2,
      para: 'Online healthcare and life sciences consulting services improves patient experience with more efficient care.',
    },
  ];
  return (
    <>
      <div className="">
        <div className=" bg-slate-200 ">
          {/* benefit section start */}
          <div className="w-full py-10 px-8">
            <h1 className="font-heading uppercase pt-2 md:text-3xl text-xl md:mb-10 min-w-fit text-center">
              <span className="text-Primary">Benefits</span> of our Healthcare
              Management System
            </h1>
            <div className="flex  flex-wrap  justify-between pt-4 p-5">
              <div className="  rounded-md p-4 justify-center text-center w-[100%]  lg:w-[25%]">
                <div className="">
                  <div className="mx-auto text-center   ">
                    <img
                      src={icon2img}
                      alt="img"
                      className="w-32 mx-auto   hover:scale-125 duration-300 delay-200"
                    />
                  </div>

                  <div className="w-full">
                    <p className=" mt-3 text-lg font-heading ">Easy to use</p>

                    <p className="mt-3 text-justify leading-9 md:mx-4 mx-5  ">
                      A quicker access to the integrated high end hospital
                      solution by making it user-friendly. Ensuring top notch
                      patient care with just a single click and is manageable
                      across all platforms.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 w-[100%]  lg:w-[25%]">
                {' '}
                <div className="text-center ">
                  <div className="mx-auto text-center ">
                    <img
                      src={icon1img}
                      alt="img"
                      className="w-24 mx-auto  hover:scale-125 duration-300 delay-200"
                    />
                  </div>
                  <p className="mt-3 text-lg font-heading ">Customizable</p>
                  <p className=" mt-3 text-justify leading-9 md:mx-4 mx-5">
                    Evolved from the cornerstone of technology, make the most
                    out of our highly flexible solution. Experience the
                    customized usage of our product that makes you deal with the
                    primary issues.
                  </p>
                </div>
              </div>
              <div className="p-4 w-[100%]  lg:w-[25%]">
                {' '}
                <div className="text-center">
                  <div className="mx-auto text-center">
                    <img
                      src={icon4img}
                      alt="img"
                      className="w-24 mx-auto hover:scale-125 duration-300 delay-200 "
                    />
                  </div>
                  <p className=" mt-3 text-lg font-heading">Responsive</p>
                  <p className=" mt-3 text-justify leading-9 md:mx-4 mx-5 ">
                    Flying up to the expectations of each client and improves
                    the user experience with a responsive layout. Giving you the
                    best view on all devices with no worries of speed and
                    efficiency.
                  </p>
                </div>
              </div>
              <div className="p-4 w-[100%]  lg:w-[25%]">
                {' '}
                <div className="text-center">
                  <div className="mx-auto text-center">
                    <img
                      src={icon3img}
                      alt="img"
                      className="w-16 mx-auto  hover:scale-125 duration-300 delay-200"
                    />
                  </div>
                  <p className="mt-3 text-lg font-heading">Premium</p>
                  <p className=" mt-3 text-justify leading-9 md:mx-4 mx-5 ">
                    Try out our tried and tested product with more added
                    features in the premium version. Get the upgraded version
                    today itself and join the automated healthier community.
                  </p>
                </div>{' '}
              </div>
            </div>
          </div>
        </div>

        {/* benefit section end */}

        {/* product serviers section */}
        <div className=" w-full py-6 px-4 mt-4">
          <h1 className="font-heading uppercase pt-2 md:text-3xl text-xl md:mb-10 min-w-fit ">
            <span className="text-Primary"> Products & Services </span>
            &nbsp;we offer
          </h1>
          <div className="flex  flex-wrap  justify-between pt-4">
            <div className="p-4 w-[100%]  lg:w-[25%] relative hover:bg-Primary hover:text-white">
              <p className="mt-3 text-lg font-heading">
                Mobile App Development
              </p>
              <div className="absolute bottom-0 top-20 right-3 hidden md:block bg-Primary w-1 h-28">
                {' '}
              </div>
              <p className="mt-3 pr-3 ">
                Our Doctor's Appointment and Medicine Ecommerce apps are the
                best in the market, and we provide the service at a very
                affordable price. We also offer Lab Test Booking apps for
                hospitals and labs for managing their scheduling and inventory
                management.
              </p>
            </div>
            <div className="p-4 w-[100%]  lg:w-[25%] relative hover:bg-Primary hover:text-white">
              <p className="mt-3 text-lg font-heading">Website Development</p>
              <div className="absolute bottom-0 top-20 right-3 hidden md:block  bg-Primary w-1 h-28">
                {' '}
              </div>
              <p className="mt-3 pr-3 ">
                Our website development services are designed to help hospital
                management and healthcare companies achieve their goals. Our
                team of experts has years of experience in this industry, and we
                can help you build a site that will be both easy to use and
                SEO-friendly.
              </p>
            </div>
            <div className="p-4 w-[100%]  lg:w-[25%] relative hover:bg-Primary hover:text-white">
              <p className="mt-3 text-lg font-heading">UI/UX App Development</p>
              <div className="absolute bottom-0 top-20 right-3 hidden md:block  bg-Primary w-1 h-28">
                {' '}
              </div>
              <p className="mt-3 pr-3 ">
                We develop apps for the healthcare sector which are scalable and
                flexible to meet the needs of different users. Our unique
                approach to developing apps is based on a blend of user
                experience and design.
              </p>
            </div>
            <div className="p-4 w-[100%]  lg:w-[25%] hover:bg-Primary hover:text-white">
              <p className="mt-3 text-lg font-heading">CRM Software</p>

              <p className="mt-3 pr-3 ">
                We developed CRM Software for the healthcare sector, the
                healthcare sector across the globe to streamline their
                operations and deliver better services to their patients. Our
                goal is to provide you with the best tools possible so that you
                can focus on what really matters: your patients.
              </p>
            </div>
          </div>
        </div>
        {/*end product serviers section */}
        {/*start Technology in Healthcare & Life Science industry  */}
        <div className=" bg-slate-200 ">
          <div className="w-full py-10 px-8">
            <h1 className=" text-Primary uppercase font-heading pt-2 md:text-3xl text-xl md:mb-10 min-w-fit">
              Importance of Technology in{' '}
              <span className="text-Green">
                Healthcare & Life Science industry
              </span>
            </h1>
            <div className="flex flex-wrap md:flex-nowrap justify-between content-center  gap-10 px-0 md:px-5">
              {/* w-[100%] md:w-[50%] flex flex-col */}
              <div className="">
                {items &&
                  items.map((curent, ind) => {
                    return (
                      <>
                        <div className="flex py-3" key={ind}>
                          <div className="flex  gap-8">
                            <div className="">
                              <img
                                src={curent.icon}
                                alt="img"
                                className="w-16 md:w-18  object-contain"
                              />
                            </div>
                            <div className="self-center justify-self-start w-[80%]">
                              <p>{curent.para}</p>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
              </div>
              {/* \w-[100%] md:w-[50%] */}
              <div className="px-2 self-center">
                <img src={healthdrimg} alt="img" className="w-full" />
              </div>
            </div>
          </div>
        </div>
        {/* end Technology in Healthcare & Life Science industry   */}
      </div>
    </>
  );
};

export default Managmentsys;
