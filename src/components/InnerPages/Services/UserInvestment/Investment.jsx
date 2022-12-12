import React from 'react';

function Investment() {
  return (
    <div>
      <div className=" mx-auto w-full py-16 px-4 ">
        <div className="max-w-[1240px] mx-auto ">
          <div className="font-heading text-center text-2xl px-10 my-5">
            Make today's investment count for tomorrow's success.
          </div>
            <div className='font-subheading text-center text-xl px-10 my-5'>Let's get together and start growing your business.</div>

          <div className="text-center mt-10">
            <div className=" text-center text-xl px-10  ">
              My name is
              <input
                type="text"
                placeholder="Name"
                className=" text-blue-500 font-bold border-b-2 border-black text-center border-0 focus:outline-none focus:ring-0"
              />
              & I am associated with a company called
              <input
                type="text "
                placeholder="company Name"
                className=" text-blue-500 font-bold border-b-2 border-black text-center border-0 focus:outline-none focus:ring-0 "
              />
              .
            </div>
            <div className=" text-center text-xl px-10  py-10">
              I want to invest
              <input
                type="number"
                placeholder="AMOUNT"
                className=" text-blue-500 font-bold border-b-2 border-black text-center border-0 focus:outline-none focus:ring-0"
              />
              , quarterly in digital marketing.
            </div>
            <div className=" text-center text-xl px-10 ">
              Here are my contact details
              <input
                type="number"
                placeholder="Number"
                className=" text-blue-500 font-bold border-b-2 border-black text-center border-0 focus:outline-none focus:ring-0"
              />
              &
              <input
                type="email "
                placeholder="Email"
                className=" text-blue-500 font-bold border-b-2 border-black text-center border-0 focus:outline-none focus:ring-0"
              />
              .
            </div>
            <div className="py-10">
              <button
                className="bg-Primary rounded-full font-heading md:px-5 md:py-2 md:text-lg
              text-white uppercase px-3 py-1.5 text-xs mb-6"
              >
                Get a free consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Investment;
