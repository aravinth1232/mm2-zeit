import React from 'react'

const Hero = ({title,description}) => {
  return (
    <div className=' px-4 pt-10 pb-4 flex flex-col font-primary w-full gap-8 h-auto  items-center' >

      {/* text */}
      <div className=' flex flex-col gap-4 justify-center items-center w-full '>
        <h1 className='bg-transparent text-center backdrop-blur-sm text-tertiary-800 text-3xl lg:text-3xl font-bold  leading-tight '>
         {/* Behind Every Solution, a Commitment to You. */}
         {title}
        </h1>
        <p className='text-center bg-transparent backdrop-blur-sm text-tertiary-600 text-sm lg:text-base font-semibold leading-relaxed'>
         {/* At Motomod, we specialize in transforming ordinary bikes into extraordinary machines. From custom builds and performance upgrades to paint jobs and restorations, our services are designed to bring your dream ride to life — one detail at a time. */}
         {description}
        </p>
        
      </div>

      
    </div>
  )
}

export default Hero
