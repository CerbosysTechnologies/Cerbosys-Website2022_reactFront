import React from "react";
import topfirmicon from "../../assets/recommend/topdeveloper.svg";
import goodfirmicon from "../../assets/recommend/goodfirm.svg";
import clutchicon from "../../assets/recommend/clutch.svg";
import appfuturaicon from "../../assets/recommend/aapfutura.svg";

    const Recommendations = () => {
      SwiperCore.use([Autoplay]);
      return (
        <div>
          <div className="bg-[#FAF6F5] mx-auto w-full h-full py-16 px-4 ">
            <div className="max-w-[1240px] mx-auto">
              {/* Heading */}
              <div className="justify-center items-center text-center">
                <h1 className="font-heading text-center md:text-3xl text-lg">
                  Recommendations
                </h1>
              </div>
              {/* Heading Ends */}
    
              {/* Slider Div */}
              <div className="flex flex-wrap items-center z-[-15]">
                <Swiper
                  className="md:h-96 h-80"
                  modules={[Autoplay, Pagination]}
                  pagination={{
                    clickable: true,
                  }}
                  loop={true}
                  slidesPerView={3}
                  autoplay={{
                    delay: 700,
                    disableOnInteraction: false,
                  }}
                >
                  {featuredicons.map((slideContent, index) => (
                    <SwiperSlide key={slideContent} virtualIndex={index}>
                      <img
                        src={slideContent}
                        alt=""
                        className="md:w-72 md:h-72 mt-10 md:mx-4 px-2 w-80 h-80 md:mt-0 -mt-10 scale-100 hover:scale-125 ease-out duration-500"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              {/* Slider Div Ends*/}
            </div>
          </div>
          {/* Heading Ends */}

          {/* Slider Div */}
          <div className="flex flex-wrap items-center z-[-15]">
            <Swiper
              className="md:h-96 h-80"
              modules={[Autoplay, Pagination]}
              pagination={{
                clickable: true,
              }}
              loop={true}
              slidesPerView={3}
              autoplay={{
                delay: 700,
                disableOnInteraction: false,
              }}
            >
              {featuredicons.map((slideContent, index) => (
                <SwiperSlide key={slideContent} virtualIndex={index}>
                  <img
                    src={slideContent}
                    alt=""
                    className="md:w-72 md:h-72 mt-10 md:mx-4 px-2 w-80 h-80 md:mt-0 -mt-10"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* Slider Div Ends*/}
        </div>
      // </div>
    // </div>
  );
};

export default Recommendations;
