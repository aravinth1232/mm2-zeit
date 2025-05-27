
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { UndoDot } from 'lucide-react';
import { Wrench,CircleGauge,Hammer, History, Brush,  Package } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import {changeToUrl} from "../constants/constants"
import image1 from "../assets/whatwedo/main.png"



const content = [
  {
    title: 'Custom Bike Builds',
    path: 'custom-bike-builds',
    description:
      "Transform your vision into reality with our custom bike build services. Whether you're looking for a complete overhaul or a unique design to match your personality, our expert team will work with you to create a bike that stands out.",
    icon: Wrench,
  },
  {
    title: 'Performance Upgrades',
    path: "performance-upgrades",
    description:
      'Take your bike to the next level with our performance upgrade services. From improved suspension to faster gearing, we ensure your bike delivers optimal performance on any terrain.',
      icon: CircleGauge,
  },
  {
    title: 'Restoration Services',
    path: "restoration-services",
    description:
      "Breathe new life into your classic or vintage bike with our restoration services. Our team specializes in restoring bikes to their former glory, preserving both style and functionality.",
    icon: History,
  },
  {
    title: 'Paint and Custom Finishes',
    description:
      "Make your bike truly one-of-a-kind with our custom paint and finishing services. From vibrant colors to intricate designs, we offer a range of options to suit your style.",
    icon: Brush,
  },
  {
    title: 'Bike Tuning and Servicing',
    description:
      "Keep your bike in top-notch condition with our comprehensive tuning and servicing options. We provide regular maintenance and adjustments to ensure your bike performs like new.",
      icon: Hammer,
  },
  {
    title: 'Accessory Installation',
    description:
      "Enhance your bike's functionality and appearance with our accessory installation services. From luggage racks to LED lighting, we help you customize your bike for your needs.",
    icon: Package,
  },
];

  

const Offer1 = () => {
  

  const navigate = useNavigate();

  

  return (
    <motion.div
      
      className=" relative flex flex-col lg:flex-row    font-primary   px-4 py-8 lg:p-12 overflow-hidden "
    >
      {/* SVG Mask */}
      {/* <img
        src={svgImage}
        alt="SVG Mask"
        className="absolute top left-2 lg:left-[80%] w-1/4 h-auto opacity-40 z-0"
        style={{ transform: 'translate(-10%, -10%)' }}
      /> */}
      <div className=' w-1/4 px-4 py-6 flex flex-col  gap-8  '>
      <motion.h2
        
        className="text-xl lg:text-2xl text-tertiary-900  font-bold   relative z-10"
      >
        What We Do ?
      </motion.h2>
        <p 
        className='text-sm lg:text-base  text-tertiary-600  '
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ex tenetur cupiditate adipisci sint, praesentium et aliquam itaque voluptatum quis!</p>

        {/* <img className='w-10  h-10 lg:w-40  lg:h-40  text-tertiary-800'
        src={image1} alt="" /> */}

       </div>
      <div className="w-3/4   grid grid-cols-2 md:grid-cols-2 gap-8  md:gap-8 relative z-10 one">
        {content.map(({title,path,description,icon:Icon}, index) => (
          <motion.div
            key={index}
            
            whileHover={
                {scale : 1.1}
            }
              style={{
                perspective: 1000, // Add perspective for 3D effect
                transformStyle: 'preserve-3d', // Preserve child transformations
              }}
            className="bg-transparent backdrop-blur-2xl flex flex-col justify-start items-start gap-5 two shadow-sm px-4 py-6 cursor-pointer relative  "
            
          >

          

            <div className=' flex flex-col items-start gap-4  '>
            <Icon 
            strokeWidth={3}
            className='text-tertiary-900' />
            <h3 className="text-base lg:text-lg font-semibold  text-tertiary-800 ">{title}</h3>
            </div>
            <p className="text-sm lg:text-base  text-tertiary-600  ">{description}</p>
            <Link
            className=' rounded-full px-4 py-1 border-2 shadow  text-siteblack'
            onClick={()=>{
              navigate(`/services/${changeToUrl(title)}`)
            }}
            >More Details</Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Offer1;