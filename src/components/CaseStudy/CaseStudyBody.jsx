import axios from "axios";
import React, { useEffect, useState } from "react";
import images from "../../assets/innerpage/healthcare/healthheader.svg";
import { SERVER } from "../../ServerUrls";

import SuscreptionPopup from "./SuscreptionPopup";
const CaseStudyBody = () => {
  const IMG = "https://cerbosys.in:3700/casestudyimage/";
  const [AllServices, setAllServices] = useState("");

  const download = () => {
    document.getElementById("Suscreption").style.display = "Block";
  };

  useEffect(() => {
    getallcaseStudy();
  }, []);
  const getallcaseStudy = async () => {
    axios
      .get(SERVER + "/getAllCaseStudy", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log("Get All Services->", res.data.data);

        setAllServices(res.data.data);
      });
  };

  return (
    <div>
      <div className="max-w-[1240px] mx-auto">
        {/* <div className="row    md:mb-5 "> */}
        {/* Left said coll start */}

        <div class="max-w-[1240px] mx-auto">
          <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="flex">
              <div className=" bg-Primary md:w-[600px] w-[600px] square mt-5 md:p-10  text-justify   md:px-10 px-5 md:mx-10 mx-10 py-5 md:col-6 rounded-lg  shadow-2xl mb-52">
                <div className=" font-heading  md:text-2xl md:font-bold text-xl">
                  ENCAPSULATING SOLUTIONS, ARCHITECTURE, BUSINESS MODEL
                </div>
                <p className="font-content  text-justify text-sm  md:mt-3 mt-10 md:mb-5 mb-4 ">
                  On-demand solutions have become the new normal for many
                  businesses and entrepreneurs undertaking the advantages of
                </p>
                <br />
                <p className="font-content  text-justify text-sm  md:mt-3 mt-10 md:mb-5 mb-4">
                  On-demand solutions have become the new normal for many
                  businesses and entrepreneurs undertaking the advantages of
                </p>
              </div>
              <div className="md:h-40 h-0"></div>
            </div>

            {AllServices ? (
              AllServices.map((item) => (
                <div class="flex justify-center  rounded-xl p-6 ">
                  <div className="md:w-[600px] w-[600px] md:px-10 px-5 py-5 md:col-6 rounded-lg bg-white mt-10 shadow-2xl  ">
                    <img
                      src={IMG + `${item.casestudy_image.substr(15)}`}
                      alt="image"
                      className=""
                    />
                    <div className="font-heading  md:text-2xl md:font-bold text-xl ">
                      {item.casestudy_title}
                    </div>

                    <p className="font-content  text-justify text-sm  md:mt-3 mt-10 md:mb-5 mb-4 ">
                      {item.casestudy_description}
                    </p>
                    <div
                      className="cursor-pointer bg-blue-500  tbg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-center w-fit md:mx-52"
                      onClick={() => download()}
                      id="d2"
                    >
                      {item.casestudy_pdf}
                      download
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p> No service </p>
            )}

            <div class="flex justify-center  rounded-xl p-6 ">
              <div className="md:w-[600px] w-[600px] md:px-10 px-5 py-5 md:col-6 rounded-lg bg-white mt-10 shadow-2xl  ">
                <img src={images} alt="" className="" />
                <div className="  font-heading  md:text-2xl md:font-bold text-xl ">
                  Fitness App Solutions
                </div>

                <p className="font-content  text-justify text-sm  md:mt-3 mt-10 md:mb-5 mb-4 ">
                  On-demand solutions have become the new normal for many
                  businesses and entrepreneurs undertaking the advantages of
                  recent development in the application space due its increasing
                </p>
                <div
                  className="cursor-pointer bg-blue-500  tbg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-center w-fit md:mx-52"
                  onClick={() => download()}
                  id="d2"
                >
                  download
                </div>
              </div>
            </div>

            <div class="flex justify-center  rounded-xl p-6 ">
              <div className="md:w-[600px] w-[600px] md:px-10 px-5 py-5 md:col-6 rounded-lg bg-white mt-10 shadow-2xl  ">
                <img src={images} alt="" className="" />
                <div className="  font-heading  md:text-2xl md:font-bold text-xl ">
                  Fitness App Solutions
                </div>

                <p className="font-content  text-justify text-sm  md:mt-3 mt-10 md:mb-5 mb-4 ">
                  On-demand solutions have become the new normal for many
                  businesses and entrepreneurs undertaking the advantages of
                  recent development in the application space due its increasing
                </p>
                <div
                  className="cursor-pointer bg-blue-500  tbg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-center w-fit md:mx-52"
                  onClick={() => download()}
                  id="d2"
                >
                  download
                </div>
              </div>
            </div>

            <div class="flex justify-center  rounded-xl p-6 ">
              <div className="md:w-[600px] w-[600px] md:px-10 px-5 py-5 md:col-6 rounded-lg bg-white mt-10 shadow-2xl  ">
                <img src={images} alt="" className="" />
                <div className="  font-heading  md:text-2xl md:font-bold text-xl ">
                  Fitness App Solutions
                </div>

                <p className="font-content  text-justify text-sm  md:mt-3 mt-10 md:mb-5 mb-4 ">
                  On-demand solutions have become the new normal for many
                  businesses and entrepreneurs undertaking the advantages of
                  recent development in the application space due its increasing
                </p>
                <div
                  className="cursor-pointer bg-blue-500  tbg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-center w-fit md:mx-52"
                  onClick={() => download()}
                  id="d2"
                >
                  download
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Left said coll end */}

        {/* Right said coll start */}

        {/* <div className="col-6  ">
            <div className="md:w-[600px] w-[600px] md:px-10 px-5 py-5 rounded-lg bg-white mt-10 shadow-2xl ">
              <img src={images} alt="" className="" />
              <div className="  font-heading  md:text-2xl md:font-bold text-xl">
                Fitness App Solutions
              </div>

              <p className="font-content  text-justify  md:mt-3 mt-10 md:mb-5 mb-4">
                On-demand solutions have become the new normal for many
                businesses and entrepreneurs undertaking the advantages of
                recent development in the application space due its increasing
                penchant and profitability On-demand solutions have become the
                new normal for many businesses and entrepreneurs undertaking the
                advantages of recent development in the application space due
              </p>
              <div className=" cursor-pointer bg-blue-500  tbg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-center w-fit md:mx-52">
                download
              </div>
            </div>

            <div className="md:w-[600px] w-[600px] md:px-10 px-5 py-5 rounded-lg bg-white mt-10 shadow-2xl ">
              <img src={images} alt="" className="" />
              <div className=" font-heading  md:text-2xl md:font-bold text-xl ">
                Fitness App Solutions
              </div>

              <p className="ffont-content  text-justify  md:mt-3 mt-10 md:mb-5 mb-4">
                On-demand solutions have become the new normal for many
                businesses and entrepreneurs undertaking the advantages of
                recent development in the application space due its increasing
                penchant and profitability On-demand solutions have become the
                new normal for many businesses and entrepreneurs undertaking the
                advantages of recent development in the application space due
              </p>
              <div className=" cursor-pointer bg-blue-500  tbg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-center w-fit md:mx-52">
                download
              </div>
            </div>
            <div className="md:w-[600px] w-[600px] md:px-10 px-5 py-5 rounded-lg bg-white mt-10 shadow-2xl  ">
              <img src={images} alt="" className="" />
              <div className="  font-heading  md:text-2xl md:font-bold text-xl ">
                Fitness App Solutions
              </div>

              <p className="font-content  text-justify  md:mt-3 mt-10 md:mb-5 mb-4">
                On-demand solutions have become the new normal for many
                businesses and entrepreneurs undertaking the advantages of
                recent development in the application space due its increasing
                penchant and profitability On-demand solutions have become the
                new normal for many businesses and entrepreneurs undertaking the
                advantages of recent development in the application space due
              </p>
              <div className="cursor-pointer bg-blue-500  tbg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-center w-fit md:mx-52">
                Download
              </div>
            </div>
          </div> */}
        {/* Right said coll End */}
        {/* </div> */}
      </div>
      <SuscreptionPopup />
    </div>
  );
};

export default CaseStudyBody;
