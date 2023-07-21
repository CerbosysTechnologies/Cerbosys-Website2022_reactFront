import React from 'react';
import { Helmet } from 'react-helmet';
import Blogsbody from './Blogsbody';

function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog | Cerbosys</title>
        <link rel="canonical" href="https://cerbosys.com/blog" />
        <meta
          name="keywords"
          content="blog, cerbosys, development experience, customer engagement blogs, web development technologies, web development trends"
        />
        <meta name="description" content="" />
      </Helmet>
      <div className="selection:bg-Green selection:text-white mx-auto w-full md:h-[38rem]  h-96 py-12 px-4 bg-Blogbg bg-cover md:bg-top bg-center">
        {/* Content Section */}
        <div className="flex flex-col justify-center text-center items-center md:h-[35rem] h-96 mx-auto">
          <h1 className="text-white uppercase font-heading py-2 md:text-3xl text-xl mb-3">
            Blogs
          </h1>
          <p className=" text-center text-white font-subheading   md:text-lg text-xs md:w-[980px] max-w-fit">
            Explore our development experiences and customer engagement blogs
            for IT companies. That focuses on Web Development Technologies &
            Trends.
          </p>
        </div>
        {/* Content Section Ends*/}
      </div>
      <div className="selection:bg-Green selection:text-white">
        <Blogsbody />
      </div>
    </>
  );
}

export default Blog;
