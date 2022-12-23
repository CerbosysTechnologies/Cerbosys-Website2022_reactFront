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
                className="md:h-[30rem]"
              />
            </div>
            {/* Mobile Image */}

            {/* Image Section Ends*/}

            {/* Side */}
            <div className="flex flex-wrap flex-col ">
              <h2 className="text-Green md:text-3xl text-center mb-6 text-xl mt-4 font-heading md:w-96 items-center justify-center mx-10">
                Banking And Finance In Business
              </h2>
              <img
                src={bankingbusinessicon}
                alt="Banking Business"
                className="md:h-[20rem]"
              />
              <p className="font-content  md:w-[33rem] mt-6 text-justify">
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

          {/* Bullet Section */}
          <div className="flex flex-wrap flex-col mx-auto">
            <div className="font-heading md:text-4xl text-xl mt-10 text-center">
              Our Services for the Banking and Finance Industry
            </div>

            <ul className="text-justify font-content  mt-10 list-disc md:px-0 px-5">
              <li>
                <strong>Digital Transformation :-</strong>
                Our technical services provide improved customer satisfaction,
                drive innovation in business processes, simplify services, and
                drive major changes across the industry. It also helps to
                accelerate key processes and create new revenue opportunities in
                the banking and finance sectors.
              </li>

              <li>
                <strong>Mobility Solutions :-</strong>Whether it's increasing
                the adoption of banking IT services, mobile payments or mobile
                portfolio management, or mobile stock trading – our mobile and
                web services has proven to be a driving force behind a
                successful transformation.
              </li>

              <li>
                <strong>Banking Compliance Reporting :-</strong> Our services
                help financial institutions and banks to comply with regulatory
                requirements while also helping them to report their business
                risks and operational risks in the required formats. Our
                technical frameworks help create reliable, secure systems that
                are completely flexible according to your needs.
              </li>

              <li>
                <strong>Business Analytics :-</strong> When it comes to
                analyzing and transforming large volumes of data into actionable
                information, financial institutions need to rely on companies
                like us for technical support. So that they can move forward
                with their business activities.
              </li>
            </ul>
          </div>
          {/* Bullet Section Ends*/}
        </div>
      </div>
    </div>
  );
};

export default BankingBody;
