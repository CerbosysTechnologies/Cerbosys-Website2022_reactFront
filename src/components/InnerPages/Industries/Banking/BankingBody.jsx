import React from 'react';
import bankingmobicon from '../../../../assets/innerpage/banking/bankingmob.svg';
import bankingbusinessicon from '../../../../assets/innerpage/banking/bankingimage.svg';
import bankingleftimg from '../../../../assets/innerpage/banking/bankingleftimg.png';
import bankingrightimg from '../../../../assets/innerpage/banking/bankingrightimg.png';
import bankingicon1 from '../../../../assets/innerpage/banking/bankingicon1.png';
import bankingicon2 from '../../../../assets/innerpage/banking/bankingicon2.png';
import bankingicon3 from '../../../../assets/innerpage/banking/bankingicon3.png';
import bankingicon4 from '../../../../assets/innerpage/banking/bankingicon4.png';
import Ecommercesilder from '../Ecommerce/Ecommercesilder';
import Bankingtext from './Bankingtext';
const BankingBody = () => {
  const data = [
    {
      img: bankingicon1,
      title: 'CRM/ERP',
    },
    {
      img: bankingicon2,
      title: 'Cash Management System',
    },
    {
      img: bankingicon3,
      title: 'Mobile Banking',
    },
    {
      img: bankingicon4,
      title: 'Web Apps for Internet Banking',
    },
  ];
  return (
    <div>
      <div className="mx-auto w-full py-10 px-4 ">
        <div className="max-w-[1240px] mx-auto">
          {/* Image Section */}
          <div>
            <div className="mx-auto w-full py-4 md:py-10 px-4 ">
              <div className="max-w-[1240px] mx-auto">
                {/* Image Section */}
                <div className="w-full mt-4">
                  <div className="flex flex-wrap md:flex-nowrap justify-between  md:gap-10 p-0 md:p-6">
                    <div className="md:w-[50%] w-[100%]">
                      <img
                        src={bankingleftimg}
                        alt="img"
                        className="md:h-[24rem] w-full"
                      />
                    </div>
                    <div className="md:w-[50%] w-[100%]">
                      <h1 className="text-Secondary font-heading  md:text-3xl text-xl md:mb-5 min-w-fit mt-5 md:mt-0">
                        BANKING<span className="text-Green"> &</span> FINANCE
                      </h1>
                      <p className="mt-2 min-w-fit">
                        The banking and finance sector is one of the
                        fastest-growing sectors in the digital landscape, with
                        strong growth potential. The sector has been dominated
                        by a few large players for years, but the rapid rise of
                        new technologies has opened up many opportunities for
                        smaller firms to enter this market. IT trends &
                        technologies can improve the banking & finance sector in
                        the following ways:
                      </p>
                      <ol className="list-decimal px-4">
                        <li>Financial Services Marketplaces</li>
                        <li>Data Analytics for Asset Management</li>
                        <li>
                          {' '}
                          Personalized Customer Service for Banking Customers
                        </li>
                        <li>Fintech Startups (Digital Assets)</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bullet Section */}
          {/* <div className="flex flex-wrap flex-col mx-auto">
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
          </div> */}

          {/* Bullet Section Ends*/}
        </div>
      </div>
      {/*start slider sections */}
      <div className="mx-auto w-full h-fit-content md:h-[36rem] bg-EcommersBodybg  py-12  bg-cover md:bg-top bg-center">
        <div className="max-w-[1240px] mx-auto ">
          <div className="px-8 md:px-12">
            <div>
              {/* "font-heading md:text-3xl text-xl mt-10 text-center text-Primary" */}
              <p className="text-white text-center uppercase md:text-3xl text-xl mt-4 font-heading mb-6">
                Our Portfolio
              </p>
            </div>
            <Ecommercesilder />
          </div>
        </div>
      </div>
      {/*end slider sections */}
      {/*start Need of technology in Banking & Finance sector */}
      <div className="max-w-[1240px] mx-auto ">
        <div className="mx-auto w-full py-4 md:py-10 px-4 ">
          <div className="max-w-[1240px] mx-auto">
            {/* Image Section */}
            <div className="w-full mt-4">
              <h1 className="text-Secondary uppercase font-heading  md:text-3xl text-xl md:mb-5 min-w-fit mt-5 md:mt-0">
                Need of technology
                <span className="text-black"> in Banking & Finance sector</span>
              </h1>
              <div className="flex flex-wrap md:flex-nowrap justify-between  md:gap-10 p-6 md:p-0">
                <div className="md:w-[50%] w-[100%] mt-3">
                  <p className="mt-2 min-w-fit">
                    In the banking and finance sector, technology is being used
                    to provide better services to customers.
                  </p>
                  <p>
                     Banks need technology to be able to process transactions
                    quickly and efficiently, as well as integrate with other
                    financial institutions.
                  </p>
                  <p>
                    For example, many banks have started offering online banking
                    services through their websites. This allows you to access
                    your account information from anywhere in the world. You can
                    also use the same website to make payments or transfer money
                    between accounts.
                  </p>
                  <p>
                    The benefits of using technology in this industry are many:
                  </p>
                   
                  <ol className="list-decimal px-4">
                    <li>
                      {' '}
                      You can access your money 24/7, even during weekends and
                      holidays
                    </li>
                    <li>You can pay bills or transfer money electronically</li>
                    <li>
                      {' '}
                      You can get notifications about important events (such as
                      when your payment due date arrives)
                    </li>
                  </ol>
                </div>
                <div className="md:w-[50%] w-[100%] mt-3">
                  <img
                    src={bankingrightimg}
                    alt="img"
                    className="md:h-[24rem] w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*end Need of technology in Banking & Finance sector  */}
      {/* center bg sections */}
      <div className="mx-auto w-full bg-Bankingbgcenter h-64 py-12 px-4 bg-cover md:bg-top bg-center"></div>
      {/*end center bg sections */} {/* start Our Products and Services*/}
      <div className="bg-Primary h-fit-content md:h-[500px] py-8">
        <div className="max-w-[1240px] mx-auto ">
          <h2 className="text-white uppercase text-center md:text-3xl text-xl mt-5 font-heading mb-4">
            Our Products and Services
          </h2>
          <p className="text-white text-center font-content  mt-6 ">
            {' '}
            As part of our service portfolio, we provide an end-to-end software
            development lifecycle and meet a range of business needs.
          </p>
          <div className="flex text-white flex-wrap text-center  md:flex-nowrap  justify-between gap-5 mt-8 px-8">
            {data &&
              data.map((curent, ind) => {
                return (
                  <>
                    <div className="w-full mx-auto" key={ind}>
                      <div className="mx-auto hover:animate-bouns-hand cursor-pointer">
                        <img
                          src={curent.img}
                          alt="img"
                          className="md:h-[12rem] mx-auto transition ease-in-out hover:-translate-y-5 hover:ease-in-out cursor-pointer"
                        />
                      </div>
                      <p className="text-white text-center font-subheading  mt-6">
                        {curent.title}
                      </p>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
      {/* <Bankingtext /> */}
      {/* end Our Products and Services*/}
    </div>
  );
};

export default BankingBody;
