import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../../../Common/Component/Footer';
import Navbar from '../../../Navbar/Navbar';
import { EcommerceBody } from './EcommerceBody';
import EcommerceForm from './EcommerceForm';

const Ecommerce = () => {
  return (
    <div>
      <>
        <Helmet>
          <title>
            Ecommerce marketing solutions that drive sales | Cerbosys{' '}
          </title>
          <meta
            name="keywords"
            content="cost to create an ecommerce website, cost to develop an e commerce website, e commerce web development company, ecommerce development services, ecommerce website design and development, best ecommerce platform, e commerce website design, wordpress ecommerce, magento ecommerce, wix ecommerce, b2b ecommerce, ecommerece solutions, magento, shopify, opencart, drupal, joomla, prestashop, woocommerce"
          />
        </Helmet>
        {/* <Navbar /> */}
        <div className="mx-auto w-full md:h-[36rem] bg-EcommerceHeader h-96 py-12 px-4 bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[30rem] h-96 mx-auto">
            <h1 className="text-white font-heading py-2 md:text-5xl text-2xl md:mb-48 mb-28">
              Ecommerce And Retail
            </h1>

            <p className="text-white font-subheading  py-2 md:text-lg text-xs md:w-[980px] text-justify">
              Our e-commerce offerings can help you determine the best online
              marketplace to sell your products and reach more customers. Our
              result-oriented approach will help you achieve your business
              goals.
            </p>
          </div>
          {/* Content Section Ends */}
        </div>
      </>
      <EcommerceBody />
      <EcommerceForm />
      {/* <Footer /> */}
    </div>
  );
};

export default Ecommerce;
