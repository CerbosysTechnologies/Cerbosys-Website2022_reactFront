import React from "react";
import oneicon from "../../../../assets/innerpage/leadgeneration/1.svg";
import twoicon from "../../../../assets/innerpage/leadgeneration/2.svg";
import threeicon from "../../../../assets/innerpage/leadgeneration/3.svg";
import fouricon from "../../../../assets/innerpage/leadgeneration/4.svg";
import fiveicon from "../../../../assets/innerpage/leadgeneration/5.svg";
import sixicon from "../../../../assets/innerpage/leadgeneration/6.svg";
import processicon1 from "../../../../assets/innerpage/leadgeneration/lead_acquistion.png";
import processicon2 from "../../../../assets/innerpage/leadgeneration/marketing & sales.png";
import processicon3 from "../../../../assets/innerpage/leadgeneration/customer_retention.png";
import processicon4 from "../../../../assets/innerpage/leadgeneration/lead nurturing.png";
import processicon5 from "../../../../assets/innerpage/leadgeneration/sales_transfer.png";
import processicon6 from "../../../../assets/innerpage/leadgeneration/conversion.png";
import { Flip } from "react-reveal";
const LeadGenerationProcess = () => {
  return (
    <div>
      <div className="bg-white mx-auto w-full py-5 px-16 ">
        <div className="max-w-[1240px] mx-auto ">
          {/* Heading */}
          <div className="flex flex-col flex-wrap items-center">
            <h1 className="font-heading md:text-3xl uppercase text-Primary text-xl">
              Process
            </h1>
            <h2 className="font-subheading md:text-xl text-black text-sm">
              Our Lead Generation Process
            </h2>
            <p className="font-content md:text-lg text-black text-sm text-justify align-baseline md:px-28 px-10">
              Our lead generation process is segmented into six steps which
              includes: Lead acquisition, marketing & sales qualification,
              customer retention, lead nurturing, sales transfer & conversion.
            </p>
          </div>
          {/* Heading Ends */}

          {/* Lead Acquistion Div */}

          <div className="mx-auto flex flex-col md:px-28 px-10 mt-10">
            <Flip duration={3000}>
              {" "}
              <img
                src={oneicon}
                alt="Icon One"
                className="md:w-[80px] md:h-[80px] w-[50px] h-[50px]"
              />
            </Flip>
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
                LEAD ACQUISITION
              </h1>
              <p className="font-content md:text-lg text-sm col-span-2">
                Lead acquisition can be a challenge, but it's important to
                remember that every lead is an opportunity. By using the right
                methods, we work to increase the chances of acquiring leads and
                convert them into customers. There are a number of ways to
                acquire leads, including:
                <br></br>
                <br></br>
                Advertising, cold-calling and reaching out to potential
                customers who have not shown any interest in your product or
                service.
              </p>
            </div>
          </div>

          {/* Lead Acquistion Div Ends*/}

          {/* Marketing and Sales Lead Qualification Div */}

          <div className="mx-auto flex flex-col md:px-28 px-10 mt-10 items-end">
            <Flip duration={3000}>
              {" "}
              <img
                src={twoicon}
                alt="Icon Two"
                className="md:w-[80px] md:h-[80px] w-[50px] h-[50px]"
              />
            </Flip>
          </div>

          <div className="grid md:grid-cols-2 mt-10 gap-24 md:px-28 px-10 justify-center">
            <div className="mx-auto flex flex-col text-justify">
              <h1 className="font-heading md:text-xl text-sm uppercase mb-4">
                Marketing and Sales Lead Qualification
              </h1>
              <p className="font-content md:text-lg text-sm col-span-2">
                Lead qualification is the process of determining whether a lead
                is ready to be sold to. This involves assessing factors like
                budget, authority, need and timeline.
                <br></br>
                <br></br>
                Since, the process of qualifying a lead is essential to the
                success of any sales or marketing team, which is why we ensure
                that our team is only spending time on leads that are truly
                interested in your product or service.
              </p>
            </div>
            <img
              src={processicon2}
              alt="Process Icon 2"
              className="md:w-[27rem] md:h-[22rem] w-[14rem] h-[14rem]"
            />
          </div>

          {/* Marketing and Sales Lead Qualification Div Ends*/}

          {/* Customer Retention Div */}

          <div className="mx-auto flex flex-col md:px-28 px-10 mt-10">
            <Flip duration={3000}>
              {" "}
              <img
                src={threeicon}
                alt="Icon Three"
                className="md:w-[80px] md:h-[80px] w-[50px] h-[50px]"
              />
            </Flip>
          </div>
          <div className="grid md:grid-cols-2 mt-10 gap-1 md:px-28 px-10 justify-center">
            <img
              src={processicon3}
              alt="Process Icon 3"
              className="md:w-[27rem] md:h-[22rem] w-[14rem] h-[14rem]"
            />
            <div className="mx-auto flex flex-col text-justify">
              <h1 className="font-heading md:text-xl text-sm uppercase mb-4">
                Customer Retention
              </h1>
              <p className="font-content md:text-lg text-sm col-span-2">
                Customer retention is a process in which we keep our customers
                interested and engaged over time. In the lead generation
                process, customer retention is a key metric to track, as it can
                give you invaluable insights. We use several ways to measure
                customer retention, but one of the most important is the
                customer churn rate.
              </p>
            </div>
          </div>

          {/* Customer Retention Div Ends*/}

          {/* Lead Nurturing Div */}

          <div className="mx-auto flex flex-col md:px-28 px-10 mt-10 items-end">
            <Flip duration={3000}>
              {" "}
              <img
                src={fouricon}
                alt="Icon Four"
                className="md:w-[80px] md:h-[80px] w-[50px] h-[50px]"
              />
            </Flip>
          </div>
          <div className="grid md:grid-cols-2 mt-10 gap-24 md:px-28 px-10 justify-center">
            <div className="mx-auto flex flex-col text-justify">
              <h1 className="font-heading md:text-xl text-sm uppercase mb-4">
                Lead Nurturing
              </h1>
              <p className="font-content md:text-lg text-sm col-span-2">
                In the lead nurturing process we develop relationships with
                potential customers by providing valuable information and
                building a rapport with prospects, businesses can increase the
                chances of making a sale down the road.
                <br></br>
                <br></br>
                The continuous and consistent effort of our lead generation team
                helps a lot to bring the sales into the pipeline.
              </p>
            </div>
            <img
              src={processicon4}
              alt="Process Icon 4"
              className="md:w-[27rem] md:h-[22rem] w-[14rem] h-[14rem] "
            />
          </div>

          {/* Lead Nurturing Div Ends*/}

          {/* Sales Tranfer Div */}

          <div className="mx-auto flex flex-col md:px-28 px-10 mt-10">
            <Flip duration={3000}>
              {" "}
              <img
                src={fiveicon}
                alt="Icon Five"
                className="md:w-[80px] md:h-[80px] w-[50px] h-[50px]"
              />
            </Flip>
          </div>
          <div className="grid md:grid-cols-2 mt-10 gap-1 md:px-28 px-10 justify-center">
            <img
              src={processicon5}
              alt="Process Icon 5"
              className="md:w-[27rem] md:h-[22rem] w-[14rem] h-[14rem]"
            />
            <div className="mx-auto flex flex-col text-justify">
              <h1 className="font-heading md:text-xl text-sm uppercase mb-4">
                SALES TRANSFER
              </h1>
              <p className="font-content md:text-lg text-sm col-span-2">
                Through the sales transfer process we transfer ownership of a
                product or service from one party to another. This is done to
                accommodate a customer's preference, or to simply make the sale
                process easier.
                <br></br>
                <br></br>
                For doing so, we keep in mind that, both parties must agree to
                the transfer, the product or service must be in good condition
                and able to be transferred and finally, the parties must come to
                an agreement on the price of the transfer.
              </p>
            </div>
          </div>

          {/* Sales Tranfer Div Ends*/}

          {/* Conversion Div */}

          <div className="mx-auto flex flex-col md:px-28 px-10 mt-10 items-end">
            <Flip duration={3000}>
              <img
                src={sixicon}
                alt="Icon Six"
                className="md:w-[80px] md:h-[80px] w-[50px] h-[50px]"
              />
            </Flip>
          </div>
          <div className="grid md:grid-cols-2 mt-10 gap-24 md:px-28 px-10 justify-center">
            <div className="mx-auto flex flex-col text-justify">
              <h1 className="font-heading md:text-xl text-sm uppercase mb-4">
                Conversion
              </h1>
              <p className="font-content md:text-lg text-sm col-span-2">
                Conversion is the final process of lead generation which means
                turning a lead into a customer. This can be done through a
                variety of means, such as online marketing, cold calling, or
                simply providing great customer service.
                <br></br>
                <br></br>
                The most important part of lead conversion is making sure that
                we are providing value to the customer.
              </p>
            </div>
            <img
              src={processicon6}
              alt="Process Icon 6"
              className="md:w-[27rem] md:h-[22rem] w-[14rem] h-[14rem] "
            />
          </div>

          {/* Conversion Div Ends*/}
        </div>
      </div>
    </div>
  );
};

export default LeadGenerationProcess;
