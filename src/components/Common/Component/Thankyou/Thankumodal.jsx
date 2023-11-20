import React from 'react';

const Thankumodal = () => {
  return (
    <div classNameName="selection:bg-Green selection:text-white">
      <div
      className="fixed z-10 overflow-y-auto top-0 w-full left-0 hidden"
        id="Thankyouemail"
      >
        <div classNameName="flex items-center justify-center max-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div classNameName="fixed inset-0 transition-opacity">
            <div classNameName="absolute inset-0 bg-gray-900 opacity-75" />
          </div>
          <span classNameName="hidden sm:inline-block sm:align-middle sm:h-screen">
            &#8203;
          </span>

          {/* To open contact form */}
          <div
          className="inline-block 
             justify-center
             justify-items-center
        
      
            rounded-lg text-left shadow-xl transform transition-all  "
          >
            <div classNameName="flex items-center justify-center h-screen">
              <div
              className="p-1 rounded shadow-lg
             
               "
              >
       
                <div
                className="flex flex-col items-center p-4 space-y-2 bg-white rounded-lg  "
                 
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                  className="text-green-600 w-28 h-28"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="1"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {/*  text-green-600 */}
                 
                  <a className="inline-flex items-center px-4 py-2 text-white bg-indigo-600 border border-indigo-600 rounded rounded-full hover:bg-indigo-700 focus:outline-none focus:ring">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M7 16l-4-4m0 0l4-4m-4 4h18"
                      />
                    </svg>
                    <span classNameName="md:text-lg font-subheading text-sm">
                      <a href="/">Home</a>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thankumodal;
