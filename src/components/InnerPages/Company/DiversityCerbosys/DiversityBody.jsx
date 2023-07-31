import React from 'react';
import diversityimage from '../../../../assets/innerpage/diversity/image.png';
import gificon from '../../../../assets/innerpage/diversity/giphy.gif';



const DiversityBody = () => {
  return (
    <div>
      <div className="mx-auto w-full py-16 px-2 ">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid md:grid-cols-2">
            {/* Content Section */}
            <div className="mx-auto flex flex-col md:px-24 px-14 text-justify  break-words">
              <h2 className="font-heading md:text-2xl text-lg mb-2">
                Our Diversity
              </h2>
              <p className="font-content ">
                Cerbosys is an exciting place to work because we always look
                forward to working with people who bring different perspectives
                that help in the growth of our client’s businesses.
                <br></br>
                <br></br>
                As a company, we believe that our diversity of perspectives,
                ideas, and culture allows us to deliver better services.
                <br></br>
                <br></br>
                Recruiting and retaining the best quality people is our top
                priority regardless of their religion, race, caste, color,
                gender, sexual orientation, age, or ability. Cerbosys is known
                for its value and ethics which is why applicants, as well as
                employees, come under this non-description policy.
                <br></br>
                <br></br>
                Our vision is to create a place where all people feel respected,
                appreciated, and heard. The first step toward that goal is to
                ensure that there is a positive representation of diversity
                across the Cerbosys.
              </p>
            </div>
            {/* Content Section Ends*/}

            {/* Image Section */}
            <img
              src={diversityimage}
              alt="Mobile App Development Services"
              className="mx-auto md:w-[28rem]
             w-[18rem] mt-2"
            />
            {/* Image Section Ends*/}
          </div>

          <div className="flex items-center justify-center md:mt-20 mt-10 mx-4">
            <img
              src={gificon}
              alt="Mobile App Development Services"
              className="md:w-[50rem] md:h-[24rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiversityBody;
