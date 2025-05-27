import React, { useEffect } from 'react'
import Gallery from '../components/Gallery'
import Offer from '../components/Offer'
import Footer from '../components/Footer'

const Services = () => {


  useEffect(() => {
    window.scrollTo(0, 0);
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };
  }, []);



  return (

    <main className='bg-sitewhite relative max-w-screen-2xl mx-auto'>
    
    {/* <div className='py-4'>
    <Offer />

    </div> */}
    
  
    <div className='py-4'>
    <Gallery />

    </div>
   

        
       <Footer />
    
   
    </main>
  )
}

export default Services
