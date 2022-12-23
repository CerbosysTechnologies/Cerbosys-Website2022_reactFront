import React from 'react'
import Navbar from '../../../Navbar/Navbar'
import LifeCerbosysBody from './LifeCerbosysBody'
import Footer from '../../../Common/Component/Footer'
import LifeCerbosysForm from './LifeCerbosysForm'
import { Helmet } from 'react-helmet'

const LifeCerbosys = () => {
  return (
    <div>
        <>

        <Helmet>
          <title>
           What Our Employees Say About Us | Cerbosys
          </title>
          <meta
            name="description"
            content="At Cerbosys, we have an amazing work culture that helps our team to enjoy while working on a variety of website development and designing projects."
          />
        </Helmet>
        {/* <Navbar /> */}
        <div className="mx-auto w-full md:h-[40rem]  h-96 py-12 px-4 bg-LifeCerbosys  bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[30rem] h-96 mx-auto">
            <h1 className="text-white font-heading py-2 md:text-6xl text-lg md:mt-72">
              Life @ Cerbosys
            </h1>    
          </div>
          {/* Content Section Ends */}
        </div>
        </>
        <LifeCerbosysBody />
        <LifeCerbosysForm />
        {/* <Footer /> */}
    </div>
  )
}

export default LifeCerbosys