import React from 'react'
import Navbar from '../../../Navbar/Navbar'
import Footer from '../../../Common/Component/Footer'
import CurrentOpeningBody from './CurrentOpeningBody'
import CurrentOpeningForm from './CurrentOpeningForm'



const CurrentOpening = () => {
  return (
    <div>
        <>
        <Navbar />
        <div className="mx-auto w-full md:h-[30rem]  h-96 py-12 px-4 bg-CurrentOpeningBackground bg-cover md:bg-top bg-center">
          {/* Free Quote */}
          <div
            className="fixed z-20 top-1/2 right-[-4.55rem] bg-Green
         p-1 px-2 justify-end items-end rotate-90 rounded-bl-3xl rounded-br-3xl text-white">
            <span className="uppercase font-heading text-base">
              Get a free quote
            </span>
          </div>

          {/* Free Quote Ends */}

          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[30rem] h-96 mx-auto">
            <p className="text-white font-heading py-2 md:text-3xl text-xl mb-2">
              Current Openings
            </p>

            <p className="text-Primary font-heading py-2 md:text-lg text-xs mb-8 md:w-[480px] text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus officia repudiandae neque amet minima voluptas iure,
              modi aspernatur laboriosam recusandae quidem odit, illum nobis,
              necessitatibus at veritatis? Assumenda, totam. Nihil?
            </p>
          </div>
          {/* Content Section Ends */}

         
        </div>
        </>
        <CurrentOpeningBody />
        <CurrentOpeningForm />
        <Footer />
    </div>
  )
}

export default CurrentOpening