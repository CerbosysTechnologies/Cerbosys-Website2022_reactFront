import React, { useState, useEffect } from "react";
import { SERVER } from "../../../ServerUrls";
import axios from "axios";
import { AiOutlineClose } from "react-icons/ai";
import Contact from "./Contact";
import imagepopup from "../../../assets/contactus/Getintuch.png";

const FreeQuote = () => {
  // const [serviceitems, setServiceItems] = React.useState([]);
  // const [serviceId, setServiceId] = useState("");

  const toggleModal = () => {
    document.getElementById("modal").style.display = "block";
  };
  const modalclose = () => {
    document.getElementById("modal").style.display = "none";
  };

  return (
    <>
      <div
        className="fixed z-20 top-1/2 right-[-4.55rem] bg-Green
 p-1 px-2 justify-end items-end rotate-90 rounded-bl-3xl rounded-br-3xl text-white"
      >
        <span
          className="uppercase font-heading text-base cursor-pointer "
          onClick={() => {
            toggleModal();
          }}
        >
          Get a Free quote
        </span>
      </div>

      <div
        class="fixed z-10 overflow-y-auto top-0 w-full left-0 hidden"
        id="modal"
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
            className="inline-block bg-white 
            overflow-y-auto
            rounded-lg text-left shadow-xl transform transition-all md:my-32 
            my-32 md:w-10/12"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="grid md:grid-cols-2 mb-4 mt-10  ">
              <div className="mx-10 hidden md:block">
                <img src={imagepopup} alt="" className="h-full w-screen" />
              </div>

              <div className="bg-white md:mx-20 mx-10">
                <div className="flex justify-between">
                  <div className="text-3xl">Get in touch</div>
                  <div>
                    <AiOutlineClose
                      className="text-3xl"
                      onClick={() => modalclose()}
                    />
                  </div>
                </div>

                <Contact />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreeQuote;
