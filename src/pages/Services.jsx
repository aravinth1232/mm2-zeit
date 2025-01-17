import React from 'react'
import Gallery from '../components/Gallery'
import Offer from '../components/Offer'
import Footer from '../components/Footer'

const Services = () => {
  return (
    <main className='bg-tertiary-100 relative '>
    
    <div className='py-4'>
    <Offer />

    </div>
    
  
    <div className='py-4'>
    <Gallery />

    </div>
   

        
       <Footer />
    
   
    </main>
  )
}

export default Services
