import React from 'react';
import healthphone1 from '../../../../assets/innerpage/healthcare/healthphone1.png';
import healthphone2 from '../../../../assets/innerpage/healthcare/healthphone2.png';
import healthcarebusinesssicon from '../../../../assets/innerpage/healthcare/healthimage.svg';
import Healthsilder from './Healthsilder';
import Managmentsys from './Managmentsys';

const HealthCareBody = () => {
  return (
    <div>
      <div className="w-full py-10 px-4 h-[600px] max-h-fit min-h-fit ">
        <div className="relative h-[600px] max-h-fit w-full">
          <div className="absolute left-[-90px] md:top-16  bottom-0 w-full">
            {/* Image Section */}
            <div className="flex flex-wrap w-full ">
              {/* Mobile Image */}
              {/* <div className="relative">
                <div className="">
                  <div className="relative">
                    <img
                      src={healthphone2}
                      alt="HealthCare Mobile"
                      className="w-full object-fill"
                    />

                    <div className="absolute bottom-0 top-0 right-[-243px]">
                      <img
                        src={healthphone1}
                        alt="HealthCare Mobile"
                        className="w-80  h-96 object-fill"
                      />
                    </div>
                  </div>
                </div>
              </div> */}
              {/* Mobile Image */}

              {/* Image Section Ends*/}

              {/* Side */}
              {/* <div className="px-5 ">
                <h2 className="text-Secondary md:text-3xl text-xl mt-4 font-heading text-center mb-6">
                  E-COMMERCE<span className="text-Green"> &</span> RETAIL
                </h2>

                <p className="font-content  md:w-[33rem] mt-6 text-justify items-center">
                  Healthcare and Life Science offers a comprehensive range of
                  products and services which includes a wide range of
                  healthcare equipment, pharmaceuticals, vascular solutions,
                  medical supplies, and more. There are many ways by which
                  digitalization can help improve your company's operations.
                </p>
              </div> */}
            </div>
            {/* Side Image*/}
          </div>

          {/* Bullet Section */}
          {/* <div className="flex flex-wrap flex-col mx-auto">
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
          </div> */}
          {/* Bullet Section Ends*/}
        </div>
      </div>
      {/* healthsilder */}
      <Healthsilder />
      {/*  */}
      <div className="bg-HealthCarebody mx-auto w-full md:h-[36rem] h-96 py-12 px-4 bg-cover md:bg-top bg-center"></div>

      <Managmentsys type="usew" />
    </div>
  );
};

export default HealthCareBody;
