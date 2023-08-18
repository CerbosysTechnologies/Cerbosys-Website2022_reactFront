import React from 'react';
import { Helmet } from 'react-helmet';
// import Footer from '../../../Common/Component/Footer';
// import Navbar from '../../../Navbar/Navbar';
import { EcommerceBody } from './EcommerceBody';
import EcommerceForm from './EcommerceForm';
import Ecommerceservices from './Ecommerceservices';

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
          <meta
            name="description"
            content="Custom eCommerce website development services to increase conversion rates and online visibility. We help to build robust digital commerce strategies & implementation plans for clients. 
            "
          />
          {/* <link rel="canonical" href="https://cerbosys.com/ecommerce-and-retail" /> */}

        </Helmet>
        {/* <Navbar /> */}
        <div className="selection:bg-Green selection:text-white mx-auto w-full md:h-[36rem] bg-EcommerceHeader h-96 py-12 px-4 bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[30rem] h-70 mx-auto">
            <h1 className="text-white uppercase font-heading pt-2  md:text-5xl text-2xl md:mb-4 min-w-fit">
              Ecommerce And Retail
            </h1>
            <p className=" text-center text-Skyblue font-subheading   md:text-lg text-xs md:w-[980px] max-w-fit">
              Your needs are our priority when it comes to developing<br></br>{' '}
              ecommerce websites.
            </p>
            <p className=" text-Skyblue font-subheading  py-2 md:text-lg text-xs md:w-[980px] max-w-fit">
              We create custom e-commerce solutions that truly fit your<br></br>{' '}
              brand identity, making it a beautiful and irresistible storefront
              to shop.
            </p>
          </div>
          {/* Content Section Ends */}
        </div>
      </>
      <div className="selection:bg-Green selection:text-white">
        <EcommerceBody />
        <Ecommerceservices />
        <EcommerceForm />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Ecommerce;
