import React from 'react';
import mobileservice_technologyicon from '../../../assets/innerpage/mobiledevelopment/mobile_app_services_image.png';

const AllServiceForm = () => {
  return (
    <div className="selection:bg-Green selection:text-white">
      <div className="bg-Primary mx-auto w-full py-16 px-4 ">
        <div className="max-w-[1240px] mx-auto ">
          <div className="flex flex-col flex-wrap items-center">
            {/* Heading */}
            <h2 className="font-heading md:text-3xl uppercase text-white text-xl">
              Let's Talk About Your Idea
            </h2>
            <h2 className="font-subheading md:text-xl text-white text-sm text-center">
              Share your business idea and we ensure you would embrace
              associating with us.
            </h2>
            {/* Heading Ends */}

            {/* Form Design */}
            <div className="grid md:grid-cols-2  mb-4 md:px-36 py-5  mt-10">
              {/* Image Section */}
              <div className="">
                <img
                  src={mobileservice_technologyicon}
                  alt=""
                  className="h-full"
                ></img>
              </div>
              {/* Image Section Ends*/}

              {/* Form Section */}
              <div className="bg-white md:px-14 px-10 items-center justify-center text-center ">
                <form>
                  {/* Name Div */}
                  <div className="relative z-0 mb-6 mt-5 w-full group">
                    <input
                      type="text"
                      name="floating_name"
                      id="floating_name"
                      className="block py-2.5 px-0 w-full text-sm md:text-lg
                       text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="floating_name"
                      className="peer-focus:font-subheading absolute text-sm md:text-lg text-gray-500 dark:text-gray-400 
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
                  <div className="sticky z-0 mb-6 w-full group">
                    <input
                      type="email"
                      name="floating_email"
                      id="floating_email"
                      className="block py-2.5 px-0 w-full text-sm md:text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="floating_email"
                      className="peer-focus:font-subheading absolute md:text-lg text-gray-500 dark:text-gray-400 
                      duration-300 transform -translate-y-6 scale-75 top-3 left-1
                      -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 
                      peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-subheading"
                    >
                      Email
                    </label>
                  </div>
                  {/* Email Div Ends */}

                  {/* Subject Div */}
                  <div className="relative z-0 mb-6 w-full group">
                    <input
                      type="text"
                      name="floating_subject"
                      id="floating_subject"
                      className="block py-2.5 px-0 w-full text-sm md:text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer font-subheading"
                      placeholder=" "
                      required
                    />
                    <label
                      for="floating_subject"
                      className="peer-focus:font-subheading absolute text-sm md:text-lg text-gray-500 dark:text-gray-400 
                      duration-300 transform -translate-y-6 scale-75 top-3 left-1
                      -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-subheading"
                    >
                      Subject
                    </label>
                  </div>
                  {/* Subject Div Ends */}

                  {/* Contact Number Div */}
                  <div className="relative z-0 mb-6 w-full group">
                    <input
                      type="tel"
                      name="floating_cn"
                      id="floating_cn"
                      className="block py-2.5 px-0 w-full text-sm md:text-lg text-gray-900 
                      bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white
                       dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="floating_cn"
                      className="peer-focus:font-subheading absolute text-sm md:text-lg
                       text-gray-500 dark:text-gray-400 
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
                  <div className="relative z-0 mb-3 w-full group">
                    <select
                      className="dropdown text-gray-400 font-subheading md:text-lg text-sm flex
                    border-2 rounded-xl px-2 py-2 border-gray-400
                    
                    "
                    >
                      <option value="">Select</option>
                      <option value="">Web Development</option>
                      <option value="">Digital Marketing</option>
                      <option value="">Lead Generation</option>
                      <option value="">Branding and Packaging</option>
                      <option value="">Mobile Development</option>
                      <option value="">UI/UX Development</option>
                      <option value="">Staff Augmentation</option>
                    </select>
                  </div>
                  {/* Selection Div Ends*/}

                  {/*   Hear About Us */}
                  <div className="group">
                    <label className="flex font-subheading md:text-lg text-md justify-start text-gray-400">
                      How Did You Hear About Us?
                    </label>
                    <div className="flex items-center mb-4">
                      <input
                        checked
                        id="checkbox-1"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="checkbox-Google"
                        className="ml-2 text-sm font-subheading text-gray-400 dark:text-gray-300"
                      >
                        Google
                      </label>

                      <input
                        checked
                        id="checkbox-1"
                        type="checkbox"
                        value=""
                        className="ml-4 w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="checkbox-LinkdIn"
                        className="ml-2 text-sm font-subheading text-gray-400 dark:text-gray-300"
                      >
                        LinkedIn
                      </label>

                      <input
                        checked
                        id="checkbox-1"
                        type="checkbox"
                        value=""
                        className="ml-4 w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="checkbox-Facebook"
                        className="ml-2 text-sm font-subheading text-gray-400 dark:text-gray-300"
                      >
                        Facebook
                      </label>

                      <input
                        checked
                        id="checkbox-1"
                        type="checkbox"
                        value=""
                        className="ml-4 w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="checkbox-Instagram"
                        className="ml-2 text-sm font-subheading text-gray-400 dark:text-gray-300"
                      >
                        Instagram
                      </label>
                    </div>

                    <div className="flex items-center mb-4">
                      <input
                        checked
                        id="checkbox-1"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="checkbox-FriendSuggested"
                        className="ml-2 text-sm font-subheading text-gray-400 dark:text-gray-300"
                      >
                        Friend Suggested
                      </label>

                      <input
                        checked
                        id="checkbox-1"
                        type="checkbox"
                        value=""
                        className="ml-4 w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="checkbox-Others"
                        className="ml-2 text-sm font-subheading text-gray-400 dark:text-gray-300"
                      >
                        Others
                      </label>
                    </div>
                  </div>
                  {/*   Hear About Us Ends*/}

                  {/* Message Div */}
                  <div className="relative z-0 mb-6 w-full group">
                    <input
                      type="tel"
                      name="floating_cn"
                      id="floating_cn"
                      className="block py-2.5 px-0 w-full text-sm md:text-lg text-gray-900 
                      bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white
                       dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="floating_cn"
                      className="peer-focus:font-subheading absolute text-sm md:text-lg
                       text-gray-500 dark:text-gray-400 
                      duration-300 transform -translate-y-6 scale-75 top-3 left-1
                      -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600
                       peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
                       peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-subheading"
                    >
                      Message
                    </label>
                  </div>
                  {/* Message Div Ends */}

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

export default AllServiceForm;
