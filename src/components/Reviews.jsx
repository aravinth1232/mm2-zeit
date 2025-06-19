import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Star, StarHalf } from 'lucide-react';
import img1 from "../assets/reviews/review1.webp"

const Reviews = () => {

    
    


    const reviews = [
    {
    title : "Karthik R",
    decsription : "Absolutely blown away by the quality and attention to detail! The team exceeded my expectations and delivered my project on time. Highly recommended!",
    image : img1,
    place : "Chennai"      
    },
    {
    title : "Arun Prakash",
    decsription : "I've tried a few services before, but this one stands out. Excellent craftsmanship and great communication throughout the process.",
    image : img1,
    place : "Bangalore"      
    },
    {
    title : "Sneha M",
    decsription : "Professional, friendly, and truly passionate about their work. From the first consultation to the final delivery, the experience was smooth and stress-free.",
    image : img1,
    place : "Coimbatore"      
    },
   
    ]

    const stars =[

        {icon : Star},
        {icon : Star},
        {icon : Star},
        {icon : Star},
        {icon : StarHalf},

    ]


    const reviewButtons = [
        {
            icon : ArrowLeft
        },
        {
            icon : ArrowRight
        }
    ]

    
    const [current, setCurrent] = useState(0);
    const total = reviews.length  ;

    const prev =()=>{
        setCurrent((current -1 ) % total);
    }
    const next =()=>{
        setCurrent((current +1  ) % total);
    }


  return (
    <div className='relative flex flex-col   font-primary gap-5  px-4 py-8 lg:px-12 lg:py-4 overflow-hidden  '>
      {/* header */}
      <div className=' w-full  px-4 lg:py-6  flex flex-row justify-between items-center    gap-8  '>
      
      <h2 className="text-xl lg:text-2xl text-tertiary-900  font-bold   relative z-10"
      >
        What Our Clients Say 
      </h2>
      
      <div className='flex flex-row gap-4'>
       {
        reviewButtons.map(({icon:Icon},index)=>(
            <motion.button
            whileHover={{scale:1.1}}
            key={index}
            className='border-2 rounded-full p-1'
            onClick={index=== 0 ? prev : next }
            >
                <Icon 
                
                />                
            </motion.button>
        ))
       }

      </div>

      </div>

    
    {/* body */}    

    <div className="relative w-full max-w-3xl  mx-auto overflow-hidden rounded-2xl shadow-lg ">
    
    <div
    className={`flex  transition-transform duration-500 ease-in-out
        `} 
    style={{ transform: `translateX(-${current * 100}%)` }}    
        >
        {
        reviews.map((review,index)=>(
            <div
            key={index}
            className='w-full flex-shrink-0 py-4 px-4 flex flex-col gap-9 justify-between  rounded-lg '
            
            >
                <div className='flex flex-col gap-5'>

                    <div className='self-end flex flex-row'>
                    {
                        stars.map(({icon:Icon},index)=>(
                        <Icon 
                        className='w-5 h-5 text-tertiary-600'
                        key={index}
                        />

                        ))
                    }
                    </div>
                    <h1 className="text-sm lg:text-base  text-tertiary-800  " >
                        {review.decsription}
                    </h1>
                </div>

                <div className='flex flex-row gap-4 justify-start'>
                   
                    <img
                    className='w-16 rounded-lg object-contain'
                    src={review.image} alt={review.title} />

                    <div>
                        <h1 
                        className="text-sm font-bold lg:text-base  text-tertiary-900  "
                        >{""}{review.title}</h1>
                        <p
                        className="text-sm lg:text-base  text-tertiary-500  "
                        >{review.place}</p>
                    </div>

                </div>

            </div>


        ))

        }
    </div>
    
    </div>


    </div>
  )
}

export default Reviews
