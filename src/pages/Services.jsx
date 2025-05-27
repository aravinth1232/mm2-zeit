import React, { useEffect } from 'react'
import Gallery from '../components/Gallery'
import Offer from '../components/Offer'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

const Services = () => {


  useEffect(() => {
    window.scrollTo(0, 0);
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };
  }, []);



  return (

    <main className='bg-sitewhite relative max-w-screen-2xl mx-auto'>
    
    <Hero 
    title="Shaping Experiences Through Every Service We Offer."
    description="At Motomod, we specialize in transforming ordinary bikes into extraordinary machines. From custom builds and performance upgrades to paint jobs and restorations, our services are designed to bring your dream ride to life — one detail at a time."
    />
    
  
    <div className='py-4'>
    <Gallery />

    </div>
   

        
       {/* <Footer />
     */}
   
    </main>
  )
}

export default Services
