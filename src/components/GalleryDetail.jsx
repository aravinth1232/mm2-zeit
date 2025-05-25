import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import image1 from "../assets/1.png"
import image2 from "../assets/2.png"
import image3 from "../assets/3.png"
import { div } from 'framer-motion/client';

const GalleryDetail = () => {


useEffect(() => {
    window.scrollTo(0, 0);
    window.onbeforeunload = () => {
        window.scrollTo(0, 0);
    };
    }, []);

const galleryData = [
  {
    name: "White Scaven",
    slug: "white-scaven",
    images: [
  {
    src: image1,
    text: "This is the front view of the White Scaven after complete remodeling. The headlamp section was upgraded with LED lighting and the mudguard was reshaped for a sharper look."
  },
  {
    src: image2,
    text: "Side profile showcases a custom matte black and white dual-tone paint job. We also installed a new alloy wheel and enhanced the suspension setup for a better ride experience."
  },
  {
    src: image3,
    text: "This rear view highlights the new seat cushioning with premium leatherette finish. Tail lights were modified for a sleeker look, completing the aesthetic overhaul."
  }
]
  },


 
 
];


const { name } = useParams();
const data = galleryData.find(item => item.slug === name);

  if (!data) return <p className="text-center">Gallery not found</p>;
  return (
     <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center font-primary ">{data.name}</h1>

      <div className="grid grid-cols-1 gap-8">
        {data.images.map((img, index) => (
        
        <div 
        key={index}
        className={` flex  items-center
        ${index%2 === 0 ? "flex-row-reverse"  : "flex-row"  }
         `}>
        <img  src={img.src} alt={data.name} 
        className="rounded w-1/2 h-80 object-contain  " />
         <div className="w-1/2 px-4 ">
        <h1 className="font-primary text-lg text-tertiary-900">
          {img.text}
        </h1>
      </div>
        </div>
        
          
        ))}
      </div>
    </div>
  )
}

export default GalleryDetail
