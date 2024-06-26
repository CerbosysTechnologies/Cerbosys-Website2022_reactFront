import React from 'react';
import mobileicon from '../../assets/services/mobile_app_development.svg';
import webdevelopmenticon from '../../assets/services/web_development.svg';
import staffaugmentationicon from '../../assets/services/staff_augmentation.svg';
import brandpackingicon from '../../assets/services/branding_packaging.svg';
import digitalmarketingicon from '../../assets/services/digital_marketing.svg';
import leadrgenerationicon from '../../assets/services/lead_generation.svg';
import uxdevelopmenticon from '../../assets/services/ux_Development.svg';
import quoteicon from '../../assets/services/quote.svg';
import RubberBand from 'react-reveal/RubberBand';
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';
import { Link } from 'react-router-dom';

const ServiceHomePage = () => {
  return (
    <div>
      {/* Header Part */}
      <div className=" mx-auto w-full flex flex-col flex-wrap text-center">
        <div className="max-w-[1240px] mx-auto ">
          {/* heading */}
          <div className=" justify-center items-center text-center">
            <h2 className="font-heading text-lg md:text-3xl mt-10 uppercase">
              <RubberBand duration={3000}>Our Best Services</RubberBand>
            </h2>
            <h2 className="font-subheading text-black font-bold text-2xl md:text-xl mb-3 mt-4">
              {/* <Slide bottom duration={3000}> */}
              <Slide left duration={3000}>
                Services offered by us to grow your business
              </Slide>
            </h2>

            {/* Content */}
            <p className="align-baseline text-center font-content text-lg w-3/4 m-auto mb-10 mt-4">
              Our passion is helping companies of all sizes build their brand and business by making them attractive to the consumers by creating innovative solutions on a wide range of Web Development and  Mobile App services, which help in branding and engaging with the clients.

            </p>
            {/* w-3/4 */}
            <div
              className="mx-auto grid md:grid-cols-3 grid-cols-1 
            items-center justify-center text-center gap-8 p-3"
            >
              {/* Mobile App Developemnt */}
              <Link to="/mobile-app-development">
                <div className='hover:bg-green-500 hover:text-white p-5 rounded-lg cursor-pointer '>
                  <Bounce left duration={3000}>

                    <img
                      alt="Mobile App Development Services"
                      src={mobileicon}
                      //   scale-100 hover:scale-75 ease-out duration-500
                      //   hover:rounded-full hover:duration-700
                      className="w-[70px] h-[70px] mb-2  scale-100 hover:scale-75 ease-out duration-500 "
                    />
                  </Bounce>

                  <h2 className="font-subheading text-left text-xl w-1/2 mt-4">
                    Mobile App Development
                  </h2>
                  <p className="font-content text-justify text-sm md:mb-0 mb-2 mt-4">
                    Smartphones are a crucial part of our lives, so it's important
                    to have an app that'll make your life easier. If you need help
                    with app development, we have the experience and knowledge
                    needed to create something functional and appealing for any
                    industry and budget.
                    <br></br>
                    <br></br>
                  </p>
                </div>
              </Link>
              <Link to="/web-development">
                <div className='hover:bg-green-500 hover:text-white p-5 rounded-lg cursor-pointer '>
                  <Bounce top duration={3000}>
                    {' '}
                    <img
                      alt="Mobile App Development Services"
                      src={webdevelopmenticon}
                      className="w-[70px] h-[70px] mb-2 scale-100 hover:scale-75 ease-out duration-500"
                    />
                  </Bounce>
                  <h2 className="font-subheading text-left text-xl w-1/2 mt-4">
                    Web Development
                  </h2>
                  <p className="font-content text-justify text-sm mt-4">
                    Website development is the process of creating a new website
                    or updating it to a newer version. Whether you're looking for
                    a new website or want to improve the current one, we'll make
                    it happen. We are experts in designing and developing websites
                    that are appealing to both users and search engine crawlers
                    alike.
                  </p>
                </div>
              </Link>


              <Link to="https://digitalmarketing.cerbosys.com/">
                <div className='hover:bg-green-500 hover:text-white p-5 rounded-lg cursor-pointer '>
                  <Bounce right duration={3000}>

                    <img
                      alt="Mobile App Development Services"
                      src={digitalmarketingicon}
                      className="w-[70px] h-[70px] mb-2 scale-100 hover:scale-75 ease-out duration-500"
                    />
                  </Bounce>
                  <h2 className="font-subheading text-left text-xl w-1/3 mt-4">
                    Digital Marketing
                  </h2>
                  <p className="font-content text-justify text-sm mt-4">
                    As a software development and marketing agency, we know what
                    it takes to get real results online. These include building an
                    effective digital marketing strategy and executing a
                    purposeful, data-driven campaign. From start to finish, our
                    team will run your campaigns from A-Z and get you real
                    RESULTS!
                  </p>
                </div>
              </Link>


              <Link to="/staff-augmentation">
                <div className='hover:bg-green-500 hover:text-white p-5 rounded-lg cursor-pointer '>
                  <Bounce left duration={3000}>
                    {' '}
                    <img
                      alt="Mobile App Development Services"
                      src={staffaugmentationicon}
                      className="w-[70px] h-[70px] mb-2 scale-100 hover:scale-75 ease-out duration-500"
                    />
                  </Bounce>
                  <h2 className="font-subheading text-left text-xl w-1/2 mt-4">
                    Staff Augmentation
                  </h2>
                  <p className="font-content text-justify text-sm md:mb-0 mb-16 mt-4">
                    Since one of the primary elements of staff augmentation is
                    talent, Cerbosys acts as a link to augment the capacity of
                    your organization and we can help your company to build an
                    entirely effective team that can add good value to your brand
                    and projects.
                  </p>
                </div>
              </Link>

              <Link to="/ui-ux-designing">
                <div className='hover:bg-green-500 hover:text-white p-5 rounded-lg cursor-pointer '>

                  <Bounce bottom duration={3000}>
                    {' '}
                    <img
                      alt="Mobile App Development Services"
                      src={uxdevelopmenticon}
                      className="w-[70px] h-[70px] mb-2 scale-100 hover:scale-75 ease-out duration-500"
                    />
                  </Bounce>
                  <h2 className="font-subheading text-left text-xl w-1/2 mt-4">
                    UI/UX Development
                  </h2>
                  <p className="font-content text-justify text-sm md:mb-0 mb-12 mt-4">
                    We have a team that is especially concerned about the entire
                    process of product design. Apart from designing and
                    useability, we also provide a meaningful and enjoyable
                    experience for the users. Since a better user experience can
                    increase your sales effectively.
                  </p>
                </div>
              </Link>










              <Link to="./branding-and-packaging">
                <div className="hover:bg-green-400 hover:cursor-pointer rounded-lg p-10 hover:text-white">
                  <Bounce right duration={3000}>
                    {' '}
                    <img
                      alt="Mobile App Development Services"
                      src={brandpackingicon}
                      className="w-[70px] h-[70px] mb-2 scale-100 hover:scale-75 ease-out duration-500"
                    />
                  </Bounce>
                  <h2 className="font-subheading text-left text-xl w-1/2 mt-4">
                    Branding And Packaging
                  </h2>
                  <p className="font-content text-justify text-sm mt-4">
                    We serve your product from branding to packaging, that is,
                    creating a unique identity of your product by designing the
                    brand logo graphics and designing its packaging to make it
                    stand different from other products. We effectively serve
                    our clients and help their brand to draw customer attention.
                  </p>
                </div>
              </Link>
              <Link to="./lead-generation">
                <div className="hover:bg-green-400 hover:cursor-pointer rounded-lg p-10 hover:text-white">
                  <Bounce left duration={3000}>
                    {' '}
                    <img
                      alt="Mobile App Development Services"
                      src={leadrgenerationicon}
                      className="w-[70px] h-[70px] mb-2 scale-100 hover:scale-75 ease-out duration-500"
                    />
                  </Bounce>
                  <h2 className="font-subheading text-left text-xl w-1/2 mt-4">
                    Lead Generation
                  </h2>
                  <p className="font-content text-justify text-sm mb-16 mt-4">
                    Getting high-quality leads and clients through Search Engine
                    Optimization (SEO) and Social Media Marketing (SMM) - Drive
                    higher engagement rates for your brand on social media
                    platforms by having a social media marketing campaign
                    tailored to your needs.
                  </p>
                </div>
              </Link>

            </div>

            <div className="md:col-span-2 col-span-1 flex justify-center">
              <img
                src={quoteicon}
                className="md:mx-16 md:w-[40rem] md:h-96 mb-10 -mt-10"
                alt="Mobile App Development Services"
              ></img>
            </div>
          </div>
          {/* Header Part Finish*/}

          {/* Service Part Begins */}

          {/* Services Part Ends */}
        </div>
      </div>
    </div>
  );
};

export default ServiceHomePage;
