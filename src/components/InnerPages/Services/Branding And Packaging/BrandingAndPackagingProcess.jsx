import React from 'react';
import oneicon from '../../../../assets/innerpage/brandingandpackaging/1.svg';
import twoicon from '../../../../assets/innerpage/brandingandpackaging/2.svg';
import threeicon from '../../../../assets/innerpage/brandingandpackaging/3.svg';
import fouricon from '../../../../assets/innerpage/brandingandpackaging/4.svg';
import fiveicon from '../../../../assets/innerpage/brandingandpackaging/5.svg';
import sixicon from '../../../../assets/innerpage/brandingandpackaging/6.svg';
import processicon1 from '../../../../assets/innerpage/brandingandpackaging/brand_research.png';
import processicon2 from '../../../../assets/innerpage/brandingandpackaging/brand_strategy.png';
import processicon3 from '../../../../assets/innerpage/brandingandpackaging/brand_identity.png';
import processicon4 from '../../../../assets/innerpage/brandingandpackaging/brand_tools.png';
import processicon5 from '../../../../assets/innerpage/brandingandpackaging/brand_launch.png';
import processicon6 from '../../../../assets/innerpage/brandingandpackaging/brand_building.png';
import { Flip } from 'react-reveal';

const BrandAndPackagingProcess = () => {
  return (
    <div>
      <div className="bg-white mx-auto w-full py-5 px-5 ">
        <div className="max-w-[1240px] mx-auto ">
          {/* Heading */}
          <div className="flex flex-col flex-wrap items-center">
            <h2 className="font-heading md:text-3xl uppercase text-Primary text-xl">
              Process
            </h2>
            <h2 className="font-subheading md:text-xl mt-3 text-black text-sm">
              Our Brand And Packaging Process
            </h2>
            <p className="text-sm  md:text-base   text-black mt-3  text-justify align-baseline md:px-28 px-10">
              Our brand and packaging process is segmented into six steps which
              includes: Lead acquisition, marketing and sales qualification,
              customer retention, lead nurturing, sales transfer and conversion.
            </p>
          </div>
          {/* Heading Ends */}

          {/* Brand Research Div */}

          <div className="mx-auto flex flex-col  px-5 mt-10">
            <Flip duration={3000}>
              <img
                src={oneicon}
                alt="Icon One"
                className="md:w-[80px] md:h-[80px] w-[50px] h-[50px]"
              />
            </Flip>
          </div>
          <div className="grid md:grid-cols-2 mt-10 gap-1  px-5 justify-center">
            <img
              src={processicon1}
              alt="Process Icon 1"
              className="md:w-[27rem] md:h-[22rem] w-[14rem] h-[14rem]"
            />
            <div className="mx-auto flex flex-col text-justify">
              <h2 className="font-heading md:text-xl text-sm uppercase mb-4">
                {' '}
                Brand Research
              </h2>
              <p className="text-sm  md:text-base text-start  col-span-2">
                A brand research is a process of investigating the relationship
                between a brand and its customers. It is used to understand how
                the brand is perceived by its customers, what they think of the
                brand, and how they feel about it. We use brand research to
                measure the effectiveness of a brand's marketing campaigns, and
                to identify areas where the brand can improve.
              </p>
            </div>
          </div>

          {/* Brand Research Div Ends*/}

          {/* Brand Strategy Div */}

          <div className="mx-auto flex flex-col  px-5 mt-10 items-end">
            <Flip duration={3000}>
              <img
                src={twoicon}
                alt="Icon Two"
                className="md:w-[80px] md:h-[80px] w-[50px] h-[50px]"
              />
            </Flip>
          </div>

          <div className="grid md:grid-cols-2 mt-10 gap-24  px-5 justify-center">
            <div className="mx-auto flex flex-col text-justify">
              <h2 className="font-heading md:text-xl text-sm uppercase mb-4">
                Brand Strategy
              </h2>
              <p className="text-sm  md:text-base text-start col-span-2">
                To achieve a series of long-term goals, we implement a long-term
                plan which involves our brand strategy. Our brand strategy is
                not just about creating a logo or website. It's about defining
                who you are, what you stand for, and how you want to be
                perceived by your target audience.
              </p>
            </div>
            <img
              src={processicon2}
              alt="Process Icon 2"
              className="md:w-[27rem] md:h-[22rem] w-[14rem] h-[14rem]"
            />
          </div>

          {/* Brand Strategy Div Ends*/}

          {/* Brand Identity Div */}

          <div className="mx-auto flex flex-col  px-5 mt-10">
            <Flip duration={3000}>
              <img
                src={threeicon}
                alt="Icon Three"
                className="md:w-[80px] md:h-[80px] w-[50px] h-[50px]"
              />{' '}
            </Flip>
          </div>
          <div className="grid md:grid-cols-2 mt-10 gap-1  px-5 justify-center">
            <img
              src={processicon3}
              alt="Process Icon 3"
              className="md:w-[27rem] md:h-[22rem] w-[14rem] h-[14rem]"
            />
            <div className="mx-auto flex flex-col text-justify">
              <h2 className="font-heading md:text-xl text-sm uppercase mb-4">
                Brand Identity
              </h2>
              <p className="text-sm  md:text-base text-start col-span-2">
                Brand identity is how your customers and prospects perceive your
                company. It's the overall look and feel of your business, and it
                includes your logo, your color palette, your tagline, your
                fonts, and everything else that makes up your visual brand. For
                this, we create a strong brand identity that is essential to the
                success of your business.
              </p>
            </div>
          </div>

          {/* Brand Identity Div Ends*/}

          {/* Brand Tools Div */}

          <div className="mx-auto flex flex-col  px-5 mt-10 items-end">
            <Flip duration={3000}>
              <img
                src={fouricon}
                alt="Icon Four"
                className="md:w-[80px] md:h-[80px] w-[50px] h-[50px]"
              />{' '}
            </Flip>
          </div>
          <div className="grid md:grid-cols-2 mt-10 gap-24  px-5 justify-center">
            <div className="mx-auto flex flex-col text-justify">
              <h2 className="font-heading md:text-xl text-sm uppercase mb-4">
                Brand Tools
              </h2>
              <p className="text-sm  md:text-base text-start col-span-2">
                There are many different branding tools available to businesses
                these days. But one of the most important branding tools is your
                website. Your website is often the first point of contact
                between you and your potential customers. Which is why we make
                sure it's well designed and user-friendly. Another important
                branding tool is your company logo & apart from that social
                media is also a great branding tool.
              </p>
            </div>
            <img
              src={processicon4}
              alt="Process Icon 4"
              className="md:w-[27rem] md:h-[22rem] w-[14rem] h-[14rem] "
            />
          </div>

          {/* Brand Tools Div Ends*/}

          {/* Brand Launch Div */}

          <div className="mx-auto flex flex-col  px-5 mt-10">
            <Flip duration={3000}>
              <img
                src={fiveicon}
                alt="Icon Five"
                className="md:w-[80px] md:h-[80px] w-[50px] h-[50px]"
              />
            </Flip>
          </div>
          <div className="grid md:grid-cols-2 mt-10 gap-1  px-5 justify-center">
            <img
              src={processicon5}
              alt="Process Icon 5"
              className="md:w-[27rem] md:h-[22rem] w-[14rem] h-[14rem]"
            />
            <div className="mx-auto flex flex-col text-justify">
              <h2 className="font-heading md:text-xl text-sm uppercase mb-4">
                Brand Launch
              </h2>
              <p className="text-sm  md:text-base text-start  col-span-2">
                Brand launching is a big undertaking, but it can be an
                incredibly rewarding experience. Here are a few things we follow
                to launch your brand: Brand definition, developing strong visual
                identity, creating compelling content, getting involved in the
                community & finally brand promotion on several platforms.
              </p>
            </div>
          </div>

          {/* Brand Launch Div Ends*/}

          {/* Brand Building Div */}

          <div className="mx-auto flex flex-col  px-5 mt-10 items-end">
            <Flip duration={3000}>
              <img
                src={sixicon}
                alt="Icon Six"
                className="md:w-[80px] md:h-[80px] w-[50px] h-[50px]"
              />
            </Flip>
          </div>
          <div className="grid md:grid-cols-2 mt-10 gap-24  px-5 justify-center">
            <div className="mx-auto flex flex-col text-justify">
              <h2 className="font-heading md:text-xl text-sm uppercase mb-4">
                Brand Building
              </h2>
              <p className="text-sm  md:text-base text-start col-span-2">
                Branding is the process of creating a unique identity for a
                company or product. A strong brand can differentiate a company
                from its competitors, and can help to build customer loyalty.
                Branding can also help to increase brand awareness and
                preference. There are many different elements that are involved
                in brand building, including market research, target audience
                analysis, brand positioning, and more.
              </p>
            </div>
            <img
              src={processicon6}
              alt="Process Icon 6"
              className="md:w-[27rem] md:h-[22rem] w-[14rem] h-[14rem] "
            />
          </div>

          {/* Brand Building  Div Ends*/}
        </div>
      </div>
    </div>
  );
};

export default BrandAndPackagingProcess;
