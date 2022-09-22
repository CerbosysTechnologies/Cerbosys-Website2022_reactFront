import React from 'react'
import ServicesForm from '../../../../../Common/Component/ServicesForm'
import { useState } from 'react'
import { IMAGE_SERVER } from "../../../../../../ServerUrls";
import contact_image from '../../../../../../assets/innerpage/android/android_developer.png';

const AndroidForm = () => {

  const [imgName, setImgName] = useState();

  const onChangeSelection=(newValue)=>{
    console.log("newValue",newValue)
    let new_name = newValue.substring(8);
    setImgName(IMAGE_SERVER + new_name);  
    console.log('ImgName', imgName)
  }


  return (
    <div>
         <div className="bg-Primary mx-auto w-full py-16 px-4 ">
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
             <div className="grid md:grid-cols-2  mb-4  mt-10 md:w-10/12 shadow-xl shadow-gray-600">
              {/* Image Section */}
              <div className="items-center justify-center align-baseline">
              {/* <img src={!imgName ? uiandux_formicon : imgName} alt="" className="h-full"></img> */}
              <img src={contact_image} alt="" className="h-full"></img>
              </div>
              {/* Image Section Ends*/}

              {/* Form Section */}
              <div className="bg-white md:px-14 px-10 items-center justify-center text-center ">
              <ServicesForm onChangeSelected={onChangeSelection} />
                </div>
              {/* Form Section Ends*/}



              </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default AndroidForm