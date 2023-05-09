import React from 'react';
import Software2 from '../../../../assets/innerpage/Softwaredevelopment/Software2.svg';
import Software1 from '../../../../assets/innerpage/Softwaredevelopment/sd.png';
import Bounce from 'react-reveal/Bounce';
function ServiceDescSD() {
  return (
    <div>
      <div>
        <div className=" mx-auto w-full py-16 px-4 ">
          <div className="max-w-[1240px] mx-auto text-justify break-words ">
            {/* First Section */}
            <Bounce duration={3000}>
              <div className="grid md:grid-cols-2">
                {/* Content Section */}

                <div className="mx-auto flex flex-col md:px-24 px-10  ">
                  <h2 className="font-heading md:text-2xl text-xl mb-5">
                    Software Development
                  </h2>
                  <p className="text-black  text-sm  md:text-base text-start py-2 mb-8 font-content ">
                    Software development is a complex and ever-evolving field
                    that requires specialized skills, experience, and
                    dedication. If you need a software developer for your
                    business, we've got you covered! At Cerbosys, we specialize
                    in custom software development for small businesses—we'll
                    help you create an app, website, or other application to fit
                    the needs of your company. We'll guide you through our
                    process from the beginning until the project is finished and
                    you have a fully functional product.
                  </p>
                </div>

                {/* Content Section Ends*/}

                {/* Image Section */}

                <img
                  src={Software2}
                  alt="Web Service Icon"
                  className="mx-auto md:w-[28rem]
             w-[18rem] mt-8"
                />

                {/* Image Section Ends*/}
              </div>
            </Bounce>
            {/* Grid Div */}
            {/* First Section Ends */}

            {/* Second Section */}
            <Bounce duration={3000}>
              <div className="grid md:grid-cols-2 items-center bg-Primary mt-8 rounded-3xl gap-2">
                {/* Image Section */}
       
                <img
                  src={Software1}
                  alt="Web Service Icon"
                  className="w-full"
                 
                />
                {/* </Bounce> */}
                {/* Image Section Ends*/}

                {/* Content Section */}
                {/* <Bounce right duration={3000}> */}
                <div className="flex flex-col md:px-24 px-10 mx-auto text-justify break-word mt-8">
                  <h2 className="font-heading md:text-2xl text-lg text-white mb-5 ">
                    We are aware of the Software Development Technology Pulse
                    that Leads to Better Performance
                  </h2>
                  <p className="text-sm  md:text-base text-start  mb-8 text-white">
                    Software development technology is the backbone of any
                    company. It provides the foundation for all business
                    operations, and without it, there would be nothing to run
                    your business on. Software development technology is also a
                    key element in improving performance. If you want to grow
                    your business, then you need to make sure that your software
                    development technology is up-to-date and well-managed.
                    Aspects of software development technology include:
                    <br /> -Creating applications that are easy to use and
                    understand.
                    <br />
                    -Controlling costs by optimizing software development
                    processes.
                    <br />
                    -Reaching out to customers via mobile devices.
                  </p>
                </div>
                {/* </Bounce> */}
                {/* Content Section Ends*/}
              </div>
            </Bounce>
            {/* Grid Div */}
            {/* Second Section Ends */}
          </div>
          {/* Max Width Div Ends */}
        </div>
        {/* Second Div Ends */}
      </div>
    </div>
  );
}

export default ServiceDescSD;
