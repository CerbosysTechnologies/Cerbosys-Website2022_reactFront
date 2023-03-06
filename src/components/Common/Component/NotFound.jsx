import React from 'react';
import { Link } from 'react-router-dom';
import eorro404 from '../../../assets/portfolio/eorro404.png';

const NotFound = () => {
  return (
    <>
      <div className="selection:bg-Green selection:text-white mx-auto w-full md:h-[38rem]  h-96 py-12 px-4 bg-Blogbg bg-cover md:bg-top bg-center">
        {/* Content Section */}
        <div className="flex flex-col justify-center text-center items-center md:h-[35rem] h-96 mx-auto">
          <div>
            <img src={eorro404} alt="img" className="md:w-[20rem] w-[14rem]" />
          </div>
          {/* <h1 className="text-white uppercase font-heading py-2 md:text-3xl text-xl mb-3">
            Not Foud
          </h1> */}
          <p className=" text-center text-white font-subheading mt-3   md:text-lg text-xs md:w-[980px] max-w-fit">
            OOPS… Page not found, Please go through the home page
          </p>
          <Link to="/">
            <button className="bg-white text-Primary font-bold mt-3 border-0 px-5 py-2 rounded-lg">
              Go back
            </button>
          </Link>
        </div>
        {/* Content Section Ends*/}
      </div>
    </>
  );
};

export default NotFound;
