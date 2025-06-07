import { motion, MotionConfig } from 'framer-motion'
import React from 'react'


const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
        opacity : 0,
//  rotate: ["0deg", "0deg", "-45deg"],
    //   rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
    //   left: "50%",
    },
    closed: {
        opacity : 1,
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
    //   left: "calc(50% + 10px)",
    },
  },
};







const MenuButton = ({
    isOpen,
    onClick,

}) => {
  return (

    <MotionConfig
    transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}

    >
         <motion.button
         initial={false}
         animate={isOpen ? "open" : "closed"}
          className="relative h-10 border w-10  rounded-3xl bg-white/0 transition-colors hover:bg-white/20"
    onClick={onClick}
    >

        <motion.span
          variants={VARIANTS.top}
          className="absolute h-[2px]  bg-siteblack "
          style={{ y: "-50%", 
            left: "50%", 
            x: "-50%", 
            top: "35%",
            width: "16px"
         }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-[2px]  bg-siteblack"
          style={{ left: "50%",
             x: "-50%", 
             top: "50%", 
             y: "-50%",
            width: "16px"
            }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-[2px]  bg-siteblack"
          style={{
            width: "16px",
            x: "-50%",
            y: "50%",
            bottom: "35%",
            left: "50%",
          }}
        />

    </motion.button>


    </MotionConfig>
   
  )
}

export default MenuButton
