import React from "react";
import ecommercemobicon from "../../../../assets/innerpage/ecommerce/ecommercemob.png";
import ecommercebusinessicon from "../../../../assets/innerpage/ecommerce/ecommerceimage.png";

export const EcommerceBody = () => {
  return (
    <div>
      <div className="mx-auto w-full py-10 px-4 ">
        <div className="max-w-[1240px] mx-auto">
          {/* Image Section */}
          <div className="flex flex-wrap mx-auto items-center justify-center space-x-10">
            {/* Mobile Image */}
            <div className="">
              <img
                src={ecommercemobicon}
                alt="Ecommerce Mobile"
                className="md:h-[40rem]"
              />
            </div>
            {/* Mobile Image */}

            {/* Image Section Ends*/}

            {/* Side */}
            <div className="flex flex-wrap flex-col ">
              <h1 className="text-Green md:text-4xl text-xl mt-4 font-heading text-center mb-6">
                Ecommerce In Business
              </h1>
              <img
                src={ecommercebusinessicon}
                alt="Ecommerce Business"
                className="md:h-[20rem]"
              />
              <p className="font-subheading md:text-xl text-lg md:w-[33rem] mt-6 text-justify">
                E-commerce is a powerful force in today's economy. It allows
                buyers to purchase items from the comfort of their own homes,
                and it allows sellers to reach a global audience. Whether you're
                a buyer looking for the best deals, or a seller looking to
                expand your business, e-commerce is a great way to do it.
              </p>
            </div>
            {/* Side Image*/}
          </div>

          {/* Bullet Section */}
          <div className="flex flex-wrap flex-col mx-auto">
            <div className="font-heading md:text-4xl text-xl mt-10 text-center">
              Our Services for the E-commerce Industry
            </div>

            <ul className="text-justify font-content md:text-xl text-sm mt-10 list-disc">
              <li>
                <strong>E-commerce merchandising :-</strong> We offer e-commerce
                merchandising services through the process of optimizing your
                product listings to get the most traffic leading to sales. By
                using the right techniques, we make sure your products get seen
                by the right people and generate revenue online.
              </li>

              <li>
                <strong>Digital Marketing :-</strong>We provide digital
                marketing optimization and innovative marketing campaigns to
                improve conversions and ROI. This can be done through a variety
                of means, including services like social media promotion, paid
                ad campaigns, etc.
              </li>

              <li>
                <strong>Advanced Customer Analytics :-</strong> With our
                cutting-edge solutions, you'll be able to get a deeper
                understanding of your customers and their needs that will take
                your customer analytics to the next level. By understanding what
                makes your customers unique, you can create a more targeted
                marketing strategy that resonates with them and drives sales.
              </li>

              <li>
                <strong>Maintenance and Support :-</strong> Maintenance and
                Support is the newest way to improve your website's usability,
                increase user engagement and improve conversion on your website.
                By creating a maintenance or support plan for your e-commerce or
                retail software, we help in generating leads and increase user
                engagement.
              </li>
            </ul>
          </div>
          {/* Bullet Section Ends*/}
        </div>
      </div>
    </div>
  );
};
