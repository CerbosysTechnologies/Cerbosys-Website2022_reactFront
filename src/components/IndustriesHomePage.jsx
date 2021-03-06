import React from 'react'
import agricultureicon from '../assets/industry/Agriculture.svg';
import bankingicon from '../assets/industry/Banking.svg';
import ecommerceicon from '../assets/industry/E-commerce.svg';
import educationicon from '../assets/industry/Education.svg';
import fitnessicon from '../assets/industry/Fitness.svg';
import foodicon from '../assets/industry/Food.svg';
import healthcareicon from '../assets/industry/Healthcare.svg';
import logisticsicon from '../assets/industry/Logistics.svg';
import manufacturingicon from '../assets/industry/Manufacturing.svg';
import miningicon from '../assets/industry/Mining.svg';
import realestateicon from '../assets/industry/Real_estate.svg';
import transportationicon from '../assets/industry/Transportation.svg';

const IndustriesHomePage = () => {
  return (
    <div>
    
    <div className="bg-[#404CDC] mx-auto w-full h-full py-16 px-4 ">
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        {/* Content Part */}
        <div className='flex flex-col text-justify justify-center px-16'>

          <h1 className='text-white font-heading md:text-xl text-lg '>Our Industries</h1>
          <div className='text-white font-content text-sm md:text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </div>
        </div>
        {/* Content Part */}
        {/* Icons Starts */}
        <div className='mx-auto my-4 grid md:grid-cols-4 md:gap-4 grid-cols-2 gap-10'>
            <div>
                <img src={agricultureicon} alt="Agriculture Icon" className='md:w-[170px] md:h-[170px] 
                w-[120px] h-[120px]'></img>
            </div>

            <div>
                <img src={ecommerceicon} alt="E-commerce Icon" className='md:w-[170px] md:h-[170px] 
                w-[120px] h-[120px]'></img>
            </div>

            <div>
                <img src={healthcareicon} alt="Healthcare Icon" className='md:w-[170px] md:h-[170px] 
                w-[120px] h-[120px]'></img>
            </div>

            <div>
                <img src={bankingicon} alt="Banking Icon" className='md:w-[170px] md:h-[170px] 
                w-[120px] h-[120px]'></img>
            </div>

            <div>
                <img src={miningicon} alt="Mining Icon" className='md:w-[170px] md:h-[170px] 
                w-[120px] h-[120px]'></img>
            </div>

            <div>
                <img src={fitnessicon} alt="Fitness Icon" className='md:w-[170px] md:h-[170px] 
                w-[120px] h-[120px]'></img>
            </div>

            <div>
                <img src={transportationicon} alt="Transportation Icon" className='md:w-[170px] md:h-[170px] 
                w-[120px] h-[120px]'></img>
            </div>

            <div>
                <img src={logisticsicon} alt="Logistics Icon" className='md:w-[170px] md:h-[170px] 
                w-[120px] h-[120px]'></img>
            </div>

            <div>
                <img src={foodicon} alt="Food Icon" className='md:w-[170px] md:h-[170px] 
                w-[120px] h-[120px]'></img>
            </div>

            <div>
                <img src={educationicon} alt="Education Icon" className='md:w-[170px] md:h-[170px] 
                w-[120px] h-[120px]'></img>
            </div>

            <div>
                <img src={realestateicon} alt="Real Estate Icon" className='md:w-[170px] md:h-[170px] 
                w-[120px] h-[120px]'></img>
            </div>

            <div>
                <img src={manufacturingicon} alt="Manufacturing Icon" className='md:w-[170px] md:h-[170px] 
                w-[120px] h-[120px]'></img>
            </div>


        </div>
        {/* Icons Ends */}
      </div>
    </div>
</div>
  )
}

export default IndustriesHomePage