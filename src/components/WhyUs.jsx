
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const content = [
  {
    title: 'High-Quality Craftsmanship',
    description:
      'We pride ourselves on delivering top-notch craftsmanship with attention to detail. Our experienced technicians ensure each bike is remodeled with precision, using the best materials and techniques available.',
  },
  {
    title: 'Personalized Designs',
    description:
      'Your bike, your style! We work closely with you to create a custom look that matches your personality and preferences. From color schemes to unique modifications, every detail is tailored to your vision.',
  },
  {
    title: 'Experienced Team',
    description:
      "With over 2+ years of experience in bike remodeling, our team knows how to transform any bike, whether it's vintage, modern, or custom.",
  },
];

const WhyUs = () => {
  const sectionRef = useRef(null);
  const { ref: inViewRef, inView } = useInView({ threshold: 0.5 });
  const controls = useAnimation();
  const titleControls = useAnimation();
  const itemsControls = useAnimation();

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
      className="relative font-primary bg-white  p-4 lg:p-12 text-white  overflow-hidden"
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
        className="text-lg lg:text-2xl text-tertiary-900  font-bold  lg:mb-3 relative z-10"
      >
        Why Motomod?
      </motion.h2>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-7 relative z-10 one">
        {content.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            initial={{ x: 50, opacity: 0 }}
            animate={itemsControls}
            whileHover={{
                scale: 1.1, // Slight zoom effect
                rotateX: 10, // Tilt upwards
                rotateY: 10,  // Tilt sideways
                transition: { duration: 0.2, ease: 'easeOut' },
              }}
              style={{
                perspective: 400, // Add perspective for 3D effect
                transformStyle: 'preserve-3d', // Preserve child transformations
              }}
            className="bg-transparent backdrop-blur-md flex flex-col justify-start items-start gap-5 two shadow-lg rounded-lg px-4 py-6 cursor-pointer"
          >
            <h3 className="text-base lg:text-lg font-semibold font-karla text-tertiary-800 ">{item.title}</h3>
            <p className="text-sm lg:text-base font-inconsolata text-tertiary-600 ">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default WhyUs;