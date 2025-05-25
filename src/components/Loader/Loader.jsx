import React from 'react'
import './Loader.css'

import img from "../../assets/logo2.png"


const Loader = () => {
  return (
    
    
    <div className='h-screen flex justify-center items-center loader' >

        
        
        <img id="img" className='w-10 h-10 '
         src={img} alt="" srcset="" />
        
      
    </div>
  )
}

export default Loader