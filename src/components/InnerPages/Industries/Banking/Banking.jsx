import React from 'react';
// import Navbar from '../../../Navbar/Navbar';
import BankingBody from './BankingBody';
import BankingForm from './BankingForm';
// import Footer from '../../../Common/Component/Footer';
import { Helmet } from 'react-helmet';

const Banking = () => {
  return (
    <>
      <Helmet>
        <title>Top core banking software development company- Cerbosys </title>
        <meta
          name="keywords"
          content="Web Apps for Internet Banking, Finance solutions, banking solutions, banking and finance solutions, banking app solutions, latest technology trends "
        />

        <meta
          name="description"
          content="We work tirelessly to help you meet both banking compliance requirements and business goals. Leverage the power of PPC, SEO, Social, content & more."
        />
          <link rel="canonical" href="https://cerbosys.com/banking-and-finance" />

      </Helmet>
      {/* <Navbar /> */}
      <div className="selection:bg-Green selection:text-white mx-auto w-full md:h-[36rem] bg-Bankingbg h-96 py-12 px-4 bg-cover md:bg-top bg-center">
        {/* Content Section */}
        <div className="flex flex-col justify-center text-center items-center md:h-[30rem] h-70 mx-auto">
          <h1 className="text-white uppercase font-heading pt-2  md:text-5xl text-2xl md:mb-4 min-w-fit">
            BANKING & FINANCE
          </h1>
          <p className=" text-center text-Skyblue font-subheading   md:text-lg text-xs md:w-[980px] max-w-fit">
            By leveraging our banking, finance, and insurance services,
            organizations can expect to experience increased efficiency, fresh
            innovations, and reduced costs. Enhance your credibility with
            cutting-edge web design for banking.
          </p>
        </div>
        {/* Content Section Ends */}
      </div>
      <div className="selection:bg-Green selection:text-white">
        <BankingBody />
        <BankingForm />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Banking;
