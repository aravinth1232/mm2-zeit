import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
// import { div } from 'framer-motion/client'
import { BookOpenCheck, ClockAlert, Waypoints } from 'lucide-react'
import { symbol } from "framer-motion/client";
import { FaInstagram } from "react-icons/fa6";

const Stats = () => {


    const stats = [
        {value: "2",symbol: "+", description: "Years in Field", icon: ClockAlert},
        {value: "20",symbol: "+",  description: "Projects Done", icon: Waypoints},
        {value: "36",symbol: "k", description: "Followings", icon: FaInstagram},
       
    ]
    
    const { ref, inView } = useInView({ threshold: 0.5 });
    const [counts, setCounts] = useState(stats.map(() => 0));
    const timerRefs = useRef([]);
  
    useEffect(() => {
      if (inView) {
        stats.forEach((stat, index) => {
          const duration = 1000; // Animation duration in milliseconds
          const stepTime = Math.abs(Math.floor(duration / stat.value));
          let current = 0;
  
          timerRefs.current[index] = setInterval(() => {
            current += 1;
            if (current >= stat.value) {
              clearInterval(timerRefs.current[index]);
              current = stat.value;
            }
            setCounts((prev) => {
              const newCounts = [...prev];
              newCounts[index] = current;
              return newCounts;
            });
          }, stepTime);
        });
      } else {
        // Reset counts to 0 when the section is not in view
        setCounts(stats.map(() => 0));
      }
  
      return () => {
        timerRefs.current.forEach((timer) => clearInterval(timer));
      };
    }, [inView]);


  return (
    <>
    <section 
    ref={ref}
    className='flex flex-col gap-6  bg-sitegrey2 px-4 py-6 lg:px-12 lg:py-12 font-primary
    
    '>

        {/* <h1   className="text-2xl text-tertiary-700  font-bold "
        >What We've Accomplished</h1> */}

        <div className=' grid grid-cols-3  place-items-start lg:place-items-center gap-3 lg:gap-4 '>
        {
        stats.map(({value,symbol,description,icon:Icon},index )=>(
        
        <div
        key={index}
        className='flex flex-row gap-2 lg:gap-3  '>

        <div>
            <Icon className='w-7 h-7 lg:w-10 lg:h-10 text-tertiary-700' />

        </div>
        <div className='flex flex-col gap-1 lg:gap-1  '>
        {/* <h1 className='text-xl lg:text-4xl font-semibold text-tertiary-900'> {`${value}${symbol}`}</h1> */}
            <h1 className='text-xl lg:text-4xl font-semibold text-tertiary-900'> {`${counts[index]}${symbol}`}</h1>
            <p className='text-xs lg:text-lg font-medium text-tertiary-500'>{description}</p>
        </div>

        </div>
        ))

    }
        </div>
           
    </section>
    
    </>    

)
}

export default Stats
