import React from 'react';
import transportmobicon from '../../../../assets/innerpage/transport/transportmob.svg';
import transportbusinessicon from '../../../../assets/innerpage/transport/transportimage.svg';
import transportimg from '../../../../assets/innerpage/transport/transportimg.png';
import transporticon from '../../../../assets/innerpage/transport/transporticon.png';
import transporticon4 from '../../../../assets/innerpage/transport/transporticon4.png';
import transporticon1 from '../../../../assets/innerpage/transport/transporticon1.png';
import transporticon2 from '../../../../assets/innerpage/transport/transporticon2.png';
import Ecommercesilder from '../Ecommerce/Ecommercesilder';
import transportright from '../../../../assets/innerpage/transport/transportright.png';
export const TransportBody = () => {
  const data = [
    {
      img: transporticon1,
      title: 'UI/UX Design',
    },
    {
      img: transporticon2,
      title: 'Mobile App Development',
    },
    {
      img: transporticon,
      title: 'Data Analytics',
    },
    {
      img: transporticon4,
      title: 'Custom Software Development',
    },
  ];
  const items = [
    {
      title: '01',
      para: 'Advanced fleet management solutions which give operators access to real-time tracking of vehicles, reducing downtime and increasing reliability',
    },
    {
      title: '02',
      para: ' Optimized route planning through the use of AI, enabling companies to reduce miles traveled and save money on fuel.',
    },
    {
      title: '03',
      para: "Automated shipping notifications that keep customers updated on when their products are due to arrive - so everyone knows exactly what's happening every step of the way.",
    },
  ];
  return (
    <div>
      <div className="mx-auto w-full py-10 px-4 ">
        <div className="max-w-[1240px] mx-auto">
          {/* Image Section */}
          <div className=" mt-3">
            <div className="flex flex-wrap justify-center gap-10 px-4 md:px-8">
              <div className="flex justify-center px-4">
                <img
                  src={transportimg}
                  alt="Ecommerce Business"
                  // className="w-full"
                  className="md:h-[24rem] "
                  // className="md:h-[22rem] w-full"
                />
              </div>
              <div className="">
                <h2 className="text-Secondary md:text-3xl text-xl mt-4 font-heading mb-6">
                  TRANSPORT <span className="text-Green"> &</span> LOGISTICS
                </h2>
                <p className="font-content md:w-[33rem]  mt-6 text-justify">
                  In the transport and logistics industry, IT has already made a
                  huge impact. It is expected to continue the growth trend in
                  the coming years as more and more businesses adopt technology
                  to improve efficiency and deliver better customer service.
                </p>
                <p className="font-content md:w-[33rem]  mt-6 text-justify">
                  The industry is also experiencing an increase in the number of
                  global supply chains. The need for global visibility and
                  traceability has become increasingly important for companies
                  operating in today's world.
                </p>
              </div>
            </div>
          </div>

          {/* Bullet Section */}
          <div className="flex flex-wrap flex-col mx-auto">
            <div className="font-heading md:text-3xl text-xl mt-10 ">
              <h2 className="text-Secondary md:text-3xl uppercase text-xl mt-5 font-heading mb-4">
                The following are some of the{' '}
                <span className="text-Green"> trends</span> that have emerged in
                recent years:
              </h2>
            </div>

            <ul className="text-justify font-content  mt-4 list-disc md:px-10 px-5">
              <li>
                Monitoring and tracking of goods from point of origin to
                destination.
              </li>

              <li>
                Availability of real-time information on vehicle locations,
                routes, progress, and maintenance activities.
              </li>

              <li>
                Improved customer service through the use of mobile devices or
                tablets.
              </li>
            </ul>
          </div>
          {/* Bullet Section Ends*/}
        </div>
      </div>
      {/* start Our Products and Services*/}
      <div className="bg-Primary h-fit-content md:h-[500px] py-8">
        <div className="max-w-[1240px] mx-auto ">
          <h2 className="text-white uppercase text-center md:text-3xl text-xl mt-5 font-heading mb-4">
            Our Products and Services
          </h2>
          <p className="text-white text-center font-content  mt-6 ">
            {' '}
            As part of our service portfolio, we provide an end-to-end software
            development lifecycle and meet a range of business needs.
          </p>
          <div className="flex text-white flex-wrap text-center  md:flex-nowrap  justify-between gap-5 mt-8 px-8">
            {data &&
              data.map((curent, ind) => {
                return (
                  <>
                    <div className="w-full mx-auto" key={ind}>
                      <div className="mx-auto">
                        <img
                          src={curent.img}
                          alt="img"
                          className="md:h-[12rem] mx-auto"
                        />
                      </div>
                      <p className="text-white text-center font-subheading  mt-6">
                        {curent.title}
                      </p>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
      {/* end Our Products and Services*/}
      {/* start Importance of Technology */}
      <div className="max-w-[1240px] mx-auto ">
        <div className="py-8 px-6 md:px-10 ">
          <h2 className=" uppercase text-center md:text-3xl text-xl mt-5 font-heading mb-4">
            <span className="text-Primary">Importance</span> of Technology in
            the Transport & Logistics industry
          </h2>
          <div className="flex text-white flex-wrap text-center  md:flex-nowrap  justify-between gap-3 mt-6 px-0 md:px-8 py-12">
            {items &&
              items.map((curent, ind) => {
                return (
                  <>
                    <div
                      className="mx-auto  relative border-2 border-Primary rounded md:w-[300px] h-42 py-8 px-6 mt-12"
                      key={ind}
                    >
                      <p className="text-black text-center font-subheading  mt-6">
                        {curent.para}
                      </p>
                      <div
                        className="bg-white
                    flex justify-center items-center z-10  border-2 border-Primary rounded-full  w-16 h-16 absolute top-[-30px] left-0 right-0 mx-auto"
                      >
                        <h4 className="text-Primary  font-heading text-3xl">
                          {curent.title}
                        </h4>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
      {/* end Importance of Technology */}
      {/*  start slider sections */}
      <div className="mx-auto  w-full h-fit-content md:h-[36rem] bg-EcommersBodybg  py-12  bg-cover md:bg-top bg-center">
        <div className="max-w-[1240px] mx-auto ">
          {' '}
          <div className="px-8 md:px-12">
            <div>
              {/* "font-heading md:text-3xl text-xl mt-10 text-center text-Primary" */}
              <p className="text-white text-center uppercase md:text-3xl text-xl mt-4 font-heading mb-6">
                Our Portfolio
              </p>
            </div>
            <Ecommercesilder />
          </div>
        </div>
      </div>
      {/*end slider sections */}
      {/* start your transport & logistics business? */}
      <div className=" my-12 ">
        <h2 className="text-Secondary uppercase md:text-3xl text-xl mt-4 min-w-fit font-heading text-center  mb-6">
          How Cerbosys can help your transport & logistics business?
        </h2>
        <div className="flex flex-wrap justify-center gap-10 px-4 md:px-8">
          <div className="flex justify-center px-4">
            <div>
              <p className="font-content md:w-[33rem]  mt-6 text-justify">
                We are a team of highly skilled professionals with 5+ years of
                experience in the field of IT.
              </p>
              <p className="font-content md:w-[33rem]  mt-6 text-justify">
                - We have developed a number of software products for the
                transport and logistics industry. They are designed to solve
                problems that our clients face on a daily basis.
              </p>
              <p className="font-content md:w-[33rem]  mt-6 text-justify">
                - Our products are not just tools for managing operations: they
                are also useful as communication channels between people, which
                can be especially important in today's business environment.
              </p>
              <p className="font-content md:w-[33rem]  mt-6 text-justify">
                - Our systems are easy to use and reliable, allowing you to
                focus on your business instead of worrying about technical
                problems.
              </p>
            </div>
          </div>
          <div className="">
            <img
              src={transportright}
              alt="Ecommerce Business"
              // className="w-full"
              className="md:h-[24rem] "
              // className="md:h-[22rem] w-full"
            />
          </div>
        </div>
      </div>
      {/* end your transport & logistics business? */}
    </div>
  );
};
