import React from 'react';
import Portfoliobody from './Portfoliobody';
import { Helmet } from 'react-helmet';

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio - Web Design and Development Company from India</title>
        <meta
          name="keywords"
          content="
          
          "
        />

        <meta
          name="description"
          content="Our team of experts always uses the latest technologies in web development like HTML 5, Reactjs, MongoDB etc. Also, the elements
           of design, are the building blocks used by the designers"
        />
        {/* <link rel="canonical" href="https://cerbosys.com/Portfolio" /> */}
      </Helmet>
      <div className="">
        <Portfoliobody />
      </div>
    </>
  );
};

export default Portfolio;
