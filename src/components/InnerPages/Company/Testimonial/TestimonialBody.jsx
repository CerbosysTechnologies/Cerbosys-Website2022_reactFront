import React from "react";
import testivideo from "../../../../assets/innerpage/testimonial/employee_testimonial.mp4";
import clienticon from "../../../../assets/innerpage/testimonial/client.png";
import colonicon from "../../../../assets/innerpage/testimonial/colon.svg";

const TestimonialBody = () => {
  return (
    <div>
      <div className="mx-auto w-full py-16 px-4">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid md:grid-cols-2 gap-4 md:mt-10">
            {/* Video Div */}
            <video width="700" height="500" controls className="md:w-[50rem] md:h-[25rem]">
              <source src={testivideo} type="video/mp4" />
            </video>
            {/* Video Div Ends*/}

            {/* Client Testimonial */}
            <div className="flex flex-col flex-wrap items-center justify-center">
                <div className="flex flex-row  items-start md:w-full  ">
                 <div className="md:w-full mb-10">
                 <img src={colonicon} alt="colon" className="w-10"/>    
                </div>   
                <div className="md:w-full">
                    <br></br>
                <img src={clienticon} alt="manwomen" className="w-40 h-40 rounded-full "/>
                </div>

                <div className="md:w-full">
               
                    <img src={colonicon} alt="manwomen" className="md:w-10 invisible "/>
                </div>
                 
                </div>
                <p className="font-heading md:text-xl text-sm mx-10 text-justify">
                <br></br>  
              Cerbosys team is quick, responsive and incredibly innovative. I can
              truly write pages on how incredible and valuable their services
              are, so far it has been an amazing experience working with them.
              </p>


              <p className="font-heading md:text-xl text-sm mx-10 text-end items-end">
                Jhon Doe
              </p>
            </div>
            {/* Client Testimonial Ends*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialBody;
