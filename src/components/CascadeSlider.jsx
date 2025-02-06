import React, { useState } from "react";

// import image1 from "../assets/1.png"
// import image2 from "../assets/2.png"
// import image3 from "../assets/3.png"


import image1 from "../assets/13.png"
import image2 from "../assets/14.png"
import image3 from "../assets/15.png"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";




const slides = [
  { id: 1, title: "White Scaven", image: image1 },
  { id: 2, title: "Black Horse", image: image2 },
  { id: 3, title: "Pulsar 150", image: image3 },
  
  
];

const CascadeSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // const goToSlide = (index) => {
  //   setCurrentIndex(index);
  // };

  return (
    <section className="hidden lg:flex flex-col gap-3   py-4 lg:p-12 font-primary ">
      <h1 
       className="text-lg lg:text-2xl text-tertiary-900 px-4  font-bold "
      >Highlights of Our Work</h1>
      
      <div className="relative   h-[80vh] overflow-hidden  ">
        {slides.map((slide, index) => {
          const isNow = index === currentIndex;
          const isPrev = index === (currentIndex - 1 + slides.length) % slides.length;
          const isNext = index === (currentIndex + 1) % slides.length;

          return (
            <div
              key={slide.id}
              className={`absolute top-1/2    left-1/2  transform transition-transform duration-1000  overflow-hidden  ${
                isNow
                  ? "-translate-x-1/2   -translate-y-1/2 scale-90 z-10 opacity-100"
                  : isPrev
                  ? " -translate-x-full    -translate-y-1/2 scale-[0.4] z-5 opacity-50"
                  : isNext
                  ? "translate-x-1  -translate-y-1/2 scale-[0.4] z-5 opacity-50 "
                  : "scale-50 opacity-100 z-0 "
              }`}
              style={{
                marginRight: isNow || isPrev ? "20px" : "0", // Highlight: Adjust gap
              }}
            >
              <Link 
              to="/contact"
              className="group">
              <img
                src={slide.image}
                alt={slide.title}
                className={`relative w-3/4 mx-auto h-auto transition-all duration-500 rounded-lg  object-contain cursor-pointer shadow-lg group 
                  ${isNow ? "group-hover:opacity-80 hover:scale-y-105" : "" }
                  `}
                loading="lazy"
              />
              <div 
              className="absolute bottom-1 -translate-x-1/2 left-1/2 bo bg-black opacity-70 w-3/4 flex flex-row justify-center rounded-lg items-center px-4 py-2  text-tertiary-200 "
              >
               <h3 className=" text-lg text-tertiary-100 font-bold ">{slide.title}</h3>
               
               </div>
               {
                isNow && <ExternalLink className="group-hover:opacity-100  transition-all duration-500  opacity-0   absolute  top-5 right-[15%]  w-6 h-6 text-tertiary-800"/>
               }
               
               
              </Link>
              
            
            </div>
          );
        })}
        <button
          className="absolute left-4 top-1/2 transform rounded-[50%] -translate-y-1/2 bg-gray-800 text-white p-2  "
          onClick={prevSlide}
        >
          <ChevronLeft />
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2  rounded-[50%]"
          onClick={nextSlide}
        >
         <ChevronRight />
        </button>
      </div>

      {/* <div className="flex space-x-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
          />
        ))}
      </div> */}


    </section>
  );
};

export default CascadeSlider;
