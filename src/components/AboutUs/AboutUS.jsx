import React from "react";

function AboutUS() {
  return (
    <>
      <div className="mx-auto w-full md:h-[38rem]  h-96 py-12 px-4 bg-Aboutus bg-cover md:bg-top bg-center">
        {/* Content Section */}
        <div className="flex flex-col justify-center text-center items-center md:h-[35rem] h-96 mx-auto">
          <p className="text-white font-heading py-2 md:text-3xl text-xl mb-10 ">
            AboutUS
          </p>
          <p className="text-white font-heading py-2 md:text-xl text-xs md:mb-28 mb-24 md:w-[480px] text-justify">
            <p className="font-content  md:text-sm text-xs font-extrabold  ">
              Cerbosys is an experienced professional services provider company
              with a proven track record of excellence which fosters long-term
              relationships with our clients.
              <br></br>
              <br></br>
              Our ability to understand and problem-solve complex client issues
              in multiple business areas helps us differentiate in the services
              sector. Our mission is to ensure consistent growth in the
              performance of our clients.
            </p>
          </p>
        </div>
        {/* Content Section Ends*/}
      </div>{" "}
    </>
  );
}

export default AboutUS;
