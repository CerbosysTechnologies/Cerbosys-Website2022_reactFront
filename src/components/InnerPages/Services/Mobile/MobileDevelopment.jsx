import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../Navbar/Navbar';
import MobileDesc from './MobileDesc';
import MobileDiagram from './MobileDiagram';
import MobileProcess from './MobileProcess';
import MobileForm from './MobileForm';
import Footer from '../../../Common/Component/Footer';
import Investment from '../UserInvestment/Investment';
import { Helmet } from 'react-helmet';
const MobileDevelopment = () => {
  return (
    <div>
      <>
        <Helmet>
          <title>
            Best Mobile App Development Company | Android and iOS Apps
          </title>
          <meta
            name="keywords"
            content="android development company, android mobile app development, iPhone app development company, iPhone App Development, mobile app development service providers, mobile app development service provider"
          />
          <meta
            name="description"
            content="Need mobile app development services in Indore? Cerbosys is a creative mobile application development company offering Android and iOS App Development services"
          />
        </Helmet>

        {/* <Navbar /> */}
        <div className="selection:bg-Green selection:text-white mx-auto w-full md:h-[30rem]  h-96 py-12 px-4 bg-WebDevelopment bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[30rem] h-96 mx-auto">
            <h1 className="text-white uppercase font-heading pt-2 md:text-5xl text-2xl md:mb-4 min-w-fit">
              Mobile App Development
            </h1>

            <p className="text-center text-white font-subheading  md:text-lg text-xs md:w-[980px] max-w-fit">
              Our app development platform builds mobile applications that
              easily solve problems and deliver a fast value to your users and
              is capable of effortlessly increasing the number of users.
            </p>

            <Link to="/contact-us">
              <button
                className="bg-Primary mt-4 rounded-full font-heading md:px-5 md:py-2 md:text-lg
              text-white uppercase px-3 py-1.5 text-xs mb-2"
              >
                Contact Us
              </button>
            </Link>
          </div>
          {/* Content Section Ends*/}
        </div>
        <div className="selection:bg-Green selection:text-white">
          <Investment />
          <MobileDesc />
          <MobileDiagram />
          <MobileProcess />
          <MobileForm />
        </div>
        {/* <Footer /> */}
      </>
    </div>
  );
};

export default MobileDevelopment;
