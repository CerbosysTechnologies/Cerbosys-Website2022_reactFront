import React from 'react'
import mobileicon from '../../assets/services/mobile_app_development.svg'
import webdevelopmenticon from '../../assets/services/web_development.svg'
import staffaugmentationicon from '../../assets/services/staff_augmentation.svg';
import brandpackingicon from '../../assets/services/branding_packaging.svg';
import digitalmarketingicon from '../../assets/services/digital_marketing.svg';
import leadrgenerationicon from '../../assets/services/lead_generation.svg';
import uxdevelopmenticon from '../../assets/services/ux_development.svg';




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
            Our passion is helping companies of all sizes build their brand and business by making them attractive to the consumers by creating innovative solutions on a wide range of services, which help in branding and engaging with the clients.

            </p>

            <div className='mx-auto grid md:grid-cols-3 grid-cols-2 
            items-center justify-center text-center gap-8 w-3/4'>
                    {/* Mobile App Developemnt */}
                    <div className=''>
                        <img alt='Mobile Icon' src={mobileicon} className='w-[70px] h-[70px] mb-2'/>
                        <h1 className='font-subheading text-left text-xl w-1/2'>Mobile App Developements</h1>
                        <p className='font-content text-justify text-sm md:mb-0 mb-2'>
                        Smartphones are a crucial part of our lives, so it's important to have an app that'll make your life easier. If you need help with app development, we have the experience and knowledge needed to create something functional and appealing for any industry and budget.    
                        <br></br>
                        <br></br>
                        </p>
                    </div>
                    <div>
                    <img alt='Web Icon' src={webdevelopmenticon} className='w-[70px] h-[70px] mb-2'/>
                        <h1 className='font-subheading text-left text-xl w-1/2'>Web Developement</h1>
                        <p className='font-content text-justify text-sm'>
                        Website development is the process of creating a new website or updating it to a newer version. Whether you're looking for a new website or want to improve the current one, we'll make it happen. We are experts in designing and developing websites that are appealing to both users and search engine crawlers alike. 
                        </p>
                    </div>
                    <div>
                    <img alt='Digital Marketing Icon' src={digitalmarketingicon} className='w-[70px] h-[70px] mb-2'/>
                        <h1 className='font-subheading text-left text-xl w-1/2'>Digital Marketing</h1>
                        <p className='font-content text-justify text-sm'>
                        As a software development and marketing agency, we know what it takes to get real results online. These include building an effective digital marketing strategy and executing a purposeful, data-driven campaign. From start to finish, our team will run your campaigns from A-Z and get you real RESULTS!
                        </p>
                    </div>
                    <div>
                    <img alt='Staff Augmentation Icon' src={staffaugmentationicon} className='w-[70px] h-[70px] mb-2'/>
                        <h1 className='font-subheading text-left text-xl w-1/2'>Staff Augmentation</h1>
                        <p className='font-content text-justify text-sm md:mb-0 mb-16'>
                        Since one of the primary elements of staff augmentation is talent, Cerbosys acts as a link to augment the capacity of your organization and we can help your company to build an entirely effective team that can add good value to your brand and projects.
                        </p>
                    </div>
                    <div>
                    <img alt='UI/UX Icon' src={uxdevelopmenticon} className='w-[70px] h-[70px] mb-2'/>
                        <h1 className='font-subheading text-left text-xl w-1/2'>UI/UX Development</h1>
                        <p className='font-content text-justify text-sm md:mb-0 mb-12'>
                        We have a team that is especially concerned about the entire process of product design. Apart from designing and useability, we also provide a meaningful and enjoyable experience for the users. Since a better user experience can increase your sales effectively.
                        </p>
                    </div>
                    <div>
                    <img alt='Branding And Packaging Icon' src={brandpackingicon} className='w-[70px] h-[70px] mb-2'/>
                        <h1 className='font-subheading text-left text-xl w-1/2'>Brand And Packaging</h1>
                        <p className='font-content text-justify text-sm'>
                        We serve your product from branding to packaging, that is, creating a unique identity of your product by designing the brand logo graphics and designing its packaging to make it stand different from other products. We effectively serve our clients and help their brand to draw customer attention.
                        </p>
                    </div>
                    <div>
                    <img alt='Lead Generation Icon' src={leadrgenerationicon} className='w-[70px] h-[70px] mb-2'/>
                        <h1 className='font-subheading text-left text-xl w-1/2'>Lead Generation</h1>
                        <p className='font-content text-justify text-sm mb-16'>
                        Getting high-quality leads and clients through Search Engine Optimization (SEO) and Social Media Marketing (SMM) - Drive higher engagement rates for your brand on social media platforms by having a social media marketing campaign tailored to your needs.
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