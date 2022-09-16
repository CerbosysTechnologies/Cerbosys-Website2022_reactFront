import React from 'react'
import Footer from "../../../Common/Component/Footer";
import Navbar from "../../../Navbar/Navbar";
import ContactUsBody from './ContactUsBody';

const ContactUs = () => {
  return (
    <div>
          <>
        <Navbar />
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
      <Footer />
    </div>
  )
}

export default ContactUs