import React from "react";
import testivideo from "../../../../assets/innerpage/testimonial/employee_testimonial.mp4";
import Anup_Vanawat from "../../../../assets/innerpage/testimonial/Anup_Vanawat.mp4";
import colonicon from "../../../../assets/innerpage/testimonial/colon.svg";
import anitaicon from "../../../../assets/innerpage/testimonial/anita.png";
import anilicon from "../../../../assets/innerpage/testimonial/anil.png";
import anupicon from "../../../../assets/innerpage/testimonial/anup.png";
import sumiticon from "../../../../assets/innerpage/testimonial/sumit.png";
import diveshicon from "../../../../assets/innerpage/testimonial/divesh.png";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const TestimonialBody = () => {
  SwiperCore.use([Autoplay]);

  return (
    <div>
      {/* --------------- */}
      {/* <div className="mx-auto w-full py-16 px-4"> */}
      <div className="max-w-[1240px] mx-auto">
        <div className="flex lg:flex-row flex-col">
          <div>
            <Swiper
              className="md:h-96 h-80 md:w-[36rem]"
              modules={[Autoplay, Pagination]}
              pagination={{
                clickable: true,
              }}
              loop={true}
              slidesPerView={1}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
            >
              <SwiperSlide>
                <div className="flex flex-row  items-start md:w-full  ">
                  <div className="md:w-full mb-10">
                    <img src={colonicon} alt="colon" className="w-10" />
                  </div>
                  <div className="md:w-full">
                    <br></br>
                    <img
                      src={anitaicon}
                      alt="manwomen"
                      className="w-40 h-40 rounded-full "
                    />
                  </div>

                  <div className="md:w-full">
                    <img
                      src={colonicon}
                      alt="manwomen"
                      className="md:w-10 invisible "
                    />
                  </div>
                </div>
                <p className="font-subheading md:text-lg text-sm mx-5  text-justify">
                  <br></br>
                  Cerbosys has created a tremendous impact on our business and
                  helped us reach new heights. They have been extremely helpful
                  and very friendly throughout the process. Their team is very
                  responsive and willing to go above and beyond for their
                  customers.
                </p>

                <p className="font-heading md:text-xl text-sm mx-10 text-end items-end">
                  Anita Chaturavedi
                </p>
              </SwiperSlide>

              <SwiperSlide>
                <div className="flex flex-row  items-start md:w-full  ">
                  <div className="md:w-full mb-10">
                    <img src={colonicon} alt="colon" className="w-10" />
                  </div>
                  <div className="md:w-full">
                    <br></br>
                    <img
                      src={anilicon}
                      alt="manwomen"
                      className="w-40 h-40 rounded-full "
                    />
                  </div>

                  <div className="md:w-full">
                    <img
                      src={colonicon}
                      alt="manwomen"
                      className="md:w-10 invisible "
                    />
                  </div>
                </div>
                <p className="font-subheading md:text-xl text-sm mx-10 text-justify">
                  <br></br>
                  Cerbosys is super easy to work with - the team is super
                  responsive and the tech is easy to use. I would recommend them
                  to anyone who is looking for a team that can take your
                  business to the next level.
                </p>

                <p className="font-heading md:text-xl text-sm mx-10 text-end items-end">
                  Anil Rawat
                </p>
              </SwiperSlide>

              <SwiperSlide>
                <div className="flex flex-row  items-start md:w-full  ">
                  <div className="md:w-full mb-10">
                    <img src={colonicon} alt="colon" className="w-10" />
                  </div>
                  <div className="md:w-full">
                    <br></br>
                    <img
                      src={anupicon}
                      alt="manwomen"
                      className="w-40 h-40 rounded-full "
                    />
                  </div>

                  <div className="md:w-full">
                    <img
                      src={colonicon}
                      alt="manwomen"
                      className="md:w-10 invisible "
                    />
                  </div>
                </div>
                <p className="font-subheading md:text-xl text-sm mx-10 text-justify">
                  <br></br>
                  Very specifically designed with detailed study. It is really
                  very helpful to fulfill our purpose.
                </p>

                <p className="font-heading md:text-xl text-sm mx-10 text-end items-end">
                  Anup Vanawat
                </p>
              </SwiperSlide>

              <SwiperSlide>
                <div className="flex flex-row  items-start md:w-full  ">
                  <div className="md:w-full mb-10">
                    <img src={colonicon} alt="colon" className="w-10" />
                  </div>
                  <div className="md:w-full">
                    <br></br>
                    <img
                      src={sumiticon}
                      alt="manwomen"
                      className="w-40 h-40 rounded-full "
                    />
                  </div>

                  <div className="md:w-full">
                    <img
                      src={colonicon}
                      alt="manwomen"
                      className="md:w-10 invisible "
                    />
                  </div>
                </div>
                <p className="font-subheading md:text-xl text-sm mx-10 text-justify">
                  <br></br>
                  Cerbosys team is quick, responsive and incredibly innovative.
                  I can truly write pages on how incredible and valuable their
                  services are, so far it has been an amazing experience working
                  with them.
                </p>

                <p className="font-heading md:text-xl text-sm mx-10 text-end items-end">
                  Sumit Maheshwari
                </p>
              </SwiperSlide>

              <SwiperSlide>
                <div className="flex flex-row  items-start md:w-full  ">
                  <div className="md:w-full mb-10">
                    <img src={colonicon} alt="colon" className="w-10" />
                  </div>
                  <div className="md:w-full">
                    <br></br>
                    <img
                      src={diveshicon}
                      alt="manwomen"
                      className="w-40 h-40 rounded-full "
                    />
                  </div>

                  <div className="md:w-full">
                    <img
                      src={colonicon}
                      alt="manwomen"
                      className="md:w-10 invisible "
                    />
                  </div>
                </div>
                <p className="font-subheading md:text-lg text-sm mx-10 text-justify">
                  <br></br>I highly recommend Cerbosys and their team. They are
                  very professional and quick to respond, especially for a small
                  business. They have taken our idea and brought it to life in a
                  matter of weeks, really showing their capabilities and
                  commitment to the job.
                </p>

                <p className="font-heading md:text-xl text-sm mx-10 text-end items-end">
                  Divyesh Mistry
                </p>
              </SwiperSlide>
            </Swiper>
          </div>
          <div>
            <Swiper
              className="md:h-96 h-80 md:w-[36rem] sm:w-[100px]"
              modules={[Autoplay, Pagination]}
              pagination={{
                clickable: true,
              }}
              loop={true}
              slidesPerView={1}
              // autoplay={{
              //   delay: 5000,
              //   disableOnInteraction: false,
              // }}
            >
              {/* Anita */}
              <SwiperSlide>
                <video
                  width="700"
                  height="500"
                  controls
                  className="md:w-[50rem] md:h-[25rem]  "
                >
                  <source src={testivideo} type="video/mp4" />
                </video>
              </SwiperSlide>
              {/* Anup_Vanawat */}
              <SwiperSlide>
                <video
                  width="700"
                  height="500"
                  controls
                  className="md:w-[50rem] md:h-[25rem]"
                >
                  <source src={Anup_Vanawat} type="video/mp4" />
                </video>
              </SwiperSlide>
            </Swiper>
            {/* Video Div Ends*/}
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default TestimonialBody;
