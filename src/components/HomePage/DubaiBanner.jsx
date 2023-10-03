import React from 'react'
import Slide from 'react-reveal/Slide';
const DubaiBanner = () => {
  return (
  <div >
     <Slide top duration={4000}>
    <div className='mx-auto w-full md:h-[20rem] lg:block hidden h-40  px-4 bg-banner bg-cover bg-no-repeat  bg-center'>

    </div></Slide>
    <Slide top duration={4000}>
    <div className='mx-auto w-full md:h-[25rem] lg:hidden block  h-40 py-5 px-4 bg-banner bg-contain bg-no-repeat  bg-center'>

    </div>
</Slide>

  </div>
  )
}

export default DubaiBanner