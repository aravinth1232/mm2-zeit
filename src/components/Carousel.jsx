import React, { useState } from "react";

import image1 from "../assets/1.png"
import image2 from "../assets/2.png"
import image3 from "../assets/3.png"

const Carousel = () => {
  const images = [
    { id: 1, name: "White Scaven", src: image1 },
    { id: 2, name: "Black Horse", src: image2 },
    { id: 3, name: "Pulsar 150", src: image3 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>


    <div className="flex flex-col gap-6   p-4 lg:p-12 font-primary">

      <h1 
       className="text-lg lg:text-2xl text-tertiary-900  font-bold "
      >Highlights of Our Work</h1>

    <div className="flex flex-col lg:flex-row  select-none">

      <div 
      
      className=" flex-1 flex flex-col  justify-around items-center gap-4  ">
      {/* <p className="text-2xl text-tertiary-900 font-bold">{images[currentIndex].name}</p> */}

      {/* Navigation Buttons */}
      <div className="flex flex-col gap-4">
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => setCurrentIndex(index)}
            className={`relative w-16 h-16 border-[3px] rounded-full p-[2px]  ${
              index === currentIndex ? "border-tertiary-800 " : " border-none"
            }`}
          >
            <img
              src={image.src}
              alt={image.name}
              className="w-full h-full object-cover rounded-full"
            />
          </button>
        ))}
      </div>

      </div>

      {/* Carousel Image */}
      <div className=" relative lg:w-[800px] h-96  mx-auto overflow-hidden ">
        {images.map((image, index) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.name}
            className={`absolute inset-0 w-full h-full object-fill object-top cursor-pointer transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}


          />
        ))}

    <p className="absolute top-5 left-5 bg-transparent backdrop-blur-xl text-2xl text-tertiary-900 font-bold">{images[currentIndex].name}</p>

      </div>

    
    
    

    </div>

    </div>
    </>
  );
};


 
export default Carousel;
