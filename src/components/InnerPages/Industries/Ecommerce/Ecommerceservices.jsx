import React from 'react';
import icon1img from '../../../../assets/innerpage/ecommerce/icon1img.png';
import icon2img from '../../../../assets/innerpage/ecommerce/icon2img.png';
import icon3img from '../../../../assets/innerpage/ecommerce/icon3img.png';
import icon4img from '../../../../assets/innerpage/ecommerce/icon4img.png';
import icon5img from '../../../../assets/innerpage/ecommerce/icon5img.png';
import icon6img from '../../../../assets/innerpage/ecommerce/icon6img.png';
import sicon1 from '../../../../assets/innerpage/ecommerce/sicon1.png';
import sicon2 from '../../../../assets/innerpage/ecommerce/sicon2.png';
import sicon3 from '../../../../assets/innerpage/ecommerce/sicon3.png';
import sicon4 from '../../../../assets/innerpage/ecommerce/sicon4.png';
import ecommersmulty from '../../../../assets/innerpage/ecommerce/ecommersmulty.png';
const Ecommerceservices = () => {
  const data = [
    {
      img: icon1img,
      para: 'Our skilled solution architects will design, build, and structure well-coordinated microservices and their related parts into a functioning ecommerce system. This architectural style is ideal for swiftly scaling ecommerce companies.',
      title: 'Microservices-Based Ecommerce',
    },
    {
      img: icon2img,
      para: 'Maximize your business reach by employing an effective multi store platform. Your store will be capable of handling numerous functions and catalogs with efficient organization and ease.',
      title: 'Online Multistore',
    },
    {
      img: icon3img,
      para: 'A marketplace, crafted with an optimized architecture, provides an easy-to-use interface for three major parties - owners/administrators, merchants, and shoppers - to manage transactions, payments, and sales for a multitude of products and services. ',
      title: ' Online Marketplaces',
    },
    {
      img: icon4img,
      para: 'Our expertise in designing and setting up workflows is employed to support the various needs of retail businesses - vendor management, customer engagement, brand development, and catalog sharing - once their portal goals are clearly defined. ',
      title: 'Web Portals',
    },
    {
      img: icon5img,
      para: "Through a detailed evaluation of your enterprise's context, we design B2C websites with visually pleasing UI, practical customization, automated scalability, and the possibility of producing maximum conversions.",

      title: ' B2C Ecommerce',
    },
    {
      img: icon6img,
      para: 'We create user journeys tailored to B2B buyers who are highly rational and encourage their risky decision-making in the process. ',
      title: ' B2B Ecommerce',
    },
  ];
  return (
    <>
      <div>
        {/*start Our Solutions & Services for E-commerce & Retail Industry */}
        <div className="max-w-[1240px] mx-auto ">
          <h2 className="text-Secondary md:text-3xl text-xl mt-4 font-heading text-center mb-6">
            Our Solutions & Services
            <span className="text-black">
              {' '}
              for E-commerce & Retail Industry
            </span>
          </h2>
          <div className="flex flex-wrap mt-4 pt-3">
            {data &&
              data.map((curent, ind) => {
                return (
                  <>
                    <div
                      className="flex flex-wrap w-full md:w-1/2  mt-3 pt-4 px-2"
                      key={ind}
                    >
                      <div className="w-1/3 h-full text-center ">
                        <img
                          src={curent.img}
                          alt="img"
                          className="inline w-32"
                        />
                        <p className="text-base   font-semibold mt-3">
                          {curent.title}
                        </p>
                      </div>

                      <div class="w-2/3 px-3 md:px-0">
                        <p className="text-sm  md:text-base text-start text-Lightgrey ">
                          {curent.para}
                        </p>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
        {/* end Our Solutions & Services for E-commerce & Retail Industry */}
        {/* start Choose Cerbosys as Your Tech Partner */}
        <div className="bg-Primary p-4 mt-5">
          <div className="flex flex-wrap">
            <div>
              <img src={ecommersmulty} alt="img" />
            </div>
            <div className="text-white">
              <p className="md:text-3xl text-xl mt-4 font-heading text-center mb-6">
                Why Choose Cerbosys as Your Tech Partner
              </p>
              <p>
                When you work with us, we'll listen to your needs, then build a
                <br></br>
                custom solution that's exactly right for you.
              </p>
              <p className="mt-3">
                We'll take the time to understand what makes your business stand
                <br></br>
                out, then develop a website that reflects those strengths and
                helps<br></br> you grow.
              </p>
              <div class="flex flex-wrap justify-between mt-3">
                <div className="">
                  <div className="flex mt-2  pt-3">
                    <div>
                      <img src={sicon1} alt="img" className="w-14 md:w-20" />
                    </div>
                    <div className="self-center ml-2">
                      {' '}
                      <p className="text-lg font-heading">
                        Trustworthy Services
                      </p>
                    </div>
                  </div>
                  <div className="flex mt-2  pt-3">
                    <div>
                      <img src={sicon3} alt="img" className="w-14 md:w-20" />
                    </div>
                    <div className="self-center ml-2">
                      {' '}
                      <p className="text-lg  font-heading">
                        Increase Your Business’s<br></br> Performance
                      </p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="flex mt-2  pt-3">
                    <div>
                      <img src={sicon4} alt="img" className="w-14 md:w-20" />
                    </div>
                    <div className="self-center ml-2">
                      {' '}
                      <p className="md:text-lg   font-heading">
                        Expand Your <br></br>Technology Expertise
                      </p>
                    </div>
                  </div>
                  <div className="flex mt-2 pt-3">
                    <div>
                      <img src={sicon2} alt="img" className="w-14 md:w-20" />
                    </div>
                    <div className="self-start ml-2 md:self-center">
                      {' '}
                      <p className="text-lg  font-heading">
                        Time and Cost<br></br> Optimization
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end Choose Cerbosys as Your Tech Partner */}
      </div>
    </>
  );
};

export default Ecommerceservices;
