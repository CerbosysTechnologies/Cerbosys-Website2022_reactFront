// import { Agriculture } from '@mui/icons-material';
import React from 'react';
import industry from '../../assets/portfolio/industry.png';
import realstate from '../../assets/portfolio/realstate.png';
import Transportation from '../../assets/portfolio/Transportation.png';
import Banking from '../../assets/portfolio/Banking.png';
import Finance_bitcoin from '../../assets/portfolio/Finance_bitcoin.png';
import Finance from '../../assets/portfolio/Finance.png';
import manufacturing from '../../assets/portfolio/manufacturing.png';
import mining_Experts from '../../assets/portfolio/mining_Experts.png';
import mining2 from '../../assets/portfolio/mining2.png';
import Main from '../../assets/portfolio/Main.png';
import gym from '../../assets/portfolio/gym.png';
import manufact1 from '../../assets/portfolio/manufact1.png';
import apparel from '../../assets/portfolio/apparel.png';
import Agriculture from '../../assets/portfolio/Agriculture.png';
import food from '../../assets/portfolio/food.png';
import plant from '../../assets/portfolio/plant.png';
import boutique from '../../assets/portfolio/boutique.png';
import Footwear from '../../assets/portfolio/Footwear.png';
import barbistan from '../../assets/portfolio/barbistan.png';
import coaching from '../../assets/portfolio/coaching.png';
import school from '../../assets/portfolio/school.png';
import college from '../../assets/portfolio/college.png';
import architech from '../../assets/portfolio/architech.png';
import hotel from '../../assets/portfolio/hotel.jpg';
import car from '../../assets/portfolio/car.png';
import transpotation3 from '../../assets/portfolio/transpotation3.png';

import salon from '../../assets/portfolio/salon.png';
import { Link } from 'react-router-dom';
const Tabstemplate = () => {
  return (
    <>
      <div>
        <div className="mt-6 ">
          <h1 className="text-Purpal border-b-2  border-b-Orange rounded-md mx-auto  p-3 max-w-fit  text-center font-heading  md:text-3xl text-xl md:mb-5 min-w-fit mt-5 md:mt-0">
            Agriculture
          </h1>
        </div>
        <div className="flex justify-between flex-col md:flex-row content-center items-center mt-12 gap-6 text-white">
          <div className="md:w-[50%] w-[100%]">
            <div className="shadow mx-auto  flex justify-center items-center py-2 md:h-[24rem]">
              <a href="hhttps://agriculture.cerbosys.com/order-food-online" target='_blank'  rel='noreferrer'>
              <img
                src={food}
                alt="djhfj"
                className="md:h-[24rem] mx-auto rounded-lg"
              /> 
              </a>
            </div>
          </div>
          <div className="md:w-[50%] w-[100%]">
            <div className="shadow mx-auto  flex justify-center items-center py-2 md:h-[24rem]">
              <a href="https://agriculture.cerbosys.com/agricuture" target='_blank'  rel='noreferrer'>
              <img
                
                src={Agriculture}
                alt="djhfj"
                className="md:h-[24rem] mx-auto rounded-lg"
              /></a>
            </div>
          </div>
          <div className="md:w-[50%] w-[100%]">
            <div className="shadow mx-auto  flex justify-center items-center py-2 md:h-[24rem]">
             <a href="https://agriculture.cerbosys.com/plants" target='_blank'  rel='noreferrer'>
              <img
                src={plant}
                alt="djhfj"
                className="md:h-[24rem] mx-auto rounded-lg"
              /></a>
            </div>
          </div>
        </div>
        <div className="mt-6 ">
          <h1 className="text-Purpal border-b-2  border-b-Orange rounded-md mx-auto  p-3 max-w-fit  text-center font-heading  md:text-3xl text-xl md:mb-5 min-w-fit mt-5 md:mt-0">
            Ecommerce & Retail
          </h1>
        </div>
        <div className="flex justify-between flex-col md:flex-row content-center items-center mt-12 gap-6 text-white">
          <div className="md:w-[50%] w-[100%]">
            <div className="shadow mx-auto  flex justify-center items-center py-2 md:h-[24rem]">
           <a href="https://ecommerce.cerbosys.com/accessories-online-shopping" target='_blank'  rel='noreferrer'>
               <img src={apparel} alt="djhfj" className="md:h-[24rem] mx-auto" /></a>
            </div>
          </div>
          <div className="md:w-[50%] w-[100%]">
            <div className="shadow mx-auto  flex justify-center items-center py-2 md:h-[24rem]">
           <a href="https://ecommerce.cerbosys.com/footwear" target='_blank'  rel='noreferrer'>
              <img
                src={Footwear}
                alt="djhfj"
                className="md:h-[24rem] mx-auto"
              /></a> 
            </div>
          </div>
          <div className="md:w-[50%] w-[100%]">
            <div className="shadow mx-auto  flex justify-center items-center py-2 md:h-[24rem]">
           
           <a href="https://ecommerce.cerbosys.com/womens-clothing" target='_blank'  rel='noreferrer'>
             <img
                src={boutique}
                alt="djhfj"
                className="md:h-[24rem] mx-auto"
              />
              </a>  
            </div>
          </div>
        </div>
        <div className="mt-6 ">
          <h1 className="text-Purpal border-b-2  border-b-Orange rounded-md mx-auto  p-3 max-w-fit  text-center font-heading  md:text-3xl text-xl md:mb-5 min-w-fit mt-5 md:mt-0">
            Healthcare & Life Science
          </h1>
        </div>
        <div className="flex justify-between flex-col md:flex-row content-center items-center mt-12 gap-6 text-white">
          <div className="md:w-[50%] w-[100%]">
            <div className="shadow mx-auto  flex justify-center items-center py-2 md:h-[24rem]">
             <a href="https://healthcare.cerbosys.com/fitness-gym" target='_blank'  rel='noreferrer'>
               <img src={gym} alt="djhfj" className="md:h-[24rem] mx-auto" /></a>
            </div>
          </div>
          <div className="md:w-[50%] w-[100%]">
            <div className="shadow mx-auto  flex justify-center items-center py-2 md:h-[24rem]">
            <a href="https://healthcare.cerbosys.com/lookwell-parlour" target='_blank'  rel='noreferrer' >
                <img src={salon} alt="djhfj" className="md:h-[24rem] mx-auto" /></a>
            </div>
          </div>
          <div className="md:w-[50%] w-[100%]">
            <div className="shadow mx-auto  flex justify-center items-center py-2 md:h-[24rem]">
       <a href="https://healthcare.cerbosys.com/mens-hair-salon" target='_blank'  rel='noreferrer'>       <img
                src={barbistan}
                alt="djhfj"
                className="md:h-[24rem] mx-auto"
              /></a>
            </div>
          </div>
        </div>
        <div className="mt-6 ">
          <h1 className="text-Purpal border-b-2  border-b-Orange rounded-md mx-auto  p-3 max-w-fit  text-center font-heading  md:text-3xl text-xl md:mb-5 min-w-fit mt-5 md:mt-0">
            Banking & Finance
          </h1>
        </div>
        <div className="flex justify-between flex-col md:flex-row content-center items-center mt-12 gap-6 text-white">
          <div className="md:w-[50%] w-[100%]">
            <div className="shadow mx-auto  flex justify-center items-center py-2 md:h-[24rem]">
            <a href="https://banking.cerbosys.com/personal-loan-online" target='_blank' rel='noreferrer'>
               <img src={Banking} alt="djhfj" className="md:h-[24rem] mx-auto" />
               </a> 
            </div>
          </div>
          <div className="md:w-[50%] w-[100%]">
            <div className="shadow mx-auto  flex justify-center items-center py-2 md:h-[24rem]">
            <a href="https://banking.cerbosys.com/financial-services" target='_blank' rel='noreferrer' >
                <img src={Finance} alt="djhfj" className="md:h-[24rem] mx-auto" />
                </a>
            </div>
          </div>
          <div className="md:w-[50%] w-[100%]">
            <div className="shadow mx-auto  flex justify-center items-center py-2 md:h-[24rem]">
           <a href="https://banking.cerbosys.com/cryptocurrency" target='_blank' rel='noreferrer'>
               <img
                src={Finance_bitcoin}
                alt="djhfj"
                className="md:h-[24rem] mx-auto"
              />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 ">
          <h1 className="text-Purpal border-b-2  border-b-Orange rounded-md mx-auto  p-3 max-w-fit  text-center font-heading  md:text-3xl text-xl md:mb-5 min-w-fit mt-5 md:mt-0">
            Manufacturing
          </h1>
        </div>
        <div className="flex justify-between flex-col md:flex-row content-center items-center mt-12 gap-6 text-white">
          <div className="md:w-[50%] w-[100%]">
            <div className="shadow mx-auto  flex justify-center items-center py-2 md:h-[24rem]">
           <a href="https://manufacturing.cerbosys.com/industrial-solutions" target='_blank' 
           rel='noreferrer'>   
           <img
                src={manufacturing}
                alt="djhfj"
                className="md:h-[24rem] mx-auto"
              /></a>
            </div>
          </div>
          <div className="md:w-[50%] w-[100%]">
            <div className="shadow mx-auto  flex justify-center items-center py-2 md:h-[24rem]">
              <a href="https://manufacturing.cerbosys.com/sustainable-infrastructure" target='_blank'
               rel='noreferrer'>
              <img
                src={manufact1}
                alt="djhfj"
                className="md:h-[24rem] mx-auto"
              /></a>
            </div>
          </div>
          <div className="md:w-[50%] w-[100%]">
            <div className="shadow mx-auto  flex justify-center items-center py-2 md:h-[24rem]">
              <a href="https://manufacturing.cerbosys.com/buysteel" target='_blank' rel='noreferrer'>

           
              <img
                src={industry}
                alt="djhfj"
                className="md:h-[24rem] mx-auto"
              />
                 </a>
            </div>
          </div>
        </div>
        <div className="mt-6 ">
          <h1 className="text-Purpal border-b-2  border-b-Orange rounded-md mx-auto  p-3 max-w-fit  text-center font-heading  md:text-3xl text-xl md:mb-5 min-w-fit mt-5 md:mt-0">
            Mining
          </h1>
        </div>
        <div className="flex justify-between flex-col md:flex-row content-center items-center mt-12 gap-6 text-white">
          <div className="md:w-[50%] w-[100%]">
            <div className="shadow mx-auto  flex justify-center items-center py-2 md:h-[24rem]">
            <a href="https://mining.cerbosys.com/mining" 
            target="_blank" rel="noopener noreferrer">
                <img
                src={mining_Experts}
                alt="djhfj"
                className="md:h-[24rem] mx-auto"
              /></a>
            </div>
          </div>
          <div className="md:w-[50%] w-[100%]">
            <div className="shadow mx-auto  flex justify-center items-center py-2 md:h-[24rem]">
             <a href="https://mining.cerbosys.com/mining-customer-management-solution" 
             target="_blank" rel="noopener noreferrer">
               <img src={mining2} alt="djhfj" className="md:h-[24rem] mx-auto" />
               </a>
            </div>
          </div>
          <div className="md:w-[50%] w-[100%]">
            <div className="shadow mx-auto  flex justify-center items-center py-2 md:h-[24rem]">
             <a href="https://mining.cerbosys.com/Mining-technology"
              target="_blank" rel="noopener noreferrer">
               <img src={Main} alt="djhfj" className="md:h-[24rem] mx-auto" />
               </a>
            </div>
          </div>
        </div>
        <div className="mt-6 ">
          <h1 className="text-Purpal border-b-2  border-b-Orange rounded-md mx-auto  p-3 max-w-fit  text-center font-heading  md:text-3xl text-xl md:mb-5 min-w-fit mt-5 md:mt-0">
            Education
          </h1>
        </div>
        <div className="flex justify-between flex-col md:flex-row content-center items-center mt-12 gap-6 text-white">
          <div className="md:w-[50%] w-[100%]">
            <div className="shadow mx-auto  flex justify-center items-center py-2 md:h-[24rem]">
             <a href="https://education.cerbosys.com/coaching-classes-online" 
             target='_blank' rel='noreferrer'>
              <img
                src={coaching}
                alt="djhfj"
                className="md:h-[24rem] mx-auto"
              /></a>
            </div>
          </div>
          <div className="md:w-[50%] w-[100%]">
            <div className="shadow mx-auto  flex justify-center items-center py-2 md:h-[24rem]">
             <a href="https://education.cerbosys.com/online-education"    target='_blank' rel='noreferrer'>
              <img src={college} alt="djhfj" className="md:h-[24rem] mx-auto" />
              </a> 
            </div>
          </div>
          <div className="md:w-[50%] w-[100%]">
            <div className="shadow mx-auto  flex justify-center items-center py-2 md:h-[24rem]">
          <a href="https://education.cerbosys.com/top-international-school" target="_blank"
           rel="noopener noreferrer">
              <img src={school} alt="djhfj" className="md:h-[24rem] mx-auto" />
              </a>  
            </div>
          </div>
        </div>
        <div className="mt-6 ">
          <h1 className="text-Purpal border-b-2  border-b-Orange rounded-md mx-auto  p-3 max-w-fit  text-center font-heading  md:text-3xl text-xl md:mb-5 min-w-fit mt-5 md:mt-0">
            REAL ESTATE & CONSTRUCTION
          </h1>
        </div>
        <div className="flex justify-between flex-col md:flex-row content-center items-center mt-12 gap-6 text-white">
          <div className="md:w-[50%] w-[100%]">
            <div className="shadow mx-auto  flex justify-center items-center py-2 md:h-[24rem]">
             
             <a href="https://realestate.cerbosys.com/architectural-design"
              target="_blank" rel="noopener noreferrer">
                 <img
                src={architech}
                alt="djhfj"
                className="md:h-[24rem] mx-auto"
              /></a>
            </div>
          </div>
          <div className="md:w-[50%] w-[100%]">
            <div className="shadow mx-auto  flex justify-center items-center py-2 md:h-[24rem]">
            <a href="https://realestate.cerbosys.com/book-luxury-hotel-online"
             target="_blank" rel="noopener noreferrer">
              <img src={hotel} alt="djhfj" className="md:h-[24rem] mx-auto" /></a>
            </div>
          </div>
          <div className="md:w-[50%] w-[100%]">
            <div className="shadow mx-auto  flex justify-center items-center py-2 md:h-[24rem]">
           <a href="https://realestate.cerbosys.com/property-dealing"
            target="_blank" rel="noopener noreferrer">
              <img
                src={realstate}
                alt="djhfj"
                className="md:h-[24rem] mx-auto"
              /></a>
            </div>
          </div>
        </div>
        <div className="mt-6 ">
          <h1 className="text-Purpal border-b-2  border-b-Orange rounded-md mx-auto  p-3 max-w-fit  text-center font-heading  md:text-3xl text-xl md:mb-5 min-w-fit mt-5 md:mt-0">
            TRANSPORT & LOGISTICS
          </h1>
        </div>
        <div className="flex justify-between flex-col md:flex-row content-center items-center mt-12 gap-6 text-white">
          <div className="md:w-[50%] w-[100%]">
            <div className="shadow mx-auto  flex justify-center items-center py-2 md:h-[24rem]">
           <a href="https://transport.cerbosys.com/shipping"
            target="_blank" rel="noopener noreferrer">
                <img
                src={transpotation3}
                alt="djhfj"
                className="md:h-[24rem] mx-auto"
              /></a> 
            </div>
          </div>
          <div className="md:w-[50%] w-[100%]">
            <div className="shadow mx-auto  flex justify-center items-center py-2 md:h-[24rem]">
             <a href="https://transport.cerbosys.com/transportation"
              target="_blank" rel="noopener noreferrer">
              <img
                src={Transportation}
                alt="djhfj"
                className="md:h-[24rem] mx-auto"
              /></a>
            </div>
          </div>
          <div className="md:w-[50%] w-[100%]">
            <div className="shadow mx-auto  flex justify-center items-center py-2 md:h-[24rem]">
           <a href="https://transport.cerbosys.com/car-service-world" 
           target="_blank" rel="noopener noreferrer">
              <img src={car} alt="djhfj" className="md:h-[24rem] mx-auto" />
              </a> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabstemplate;
