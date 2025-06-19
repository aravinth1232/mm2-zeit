import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Star, StarHalf } from 'lucide-react';
import img1 from "../assets/reviews/review1.webp"
import img2 from "../assets/reviews/review2.webp"
import img3 from "../assets/reviews/review3.webp"

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
    image : img2,
    place : "Bangalore"      
    },
    {
    title : "Sneha M",
    decsription : "Professional, friendly, and truly passionate about their work. From the first consultation to the final delivery, the experience was smooth and stress-free.",
    image : img3,
    place : "Coimbatore"      
    },
    {
    title : "Divya S",
    decsription : "From start to finish, the team maintained excellent communication. The end result was exactly what I envisioned. Couldn't be happier with the service.",
    image : img1,
    place : " Hyderabad"      
    },
    {
    title : "Rohan K",
    decsription : "Super impressed with the attention to detail and timely delivery. It's rare to find such dedication and craftsmanship these days.",
    image : img2,
    place : "Madurai"      
    },
    {
    title : "Meera N",
    decsription : "They turned my ideas into reality with complete precision. The process was smooth, professional, and the outcome was beyond expectations.",
    image : img3,
    place : "Trichy"      
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

    const groupSlides = (arr, groupSize) =>
  Array.from({ length: Math.ceil(arr.length / groupSize) }, (_, i) =>
    arr.slice(i * groupSize, i * groupSize + groupSize)
  );
    
    const grouped = groupSlides(reviews, 3);
    const [current, setCurrent] = useState(0);
    const total = grouped.length  ;

    const prev =()=>{
        setCurrent((current -1 +total ) % total);
    }
    const next =()=>{
        setCurrent((current +1  ) % total);
    }


  return (
    <div className='relative flex flex-col   font-primary gap-8  px-4 py-8 lg:px-12 lg:py-4 overflow-hidden  '>
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

    <div className="relative w-full   mx-auto overflow-hidden ">
    
    <div
    className={`flex  transition-transform duration-500 ease-in-out
        `} 
    style={{ transform: `translateX(-${current * 100}%)` }}    
        >
        {
        grouped.map((pair,index)=>(
            <div
            key={index}
            className='w-full flex-shrink-0 flex flex-col lg:flex-row gap-4 '
            >
                {
                pair.map((review,index)=>(
                    
                    <div
                    key={index}
                    className='py-4 px-4 flex flex-col   gap-9 justify-between border  rounded-lg'>
                    
                     <div className='flex flex-col gap-5 '>

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


        ))

        }
    </div>
    
    </div>


    </div>
  )
}

export default Reviews
