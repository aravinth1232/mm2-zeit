import React from "react";
import image1 from "../assets/1.png"
import image2 from "../assets/2.png"
import image3 from "../assets/3.png"
import image4 from "../assets/4.png"
import image5 from "../assets/5.png"
import image6 from "../assets/6.png"
import image7 from "../assets/7.png"
import image8 from "../assets/8.png"
import image9 from "../assets/9.png"
import image10 from "../assets/10.png"
import { ArrowUpRight, ChevronDown, ChevronUp, ExternalLink, MoveUp } from "lucide-react";

const Gallery = () => {
  const images = [
    {id:1, src: image1 , name: "White Scaven" },
    {id:2, src: image2, name: "Black Horse" },
    {id:3, src:image3, name: "Pulsar 150" },
    {id:4, src:  image4, name: "Pulsar 150" },
    {id:5, src: image5, name: "Honda Triger 150" },
    {id:6, src:  image6, name: "Honda Triger 150" },
    {id:7, src:  image7, name: "Honda Triger 150" },
    {id:8, src:  image8, name: "Pulsar 150" },
    {id:9, src:  image9, name: "Apache RTR 160" },
    {id:10, src:  image10, name: "Apache RTR 160" },

  ];

  return (
    

    <div className="flex flex-col gap-8 items-start justify-start font-primary  py-8">
    
    <div>
      <h1
      className="text-xl lg:text-2xl px-4   text-tertiary-900  font-bold  " 
      >Our Works Till Date</h1>
    </div>

    <div className="self-center grid grid-cols-2 lg:grid-cols-4 gap-1 p-1 font-primary ">
      {images.map((image, index) => (
        <div
          key={index}
          className={`relative group w-full  lg:h-[350px] overflow-hidden  rounded-md cursor-pointer 
            
            ${image.id === 5 || image.id === 10 ? "col-span-2 row-span-1" : ""}

            `}
        >
          <img
            src={image.src}
            alt={image.name}
            className="w-full h-full object-cover opacity-90 group-hover:opacity-80  group-hover:scale-105 transition-all duration-[500ms]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-tertiary-900 rounded-md bg-opacity-30 flex py-3 items-start justify-between px-4 translate-y-full
          group-hover:translate-y-3/4
          transition-all duration-[500ms]">
           <span className="text-tertiary-50 text-xs lg:text-lg font-semibold capitalize">
              {image.name}
            </span>        
            <ArrowUpRight className="w-6  h-6 text-tertiary-50 hover:text-black hover:scale-125 transition-all duration-[400ms]" />   
          </div> 
          
          {/* <div
          className=" absolute  top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-[800ms]"
          >

            <ExternalLink className="w-5  h-5 text-tertiary-900 hover:text-black hover:scale-125 transition-all duration-[400ms]" />
          </div> */}



          {/* <div className="absolute inset-0 bg-tertiary-700 bg-opacity-40 flex items-start justify-center translate-y-full
          group-hover:translate-y-0
          transition-all duration-500">
            <ChevronUp className="text-tertiary-50" />
            
          </div>
          <div className="absolute inset-0 bg-tertiary-900 rounded-md bg-opacity-60 flex py-3 items-start justify-center translate-y-full
          group-hover:translate-y-3/4
          transition-all duration-[800ms]">
           <span className="text-tertiary-50 text-xs lg:text-lg font-semibold capitalize">
              {image.name}
            </span>
          </div> */}


        </div>
      ))}
    </div>

    
    </div>

  );
};

export default Gallery;
