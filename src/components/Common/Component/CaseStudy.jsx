import React, { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "./Footer";
import images from "../../../assets/innerpage/healthcare/healthheader.svg";
import { AiOutlineClose } from "react-icons/ai";
import { SERVER } from "../../../ServerUrls";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
function CaseStudy() {
  // hooks
  const [email, setEmail] = useState("");

  const download = () => {
    document.getElementById("Suscreption").style.display = "Block";
  };
  const modalclose = () => {
    document.getElementById("Suscreption").style.display = "none";
  };

  //download
  const dwanlod1 = () => {
    fetch("pdf/pdf.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Dawnlod1.pdf";
        alink.click();
      });
    });
  };

  // call suscreption api
  const handleSubmit = (e) => {
    e.preventDefault();
    const insertData = {
      subscription_email: email,
    };
    console.log("befor insertSubscription", insertData);
    axios
      .post(SERVER + "/insertSubscription", insertData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log("Insert insertSubscription Res", res);
        dwanlod1();
        document.getElementById("Suscreption").style.display = "none";
      })
      .catch((err) => {
        console.log("not post", err);
        toast.error("something wrong");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      });
  };

  return (
    <div>
      <Navbar />
      {/* Header iamge and cotent start */}
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
      {/* Header iamge and cotent end */}
      {/* For body  */}
      <div className="max-w-[1240px] mx-auto">
        <div className="row  md:flex  sm:flex-coll-reverse  md:mb-5 ">
          {/* Left said coll start */}
          <div className="col-6 md:px-10 px-5 py-5">
            <div className=" bg-Primary md:w-[600px] w-[600px] mt-5 md:p-10 text-justify  shadow-2xl rounded-lg  ">
              <div className="  text-white text-center font-heading px-10 md:text-3xl text-xl  mb-8 py-3 md:mt-2 mt-24">
                ENCAPSULATING SOLUTIONS, ARCHITECTURE, BUSINESS MODEL
              </div>
              <p className="font-heading  md:text-base text-xs md:mt-3 mt-10 ">
                On-demand solutions have become the new normal for many
                businesses and entrepreneurs undertaking the advantages of
              </p>
              <br />
              <p className="font-heading  md:text-base text-xs md:mt-3 mt-10">
                On-demand solutions have become the new normal for many
                businesses and entrepreneurs undertaking the advantages of
              </p>
            </div>
            {/* Main comtent card start*/}
            <div className="md:w-[600px] w-[600px] md:px-10 px-5 py-5 bg-white mt-10 shadow-2xl rounded-lg ">
              <img src={images} alt="" className="" />
              <div className=" font-heading  md:text-2xl md:font-bold text-xl ">
                Fitness App Solutions
              </div>

              <p className="font-content text-justify   text-md md:mt-3 mt-10 md:mb-5 mb-4 ">
                On-demand solutions have become the new normal for many
                businesses and entrepreneurs undertaking the advantages of
                recent development in the application space due its increasing
              </p>
              <div
                className=" cursor-pointer bg-blue-500  tbg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-center w-fit md:mx-52"
                onClick={() => download()}
                id="d1"
              >
                download
              </div>
            </div>
            <div className="md:w-[600px] w-[600px] md:px-10 px-5 py-5 rounded-lg bg-white mt-10 shadow-2xl  ">
              <img src={images} alt="" className="" />
              <div className="  font-heading  md:text-2xl md:font-bold text-xl ">
                Fitness App Solutions
              </div>

              <p className="font-content  text-justify  md:mt-3 mt-10 md:mb-5 mb-4 ">
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
            {/* Main comtent card  End*/}
          </div>
          {/* Left said coll end */}

          {/* Right said coll start */}

          <div className="col-6  ">
            {/* md:h-1/2 h-1/2 md:w-1/2 w-1/2 */}
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
          </div>
          {/* Right said coll End */}
        </div>
      </div>
      {/* Suscreption Popup start */}
      <div
        className="fixed z-10 overflow-y-auto top-0 w-full left-0 hidden"
        id="Suscreption"
      >
        <div className="flex items-center justify-center max-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-900 opacity-75" />
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
            &#8203;
          </span>

          {/* To open contact form */}
          <div
            className="inline-block
            md:mt-40 mt-40
            md:w-1/3 w-96 border-blue-700 border-4
            bg-white 
             justify-center
             justify-items-center
            rounded-lg text-left shadow-xl transform transition-all"
          >
            <div className="justify-between flex">
              <div className=""></div>
              <div className=" bg-blue-700">
                <AiOutlineClose
                  className="text-3xl"
                  onClick={() => modalclose()}
                />
              </div>{" "}
            </div>
            <div className="     p-5 md:p5    ">
              <div className="font-heading  md:text-2xl md:font-bold text-xl">
                Please Enter Email Address to Download The Whitepaper.
              </div>
              <form onSubmit={(e) => handleSubmit(e)}>
                {/* Email Div */}
                <div className="mb-6 pt-10 md:w-full group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block py-2.5 px-0 w-full font-heading text-sm text-gray-900 bg-transparent border-0 border-b-2 
      border-gray-300 appearance-none  dark:border-gray-400 
       focus:outline-none focus:ring-0 peer"
                    placeholder="Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                {/* Email Div Ends*/}
                <input
                  className="mt-6 mb-6 bg-Primary text-white font-heading py-2 px-4 rounded "
                  type="submit"
                  value="Submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Suscreption Popup End */}
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default CaseStudy;
