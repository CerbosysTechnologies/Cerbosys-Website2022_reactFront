import React from "react";
import { useState } from "react";
import mobileservice_technologyicon from "../../../../assets/innerpage/mobiledevelopment/formimage.png";
import ServicesForm from "../../../Common/Component/ServicesForm";
import { IMAGE_SERVER } from "../../../../ServerUrls";
import { useParams } from "react-router-dom";

const MobileForm = ({ onChangeSelected }) => {
  const [imgName, setImgName] = useState();

  const onChangeSelection = (newName) => {
    console.log("newValue", newName);
    let new_name = newName.substring(8);
    setImgName(IMAGE_SERVER + new_name);
    console.log("ImgName", imgName);
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
            <div className="grid md:grid-cols-2 mb-4 mt-10 md:w-10/12 shadow-xl shadow-gray-600">
              {/* Image Section */}
              <div className="mx-auto items-center justify-center ">
                <img
                  src={!imgName ? mobileservice_technologyicon : imgName}
                  alt=""
                  className="h-full"
                ></img>
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
  );
};

export default MobileForm;
