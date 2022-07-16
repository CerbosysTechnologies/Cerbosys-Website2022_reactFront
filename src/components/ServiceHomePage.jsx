import React from 'react'
import mobileicon from '../assets/services/mobile_app_development.svg'

const ServiceHomePage = () => {
  return (
    <div>
        {/* Header Part */}
        <div className="bg-slate-500 h-screen mx-auto w-full flex flex-col flex-wrap">
            {/* heading */}
            <div className=' justify-center items-center text-center'>
                <span className='font-heading md:text-lg text-xl mt-12'>Our Best Services </span>
                <h6 className='font-content md:text-sm text-xs '>Services offered by us to grow your business</h6>

                 {/* Content */}
            <p className='font-content md:text-lg my-2 mx-32 text-sm'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, inventore illum? 
                Asperiores, consectetur? Placeat, nostrum? Tempore totam cumque deserunt nobis velit dicta 
                dignissimos iste a perferendis? Aut molestias rem tempore.
            </p>
            </div>
            {/* Header Part Finish*/}
           


           {/* Service Part Begins */}
           <div>
                <div className='mx-auto grid md:grid-cols-3 grid-cols-2 items-center justify-center text-center gap-8'>
                    {/* Mobile App Developemnt */}
                    <div>
                        <img alt='Mobile Icon' src={mobileicon}/>
                    </div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                </div>
           </div>
           {/* Services Part Ends */}

        </div>
    </div>
  )
}

export default ServiceHomePage