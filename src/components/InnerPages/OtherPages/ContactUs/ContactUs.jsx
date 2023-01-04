import React from 'react';
import { Helmet } from 'react-helmet';
// import Footer from "../../../Common/Component/Footer";
import Navbar from '../../../Navbar/Navbar';
import ContactUsBody from './ContactUsBody';

const ContactUs = () => {
  return (
    <div>
      <>
        <Helmet>
          <title>Contact us - Cerbosys Technologies</title>

          <meta
            name="keywords"
            content="contact us, contact us cerbosys, business enquiries, join our team, join cerbosys"
          />
          <meta
            name="description"
            content="Contact us for any query related to Mobile App & Web Development, Digital Marketing, etc. We provide a solid customer support service"
          />
        </Helmet>

        {/* <Navbar /> */}
        <div className="mx-auto w-full md:h-[30rem]  h-96 py-12 px-4 bg-ContactUsBackgroud bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[35rem] h-96 mx-auto">
            <p className="text-white font-heading py-2 md:text-6xl text-2xl ">
              Contact Us
            </p>

            {/* <p className="text-Primary font-heading py-2 md:text-lg text-xs mb-8 md:w-[480px] text-justify">
            
            </p> */}
          </div>
          {/* Content Section Ends */}
        </div>
      </>
      <ContactUsBody />
      {/* <Footer /> */}
    </div>
  );
};

export default ContactUs;
