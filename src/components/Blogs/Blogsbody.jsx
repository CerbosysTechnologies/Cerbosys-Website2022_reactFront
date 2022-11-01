import React, { useEffect, useState } from "react";
import axios from "axios";

import blogpost from "../../assets/Blogs/blogpost.png";
import Websait from "../../assets/Blogs/Websait.jpg";

import { SERVER } from "../../ServerUrls";
import { useNavigate } from "react-router-dom";

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
  // navigate
  let navigate = useNavigate();
  const getblogbyid = () => {
    let path = `/blog/one-blog`;
    navigate(path);
    // navigate(`/addproduct`);
    // <Navigate to="/addproduct" replace={true} />
  };
  return (
    <>
      <div className=" mx-auto">
        <div className=" flex flex-wrap justify-center ">
          <div
            class="p-10  scale-90 hover:scale-100 ease-in duration-500"
            onClick={getblogbyid}
          >
            {/* <!--Card 1--> */}
            <div class="max-w-sm rounded-2xl overflow-hidden shadow-2xl">
              <div className="flex justify-center">
                <img
                  class="md:h-[300px] md:w-[300px] scale-90  rounded-lg hover:scale-100 ease-in duration-1000"
                  src={Websait}
                  alt="Mountain"
                />
              </div>

              <div class="px-6 py-4">
                <span class="font-subheading text-sm mb-2">
                  Date - 2022- 10-11
                </span>

                <div class="font-heading text-xl mb-2"> web development</div>
              </div>
            </div>
          </div>
          <div
            class="p-10  scale-90 hover:scale-100 ease-in duration-500"
            onClick={getblogbyid}
          >
            {/* <!--Card 1--> */}
            <div class="max-w-sm rounded-2xl overflow-hidden shadow-2xl">
              <div className="flex justify-center">
                <img
                  class="md:h-[300px] md:w-[300px] scale-90  rounded-lg hover:scale-100 ease-in duration-1000"
                  src={Websait}
                  alt="Mountain"
                />
              </div>

              <div class="px-6 py-4">
                <span class="font-subheading text-sm mb-2">
                  Date - 2022- 10-11
                </span>

                <div class="font-heading text-xl mb-2"> web development</div>
              </div>
            </div>
          </div>
          <div
            class="p-10  scale-90 hover:scale-100 ease-in duration-500"
            onClick={getblogbyid}
          >
            {/* <!--Card 1--> */}
            <div class="max-w-sm rounded-2xl overflow-hidden shadow-2xl">
              <div className="flex justify-center">
                <img
                  class="md:h-[300px] md:w-[300px] scale-90  rounded-lg hover:scale-100 ease-in duration-1000"
                  src={Websait}
                  alt="Mountain"
                />
              </div>

              <div class="px-6 py-4">
                <span class="font-subheading text-sm mb-2">
                  Date - 2022- 10-11
                </span>

                <div class="font-heading text-xl mb-2"> web development</div>
              </div>
            </div>
          </div>
          <div
            class="p-10  scale-90 hover:scale-100 ease-in duration-500"
            onClick={getblogbyid}
          >
            {/* <!--Card 1--> */}
            <div class="max-w-sm rounded-2xl overflow-hidden shadow-2xl">
              <div className="flex justify-center">
                <img
                  class="md:h-[300px] md:w-[300px] scale-90  rounded-lg hover:scale-100 ease-in duration-1000"
                  src={Websait}
                  alt="Mountain"
                />
              </div>

              <div class="px-6 py-4">
                <span class="font-subheading text-sm mb-2">
                  Date - 2022- 10-11
                </span>

                <div class="font-heading text-xl mb-2"> web development</div>
              </div>
            </div>
          </div>
          <div
            class="p-10  scale-90 hover:scale-100 ease-in duration-500"
            onClick={getblogbyid}
          >
            {/* <!--Card 1--> */}
            <div class="max-w-sm rounded-2xl overflow-hidden shadow-2xl">
              <div className="flex justify-center">
                <img
                  class="md:h-[300px] md:w-[300px] scale-90  rounded-lg hover:scale-100 ease-in duration-1000"
                  src={Websait}
                  alt="Mountain"
                />
              </div>

              <div class="px-6 py-4">
                <span class="font-subheading text-sm mb-2">
                  Date - 2022- 10-11
                </span>

                <div class="font-heading text-xl mb-2"> web development</div>
              </div>
            </div>
          </div>
          <div
            class="p-10  scale-90 hover:scale-100 ease-in duration-500"
            onClick={getblogbyid}
          >
            {/* <!--Card 1--> */}
            <div class="max-w-sm rounded-2xl overflow-hidden shadow-2xl">
              <div className="flex justify-center">
                <img
                  class="md:h-[300px] md:w-[300px] scale-90  rounded-lg hover:scale-100 ease-in duration-1000"
                  src={Websait}
                  alt="Mountain"
                />
              </div>

              <div class="px-6 py-4">
                <span class="font-subheading text-sm mb-2">
                  Date - 2022- 10-11
                </span>

                <div class="font-heading text-xl mb-2"> web development</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogsbody;
