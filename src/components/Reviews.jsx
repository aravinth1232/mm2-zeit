import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote, Star, StarHalf } from 'lucide-react';
import img1 from "../assets/reviews/review1.webp"
import img2 from "../assets/reviews/review2.webp"
import img3 from "../assets/reviews/review3.webp"

const Reviews = () => {

    
    


    const reviews = [
    {
    title : "Karthik R",
    decsription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut suscipit, odio ex, saepe consectetur beatae cupiditate qui, quis accusamus nam dignissimos! Delectus quis nobis accusamus eius eos suscipit, nemo magni neque animi eligendi nam voluptatum!",
    image : img1,
    place : "Chennai"      
    },
    {
    title : "Arun Prakash",
    decsription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut suscipit, odio ex, saepe consectetur beatae cupiditate qui, quis accusamus nam dignissimos! Delectus quis nobis accusamus eius eos suscipit, nemo magni neque animi eligendi nam voluptatum!",
    image : img2,
    place : "Bangalore"      
    },
    {
    title : "Sneha M",
    decsription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut suscipit, odio ex, saepe consectetur beatae cupiditate qui, quis accusamus nam dignissimos! Delectus quis nobis accusamus eius eos suscipit, nemo magni neque animi eligendi nam voluptatum!",
    image : img3,
    place : "Coimbatore"      
    },
    {
    title : "Divya S",
    decsription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut suscipit, odio ex, saepe consectetur beatae cupiditate qui, quis accusamus nam dignissimos! Delectus quis nobis accusamus eius eos suscipit, nemo magni neque animi eligendi nam voluptatum!",
    image : img1,
    place : " Hyderabad"      
    },
    {
    title : "Rohan K",
    decsription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut suscipit, odio ex, saepe consectetur beatae cupiditate qui, quis accusamus nam dignissimos! Delectus quis nobis accusamus eius eos suscipit, nemo magni neque animi eligendi nam voluptatum!",
    image : img2,
    place : "Madurai"      
    },
    {
    title : "Meera N",
    decsription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut suscipit, odio ex, saepe consectetur beatae cupiditate qui, quis accusamus nam dignissimos! Delectus quis nobis accusamus eius eos suscipit, nemo magni neque animi eligendi nam voluptatum!",
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
    
    
    const [current, setCurrent] = useState(0);
    const [isMobile,setIsMobile] = useState(window.innerWidth < 768);
   
    useEffect(()=>{
        const handleResize= ()=>{
            setIsMobile(window.innerWidth < 768)
        }
        window.addEventListener("resize",handleResize);

        return ()=> window.removeEventListener("resize",handleResize)
    },[]);

    const perView = isMobile ? 1 : 3 ;
    const grouped = groupSlides(reviews, perView);
    const total = grouped.length  

    
    

    //carousel-slider button behaviour
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
      
      <div className='flex flex-row gap-5 lg:gap-8'>
       {
        reviewButtons.map(({icon:Icon},index)=>(
            <motion.button
            whileHover={{scale:1.1}}
            whileTap={{scale:0.8}}
            key={index}
            className='border-2 rounded-full p-1'
            onClick={index=== 0 ? prev : next }
            >
                <Icon 
                 className='w-6 h-6 '
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
                    
                    <div className='flex flex-col gap-9 '>

                        <div className='flex flex-row items-center justify-between'>
                        <Quote 
                        className='w-6  h-6 text-tertiary-600' />
                        <div className=' flex flex-row'>
                        {
                            stars.map(({icon:Icon},index)=>(
                            <Icon 
                            fill={index < 4 ? "#000000" : "#ffffff"}
                            className='w-5 h-5 text-tertiary-600'
                            key={index}
                            />

                            ))
                        }
                        </div>
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
