import React from 'react'
import diversityimage from '../../../../assets/innerpage/diversity/image.png'
import gendericon from '../../../../assets/innerpage/diversity/vector.svg'
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";


//Sample Data

    const data = [
            {
              label: "HTML",
              value: "html",
              desc: `It really matters and then like it really doesn't matter.
              What matters is the people who are sparked by it. And the people 
              who are like offended by it, it doesn't matter.`,
            },
            {
              label: "React",
              value: "react",
              desc: `Because it's about motivating the doers. Because I'm here
              to follow my dreams and inspire other people to follow their dreams, too.`,
            },
         
            {
              label: "Vue",
              value: "vue",
              desc: `We're not always in the position that we want to be at.
              We're constantly growing. We're constantly making mistakes. We're 
              constantly trying to express ourselves and actualize our dreams.`,
            },
         
            {
              label: "Angular",
              value: "angular",
              desc: `Because it's about motivating the doers. Because I'm here
              to follow my dreams and inspire other people to follow their dreams, too.`,
            },
         
            {
              label: "Svelte",
              value: "svelte",
              desc: `We're not always in the position that we want to be at.
              We're constantly growing. We're constantly making mistakes. We're 
              constantly trying to express ourselves and actualize our dreams.`,
            }
];


const DiversityBody = () => {
  return (
    <div>
        <div className="mx-auto w-full py-16 px-2">
        <div className="max-w-[1240px] mx-auto">
         
        <div className="grid md:grid-cols-2">
            {/* Content Section */}
            <div className="mx-auto flex flex-col md:px-24 px-14 text-justify">
              <h1 className="font-heading md:text-xl text-sm"> Our Diversity </h1>
              <p className="font-content md:text-sm text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
                omnis magni! Maiores aspernatur incidunt labore minus quo hic,
                tenetur delectus, deleniti praesentium esse pariatur in
                provident? Aliquid vel alias eos! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Rem, omnis magni! Maiores
                aspernatur incidunt labore minus quo hic, tenetur delectus,
                deleniti praesentium esse pariatur in provident? Aliquid vel
                alias eos!
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


        {/* Focus Area */}
        <div>
            <div className='mx-auto mt-16'>
            <Tabs id="custom-animation" value="html">
      <TabsHeader className='font-heading text-lg'>
       
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
             <img src={gendericon} className="w-[30px] inline-flex " />
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody
        animate={{
          mount: { y: 0 },
          unmount: { y: 250 },
        }}
      >
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>


            </div>
        </div>
        {/* Focus Area Ends */}


      

          </div>
          </div>
    </div>
  )
}

export default DiversityBody