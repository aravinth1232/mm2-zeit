import React, { useEffect } from 'react'
import { Wrench,CircleGauge,Hammer, History, Brush,  Package } from 'lucide-react';
import { useParams } from 'react-router-dom';

import image1 from "../assets/services/bikebuild1.webp"
import image2 from "../assets/services/bikebuild2.webp"
import image3 from "../assets/services/bikebuild3.webp"


const OfferDetail = () => {



    const offerData = [
      {
        name: "Custom Bike Builds",
        icon: Wrench,
        slug: "custom-bike-builds",
        images: [

      {
        src :image1,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam perferendis possimus dignissimos quis nesciunt ducimus iste sint molestias sequi, hic velit quasi culpa blanditiis animi iure fugiat eius consequatur aut necessitatibus praesentium quas tenetur. Dolor minus ipsa aperiam placeat libero ipsum, quod neque facere vel eveniet aliquam quas quam suscipit?"
      },
      {
        src :image2,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam perferendis possimus dignissimos quis nesciunt ducimus iste sint molestias sequi, hic velit quasi culpa blanditiis animi iure fugiat eius consequatur aut necessitatibus praesentium quas tenetur. Dolor minus ipsa aperiam placeat libero ipsum, quod neque facere vel eveniet aliquam quas quam suscipit?"
      },
      {
        src :image3,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam perferendis possimus dignissimos quis nesciunt ducimus iste sint molestias sequi, hic velit quasi culpa blanditiis animi iure fugiat eius consequatur aut necessitatibus praesentium quas tenetur. Dolor minus ipsa aperiam placeat libero ipsum, quod neque facere vel eveniet aliquam quas quam suscipit?"
      }
    ]
      },
    
      {
        name: "Performance Upgrades",
        icon: CircleGauge,
        slug: "performance-upgrades",
        images: [

      {
        src :image1,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam perferendis possimus dignissimos quis nesciunt ducimus iste sint molestias sequi, hic velit quasi culpa blanditiis animi iure fugiat eius consequatur aut necessitatibus praesentium quas tenetur. Dolor minus ipsa aperiam placeat libero ipsum, quod neque facere vel eveniet aliquam quas quam suscipit?"
      },
      {
        src :image2,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam perferendis possimus dignissimos quis nesciunt ducimus iste sint molestias sequi, hic velit quasi culpa blanditiis animi iure fugiat eius consequatur aut necessitatibus praesentium quas tenetur. Dolor minus ipsa aperiam placeat libero ipsum, quod neque facere vel eveniet aliquam quas quam suscipit?"
      },
      {
        src :image3,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam perferendis possimus dignissimos quis nesciunt ducimus iste sint molestias sequi, hic velit quasi culpa blanditiis animi iure fugiat eius consequatur aut necessitatibus praesentium quas tenetur. Dolor minus ipsa aperiam placeat libero ipsum, quod neque facere vel eveniet aliquam quas quam suscipit?"
      }
    ]
      },
    

     
    ];




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
    <div className="px-4 py-8 flex flex-col gap-10 ">
        
        {/* page title */}
        <div className=' flex flex-row gap-4  justify-center items-center px-4'>
            <h1
            className="text-2xl font-semibold  text-center font-primary "
            >{data.name}</h1>
            <data.icon className='w-8 h-8' />
        </div>

        {/* details */}

         <div className="grid grid-cols-1 gap-8">
        {data.images.map((img, index) => (
        
        <div 
        key={index}
        className={` flex  items-center
        ${index%2 === 0 ? "flex-row-reverse"  : "flex-row"  }
         `}>
        
        {/* image */}
        <div className={`w-1/2 group  rounded-lg flex  justify-center overflow-hidden p-2 cursor-pointer
                
          `}>
        <img  src={img.src} alt={data.name} 
        className=" h-72   object-contain rounded-lg group-hover:scale-125 transform origin-center ease-in-out transition-all duration-300  " />
        </div>

        {/* text */}
         <div className="w-1/2 px-4 py-4 bg-tertiary-50 shadow-sm rounded-lg flex flex-col gap-6 ">
         <h1 className="font-primary text-lg font-bold text-tertiary-800">{img.title}</h1>
        <h1 className="font-primary text-lg text-tertiary-600">
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
