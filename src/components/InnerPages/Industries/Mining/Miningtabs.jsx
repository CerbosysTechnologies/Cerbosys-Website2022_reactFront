import React from 'react';

const Miningtabs = () => {
  return (
    <>
      <div className="">
        <h2 className="text-Primary md:text-3xl text-xl mt-4 font-heading  mb-6 px-3">
          <span className="text-black">An Overview Of Our </span> Mining Web
          Design Features
        </h2>
        <div className="flex items-start flex-wrap  lg:flex-nowrap gap-10 md:gap-20 my-6 px-4">
          <div className="lg:w-[25%] w-[100%]">
            <ul
              className="nav nav-tabs   flex flex-col flex-wrap list-none border-b-0 pl-0 "
              id="tabs-tabVertical"
              role="tablist"
            >
              <li className="nav-item flex-grow p-0 " role="presentation">
                {/* active */}
                <a
                  href="#tabs-homeVertical"
                  className="
                rounded-[20px]  block
          font-sm
          md:font-bold
          text-sm
        
          leading-tight
          uppercase
        p-3
         
          my-2
          
          active:text-white !important  
        focus:text-white
          focus:bg-Primary
    
     
       
        "
                  id="tabs-home-tabVertical"
                  data-bs-toggle="pill"
                  data-bs-target="#tabs-homeVertical"
                  role="tab"
                  aria-controls="tabs-homeVertical"
                  aria-selected="true"
                >
                  Content&nbsp;Management&nbsp;System
                </a>
              </li>
              <li
                className="nav-item p-0 flex-grow rounded-[20px]"
                role="presentation"
              >
                <a
                  href="#tabs-profileVertical"
                  className="
                rounded-[20px] p-3
               
          
          block
          font-sm
          md:font-bold
          text-sm
          leading-tight
          uppercase
        
        
          
          my-2
          active:text-white !important  
          focus:text-white
            focus:bg-Primary
        
        "
                  id="tabs-profile-tabVertical"
                  data-bs-toggle="pill"
                  data-bs-target="#tabs-profileVertical"
                  role="tab"
                  aria-controls="tabs-profileVertical"
                  aria-selected="false"
                >
                  SEO&nbsp;Friendly&nbsp;Web&nbsp;Development
                </a>
              </li>
              <li
                className="nav-item p-0 flex-grow rounded-[20px]"
                role="presentation"
              >
                <a
                  href="#tabs-messagesVertical"
                  className="
                rounded-[20px]
                p-3
              
          
          block
          font-sm
          md:font-bold
          text-sm
          leading-tight
          uppercase
         
         
          
          my-2
          active:text-white !important  
          focus:text-white
            focus:bg-Primary
         
        "
                  id="tabs-messages-tabVertical"
                  data-bs-toggle="pill"
                  data-bs-target="#tabs-messagesVertical"
                  role="tab"
                  aria-controls="tabs-messagesVertical"
                  aria-selected="false"
                >
                  Mobile&nbsp;Responsive
                </a>
              </li>
              {/*  px-3
          py-3  border-x-0 border-t-0 border-b-2 border-transparent*/}
              <li
                className="nav-item p-0 flex-grow rounded-[20px]"
                role="presentation"
              >
                <a
                  href="#tabs-messagesVertical"
                  className="
                rounded-[20px]
                
                p-3
          
          block
          font-sm
          md:font-bold
          text-sm
          leading-tight
          uppercase
         
         
         
          my-2
          active:text-white !important  
          focus:text-white
            focus:bg-Primary
         
        "
                  id="tabs-messages-tabVertical"
                  data-bs-toggle="pill"
                  data-bs-target="#tabs-friendlyVertical"
                  role="tab"
                  aria-controls="tabs-friendlyVertical"
                  aria-selected="false"
                >
                  Professional&nbsp;&&nbsp;User&nbsp;Friendly&nbsp;Design
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:w-[60%] w-[100%] md:h-56 p-4 mx-auto bg-Green rounded-md">
            <div
              className="tab-content  text-white p-4 "
              id="tabs-tabContentVertical"
            >
              <div
                className="tab-pane fade show active"
                id="tabs-homeVertical"
                role="tabpanel"
                aria-labelledby="tabs-home-tabVertical"
              >
                We have tailored our Mining and Resources CMS to be highly
                versatile and simple to use. Whether you lean towards WordPress
                or other platforms, our system has the ability to flawlessly
                integrate with either platform.
              </div>
              <div
                className="tab-pane fade"
                id="tabs-profileVertical"
                role="tabpanel"
                aria-labelledby="tabs-profile-tabVertical"
              >
                Our mining websites are developed to have SEO compatibility,
                including the ability to adjust title tags, set meta
                descriptions, craft custom neat URLs, and more.
              </div>
              <div
                className="tab-pane fade"
                id="tabs-messagesVertical"
                role="tabpanel"
                aria-labelledby="tabs-profile-tabVertical"
              >
                It is vital for your company to have an outstanding identity,
                and our customized mining website design will help make your
                branding stand out with an aesthetically pleasing and
                user-friendly format.
              </div>
              <div
                className="tab-pane fade"
                id="tabs-friendlyVertical"
                role="tabpanel"
                aria-labelledby="tabs-profile-tabVertical"
              >
                To cater to the current customer landscape, we make sure that
                our websites are built to be mobile-friendly. This guarantees
                that users have an optimized experience when visiting your site
                regardless of the device they're using.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Miningtabs;
