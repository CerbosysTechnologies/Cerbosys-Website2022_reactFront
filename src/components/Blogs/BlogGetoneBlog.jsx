import React from "react";
import Websait from "../../assets/Blogs/Websait.jpg";
import { useNavigate } from "react-router-dom";

function BlogGetoneBlog() {
  let navigate = useNavigate();
  const getblogbyid = () => {
    let path = `/blog/one-blog`;
    navigate(path);
    // navigate(`/addproduct`);
    // <Navigate to="/addproduct" replace={true} />
  };
  return (
    <>
      <div className="mx-auto w-full md:h-[38rem]  h-96 py-12 px-4 bg-Blogbg bg-cover md:bg-top bg-center">
        {/* heder Section */}
        <div className="flex flex-col justify-center text-center items-center md:h-[35rem] h-96 mx-auto">
          <p className="text-white font-heading pl-10 pr-10 md:text-5xl text-xl mb-10 ">
            Web development
          </p>
        </div>
      </div>
      {/* heder Section Ends*/}
      {/* Blog contat start  */}
      <div className="max-w-[1240px] mx-auto">
        <div className="font-heading md:text-3xl text-xl text-justify md:py-10 py-5 px-5">
          Web development
        </div>
        <div className="px-5">
          <img src={Websait} alt="" />
        </div>
        <div className="font-content  text-xl text-justify md:py-10 py-5 px-5">
          Welcome to the MDN learning area. This set of articles aims to guide
          complete beginners to web development with all that they need to start
          coding websites. The aim of this area of MDN is not to take you from
          "beginner" to "expert" but to take you from "beginner" to
          "comfortable." From there, you should be able to start making your
          way, learning from the rest of MDN, and other intermediate to advanced
          resources that assume a lot of previous knowledge. If you are a
          complete beginner, web development can be challenging — we will hold
          your hand and provide enough detail for you to feel comfortable and
          learn the topics properly. You should feel at home whether you are a
          student learning web development (on your own or as part of a class),
          a teacher looking for class materials, a hobbyist, or someone who just
          wants to understand more about how web technologies work.
        </div>
        <div className=" font-heading md:text-3xl text-xl text-justify md:py-10 py-5 px-5">
          Where to start
        </div>
        <div className="font-content  text-xl text-justify md:py-10 py-5 px-5">
          Complete beginner If you are a complete beginner to web development,
          we'd recommend that you start by working through our Getting started
          with the web module, which provides a practical introduction to web
          development. Beyond the basics If you have a bit of knowledge already,
          the next step is to learn HTML and CSS in detail: start with our
          Introduction to HTML module and move on to our CSS first steps module.
          Moving onto scripting If you are comfortable with HTML and CSS
          already, or you are mainly interested in coding, you'll want to move
          on to JavaScript or server-side development. Begin with our JavaScript
          first steps and Server-side first steps modules. Frameworks and
          tooling After mastering the essentials of vanilla HTML, CSS, and
          JavaScript, you should learn about client-side web development tools,
          and then consider digging into client-side JavaScript frameworks, and
          server-side website programming.
        </div>
      </div>

      <div className="bg-slate-100">
        <div className="md:pt-5 pt-5">
          <h1 className="font-heading text-green-600 md:text-4xl text-xl justify-center flex  ">
            Recent Post
          </h1>
        </div>
        <div className=" mx-auto">
          <div className=" flex flex-wrap ">
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
                  {/* <p class="text-gray-700 text-base  font-content text-justify ">
                  Websaits can have many positive effects on the lives of their
                  owners. They influence social, emotional, and cognitive
                  development in children, promote an active lifestyle, provide
                  companionship, and have even been able to detect oncoming
                  epileptic seizures or the presence of certain cancers. Websaits
                  can also help to relieve stress and anxiety in people. Around
                  38% of US households are estimated to have one or more Websaits.
                </p> */}
                </div>
              </div>
            </div>
            <div
              class="p-10 scale-90 hover:scale-100 ease-in duration-500 "
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
                  {/* <p class="text-gray-700 text-base  font-content text-justify ">
                  Websaits can have many positive effects on the lives of their
                  owners. They influence social, emotional, and cognitive
                  development in children, promote an active lifestyle, provide
                  companionship, and have even been able to detect oncoming
                  epileptic seizures or the presence of certain cancers. Websaits
                  can also help to relieve stress and anxiety in people. Around
                  38% of US households are estimated to have one or more Websaits.
                </p> */}
                </div>
              </div>
            </div>
            <div
              class="p-10 scale-90 hover:scale-100 ease-in duration-500"
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
                  {/* <p class="text-gray-700 text-base  font-content text-justify ">
                  Websaits can have many positive effects on the lives of their
                  owners. They influence social, emotional, and cognitive
                  development in children, promote an active lifestyle, provide
                  companionship, and have even been able to detect oncoming
                  epileptic seizures or the presence of certain cancers. Websaits
                  can also help to relieve stress and anxiety in people. Around
                  38% of US households are estimated to have one or more Websaits.
                </p> */}
                </div>
              </div>
            </div>
            <div
              class="p-10 scale-90 hover:scale-100 ease-in duration-500"
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
                  {/* <p class="text-gray-700 text-base  font-content text-justify ">
                  Websaits can have many positive effects on the lives of their
                  owners. They influence social, emotional, and cognitive
                  development in children, promote an active lifestyle, provide
                  companionship, and have even been able to detect oncoming
                  epileptic seizures or the presence of certain cancers. Websaits
                  can also help to relieve stress and anxiety in people. Around
                  38% of US households are estimated to have one or more Websaits.
                </p> */}
                </div>
              </div>
            </div>
            <div
              class="p-10 scale-90 hover:scale-100 ease-in duration-500"
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
                  {/* <p class="text-gray-700 text-base  font-content text-justify ">
                  Websaits can have many positive effects on the lives of their
                  owners. They influence social, emotional, and cognitive
                  development in children, promote an active lifestyle, provide
                  companionship, and have even been able to detect oncoming
                  epileptic seizures or the presence of certain cancers. Websaits
                  can also help to relieve stress and anxiety in people. Around
                  38% of US households are estimated to have one or more Websaits.
                </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog contat End  */}
    </>
  );
}

export default BlogGetoneBlog;
