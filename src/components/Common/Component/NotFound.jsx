import React from 'react';

const NotFound = () => {
  return (
    <>
      <div className="selection:bg-Green selection:text-white mx-auto w-full md:h-[38rem]  h-96 py-12 px-4 bg-Blogbg bg-cover md:bg-top bg-center">
        {/* Content Section */}
        <div className="flex flex-col justify-center text-center items-center md:h-[35rem] h-96 mx-auto">
          <h1 className="text-white uppercase font-heading py-2 md:text-3xl text-xl mb-3">
            Not Foud
          </h1>
          <p className=" text-center text-white font-subheading   md:text-lg text-xs md:w-[980px] max-w-fit">
            404 NotFound
          </p>
        </div>
        {/* Content Section Ends*/}
      </div>
    </>
  );
};

export default NotFound;
