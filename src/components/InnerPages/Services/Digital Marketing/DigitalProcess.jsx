import React from "react";
import oneicon from "../../../../assets/innerpage/digitalmarketing/1.svg";
import twoicon from "../../../../assets/innerpage/digitalmarketing/2.svg";
import threeicon from "../../../../assets/innerpage/digitalmarketing/3.svg";
import fouricon from "../../../../assets/innerpage/digitalmarketing/4.svg";
import fiveicon from "../../../../assets/innerpage/digitalmarketing/5.svg";
import processicon1 from "../../../../assets/innerpage/digitalmarketing/processimage1.png";
import processicon2 from "../../../../assets/innerpage/digitalmarketing/processimage2.png";
import processicon3 from "../../../../assets/innerpage/digitalmarketing/processimage3.png";
import processicon4 from "../../../../assets/innerpage/digitalmarketing/processimage4.png";
import processicon5 from "../../../../assets/innerpage/digitalmarketing/processimage5.png";

const MobileProcess = () => {
  return (
    <div>
      <div className="bg-white mx-auto w-full py-5 px-16 ">
        <div className="max-w-[1240px] mx-auto ">
          {/* Heading */}
          <div className="flex flex-col flex-wrap items-center">
            <h1 className="font-heading md:text-3xl uppercase text-Primary text-xl">
              Process
            </h1>
            <h2 className="font-subheading md:text-xl text-black text-sm mb-4">
              Our Digital Marketing Service Process
            </h2>
            <p className="font-content md:text-lg text-black text-sm text-justify align-baseline md:px-28 px-10">
              Our digital marketing service process comprises five major steps
              which includes proper and genuine research to analyze the market,
              then creating quality SEO content, promoting the content using
              several online platforms, analyzing the weekly and monthly
              performance of the content and the final step involves
              optimization of the content if needed.
            </p>
          </div>
          {/* Heading Ends */}

          {/* Research Div */}

          <div className="mx-auto flex flex-col md:px-28 px-10 mt-10">
            <img
              src={oneicon}
              alt="Icon One"
              className="md:w-[80px] md:h-[80px] w-[50px] h-[50px]"
            />
          </div>
          <div className="grid md:grid-cols-2 mt-10 gap-1 md:px-28 px-10 justify-center">
            <img
              src={processicon1}
              alt="Process Icon 1"
              className="md:w-[27rem] md:h-[22rem] w-[14rem] h-[14rem]"
            />
            <div className="mx-auto flex flex-col text-justify">
              <h1 className="font-heading md:text-xl text-sm uppercase mb-4">
                {" "}
                Research
              </h1>
              <p className="font-content md:text-lg text-sm col-span-2">
                As a digital marketing team, it's important to understand the
                target audience and their journey. Research is a powerful tool
                that we use to get insights into customer behavior and how they
                view a particular brand. This enables us to perform accordingly
                understanding the needs of the customers. It also helps us
                understand what media the consumers are using and how to
                optimize their media mix for maximum impact.
              </p>
            </div>
          </div>

          {/* Research Div Ends*/}

          {/* Create Div */}

          <div className="mx-auto flex flex-col md:px-28 px-10 mt-10 items-end">
            <img
              src={twoicon}
              alt="Icon Two"
              className="md:w-[80px] md:h-[80px] w-[50px] h-[50px]"
            />
          </div>

          <div className="grid md:grid-cols-2 mt-10 gap-24 md:px-28 px-10 justify-center">
            <div className="mx-auto flex flex-col text-justify">
              <h1 className="font-heading md:text-xl text-sm uppercase mb-4">
                Create
              </h1>
              <p className="font-content md:text-lg text-sm col-span-2">
                Creating content is a major part of digital marketing and for
                that we make sure that the content is SEO optimized, user
                friendly and is able to meet the needs of businesses and brands
                that we promote online. Content can be considered as the
                backbone of the digital marketing process. Understanding the
                users and their emotions is the basic requirement that we hit
                while producing the content for a brand.
              </p>
            </div>
            <img
              src={processicon2}
              alt="Process Icon 2"
              className="md:w-[27rem] md:h-[22rem] w-[14rem] h-[14rem]"
            />
          </div>

          {/* Create Div Ends*/}

          {/* Promote Div */}

          <div className="mx-auto flex flex-col md:px-28 px-10 mt-10">
            <img
              src={threeicon}
              alt="Icon Three"
              className="md:w-[80px] md:h-[80px] w-[50px] h-[50px]"
            />
          </div>
          <div className="grid md:grid-cols-2 mt-10 gap-1 md:px-28 px-10 justify-center">
            <img
              src={processicon3}
              alt="Process Icon 3"
              className="md:w-[27rem] md:h-[22rem] w-[14rem] h-[14rem]"
            />
            <div className="mx-auto flex flex-col text-justify">
              <h1 className="font-heading md:text-xl text-sm uppercase mb-4">
                Promote
              </h1>
              <p className="font-content md:text-lg text-sm col-span-2">
                Digital promotion is the marketing technique of using digital
                media to promote a product or an organization as a way of
                raising awareness, reaching new customers and building a
                community. To be successful when using digital promotion, we
                make sure that our content is short, simple and to the point and
                our strategies and tactics go hand in hand with latest trends.
              </p>
            </div>
          </div>

          {/* Promote Div Ends*/}

          {/* Analyze Div */}

          <div className="mx-auto flex flex-col md:px-28 px-10 mt-10 items-end">
            <img
              src={fouricon}
              alt="Icon Four"
              className="md:w-[80px] md:h-[80px] w-[50px] h-[50px]"
            />
          </div>
          <div className="grid md:grid-cols-2 mt-10 gap-24 md:px-28 px-10 justify-center">
            <div className="mx-auto flex flex-col text-justify">
              <h1 className="font-heading md:text-xl text-sm uppercase mb-4">
                Analyze
              </h1>
              <p className="font-content md:text-lg text-sm col-span-2">
                Social media marketing is one of the most important and commonly
                used tools for business strategies. It has the power to boost
                sales and generate new customers and for analyzing the digital
                performance of our strategies, we go by a very basic tactic that
                is, SWOT analysis : Strength, Weakness, Opportunities and
                Threats, this technique helps us to analyze, improve and grow
                our client’s brand online.
              </p>
            </div>
            <img
              src={processicon4}
              alt="Process Icon 4"
              className="md:w-[27rem] md:h-[22rem] w-[14rem] h-[14rem] "
            />
          </div>

          {/* Analyze Div Ends*/}

          {/* Optimize Div */}

          <div className="mx-auto flex flex-col md:px-28 px-10 mt-10">
            <img
              src={fiveicon}
              alt="Icon Five"
              className="md:w-[80px] md:h-[80px] w-[50px] h-[50px]"
            />
          </div>
          <div className="grid md:grid-cols-2 mt-10 gap-1 md:px-28 px-10 justify-center">
            <img
              src={processicon5}
              alt="Process Icon 5"
              className="md:w-[27rem] md:h-[22rem] w-[14rem] h-[14rem]"
            />
            <div className="mx-auto flex flex-col text-justify">
              <h1 className="font-heading md:text-xl text-sm uppercase mb-4">
                Optimize
              </h1>
              <p className="font-content md:text-lg text-sm col-span-2">
                Digital marketing optimization is the process of adjusting the
                marketing campaign to improve conversions and ROI. This can be
                done through a variety of means, including A/B testing,
                multivariate testing, and conversion rate optimization. The goal
                of digital marketing optimization is to continuously improve the
                marketing results by making small, data-driven changes. Over
                time, these changes can have a significant impact on your bottom
                line.
              </p>
            </div>
          </div>

          {/* Optimize Div Ends*/}
        </div>
      </div>
    </div>
  );
};

export default MobileProcess;
