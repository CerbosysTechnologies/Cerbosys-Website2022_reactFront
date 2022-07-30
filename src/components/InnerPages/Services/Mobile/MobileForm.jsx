import React from "react";
import mobileservice_technologyicon from "../../../../assets/innerpage/mobiledevelopment/formimage.png";

const MobileForm = () => {
  return (
    <div>
      <div className="bg-Primary mx-auto w-full py-16 px-4 ">
        <div className="max-w-[1240px] mx-auto ">
          <div className="flex flex-col flex-wrap items-center">
            {/* Heading */}
            <h1 className="font-heading md:text-3xl uppercase text-white text-xl">
              Let's Talk About Your Idea
            </h1>
            <h2 className="font-subheading md:text-xl text-white text-sm text-center">
              Share your business idea and we ensure you would embrace
              associating with us.
            </h2>
            {/* Heading Ends */}

            {/* Form Design */}
            <div className="grid md:grid-cols-2  mb-4 md:px-36 py-5  mt-10">
              {/* Image Section */}
              <img src={mobileservice_technologyicon} alt=""></img>
              {/* Image Section Ends*/}

              {/* Form Section */}
              <div className="bg-white md:px-14 px-10 items-center justify-center text-center">
                <form>
                  {/* Name Div */}
                  <div class="relative z-0 mb-6 mt-5 w-full group">
                    <input
                      type="text"
                      name="floating_name"
                      id="floating_name"
                      class="block py-2.5 px-0 w-full text-sm md:text-lg
                       text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="floating_name"
                      class="peer-focus:font-subheading absolute text-sm md:text-lg text-gray-500 dark:text-gray-400 
                      duration-300 transform -translate-y-6 scale-75 top-3 left-1
                      -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
                      peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
                      peer-focus:-translate-y-6 font-subheading"
                    >
                      Name
                    </label>
                  </div>
                  {/* Name Div Ends */}

                  {/* Email Div */}
                  <div class="relative z-0 mb-6 w-full group">
                    <input
                      type="email"
                      name="floating_email"
                      id="floating_email"
                      class="block py-2.5 px-0 w-full text-sm md:text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="floating_email"
                      class="peer-focus:font-subheading absolute md:text-lg text-gray-500 dark:text-gray-400 
                      duration-300 transform -translate-y-6 scale-75 top-3 left-1
                      -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 
                      peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-subheading"
                    >
                      Email
                    </label>
                  </div>
                  {/* Email Div Ends */}

                  {/* Subject Div */}
                  <div class="relative z-0 mb-6 w-full group">
                    <input
                      type="text"
                      name="floating_subject"
                      id="floating_subject"
                      class="block py-2.5 px-0 w-full text-sm md:text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer font-subheading"
                      placeholder=" "
                      required
                    />
                    <label
                      for="floating_subject"
                      class="peer-focus:font-subheading absolute text-sm md:text-lg text-gray-500 dark:text-gray-400 
                      duration-300 transform -translate-y-6 scale-75 top-3 left-1
                      -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-subheading"
                    >
                      Subject
                    </label>
                  </div>
                  {/* Subject Div Ends */}

                  {/* Contact Number Div */}
                  <div class="relative z-0 mb-6 w-full group">
                    <input
                      type="tel"
                      name="floating_cn"
                      id="floating_cn"
                      class="block py-2.5 px-0 w-full text-sm md:text-lg text-gray-900 
                      bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white
                       dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="floating_cn"
                      class="peer-focus:font-subheading absolute text-sm md:text-lg text-gray-500 dark:text-gray-400 
                      duration-300 transform -translate-y-6 scale-75 top-3 left-1
                      -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600
                       peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
                       peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-subheading"
                    >
                      Contact Number
                    </label>
                  </div>
                  {/* Subject Div Ends */}

                  {/* Selection Div */}
                  <div className="w-full">
                    <button
                      id="dropdownDividerButton"
                      data-dropdown-toggle="dropdownDivider"
                      class="text-gray-400 font-subheading md:text-lg text-sm flex
                      border-2 rounded-xl px-2 py-2 md:w-[250px]"
                      type="button"
                    >
                      Service
                      <svg
                        class="ml-20 mt-2 w-full h-4"
                        aria-hidden="true"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  {/* Selection Div Ends*/}

                  <textarea
                    className=" w-full mt-5 border-solid border-2 border-gray-300  
                    py-2 px-3 text-gray-700 leading-tight font-subheading"
                    id="message"
                    type="text"
                    placeholder="Message"
                  />

                  <input
                    className="mt-6 mb-6 bg-Primary text-white font-heading py-2 px-4 rounded"
                    type="submit"
                    value="Submit"
                  />
                </form>
              </div>
              {/* Form Section Ends */}
            </div>

            {/* Form Design Ends*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileForm;
