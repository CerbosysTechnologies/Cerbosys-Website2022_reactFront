import React from 'react';
import realicon1 from '../../../../assets/innerpage/realestate/realicon1.png';
import realicon2 from '../../../../assets/innerpage/realestate/realicon2.png';
import realicon3 from '../../../../assets/innerpage/realestate/realicon3.png';
import realicon4 from '../../../../assets/innerpage/realestate/realicon4.png';
const Realsolution = () => {
  return (
    <>
      {/*  md:w-[50%]  lg:w-[100%] */}
      <div className="bg-Primary">
        <div className="p-6 text-center ">
          <img src={realicon1} alt="img" className="w-[100px] mx-auto" />
        </div>
        <div className="p-4 md:p-3 lg:p-7">
          <p className="font-heading">Website Development</p>
          <div className="text-center ">
            <p className=" pt-4 pl-2 pr-2">
              As a Real Estate Agent, a functioning website can serve as an
              ideal platform for you to facilitate interactions with potential
              buyers and sellers.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-Green">
        <div className="p-6 text-center ">
          <img src={realicon2} alt="img" className="w-[100px] mx-auto" />
        </div>
        <div className="p-4 md:p-3 lg:p-7">
          <p className=" font-heading">CRMs</p>
          <div className="text-center  ">
            <p className=" pt-4 pl-2 pr-2">
              CRMs for property data allow large real estate agencies to
              organize their customer and client information with comprehensive
              management information systems.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-Primary">
        <div className="p-6 text-center ">
          <img src={realicon3} alt="img" className="w-[80px] mx-auto" />
        </div>
        <div className="p-4 md:p-3 lg:p-7">
          <p className=" font-heading">Realtors Interface</p>
          <div className="text-center">
            <p className=" pt-4 pl-2 pr-2">
              The Realtor's interface is designed to equip the builders'
              salesperson with platforms to manage leads, display the property
              to interested buyers, and complete the transaction.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-Green text-center">
        <div className="p-6 text-center ">
          <img src={realicon4} alt="img" className="w-[45px] mx-auto" />
        </div>
        <div className="p-4 md:p-3 lg:p-7">
          <p className="font-heading">Mobile Apps</p>
          <div className="text-center">
            <p className="pt-4 pl-2 pr-2">
              Brokers and customers alike can take advantage of our specially
              designed Real Estate Mobile Apps, enabling the listing and
              purchasing of properties.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Realsolution;
