import React from "react";
import clienticon from "../../../../assets/innerpage/webdevelopment/client.jfif";

const ServiceForm = () => {
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
              {/* Client Section */}
              <div className="mx-auto px-10 bg-[#D9D9D9] items-center justify-center text-center">
                <h1 className="font-heading text-3xl text-Primary"> " </h1>
                <h2 className="font-heading text-3xl">Client's Speak</h2>
                <p className="font-content md:text-sm text-xs mt-8 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum nobis veniam doloremque blanditiis ab laudantium,
                  quam mollitia soluta quos quia maiores alias saepe
                  voluptatibus pariatur recusandae explicabo? Laudantium, nobis
                  saepe!
                </p>
                <div className="w-16 md:w-28 inline-block">
                  <img
                    src={clienticon}
                    alt="Client Pic"
                    className="rounded-full border-none "
                  />
                </div>

                <h3 className="font-subheading md:text-sm text-xs">
                  Ramesh Kumar
                </h3>
                <h3 className="font-subheading md:text-sm text-xs mb-10">
                  Co-Founder & Administrator, Company
                </h3>
              </div>
              {/* Client Section Ends*/}

              {/* Form Section */}
              <div className="bg-white md:px-14 px-10 items-center justify-center text-center">
                <form>
                  <input
                    className="w-full mt-10 border-solid border-2 border-gray-300  
                    py-2 px-3 text-gray-700 leading-tight font-subheading"
                    id="username"
                    type="text"
                    placeholder="Name"
                  />

                  <input
                    className=" w-full mt-5 border-solid border-2 border-gray-300  
                    py-2 px-3 text-gray-700 leading-tight font-subheading"
                    id="email"
                    type="email"
                    placeholder="Email"
                  />

                  <input
                    className=" w-full mt-5 border-solid border-2 border-gray-300  
                    py-2 px-3 text-gray-700 leading-tight font-subheading"
                    id="subject"
                    type="text"
                    placeholder="Web Development"
                  />

                  <input
                    className=" w-full mt-5 border-solid border-2 border-gray-300  
                    py-2 px-3 text-gray-700 leading-tight font-subheading"
                    id="contact_number"
                    type="number"
                    placeholder="Number"
                  />

                  <textarea
                    className=" w-full mt-5 border-solid border-2 border-gray-300  
                    py-2 px-3 text-gray-700 leading-tight font-subheading"
                    id="message"
                    type="text"
                    placeholder="Message"
                  />
                  
                    <input className="mt-6 mb-6 bg-Primary text-white font-heading py-2 px-4 rounded"
                    type="submit" value="Submit" />                 
                  
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

export default ServiceForm;
