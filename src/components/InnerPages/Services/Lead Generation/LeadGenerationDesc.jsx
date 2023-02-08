import React from 'react';
import leadgenerationicon from '../../../../assets/innerpage/leadgeneration/lead_generation.svg';
import leadgeneration_articon from '../../../../assets/innerpage/leadgeneration/illustrator.svg';
import { Bounce } from 'react-reveal';

const LeadGenerationDesc = () => {
  return (
    <div>
      <div className=" mx-auto w-full py-16 px-4 ">
        <div className="max-w-[1240px] mx-auto ">
          {/* First Section */}

          <Bounce duration={3000}>
            <div className="grid md:grid-cols-2">
              {/* Content Section */}
              <div className="mx-auto flex flex-col md:px-24 px-14 text-justify">
                <h2 className="text-white uppercase font-heading pt-2 md:text-5xl text-2xl md:mb-4 min-w-fit">
                  {' '}
                  Lead Generation{' '}
                </h2>
                <p className="text-center text-white font-subheading  md:text-lg text-xs md:w-[980px] max-w-fit">
                  Lead generation can happen in a number of ways, but most often
                  it involves either online or offline marketing activities. Our
                  online activities include things like creating a website or
                  blog, conducting online search engine marketing (SEM)
                  campaigns, or creating online ads. Offline activities include
                  things like attending trade shows or events, conducting direct
                  mail campaigns, orCold-calling.
                </p>
              </div>
              {/* Content Section Ends*/}

              {/* Image Section */}
              <img
                src={leadgenerationicon}
                alt="Lead Generation Icon"
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
            <div className="grid md:grid-cols-2 bg-Primary mt-8 rounded-3xl gap-2">
              {/* Image Section */}
              <img
                src={leadgeneration_articon}
                alt="Lead Generation Icon"
                className="md:w-[24rem] mx-auto my-8
             w-[18rem] mt-8"
              />
              {/* Image Section Ends*/}

              {/* Content Section */}
              <div className="flex flex-col md:px-24 px-14 mx-auto text-justify mt-8">
                <h2 className="font-heading md:text-2xl text-lg text-white mb-3">
                  We are aware of the Technology Pulse that Leads to Better
                  Performance
                </h2>
                <p className="font-content md:text-lg text-sm mb-8 text-white">
                  Our lead generation team helps businesses, especially small
                  size businesses to convert interest into a sales opportunity.
                  Which eventually nurtures the performance of that business
                  online.
                  <br></br>
                  <br></br>
                  Our main focus is to convert clicks into sales by using
                  effective lead generation tactics like search engine marketing
                  (SEM) campaigns, or creating online ads that deliver real
                  value to our clients.
                </p>
              </div>
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
  );
};

export default LeadGenerationDesc;
