import React, { useEffect } from 'react'
// import homeimg1 from "../assets/homeimg1.png";
// import homeimg1 from "../assets/homeimg2.jpeg";

import homeimg1 from "../assets/one.png";
import homeimg2 from "../assets/onenew.png";
import homeimg3 from "../assets/onemob.png";
import image1 from "../assets/1.png"
import image2 from "../assets/2.png"
import image3 from "../assets/3.png"




import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronsRight } from 'lucide-react';
import WhyUs from '../components/WhyUs';
import Stats from '../components/Stats';
import Footer from '../components/Footer';
import ParallaxSection from '../components/ParallaxSection';
import Carousel from '../components/Carousel';


const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };
  }, []);


const border = "rounded-[50px] "

  return (
     <main className='max-w-screen-2xl mx-auto overscroll-none bg-gradient h-svh lg:h-screen  font-primary   '>

      {/* home page above lg  */}
      <div 
      className=' px-4 hidden h-screen relative lg:flex flex-row w-full    gap-5 py-4 '
      >

      
      <div className=' absolute top-[20%]   left-10  z-40 h-auto  flex flex-col gap-6 '>
        <h1 className=' bg-transparent backdrop-blur-sm  lg:text-tertiary-800  lg:text-5xl font-bold uppercase leading-[9rem] w-3/4 '>
         Customization of Bikes as you  Like</h1>
        <p className=' bg-transparent backdrop-blur-sm  lg:text-tertiary-400  lg:text-base font-bold  leading-[9rem] w-3/4 '>
        Bring your bike to life with our expert touch. From design tweaks to full transformations, we make every ride an experience to remember! 
        </p>

        <Link 
        
        to="/services">
        <motion.button 
    aria-label="Modify your bike now"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className={`z-20 text-sm lg:text-lg font-bold font-primary bg-gradient2 px-4 py-2 ${border} text-tertiary-100 flex flex-row items-center gap-1 group transition-all duration-200 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-primary`}>
    <h1>Modify now</h1> 
    <ChevronsRight className=' transition-all duration-200' />
</motion.button>
        </Link>
      </div>

    <div className=' z-20 flex-1  flex justify-end cursor-pointer'>
      <div className=' relative w-full  lg:w-[90vw] max-w-screen-2xl h-auto overflow-hidden group '>
        
        <motion.img
        //  whileHover={{ scale: 1.1 }}
        //  whileHover={{ y: -10 }}
         className=" absolute inset-0 w-full h-full  lg:object-cover transition-opacity duration-300 block lg:group-hover:hidden ease-linear "
        loading='lazy'
        
        src={homeimg1} alt="homeimg" />
        
        <motion.img
        // whileHover={{ y: -10 }}
        //  whileHover={{ scale: 1.1 }}
         className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 hidden lg:group-hover:block ease-linear "
        loading='lazy'
        src={homeimg2} alt="homeimg" />



        
      
      </div>

    </div>  


      </div>
      

    {/* hoem page below lg  */}
      <div 
      className=' lg:hidden  flex  flex-col w-full h-full    gap-5 py-4  '
      >
     <div className='px-4  flex flex-col gap-6  '>
        <h1 className='  text-tertiary-800  text-3xl font-bold uppercase leading-[3rem] '>
         Customization of Bikes as you  Like</h1>
        <Link 
        className=' w-fit'
                to="/services">
        <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={` z-20 text-sm lg:text-lg font-bold font-primary bg-gradient2  px-4 py-2 ${border} text-tertiary-100 `}>
          Modify now
        </motion.button>
        </Link>
      </div>

      <div className='flex-1  w-full  h-auto overflow-hidden  '>
        
        <motion.img
        //  whileHover={{ scale: 1.1 }}
        //  whileHover={{ y: -10 }}
         className="   w-full h-full  object-cover transition-opacity duration-300 block lg:group-hover:hidden ease-linear "
        loading='lazy'
        
        src={homeimg3} alt="homeimg" />
        </div>



      </div>
      



      <Stats />
      <WhyUs />

        <div className='py-4'>
            <Carousel />
              </div>


       <Footer />
    


    


     </main>
  )
}

export default Home










// <div className="h-screen overflow-x-hidden">
// <ParallaxSection
//   bgImage={image1}
//   text="Welcome to Parallax World"
// />
// <ParallaxSection
//   bgImage={image2}
//   text="Explore the Beauty"
// />
// <ParallaxSection
//   bgImage={image3}
//   text="Endless Possibilities"
// />

// </div>