import React from "react";

const ServicesForm = () => {
  return (
    <div >
    <div className="bg-white md:px-1 items-center justify-center text-center">
      <form>
        {/* Name Div */}
        <div class="mb-6 md:w-full group">
          <input
            type="text"
            name="username"
            id="username"
            class="block mt-5 py-2.5 px-0 w-full font-heading text-sm text-gray-900 bg-transparent border-0 border-b-2 
      border-gray-300 appearance-none  dark:border-gray-400 
       focus:outline-none focus:ring-0 peer"
            placeholder="Name"
            required
          />
        </div>
        {/* Name Div Ends */}

        {/* Email Div */}
        <div class="mb-6 md:w-full group">
          <input
            type="email"
            name="email"
            id="email"
            class="block py-2.5 px-0 w-full font-heading text-sm text-gray-900 bg-transparent border-0 border-b-2 
      border-gray-300 appearance-none  dark:border-gray-400 
       focus:outline-none focus:ring-0 peer"
            placeholder="Email"
            required
          />
        </div>
        {/* Email Div Ends*/}

        {/* Subject Div */}
        <div class="mb-6 md:w-full group">
          <input
            type="text"
            name="subject"
            id="subject"
            class="block py-2.5 px-0 w-full font-heading text-sm text-gray-900 bg-transparent border-0 border-b-2 
      border-gray-300 appearance-none  dark:border-gray-400 
       focus:outline-none focus:ring-0 peer"
            placeholder="Subject"
            required
          />
        </div>
        {/* Subject Div Ends*/}

        {/* Contact Number Div */}
        <div class=" mb-6 md:w-full group">
          <input
            type="tel"
            name="contact_number"
            id="contact_number"
            class="block py-2.5 px-0 w-full font-heading text-sm text-gray-900 bg-transparent 
            border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-400 
       focus:outline-none focus:ring-0 peer"
            placeholder="Contact Number"
            required
          />
        </div>
        {/* Contact Number Div Ends*/}
 
 {/* Selection Div */}
 <div className=" mb-3 w-full group">
                  <select
                    className="dropdown text-gray-400 font-heading  text-sm flex flex-wrap
                    border-2 rounded-lg px-2 py-2 border-gray-400
                    
                    ">
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

        {/* Hear About Div */}
        <div class="mb-6 md:w-full group">
          <label className="flex py-2.5 w-full font-heading text-sm text-gray-400">
            How Did You Hear About Us?
          </label>
          <div className="flex flex-wrap  mb-4">
            <input
              id="checkbox-1"
              type="checkbox"
              value=""
              class="w-4 h-4 text-gray-400 bg-gray-100 rounded border-gray-300 "
            />
            <label
              for="checkbox-Google"
              class="ml-2 text-sm font-heading text-gray-600 
                      dark:text-gray-500"
            >
              Google
            </label>

            <input
              id="checkbox-LinkdIn"
              type="checkbox"
              value=""
              class="ml-4 w-4 h-4 text-gray-400 bg-gray-100 rounded border-gray-300 "
            />
            <label
              for="checkbox-Google"
              class="ml-2 text-sm font-heading text-gray-600 
                      dark:text-gray-500"
            >
              LinkedIn
            </label>

            <input
              id="checkbox-Facebook"
              type="checkbox"
              value=""
              class="ml-5 w-4 h-4 text-gray-400 bg-gray-100 rounded border-gray-300 "
            />
            <label
              for="checkbox-Facebook"
              class="ml-2 text-sm font-heading text-gray-600 
                      dark:text-gray-500"
            >
              Facebook
            </label>

            {/* <input
              id="checkbox-Instagram"
              type="checkbox"
              value=""
              class="ml-4 w-4 h-4 text-gray-400 bg-gray-100 rounded border-gray-300 "
            />
            <label
              for="checkbox-Instagram"
              class="ml-2 text-sm font-heading text-gray-600 
                      dark:text-gray-500"
            >
              Instagram
            </label> */}
          </div>

          <div className="flex mb-4">
          <input
              id="checkbox-Instagram"
              type="checkbox"
              value=""
              class=" w-4 h-4 text-gray-400 bg-gray-100 rounded border-gray-300 "
            />
            <label
              for="checkbox-Instagram"
              class="ml-2 text-sm font-heading text-gray-600 
                      dark:text-gray-500 mr-2 "
            >
              Instagram
            </label>
          <input
              id="checkbox-FriendSuggested"
              type="checkbox"
              value=""
              class="ml-2 w-4 h-4 text-gray-400 bg-gray-100 rounded border-gray-300 "
            />
            <label
              for="checkbox-FriendSuggested"
              class="md:ml-2 text-sm font-heading text-gray-600 
                      dark:text-gray-500"
            >
              Friend Suggested
            </label>

            <input
              id="checkbox-Others"
              type="checkbox"
              value=""
              class="ml-4  w-4 h-4 text-gray-400 bg-gray-100 rounded border-gray-300 "
            />
            <label
              for="checkbox-Others"
              class="ml-2 text-sm font-heading text-gray-600 
                      dark:text-gray-500"
            >
              Others
            </label>
          </div>
        </div>
        {/* Hear About Div Ends*/}

         {/* Message Div */}
         <div class=" mb-6 md:w-full group">
         <input
            type="text"
            name="message"
            id="message"
            class="block mt-5 py-2.5 px-0 w-full font-heading text-sm text-gray-900 bg-transparent border-0 border-b-2 
      border-gray-300 appearance-none  dark:border-gray-400 
       focus:outline-none focus:ring-0 peer"
            placeholder="Message"
            required
          />
                 
                  </div>
                  {/* Message Div Ends */}

                  <input
                    className="mt-6 mb-6 bg-Primary text-white font-heading py-2 px-4 rounded"
                    type="submit"
                    value="Submit"
                  />
      </form>
    </div>
    </div>
  );
};

export default ServicesForm;
