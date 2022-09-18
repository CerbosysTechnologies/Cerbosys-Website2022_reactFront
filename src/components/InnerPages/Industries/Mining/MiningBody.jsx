import React from "react";
import miningmobicon from "../../../../assets/innerpage/mining/miningmob.svg";
import miningbusinessicon from "../../../../assets/innerpage/mining/miningimage.svg";

const MiningBody = () => {
  return (
    <div>
      <div>
        <div className="mx-auto w-full py-10 px-4 ">
          <div className="max-w-[1240px] mx-auto">
            {/* Image Section */}
            <div className="flex flex-wrap mx-auto items-center justify-center space-x-10">
              {/* Mobile Image */}
              <div className="">
                <img
                  src={miningmobicon}
                  alt="Mining Mobile"
                  className="md:h-[40rem]"
                />
              </div>
              {/* Mobile Image */}

              {/* Image Section Ends*/}

              {/* Side */}
              <div className="flex flex-wrap flex-col ">
                <h1 className="text-Green md:text-4xl text-center mb-6 text-xl mt-4 font-heading">
                  About Mining
                </h1>
                <img
                  src={miningbusinessicon}
                  alt="Mining Business"
                  className="md:h-[20rem]"
                />
                <p className="font-subheading md:text-xl text-lg md:w-[30rem] mt-6 text-justify">
                  Mining is the process of extracting useful minerals and metals
                  from the earth. There are a lot of minerals available in
                  nature, but most of them are not accessible to humans because
                  they are under the surface or hidden beneath the water. To
                  manage such a huge belt, business solution provider companies
                  are required to assist the business online.
                </p>
              </div>
              {/* Side Image*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiningBody;
