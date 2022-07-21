import React from 'react'
import callicon from '../assets/footer/call_icon.svg';
import emailicon from '../assets/footer/email_icon.svg';
import fbcon from '../assets/footer/Facebook.svg';
import instagramicon from '../assets/footer/Instagram.svg';
import linkedinicon from '../assets/footer/Linkedin.svg';
import locationicon from '../assets/footer/Location_icon.svg';
import twittericon from '../assets/footer/Twittter.svg';
import whatsappicon from '../assets/footer/Whatsapp_icon.svg';
import youtubeicon from '../assets/footer/Youtube.svg';
import footerlogo from '../assets/footer/Logo_in_footer.svg';

const Footer = () => {
  return (
    <div>
        <div className='bg-[#24262A] w-full h-full mx-auto py-5 px-16 '>
        <div className='grid max-w-[1204px] md:grid-cols-3 gap-4'>
        {/* First Col */}
            <div>
                <img src={footerlogo} alt="Logo Footer" className='w-[150px] h-[150px]' />
                <h1 className='font-heading  text-sm md:text-lg text-white'>About Us</h1>
                <p className='font-content text-gray-400 md:text-sm text-xs'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur adipisci mollitia iste consectetur exercitationem voluptatibus neque deserunt! Vel, cumque amet! Voluptates iure expedita animi veritatis sunt soluta perspiciatis tempora illo!
                </p>
            </div>
       {/* First Col Ends */}
        
       {/* Main Div of all three columns */}
       <div className='lg:col-span-2 flex justify-between m-10 mt-16'>
        {/* Second Column */}
        <div>
        <h6 className='font-heading text-lg text-white uppercase'>Explore</h6>
        <ul className='text-gray-400 font-subheading text-xs grid grid-cols-2 pr-6'>
            <li className='col-start-1'>Home</li>
            <li className='col-start-1'>Company</li>
            <li className='col-start-1'>Services</li>
            <li className='col-start-1'>Industries</li>
            <li className='col-start-1'>Case Study</li>
            <li className='col-start-1'>Blog</li>
            <li className='col-start-2 row-start-1'>Team</li>
            <li className='col-start-2 row-start-2'>Contact Us</li>

        </ul>
    </div>
   
       {/* Second Column Ends */}

  {/* Third Column */}
 
    <div>
        <h6 className='font-heading text-lg text-white uppercase'>Services</h6>
        <ul className='text-gray-400 font-subheading text-xs pr-6'>
            <li className=''>Web Development</li>
            <li className=''>Staff Augmentation</li>
            <li className=''>Mobile Development</li>
            <li className=''>UI/UX Development</li>
            <li className=''>Digital Marketing</li>
            <li className=''>Digital Marketing</li>
            <li className=''>Brand And Packiging</li>
            <li className=''>Lead Generation</li>

        </ul>
    </div>
    {/* Third Column Ends*/}

    {/* Fourth Column */}

 <div>
        <h6 className='font-heading text-lg text-white uppercase grid grid-flow-row'>Contact Us</h6>
        <div className=''>
            <img src={locationicon} alt="Location Icon" className='mr-3'></img>
            <span className='font-subheading text-sm text-white'>15-16, Lakshya Vihar,Vaibhav Nagar, Indore (MP) 452016</span>
        </div>

        <div className=''>
            <img src={callicon} alt="Call Icon" className='mr-3'></img>
            <span className='font-subheading text-sm text-white'>07314993444</span>
        </div>

        <div className=''>
            <img src={whatsappicon} alt="What'sApp Icon" className='mr-3'></img>
            <span className='font-subheading text-sm text-white'>07314993444</span>
        </div>

        <div className=''>
            <img src={emailicon} alt="Email Icon" className='mr-3'></img>
            <span className='font-subheading text-sm text-white'>info@cerbosys.com</span>
        </div>

    </div>


    {/* Fourth Column Ends */}
       </div> {/* Main div of inside */}
    

        </div>  {/* Third Div Ends */}

    <div>
        <h1 className='font-heading text-white text-sm md:text-lg'>Industries</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus commodi ut dolore nostrum amet quam officia! Voluptatem velit cupiditate assumenda, ut nihil dignissimos ullam rem, inventore aperiam expedita cum.
        </p>
    </div>

        </div>
    </div>
  )
}

export default Footer