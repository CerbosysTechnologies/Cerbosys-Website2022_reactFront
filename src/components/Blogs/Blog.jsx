import React from 'react';
import Blogsbody from './Blogsbody';

function Blog() {
  return (
    <>
      <div className="mx-auto w-full md:h-[38rem]  h-96 py-12 px-4 bg-Blogbg bg-cover md:bg-top bg-center">
        {/* Content Section */}
        <div className="flex flex-col justify-center text-center items-center md:h-[35rem] h-96 mx-auto">
          <h1 className="text-white font-heading py-2 md:text-3xl text-xl mb-10 ">
            Blogs
          </h1>
          <p className="text-white font-content py-2 md:text-xl text-xs md:mb-28 mb-24 md:w-[480px] text-justify">
            Explore our development experiences and customer engagement blogs
            for IT companies. That focuses on Web Development Technologies &
            Trends.
          </p>
        </div>
        {/* Content Section Ends*/}
      </div>

      <Blogsbody />
    </>
  );
}

export default Blog;
