import React, { useEffect, useState } from "react";

const ParallaxSection = ({ bgImage, text }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="relative h-full flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPositionY: `${offset * 0.5}px`,
      }}
    >
      <h1 className="text-4xl md:text-6xl text-white font-bold text-shadow-lg">
        {text}
      </h1>
    </div>
  );
};

export default ParallaxSection;
