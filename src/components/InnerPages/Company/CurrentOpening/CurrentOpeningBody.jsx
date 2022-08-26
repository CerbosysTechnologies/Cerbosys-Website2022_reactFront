import React from "react";
import tripicon from '../../../../assets/innerpage/currentopening/trip.svg'


const CurrentOpeningBody = () => {
  return (
    <div>
      <div className="mx-auto w-full py-16 px-2">
        <div className="max-w-[1240px] mx-auto">
          <p className="font-heading text-3xl text-center underline underline-offset-[26px]">
            Open Positions
          </p>

          {/* Card Content Section */}

          <div className="flex flex-wrap mt-10 ">
            <div className="mx-2 mt-5">
            <a
              href="#"
              className="block p-6 max-w-sm  bg-white border border-gray-200 shadow-md
               hover:bg-Primary dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-2xl font-heading tracking-tight text-gray-500
              hover:text-white uppercase text-center">
                Designation
              </h5>
              <p className="font-content text-gray-700 hover:text-white text-justify mt-5 mb-10">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, cum tempore! Corporis voluptatibus dolorem libero quisquam.
              </p>

              <div className="flex items-center justify-center">
              <button className="py-2 px-4 text-sm font-heading 
              text-center text-Primary rounded-3xl border border-Primary ">
                APPLY NOW</button>
              </div>

            </a>
            </div>

            <div className="mx-2 mt-5">
            <a
              href="#"
              className="block p-6 max-w-sm max-h-sm bg-white border border-gray-200 shadow-md
               hover:bg-Primary dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-2xl font-heading tracking-tight text-gray-500
              hover:text-white uppercase text-center">
                Designation
              </h5>
              <p className="font-content text-gray-700 hover:text-white text-justify mt-5 mb-10">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, cum tempore! Corporis voluptatibus dolorem libero quisquam voluptatum facere fugiat minima consectetur! Unde libero a iusto nulla inventore autem corporis ipsa.
              </p>

              <div className="flex items-center justify-center">
              <button className="py-2 px-4 text-sm font-heading 
              text-center text-Primary rounded-3xl border border-Primary ">
                APPLY NOW</button>
              </div>

            </a>
            </div>

            <div className="mx-2 mt-5">
            <a
              href="#"
              className="block p-6 max-w-sm bg-white border border-gray-200 shadow-md
               hover:bg-Primary dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-2xl font-heading tracking-tight text-gray-500
              hover:text-white uppercase text-center">
                Designation
              </h5>
              <p className="font-content text-gray-700 hover:text-white text-justify mt-5 mb-10">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, cum tempore! Corporis voluptatibus dolorem libero quisquam voluptatum facere fugiat minima consectetur! Unde libero a iusto nulla inventore autem corporis ipsa.
              </p>

              <div className="flex items-center justify-center">
              <button className="py-2 px-4 text-sm font-heading 
              text-center text-Primary rounded-3xl border border-Primary ">
                APPLY NOW</button>
              </div>

            </a>
            </div>


          </div>
          {/* Card Content Section Ends */}


          {/* Perks Section */}
          <div className="bg-PerksBackground mx-auto w-full py-16 px-2 object-contain bg-cover bg-center mt-10">
            
          <p className="font-heading text-3xl text-center underline underline-offset-[26px]">
            Perks & Benefits
          </p>

          <div className="mx-auto grid md:grid-cols-2 grid-cols-1 
            items-center justify-center gap-8 w-3/4 mt-16">
            <div>
              <div className="flex flex-wrap">
              <img src={tripicon} />
              <h1 className="font-heading text-2xl p-2">Test</h1>
              </div>
              <p className="font-content text-sm ml-14">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quo perspiciatis fugiat consequuntur fuga doloremque eius? Itaque rerum ducimus vitae fuga veniam, molestias praesentium quas numquam sapiente. Consequatur, fugit nihil?</p>
            </div>
           
            <div>
              <div className="flex flex-wrap">
              <img src={tripicon} />
              <h1 className="font-heading text-2xl p-2">Test</h1>
              </div>
              <p className="font-content text-sm ml-14">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quo perspiciatis fugiat consequuntur fuga doloremque eius? Itaque rerum ducimus vitae fuga veniam, molestias praesentium quas numquam sapiente. Consequatur, fugit nihil?</p>
            </div>

            <div>
              <div className="flex flex-wrap">
              <img src={tripicon} />
              <h1 className="font-heading text-2xl p-2">Test</h1>
              </div>
              <p className="font-content text-sm ml-14">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quo perspiciatis fugiat consequuntur fuga doloremque eius? Itaque rerum ducimus vitae fuga veniam, molestias praesentium quas numquam sapiente. Consequatur, fugit nihil?</p>
            </div>


            <div>
              <div className="flex flex-wrap">
              <img src={tripicon} />
              <h1 className="font-heading text-2xl p-2">Test</h1>
              </div>
              <p className="font-content text-sm ml-14">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quo perspiciatis fugiat consequuntur fuga doloremque eius? Itaque rerum ducimus vitae fuga veniam, molestias praesentium quas numquam sapiente. Consequatur, fugit nihil?</p>
            </div>


            <div>
              <div className="flex flex-wrap">
              <img src={tripicon} />
              <h1 className="font-heading text-2xl p-2">Test</h1>
              </div>
              <p className="font-content text-sm ml-14">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quo perspiciatis fugiat consequuntur fuga doloremque eius? Itaque rerum ducimus vitae fuga veniam, molestias praesentium quas numquam sapiente. Consequatur, fugit nihil?</p>
            </div>


            <div>
              <div className="flex flex-wrap">
              <img src={tripicon} />
              <h1 className="font-heading text-2xl p-2">Test</h1>
              </div>
              <p className="font-content text-sm ml-14">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quo perspiciatis fugiat consequuntur fuga doloremque eius? Itaque rerum ducimus vitae fuga veniam, molestias praesentium quas numquam sapiente. Consequatur, fugit nihil?</p>
            </div>


          </div>

          </div>
          {/* Perks Section Ends*/}



        </div>
      </div>
    </div>
  );
};

export default CurrentOpeningBody;
