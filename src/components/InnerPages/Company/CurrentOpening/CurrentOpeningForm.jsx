import React from 'react';
import currentopeningicon from '../../../../assets/innerpage/currentopening/contact_image.jpg';
import ServicesForm from '../../../Common/Component/ServicesForm';
import { IMAGE_SERVER } from '../../../../ServerUrls';
import { useState } from 'react';

const CurrentOpeningForm = ({ onChangeSelected }) => {
  const [imgName, setImgName] = useState();

  const onChangeSelection = (newName) => {
    console.log('newValue', newName);
    let new_name = newName.substring(8);
    setImgName(IMAGE_SERVER + new_name);
    console.log('ImgName', imgName);
  };

  return (
    <div>
      <div className="bg-FormBackground mx-auto w-full py-16 px-2 object-contain bg-cover bg-center">
        <div className="max-w-[1240px] mx-auto ">
          <div className="flex flex-col flex-wrap items-center">
            {/* Heading */}
            <h2 className="font-heading md:text-3xl uppercase text-white text-xl">
              Let's Talk About Your Idea
            </h2>
            <h2 className="font-subheading md:text-xl text-white text-sm text-center">
              Share your business idea and we ensure you would embrace
              associating with us.
            </h2>
            {/* Heading Ends */}
            {/* Form Design */}
         
            <div className="lg:grid w-full  grid-cols-2  mb-4 mt-10 shadow-xl shadow-gray-600">
              {/* Image Section */}
              <div className=" w-full">
                <img
                  src={!imgName ? currentopeningicon : imgName}
                  alt=""
                  className="h-full w-full"
                ></img>
              </div>
              {/* Image Section Ends*/}

              {/* Form Section */}
              <div className="bg-white md:px-14 px-10  w-full">
                <ServicesForm onChangeSelected={onChangeSelection} />
              </div>
              {/* Form Section Ends*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentOpeningForm;
