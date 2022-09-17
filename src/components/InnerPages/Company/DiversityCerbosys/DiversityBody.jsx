import React from "react";
import diversityimage from "../../../../assets/innerpage/diversity/image.png";
import gificon from "../../../../assets/innerpage/diversity/giphy.gif";
import gendericon from "../../../../assets/innerpage/diversity/vector.svg";

// import {
//     Tabs,
//     TabsHeader,
//     TabsBody,
//     Tab,
//     TabPanel,
//   } from "@material-tailwind/react";

//Sample Data

//     const data = [
//             {
//               label: "HTML",
//               value: "html",
//               desc: `It really matters and then like it really doesn't matter.
//               What matters is the people who are sparked by it. And the people
//               who are like offended by it, it doesn't matter.`,
//             },
//             {
//               label: "React",
//               value: "react",
//               desc: `Because it's about motivating the doers. Because I'm here
//               to follow my dreams and inspire other people to follow their dreams, too.`,
//             },

//             {
//               label: "Vue",
//               value: "vue",
//               desc: `We're not always in the position that we want to be at.
//               We're constantly growing. We're constantly making mistakes. We're
//               constantly trying to express ourselves and actualize our dreams.`,
//             },

//             {
//               label: "Angular",
//               value: "angular",
//               desc: `Because it's about motivating the doers. Because I'm here
//               to follow my dreams and inspire other people to follow their dreams, too.`,
//             },

//             {
//               label: "Svelte",
//               value: "svelte",
//               desc: `We're not always in the position that we want to be at.
//               We're constantly growing. We're constantly making mistakes. We're
//               constantly trying to express ourselves and actualize our dreams.`,
//             }
// ];

const DiversityBody = () => {
  return (
    <div>
      <div className="mx-auto w-full py-16 px-2">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid md:grid-cols-2">
            {/* Content Section */}
            <div className="mx-auto flex flex-col md:px-24 px-14 text-justify">
              <h1 className="font-heading md:text-2xl text-lg mb-2">
                {" "}
                Our Diversity{" "}
              </h1>
              <p className="font-content md:text-lg text-sm">
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
                Our vision is
                to create a place where all people feel respected, appreciated,
                and heard. The first step toward that goal is to ensure that
                there is a positive representation of diversity across the
                Cerbosys.
              </p>
            </div>
            {/* Content Section Ends*/}

            {/* Image Section */}
            <img
              src={diversityimage}
              alt="Diversity Icon"
              className="mx-auto md:w-[28rem]
             w-[18rem] mt-2"
            />
            {/* Image Section Ends*/}
          </div>

          <div className="flex items-center justify-center md:mt-20 mt-10 mx-6">
            <img
              src={gificon}
              alt="Gif Icon"
              className="md:w-[50rem] md:h-[24rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiversityBody;

{
  /* Focus Area */
}
//   <div>
//   <div className='mx-auto mt-16'>
//   <Tabs id="custom-animation" value="html">
// <TabsHeader className='font-heading text-lg'>

// {data.map(({ label, value }) => (
// <Tab key={value} value={value}>
//    <img src={gendericon} className="w-[30px] inline-flex " />
//   {label}
// </Tab>
// ))}
// </TabsHeader>
// <TabsBody
// animate={{
// mount: { y: 0 },
// unmount: { y: 250 },
// }}
// >
// {data.map(({ value, desc }) => (
// <TabPanel key={value} value={value}>
//   {desc}
// </TabPanel>
// ))}
// </TabsBody>
// </Tabs>

//   </div>
// </div>
{
  /* Focus Area Ends */
}
