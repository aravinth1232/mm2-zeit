import React, { useEffect } from 'react'
import { Wrench,CircleGauge,Hammer, History, Brush,  Package } from 'lucide-react';
import { useParams } from 'react-router-dom';
import {offerData} from "../constants/constants"

const OfferDetail = () => {

useEffect(() => {
    window.scrollTo(0, 0);
    window.onbeforeunload = () => {
        window.scrollTo(0, 0);
    };
    }, []);


const { name } = useParams();
const data = offerData.find(item => item.slug === name);

  if (!data) return <p className="text-center">Page not Found</p>;

  return (
    <div className="px-4 py-8 flex flex-col gap-10  relative">
        
        {/* page title */}
        <div className=' flex flex-row gap-4  justify-center items-center px-4'>
            <h1
            className=" font-semibold  text-center font-primary text-base lg:text-xl  text-tertiary-700 "
            >{data.name}</h1>
            <data.icon className='w-5 h-5 lg:w-8 lg:h-8 text-tertiary-700' />
        </div>

        {/* details */}

         <div className="grid grid-cols-1 gap-6 lg:gap-8">
        {data.images.map((img, index) => (
        
        <div 
        key={index}
        className={` flex  items-center gap-3 lg:gap-0
        ${index%2 === 0 ? "flex-col lg:flex-row-reverse"  : " flex-col lg:flex-row"  }
         `}>
        
        {/* image */}
        <div className={`lg:w-1/2 group  rounded-lg flex  justify-center overflow-hidden p-2 cursor-pointer
                
          `}>
        <img  src={img.src} alt={data.name} 
        className=" lg:h-72   lg:object-contain rounded-lg group-hover:scale-125 transform origin-center ease-in-out transition-all duration-300  " />
        </div>

        {/* text */}
         <div className="lg:w-1/2 px-4 py-4 bg-tertiary-50 shadow-sm rounded-lg flex flex-col gap-8 lg:gap-6 ">
        <h1 className="  text-justify font-primary text-sm lg:text-xl  text-tertiary-500 ">
          {img.description}
        </h1>
      </div>
        </div>
        
          
        ))}
      </div>

      
      


    </div>
  )
}

export default OfferDetail
