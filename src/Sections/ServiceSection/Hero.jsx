import React from "react";
import hero from "../../assets/Service/hero.png";

const Hero = () => {
  return (
    <section
      className="w-full min-h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text */}
      <h1 className="relative text-white text-3xl md:text-5xl font-semibold text-center px-4">
        Our Core IT Services
      </h1>
    </section>
  );
};

export default Hero;
