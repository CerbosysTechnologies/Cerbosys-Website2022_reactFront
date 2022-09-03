import React from 'react'
import mobileicon from '../../assets/services/mobile_app_development.svg'
import webdevelopmenticon from '../../assets/services/web_development.svg'
import staffaugmentationicon from '../../assets/services/staff_augmentation.svg';
import brandpackingicon from '../../assets/services/branding_packaging.svg';
import digitalmarketingicon from '../../assets/services/digital_marketing.svg';
import leadrgenerationicon from '../../assets/services/lead_generation.svg';
import uxdevelopmenticon from '../../assets/services/ux_Development.svg';




const ServiceHomePage = () => {
  return (
    <div>
        {/* Header Part */}
        <div className="bg-Service mx-auto w-full flex flex-col flex-wrap text-center">
            {/* heading */}
            <div className=' justify-center items-center text-center'>
                <h1 className='font-heading text-lg md:text-3xl mt-4'>Our Best Services </h1>
                <h2 className='font-content text-gray-600 text-xs md:text-sm mb-3'>Services offered by us to grow your business</h2>

                 {/* Content */}
            <p className='text-justify align-baseline font-content text-lg w-3/4 m-auto mb-10'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, inventore illum? 
                Asperiores, consectetur? Placeat, nostrum? Tempore totam cumque deserunt nobis velit dicta 
                dignissimos iste a perferendis? Aut molestias rem tempore.

                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, inventore illum? 
                Asperiores, consectetur? Placeat, nostrum? Tempore totam cumque deserunt nobis velit dicta 
                dignissimos iste a perferendis? Aut molestias rem tempore.
            </p>

            <div className='mx-auto grid md:grid-cols-3 grid-cols-2 
            items-center justify-center text-center gap-8 w-3/4'>
                    {/* Mobile App Developemnt */}
                    <div className=''>
                        <img alt='Mobile Icon' src={mobileicon} className='w-[70px] h-[70px] mb-2'/>
                        <h1 className='font-subheading text-left text-xl w-1/2'>Mobile App Developements</h1>
                        <p className='font-content text-left text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum enim illo sit facilis </p>
                    </div>
                    <div>
                    <img alt='Web Icon' src={webdevelopmenticon} className='w-[70px] h-[70px] mb-2'/>
                        <h1 className='font-subheading text-left text-xl w-1/2'>Web Developement</h1>
                        <p className='font-content text-left text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum enim illo sit facilis </p>
                    </div>
                    <div>
                    <img alt='Digital Marketing Icon' src={digitalmarketingicon} className='w-[70px] h-[70px] mb-2'/>
                        <h1 className='font-subheading text-left text-xl w-1/2'>Digital Marketing</h1>
                        <p className='font-content text-left text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum enim illo sit facilis </p>
                    </div>
                    <div>
                    <img alt='Staff Augmentation Icon' src={staffaugmentationicon} className='w-[70px] h-[70px] mb-2'/>
                        <h1 className='font-subheading text-left text-xl w-1/2'>Staff Augmentation</h1>
                        <p className='font-content text-left text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum enim illo sit facilis </p>
                    </div>
                    <div>
                    <img alt='UI/UX Icon' src={uxdevelopmenticon} className='w-[70px] h-[70px] mb-2'/>
                        <h1 className='font-subheading text-left text-xl w-1/2'>UI/UX Development</h1>
                        <p className='font-content text-left text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum enim illo sit facilis </p>
                    </div>
                    <div>
                    <img alt='Branding And Packaging Icon' src={brandpackingicon} className='w-[70px] h-[70px] mb-2'/>
                        <h1 className='font-subheading text-left text-xl w-1/2'>Brand And Packaging</h1>
                        <p className='font-content text-left text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum enim illo sit facilis </p>
                    </div>
                    <div>
                    <img alt='Lead Generation Icon' src={leadrgenerationicon} className='w-[70px] h-[70px] mb-2'/>
                        <h1 className='font-subheading text-left text-xl w-1/2'>Lead Generation</h1>
                        <p className='font-content text-left text-sm'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum enim illo sit facilis 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nihil vitae labore dicta! Magni reiciendis placeat quod aut accusamus veritatis voluptatibus facere, soluta maiores sit aspernatur magnam. Illo, dolor rerum.    
                        </p>
                    </div>
                </div>
            </div>
            {/* Header Part Finish*/}
           


           {/* Service Part Begins */}         
               
         
           {/* Services Part Ends */}

        </div>
   
    </div>
  )
}

export default ServiceHomePage