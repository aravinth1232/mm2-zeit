
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { UndoDot } from 'lucide-react';
import { Wrench,CircleGauge,Hammer, History, Brush,  Package } from 'lucide-react';
import { useNavigate } from 'react-router-dom';



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

  

const Offer = () => {
  const sectionRef = useRef(null);
  const { ref: inViewRef, inView } = useInView({ threshold: 0.5 });
  const controls = useAnimation();
  const titleControls = useAnimation();
  const itemsControls = useAnimation();

  const navigate = useNavigate();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, transition: { duration: 1.5, ease: 'easeOut' } });
      titleControls.start({ x: 0, opacity: 1, transition: { duration: 1, ease: 'easeOut' } });
      itemsControls.start((i) => ({
        x: 0,
        opacity: 1,
        transition: { duration: 1, delay: i * 0.2, ease: 'easeOut' },
      }));
    } else {
      controls.start({ opacity: 0 });
      titleControls.start({ x: 50, opacity: 0 });
      itemsControls.start((i) => ({
        x: 50,
        opacity: 0,
      }));
    }
  }, [inView, controls, titleControls, itemsControls]);

  return (
    <motion.div
      ref={(node) => {
        sectionRef.current = node;
        inViewRef(node);
      }}
      initial={{ opacity: 0 }}
      animate={controls}
      className=" relative flex flex-col lg:flex-row gap-10 lg:gap-0 lg:items-center justify-between font-primary   px-4 py-8  overflow-hidden "
    >
      {/* SVG Mask */}
      {/* <img
        src={svgImage}
        alt="SVG Mask"
        className="absolute top left-2 lg:left-[80%] w-1/4 h-auto opacity-40 z-0"
        style={{ transform: 'translate(-10%, -10%)' }}
      /> */}
      <motion.h2
        ref={sectionRef}
        initial={{ x: 50, opacity: 0 }}
        animate={titleControls}
        className="justify-start text-xl lg:text-2xl text-tertiary-900  font-bold   relative z-10"
      >
        What We Do ?
      </motion.h2>
      <div className=" grid grid-cols-2 md:grid-cols-3 gap-8  md:gap-8 relative z-10 one">
        {content.map(({title,path,description,icon:Icon}, index) => (
          <motion.div
            key={index}
            custom={index}
            initial={{ x: 50, opacity: 0 }}
            animate={itemsControls}
            whileHover={
                {scale : 1.1}
            }
              style={{
                perspective: 1000, // Add perspective for 3D effect
                transformStyle: 'preserve-3d', // Preserve child transformations
              }}
            className="bg-transparent backdrop-blur-2xl flex flex-col justify-start items-start gap-5 two shadow-xl rounded-lg px-4 py-6 cursor-pointer relative  "
            onClick={()=>{
              console.log("Ccc")
              navigate(`/services/${path}`)
            }}
          >

          <Icon
          strokeWidth={2}
          className='w-5 h-5 z-30 absolute top-0 right-0 translate-x-1
          -translate-y-1 text-tertiary-700' />

            <div className=' flex flex-col items-start gap-3 '>
            {/* <Icon className='text-tertiary-900' /> */}
            <h3 className="text-xs lg:text-lg font-semibold font-karla text-tertiary-700 ">{title}</h3>
            </div>
            {/* <p className="text-xs lg:text-base font-inconsolata text-tertiary-300 ">{description}</p> */}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Offer;