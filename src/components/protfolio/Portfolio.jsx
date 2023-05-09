import React from 'react';
import Portfoliobody from './Portfoliobody';
import { Helmet } from 'react-helmet';


const Portfolio = () => {
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
      <div className="">
        <Portfoliobody />
      </div>
    </>
  );
};

export default Portfolio;
