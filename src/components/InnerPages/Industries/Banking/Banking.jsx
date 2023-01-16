import React from 'react';
import Navbar from '../../../Navbar/Navbar';
import BankingBody from './BankingBody';
import BankingForm from './BankingForm';
import Footer from '../../../Common/Component/Footer';
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
      </Helmet>
      {/* <Navbar /> */}
      <div className="mx-auto w-full md:h-[36rem] bg-BankingHeader h-96 py-12 px-4 bg-cover md:bg-top bg-center">
        {/* Content Section */}
        <div className="flex flex-col justify-center text-center items-center md:h-[30rem] h-96 mx-auto">
          <h1 className="text-white font-heading py-2 md:text-5xl text-2xl md:mb-48 mb-28">
            Banking And Finance
          </h1>
          <p className="text-white font-heading py-2 md:text-lg text-xs md:w-[980px] text-justify">
            We believe in building long-term relationships with our clients, who
            count on us for high-quality banking and financial services. We
            thrive on providing a wide array of banking and finance services to
            grow our customers' businesses faster.
          </p>
        </div>
        {/* Content Section Ends */}
      </div>
      <BankingBody />
      <BankingForm />
      {/* <Footer /> */}
    </>
  );
};

export default Banking;
