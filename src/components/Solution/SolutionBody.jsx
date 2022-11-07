import React from "react";
import ecom from "../../assets/Solution/ecom.jpg";
import School from "../../assets/Solution/School.svg";
import { GrLinkNext } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";

function SolutionBody() {
  return (
    <>
      {/* grid xl:grid-cols-4 grid-col-1  gap-4 justify-center md:p-3 p-2 md:mt-5 md:mb-5 */}
      <div className="md:w-[1280px] mx-auto">
        <div className=" grid xl:grid-cols-4 grid-col-1  gap-4 justify-center md:p-3 p-2 md:mt-5 md:mb-5">
          <div className=" col-span-2 ">
            <img
              src={School}
              alt=""
              className="lg:w-[1100px] lg:h-[1100px ] rounded-lg w-300px h-300px "
            />
          </div>
          <div className=" col-span-2  ">
            <p className="font-heading text-xl md:text-4xl md:pt-10">
              Choosing School ERP or College ERP for your business?
            </p>
            <p className="font-subheading text-justify pt-5">
              Vedanta ERP solution which is an education ERP software means that
              anyone who is having education business in india can buy this
              software. It can automate school, college, university or
              professional institutions. This is School ERP and College ERP, let
              you dynamically design user dashboard and automate every process
              in your school/college and help you make data driven decisions
            </p>
            <div className="flex justify-evenly md:mt-10">
              <Link to="/solution/schoolerp">
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  // onClick={SchoolERP}
                >
                  <span className=" flex items-center gap-3">
                    Lern more
                    <GrLinkNext
                      className="bg-green-500 rounded-full w-5 h-5  hover:bg-blue-600 hover:rotate-180
              duration-300  "
                    />
                  </span>
                </button>
              </Link>
              <Link to="/contact-us">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  contact us
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* second start  */}
        <div className="grid xl:grid-cols-4 grid-col-1  grid-auto-flow gap-4 justify-center md:p-3 p-2 md:mt-5 md:mb-5">
          <div className=" col-span-2  ">
            <p className="font-heading text-xl md:text-4xl md:pt-10">
              Easily build and run your ecommerce website
            </p>
            <p className="font-subheading text-justify pt-5">
              Shopify sorts the products you’re selling online into categories
              called collections. For example, you could put all of your
              t-shirts and sweaters in a "clothing" collection, while also
              having some of the same t-shirts in a "sales" collection. You can
              also organize your products by using smart collections. Smart
              collections group products by conditions that you define. For
              example, you can create a smart collection that automatically
              gathers all products under $20 and present this smart collection
              as "Gift Ideas" to your customers.
            </p>
            <div className="flex justify-evenly md:mt-10">
              <Link to="/solution/E-Commerse">
                {" "}
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  <span className=" flex items-center gap-3">
                    Lern more
                    <GrLinkNext
                      className="bg-green-500 rounded-full w-5 h-5  hover:bg-blue-600 hover:rotate-180
              duration-300  "
                    />
                  </span>
                </button>
              </Link>
              <Link to="/contact-us">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  contact us
                </button>
              </Link>
            </div>
          </div>
          <div className=" col-span-2 ">
            <img
              src={ecom}
              alt=""
              className="lg:w-[1100px] lg:h-[1100px ] rounded-lg w-300px h-300px "
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SolutionBody;