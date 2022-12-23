import React from "react";
import healthcaremobileicon from "../../../../assets/innerpage/healthcare/healthmob.png";
import healthcarebusinesssicon from "../../../../assets/innerpage/healthcare/healthimage.svg";

const HealthCareBody = () => {
  return (
    <div>
      <div className="mx-auto w-full py-10 px-4 ">
        <div className="max-w-[1240px] mx-auto">
          {/* Image Section */}
          <div className="flex flex-wrap mx-auto items-center justify-center space-x-10">
            {/* Mobile Image */}
            <div className="">
              <img
                src={healthcaremobileicon}
                alt="HealthCare Mobile"
                className="md:h-[30rem]"
              />
            </div>
            {/* Mobile Image */}

            {/* Image Section Ends*/}

            {/* Side */}
            <div className="flex flex-wrap flex-col ">
              <h2 className="text-Green md:text-3xl text-center items-center mb-6  mt-4 font-heading md:w-96 justify-center mx-10">
                HealthCare And Life Science In Business
              </h2>
              <img
                src={healthcarebusinesssicon}
                alt="HealthCare Business"
                className="md:h-[20rem]"
              />
              <p className="font-content  md:w-[33rem] mt-6 text-justify items-center">
                Healthcare and Life Science offers a comprehensive range of
                products and services which includes a wide range of healthcare
                equipment, pharmaceuticals, vascular solutions, medical
                supplies, and more. There are many ways by which digitalization
                can help improve your company's operations.
              </p>
            </div>
            {/* Side Image*/}
          </div>

          {/* Bullet Section */}
          <div className="flex flex-wrap flex-col mx-auto">
            <div className="font-heading md:text-3xl text-xl mt-10 text-center">
              Our Services for the Healthcare and Life Science Industry
            </div>

            <ul className="text-justify font-content  mt-10 list-disc md:px-0 px-5">
              <li>
                <strong>Advisory Services :-</strong>
                We provide an online platform that will be engaged in providing
                advisory services to your clients in the Healthcare and Life
                Science Industry. By developing a professional interface for
                your industry, our experienced team of experts can help you to
                serve patients online.
              </li>

              <li>
                <strong>Digital Patient Care platform :-</strong>The Digital
                Patient care platform created by our company helps end users
                manage their patients and undertake their regular checkups
                without going anywhere. These are all about medical treatment,
                medication, and diseases. It is a web-based software that works
                as help for doctors as well as for patients.
              </li>

              <li>
                <strong>Quality platform :-</strong> Our quality management
                solution is aimed to help improve the Overall Quality Management
                processes of your Healthcare and Life Science enterprises, with
                a high impact on reducing the cost and increasing flexibility in
                all stages of healthcare manufacturing.
              </li>

              <li>
                <strong>Data Safety Management :-</strong> Our Data Safety
                Management Solutions offer a Web-hosted safety data exchange
                application that promotes the efficient exchange of safety
                information. This system implements easy and fast access to the
                entire data protected by our company.
              </li>
            </ul>
          </div>
          {/* Bullet Section Ends*/}
        </div>
      </div>
    </div>
  );
};

export default HealthCareBody;
