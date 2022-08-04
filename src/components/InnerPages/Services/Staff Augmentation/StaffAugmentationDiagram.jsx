import React from 'react'
import staffservice from '../../../../assets/innerpage/staffaugmentation/staff_service.svg'

const StaffAugmentationDiagram = () => {
  return (
    <div>
         <div className="bg-[#FAF6F5] mx-auto w-full py-16 px-4 ">
        <div className="max-w-[1240px] mx-auto ">
            <div className="flex flex-col flex-wrap items-center">
            {/* Heading */}
            <h1 className="font-heading md:text-3xl uppercase text-Primary text-xl">Service</h1>
            <h2 className="font-subheading md:text-xl text-black text-sm text-center justify-center md:w-[60rem]">
                Cerbosys Technologies provide flexible IT staff augmentation solutions to clients
              in order to provide them with on-demand skills and resource, thus becoming a perfect 
              extension of all IT businesses. 
            </h2>
            {/* Heading Ends */}

            {/* Image */}
                <img src={staffservice} alt="Staff Service Logo" className="md:w-[65rem] mt-10 w-80"/>
            {/* Image Ends */}
            </div>
        </div>
      </div>
    </div>
  )
}

export default StaffAugmentationDiagram