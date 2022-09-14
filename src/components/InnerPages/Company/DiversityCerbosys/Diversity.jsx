import React from 'react'
import Footer from '../../../Common/Component/Footer'
import Navbar from '../../../Navbar/Navbar'
import DiversityBody from './DiversityBody'
import DiversityForm from './DiversityForm'

const Diversity = () => {
  return (
    <div>
        <>
        <Navbar />
        <div className="mx-auto w-full md:h-[30rem]  h-96 py-12 px-4 bg-DiversityBackground bg-cover md:bg-top bg-center">


          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[30rem] h-96 mx-auto">
            <p className="text-white font-heading py-2 md:text-3xl text-xl mb-2">
              Diversity
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

        <DiversityBody />
        <DiversityForm />
        <Footer />
        </>
    </div>
  )
}

export default Diversity