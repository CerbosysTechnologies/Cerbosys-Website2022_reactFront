import React, { useEffect, useState } from "react";
import axios from "axios";

import blogpost from "../../assets/Blogs/blogpost.png";
import air from "../../assets/Blogs/air.png";
import { SERVER } from "../../ServerUrls";

function Blogsbody() {
  const [allBlogas, setAllBlogas] = useState("");

  const getallcaseStudy = async () => {
    axios
      .get(SERVER + "/getAllBlogs", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log("Get Blogs ->", res.data.data);
        setAllBlogas(res.data.data);
      });
  };
  useEffect(() => {
    getallcaseStudy();
  }, []);

  return (
    <>
      <div className="max-w-[1240px] mx-auto">
        {/* blog contant start */}
        <div className=" grid md:grid-cols-3 grid-cols-1 gap-4 md:mt-14 mt-10">
          {/* Blog left said start  */}
          <div className=" col-span-2 ">
            {/* {" "}
              {allBlogas ? (
                allBlogas.map((item) => (
                  <div> */}
            <div className=" mt-5 md:mt-5">
              <div className=" flex justify-center ">
                <img
                  src={air}
                  alt=""
                  className="object-cover md:h-[500px] md:w-[700px] h-96 w-96 "
                />
              </div>
              <div className="float-right  bg-inherit text-black font-heading md:pr-14 md:mt-5">
                Date - 2022-08-08
              </div>{" "}
              <br />
              <br />
              <div className="font-heading  text-left md:pt-10 p-3">
                Jet Airways is set to relaunch commercial operations in
                September 2022 Jet Airways is set to relaunch commercial
                operations in September 2022
              </div>
              <div className=" font-content text-left md:p-5 p-3 ">
                Since then, the new investors have stuck to a plan to relaunch
                operations in the third quarter of 2022. Jet Airways now hopes
                to resume commercial operations in September with fresh funding
                of more than INR13 billion rupees (USD163 million) over the next
                couple of years, the sources close to the relaunch told IANS.
                Since then, the new investors have stuck to a plan to relaunch
                operations in the third quarter of 2022. Jet Airways now hopes
                to resume commercial operations in September with fresh funding
                of more than INR13 billion rupees (USD163 million) over the next
                couple of years, the sources close to the relaunch told IANS.
                Since then, the new investors have stuck to a plan to relaunch
                operations in the third quarter of 2022. Jet Airways now hopes
                to resume commercial operations in September with fresh funding
                of more than INR13 billion rupees (USD163 million) over the next
                couple of years, the sources close to the relaunch told IANS.
                Since then, the new investors have stuck to a plan to relaunch
                operations in the third quarter of 2022. Jet Airways now hopes
                to resume commercial operations in September with fresh funding
                of more than INR13 billion rupees (USD163 million) over the next
                couple of years, the sources close to the relaunch told IANS.
              </div>
            </div>
            <div className=" mt-5 md:mt-5">
              <div className=" flex justify-center ">
                <img
                  src={air}
                  alt=""
                  className="object-cover md:h-[500px] md:w-[700px] h-96 w-96 "
                />
              </div>
              <div className="float-right  bg-inherit text-black font-heading md:pr-14 md:mt-5">
                Date - 2022-08-08
              </div>{" "}
              <br />
              <br />
              <div className="font-heading  text-left md:pt-10 p-3">
                Jet Airways is set to relaunch commercial operations in
                September 2022 Jet Airways is set to relaunch commercial
                operations in September 2022
              </div>
              <div className=" font-content text-left md:p-5 p-3 ">
                Since then, the new investors have stuck to a plan to relaunch
                operations in the third quarter of 2022. Jet Airways now hopes
                to resume commercial operations in September with fresh funding
                of more than INR13 billion rupees (USD163 million) over the next
                couple of years, the sources close to the relaunch told IANS.
                Since then, the new investors have stuck to a plan to relaunch
                operations in the third quarter of 2022. Jet Airways now hopes
                to resume commercial operations in September with fresh funding
                of more than INR13 billion rupees (USD163 million) over the next
                couple of years, the sources close to the relaunch told IANS.
                Since then, the new investors have stuck to a plan to relaunch
                operations in the third quarter of 2022. Jet Airways now hopes
                to resume commercial operations in September with fresh funding
                of more than INR13 billion rupees (USD163 million) over the next
                couple of years, the sources close to the relaunch told IANS.
                Since then, the new investors have stuck to a plan to relaunch
                operations in the third quarter of 2022. Jet Airways now hopes
                to resume commercial operations in September with fresh funding
                of more than INR13 billion rupees (USD163 million) over the next
                couple of years, the sources close to the relaunch told IANS.
              </div>
            </div>
            {/* <div>{item.}</div> */}
            {/* </div>
                ))
              ) : (
                <p> No service </p>
              )}{" "} */}
          </div>

          {/* Blog left said End  */}

          {/* recnt blog rightsaid content start  */}
          <div>
            <div>
              <h1 className="font-heading text-fuchsia-700 text-xl ">
                Recent Post
              </h1>
            </div>
            <div className="flex gap-5">
              <div>
                <img src={blogpost} alt="" className=" w-20 h-20" />
              </div>
              <div className="mt-2">
                <div className="font-subheading">
                  Plan Your Project With Your Software
                </div>

                <div className="font-content">November 21, 2019</div>
              </div>
            </div>
            <div className="flex gap-5">
              <div>
                <img src={blogpost} alt="" className=" w-20 h-20" />
              </div>
              <div className="mt-2">
                <div className="font-subheading">
                  Plan Your Project With Your Software
                </div>

                <div className="font-content">November 21, 2019</div>
              </div>
            </div>
            <div className="flex gap-5">
              <div>
                <img src={blogpost} alt="" className=" w-20 h-20" />
              </div>
              <div className="mt-2">
                <div className="font-subheading">
                  Plan Your Project With Your Software
                </div>

                <div className="font-content">November 21, 2019</div>
              </div>
            </div>
            <div className="flex gap-5">
              <div>
                <img src={blogpost} alt="" className=" w-20 h-20" />
              </div>
              <div className="mt-2">
                <div className="font-subheading">
                  Plan Your Project With Your Software
                </div>

                <div className="font-content">November 21, 2019</div>
              </div>
            </div>
            <div className="flex gap-5">
              <div>
                <img src={blogpost} alt="" className=" w-20 h-20" />
              </div>
              <div className="mt-2">
                <div className="font-subheading">
                  Plan Your Project With Your Software
                </div>

                <div className="font-content">November 21, 2019</div>
              </div>
            </div>
            <div className="flex gap-5">
              <div>
                <img src={blogpost} alt="" className=" w-20 h-20" />
              </div>
              <div className="mt-2">
                <div className="font-subheading">
                  Plan Your Project With Your Software
                </div>

                <div className="font-content">November 21, 2019</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogsbody;
