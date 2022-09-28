import axios from "axios";
import React, { useEffect, useState } from "react";

import { AiOutlineClose } from "react-icons/ai";
import { SERVER } from "../../ServerUrls";
import { IMAGE_SERVER } from "../../ServerUrls";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import images from "../../assets/innerpage/healthcare/healthheader.svg";

import { saveAs } from "file-saver";



const CaseStudyBody = () => {
  const IMG =  IMAGE_SERVER + "/casestudyimage/";
  const [AllServices, setAllServices] = useState("");
  const [pdf, setpdf] = useState({
    a: [].casestudy_pdf,
  });
  console.log(pdf);

  var i = AllServices[1];
  // let [...pdf] = i.casestudy_pdf;
  const [email, setEmail] = useState("");

  const modalclose = () => {
    document.getElementById("Suscreption").style.display = "none";
  };

  const saveFile = () => {
    saveAs(
      `https://cerbosys.in:3700/casestudypdf/${i.casestudy_pdf.substring(22)}`,
      `${"Dawnlode"}.pdf`
    );
  };

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
        console.log("Get All case study->", res.data.data);
        setpdf(res.data.data);
        setAllServices(res.data.data);
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
        saveFile();
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
                      src={IMG + `${item.casestudy_image.substr(24)}`}
                      alt="image"
                      className=""
                    />
                    <div className="font-heading  md:text-2xl md:font-bold text-xl ">
                      {item.casestudy_title}
                    </div>

                    <p className="font-content  text-justify text-sm  md:mt-3 mt-10 md:mb-5 mb-4 ">
                      {item.casestudy_description}
                    </p>

                    <div className="flex items-center justify-center">
                      <button
                        className="py-2 px-4 text-sm font-heading 
                        hover:text-white
                        hover:bg-blue-700
              text-center text-Primary rounded-3xl border border-Primary "
                        onClick={(e) => download()}
                      >
                        <div id={item.casestudy_id} value={item.casestudy_pdf}>
                          {/* Download{" "} */}
                          {item.casestudy_pdf.substr(22)}
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p> No service </p>
            )}
          </div>
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
      <ToastContainer />
    </div>
  );
};

export default CaseStudyBody;
