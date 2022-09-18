import React from "react";
import bankingmobicon from "../../../../assets/innerpage/banking/bankingmob.svg";
import bankingbusinessicon from "../../../../assets/innerpage/banking/bankingimage.svg";

const BankingBody = () => {
  return (
    <div>
      <div className="mx-auto w-full py-10 px-4 ">
        <div className="max-w-[1240px] mx-auto">
          {/* Image Section */}
          <div className="flex flex-wrap mx-auto items-center justify-center space-x-10">
            {/* Mobile Image */}
            <div className="">
              <img
                src={bankingmobicon}
                alt="Banking Mobile"
                className="md:h-[40rem]"
              />
            </div>
            {/* Mobile Image */}

            {/* Image Section Ends*/}

            {/* Side */}
            <div className="flex flex-wrap flex-col ">
              <h1 className="text-Green md:text-4xl text-center mb-6 text-xl mt-4 font-heading md:w-96 items-center justify-center mx-10">
                Banking And Finance In Business
              </h1>
              <img
                src={bankingbusinessicon}
                alt="Banking Business"
                className="md:h-[20rem]"
              />
              <p className="font-subheading md:text-xl text-lg md:w-[30rem] mt-6 text-justify">
                Banking and Finance is the industry that finds people with the
                skills to create, advance, or manage financial services. It is a
                very large industry, which includes banks, credit institutions,
                and insurance companies. From the smallest transaction to the
                largest enterprise, banks have become the backbone of modern
                business.
              </p>
            </div>
            {/* Side Image*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankingBody;
