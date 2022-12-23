import React from 'react'
import { Helmet } from 'react-helmet';
import Footer from "../../../Common/Component/Footer";
import Navbar from "../../../Navbar/Navbar";
import TestimonialBody from './TestimonialBody';
import TestimonialForm from './TestimonialForm';

const Testimonial = () => {
  return (
    <div>
         <>
          <Helmet>
          <title>
          Testimonial page - Cerbosys Technologies
          </title>
          <meta
            name="description"
            content="Check out Cerbosys' client testimonials, which show how we provided a competitive edge to our clients with quality services delivered ahead of schedule."
          />
        </Helmet>
        
        <div className="mx-auto w-full md:h-[40rem]  h-96 py-12 px-4 bg-TestimonialHeader bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[30rem] h-96 mx-auto md:mt-20">
            <h1 className="text-white font-heading py-2 md:text-5xl text-2xl mb-2">
              Testimonial
            </h1>

            <p className="text-white font-subheading py-2 md:text-3xl text-xs mb-8 md:w-[980px] text-justify md:mt-52 mt-20">
            The future of events is a story we’re writing together with our customers. Let's take a look what our clients have to say
            </p>
          </div>
          {/* Content Section Ends */}
        </div>
      </>
      <TestimonialBody />
      <TestimonialForm />
      {/* <Footer /> */}
    </div>
  )
}

export default Testimonial