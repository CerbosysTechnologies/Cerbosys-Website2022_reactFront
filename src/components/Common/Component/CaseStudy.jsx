import React from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "./Footer";
import images from "../../../assets/innerpage/healthcare/healthheader.svg";

function CaseStudy() {
  return (
    <div>
      <Navbar />

      <div className="mx-auto w-full md:h-screen h-full py-16 px-4 bg-Hero bg-cover md:bg-top bg-center">
        <div className="flex flex-col justify-center text-center items-center h-3/4 mx-auto">
          {/* Home Contet Animation start */}
          <p className="text-white text-center font-heading py-3 md:text-6xl text-xl md:w-[1000px] w-[400px] mb-8 md:mt-2 mt-24">
            {/* The Ideal Web and Mobile Solutions for your emerging business- You’re just one click away!! */}
            <span className="whitespace-nowrap text-white text-center font-heading py-3 md:text-5xl text-xl md:w-[1000px] w-[400px] mb-8 md:mt-2 mt-24">
              Nots Help For you
            </span>
          </p>
          {/* animation for buthhon end */}
          <p className="font-heading text-white md:text-base text-xs md:mt-3 mt-10">
            {/* <div style={exampleStyle}> */}
            <div className="uppercase flex md:mt-8">
              The think tank research and development
            </div>
          </p>
        </div>
      </div>
      {/* For body  */}
      <div className="max-w-[1240px] mx-auto">
        <div className="row   md:flex flex-row-reverse">
          <div className="col-6 md:px-10 px-5 py-5">
            <div className=" bg-Primary md:w-[600px] w-[600px] mt-10   ">
              <div className="  text-white text-center font-heading px-10 md:text-3xl text-xl  mb-8 py-3 md:mt-2 mt-24">
                ENCAPSULATING SOLUTIONS, ARCHITECTURE, BUSINESS MODEL
              </div>
              <p className="font-heading  md:text-base text-xs md:mt-3 mt-10 ">
                On-demand solutions have become the new normal for many
                businesses and entrepreneurs undertaking the advantages of
                recent development in the application space due its increasing
                penchant and profitability
              </p>
              <br />
              <p className="font-heading  md:text-base text-xs md:mt-3 mt-10">
                On-demand solutions have become the new normal for many
                businesses and entrepreneurs undertaking the advantages of
                recent development in the application space due its increasing
                penchant and profitability
              </p>
            </div>
            <div className="md:w-[600px] w-[600px] md:px-10 px-5 py-5 bg-red-600 mt-10  ">
              <img src={images} alt="" className="" />
              <div className=" md:text-xl text-xl ">Fitness App Solutions</div>

              <p className="font-heading  md:text-base text-xs md:mt-3 mt-10">
                On-demand solutions have become the new normal for many
                businesses and entrepreneurs undertaking the advantages of
                recent development in the application space due its increasing
                penchant and profitability On-demand solutions have become the
                new normal for many businesses and entrepreneurs undertaking the
                advantages of recent development in the application space due
              </p>
              <div className=" text-xl md:text-xl bg-Primary  hover:bg-blue-500   cursor-pointer text-white rounded-xl p-2  w-fit">
                download
              </div>
            </div>
          </div>
          <div className="col-6  ">
            {/* md:h-1/2 h-1/2 md:w-1/2 w-1/2 */}
            <div className="md:w-[600px] w-[600px] md:px-10 px-5 py-5 bg-lime-400 mt-10 ">
              <img src={images} alt="" className="" />
              <div className=" md:text-xl text-xl ">Fitness App Solutions</div>

              <p className="font-heading  md:text-base text-xs md:mt-3 mt-10">
                On-demand solutions have become the new normal for many
                businesses and entrepreneurs undertaking the advantages of
                recent development in the application space due its increasing
                penchant and profitability On-demand solutions have become the
                new normal for many businesses and entrepreneurs undertaking the
                advantages of recent development in the application space due
              </p>
              <div className=" text-xl md:text-xl bg-Primary  hover:bg-blue-500   cursor-pointer text-white rounded-xl p-2  w-fit">
                download
              </div>
            </div>
            <div className=" bg-Primary md:w-[600px] w-[600px] py-5 mt-10   ">
              <div className="  text-white text-center font-heading px-10 md:text-3xl text-xl  mb-8 py-3 md:mt-2 mt-24">
                ENCAPSULATING SOLUTIONS, ARCHITECTURE, BUSINESS MODEL
              </div>
              <p className="font-heading  md:text-base text-xs md:mt-3 mt-10 ">
                On-demand solutions have become the new normal for many
                businesses and entrepreneurs undertaking the advantages of
                recent development in the application space due its increasing
                penchant and profitability
              </p>
              <br />
              <p className="font-heading  md:text-base text-xs md:mt-3 mt-10">
                On-demand solutions have become the new normal for many
                businesses and entrepreneurs undertaking the advantages of
                recent development in the application space due its increasing
                penchant and profitability
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CaseStudy;
