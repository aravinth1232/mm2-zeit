import React, { useEffect, useRef } from 'react'
// import homeimg1 from "../assets/homeimg1.png";
// import homeimg1 from "../assets/homeimg2.jpeg";

// import homeimg1 from "../assets/one.png";
import homeimg1 from "../assets/hero12.svg";
import homeimg2 from "../assets/onenew.png";
import homeimg3 from "../assets/onemob.png";
import image1 from "../assets/1.png"
import image2 from "../assets/2.png"
import image3 from "../assets/3.png"
import Lenis from 'lenis';
import { useScroll} from "framer-motion";




import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronsRight } from 'lucide-react';
import WhyUs from '../components/WhyUs';
import Stats from '../components/Stats';
import Footer from '../components/Footer';
import ParallaxSection from '../components/ParallaxSection';
import Carousel from '../components/Carousel';
import CascadeSlider from '../components/CascadeSlider';
import Offer from '../components/Offer';
import Offer1 from '../components/Offer1';
import Reviews from '../components/Reviews';


const images = [
  image1,
  image2,
  image3,
];

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };
  }, []);


  
  const container = useRef();
  // const { scrollYProgress } = useScroll({
  //   target: container,
  //   offset: ["start start", "end end"]
  // }) 

  // useEffect( () => {
    

  //   const lenis = new Lenis({
  //     duration: 1.2, // Smooth scroll duration
  //     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
  //     smooth: true, // Enable smooth scroll
  //   });

  //   function raf(time) {
  //     lenis.raf(time)
  //     requestAnimationFrame(raf)
  //   }

  //   requestAnimationFrame(raf);

  //   return () => {
  //     lenis.destroy();
  //   };
  // }, [])



const border = "rounded-[50px] "

  return (
     <main      
     className='max-w-screen-2xl mx-auto bg-sitewhite   font-primary'>

      {/* home page */}
      
      <div className='px-4 py-8 flex flex-col lg:flex-row w-full gap-5 h-auto  items-center'>
      {/* Text Section */}
      <div className='z-40 flex flex-col gap-4 text-center lg:text-left w-full lg:w-1/2'>
        <motion.h1 layout className='bg-transparent backdrop-blur-sm text-tertiary-800 text-3xl lg:text-5xl font-bold uppercase leading-tight'>
          Customization of Bikes as You Like
        </motion.h1>
        <p className='bg-transparent backdrop-blur-sm text-tertiary-400 text-sm lg:text-base font-bold leading-relaxed'>
          Bring your bike to life with our expert touch. From design tweaks to full transformations, we make every ride an experience to remember!
        </p>
        <div className="flex justify-center lg:justify-start">
          <Link to="/services">
           <motion.button 
              whileTap={{scale:0.8}}
              aria-label="Modify your bike now"
              className={`z-20  flex  px-4 py-2 bg-gradient2 relative overflow-hidden group shadow-sm rounded-[50px]`}
              >
              
              <div className='px-2 py-1 flex justify-center  items-center gap-2 z-10 text-white'>
              <h1 
              className='text-sitewhite  '
              >Modify now</h1>
              
              <motion.div
              className="relative overflow-hidden flex   "
              >
              <motion.span 
             
              className='  absolute   '
              style={{
                y: "0%",
                x: "-100%"
                
              }}  
              transition={{ type: "spring", stiffness: 300 }}
             initial={{x:0}}
             animate ={{x:0}}

              >
                <ChevronsRight className='transition-all  group-hover:translate-x-full duration-300  ' />
              </motion.span>
               <motion.span 
             
              className='   '
              style={{
                y: "0%",
                x: "0%",
                
                
              }}  
             initial={{x:0}}
             animate ={{x:"-100%"}}
             transition={{ type: "spring", stiffness: 300 }}

              >
                <ChevronsRight className='transition-all  group-hover:translate-x-full duration-500  ' />
              </motion.span>

             
              </motion.div>
               
              </div>    

              
            </motion.button>
          </Link>
        </div>
      </div>
      
      {/* Image Section */}
      <div className=' w-full lg:w-1/2 flex justify-center lg:justify-end'>
        <div className='relative w-full max-w-screen-md lg:max-w-screen-2xl h-auto '>
          <motion.img 
            className='w-full h-auto object-cover transition-opacity duration-300 ease-linear'
            loading='lazy'
            src={homeimg1} 
            alt="Bike Customization"
          />
        </div>
      </div>
      </div>

    
           



      <Stats />
      <div className='py-4'>
      <WhyUs />
      </div>

      
      
      <div className='py-4'>
        <Offer1 />
      </div>


        {/* <div className='py-4'>
            <Carousel />
              </div> */}

    {/* <div 
    
    // className="container mx-auto"
    >
      <CascadeSlider  />
    </div> */}


    <div className='pb-4'>
      <Reviews />
    </div>
    
      
     


       {/* <Footer /> */}
    


    


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


// <motion.button 
//               aria-label="Modify your bike now"
//               className={`z-20 flex  px-4 py-2  relative overflow-hidden group shadow-sm rounded-[50px]`}
//               >
              
//               <div className='px-2 py-1 flex   items-center gap relative z-10 text-white'>
//               <h1 
//               className=' '
//               >Modify now</h1>
//                <ChevronsRight className='transition-all duration-200 ' />
//               </div>    

//               <span className=' w-full h-full block absolute inset-0 rounded-[50px] bg-gradient2 scale-90 group-hover:scale-125 transition-transform duration-700 ease-in-out ' ></span>
//             </motion.button>