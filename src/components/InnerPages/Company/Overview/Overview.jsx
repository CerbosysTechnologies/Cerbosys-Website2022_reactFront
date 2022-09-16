import React from 'react'
import Footer from '../../../Common/Component/Footer'
import Navbar from '../../../Navbar/Navbar'
import OverviewBody from './OverviewBody'

const Overview = () => {
  return (
    <div>
        <>
        <Navbar />
        <div className="mx-auto w-full md:h-[50rem]  h-96 py-12 px-4 bg-OverviewBackground bg-cover md:bg-top bg-center">


          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[30rem] h-96 mx-auto">
            <p className="text-white font-heading py-2 md:text-5xl text-2xl ">
              Overview
            </p>

            <p className='text-white font-heading py-2 md:text-5xl text-2xl md:-mb-64 md:mt-96 mt-24'>
            “Walk with us towards a beautiful destination…”
            </p>
            {/* <p className="text-Primary font-heading py-2 md:text-lg text-xs mb-8 md:w-[480px] text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus officia repudiandae neque amet minima voluptas iure,
              modi aspernatur laboriosam recusandae quidem odit, illum nobis,
              necessitatibus at veritatis? Assumenda, totam. Nihil?
            </p> */}
          </div>
          {/* Content Section Ends */}

         
        </div>
        </>
        <OverviewBody />
        <Footer />
    </div>
  )
}

export default Overview