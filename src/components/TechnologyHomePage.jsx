import React from 'react'

import androidicon from '../assets/technology/andriod_icon.svg'
import fluttericon from '../assets/technology/flutter.svg'
import iosicon from '../assets/technology/iOS.svg'
import mongodbicon from '../assets/technology/mongo_db.svg'
import mysqlicon from '../assets/technology/my_sql.svg'
import neticon from '../assets/technology/net.svg'
import nodejsicon from '../assets/technology/node_js.svg'
import reactjsicon from '../assets/technology/react_js.svg'
import wordpressicon from '../assets/technology/wordpress.svg'

const TechnologyHomePage = () => {
  return (
    <div>
         {/* Header Part */}
         <div className="bg-Service w-full h-screen flex flex-col flex-wrap">

            {/* Heading */}
            <div className='justify-center items-center text-center'>
            <h3 className='font-heading text-lg md:text-3xl mt-4'>Technologies </h3>
            {/* Heading Ends */}

            {/* Content */}
            <p className='font-content text-lg m-auto mb-10'>
            We work with 9 different technologies, including few
                of the lastest and most talked about stacks.
            </p>
            {/* Content Ends */}

            {/* Image Section */}

            <div className='mx-auto flex flex-row justify-self-end gap-8 md:w-3/4 md:mt-24 '>

            <div>
                <img src={androidicon} alt="Android Icon" className='w-[90px] h-[90px] mb-2'></img>
            </div>    
            
            <div>
                <img src={wordpressicon} alt="Android Icon" className='w-[90px] h-[90px] mb-2'></img>
            </div>  

            <div>
                <img src={fluttericon} alt="Android Icon" className='w-[90px] h-[90px] mb-2'></img>
            </div>  

            <div>
                <img src={nodejsicon} alt="Android Icon" className='w-[90px] h-[90px] mb-2'></img>
            </div>  

            <div>
                <img src={mongodbicon} alt="Android Icon" className='w-[90px] h-[90px] mb-2'></img>
            </div>  

            <div>
                <img src={reactjsicon} alt="Android Icon" className='w-[90px] h-[90px] mb-2'></img>
            </div>  

            <div>
                <img src={mysqlicon} alt="Android Icon" className='w-[90px] h-[90px] mb-2'></img>
            </div>  

            <div>
                <img src={iosicon} alt="Android Icon" className='w-[90px] h-[90px] mb-2'></img>
            </div>  

            <div>
                <img src={neticon} alt="Net Icon" className='w-[90px] h-[90px] mb-2'></img>
            </div>  


            </div>

            {/* Image Section Ends */}

            </div>
            
        </div>
    </div>
  )
}

export default TechnologyHomePage