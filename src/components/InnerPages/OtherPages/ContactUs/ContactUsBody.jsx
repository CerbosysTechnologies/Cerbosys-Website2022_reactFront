import React from "react";
import Contact from "../../../Common/Component/Contact";

const ContactUsBody = () => {
  return (
    <div>
      <div className="bg-ContactLeaf mx-auto w-full py-16 px-2 justify-center items-center bg-no-repeat">
        <div className="max-w-[1240px] mx-auto ">
          <div className="flex flex-col flex-wrap items-center">
            <div className="grid md:grid-cols-2 mb-4 mt-10 md:w-10/12 ">
          {/* Form Section */}
              <div className="mx-auto items-center justify-center bg-white px-10 py-5 rounded-tl-xl rounded-bl-xl">
                
                <div>
                  <h1 className="font-heading md:text-lg">Get in touch</h1>
                  <p className="font-subheading ms:text-sm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Iusto odio veritatis cumque debitis quam. Illum,
                    reprehenderit.
                  </p>
                  <Contact />
                </div>
                </div>
                {/* Form Section Ends*/}

              
                 
                
             
                {/* Contact Details Section */}
              <div className="bg-Primary rounded-tr-xl rounded-br-xl">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                  </div>
                  {/* Contact Details Section Ends*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsBody;
