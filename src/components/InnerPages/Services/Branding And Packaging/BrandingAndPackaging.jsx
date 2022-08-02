import React from 'react'
import Navbar from '../../../Navbar/Navbar';
import Footer from '../../../Common/Component/Footer';
import { ScrollToTop } from "../../../Common/Component/ScrollToTop";
import BrandingAndPackagingDesc from './BrandingAndPackagingDesc';
import BrandAndPackagingProcess from './BrandingAndPackagingProcess';
import BrandingAndPackagingForm from './BrandingAndPackagingForm';

const BrandingAndPackaging = () => {
  return (
    <div>
         <>
        <Navbar />
        <div className="mx-auto w-full md:h-[30rem]  h-96 py-12 px-4 bg-WebDevelopment bg-cover md:bg-top bg-center">
          {/* Free Quote */}
          <div
            className="fixed z-20 top-1/2 right-[-4.55rem] bg-Primary
         p-1 px-2 justify-end items-end rotate-90 rounded-bl-3xl rounded-br-3xl text-white"
          >
            <span className="uppercase font-heading text-base">
              Get a free quote
            </span>
          </div>

          {/* Free Quote Ends */}
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[30rem] h-96 mx-auto">
          <p className="text-white font-heading py-2 md:text-sm text-xs mb-2">
            Services
          </p>

          <p className="text-white font-heading py-2 md:text-3xl text-xl mb-2">
          Branding & Packaging
          </p>

          <p className="text-white font-heading py-2 md:text-xs text-xs mb-8 md:w-[480px] text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus officia repudiandae neque amet minima voluptas iure, modi aspernatur laboriosam recusandae quidem odit, illum nobis, necessitatibus at veritatis? Assumenda, totam. Nihil? 
          </p>

          <button
              className="bg-Primary rounded-full font-heading md:px-5 md:py-2 md:text-lg
              text-white uppercase px-3 py-1.5 text-xs mb-6"
            >
              Contact Us
            </button>


          </div>
          {/* Content Section Ends*/}
        </div>
        <BrandingAndPackagingDesc />
        <BrandAndPackagingProcess />
        <BrandingAndPackagingForm />
        <Footer />
        <ScrollToTop />

        </>
    </div>
  )
}

export default BrandingAndPackaging