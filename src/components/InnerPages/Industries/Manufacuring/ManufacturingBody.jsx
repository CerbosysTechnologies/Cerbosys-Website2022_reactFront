import React from 'react';
import manufacturingmobicon from '../../../../assets/innerpage/manufacturing/manufacturingmob.svg';
import manufacturleft from '../../../../assets/innerpage/manufacturing/manufacturleft.png';
import manufacturingbusinessicon from '../../../../assets/innerpage/manufacturing/manufacturingimage.svg';
import manufacturright from '../../../../assets/innerpage/manufacturing/manufacturright.png';
import manufacturingright from '../../../../assets/innerpage/manufacturing/manufacturingright.png';
import Healthsilder from '../HealthCare/Healthsilder';
const ManufacturingBody = () => {
  return (
    <div>
      <div className="mx-auto w-full py-10 ">
        <div className="max-w-[1240px] mx-auto">
          {/* Image Section */}
          <div className="flex flex-wrap lg:flex-nowrap gap-10 mx-auto justify-center px-8">
            {/* Mobile Image */}
            <div className="">
              <img
                src={manufacturleft}
                alt="Manufacture Mobile"
                className="md:h-[30rem]"
              />
            </div>
            {/* Mobile Image */}

            {/* Image Section Ends*/}

            {/* Side */}
            <div className="flex flex-wrap flex-col ">
              <h2 className="text-Primary md:text-3xl  mb-6 text-xl mt-4 font-heading uppercase">
                Manufacturing
              </h2>

              <p className="font-content  md:w-[35rem] mt-6 text-justify">
                By incorporating advanced technologies and improved data sharing
                into a smart manufacturing set-up, companies can significantly
                enhance operational efficiency, maximize performance, and reduce
                downtime of equipment.
              </p>
              <p className="font-content  md:w-[35rem] mt-6 text-justify">
                Cerbosys provides cutting-edge solutions to help process and
                discrete manufacturers pursue digital transformation and
                progress toward their desired business objectives. Our offerings
                allow businesses to redesign their existing systems, optimize
                processes and structures, keep up with the fast-paced market,
                and increase their profit margins.
              </p>
            </div>
            {/* Side Image*/}
          </div>
        </div>

        {/* Bullet Section */}
        {/* start OUR MANUFACTURING   */}
        <div className="mx-auto w-full py-10  bg-gradient-to-r from-cyan-600 to-blue-800 mt-4">
          <div className="max-w-[1240px] mx-auto">
            <div className=" py-0 md:py-6">
              <div className="flex flex-wrap justify-center items-center gap-10 md:flex-nowrap px-8 md:px-12">
                {/* <div className="flex justify-center gap-10 md:w-[50%] w-[100%] text-white px-8"> */}
                <div className="mt-3 md:w-[60%] w-[100%] text-white">
                  <h2 className="md:text-3xl uppercase text-xl mt-4 font-heading mb-6">
                    Our Manufacturing Solutions
                  </h2>
                  <p className="text-white font-heading mt-3 text-justify">
                    Customer Service Solution
                  </p>
                  <p className="font-content mt-2 text-justify">
                    Constructing a collaborative system to strengthen immediate
                    recognition of customers' activities, and accelerate
                    reaction times and completion of duties, can benefit
                    companies in establishing durable connections with their
                    customers.
                  </p>
                  <p className="text-white font-heading mt-4 text-justify">
                    Field Procurement Mobile App
                  </p>
                  <p className="font-content mt-2 text-justify">
                    Our procurement mobile app solution facilitates the
                    streamlining of purchase order creation and increases the
                    efficiency of supply chain procedures and team
                    collaboration.
                  </p>
                  <p className="text-white font-heading mt-3 text-justify">
                    Website Development
                  </p>
                  <p className="font-content mt-2 text-justify">
                    We can help you create a website that is responsive,
                    mobile-friendly, and easy to navigate. Our team of experts
                    will develop a custom solution that will be perfect for your
                    business.
                  </p>
                  <p className="text-white font-heading mt-3 text-justify">
                    Sales & Marketing
                  </p>
                  <p className="font-content mt-2 text-justify">
                    We know that your business is more than just a product line.
                    You're an organization, and you want to make sure you're
                    always meeting the needs of your customers. That's why we
                    offer solutions to help you with everything from sales and
                    marketing to packaging and distribution.
                  </p>
                </div>
                {/* </div> */}
                <div className=" md:w-[40%] w-[100%] text-white mt-3">
                  <img
                    src={manufacturright}
                    alt="Ecommerce Business"
                    // className="w-full"
                    className="md:h-[24rem] mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*end OUR MANUFACTURING  */}
        {/*  center bg section */}
        <div className="mx-auto w-full bg-Manufacturingcenter h-64 py-12 px-4 bg-cover md:bg-top bg-center"></div>

        {/*  center bg section */}
        {/* Bullet Section Ends */}
        {/* slider sectio start */}
        <Healthsilder />
        {/* slider sectio end */}
        {/* start Importance of Technology in the Manufacturing Industry */}
        <div className="mx-auto w-full py-10  ">
          <div className="max-w-[1240px] mx-auto">
            <div className=" py-0 md:py-6 px-8 ">
              <h2 className="text-Primary md:text-3xl uppercase text-xl mt-4 font-heading mb-6">
                Importance
                <span className="text-black">
                  {' '}
                  of Technology in the Manufacturing Industry
                </span>
              </h2>
              <div className="flex flex-wrap justify-center items-center gap-10 md:flex-nowrap md:px-12">
                {/* <div className="flex justify-center gap-10 md:w-[50%] w-[100%] text-white px-8"> */}
                <div className="mt-3 md:w-[60%] w-[100%] ">
                  <p className="font-content mt-2 text-justify">
                    The manufacturing industry has a lot of technological
                    advancements in the manufacturing process, helping the
                    company to create better and more efficient products. The
                    most important thing is that these technological
                    advancements help the company to stay competitive with other
                    companies and make sure that their products are the best in
                    quality
                  </p>
                  <p className="font-content mt-6 text-justify">
                    There are many ways in which technology can be used, such as
                    using machines to do some of the work or using robots to do
                    some of it, but one of the most important things is using
                    software systems and computer technology. Computer software
                    is used for automating many processes in factories and
                    allows businesses to work more efficiently and effectively.
                  </p>
                </div>
                {/* </div> */}
                <div className=" md:w-[40%] w-[100%] text-white mt-3">
                  <img
                    src={manufacturingright}
                    alt="Ecommerce Business"
                    // className="w-full"
                    className="md:h-[24rem] mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* start Importance of Technology in the Manufacturing Industry */}
      </div>
    </div>
  );
};

export default ManufacturingBody;
