import React from "react";
import realestatemobicon from "../../../../assets/innerpage/realestate/realestatemob.svg";
import realestatebusinessicon from "../../../../assets/innerpage/realestate/realestateimage.svg";

const RealEstateBody = () => {
  return (
    <div>
      <div className="mx-auto w-full py-10 px-4 ">
        <div className="max-w-[1240px] mx-auto">
          {/* Image Section */}
          <div className="flex flex-wrap mx-auto items-center justify-center space-x-10">
            {/* Mobile Image */}
            <div className="">
              <img
                src={realestatemobicon}
                alt="RealEstate Mobile"
                className="md:h-[40rem]"
              />
            </div>
            {/* Mobile Image */}

            {/* Image Section Ends*/}

            {/* Side */}
            <div className="flex flex-wrap flex-col ">
              <h1 className="text-Green md:text-4xl text-center items-center mb-6 text-xl mt-4 font-heading md:w-96 justify-center mx-10">
                About Real Estate and Construction
              </h1>
              <img
                src={realestatebusinessicon}
                alt="RealEstate Business"
                className="md:h-[20rem]"
              />
              <p className="font-subheading md:text-xl text-lg md:w-[33rem] mt-6 text-justify">
                The Real Estate and Construction sector is a major contributor
                to the country's GDP, This sector provides employment
                opportunities to millions of youth and also contributes
                immensely to urbanization, and economic growth and thus has a
                major role in the country's economic development also.
              </p>
            </div>
            {/* Side Image*/}
          </div>

          {/* Bullet Section */}
          <div className="flex flex-wrap flex-col mx-auto">
            <div className="font-heading md:text-4xl text-xl mt-10 text-center">
              Our Services for the Real Estate and Construction Industry
            </div>

            <ul className="text-justify font-content md:text-xl text-sm mt-10 list-disc">
              <li>
                <strong>Enterprise Mobility Solutions :-</strong> Enterprise
                mobility solutions are essential to any company that is
                committed to a consistent level of service, quality, and
                customer satisfaction. We work with you to develop GPS-enabled
                mobility solutions that will help your employees work more
                efficiently, reduce your costs and improve customer
                satisfaction.
              </li>

              <li>
                <strong>Business Intelligence :-</strong> Education advancement
                is one of the biggest challenges faced by millions of students
                all over the world. We provide Education businesses with a range
                of unique and innovative application solutions.
              </li>

              <li>
                <strong>Software and Web Development :-</strong> The software
                and web development services provided by us help the real estate
                community create customizable solutions that meet their
                individual needs. The property management & development
                software, real estate CRM allows clients to manage their
                properties through the use of mobile devices.
              </li>

              <li>
                <strong>Cloud Solutions :-</strong> We offer our cloud-based
                services to incredibly knowledgeable and capable professionals,
                allowing them to focus on what they do best. Our cloud-based
                business technology platform is designed for efficiency and
                satisfaction within any environment.
              </li>
            </ul>
          </div>
          {/* Bullet Section Ends*/}
        </div>
      </div>
    </div>
  );
};

export default RealEstateBody;
