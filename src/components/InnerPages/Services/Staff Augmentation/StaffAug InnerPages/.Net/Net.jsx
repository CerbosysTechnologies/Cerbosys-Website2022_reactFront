import React from 'react'
import Navbar from "../../../../../../components/Navbar/Navbar";
import Footer from "../../../../../../components/Common/Component/Footer";
import NetBody from "./NetBody";
import NetForm from './NetForm';
import { Link } from "react-router-dom";
const Net = () => {
  return (
    <div>
      <>
      <Navbar />
        <div className="mx-auto w-full md:h-[60rem] h-96 py-12 px-4 bg-Netheader">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[30rem] h-96 mx-auto">
            <p className="text-black font-heading py-2 md:text-3xl text-xl mb-2">
              Hire .Net Developer
            </p>

            <p className="text-white font-heading py-2 md:text-xs text-xs mb-8 md:w-[480px] text-justify">
             dfdfsdfsffjhdgfhghfgdshfjsg
            </p>

           
            
          </div>
          {/* Content Section Ends*/}
        </div>
        <NetBody />
        <NetForm />
        <Footer/>
      </>
    </div>
  )
}

export default Net