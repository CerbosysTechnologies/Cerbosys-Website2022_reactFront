import React from 'react'
import Navbar from '../../../Navbar/Navbar'
import LifeCerbosysBody from './LifeCerbosysBody'
import Footer from '../../../Common/Component/Footer'
import LifeCerbosysForm from './LifeCerbosysForm'

const LifeCerbosys = () => {
  return (
    <div>
        <>
        <Navbar />
        <div className="mx-auto w-full md:h-[40rem]  h-96 py-12 px-4 bg-LifeCerbosys  bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[30rem] h-96 mx-auto">
            <p className="text-white font-heading py-2 md:text-8xl text-lg md:mt-72">
              Life @ Cerbosys
            </p>    
          </div>
          {/* Content Section Ends */}
        </div>
        </>
        <LifeCerbosysBody />
        <LifeCerbosysForm />
        <Footer />
    </div>
  )
}

export default LifeCerbosys