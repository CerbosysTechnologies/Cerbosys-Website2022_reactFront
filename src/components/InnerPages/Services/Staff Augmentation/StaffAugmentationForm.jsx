import React from 'react'
import ServicesForm from '../../../Common/Component/ServicesForm'
import contactimage_formicon from '../../../../assets/innerpage/staffaugmentation/contact_image.png'

const StaffAugmentationForm = () => {
  return (
    <div>
         <div className="bg-FormBackground mx-auto w-full py-16 px-4 ">
        <div className="max-w-[1240px] mx-auto ">
          <div className="flex flex-col flex-wrap items-center">
            {/* Heading */}
            <h1 className="font-heading md:text-3xl uppercase text-white text-xl">
              Let's Talk About Your Idea
            </h1>
            <h2 className="font-subheading md:text-xl text-white text-sm text-center">
              Share your business idea and we ensure you would embrace
              associating with us.
            </h2>
            {/* Heading Ends */}
             {/* Form Design */}
             <div className="grid md:grid-cols-2  mb-4 md:px-36 py-5  mt-10">
              {/* Image Section */}
              <div className="">
              <img src={contactimage_formicon} alt="" className="h-full"></img>
              </div>
              {/* Image Section Ends*/}

              {/* Form Section */}
              <div className="bg-white md:px-14 px-10 items-center justify-center text-center ">
               <ServicesForm />
                </div>
              {/* Form Section Ends*/}



              </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default StaffAugmentationForm