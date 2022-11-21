import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
import axios from "axios";
import parser from "html-react-parser";
function BlogGetoneBlog() {
  //  const history = useHistory();
  const { id } = useParams();
  console.log(id);
  const [blogid, setBlogid] = useState("");

  const [blogtitle, setBlogtitle] = useState("");
  const [blogmessage, setBlogmessage] = useState("");
  const [image, setImage] = useState("");
  const [blogimagesid, setBlogimagesid] = useState("");
  console.log(blogimagesid);

  const [imageshow, setImageshow] = useState("");
  console.log(imageshow);
  const [blogdata, setBlogData] = useState([]);

  const IMAGE_URL = `https://cerbosys.in:3700/blog/`;

  // get all blog start
  const fetchData = async () => {
    await axios
      .get("https://cerbosys.in:3700/cerbosys/getAllBlogs", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        const response = res.data.data;
        console.log(response);
        setBlogData(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // get all blog End

  // Get by id blog start
  useEffect(() => {
    axios
      .get(`https://cerbosys.in:3700/cerbosys/getBlogById?blog_id=${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        const i = res?.data?.data.length - 1;
        setBlogid(res?.data?.data[i].blog_id);
        setBlogtitle(res?.data?.data[i].blog_title);
        setBlogmessage(res?.data?.data[i].blog_message);
        setBlogmessage(res?.data?.data[i].blog_message);
        setBlogimagesid(res?.data?.data[i].blogImg[i].blog_imagesid);
        setImage(res?.data?.data[i].blogImg[i].blog_images.substr(12));
        console.log(res?.data?.data[i].blogImg[i].blog_imagesid);
        console.log(image);
      });
  }, [id]);

  // Get by id blog End

  let navigate = useNavigate();
  const getblogbyid = () => {
    let path = `/blog/one-blog`;
    navigate(path);
    // navigate(`/addproduct`);
    // <Navigate to="/addproduct" replace={true} />
  };
  const SingleBlog = (id) => {
    let path = `/singleBlogshow/${id}`;
    navigate(path);
  };
  return (
    <>
      <div className="mx-auto w-full md:h-[38rem]  h-96 py-12 px-4 bg-Blogbg bg-cover md:bg-top bg-center">
        {/* heder Section */}
        <div className="flex flex-col justify-center text-center items-center md:h-[35rem] h-96 mx-auto">
          <p className="text-white font-heading pl-10 pr-10 md:text-5xl text-xl mb-10 ">
            {blogtitle}
          </p>
        </div>
      </div>
      {/* heder Section Ends*/}
      {/* Blog contat start  */}
      <div className="max-w-[1240px] mx-auto">
        <div className="font-heading md:text-3xl text-xl text-justify md:py-10 py-5 px-5">
          {blogtitle}
        </div>
        <div className="px-5 flex justify-center md:w-[500px ] md:h-[500px]">
          <img src={IMAGE_URL + image} alt="" className="object-contain" />
        </div>
        <div className="font-content  text-xl text-justify md:py-10 py-5 px-5">
          {/* {blogmessage} */}
          {parser(blogmessage)}
        </div>
      </div>
      {/* Silder start  */}
      <div className="">
        <div className="md:pt-5 pt-5">
          <h1 className="font-heading text-green-600 md:text-4xl text-xl justify-center flex  ">
            Recent Post
          </h1>
        </div>
        <div className="md:[1280px]  mx-auto justify-center flex">
          <Swiper
            breakpoints={{
              350: {
                width: 350,
                slidesPerView: 1,
              },
              400: {
                width: 400,
                slidesPerView: 1,
              },
              500: {
                width: 500,
                slidesPerView: 1,
              },
              600: {
                width: 600,
                slidesPerView: 1,
              },
              900: {
                width: 900,
                slidesPerView: 1,
              },
              1024: {
                width: 1024,
                slidesPerView: 2,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="md:w-[1024px] sm:w-[100px]  flex justify-center "
            pagination={{
              clickable: true,
            }}
            //
            loop={true}
            slidesPerView={2}
          >
            {blogdata ? (
              blogdata.map((item, index) => (
                <SwiperSlide className=" flex justify-center ">
                  <div class="p-10  " onClick={() => SingleBlog(item.blog_id)}>
                    {/* <!--Card 1--> */}
                    <div class="max-w-sm rounded-2xl overflow-hidden shadow-2xl">
                      <div className="flex justify-center">
                        {/* <img
                          class="md:h-[300px] md:w-[300px] scale-90  rounded-lg hover:scale-100 ease-in duration-1000"
                          src={Websait}
                          alt="Mountain"
                        /> */}

                        {item.blogImg.map((element) => {
                          // console.log("element", element);
                          let testimg = [];
                          let arr = element.blog_images;
                          if (arr == null) {
                            return (
                              <img
                                alt=""
                                className="imageblogAll"
                                src="data:image/png;base64,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"
                              />
                            );
                          } else {
                            testimg = element.blog_images.split("/");
                            return (
                              <img
                                alt=""
                                className="imageblogAll"
                                src={IMAGE_URL + testimg[2]}
                              />
                            );
                          }
                          //console.log('element arr', testimg[2]),
                        })}
                      </div>

                      <div class="px-6 py-4">
                        <span class="font-subheading text-sm mb-2">
                          Publish Date - {item.creationDate.substr(0, 10)}
                        </span>

                        <div class="font-heading text-xl mb-2">
                          {item.blog_title}
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            ) : (
              <p>no data</p>
            )}
          </Swiper>
        </div>
      </div>

      {/* Blog contat End  */}
    </>
  );
}

export default BlogGetoneBlog;
