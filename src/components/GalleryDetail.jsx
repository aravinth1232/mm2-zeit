import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import image1 from "../assets/1.png"
import image2 from "../assets/2.png"
import image3 from "../assets/3.png"
import image4 from "../assets/4.png"


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
    src: image4,
    title: "Front View",
    description: "This is the front view of the White Scaven after complete remodeling. The headlamp section was upgraded with LED lighting and the mudguard was reshaped for a sharper look."
  },
  {
    src: image3,
    title: "Side View",
    description: "Side profile showcases a custom matte black and white dual-tone paint job. We also installed a new alloy wheel and enhanced the suspension setup for a better ride experience."
  },
  {
    src: image1,
    title: "Rear View",
    description: "This rear view highlights the new seat cushioning with premium leatherette finish. Tail lights were modified for a sleeker look, completing the aesthetic overhaul."
  }
]
  },


 
 
];


const { name } = useParams();
const data = galleryData.find(item => item.slug === name);

  if (!data) return <p className="text-center">Gallery not found</p>;
  return (
     <div className="px-4 py-8 flex flex-col gap-8 ">
      <h1 className="text-2xl font-semibold  text-center font-primary ">{data.name}</h1>

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

export default GalleryDetail
